export interface ChemicalCompound {
  id: string;
  nameEn: string;
  nameAr: string;
  iupac: string;
  casNo: string;
  molecularFormula: string;
  molecularWeight: number;
  boilingPointC: number;
  therapeuticCategoryAr: string;
  therapeuticCategoryEn: string;
  fragranceNotesAr: string;
  fragranceNotesEn: string;
  radarScores: {
    antiMicrobial: number; // 0 - 100
    antiOxidant: number;
    antiInflammatory: number;
    neuroAroma: number;
    woundHealing: number;
  };
  retentionTimeMin: number; // For GC-MS chromatogram
  abundancePercent: number;
}

export interface TerroirProfile {
  id: string;
  nameAr: string;
  nameEn: string;
  regionAr: string;
  regionEn: string;
  coordinates: [number, number]; // [lat, lng]
  elevationMeters: number;
  climateZoneAr: string;
  climateZoneEn: string;
  annualRainfallMm: number;
  averageTempC: number;
  soilTypeAr: string;
  soilTypeEn: string;
  soilPh: number;
  solarRadiationKwh: number;
  phytochemicalPotencyMultiplier: number;
  descriptionAr: string;
  descriptionEn: string;
}

export interface PlantSpecimen {
  id: string;
  botanicalName: string;
  localNameAr: string;
  localNameEn: string;
  familyAr: string;
  familyEn: string;
  conservationStatusAr: string;
  conservationStatusEn: string;
  endemismLevelAr: string;
  endemismLevelEn: string;
  iconicTerroirId: string;
  floweringSeasonAr: string;
  floweringSeasonEn: string;
  biotechApplicationsAr: string[];
  biotechApplicationsEn: string[];
  traditionalUsesAr: string[];
  traditionalUsesEn: string[];
  extractionYieldBaselinePct: number; // Average baseline yield % w/w
  primaryCompounds: ChemicalCompound[];
  colorHex: string;
  accentHex: string;
  renderParams: {
    stemColor: number;
    branchColor: number;
    leafColor: number;
    flowerColor: number;
    pollenColor: number;
    growthNodes: number;
    petalCount: number;
    branchingFactor: number;
    foliageDensity: number;
    leafType: 'needle' | 'serrated' | 'petal' | 'compound' | 'succulent';
  };
}

export interface ExtractionParameters {
  method: 'steam' | 'supercritical_co2';
  temperatureC: number;
  pressureBar: number;
  durationMinutes: number;
  rawMaterialKg: number;
  solventFlowRateLpm: number;
}

export interface ExtractionResult {
  yieldMl: number;
  yieldWeightGrams: number;
  yieldEfficiencyPct: number;
  purityIndexPct: number;
  energyConsumptionKwh: number;
  activeConstituentsProfile: {
    compound: ChemicalCompound;
    recoveredPercentage: number;
  }[];
  terpeneIntegrityPct: number;
  co2FootprintGrams: number;
  batchSerialNumber: string;
  qualityGradeAr: string;
  qualityGradeEn: string;
}
