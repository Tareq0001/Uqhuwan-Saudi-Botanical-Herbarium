import * as THREE from 'three';
import gsap from 'gsap';
import { PlantSpecimen } from '../types';
import { createProceduralPlant, PlantGrowthModel } from './proceduralPlants';

export type LightingMode = 'daylight' | 'greenhouse' | 'bioluminescent';
export type CameraPreset = 'reset' | 'macro' | 'canopy' | 'stem';

export class PlantSceneManager {
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private clock: THREE.Clock;
  private animFrameId: number | null = null;

  // Active Model
  private currentPlant: PlantGrowthModel | null = null;
  private currentSpecimen: PlantSpecimen | null = null;

  // Lights
  private ambientLight: THREE.AmbientLight;
  private mainSunLight: THREE.DirectionalLight;
  private fillLight: THREE.PointLight;
  private rimLight: THREE.DirectionalLight;
  private specimenSpot: THREE.SpotLight;

  // Ground Pediment
  private pedimentMesh: THREE.Mesh;
  private gridHelper: THREE.GridHelper;

  // Orbit / Mouse Interaction
  private isPointerDown: boolean = false;
  private prevPointerX: number = 0;
  private prevPointerY: number = 0;
  private spherical: THREE.Spherical = new THREE.Spherical(4.8, Math.PI / 2.3, 0.4);
  private targetLookAt: THREE.Vector3 = new THREE.Vector3(0, 1.6, 0);
  private autoRotate: boolean = true;
  private autoRotateSpeed: number = 0.4;
  private isWireframe: boolean = false;

