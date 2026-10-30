import { PlantSpecimen, ExtractionParameters, ExtractionResult, TerroirProfile } from '../types';

export class ExtractionSimulatorEngine {
  /**
   * Computes precise thermodynamic and phytochemical extraction outputs
   */
  public static simulate(
    specimen: PlantSpecimen,
    terroir: TerroirProfile,
    params: ExtractionParameters
  ): ExtractionResult {
    const isCO2 = params.method === 'supercritical_co2';
    const potencyMul = terroir.phytochemicalPotencyMultiplier;

    // Thermodynamic efficiency calculation
    let efficiencyFactor = 0.85;
    let purityIndex = 90.0;
    let terpeneIntegrity = 92.0;

    if (isCO2) {
      // Supercritical CO2 optimum: Temp 38-48°C, Pressure 180-280 bar
      const tempDelta = Math.abs(params.temperatureC - 42);
      const pressDelta = Math.abs(params.pressureBar - 220);

      efficiencyFactor = Math.max(0.65, 1.15 - (tempDelta * 0.015 + pressDelta * 0.0015));
      purityIndex = Math.min(99.6, Math.max(88.0, 98.5 - tempDelta * 0.25 - pressDelta * 0.02));
      terpeneIntegrity = Math.min(99.8, Math.max(85.0, 99.2 - Math.max(0, params.temperatureC - 45) * 0.4));
    } else {
      // Steam distillation optimum: Temp 98-102°C, Pressure 1.2-1.8 bar
      const tempDelta = Math.abs(params.temperatureC - 100);
      const pressDelta = Math.abs(params.pressureBar - 1.5);

      efficiencyFactor = Math.max(0.55, 1.0 - (tempDelta * 0.03 + pressDelta * 0.1));
      purityIndex = Math.min(96.5, Math.max(78.0, 94.0 - tempDelta * 0.5 - pressDelta * 2.0));
      // Thermal degradation above 95°C
      terpeneIntegrity = Math.max(68.0, 94.0 - Math.max(0, params.temperatureC - 95) * 0.85);
    }

    // Duration saturation curve (asymptotic recovery)
    const durationFactor = 1.0 - Math.exp(-params.durationMinutes / (isCO2 ? 28 : 45));
    efficiencyFactor *= durationFactor;

    // Biomass yield calculation
    const baselineYieldKg = (params.rawMaterialKg * (specimen.extractionYieldBaselinePct / 100));
    const totalYieldWeightKg = baselineYieldKg * potencyMul * efficiencyFactor;
    const yieldWeightGrams = Math.max(0.1, totalYieldWeightKg * 1000);

    // Essential oil specific gravity ~ 0.885 g/ml
    const specificGravity = 0.885;
    const yieldMl = yieldWeightGrams / specificGravity;
    const yieldEfficiencyPct = (yieldWeightGrams / (params.rawMaterialKg * 1000)) * 100;

    // Energy calculation
    let energyConsumptionKwh = 0;
    if (isCO2) {
      // High pressure compressor + chilling cycle ~ 2.4 kWh / kg / hr
      energyConsumptionKwh = (params.rawMaterialKg * 0.18 * (params.durationMinutes / 60)) + (params.pressureBar * 0.012);
    } else {
      // Water latent heat of vaporization ~ 0.7 kWh / kg biomass
      energyConsumptionKwh = (params.rawMaterialKg * 0.35 * (params.durationMinutes / 60)) * (params.temperatureC / 100);
    }

    // Active constituents recovery breakdown
    const activeConstituentsProfile = specimen.primaryCompounds.map((compound) => {
      // Boiling point differential recovery
      let compEfficiency = efficiencyFactor;
      if (!isCO2 && compound.boilingPointC > 240) {
        // High boiling point sesquiterpenes need longer steam cycles
        compEfficiency *= Math.min(1.0, params.durationMinutes / 60);
      }
      const recoveredPercentage = Math.min(99.9, Math.max(20.0, compound.abundancePercent * compEfficiency * (terpeneIntegrity / 100)));
      return {
        compound,
        recoveredPercentage: Number(recoveredPercentage.toFixed(2))
      };
    });

    // CO2 footprint
    const co2FootprintGrams = isCO2
      ? energyConsumptionKwh * 320 * 0.3 // Recirculating closed-loop scCO2
      : energyConsumptionKwh * 450;

    // Cryptographic batch code
    const dateStr = new Date().toISOString().slice(2, 10).replace(/-/g, '');
    const randCode = Math.floor(1000 + Math.random() * 9000);
    const methodTag = isCO2 ? 'SC2' : 'STM';
    const batchSerialNumber = `UQ-${specimen.id.slice(0, 3).toUpperCase()}-${methodTag}-${dateStr}-${randCode}`;

    // Quality grading
    let qualityGradeAr = 'رتبة صيدلانية فائقة النقاوة (Pharma Grade AAA)';
    let qualityGradeEn = 'Pharma Grade AAA (Ultra-Purified)';

    if (purityIndex < 90 || terpeneIntegrity < 82) {
      qualityGradeAr = 'رتبة عطرية قياسية (Aromatherapy Standard)';
      qualityGradeEn = 'Therapeutic Aromatherapy Standard';
    } else if (purityIndex < 96) {
      qualityGradeAr = 'رتبة تجميلية ملكية فاخرة (Cosmetic Grade A+)';
      qualityGradeEn = 'Royal Cosmetic Grade A+ (Unadulterated)';
    }

    return {
      yieldMl: Number(yieldMl.toFixed(2)),
      yieldWeightGrams: Number(yieldWeightGrams.toFixed(2)),
      yieldEfficiencyPct: Number(yieldEfficiencyPct.toFixed(3)),
      purityIndexPct: Number(purityIndex.toFixed(1)),
      energyConsumptionKwh: Number(energyConsumptionKwh.toFixed(2)),
      activeConstituentsProfile,
      terpeneIntegrityPct: Number(terpeneIntegrity.toFixed(1)),
      co2FootprintGrams: Number(co2FootprintGrams.toFixed(1)),
      batchSerialNumber,
      qualityGradeAr,
      qualityGradeEn
    };
  }
}
