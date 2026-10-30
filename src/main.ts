import { SAUDI_PLANTS } from './data/plants';
import { SAUDI_TERROIRS } from './data/terroirs';
import { PlantSpecimen, ExtractionParameters, ExtractionResult } from './types';
import { Language, I18N } from './i18n';
import { PlantSceneManager, LightingMode } from './three/plantScene';
import { audioEngine } from './audio/audioEngine';
import { ExtractionSimulatorEngine } from './simulator/extractionEngine';
import { MassSpectrometryRenderer } from './simulator/massSpectrometry';
import { RadarChartRenderer } from './ui/radarChart';
import { CertificateModalController } from './ui/certificateModal';

class UqhuwanApp {
  private currentSpecimen: PlantSpecimen = SAUDI_PLANTS[0];
  private currentLang: Language = 'ar';
  private sceneManager!: PlantSceneManager;
  private massSpecRenderer!: MassSpectrometryRenderer;
  private radarRenderer!: RadarChartRenderer;
  private certController!: CertificateModalController;
  private latestExtractionResult: ExtractionResult | null = null;
  private currentLightingIndex: number = 0;
  private readonly lightingModes: LightingMode[] = ['daylight', 'greenhouse', 'bioluminescent'];

  constructor() {
    this.init();
  }

  private init() {
    // 1. Setup 3D Viewport Scene
    const canvasContainer = document.getElementById('three-canvas-container');
    if (!canvasContainer) throw new Error('Missing Three canvas container');
    this.sceneManager = new PlantSceneManager(canvasContainer);
    this.sceneManager.loadPlant(this.currentSpecimen, 1.0);

    // 2. Setup Radar & GC-MS Canvases
    const massSpecCanvas = document.getElementById('canvas-mass-spec') as HTMLCanvasElement;
    if (massSpecCanvas) {
      this.massSpecRenderer = new MassSpectrometryRenderer(massSpecCanvas);
      this.massSpecRenderer.setSpecimen(this.currentSpecimen);
    }

    // 3. Certificate Controller
    const certMount = document.getElementById('certificate-modal-mount');
    if (certMount) {
      this.certController = new CertificateModalController(certMount);
    }

    // 4. Render Specimen Cards in Left Sidebar
    this.renderSpecimenSidebar();

    // 5. Render Specimen Dossier in Right Panel
    this.renderSpecimenDossier();

    // 6. Render Terroir Atlas Cards
    this.renderTerroirAtlas();

    // 7. Initial Extraction Simulation Calculation
    this.runInitialSimulation();

    // 8. Bind All User Interface Events
    this.bindEvents();

    // 9. Synchronize Language & Localized Strings
    this.applyLanguage();
  }

  private renderSpecimenSidebar() {
    const container = document.getElementById('specimens-list-container');
    if (!container) return;

    const isAr = this.currentLang === 'ar';
    container.innerHTML = SAUDI_PLANTS.map((plant) => {
      const isActive = plant.id === this.currentSpecimen.id;
      const tagsHtml = plant.primaryCompounds
        .map((c) => `<span class="bioactive-tag">${isAr ? c.nameAr : c.nameEn}</span>`)
        .join('');

      return `
        <div class="specimen-card ${isActive ? 'active' : ''}" data-plant-id="${plant.id}">
          <div class="card-top-row">
            <span class="card-local-name">${isAr ? plant.localNameAr : plant.localNameEn}</span>
            <span class="card-family-badge">${isAr ? plant.familyAr : plant.familyEn}</span>
          </div>
          <div class="card-latin-name">${plant.botanicalName}</div>
          <div class="card-bioactives-tags">${tagsHtml}</div>
        </div>
      `;
    }).join('');

    // Attach click handlers
    container.querySelectorAll('.specimen-card').forEach((el) => {
      el.addEventListener('click', () => {
        const plantId = (el as HTMLElement).dataset.plantId;
        const target = SAUDI_PLANTS.find((p) => p.id === plantId);
        if (target && target.id !== this.currentSpecimen.id) {
          audioEngine.playUiClick();
          this.switchSpecimen(target);
        }
      });
    });
  }

