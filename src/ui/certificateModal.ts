import confetti from 'canvas-confetti';
import { PlantSpecimen, ExtractionResult, TerroirProfile } from '../types';
import { Language, I18N } from '../i18n';
import { audioEngine } from '../audio/audioEngine';

export class CertificateModalController {
  private container: HTMLElement;
  private lang: Language = 'ar';

  constructor(container: HTMLElement) {
    this.container = container;
  }

  public open(
    specimen: PlantSpecimen,
    terroir: TerroirProfile,
    result: ExtractionResult,
    lang: Language = 'ar'
  ) {
    this.lang = lang;
    const t = I18N[lang];
    const isAr = lang === 'ar';

    audioEngine.playBloomChime();

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10b981', '#f59e0b', '#34d399', '#fef08a']
    });

    const compoundsHtml = result.activeConstituentsProfile
      .map(
        (item) => `
        <div class="cert-compound-row">
          <div class="cert-compound-name">
            <strong>${isAr ? item.compound.nameAr : item.compound.nameEn}</strong>
            <span class="cert-compound-cas">CAS: ${item.compound.casNo} | ${item.compound.molecularFormula}</span>
          </div>
          <div class="cert-compound-stats">
            <span class="cert-compound-ret">RT: ${item.compound.retentionTimeMin} min</span>
            <span class="cert-compound-rec">${item.recoveredPercentage}%</span>
          </div>
        </div>
      `
      )
      .join('');

    const modalHtml = `
      <div class="cert-backdrop" id="cert-backdrop">
        <div class="cert-modal-card">
          <!-- Close & Action Bar -->
          <div class="cert-actions-bar no-print">
            <button id="cert-print-btn" class="btn-cert-action btn-gold">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><path d="M6 14h12v8H6z"/></svg>
              ${t.certPrintBtn}
            </button>
            <button id="cert-close-btn" class="btn-cert-action btn-dismiss">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ${t.certCloseBtn}
            </button>
          </div>

          <!-- Printable Certificate Document Body -->
          <div class="cert-document-frame" id="cert-printable-area">
            <div class="cert-ornate-border">
              <!-- Header Section -->
              <div class="cert-header">
                <div class="cert-logo-box">
                  <div class="cert-crest">
                    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="1.8">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div class="cert-authority">
                    <div class="cert-kingdom">${isAr ? 'المملكة العربية السعودية' : 'Kingdom of Saudi Arabia'}</div>
                    <div class="cert-lab-name">${t.certSub}</div>
                  </div>
                </div>

                <div class="cert-doc-identity">
                  <span class="cert-badge">${t.certTitle}</span>
                  <div class="cert-code">BATCH: ${result.batchSerialNumber}</div>
                  <div class="cert-date">${t.certIssueDate}: ${new Date().toLocaleDateString(isAr ? 'ar-SA' : 'en-US')}</div>
                </div>
              </div>

              <!-- Specimen & Origin Metadata -->
              <div class="cert-meta-grid">
                <div class="cert-meta-cell">
                  <span class="cert-meta-label">${t.certBotanicalSource}</span>
                  <span class="cert-meta-val">${isAr ? specimen.localNameAr : specimen.localNameEn}</span>
                  <span class="cert-meta-sub"><em>${specimen.botanicalName}</em> (${isAr ? specimen.familyAr : specimen.familyEn})</span>
                </div>
                <div class="cert-meta-cell">
                  <span class="cert-meta-label">${t.certOriginTerroir}</span>
                  <span class="cert-meta-val">${isAr ? terroir.nameAr : terroir.nameEn}</span>
                  <span class="cert-meta-sub">${isAr ? terroir.regionAr : terroir.regionEn} | Alt: ${terroir.elevationMeters}m | pH: ${terroir.soilPh}</span>
                </div>
              </div>

              <!-- Extraction & Quality Diagnostics -->
              <div class="cert-kpi-row">
                <div class="cert-kpi-item">
                  <span class="kpi-label">${t.yieldVolume}</span>
                  <span class="kpi-num">${result.yieldMl} <small>ml</small></span>
                </div>
                <div class="cert-kpi-item">
                  <span class="kpi-label">${t.purityIndex}</span>
                  <span class="kpi-num">${result.purityIndexPct}%</span>
                </div>
                <div class="cert-kpi-item">
                  <span class="kpi-label">${t.terpeneIntegrity}</span>
                  <span class="kpi-num">${result.terpeneIntegrityPct}%</span>
                </div>
                <div class="cert-kpi-item">
                  <span class="kpi-label">${t.qualityGrade}</span>
                  <span class="kpi-grade">${isAr ? result.qualityGradeAr : result.qualityGradeEn}</span>
                </div>
              </div>

              <!-- Compound Fractionation Profile -->
              <div class="cert-section-title">${t.certAnalysisSummary}</div>
              <div class="cert-compounds-list">
                ${compoundsHtml}
              </div>

              <!-- Signature & Cryptographic Seal Footer -->
              <div class="cert-footer">
                <div class="cert-qr-box">
                  <svg width="74" height="74" viewBox="0 0 100 100" class="cert-qr-svg">
                    <rect width="100" height="100" fill="#f8fafc"/>
                    <!-- Procedural QR-like matrix -->
                    <rect x="10" y="10" width="25" height="25" fill="#064e3b"/>
                    <rect x="15" y="15" width="15" height="15" fill="#f8fafc"/>
                    <rect x="18" y="18" width="9" height="9" fill="#064e3b"/>

                    <rect x="65" y="10" width="25" height="25" fill="#064e3b"/>
                    <rect x="70" y="15" width="15" height="15" fill="#f8fafc"/>
                    <rect x="73" y="18" width="9" height="9" fill="#064e3b"/>

                    <rect x="10" y="65" width="25" height="25" fill="#064e3b"/>
                    <rect x="15" y="70" width="15" height="15" fill="#f8fafc"/>
                    <rect x="18" y="73" width="9" height="9" fill="#064e3b"/>

                    <rect x="42" y="12" width="6" height="6" fill="#064e3b"/>
                    <rect x="52" y="18" width="6" height="6" fill="#064e3b"/>
                    <rect x="42" y="32" width="6" height="6" fill="#064e3b"/>
                    <rect x="50" y="42" width="8" height="8" fill="#f59e0b"/>
                    <rect x="65" y="45" width="6" height="6" fill="#064e3b"/>
                    <rect x="78" y="55" width="6" height="6" fill="#064e3b"/>
                    <rect x="42" y="68" width="6" height="6" fill="#064e3b"/>
                    <rect x="55" y="75" width="6" height="6" fill="#064e3b"/>
                    <rect x="70" y="70" width="18" height="18" fill="#064e3b"/>
                  </svg>
                  <span class="cert-qr-sub">SHA-256 VERIFIED</span>
                </div>

                <div class="cert-stamp-box">
                  <div class="cert-official-seal">
                    <span>مختبر التقنية الحيوية النباتية</span>
                    <strong>أُقْـحُـوان</strong>
                    <small>UQHUWAN SAUDI HERBARIUM</small>
                  </div>
                </div>

                <div class="cert-sign-box">
                  <div class="cert-sign-label">${t.certAuthorizedSign}</div>
                  <div class="cert-signature-art">أ. طارق ابوعشي</div>
                  <div class="cert-signer-name">${t.certSignatoryName}</div>
                  <div class="cert-signer-title">${t.certSignatoryTitle}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    this.container.innerHTML = modalHtml;
    this.bindModalEvents();
  }

  private bindModalEvents() {
    const backdrop = document.getElementById('cert-backdrop');
    const closeBtn = document.getElementById('cert-close-btn');
    const printBtn = document.getElementById('cert-print-btn');

    closeBtn?.addEventListener('click', () => this.close());
    backdrop?.addEventListener('click', (e) => {
      if (e.target === backdrop) this.close();
    });

    printBtn?.addEventListener('click', () => {
      window.print();
    });
  }

  public close() {
    this.container.innerHTML = '';
  }
}