  constructor(container: HTMLElement) {
    this.container = container;
    this.scene = new THREE.Scene();
    this.clock = new THREE.Clock();

    // Fog for depth
    this.scene.fog = new THREE.FogExp2(0x021f18, 0.045);

    // Camera
    const aspect = container.clientWidth / (container.clientHeight || 1);
    this.camera = new THREE.PerspectiveCamera(42, aspect, 0.1, 100);
    this.updateCameraFromSpherical();

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;

    container.appendChild(this.renderer.domElement);

    // Lighting setup
    this.ambientLight = new THREE.AmbientLight(0xdcfce7, 0.9);
    this.scene.add(this.ambientLight);

    this.mainSunLight = new THREE.DirectionalLight(0xfef08a, 2.2);
    this.mainSunLight.position.set(5, 9, 6);
    this.mainSunLight.castShadow = true;
    this.mainSunLight.shadow.mapSize.width = 1024;
    this.mainSunLight.shadow.mapSize.height = 1024;
    this.scene.add(this.mainSunLight);

    this.fillLight = new THREE.PointLight(0x34d399, 1.4, 15);
    this.fillLight.position.set(-4, 3, -3);
    this.scene.add(this.fillLight);

    this.rimLight = new THREE.DirectionalLight(0x38bdf8, 1.2);
    this.rimLight.position.set(-4, 5, -6);
    this.scene.add(this.rimLight);

    this.specimenSpot = new THREE.SpotLight(0xfef9c3, 3.0, 12, Math.PI / 4, 0.4);
    this.specimenSpot.position.set(0, 8, 2);
    this.specimenSpot.target.position.set(0, 1.5, 0);
    this.scene.add(this.specimenSpot);
    this.scene.add(this.specimenSpot.target);

    // Botanical Specimen Pedestal
    const pedimentGeo = new THREE.CylinderGeometry(2.2, 2.4, 0.15, 48);
    const pedimentMat = new THREE.MeshStandardMaterial({
      color: 0x064e3b,
      roughness: 0.35,
      metalness: 0.6
    });
    this.pedimentMesh = new THREE.Mesh(pedimentGeo, pedimentMat);
    this.pedimentMesh.position.y = -0.075;
    this.pedimentMesh.receiveShadow = true;
    this.scene.add(this.pedimentMesh);

    // Concentric brass ring
    const ringGeo = new THREE.RingGeometry(2.0, 2.15, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      side: THREE.DoubleSide
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = -Math.PI / 2;
    ringMesh.position.y = 0.005;
    this.scene.add(ringMesh);

    // Subtle grid
    this.gridHelper = new THREE.GridHelper(5, 10, 0x10b981, 0x047857);
    this.gridHelper.position.y = 0.002;
    this.scene.add(this.gridHelper);

    this.bindEvents();
    this.animate();
  }

  private updateCameraFromSpherical() {
    this.camera.position.setFromSpherical(this.spherical).add(this.targetLookAt);
    this.camera.lookAt(this.targetLookAt);
  }

  public loadPlant(specimen: PlantSpecimen, initialGrowth: number = 1.0) {
    if (this.currentPlant) {
      this.scene.remove(this.currentPlant.rootGroup);
    }

    this.currentSpecimen = specimen;
    this.currentPlant = createProceduralPlant(specimen);
    this.currentPlant.setWireframe(this.isWireframe);
    this.currentPlant.setGrowth(initialGrowth);
    this.scene.add(this.currentPlant.rootGroup);

    // Smooth focal reset
    this.setCameraPreset('reset');
  }

  public setGrowth(progress: number) {
    if (this.currentPlant) {
      this.currentPlant.setGrowth(progress);
    }
  }

  public animateGrowth(targetProgress: number, durationSec: number = 1.2) {
    if (!this.currentPlant) return;
    const current = { p: 0.5 };
    gsap.to(current, {
      p: targetProgress,
      duration: durationSec,
      ease: 'power2.out',
      onUpdate: () => {
        this.setGrowth(current.p);
      }
    });
  }

  public setLightingMode(mode: LightingMode) {
    if (mode === 'daylight') {
      this.renderer.toneMappingExposure = 1.15;
      this.scene.fog?.color.setHex(0x022c22);
      this.ambientLight.color.setHex(0xfef9c3);
      this.ambientLight.intensity = 0.95;
      this.mainSunLight.color.setHex(0xffedd5);
      this.mainSunLight.intensity = 2.4;
      this.fillLight.color.setHex(0x86efac);
      this.rimLight.color.setHex(0xbae6fd);
    } else if (mode === 'greenhouse') {
      this.renderer.toneMappingExposure = 1.25;
      this.scene.fog?.color.setHex(0x064e3b);
      this.ambientLight.color.setHex(0xa7f3d0);
      this.ambientLight.intensity = 1.2;
      this.mainSunLight.color.setHex(0x6ee7b7);
      this.mainSunLight.intensity = 2.0;
      this.fillLight.color.setHex(0x34d399);
      this.rimLight.color.setHex(0xfef08a);
    } else {
      // Bioluminescent night
      this.renderer.toneMappingExposure = 1.45;
      this.scene.fog?.color.setHex(0x02110c);
      this.ambientLight.color.setHex(0x065f46);
      this.ambientLight.intensity = 0.4;
      this.mainSunLight.color.setHex(0x22d3ee);
      this.mainSunLight.intensity = 1.2;
      this.fillLight.color.setHex(0xa855f7);
      this.rimLight.color.setHex(0xec4899);
    }
  }

  public setCameraPreset(preset: CameraPreset) {
    let targetRadius = 4.8;
    let targetPhi = Math.PI / 2.3;
    let targetTheta = this.spherical.theta;
    const targetLook = new THREE.Vector3(0, 1.6, 0);

    if (preset === 'macro') {
      targetRadius = 1.8;
      targetPhi = Math.PI / 2.6;
      targetLook.set(0, 2.2, 0);
    } else if (preset === 'canopy') {
      targetRadius = 3.8;
      targetPhi = Math.PI / 5.0; // Looking down from above
      targetLook.set(0, 1.8, 0);
    } else if (preset === 'stem') {
      targetRadius = 2.6;
      targetPhi = Math.PI / 2.1;
      targetLook.set(0, 0.7, 0);
    } else {
      // Reset full specimen
      targetRadius = 4.8;
      targetPhi = Math.PI / 2.3;
      targetLook.set(0, 1.6, 0);
    }

    gsap.to(this.spherical, {
      radius: targetRadius,
      phi: targetPhi,
      theta: targetTheta,
      duration: 1.0,
      ease: 'power3.out',
      onUpdate: () => this.updateCameraFromSpherical()
    });

    gsap.to(this.targetLookAt, {
      x: targetLook.x,
      y: targetLook.y,
      z: targetLook.z,
      duration: 1.0,
      ease: 'power3.out',
      onUpdate: () => this.updateCameraFromSpherical()
    });
  }

  public toggleWireframe(): boolean {
    this.isWireframe = !this.isWireframe;
    if (this.currentPlant) {
      this.currentPlant.setWireframe(this.isWireframe);
    }
    return this.isWireframe;
  }

  public toggleAutoRotate(): boolean {
    this.autoRotate = !this.autoRotate;
    return this.autoRotate;
  }

  private bindEvents() {
    const el = this.renderer.domElement;

    el.addEventListener('pointerdown', (e) => {
      this.isPointerDown = true;
      this.prevPointerX = e.clientX;
      this.prevPointerY = e.clientY;
    });

    window.addEventListener('pointermove', (e) => {
      if (!this.isPointerDown) return;
      const dx = e.clientX - this.prevPointerX;
      const dy = e.clientY - this.prevPointerY;
      this.prevPointerX = e.clientX;
      this.prevPointerY = e.clientY;

      this.spherical.theta -= dx * 0.007;
      this.spherical.phi = Math.max(0.15, Math.min(Math.PI / 2 - 0.05, this.spherical.phi - dy * 0.007));
      this.updateCameraFromSpherical();
    });

    window.addEventListener('pointerup', () => {
      this.isPointerDown = false;
    });

    el.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.spherical.radius = Math.max(1.2, Math.min(8.0, this.spherical.radius + e.deltaY * 0.004));
      this.updateCameraFromSpherical();
    }, { passive: false });

    window.addEventListener('resize', () => {
      if (!this.container) return;
      const w = this.container.clientWidth;
      const h = this.container.clientHeight;
      this.camera.aspect = w / (h || 1);
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
    });
  }

  private animate = () => {
    this.animFrameId = requestAnimationFrame(this.animate);
    const delta = this.clock.getDelta();
    const elapsed = this.clock.getElapsedTime();

    if (this.autoRotate && !this.isPointerDown) {
      this.spherical.theta += delta * this.autoRotateSpeed * 0.35;
      this.updateCameraFromSpherical();
    }

    if (this.currentPlant) {
      this.currentPlant.update(delta, elapsed);
    }

    this.renderer.render(this.scene, this.camera);
  };

  public dispose() {
    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
    }
    this.renderer.dispose();
  }
}