  private switchSpecimen(specimen: PlantSpecimen) {
    this.currentSpecimen = specimen;
    this.renderSpecimenSidebar();
    this.renderSpecimenDossier();

    // Load into 3D scene
    const slider = document.getElementById('growth-slider') as HTMLInputElement;
    const progress = slider ? Number(slider.value) / 100 : 1.0;
    this.sceneManager.loadPlant(specimen, progress);

    // Update GC-MS
    if (this.massSpecRenderer) {
      this.massSpecRenderer.setSpecimen(specimen);
    }

    // Run simulation update
    this.runInitialSimulation();
  }

  private renderSpecimenDossier() {
    const container = document.getElementById('specimen-dossier');
    if (!container) return;

    const isAr = this.currentLang === 'ar';
    const t = I18N[this.currentLang];
    const terroir = SAUDI_TERROIRS[this.currentSpecimen.iconicTerroirId];

    const biotechItems = (isAr ? this.currentSpecimen.biotechApplicationsAr : this.currentSpecimen.biotechApplicationsEn)
      .map((item) => `<li>${item}</li>`)
      .join('');

    const traditionalItems = (isAr ? this.currentSpecimen.traditionalUsesAr : this.currentSpecimen.traditionalUsesEn)
      .map((item) => `<li>${item}</li>`)
      .join('');

    container.innerHTML = `
      <div class="dossier-header-box">
        <h2 class="dossier-title">${isAr ? this.currentSpecimen.localNameAr : this.currentSpecimen.localNameEn}</h2>
        <div class="dossier-botanical">${this.currentSpecimen.botanicalName}</div>
        <div class="dossier-badge-row">
          <span class="brand-badge">${isAr ? this.currentSpecimen.familyAr : this.currentSpecimen.familyEn}</span>
          <span class="bioactive-tag">${isAr ? this.currentSpecimen.endemismLevelAr : this.currentSpecimen.endemismLevelEn}</span>
        </div>
      </div>

      <!-- Radar Bioactivity Chart -->
      <div class="chart-card-box">
        <div class="dossier-sec-title">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          <span>${t.radarTitle}</span>
        </div>
        <canvas id="dossier-radar-canvas" class="radar-canvas" width="300" height="240"></canvas>
      </div>

      <!-- Terroir Section -->
      <div class="dossier-section">
        <div class="dossier-sec-title">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
          <span>${t.terroirOrigin}</span>
        </div>
        <div class="dossier-text">
          <strong>${isAr ? terroir.nameAr : terroir.nameEn}</strong> (${isAr ? terroir.regionAr : terroir.regionEn})
          <br>
          <small style="color: var(--mint-light);">${isAr ? terroir.climateZoneAr : terroir.climateZoneEn}</small>
        </div>
      </div>

      <!-- Biotech Applications -->
      <div class="dossier-section">
        <div class="dossier-sec-title">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2v7.31L4 19a2 2 0 0 0 1.7 3h12.6a2 2 0 0 0 1.7-3l-6-9.69V2h-4z"/></svg>
          <span>${t.biotechApplications}</span>
        </div>
        <ul class="dossier-list">${biotechItems}</ul>
      </div>

      <!-- Ethnobotanical Heritage -->
      <div class="dossier-section">
        <div class="dossier-sec-title">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21a9 9 0 0 0 9-9c0-4.97-4.03-9-9-9s-9 4.03-9 9a9 9 0 0 0 9 9z"/></svg>
          <span>${t.traditionalHeritage}</span>
        </div>
        <ul class="dossier-list">${traditionalItems}</ul>
      </div>
    `;

    // Initialize Radar on the dossier canvas
    const radarCanvas = document.getElementById('dossier-radar-canvas') as HTMLCanvasElement;
    if (radarCanvas) {
      this.radarRenderer = new RadarChartRenderer(radarCanvas);
      this.radarRenderer.setSpecimen(this.currentSpecimen, this.currentLang);
    }
  }

