import { PlantSpecimen, ChemicalCompound } from '../types';

export class MassSpectrometryRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private animProgress: number = 1.0;
  private animId: number | null = null;
  private activeSpecimen: PlantSpecimen | null = null;
  private hoveredCompound: ChemicalCompound | null = null;
  private peaks: { x: number; y: number; width: number; compound: ChemicalCompound }[] = [];

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Cannot get 2D context');
    this.ctx = ctx;

    this.bindHover();
  }

  public setSpecimen(specimen: PlantSpecimen) {
    this.activeSpecimen = specimen;
    this.animProgress = 0;
    this.animateScan();
  }

  private animateScan() {
    if (this.animId) cancelAnimationFrame(this.animId);

    const step = () => {
      this.animProgress += 0.035;
      this.draw();
      if (this.animProgress < 1.0) {
        this.animId = requestAnimationFrame(step);
      } else {
        this.animProgress = 1.0;
        this.draw();
      }
    };
    step();
  }

  private bindHover() {
    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      let found: ChemicalCompound | null = null;
      for (const p of this.peaks) {
        const dx = Math.abs(mouseX - p.x);
        if (dx < p.width * 1.5 && mouseY >= p.y - 20 && mouseY <= this.canvas.height - 30) {
          found = p.compound;
          break;
        }
      }

      if (this.hoveredCompound !== found) {
        this.hoveredCompound = found;
        this.draw();
      }
    });

    this.canvas.addEventListener('mouseleave', () => {
      if (this.hoveredCompound !== null) {
        this.hoveredCompound = null;
        this.draw();
      }
    });
  }

  public draw() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    const ctx = this.ctx;

    ctx.clearRect(0, 0, w, h);

    // Background grid
    ctx.fillStyle = '#021812';
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = '#064e3b';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 4]);

    const padLeft = 45;
    const padRight = 20;
    const padBottom = 35;
    const padTop = 25;
    const plotW = w - padLeft - padRight;
    const plotH = h - padTop - padBottom;

    // Horizontal grid
    for (let i = 0; i <= 5; i++) {
      const y = padTop + (plotH / 5) * i;
      ctx.beginPath();
      ctx.moveTo(padLeft, y);
      ctx.lineTo(w - padRight, y);
      ctx.stroke();

      // Axis labels (Abundance %)
      ctx.setLineDash([]);
      ctx.fillStyle = '#6ee7b7';
      ctx.font = '10px monospace';
      ctx.fillText(`${100 - i * 20}%`, 10, y + 4);
      ctx.setLineDash([3, 4]);
    }

    // Time Axis (0 to 22 min)
    const maxTime = 22;
    for (let t = 0; t <= maxTime; t += 2) {
      const x = padLeft + (t / maxTime) * plotW;
      ctx.beginPath();
      ctx.moveTo(x, padTop);
      ctx.lineTo(x, h - padBottom);
      ctx.stroke();

      ctx.setLineDash([]);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px monospace';
      ctx.fillText(`${t}m`, x - 8, h - padBottom + 16);
      ctx.setLineDash([3, 4]);
    }
    ctx.setLineDash([]);

    if (!this.activeSpecimen) return;

    this.peaks = [];
    const compounds = this.activeSpecimen.primaryCompounds;

    // Draw Chromatogram Curve
    ctx.beginPath();
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;

    const points: { x: number; y: number }[] = [];
    const totalSteps = 400;

    for (let s = 0; s <= totalSteps; s++) {
      const u = s / totalSteps;
      if (u > this.animProgress) break;

      const t = u * maxTime;
      const x = padLeft + u * plotW;

      // Base detector noise
      let abundance = 2.0 + Math.sin(t * 8) * 0.8 + Math.cos(t * 19) * 0.4;

      // Sum of Gaussian peaks for compounds
      compounds.forEach((comp) => {
        const center = comp.retentionTimeMin;
        const width = 0.35; // standard peak width in minutes
        const height = (comp.abundancePercent / 100) * 85; // peak height
        const g = height * Math.exp(-Math.pow(t - center, 2) / (2 * width * width));
        abundance += g;
      });

      const y = h - padBottom - (abundance / 100) * plotH;
      points.push({ x, y });

      if (s === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Area fill gradient under curve
    if (points.length > 1) {
      const last = points[points.length - 1];
      ctx.lineTo(last.x, h - padBottom);
      ctx.lineTo(padLeft, h - padBottom);
      ctx.closePath();

      const grad = ctx.createLinearGradient(0, padTop, 0, h - padBottom);
      grad.addColorStop(0, 'rgba(16, 185, 129, 0.35)');
      grad.addColorStop(1, 'rgba(16, 185, 129, 0.0)');
      ctx.fillStyle = grad;
      ctx.fill();
    }

    // Mark peaks and labels
    compounds.forEach((comp) => {
      const u = comp.retentionTimeMin / maxTime;
      if (u <= this.animProgress) {
        const peakX = padLeft + u * plotW;
        const peakY = h - padBottom - ((comp.abundancePercent * 0.85 + 2) / 100) * plotH;

        this.peaks.push({
          x: peakX,
          y: peakY,
          width: 18,
          compound: comp
        });

        const isHovered = this.hoveredCompound?.id === comp.id;

        // Peak marker
        ctx.fillStyle = isHovered ? '#f59e0b' : '#34d399';
        ctx.beginPath();
        ctx.arc(peakX, peakY, isHovered ? 6 : 4, 0, Math.PI * 2);
        ctx.fill();

        // Label
        ctx.fillStyle = isHovered ? '#fbbf24' : '#f8fafc';
        ctx.font = isHovered ? 'bold 11px sans-serif' : '10px sans-serif';
        ctx.fillText(comp.nameAr, peakX - 20, peakY - 12);
        ctx.fillStyle = '#6ee7b7';
        ctx.font = '9px monospace';
        ctx.fillText(`${comp.retentionTimeMin}m (${comp.abundancePercent}%)`, peakX - 22, peakY - 2);
      }
    });

    // Tooltip Card if hovered
    if (this.hoveredCompound) {
      const comp = this.hoveredCompound;
      const cardW = 210;
      const cardH = 90;
      const u = comp.retentionTimeMin / maxTime;
      let cardX = padLeft + u * plotW + 12;
      let cardY = padTop + 20;

      if (cardX + cardW > w - 10) cardX = padLeft + u * plotW - cardW - 12;

      ctx.fillStyle = 'rgba(2, 44, 34, 0.95)';
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(cardX, cardY, cardW, cardH, 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#fef08a';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText(`${comp.nameAr} (${comp.nameEn})`, cardX + 10, cardY + 18);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '9px monospace';
      ctx.fillText(`Formula: ${comp.molecularFormula} | MW: ${comp.molecularWeight} g/mol`, cardX + 10, cardY + 34);
      ctx.fillText(`BP: ${comp.boilingPointC}°C | CAS: ${comp.casNo}`, cardX + 10, cardY + 48);

      ctx.fillStyle = '#6ee7b7';
      ctx.font = '9px sans-serif';
      ctx.fillText(comp.therapeuticCategoryAr.slice(0, 32) + '...', cardX + 10, cardY + 64);
      ctx.fillText(comp.fragranceNotesAr.slice(0, 32) + '...', cardX + 10, cardY + 78);
    }
  }
}
