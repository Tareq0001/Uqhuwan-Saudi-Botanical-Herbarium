import { PlantSpecimen } from '../types';
import { Language, I18N } from '../i18n';

export class RadarChartRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private currentSpecimen: PlantSpecimen | null = null;
  private lang: Language = 'ar';

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Cannot get 2D context for radar');
    this.ctx = ctx;
  }

  public setSpecimen(specimen: PlantSpecimen, lang: Language = 'ar') {
    this.currentSpecimen = specimen;
    this.lang = lang;
    this.draw();
  }

  public draw() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    const ctx = this.ctx;

    ctx.clearRect(0, 0, w, h);

    const centerX = w / 2;
    const centerY = h / 2 + 5;
    const maxRadius = Math.min(centerX, centerY) - 45;

    const t = I18N[this.lang];
    const axes = [
      { key: 'antiMicrobial', label: t.axisAntimicrobial },
      { key: 'antiOxidant', label: t.axisAntioxidant },
      { key: 'antiInflammatory', label: t.axisAntiinflammatory },
      { key: 'neuroAroma', label: t.axisNeuroaroma },
      { key: 'woundHealing', label: t.axisWoundhealing }
    ];

    const numAxes = axes.length;
    const angleStep = (Math.PI * 2) / numAxes;

    // Draw concentric polygon rings (20%, 40%, 60%, 80%, 100%)
    const rings = 5;
    for (let r = 1; r <= rings; r++) {
      const radius = (maxRadius / rings) * r;
      ctx.beginPath();
      ctx.strokeStyle = r === rings ? '#10b981' : 'rgba(16, 185, 129, 0.2)';
      ctx.lineWidth = r === rings ? 1.5 : 1;
      ctx.setLineDash(r === rings ? [] : [2, 3]);

      for (let i = 0; i < numAxes; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();

      // Ring percentage label
      ctx.setLineDash([]);
      ctx.fillStyle = 'rgba(110, 231, 183, 0.6)';
      ctx.font = '8px monospace';
      ctx.fillText(`${r * 20}%`, centerX + 4, centerY - radius + 10);
    }
    ctx.setLineDash([]);

    // Draw radial spoke lines & labels
    for (let i = 0; i < numAxes; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = centerX + Math.cos(angle) * maxRadius;
      const y = centerY + Math.sin(angle) * maxRadius;

      ctx.beginPath();
      ctx.strokeStyle = 'rgba(52, 211, 153, 0.35)';
      ctx.lineWidth = 1;
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();

      // Label positioning
      const labelDist = maxRadius + 22;
      const lx = centerX + Math.cos(angle) * labelDist;
      const ly = centerY + Math.sin(angle) * labelDist;

      ctx.fillStyle = '#f8fafc';
      ctx.font = 'bold 10px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(axes[i].label, lx, ly);
    }

    if (!this.currentSpecimen) return;

    // Calculate weighted average score across specimen's active compounds
    const scores = {
      antiMicrobial: 0,
      antiOxidant: 0,
      antiInflammatory: 0,
      neuroAroma: 0,
      woundHealing: 0
    };

    let totalWeight = 0;
    this.currentSpecimen.primaryCompounds.forEach((c) => {
      const wgt = c.abundancePercent;
      totalWeight += wgt;
      scores.antiMicrobial += c.radarScores.antiMicrobial * wgt;
      scores.antiOxidant += c.radarScores.antiOxidant * wgt;
      scores.antiInflammatory += c.radarScores.antiInflammatory * wgt;
      scores.neuroAroma += c.radarScores.neuroAroma * wgt;
      scores.woundHealing += c.radarScores.woundHealing * wgt;
    });

    if (totalWeight > 0) {
      scores.antiMicrobial /= totalWeight;
      scores.antiOxidant /= totalWeight;
      scores.antiInflammatory /= totalWeight;
      scores.neuroAroma /= totalWeight;
      scores.woundHealing /= totalWeight;
    }

    // Draw Specimen Bioactivity Polygon
    ctx.beginPath();
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2.5;

    const polyPoints: { x: number; y: number }[] = [];

    axes.forEach((axis, i) => {
      const val = (scores as Record<string, number>)[axis.key] || 50;
      const radius = (val / 100) * maxRadius;
      const angle = i * angleStep - Math.PI / 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      polyPoints.push({ x, y });

      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.stroke();

    // Fill with glowing amber-emerald gradient
    const grad = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, maxRadius);
    grad.addColorStop(0, 'rgba(245, 158, 11, 0.45)');
    grad.addColorStop(1, 'rgba(16, 185, 129, 0.15)');
    ctx.fillStyle = grad;
    ctx.fill();

    // Vertex points & values
    polyPoints.forEach((pt, idx) => {
      ctx.beginPath();
      ctx.fillStyle = '#f59e0b';
      ctx.arc(pt.x, pt.y, 4.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      const val = Math.round((scores as Record<string, number>)[axes[idx].key]);
      ctx.fillStyle = '#fef08a';
      ctx.font = 'bold 9px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`${val}`, pt.x, pt.y - 8);
    });
  }
}