  private renderTerroirAtlas() {
    const container = document.getElementById('terroir-cards-container');
    if (!container) return;

    const isAr = this.currentLang === 'ar';
    const t = I18N[this.currentLang];

    container.innerHTML = Object.values(SAUDI_TERROIRS).map((terroir) => {
      // Find plants associated with this terroir
      const associatedPlants = SAUDI_PLANTS.filter((p) => p.iconicTerroirId === terroir.id);

      return `
        <div class="terroir-card">
          <div class="terroir-card-header">
            <span class="terroir-name">${isAr ? terroir.nameAr : terroir.nameEn}</span>
            <span class="terroir-multiplier-badge">+${Math.round((terroir.phytochemicalPotencyMultiplier - 1) * 100)}% Potency</span>
          </div>
          <div style="font-size: 0.78rem; color: var(--mint-light);">${isAr ? terroir.regionAr : terroir.regionEn}</div>
          <p style="font-size: 0.8rem; line-height: 1.5; color: #cbd5e1;">${isAr ? terroir.descriptionAr : terroir.descriptionEn}</p>
          
          <div class="terroir-meta-row">
            <div><strong>${t.elevation}:</strong> ${terroir.elevationMeters} m</div>
            <div><strong>${t.rainfall}:</strong> ${terroir.annualRainfallMm} mm</div>
            <div><strong>${t.averageTemp}:</strong> ${terroir.averageTempC} °C</div>
            <div><strong>${t.soilPh}:</strong> ${terroir.soilPh}</div>
          </div>

          <div style="margin-top: 8px; display: flex; gap: 8px; flex-wrap: wrap;">
            ${associatedPlants.map((p) => `
              <button class="nav-tab-btn btn-view-plant-3d" data-plant-id="${p.id}" style="background: rgba(16,185,129,0.2); border: 1px solid var(--primary-emerald);">
                <span>🌿 ${isAr ? p.localNameAr : p.localNameEn}</span>
              </button>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');

    // Bind 3D Plant view button on terroir cards
    container.querySelectorAll('.btn-view-plant-3d').forEach((btn) => {
      btn.addEventListener('click', () => {
        const plantId = (btn as HTMLElement).dataset.plantId;
        const target = SAUDI_PLANTS.find((p) => p.id === plantId);
        if (target) {
          this.switchSpecimen(target);
          this.closeAllModals();
        }
      });
    });
  }

  private runInitialSimulation() {
    const terroir = SAUDI_TERROIRS[this.currentSpecimen.iconicTerroirId];
    const params: ExtractionParameters = {
      method: 'supercritical_co2',
      temperatureC: 42,
      pressureBar: 220,
      durationMinutes: 45,
      rawMaterialKg: 5.0,
      solventFlowRateLpm: 1.5
    };

    const res = ExtractionSimulatorEngine.simulate(this.currentSpecimen, terroir, params);
    this.latestExtractionResult = res;
    this.updateSimulationUi(res);
  }

  private updateSimulationUi(res: ExtractionResult) {
    const isAr = this.currentLang === 'ar';
    const yieldEl = document.getElementById('kpi-yield-val');
    const purityEl = document.getElementById('kpi-purity-val');
    const terpeneEl = document.getElementById('kpi-terpene-val');
    const gradeEl = document.getElementById('kpi-grade-val');
    const batchEl = document.getElementById('txt-gcms-batch');

    if (yieldEl) yieldEl.innerHTML = `${res.yieldMl} <small>ml</small>`;
    if (purityEl) purityEl.innerHTML = `${res.purityIndexPct} <small>%</small>`;
    if (terpeneEl) terpeneEl.innerHTML = `${res.terpeneIntegrityPct} <small>%</small>`;
    if (gradeEl) gradeEl.innerText = isAr ? res.qualityGradeAr : res.qualityGradeEn;
    if (batchEl) batchEl.innerText = res.batchSerialNumber;
  }

  private bindEvents() {
    // Growth slider
    const growthSlider = document.getElementById('growth-slider') as HTMLInputElement;
    const growthStageName = document.getElementById('txt-growth-stage-name');

    growthSlider?.addEventListener('input', (e) => {
      const val = Number((e.target as HTMLInputElement).value);
      const progress = val / 100;
      this.sceneManager.setGrowth(progress);

      const t = I18N[this.currentLang];
      if (growthStageName) {
        if (val < 30) growthStageName.innerText = t.growthSprout;
        else if (val < 80) growthStageName.innerText = t.growthBudding;
        else growthStageName.innerText = t.growthFullBloom;
      }

      if (val === 100) {
        audioEngine.playBloomChime();
      }
    });

    // Viewport HUD controls
    document.getElementById('hud-cam-reset')?.addEventListener('click', () => {
      audioEngine.playUiClick();
      this.sceneManager.setCameraPreset('reset');
    });

    document.getElementById('hud-cam-macro')?.addEventListener('click', () => {
      audioEngine.playUiClick();
      this.sceneManager.setCameraPreset('macro');
    });

    document.getElementById('hud-cam-canopy')?.addEventListener('click', () => {
      audioEngine.playUiClick();
      this.sceneManager.setCameraPreset('canopy');
    });

    document.getElementById('hud-cam-stem')?.addEventListener('click', () => {
      audioEngine.playUiClick();
      this.sceneManager.setCameraPreset('stem');
    });

    document.getElementById('hud-wireframe-toggle')?.addEventListener('click', (e) => {
      audioEngine.playUiClick();
      const isWire = this.sceneManager.toggleWireframe();
      (e.currentTarget as HTMLElement).classList.toggle('active', isWire);
    });

    document.getElementById('hud-autorotate-toggle')?.addEventListener('click', (e) => {
      audioEngine.playUiClick();
      const rotating = this.sceneManager.toggleAutoRotate();
      (e.currentTarget as HTMLElement).classList.toggle('active', rotating);
    });

    document.getElementById('hud-lighting-toggle')?.addEventListener('click', () => {
      audioEngine.playUiClick();
      this.currentLightingIndex = (this.currentLightingIndex + 1) % this.lightingModes.length;
      const mode = this.lightingModes[this.currentLightingIndex];
      this.sceneManager.setLightingMode(mode);

      const lightTxt = document.getElementById('txt-hud-light');
      const t = I18N[this.currentLang];
      if (lightTxt) {
        if (mode === 'daylight') lightTxt.innerText = t.lightDaylight;
        else if (mode === 'greenhouse') lightTxt.innerText = t.lightGreenhouse;
        else lightTxt.innerText = t.lightBioluminescent;
      }
    });

    // Top Navigation Tabs
    document.querySelectorAll('.nav-tab-btn[data-tab]').forEach((tab) => {
      tab.addEventListener('click', () => {
        const targetTab = (tab as HTMLElement).dataset.tab;
        audioEngine.playUiClick();

        if (targetTab === 'herbarium') {
          this.closeAllModals();
          this.setActiveTab('herbarium');
        } else if (targetTab === 'lab') {
          this.openModal('modal-lab');
          this.setActiveTab('lab');
        } else if (targetTab === 'atlas') {
          this.openModal('modal-atlas');
          this.setActiveTab('atlas');
        } else if (targetTab === 'certificate') {
          this.openCertificate();
        }
      });
    });

    // Modal Close Buttons
    document.querySelectorAll('.btn-modal-close').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.closeAllModals();
        this.setActiveTab('herbarium');
      });
    });

    // Audio Engine Toggle
    document.getElementById('btn-sound-toggle')?.addEventListener('click', () => {
      const isMuted = audioEngine.toggleMute();
      if (!isMuted) {
        audioEngine.startMountainWind();
      } else {
        audioEngine.stopMountainWind();
      }
      const iconSound = document.getElementById('icon-sound');
      if (iconSound) {
        iconSound.style.opacity = isMuted ? '0.4' : '1.0';
      }
    });

    // Theme Toggle
    document.getElementById('btn-theme-toggle')?.addEventListener('click', () => {
      audioEngine.playUiClick();
      document.body.classList.toggle('theme-light');
    });

    // Language Toggle (Arabic <-> English)
    document.getElementById('btn-lang-toggle')?.addEventListener('click', () => {
      audioEngine.playUiClick();
      this.currentLang = this.currentLang === 'ar' ? 'en' : 'ar';
      this.applyLanguage();
    });

    // Simulation Slider Live Labels & Run
    const rangeTemp = document.getElementById('range-temp') as HTMLInputElement;
    const rangePress = document.getElementById('range-press') as HTMLInputElement;
    const rangeDuration = document.getElementById('range-duration') as HTMLInputElement;
    const rangeMass = document.getElementById('range-mass') as HTMLInputElement;
    const methodSelect = document.getElementById('sim-method-select') as HTMLSelectElement;

    rangeTemp?.addEventListener('input', () => {
      const lbl = document.getElementById('lbl-param-temp');
      if (lbl) lbl.innerText = `${rangeTemp.value} °C`;
    });

    rangePress?.addEventListener('input', () => {
      const lbl = document.getElementById('lbl-param-press');
      if (lbl) lbl.innerText = `${rangePress.value} Bar`;
    });

    rangeDuration?.addEventListener('input', () => {
      const lbl = document.getElementById('lbl-param-duration');
      if (lbl) lbl.innerText = `${rangeDuration.value} ${this.currentLang === 'ar' ? 'دقيقة' : 'min'}`;
    });

    rangeMass?.addEventListener('input', () => {
      const lbl = document.getElementById('lbl-param-mass');
      if (lbl) lbl.innerText = `${rangeMass.value} ${this.currentLang === 'ar' ? 'كجم' : 'kg'}`;
    });

    methodSelect?.addEventListener('change', () => {
      if (methodSelect.value === 'steam') {
        rangeTemp.value = '100';
        rangePress.value = '1.5';
      } else {
        rangeTemp.value = '42';
        rangePress.value = '220';
      }
      rangeTemp.dispatchEvent(new Event('input'));
      rangePress.dispatchEvent(new Event('input'));
    });

    // Simulation Execute Button
    document.getElementById('btn-run-simulation')?.addEventListener('click', () => {
      audioEngine.playWaterDroplet();
      const terroir = SAUDI_TERROIRS[this.currentSpecimen.iconicTerroirId];
      const params: ExtractionParameters = {
        method: methodSelect.value as 'steam' | 'supercritical_co2',
        temperatureC: Number(rangeTemp.value),
        pressureBar: Number(rangePress.value),
        durationMinutes: Number(rangeDuration.value),
        rawMaterialKg: Number(rangeMass.value),
        solventFlowRateLpm: 1.5
      };

      const result = ExtractionSimulatorEngine.simulate(this.currentSpecimen, terroir, params);
      this.latestExtractionResult = result;
      this.updateSimulationUi(result);

      if (this.massSpecRenderer) {
        this.massSpecRenderer.setSpecimen(this.currentSpecimen);
      }
    });
  }

  private openCertificate() {
    if (!this.latestExtractionResult) {
      this.runInitialSimulation();
    }
    const terroir = SAUDI_TERROIRS[this.currentSpecimen.iconicTerroirId];
    if (this.latestExtractionResult) {
      this.certController.open(this.currentSpecimen, terroir, this.latestExtractionResult, this.currentLang);
    }
  }

  private openModal(modalId: string) {
    this.closeAllModals();
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('hidden');
    }
  }

  private closeAllModals() {
    document.querySelectorAll('.full-modal-overlay').forEach((m) => {
      m.classList.add('hidden');
    });
  }

  private setActiveTab(tabKey: string) {
    document.querySelectorAll('.nav-tab-btn[data-tab]').forEach((tab) => {
      const k = (tab as HTMLElement).dataset.tab;
      tab.classList.toggle('active', k === tabKey);
    });
  }

  private applyLanguage() {
    const isAr = this.currentLang === 'ar';
    const t = I18N[this.currentLang];

    document.documentElement.lang = this.currentLang;
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';

    // Lang toggle button label
    const langBtn = document.getElementById('btn-lang-toggle');
    if (langBtn) langBtn.innerText = isAr ? 'English' : 'العربية';

    // Top Brand Text
    const appTitle = document.getElementById('txt-app-title');
    const appSub = document.getElementById('txt-app-sub');
    const ownerCredit = document.getElementById('txt-owner-credit');
    if (appTitle) appTitle.innerText = t.appTitle;
    if (appSub) appSub.innerText = t.appSubtitle;
    if (ownerCredit) ownerCredit.innerHTML = `<span>🌿</span><span>${t.ownerCredit}</span>`;

    // Nav Tabs
    const navHerb = document.getElementById('txt-nav-herbarium');
    const navLab = document.getElementById('txt-nav-lab');
    const navAtlas = document.getElementById('txt-nav-atlas');
    const navCert = document.getElementById('txt-nav-cert');
    if (navHerb) navHerb.innerText = t.navSpecimens;
    if (navLab) navLab.innerText = t.navBiotechLab;
    if (navAtlas) navAtlas.innerText = t.navTerroirAtlas;
    if (navCert) navCert.innerText = t.navCertificate;

    // Sidebar Title
    const sidebarTitle = document.getElementById('txt-sidebar-title');
    if (sidebarTitle) sidebarTitle.innerText = isAr ? 'عينات الفلورا السعودية النموذجية' : 'Saudi Flora Specimen Herbarium';

    // Viewport HUD controls
    const hudReset = document.getElementById('txt-hud-reset');
    const hudMacro = document.getElementById('txt-hud-macro');
    const hudCanopy = document.getElementById('txt-hud-canopy');
    const hudStem = document.getElementById('txt-hud-stem');
    const hudWire = document.getElementById('txt-hud-wireframe');
    const hudLight = document.getElementById('txt-hud-light');
    const hudOrbit = document.getElementById('txt-hud-orbit');
    if (hudReset) hudReset.innerText = t.cameraReset;
    if (hudMacro) hudMacro.innerText = t.cameraMacro;
    if (hudCanopy) hudCanopy.innerText = t.cameraCanopy;
    if (hudStem) hudStem.innerText = t.cameraStem;
    if (hudWire) hudWire.innerText = t.wireframeMode;
    if (hudLight) hudLight.innerText = t.lightDaylight;
    if (hudOrbit) hudOrbit.innerText = t.autoRotate;

    // Growth HUD
    const growthLbl = document.getElementById('txt-growth-label');
    const tickSprout = document.getElementById('txt-tick-sprout');
    const tickBudding = document.getElementById('txt-tick-budding');
    const tickBloom = document.getElementById('txt-tick-bloom');
    if (growthLbl) growthLbl.innerText = t.growthStageLabel;
    if (tickSprout) tickSprout.innerText = t.growthSprout;
    if (tickBudding) tickBudding.innerText = t.growthBudding;
    if (tickBloom) tickBloom.innerText = t.growthFullBloom;

    // Simulation Modal
    const simTitle = document.getElementById('txt-sim-title');
    const simSub = document.getElementById('txt-sim-sub');
    const paramMethod = document.getElementById('txt-param-method');
    const paramTemp = document.getElementById('txt-param-temp');
    const paramPress = document.getElementById('txt-param-press');
    const paramDuration = document.getElementById('txt-param-duration');
    const paramMass = document.getElementById('txt-param-mass');
    const btnSim = document.getElementById('txt-btn-simulate');
    const kpiYield = document.getElementById('txt-kpi-yield');
    const kpiPurity = document.getElementById('txt-kpi-purity');
    const kpiTerpene = document.getElementById('txt-kpi-terpene');
    const kpiGrade = document.getElementById('txt-kpi-grade');
    const gcmsTitle = document.getElementById('txt-gcms-title');

    if (simTitle) simTitle.innerText = t.simHeader;
    if (simSub) simSub.innerText = t.simSub;
    if (paramMethod) paramMethod.innerText = t.methodSelect;
    if (paramTemp) paramTemp.innerText = t.tempControl;
    if (paramPress) paramPress.innerText = t.pressureControl;
    if (paramDuration) paramDuration.innerText = t.durationControl;
    if (paramMass) paramMass.innerText = t.materialMassControl;
    if (btnSim) btnSim.innerText = t.runSimulation;
    if (kpiYield) kpiYield.innerText = t.yieldVolume;
    if (kpiPurity) kpiPurity.innerText = t.purityIndex;
    if (kpiTerpene) kpiTerpene.innerText = t.terpeneIntegrity;
    if (kpiGrade) kpiGrade.innerText = t.qualityGrade;
    if (gcmsTitle) gcmsTitle.innerText = t.massSpecTitle;

    // Atlas Modal
    const atlasTitle = document.getElementById('txt-atlas-title');
    const atlasSub = document.getElementById('txt-atlas-sub');
    if (atlasTitle) atlasTitle.innerText = t.terroirTitle;
    if (atlasSub) atlasSub.innerText = t.terroirSub;

    // Refresh Sub-views
    this.renderSpecimenSidebar();
    this.renderSpecimenDossier();
    this.renderTerroirAtlas();
    if (this.latestExtractionResult) {
      this.updateSimulationUi(this.latestExtractionResult);
    }
  }
}

// Instantiate on DOM load
window.addEventListener('DOMContentLoaded', () => {
  new UqhuwanApp();
});
