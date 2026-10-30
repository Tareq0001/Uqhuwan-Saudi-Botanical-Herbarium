import { PlantSpecimen } from '../types';
import { PHYTOCHEMICAL_CATALOG } from './compounds';

export const SAUDI_PLANTS: PlantSpecimen[] = [
  {
    id: 'juniperus_procera',
    botanicalName: 'Juniperus procera Hochst. ex Endl.',
    localNameAr: 'عرعر عسير الجبلي المعمر',
    localNameEn: 'Asir Ancient Mountain Juniper',
    familyAr: 'الفصيلة السروية (Cupressaceae)',
    familyEn: 'Cypress Family (Cupressaceae)',
    conservationStatusAr: 'أصناف جبلية محمية بيئياً (Near Threatened)',
    conservationStatusEn: 'Montane Heritage Relict (Near Threatened)',
    endemismLevelAr: 'أصيل في قمم السروات وعسير وجنوب الحجاز',
    endemismLevelEn: 'High-Altitude Afro-Alpine Relict in Sarawat Crests',
    iconicTerroirId: 'asir_sarawat',
    floweringSeasonAr: 'فصل الربيع وبداية الخريف مع رطوبة الضباب',
    floweringSeasonEn: 'Spring through early Autumn amidst orographic fog',
    biotechApplicationsAr: [
      'تخليق مضادات حيوية نباتية فائقة الفاعلية ضد السلالات المقاومة للأدوية',
      'صناعة المذيبات الخضراء البديلة للمركبات البترولية في التخليق العضوي',
      'مركبات تثبيت العطور النادرة وحماية الأغذية الطبيعية من التلف التأكسدي'
    ],
    biotechApplicationsEn: [
      'Green bio-antimicrobial synthesis countering multi-drug resistant strains',
      'Bio-based terpene green solvents substituting petroleum fractions',
      'Precious natural perfume fixatives and functional food biopreservatives'
    ],
    traditionalUsesAr: [
      'تبخير المساكن والأواني الخشبية لحفظ اللبن والسمن من التخمر',
      'تضميد الجروح القطعية العميقة براتنج العرعر لمنع التقيح'
    ],
    traditionalUsesEn: [
      'Traditional fumigation of storage vessels preserving artisanal dairy',
      'Wound poultices from juniper resin preventing microbial gangrene'
    ],
    extractionYieldBaselinePct: 1.85,
    primaryCompounds: [
      PHYTOCHEMICAL_CATALOG.alpha_pinene,
      PHYTOCHEMICAL_CATALOG.sabinene,
      PHYTOCHEMICAL_CATALOG.cedrol
    ],
    colorHex: '#064e3b',
    accentHex: '#34d399',
    renderParams: {
      stemColor: 0x4a2e18,
      branchColor: 0x5c3a21,
      leafColor: 0x14532d,
      flowerColor: 0x38bdf8, // Dusty blue cone berries
      pollenColor: 0x93c5fd,
      growthNodes: 7,
      petalCount: 16,
      branchingFactor: 1.8,
      foliageDensity: 1.4,
      leafType: 'needle'
    }
  },
  {
    id: 'rosa_damascena_taif',
    botanicalName: 'Rosa damascena trigintipetala Mill.',
    localNameAr: 'ورد الطائف الملكي ثلاثيني البتلات',
    localNameEn: 'Royal Taif Thirty-Petal Damask Rose',
    familyAr: 'الفصيلة الوردية (Rosaceae)',
    familyEn: 'Rose Family (Rosaceae)',
    conservationStatusAr: 'سلالة جغرافية فريدة محمية بمؤشر جغرافي وطني',
    conservationStatusEn: 'Protected Geographical Indication (PGI) Elite Terroir',
    endemismLevelAr: 'مستوطن تاريخي حصري في مدرجات الطائف (الشفا والهدا)',
    endemismLevelEn: 'Centuries-Old Acclimatized Micro-Terroir Cultivar',
    iconicTerroirId: 'taif_plateau',
    floweringSeasonAr: 'شهرا مارس وأبريل (موسم قطاف الورد الفجري)',
    floweringSeasonEn: 'March to April (Dawn Harvest Season under dew mist)',
    biotechApplicationsAr: [
      'استخلاص روح الورد ودهن العطر الملكي الأعلى نقاوة وقيمة عالمياً',
      'توليف أمصال مكافحة التجاعيد وتجديد الخلايا الجذعية للبشرة',
      'مركبات استرخاء الجهاز العصبي المركزي ومضادات الاكتئاب التكميلية'
    ],
    biotechApplicationsEn: [
      'Supercritical extraction of royal rose attar commanding peak world value',
      'Anti-senescent dermal serums inducing fibroblast collagen secretion',
      'Aromatherapeutic limbic soothing agents alleviating stress biomarkers'
    ],
    traditionalUsesAr: [
      'تقطير ماء العروس في القدور النحاسية التقليدية للضيافة الفاخرة والعلاج',
      'علاج الالتهابات العينية وتهدئة حروق الشمس'
    ],
    traditionalUsesEn: [
      'Copper alembic hydro-distillation for royal hospitality and eye tonics',
      'Calming thermal compresses for facial inflammation and cutaneous burns'
    ],
    extractionYieldBaselinePct: 0.12, // Extremely precious low yield
    primaryCompounds: [
      PHYTOCHEMICAL_CATALOG.geraniol,
      PHYTOCHEMICAL_CATALOG.citronellol,
      PHYTOCHEMICAL_CATALOG.damascenone
    ],
    colorHex: '#9d174d',
    accentHex: '#f43f5e',
    renderParams: {
      stemColor: 0x3f6212,
      branchColor: 0x4d7c0f,
      leafColor: 0x15803d,
      flowerColor: 0xf43f5e, // Royal rose magenta pink
      pollenColor: 0xfde047, // Golden stamens
      growthNodes: 5,
      petalCount: 30, // Thirty-petals
      branchingFactor: 1.4,
      foliageDensity: 1.1,
      leafType: 'petal'
    }
  },
  {
    id: 'lavandula_coronopifolia',
    botanicalName: 'Lavandula coronopifolia Poir.',
    localNameAr: 'خزامى الجوف البرية العطرية',
    localNameEn: 'Al-Jawf Wild Desert Lavender',
    familyAr: 'الفصيلة الشفوية (Lamiaceae)',
    familyEn: 'Mint Family (Lamiaceae)',
    conservationStatusAr: 'نبات بري صحراوي معمر عالي التحمل',
    conservationStatusEn: 'Extremophile Desert Flora (Least Concern)',
    endemismLevelAr: 'أصيل في السهول الشمالية ووديان الصحراء الصخرية',
    endemismLevelEn: 'Native Saharo-Arabian Xerophytic Specialist',
    iconicTerroirId: 'aljawf_oasis',
    floweringSeasonAr: 'أواخر الشتاء والربيع عقب هطول الأمطار الموسمية',
    floweringSeasonEn: 'Late Winter to mid-Spring following rainfall flushes',
    biotechApplicationsAr: [
      'مستخلصات تحسين جودة النوم وتقليل هرمون الكورتيزول دون آثار جانبية',
      'مضادات تشنج الجهاز الهضمي والقولون العصبي في الصيدلة الطبيعية',
      'مبيدات حشرية عضوية متقدمة لحماية المحاصيل دون تلويث المياه الجوفية'
    ],
    biotechApplicationsEn: [
      'GABA-A receptor targeting extracts improving deep non-REM sleep',
      'Spasmolytic smooth-muscle therapeutic agents for gastroenterology',
      'Eco-friendly organic biopesticides protecting delicate food security'
    ],
    traditionalUsesAr: [
      'إعداد شاي الخزامى البري لتهدئة الأعصاب وتخفيف آلام الرأس والبرد',
      'تعطير الأردية الصوفية لحمايتها من العث والحشرات'
    ],
    traditionalUsesEn: [
      'Infusions drunk for tension headaches, gastrointestinal colic and chills',
      'Aromatic sachets placed with woven camel wool to deter fabric moths'
    ],
    extractionYieldBaselinePct: 1.45,
    primaryCompounds: [
      PHYTOCHEMICAL_CATALOG.linalool,
      PHYTOCHEMICAL_CATALOG.linalyl_acetate,
      PHYTOCHEMICAL_CATALOG.alpha_pinene
    ],
    colorHex: '#581c87',
    accentHex: '#a855f7',
    renderParams: {
      stemColor: 0x4d7c0f,
      branchColor: 0x65a30d,
      leafColor: 0x4d7c0f,
      flowerColor: 0xa855f7, // Deep violet purple
      pollenColor: 0xe9d5ff,
      growthNodes: 6,
      petalCount: 20,
      branchingFactor: 1.5,
      foliageDensity: 1.2,
      leafType: 'serrated'
    }
  },
  {
    id: 'moringa_peregrina',
    botanicalName: 'Moringa peregrina (Forssk.) Fiori',
    localNameAr: 'يسر العلا وبان الجزيرة العربية',
    localNameEn: 'AlUla Arabian Peregrina (Ben Oil Tree)',
    familyAr: 'الفصيلة البانية (Moringaceae)',
    familyEn: 'Moringa Family (Moringaceae)',
    conservationStatusAr: 'شجرة وطنية ذات قيمة إيكولوجية واقتصادية استراتيجية',
    conservationStatusEn: 'Strategic National Flora & Ecological Keystone',
    endemismLevelAr: 'مستوطن في الوديان الحجرية بالعلا وتيماء وجبال الحجاز',
    endemismLevelEn: 'Endemic Arabian Sandstone Canyon & Wading Escarpments',
    iconicTerroirId: 'alula_canyons',
    floweringSeasonAr: 'موسم الربيع (مارس إلى مايو) مع تشكل قرون البذور صيفاً',
    floweringSeasonEn: 'Spring (March–May) setting long seed capsules by Summer',
    biotechApplicationsAr: [
      'زيت "البان" الذهبي المتميز بمقاومة قياسية للتزنخ والأكسدة الحرارية',
      'ببتيدات معالجة وتطهير المياه الطبيعية من العكارة والشوائب الميكروبية',
      'توليف بوليمرات حيوية ومغذيات صيدلانية متكاملة غنية بمضادات الأكسدة'
    ],
    biotechApplicationsEn: [
      'Aureous Ben oil exhibiting monumental thermal oxidative resistance',
      'Natural cationic peptides purifying drinking water and flocculating solids',
      'Nutraceutical bioactive complexes fighting oxidative metabolic decline'
    ],
    traditionalUsesAr: [
      'استخلاص دهن البان لدهن الجلد والشعر وعلاج التهاب المفاصل العتيق',
      'أكل البذور المقشرة لتحفيز الطاقة والمناعة'
    ],
    traditionalUsesEn: [
      'Balms of Ben oil soothing rheumatic pain, chapped lips and joints',
      'Crushed kernel consumption providing vitality and metabolic stamina'
    ],
    extractionYieldBaselinePct: 42.0, // High seed oil content
    primaryCompounds: [
      PHYTOCHEMICAL_CATALOG.behenic_acid,
      PHYTOCHEMICAL_CATALOG.quercetin,
      PHYTOCHEMICAL_CATALOG.geraniol
    ],
    colorHex: '#15803d',
    accentHex: '#facc15',
    renderParams: {
      stemColor: 0x78716c,
      branchColor: 0xa8a29e,
      leafColor: 0x84cc16,
      flowerColor: 0xfef08a, // Pale ivory-pink blossoms
      pollenColor: 0xfacc15,
      growthNodes: 8,
      petalCount: 15,
      branchingFactor: 1.7,
      foliageDensity: 0.9,
      leafType: 'compound'
    }
  },
  {
    id: 'avicennia_marina',
    botanicalName: 'Avicennia marina (Forssk.) Vierh.',
    localNameAr: 'قرم البحر الأحمر والفرسان (المانجروف)',
    localNameEn: 'Farasan Grey Mangrove Marine Halophyte',
    familyAr: 'الفصيلة الأقنثية (Acanthaceae)',
    familyEn: 'Acanthus Family (Acanthaceae)',
    conservationStatusAr: 'غابات ساحلية حيوية خاضعة لبرامج استزراع وطنية كبرى',
    conservationStatusEn: 'Vital Coastal Blue-Carbon Sanctuary (Protected)',
    endemismLevelAr: 'أصيل في الشواطئ الساحلية الاستوائية لجزر فرسان والبحر الأحمر',
    endemismLevelEn: 'Pristine Marine Intertidal Halophyte of Red Sea Littoral',
    iconicTerroirId: 'farasan_mangrove',
    floweringSeasonAr: 'أشهر الصيف المداري (يونيو إلى أغسطس)',
    floweringSeasonEn: 'Peak tropical summer months (June to August)',
    biotechApplicationsAr: [
      'استخلاص جينات التكيف الملحي ونقلها للمحاصيل الزراعية المقاومة للجفاف',
      'مركبات الكرومين البحرية النادرة ذات الخصائص المضادة للسرطان والميكروبات',
      'توليف واقيات بيولوجية من الأشعة فوق البنفسجية ومضادات حروق الشمس البحرية'
    ],
    biotechApplicationsEn: [
      'Halotolerance gene bioprospecting for drought-resilient crops',
      'Marine chromene derivatives exhibiting antitumor and antiviral defense',
      'Extreme photoprotective agents preventing cellular photo-aging'
    ],
    traditionalUsesAr: [
      'استخدام الأوراق لتطهير قروح الصيادين وتبريد الجلد من لسعات البحر',
      'صناعة الدباغة الطبيعية وحفظ شباك الصيد'
    ],
    traditionalUsesEn: [
      'Leaf pastes treating maritime ulcers and neutralizing sting irritations',
      'Tannin-rich wood and bark curing traditional fishing cordage and leather'
    ],
    extractionYieldBaselinePct: 1.15,
    primaryCompounds: [
      PHYTOCHEMICAL_CATALOG.avicennin,
      PHYTOCHEMICAL_CATALOG.taraxerol,
      PHYTOCHEMICAL_CATALOG.quercetin
    ],
    colorHex: '#047857',
    accentHex: '#fbbf24',
    renderParams: {
      stemColor: 0x57534e,
      branchColor: 0x78716c,
      leafColor: 0x166534,
      flowerColor: 0xf59e0b, // Golden yellow-orange clusters
      pollenColor: 0xfde68a,
      growthNodes: 6,
      petalCount: 18,
      branchingFactor: 1.6,
      foliageDensity: 1.3,
      leafType: 'succulent'
    }
  }
];
