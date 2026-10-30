import * as THREE from 'three';
import { PlantSpecimen } from '../types';

export interface PlantGrowthModel {
  rootGroup: THREE.Group;
  stemGroup: THREE.Group;
  foliageGroup: THREE.Group;
  flowerGroup: THREE.Group;
  fruitGroup: THREE.Group;
  pollenSystem: THREE.Points;
  specimen: PlantSpecimen;
  setGrowth: (progress: number) => void;
  update: (delta: number, elapsed: number) => void;
  setWireframe: (wireframe: boolean) => void;
}

export function createProceduralPlant(specimen: PlantSpecimen): PlantGrowthModel {
  const rootGroup = new THREE.Group();
  const stemGroup = new THREE.Group();
  const foliageGroup = new THREE.Group();
  const flowerGroup = new THREE.Group();
  const fruitGroup = new THREE.Group();

  rootGroup.add(stemGroup);
  rootGroup.add(foliageGroup);
  rootGroup.add(flowerGroup);
  rootGroup.add(fruitGroup);

  // Materials
  const barkMat = new THREE.MeshStandardMaterial({
    color: specimen.renderParams.stemColor,
    roughness: 0.85,
    metalness: 0.1,
    flatShading: true
  });

  const branchMat = new THREE.MeshStandardMaterial({
    color: specimen.renderParams.branchColor,
    roughness: 0.75,
    metalness: 0.05
  });

  const leafMat = new THREE.MeshStandardMaterial({
    color: specimen.renderParams.leafColor,
    roughness: 0.5,
    metalness: 0.1,
    side: THREE.DoubleSide
  });

  const flowerMat = new THREE.MeshStandardMaterial({
    color: specimen.renderParams.flowerColor,
    roughness: 0.4,
    metalness: 0.05,
    side: THREE.DoubleSide
  });

  const stamenMat = new THREE.MeshStandardMaterial({
    color: specimen.renderParams.pollenColor,
    roughness: 0.3,
    metalness: 0.2
  });

  const fruitMat = new THREE.MeshStandardMaterial({
    color: specimen.renderParams.flowerColor,
    roughness: 0.6,
    metalness: 0.15
  });

  // Track animatable meshes
  const leafNodes: { mesh: THREE.Object3D; baseScale: THREE.Vector3; baseRot: THREE.Euler; basePos: THREE.Vector3; triggerProgress: number }[] = [];
  const flowerNodes: { mesh: THREE.Object3D; baseScale: THREE.Vector3; baseRot: THREE.Euler; petals: THREE.Object3D[]; triggerProgress: number }[] = [];
  const stemSegments: { mesh: THREE.Object3D; startY: number; targetY: number; targetScaleY: number }[] = [];

  // ==========================================
  // PROCEDURAL PLANT GEOMETRY BUILDERS
  // ==========================================
  if (specimen.id === 'juniperus_procera') {
    // Ancient twisted trunk with conical evergreen pyramidal crown
    const trunkCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0.08, 0.8, -0.05),
      new THREE.Vector3(-0.06, 1.8, 0.08),
      new THREE.Vector3(0.04, 2.8, -0.04),
      new THREE.Vector3(0, 3.8, 0)
    ]);
    const trunkGeo = new THREE.TubeGeometry(trunkCurve, 32, 0.18, 12, false);
    const trunkMesh = new THREE.Mesh(trunkGeo, barkMat);
    trunkMesh.castShadow = true;
    stemGroup.add(trunkMesh);
    stemSegments.push({ mesh: trunkMesh, startY: 0, targetY: 0, targetScaleY: 1 });

    // Pyramid branch whorls
    const tiers = 8;
    for (let t = 0; t < tiers; t++) {
      const tierHeight = 0.8 + t * 0.38;
      const tierRadius = (1.0 - t / tiers) * 1.5 + 0.3;
      const branchesInTier = 5 + Math.floor(Math.random() * 3);

      for (let b = 0; b < branchesInTier; b++) {
        const angle = (b / branchesInTier) * Math.PI * 2 + t * 0.45;
        const branchLen = tierRadius * (0.8 + Math.random() * 0.4);
        const branchGroup = new THREE.Group();
        branchGroup.position.set(0, tierHeight, 0);

        const branchCurve = new THREE.CatmullRomCurve3([
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(Math.cos(angle) * branchLen * 0.5, 0.12, Math.sin(angle) * branchLen * 0.5),
          new THREE.Vector3(Math.cos(angle) * branchLen, -0.08, Math.sin(angle) * branchLen)
        ]);
        const branchGeo = new THREE.TubeGeometry(branchCurve, 12, 0.05 * (1 - t / tiers) + 0.02, 8, false);
        const branchMesh = new THREE.Mesh(branchGeo, branchMat);
        branchGroup.add(branchMesh);
        stemGroup.add(branchGroup);

        // Needle foliage clusters
        const clusterCount = 4;
        for (let c = 0; c < clusterCount; c++) {
          const u = (c + 1) / (clusterCount + 1);
          const pos = branchCurve.getPoint(u);
          const needleCluster = new THREE.Group();
          needleCluster.position.copy(pos);

          // Needles
          const needleGeo = new THREE.ConeGeometry(0.08, 0.35, 5);
          const needleMesh = new THREE.Mesh(needleGeo, leafMat);
          needleMesh.rotation.x = Math.PI * 0.5;
          needleCluster.add(needleMesh);

          foliageGroup.add(needleCluster);
          leafNodes.push({
            mesh: needleCluster,
            baseScale: new THREE.Vector3(1, 1, 1),
            baseRot: needleCluster.rotation.clone(),
            basePos: pos.clone(),
            triggerProgress: 0.2 + (t / tiers) * 0.5
          });

          // Juniper Blue Berry Cones
          if (t < 5 && Math.random() > 0.45) {
            const berryGeo = new THREE.SphereGeometry(0.065, 8, 8);
            const berryMesh = new THREE.Mesh(berryGeo, fruitMat);
            berryMesh.position.set(pos.x, pos.y - 0.06, pos.z);
            fruitGroup.add(berryMesh);
          }
        }
      }
    }
  } else if (specimen.id === 'rosa_damascena_taif') {
    // Royal Damask Rose: Elegant arching thorny stems with 30-petal spiral blooms
    const mainStem = new THREE.CylinderGeometry(0.08, 0.12, 2.6, 12);
    mainStem.translate(0, 1.3, 0);
    const stemMesh = new THREE.Mesh(mainStem, branchMat);
    stemGroup.add(stemMesh);
    stemSegments.push({ mesh: stemMesh, startY: 0, targetY: 0, targetScaleY: 1 });

    // Lateral flowering canes
    const canes = 5;
    for (let i = 0; i < canes; i++) {
      const caneHeight = 1.0 + i * 0.32;
      const caneAngle = (i / canes) * Math.PI * 2 + 0.3;
      const caneGroup = new THREE.Group();
      caneGroup.position.set(0, caneHeight, 0);

      const caneCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(Math.cos(caneAngle) * 0.5, 0.4, Math.sin(caneAngle) * 0.5),
        new THREE.Vector3(Math.cos(caneAngle) * 1.1, 0.75, Math.sin(caneAngle) * 1.1)
      ]);
      const caneGeo = new THREE.TubeGeometry(caneCurve, 16, 0.045, 8, false);
      const caneMesh = new THREE.Mesh(caneGeo, branchMat);
      caneGroup.add(caneMesh);
      stemGroup.add(caneGroup);

      // Serrated compound rose leaves (5 leaflets per group)
      for (let l = 0; l < 3; l++) {
        const u = 0.3 + l * 0.25;
        const leafPos = caneCurve.getPoint(u);
        const roseLeafGroup = new THREE.Group();
        roseLeafGroup.position.copy(leafPos);

        for (let fl = -2; fl <= 2; fl++) {
          const leafletGeo = new THREE.ConeGeometry(0.08, 0.24, 4);
          leafletGeo.scale(1, 1, 0.3);
          const leaflet = new THREE.Mesh(leafletGeo, leafMat);
          leaflet.position.set(fl * 0.07, Math.abs(fl) * -0.03, 0);
          leaflet.rotation.z = fl * -0.25;
          roseLeafGroup.add(leaflet);
        }

        foliageGroup.add(roseLeafGroup);
        leafNodes.push({
          mesh: roseLeafGroup,
          baseScale: new THREE.Vector3(1, 1, 1),
          baseRot: roseLeafGroup.rotation.clone(),
          basePos: leafPos.clone(),
          triggerProgress: 0.15 + (i / canes) * 0.4
        });
      }

      // Grand Thirty-Petal Rose Flower at cane terminus
      const terminus = caneCurve.getPoint(1.0);
      const flowerHead = new THREE.Group();
      flowerHead.position.copy(terminus);

      // Central receptacle
      const receptGeo = new THREE.SphereGeometry(0.09, 12, 12);
      const receptMesh = new THREE.Mesh(receptGeo, stamenMat);
      flowerHead.add(receptMesh);

      // Golden stamens
      const stamensCount = 24;
      for (let s = 0; s < stamensCount; s++) {
        const stamenAngle = (s / stamensCount) * Math.PI * 2;
        const stamenMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.12), stamenMat);
        stamenMesh.position.set(Math.cos(stamenAngle) * 0.07, 0.08, Math.sin(stamenAngle) * 0.07);
        flowerHead.add(stamenMesh);
      }

      // 30 Multi-layered spiral petals
      const petalsList: THREE.Object3D[] = [];
      const rings = [
        { count: 5, radius: 0.14, height: 0.08, scale: 0.22, tilt: 0.3 },
        { count: 7, radius: 0.24, height: 0.06, scale: 0.28, tilt: 0.55 },
        { count: 9, radius: 0.35, height: 0.03, scale: 0.34, tilt: 0.8 },
        { count: 11, radius: 0.46, height: -0.01, scale: 0.38, tilt: 1.05 }
      ];

      rings.forEach((ring, rIdx) => {
        for (let p = 0; p < ring.count; p++) {
          const petalAngle = (p / ring.count) * Math.PI * 2 + rIdx * 0.5;
          const petalGeo = new THREE.SphereGeometry(ring.scale, 8, 8);
          petalGeo.scale(0.8, 0.15, 1.2);
          const petalMesh = new THREE.Mesh(petalGeo, flowerMat);

          petalMesh.position.set(
            Math.cos(petalAngle) * ring.radius,
            ring.height,
            Math.sin(petalAngle) * ring.radius
          );
          petalMesh.rotation.y = petalAngle;
          petalMesh.rotation.x = ring.tilt;

          flowerHead.add(petalMesh);
          petalsList.push(petalMesh);
        }
      });

      flowerGroup.add(flowerHead);
      flowerNodes.push({
        mesh: flowerHead,
        baseScale: new THREE.Vector3(1, 1, 1),
        baseRot: flowerHead.rotation.clone(),
        petals: petalsList,
        triggerProgress: 0.35 + i * 0.12
      });
    }
  } else if (specimen.id === 'lavandula_coronopifolia') {
    // Al-Jawf Wild Desert Lavender: Slender erect square stems with violet flower spikes
    const clumps = 9;
    for (let c = 0; c < clumps; c++) {
      const angle = (c / clumps) * Math.PI * 2 + Math.random() * 0.3;
      const spread = 0.2 + (c % 3) * 0.15;
      const height = 1.8 + Math.random() * 0.6;

      const stemGroupClump = new THREE.Group();
      stemGroupClump.position.set(Math.cos(angle) * spread, 0, Math.sin(angle) * spread);

      // Square herbaceous stem
      const stemGeo = new THREE.BoxGeometry(0.045, height, 0.045);
      stemGeo.translate(0, height / 2, 0);
      const stemMesh = new THREE.Mesh(stemGeo, branchMat);
      stemGroupClump.add(stemMesh);
      stemGroup.add(stemGroupClump);

      // Leaves along lower stem
      const leafPairs = 6;
      for (let lp = 0; lp < leafPairs; lp++) {
        const lh = 0.25 + lp * 0.2;
        const pairAngle = (lp * Math.PI) / 2;
        for (let side = -1; side <= 1; side += 2) {
          const leafGeo = new THREE.BoxGeometry(0.02, 0.35, 0.015);
          leafGeo.translate(0, 0.17, 0);
          const leafMesh = new THREE.Mesh(leafGeo, leafMat);
          leafMesh.position.set(
            Math.cos(pairAngle) * side * 0.03,
            lh,
            Math.sin(pairAngle) * side * 0.03
          );
          leafMesh.rotation.z = side * 0.6;
          foliageGroup.add(leafMesh);

          leafNodes.push({
            mesh: leafMesh,
            baseScale: new THREE.Vector3(1, 1, 1),
            baseRot: leafMesh.rotation.clone(),
            basePos: leafMesh.position.clone(),
            triggerProgress: 0.1 + (lp / leafPairs) * 0.3
          });
        }
      }

      // Violet Flower Spike at apex
      const spikeHead = new THREE.Group();
      spikeHead.position.set(Math.cos(angle) * spread, height, Math.sin(angle) * spread);
      const spikePetals: THREE.Object3D[] = [];

      const whorls = 7;
      for (let w = 0; w < whorls; w++) {
        const wh = w * 0.08;
        const florets = 6;
        for (let f = 0; f < florets; f++) {
          const fAngle = (f / florets) * Math.PI * 2 + w * 0.5;
          const floretGeo = new THREE.ConeGeometry(0.035, 0.12, 6);
          floretGeo.rotateX(Math.PI / 2);
          const floretMesh = new THREE.Mesh(floretGeo, flowerMat);
          floretMesh.position.set(Math.cos(fAngle) * 0.05, wh, Math.sin(fAngle) * 0.05);
          floretMesh.rotation.y = fAngle;
          spikeHead.add(floretMesh);
          spikePetals.push(floretMesh);
        }
      }

      flowerGroup.add(spikeHead);
      flowerNodes.push({
        mesh: spikeHead,
        baseScale: new THREE.Vector3(1, 1, 1),
        baseRot: spikeHead.rotation.clone(),
        petals: spikePetals,
        triggerProgress: 0.3 + (c / clumps) * 0.4
      });
    }
  } else if (specimen.id === 'moringa_peregrina') {
    // AlUla Peregrina (Ben Oil Tree): Slender pendulous canopy, feathery bipinnate leaves & seed pods
    const trunkCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0.04, 1.2, 0.03),
      new THREE.Vector3(-0.05, 2.2, -0.02),
      new THREE.Vector3(0, 3.2, 0)
    ]);
    const trunkGeo = new THREE.TubeGeometry(trunkCurve, 24, 0.14, 10, false);
    const trunkMesh = new THREE.Mesh(trunkGeo, barkMat);
    stemGroup.add(trunkMesh);

    // Weeping branches
    const bCount = 8;
    for (let i = 0; i < bCount; i++) {
      const bAngle = (i / bCount) * Math.PI * 2;
      const bHeight = 2.0 + (i % 3) * 0.4;
      const branchCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, bHeight, 0),
        new THREE.Vector3(Math.cos(bAngle) * 0.8, bHeight + 0.3, Math.sin(bAngle) * 0.8),
        new THREE.Vector3(Math.cos(bAngle) * 1.6, bHeight - 0.4, Math.sin(bAngle) * 1.6)
      ]);
      const branchGeo = new THREE.TubeGeometry(branchCurve, 16, 0.04, 8, false);
      const branchMesh = new THREE.Mesh(branchGeo, branchMat);
      stemGroup.add(branchMesh);

      // Fine feathery leaflets
      for (let f = 1; f <= 4; f++) {
        const u = f / 5;
        const pos = branchCurve.getPoint(u);
        const leafletGroup = new THREE.Group();
        leafletGroup.position.copy(pos);

        const leafPlane = new THREE.PlaneGeometry(0.35, 0.15);
        const leafMesh = new THREE.Mesh(leafPlane, leafMat);
        leafMesh.rotation.x = Math.PI / 4;
        leafletGroup.add(leafMesh);

        foliageGroup.add(leafletGroup);
        leafNodes.push({
          mesh: leafletGroup,
          baseScale: new THREE.Vector3(1, 1, 1),
          baseRot: leafletGroup.rotation.clone(),
          basePos: pos.clone(),
          triggerProgress: 0.2 + (i / bCount) * 0.4
        });
      }

      // Blossoms & Hanging Seed Pods
      const tipPos = branchCurve.getPoint(1.0);
      const flowerCluster = new THREE.Group();
      flowerCluster.position.copy(tipPos);

      const petalsList: THREE.Object3D[] = [];
      for (let p = 0; p < 5; p++) {
        const pAngle = (p / 5) * Math.PI * 2;
        const pMesh = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.22, 5), flowerMat);
        pMesh.position.set(Math.cos(pAngle) * 0.08, 0, Math.sin(pAngle) * 0.08);
        pMesh.rotation.z = Math.PI / 3;
        pMesh.rotation.y = pAngle;
        flowerCluster.add(pMesh);
        petalsList.push(pMesh);
      }
      flowerGroup.add(flowerCluster);
      flowerNodes.push({
        mesh: flowerCluster,
        baseScale: new THREE.Vector3(1, 1, 1),
        baseRot: flowerCluster.rotation.clone(),
        petals: petalsList,
        triggerProgress: 0.4 + (i / bCount) * 0.3
      });

      // Hanging long Ben oil pod
      if (i % 2 === 0) {
        const podCurve = new THREE.CatmullRomCurve3([
          tipPos.clone(),
          new THREE.Vector3(tipPos.x, tipPos.y - 0.3, tipPos.z),
          new THREE.Vector3(tipPos.x + 0.05, tipPos.y - 0.7, tipPos.z)
        ]);
        const podGeo = new THREE.TubeGeometry(podCurve, 12, 0.035, 8, false);
        const podMesh = new THREE.Mesh(podGeo, fruitMat);
        fruitGroup.add(podMesh);
      }
    }
  } else {
    // Avicennia marina: Red Sea Mangrove with vertical aerial pneumatophores and leathery foliage
    // Pneumatophores (breathing roots) emerging from ground
    const pCount = 28;
    for (let p = 0; p < pCount; p++) {
      const pRad = 0.4 + Math.random() * 1.4;
      const pAng = Math.random() * Math.PI * 2;
      const pLen = 0.35 + Math.random() * 0.45;
      const pGeo = new THREE.CylinderGeometry(0.025, 0.04, pLen, 6);
      pGeo.translate(0, pLen / 2, 0);
      const pMesh = new THREE.Mesh(pGeo, barkMat);
      pMesh.position.set(Math.cos(pAng) * pRad, 0, Math.sin(pAng) * pRad);
      stemGroup.add(pMesh);
    }

    // Gnarled sprawling trunk
    const trunkCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(-0.1, 0.6, 0.05),
      new THREE.Vector3(0.08, 1.4, -0.06),
      new THREE.Vector3(0, 2.2, 0)
    ]);
    const trunkGeo = new THREE.TubeGeometry(trunkCurve, 20, 0.16, 10, false);
    const trunkMesh = new THREE.Mesh(trunkGeo, barkMat);
    stemGroup.add(trunkMesh);

    // Sprawling canopy
    const limbs = 6;
    for (let l = 0; l < limbs; l++) {
      const lAngle = (l / limbs) * Math.PI * 2;
      const lHeight = 1.3 + (l % 2) * 0.4;
      const limbCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, lHeight, 0),
        new THREE.Vector3(Math.cos(lAngle) * 0.7, lHeight + 0.25, Math.sin(lAngle) * 0.7),
        new THREE.Vector3(Math.cos(lAngle) * 1.4, lHeight + 0.1, Math.sin(lAngle) * 1.4)
      ]);
      const limbGeo = new THREE.TubeGeometry(limbCurve, 14, 0.06, 8, false);
      const limbMesh = new THREE.Mesh(limbGeo, branchMat);
      stemGroup.add(limbMesh);

      // Thick glossy elliptical leaves
      for (let lf = 1; lf <= 3; lf++) {
        const u = lf / 4;
        const pos = limbCurve.getPoint(u);
        const leafGroup = new THREE.Group();
        leafGroup.position.copy(pos);

        for (let side = -1; side <= 1; side += 2) {
          const ovalLeafGeo = new THREE.SphereGeometry(0.18, 8, 8);
          ovalLeafGeo.scale(1.2, 0.1, 0.5);
          const ovalLeaf = new THREE.Mesh(ovalLeafGeo, leafMat);
          ovalLeaf.position.set(side * 0.12, 0, 0);
          ovalLeaf.rotation.z = side * 0.3;
          leafGroup.add(ovalLeaf);
        }

        foliageGroup.add(leafGroup);
        leafNodes.push({
          mesh: leafGroup,
          baseScale: new THREE.Vector3(1, 1, 1),
          baseRot: leafGroup.rotation.clone(),
          basePos: pos.clone(),
          triggerProgress: 0.15 + (l / limbs) * 0.4
        });
      }

      // Yellow mangrove flower clusters
      const tip = limbCurve.getPoint(1.0);
      const flowerHead = new THREE.Group();
      flowerHead.position.copy(tip);
      const flList: THREE.Object3D[] = [];

      for (let fl = 0; fl < 6; fl++) {
        const flGeo = new THREE.SphereGeometry(0.07, 6, 6);
        const flMesh = new THREE.Mesh(flGeo, flowerMat);
        flMesh.position.set(
          (Math.random() - 0.5) * 0.18,
          (Math.random() - 0.5) * 0.18,
          (Math.random() - 0.5) * 0.18
        );
        flowerHead.add(flMesh);
        flList.push(flMesh);
      }

      flowerGroup.add(flowerHead);
      flowerNodes.push({
        mesh: flowerHead,
        baseScale: new THREE.Vector3(1, 1, 1),
        baseRot: flowerHead.rotation.clone(),
        petals: flList,
        triggerProgress: 0.35 + (l / limbs) * 0.4
      });
    }
  }

  // ==========================================
  // FLOATING POLLEN & SPORE PARTICLES
  // ==========================================
  const particleCount = 280;
  const particleGeo = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);
  const particleOriginals = new Float32Array(particleCount * 3);
  const particleSpeeds = new Float32Array(particleCount);

  for (let i = 0; i < particleCount; i++) {
    const rad = 0.4 + Math.random() * 2.2;
    const phi = Math.random() * Math.PI * 2;
    const y = 0.2 + Math.random() * 3.8;

    const x = Math.cos(phi) * rad;
    const z = Math.sin(phi) * rad;

    particlePositions[i * 3] = x;
    particlePositions[i * 3 + 1] = y;
    particlePositions[i * 3 + 2] = z;

    particleOriginals[i * 3] = x;
    particleOriginals[i * 3 + 1] = y;
    particleOriginals[i * 3 + 2] = z;

    particleSpeeds[i] = 0.3 + Math.random() * 0.7;
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

  const particleMat = new THREE.PointsMaterial({
    color: specimen.renderParams.pollenColor,
    size: 0.05,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending
  });

  const pollenSystem = new THREE.Points(particleGeo, particleMat);
  rootGroup.add(pollenSystem);

  // Set Growth state (0.0 -> 1.0)
  const setGrowth = (progress: number) => {
    const p = Math.max(0.001, Math.min(1.0, progress));

    // Stem scales upwards from root
    stemGroup.scale.set(
      0.35 + 0.65 * Math.pow(p, 0.7),
      0.2 + 0.8 * p,
      0.35 + 0.65 * Math.pow(p, 0.7)
    );

    // Leaves unfurl according to triggerProgress
    leafNodes.forEach((node) => {
      if (p < node.triggerProgress) {
        node.mesh.scale.set(0.001, 0.001, 0.001);
      } else {
        const localP = (p - node.triggerProgress) / (1.0 - node.triggerProgress);
        const s = Math.min(1.0, localP * 1.35);
        node.mesh.scale.set(
          node.baseScale.x * s,
          node.baseScale.y * s,
          node.baseScale.z * s
        );
      }
    });

    // Flowers bloom (petals expand & unfurl)
    flowerNodes.forEach((fn) => {
      if (p < fn.triggerProgress) {
        fn.mesh.scale.set(0.001, 0.001, 0.001);
      } else {
        const localP = (p - fn.triggerProgress) / (1.0 - fn.triggerProgress);
        const s = Math.min(1.0, localP * 1.5);
        fn.mesh.scale.set(
          fn.baseScale.x * s,
          fn.baseScale.y * s,
          fn.baseScale.z * s
        );

        // Petal unfurling angle
        fn.petals.forEach((petal, idx) => {
          petal.scale.set(s, s, s);
          petal.rotation.x = 0.2 + localP * 0.7 + (idx % 3) * 0.05;
        });
      }
    });

    // Fruits/cones emerge at late stage
    fruitGroup.scale.set(
      Math.max(0.001, (p - 0.6) / 0.4),
      Math.max(0.001, (p - 0.6) / 0.4),
      Math.max(0.001, (p - 0.6) / 0.4)
    );

    // Pollen density scales with bloom
    particleMat.opacity = Math.max(0.1, p * 0.85);
  };

  // Wireframe toggle
  const setWireframe = (wireframe: boolean) => {
    barkMat.wireframe = wireframe;
    branchMat.wireframe = wireframe;
    leafMat.wireframe = wireframe;
    flowerMat.wireframe = wireframe;
    stamenMat.wireframe = wireframe;
    fruitMat.wireframe = wireframe;
  };

  // Organic wind sway and particle motion in update loop
  const update = (delta: number, elapsed: number) => {
    // Gentle sway
    const sway = Math.sin(elapsed * 1.2) * 0.02 + Math.sin(elapsed * 2.4) * 0.01;
    stemGroup.rotation.z = sway;
    foliageGroup.rotation.z = sway * 1.4;
    flowerGroup.rotation.z = sway * 1.6;

    // Orbit pollen particles
    const posAttr = particleGeo.attributes.position as THREE.BufferAttribute;
    const positions = posAttr.array as Float32Array;

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      const speed = particleSpeeds[i];
      const origX = particleOriginals[idx];
      const origZ = particleOriginals[idx + 2];

      const currentAngle = Math.atan2(origZ, origX) + elapsed * 0.25 * speed;
      const currentRadius = Math.sqrt(origX * origX + origZ * origZ);

      positions[idx] = Math.cos(currentAngle) * currentRadius;
      positions[idx + 1] = particleOriginals[idx + 1] + Math.sin(elapsed * speed + i) * 0.15;
      positions[idx + 2] = Math.sin(currentAngle) * currentRadius;
    }
    posAttr.needsUpdate = true;
  };

  // Initialize at 100% bloom by default
  setGrowth(1.0);

  return {
    rootGroup,
    stemGroup,
    foliageGroup,
    flowerGroup,
    fruitGroup,
    pollenSystem,
    specimen,
    setGrowth,
    update,
    setWireframe
  };
}
