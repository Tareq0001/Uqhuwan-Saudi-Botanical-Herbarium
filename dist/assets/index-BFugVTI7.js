(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const Ne={alpha_pinene:{id:"alpha_pinene",nameEn:"α-Pinene",nameAr:"ألفا-بينين",iupac:"(1S,5S)-2,6,6-trimethylbicyclo[3.1.1]hept-2-ene",casNo:"80-56-8",molecularFormula:"C₁₀H₁₆",molecularWeight:136.23,boilingPointC:156,therapeuticCategoryAr:"موسع شعبي ومضاد حيوي نباتي ومقوي للذاكرة",therapeuticCategoryEn:"Bronchodilator, Natural Antibacterial & Acetylcholinesterase Inhibitor",fragranceNotesAr:"صنوبري نقي، ترابي منعش، عبير أشجار الجبال",fragranceNotesEn:"Crisp piney, fresh resinous, mountainous terpene",radarScores:{antiMicrobial:92,antiOxidant:74,antiInflammatory:88,neuroAroma:85,woundHealing:68},retentionTimeMin:4.15,abundancePercent:44.5},sabinene:{id:"sabinene",nameEn:"Sabinene",nameAr:"سابينين",iupac:"4-methylidene-1-propan-2-ylbicyclo[3.1.0]hexane",casNo:"3387-41-5",molecularFormula:"C₁₀H₁₆",molecularWeight:136.23,boilingPointC:163.5,therapeuticCategoryAr:"مضاد التهابات مفصلية ومنشط للدورة الدموية الدقيقة",therapeuticCategoryEn:"Anti-arthritic, Microcirculatory Stimulant & Anti-fungal",fragranceNotesAr:"تابلي دافئ مع لمحات خشبية وحمضية خفيفة",fragranceNotesEn:"Warm spicy, woody undertone with faint citrus nuance",radarScores:{antiMicrobial:78,antiOxidant:82,antiInflammatory:91,neuroAroma:64,woundHealing:72},retentionTimeMin:5.75,abundancePercent:18.2},cedrol:{id:"cedrol",nameEn:"Cedrol",nameAr:"سيدرول",iupac:"(1S,2R,5S,7R,8R)-2,6,6,8-tetramethyltricyclo[5.3.1.0¹,⁵]undecan-8-ol",casNo:"77-53-2",molecularFormula:"C₁₅H₂₆O",molecularWeight:222.37,boilingPointC:289,therapeuticCategoryAr:"مهدئ للجهاز العصبي السمبثاوي ومجدد لخلايا البشرة",therapeuticCategoryEn:"Sympatholytic Sedative, Cutaneous Regeneration & Fixative",fragranceNotesAr:"خشبي عميق، بلسمي عتيق، شذى غابات السرو القديمة",fragranceNotesEn:"Deep balsamic cedarwood, warm sweet dry amber",radarScores:{antiMicrobial:70,antiOxidant:86,antiInflammatory:84,neuroAroma:94,woundHealing:80},retentionTimeMin:14.2,abundancePercent:12.8},linalool:{id:"linalool",nameEn:"Linalool",nameAr:"لينالول",iupac:"3,7-dimethylocta-1,6-dien-3-ol",casNo:"78-70-6",molecularFormula:"C₁₀H₁₈O",molecularWeight:154.25,boilingPointC:198,therapeuticCategoryAr:"مضاد للقلق ومسكن للألم العصبي ومساعد على النوم العميق",therapeuticCategoryEn:"Anxiolytic, Neuro-Analgesic & Sleep Architecture Enhancer",fragranceNotesAr:"زهري أرستقراطي، منعش عشبي خفيف، سيتري ناعم",fragranceNotesEn:"Noble floral, crisp herbaceous lavender, subtle bergamot note",radarScores:{antiMicrobial:76,antiOxidant:80,antiInflammatory:85,neuroAroma:98,woundHealing:79},retentionTimeMin:8.42,abundancePercent:38.6},linalyl_acetate:{id:"linalyl_acetate",nameEn:"Linalyl Acetate",nameAr:"خلات الليناليل",iupac:"[3,7-dimethylocta-1,6-dien-3-yl] acetate",casNo:"115-95-7",molecularFormula:"C₁₂H₂₀O₂",molecularWeight:196.29,boilingPointC:220,therapeuticCategoryAr:"مرخي للعضلات الملساء ومضاد للتشنج الجهازي",therapeuticCategoryEn:"Spasmolytic, Muscular Relaxant & Cardioprotective Regulator",fragranceNotesAr:"فاكهي زهري خفيف مع إيحاءات الكمثرى واللافندر البري",fragranceNotesEn:"Sweet fruity-floral, fresh pear-bergamot nuance",radarScores:{antiMicrobial:65,antiOxidant:72,antiInflammatory:89,neuroAroma:95,woundHealing:73},retentionTimeMin:9.68,abundancePercent:26.4},damascenone:{id:"damascenone",nameEn:"β-Damascenone",nameAr:"بيتا-داماسينون",iupac:"(E)-1-(2,6,6-trimethylcyclohexa-1,3-dien-1-yl)but-2-en-1-one",casNo:"23696-85-7",molecularFormula:"C₁₃H₁₈O",molecularWeight:190.28,boilingPointC:255,therapeuticCategoryAr:"منظم للمزاج ومحفز لإفراز الإندورفين ومضاد للشيخوخة الخلوية",therapeuticCategoryEn:"Endorphin Stimulant, Mood Euphoric & Free-Radical Scavenger",fragranceNotesAr:"عسل الورد الغني، فاكهي برقوقي مسكر، جوهر العبير الملكي",fragranceNotesEn:"Rich honeyed rose, candied plum, exalted heart of royal attar",radarScores:{antiMicrobial:68,antiOxidant:96,antiInflammatory:83,neuroAroma:99,woundHealing:88},retentionTimeMin:12.15,abundancePercent:1.8},geraniol:{id:"geraniol",nameEn:"Geraniol",nameAr:"جيرانيول",iupac:"(2E)-3,7-dimethylocta-2,6-dien-1-ol",casNo:"106-24-1",molecularFormula:"C₁₀H₁₈O",molecularWeight:154.25,boilingPointC:229,therapeuticCategoryAr:"مضاد أكسدة قوي ومحفز لتخليق الكولاجين ومضاد للأورام",therapeuticCategoryEn:"Potent Antioxidant, Collagen Synthesis Inducer & Cytoprotective",fragranceNotesAr:"وردي خالص، حلو ومنعش كبتلات الورد الطازجة فجراً",fragranceNotesEn:"Pure crystalline rose floral, sweet dewy morning petals",radarScores:{antiMicrobial:84,antiOxidant:91,antiInflammatory:87,neuroAroma:93,woundHealing:94},retentionTimeMin:10.82,abundancePercent:29.5},citronellol:{id:"citronellol",nameEn:"Citronellol",nameAr:"سترونيلول",iupac:"3,7-dimethyloct-6-en-1-ol",casNo:"106-22-9",molecularFormula:"C₁₀H₂₀O",molecularWeight:156.27,boilingPointC:225,therapeuticCategoryAr:"طارد طبيعي للحشرات ومضاد للبكتيريا ومثبط للالتهابات الجلدية",therapeuticCategoryEn:"Insect Repellent, Broad-Spectrum Antibacterial & Anti-erythema",fragranceNotesAr:"وردي ليموني منعش، نظيف وخفيف وحيوي",fragranceNotesEn:"Rosy-citronella freshness, vibrant clean botanical lift",radarScores:{antiMicrobial:89,antiOxidant:79,antiInflammatory:82,neuroAroma:87,woundHealing:86},retentionTimeMin:10.22,abundancePercent:35.1},quercetin:{id:"quercetin",nameEn:"Quercetin Flavonoid",nameAr:"فلافونويد كيرسيتين",iupac:"2-(3,4-dihydroxyphenyl)-3,5,7-trihydroxychromen-4-one",casNo:"117-39-5",molecularFormula:"C₁₅H₁₀O₇",molecularWeight:302.24,boilingPointC:420,therapeuticCategoryAr:"مضاد فائق للحساسية والالتهابات وحامي للقلب والأوعية",therapeuticCategoryEn:"Mast-Cell Stabilizer, Senolytic Polyphenol & Cardioprotectant",fragranceNotesAr:"مركب غير متطاير، نكهة شاي أخضر ترابية قابضة",fragranceNotesEn:"Non-volatile polyphenol, astringent herbal green tea resonance",radarScores:{antiMicrobial:83,antiOxidant:98,antiInflammatory:95,neuroAroma:55,woundHealing:91},retentionTimeMin:15.65,abundancePercent:19.4},behenic_acid:{id:"behenic_acid",nameEn:"Behenic Acid (C22:0)",nameAr:"حمض البيهينيك (دهن البان)",iupac:"Docosanoic acid",casNo:"112-85-6",molecularFormula:"C₂₂H₄₄O₂",molecularWeight:340.58,boilingPointC:306,therapeuticCategoryAr:"مرمم للحاجز الدهني الجلدي ومثبت استثنائي لمستحضرات التجميل",therapeuticCategoryEn:"Epidermal Lipid Barrier Restorer & Supreme Oxidative Stabilizer",fragranceNotesAr:"شمعي محايد، قوام مخملي ناعم كالحرير",fragranceNotesEn:"Neutral waxy lipid, satin velvety cutaneous feel",radarScores:{antiMicrobial:60,antiOxidant:85,antiInflammatory:86,neuroAroma:48,woundHealing:96},retentionTimeMin:18.25,abundancePercent:32.8},avicennin:{id:"avicennin",nameEn:"Avicennin (Marine Chromene)",nameAr:"أفيسينين (كرومين بحري)",iupac:"6,6-dimethyl-2-phenyl-2,3-dihydropyrano[2,3-f]chromen-8-one",casNo:"24164-13-4",molecularFormula:"C₂₀H₁₆O₃",molecularWeight:304.34,boilingPointC:385,therapeuticCategoryAr:"مضاد ميكروبات بحري نادر ومكافح لتشكل الأغشية الحيوية الجرثومية",therapeuticCategoryEn:"Marine Biofilm Disruptor, Anti-tumorigenic & Immunomodulator",fragranceNotesAr:"أوزوني ملحي، طحلبي عميق برائحة شواطئ البحر الأحمر",fragranceNotesEn:"Saline marine ozone, deep mineral drift from coral estuaries",radarScores:{antiMicrobial:96,antiOxidant:93,antiInflammatory:90,neuroAroma:62,woundHealing:89},retentionTimeMin:13.45,abundancePercent:24.1},taraxerol:{id:"taraxerol",nameEn:"Taraxerol Triterpenoid",nameAr:"تاراكسيرول تريتربينويد",iupac:"(3β,14α)-D-Friedoolean-14-en-3-ol",casNo:"127-22-0",molecularFormula:"C₃₀H₅₀O",molecularWeight:426.72,boilingPointC:450,therapeuticCategoryAr:"مثبط لوسائط الالتهاب النسيجية ومعزز لالتئام الجروح الصعبة",therapeuticCategoryEn:"Tissue Cox-2 Inhibitor, Fibroblast Activator & Wound Closure Accel",fragranceNotesAr:"راتينجي كافوري بحري مع مسحة جيرية دافئة",fragranceNotesEn:"Resinous balsamic marine camphorous warm dry tone",radarScores:{antiMicrobial:81,antiOxidant:87,antiInflammatory:94,neuroAroma:58,woundHealing:97},retentionTimeMin:16.9,abundancePercent:15.5}},Ir=[{id:"juniperus_procera",botanicalName:"Juniperus procera Hochst. ex Endl.",localNameAr:"عرعر عسير الجبلي المعمر",localNameEn:"Asir Ancient Mountain Juniper",familyAr:"الفصيلة السروية (Cupressaceae)",familyEn:"Cypress Family (Cupressaceae)",conservationStatusAr:"أصناف جبلية محمية بيئياً (Near Threatened)",conservationStatusEn:"Montane Heritage Relict (Near Threatened)",endemismLevelAr:"أصيل في قمم السروات وعسير وجنوب الحجاز",endemismLevelEn:"High-Altitude Afro-Alpine Relict in Sarawat Crests",iconicTerroirId:"asir_sarawat",floweringSeasonAr:"فصل الربيع وبداية الخريف مع رطوبة الضباب",floweringSeasonEn:"Spring through early Autumn amidst orographic fog",biotechApplicationsAr:["تخليق مضادات حيوية نباتية فائقة الفاعلية ضد السلالات المقاومة للأدوية","صناعة المذيبات الخضراء البديلة للمركبات البترولية في التخليق العضوي","مركبات تثبيت العطور النادرة وحماية الأغذية الطبيعية من التلف التأكسدي"],biotechApplicationsEn:["Green bio-antimicrobial synthesis countering multi-drug resistant strains","Bio-based terpene green solvents substituting petroleum fractions","Precious natural perfume fixatives and functional food biopreservatives"],traditionalUsesAr:["تبخير المساكن والأواني الخشبية لحفظ اللبن والسمن من التخمر","تضميد الجروح القطعية العميقة براتنج العرعر لمنع التقيح"],traditionalUsesEn:["Traditional fumigation of storage vessels preserving artisanal dairy","Wound poultices from juniper resin preventing microbial gangrene"],extractionYieldBaselinePct:1.85,primaryCompounds:[Ne.alpha_pinene,Ne.sabinene,Ne.cedrol],colorHex:"#064e3b",accentHex:"#34d399",renderParams:{stemColor:4861464,branchColor:6044193,leafColor:1332013,flowerColor:3718648,pollenColor:9684477,growthNodes:7,petalCount:16,branchingFactor:1.8,foliageDensity:1.4,leafType:"needle"}},{id:"rosa_damascena_taif",botanicalName:"Rosa damascena trigintipetala Mill.",localNameAr:"ورد الطائف الملكي ثلاثيني البتلات",localNameEn:"Royal Taif Thirty-Petal Damask Rose",familyAr:"الفصيلة الوردية (Rosaceae)",familyEn:"Rose Family (Rosaceae)",conservationStatusAr:"سلالة جغرافية فريدة محمية بمؤشر جغرافي وطني",conservationStatusEn:"Protected Geographical Indication (PGI) Elite Terroir",endemismLevelAr:"مستوطن تاريخي حصري في مدرجات الطائف (الشفا والهدا)",endemismLevelEn:"Centuries-Old Acclimatized Micro-Terroir Cultivar",iconicTerroirId:"taif_plateau",floweringSeasonAr:"شهرا مارس وأبريل (موسم قطاف الورد الفجري)",floweringSeasonEn:"March to April (Dawn Harvest Season under dew mist)",biotechApplicationsAr:["استخلاص روح الورد ودهن العطر الملكي الأعلى نقاوة وقيمة عالمياً","توليف أمصال مكافحة التجاعيد وتجديد الخلايا الجذعية للبشرة","مركبات استرخاء الجهاز العصبي المركزي ومضادات الاكتئاب التكميلية"],biotechApplicationsEn:["Supercritical extraction of royal rose attar commanding peak world value","Anti-senescent dermal serums inducing fibroblast collagen secretion","Aromatherapeutic limbic soothing agents alleviating stress biomarkers"],traditionalUsesAr:["تقطير ماء العروس في القدور النحاسية التقليدية للضيافة الفاخرة والعلاج","علاج الالتهابات العينية وتهدئة حروق الشمس"],traditionalUsesEn:["Copper alembic hydro-distillation for royal hospitality and eye tonics","Calming thermal compresses for facial inflammation and cutaneous burns"],extractionYieldBaselinePct:.12,primaryCompounds:[Ne.geraniol,Ne.citronellol,Ne.damascenone],colorHex:"#9d174d",accentHex:"#f43f5e",renderParams:{stemColor:4153874,branchColor:5078031,leafColor:1409085,flowerColor:16007006,pollenColor:16638023,growthNodes:5,petalCount:30,branchingFactor:1.4,foliageDensity:1.1,leafType:"petal"}},{id:"lavandula_coronopifolia",botanicalName:"Lavandula coronopifolia Poir.",localNameAr:"خزامى الجوف البرية العطرية",localNameEn:"Al-Jawf Wild Desert Lavender",familyAr:"الفصيلة الشفوية (Lamiaceae)",familyEn:"Mint Family (Lamiaceae)",conservationStatusAr:"نبات بري صحراوي معمر عالي التحمل",conservationStatusEn:"Extremophile Desert Flora (Least Concern)",endemismLevelAr:"أصيل في السهول الشمالية ووديان الصحراء الصخرية",endemismLevelEn:"Native Saharo-Arabian Xerophytic Specialist",iconicTerroirId:"aljawf_oasis",floweringSeasonAr:"أواخر الشتاء والربيع عقب هطول الأمطار الموسمية",floweringSeasonEn:"Late Winter to mid-Spring following rainfall flushes",biotechApplicationsAr:["مستخلصات تحسين جودة النوم وتقليل هرمون الكورتيزول دون آثار جانبية","مضادات تشنج الجهاز الهضمي والقولون العصبي في الصيدلة الطبيعية","مبيدات حشرية عضوية متقدمة لحماية المحاصيل دون تلويث المياه الجوفية"],biotechApplicationsEn:["GABA-A receptor targeting extracts improving deep non-REM sleep","Spasmolytic smooth-muscle therapeutic agents for gastroenterology","Eco-friendly organic biopesticides protecting delicate food security"],traditionalUsesAr:["إعداد شاي الخزامى البري لتهدئة الأعصاب وتخفيف آلام الرأس والبرد","تعطير الأردية الصوفية لحمايتها من العث والحشرات"],traditionalUsesEn:["Infusions drunk for tension headaches, gastrointestinal colic and chills","Aromatic sachets placed with woven camel wool to deter fabric moths"],extractionYieldBaselinePct:1.45,primaryCompounds:[Ne.linalool,Ne.linalyl_acetate,Ne.alpha_pinene],colorHex:"#581c87",accentHex:"#a855f7",renderParams:{stemColor:5078031,branchColor:6660877,leafColor:5078031,flowerColor:11032055,pollenColor:15324671,growthNodes:6,petalCount:20,branchingFactor:1.5,foliageDensity:1.2,leafType:"serrated"}},{id:"moringa_peregrina",botanicalName:"Moringa peregrina (Forssk.) Fiori",localNameAr:"يسر العلا وبان الجزيرة العربية",localNameEn:"AlUla Arabian Peregrina (Ben Oil Tree)",familyAr:"الفصيلة البانية (Moringaceae)",familyEn:"Moringa Family (Moringaceae)",conservationStatusAr:"شجرة وطنية ذات قيمة إيكولوجية واقتصادية استراتيجية",conservationStatusEn:"Strategic National Flora & Ecological Keystone",endemismLevelAr:"مستوطن في الوديان الحجرية بالعلا وتيماء وجبال الحجاز",endemismLevelEn:"Endemic Arabian Sandstone Canyon & Wading Escarpments",iconicTerroirId:"alula_canyons",floweringSeasonAr:"موسم الربيع (مارس إلى مايو) مع تشكل قرون البذور صيفاً",floweringSeasonEn:"Spring (March–May) setting long seed capsules by Summer",biotechApplicationsAr:['زيت "البان" الذهبي المتميز بمقاومة قياسية للتزنخ والأكسدة الحرارية',"ببتيدات معالجة وتطهير المياه الطبيعية من العكارة والشوائب الميكروبية","توليف بوليمرات حيوية ومغذيات صيدلانية متكاملة غنية بمضادات الأكسدة"],biotechApplicationsEn:["Aureous Ben oil exhibiting monumental thermal oxidative resistance","Natural cationic peptides purifying drinking water and flocculating solids","Nutraceutical bioactive complexes fighting oxidative metabolic decline"],traditionalUsesAr:["استخلاص دهن البان لدهن الجلد والشعر وعلاج التهاب المفاصل العتيق","أكل البذور المقشرة لتحفيز الطاقة والمناعة"],traditionalUsesEn:["Balms of Ben oil soothing rheumatic pain, chapped lips and joints","Crushed kernel consumption providing vitality and metabolic stamina"],extractionYieldBaselinePct:42,primaryCompounds:[Ne.behenic_acid,Ne.quercetin,Ne.geraniol],colorHex:"#15803d",accentHex:"#facc15",renderParams:{stemColor:7893356,branchColor:11051678,leafColor:8702998,flowerColor:16707722,pollenColor:16436245,growthNodes:8,petalCount:15,branchingFactor:1.7,foliageDensity:.9,leafType:"compound"}},{id:"avicennia_marina",botanicalName:"Avicennia marina (Forssk.) Vierh.",localNameAr:"قرم البحر الأحمر والفرسان (المانجروف)",localNameEn:"Farasan Grey Mangrove Marine Halophyte",familyAr:"الفصيلة الأقنثية (Acanthaceae)",familyEn:"Acanthus Family (Acanthaceae)",conservationStatusAr:"غابات ساحلية حيوية خاضعة لبرامج استزراع وطنية كبرى",conservationStatusEn:"Vital Coastal Blue-Carbon Sanctuary (Protected)",endemismLevelAr:"أصيل في الشواطئ الساحلية الاستوائية لجزر فرسان والبحر الأحمر",endemismLevelEn:"Pristine Marine Intertidal Halophyte of Red Sea Littoral",iconicTerroirId:"farasan_mangrove",floweringSeasonAr:"أشهر الصيف المداري (يونيو إلى أغسطس)",floweringSeasonEn:"Peak tropical summer months (June to August)",biotechApplicationsAr:["استخلاص جينات التكيف الملحي ونقلها للمحاصيل الزراعية المقاومة للجفاف","مركبات الكرومين البحرية النادرة ذات الخصائص المضادة للسرطان والميكروبات","توليف واقيات بيولوجية من الأشعة فوق البنفسجية ومضادات حروق الشمس البحرية"],biotechApplicationsEn:["Halotolerance gene bioprospecting for drought-resilient crops","Marine chromene derivatives exhibiting antitumor and antiviral defense","Extreme photoprotective agents preventing cellular photo-aging"],traditionalUsesAr:["استخدام الأوراق لتطهير قروح الصيادين وتبريد الجلد من لسعات البحر","صناعة الدباغة الطبيعية وحفظ شباك الصيد"],traditionalUsesEn:["Leaf pastes treating maritime ulcers and neutralizing sting irritations","Tannin-rich wood and bark curing traditional fishing cordage and leather"],extractionYieldBaselinePct:1.15,primaryCompounds:[Ne.avicennin,Ne.taraxerol,Ne.quercetin],colorHex:"#047857",accentHex:"#fbbf24",renderParams:{stemColor:5722958,branchColor:7893356,leafColor:1467700,flowerColor:16096779,pollenColor:16639626,growthNodes:6,petalCount:18,branchingFactor:1.6,foliageDensity:1.3,leafType:"succulent"}}],Ur={asir_sarawat:{id:"asir_sarawat",nameAr:"غابات الضباب بسروات عسير",nameEn:"Asir Sarawat Cloud Forest",regionAr:"منطقة عسير - جبال السروات الشاهقة",regionEn:"Asir Region - High Sarawat Peaks",coordinates:[18.2164,42.5053],elevationMeters:2850,climateZoneAr:"شبه جاف جبلي علوي رطب بالضباب الكثيف",climateZoneEn:"Montane Sub-humid with Orographic Cloud Immersion",annualRainfallMm:480,averageTempC:17.5,soilTypeAr:"جرانيتية بازلتية بركانية غنية بالدبال الطبيعي",soilTypeEn:"Volcanic Basaltic Granite Rich in Natural Humus",soilPh:6.2,solarRadiationKwh:5.8,phytochemicalPotencyMultiplier:1.34,descriptionAr:"بيئة شاهقة الارتفاع يلفها الضباب الجبلي التراكمي وتتعرض لإشعاع فوق بنفسجي كثيف يحفز الإفراز الدفاعي للتربينات العطرية المقاومة للأكسدة.",descriptionEn:"High-altitude microclimate immersed in orographic mist with intense UV irradiation triggering high defense synthesis of antioxidant terpenes."},taif_plateau:{id:"taif_plateau",nameAr:"هضبة الشفا والهدا الطائفية",nameEn:"Taif Al-Hada & Al-Shafa Plateau",regionAr:"منطقة مكة المكرمة - مرتفعات الطائف",regionEn:"Makkah Province - Taif Highlands",coordinates:[21.2703,40.4158],elevationMeters:2200,climateZoneAr:"معتدل جبلي جاف مع ندى صباحي متواصل",climateZoneEn:"Temperate Montane Arid with Dense Morning Dew",annualRainfallMm:290,averageTempC:21,soilTypeAr:"غرينية رملية طينية مدرجات زراعية خصبة",soilTypeEn:"Alluvial Loamy Clay on Ancient Agricultural Terraces",soilPh:7.1,solarRadiationKwh:6.2,phytochemicalPotencyMultiplier:1.28,descriptionAr:"مهد الورد الطائفي ذو الفارق الحراري الحاد بين ليل بارد ونهار مشمس، مما يركز جزيئات الداماسينون والجيرانيول العطرية في بتلات الأزهار.",descriptionEn:"Cradle of Taif Damask Rose with high diurnal temperature fluctuation that concentrates damascenone and geraniol aromatic molecules in petals."},aljawf_oasis:{id:"aljawf_oasis",nameAr:"سهول وادي السرحان بالجوف",nameEn:"Al-Jawf Wadi As-Sirhan Steppes",regionAr:"منطقة الجوف - الشمال السعودي",regionEn:"Al-Jawf Region - Northern Saudi Arabia",coordinates:[29.9697,40.2064],elevationMeters:620,climateZoneAr:"صحراوي قاري متطرف البرودة شتاءً والحرارة صيفاً",climateZoneEn:"Continental Desert with Extreme Winter Freezing & Summer Heat",annualRainfallMm:95,averageTempC:22.4,soilTypeAr:"جيرية كلسية طميية جيدة التصريف",soilTypeEn:"Calcareous Limestone Loam with Superior Drainage",soilPh:7.9,solarRadiationKwh:6.9,phytochemicalPotencyMultiplier:1.18,descriptionAr:"تربة جيرية غنية بالمعادن الشتوية تمنح نباتات الخزامى البرية تركيزاً استثنائياً من مركبات اللينالول ومضادات الميكروبات النباتية.",descriptionEn:"Calcareous limestone soil with winter chill inducing exceptional accumulation of linalool and antimicrobial phytochemicals in wild lavender."},alula_canyons:{id:"alula_canyons",nameAr:"أودية حرة عويرض وواحات العلا",nameEn:"AlUla Harrat Canyons & Oases",regionAr:"منطقة المدينة المنورة - وادي القرى بالعلا",regionEn:"Madinah Province - AlUla Valley & Harrat Basalts",coordinates:[26.6167,37.9167],elevationMeters:740,climateZoneAr:"جاف حار مع تغذية جوفية عذبة من حجر النوبة الرملي",climateZoneEn:"Hyper-Arid with Pristine Artesian Sandstone Aquifers",annualRainfallMm:65,averageTempC:25.8,soilTypeAr:"مزيج رملي رسوبي وفتات بازلتي معدني",soilTypeEn:"Sedimentary Nubian Sandstone & Basaltic Mineral Debris",soilPh:7.4,solarRadiationKwh:7.2,phytochemicalPotencyMultiplier:1.22,descriptionAr:'وديان صخرية عميقة محمية من الرياح المباشرة وتتغذى بآبار معدنية عذبة، مما يمنح شجرة اليسر زيت "البان" ذو الاستقرار التأكسدي الفائق.',descriptionEn:"Deep sheltered sandstone canyons irrigated by mineral artesian wells yielding peregrina moringa oil with legendary oxidative stability."},farasan_mangrove:{id:"farasan_mangrove",nameAr:"خلجان جزر فرسان وساحل البحر الأحمر",nameEn:"Farasan Archipelago & Red Sea Inlets",regionAr:"منطقة جازان - المحمية البحرية الشاطئية",regionEn:"Jazan Province - Marine Protected Coral Archipelago",coordinates:[16.7028,42.1189],elevationMeters:2,climateZoneAr:"مداري بحري رطب عالي الملوحة والحرارة",climateZoneEn:"Tropical Marine Humid with Hypersaline Tidal Dynamics",annualRainfallMm:80,averageTempC:29.5,soilTypeAr:"طينية كربوناتية بحرية مشبعة بالملح واليود",soilTypeEn:"Marine Carbonate Silt Hypersaturated in Salts and Iodine",soilPh:8.3,solarRadiationKwh:6.8,phytochemicalPotencyMultiplier:1.31,descriptionAr:"بيئة مد وجزر ملحية قاسية تحفز تخليق مضادات الأكسدة الفينولية والفلافونويدات المعقدة لحماية أنسجة شجر القرم من الإجهاد الملحي.",descriptionEn:"Harsh hypersaline tidal intertidal zone demanding rapid synthesis of complex phenolic antioxidants to defend tissues against saline stress."}},Ri={ar:{appTitle:"أُقْـحُـوان",appSubtitle:"معمل التقنية الحيوية النباتية ومستخلصات الفلورا السعودية ثلاثي الأبعاد",ownerCredit:"تصميم وهندسة معمارية النظم: أ. طارق ابوعشي",ownerRole:"كبير معمارية النظم ومختبر التقنية الحيوية النباتية",navSpecimens:"المعشبة ثلاثية الأبعاد",navBiotechLab:"معمل الاستخلاص الفيتوكيميائي",navTerroirAtlas:"أطلس المناخ والتربة السعودية",navChromatography:"التحليل الطيفي والمطيافية",navCertificate:"شهادة التحليل المخبري",themeLight:"ورق المعشبة التراثي",themeDark:"البيت الزجاجي النباتي",audioWind:"صوت نسيم الجبال",audioDistill:"صوت قطرات التقطير",audioBloom:"رنين التفتح العضوي",audioMute:"كتم الصوت",audioUnmute:"تشغيل الصوت",growthStageLabel:"مرحلة النمو والتفتح العضوي",growthSprout:"إنبات مبكر (0%)",growthBudding:"تبرعم وتفرع (50%)",growthFullBloom:"إزهار واكتمال (100%)",cameraReset:"إعادة ضبط الكاميرا",cameraMacro:"عدسة الماكرو المقربة",cameraCanopy:"منظر التاج العلوي",cameraStem:"نظام الجذع والتشعب",wireframeMode:"العرض الشبكي / العضوي",lightDaylight:"ضوء النهار الطبيعي",lightGreenhouse:"إضاءة الحاضنة الحيوية",lightBioluminescent:"التوهج الحيوي الليلي",autoRotate:"الدوران التلقائي",pollenAura:"هالة حبوب اللقاح",scientificTaxonomy:"التصنيف العلمي والتسلسل النباتي",family:"الفصيلة النباتية",endemism:"مستوى الاستيطان الوطني",conservationStatus:"الحالة البيئية والحماية",terroirOrigin:"الموطن والتربة النموذجية",floweringCycle:"دورة وموسم الإزهار",biotechApplications:"التطبيقات الحيوية والصيدلانية المتقدمة",traditionalHeritage:"الاستخدامات التراثية والطب الشعبي",primaryBioactives:"المركبات النشطة الحيوية الرئيسية",baselineYield:"المحصول الاستخلاصي المعياري",simHeader:"محاكي الاستخلاص الحيوي فائق الدقة",simSub:"توليف المعايير الترموديناميكية لاستخلاص الزيوت العطرية والمستخلصات الفعالة",methodSelect:"تقنية الاستخلاص المعتمدة",methodSteam:"التقطير المائي بالبخار الحيوي (Steam Distillation)",methodSupercritical:"استخلاص ثنائي أكسيد الكربون فوق الحرج (Supercritical CO₂)",tempControl:"درجة حرارة حجرة الاستخلاص (°C)",pressureControl:"ضغط الحجرة الموصدة (Bar)",durationControl:"زمن دورة الاستخلاص (دقيقة)",materialMassControl:"كتلة العينة النباتية الطازجة (كجم)",solventFlowControl:"معدل تدفق المذيب / البخار (لتر/دقيقة)",runSimulation:"بدء دورة الاستخلاص والتحليل الكيميائي",simulatingProcess:"جاري تشغيل الضواغط والمكثف وجمع المستخلص...",extractionResults:"نتائج الاستخلاص ومؤشرات الجودة",yieldVolume:"حجم الزيت العطري المستخلص",yieldEfficiency:"كفاءة الاستخلاص مقارنة بالكتلة الحيوية",purityIndex:"مؤشر النقاوة الكيميائية والخلو من الشوائب",terpeneIntegrity:"سلامة الهيكل الجزيئي للتربينات العطرية",energyConsumed:"استهلاك الطاقة الحرارية والميكانيكية",co2Impact:"البصمة الكربونية المقدرة للدورة",qualityGrade:"تصنيف الرتبة الصيدلانية للمستخلص",gradePremium:"رتبة صيدلانية فائقة النقاوة (Pharma Grade AAA)",gradeCosmetic:"رتبة تجميلية ملكية فاخرة (Cosmetic Grade A+)",gradeStandard:"رتبة عطرية قياسية (Aromatherapy Standard)",massSpecTitle:"كروماتوغرافيا الغاز ومطيافية الكتلة (GC-MS)",massSpecSub:"فصل وتحديد القمم الجزيئية وأوقات الاحتباس للمركبات المتطايرة",retentionTime:"زمن الاحتباس (دقيقة)",relativeAbundance:"الوفرة النسبية (%)",radarTitle:"رادار الخصائص العلاجية والحسية",radarSub:"تحليل تكاملي متعدد المحاور للنشاط الحيوي للمستخلص النباتي",axisAntimicrobial:"مضاد للميكروبات",axisAntioxidant:"مضاد للأكسدة",axisAntiinflammatory:"مضاد للالتهاب",axisNeuroaroma:"التأثير العصبي الحسي",axisWoundhealing:"ترميم وتئام الأنسجة",terroirTitle:"أطلس النظم البيئية والجغرافيا الحيوية للفلورا السعودية",terroirSub:"ارتباط الخصائص الجيولوجية والمناخية بتركيز المركبات النباتية الفعالة",elevation:"الارتفاع فوق سطح البحر",rainfall:"معدل هطول الأمطار السنوي",averageTemp:"متوسط درجة الحرارة السنوية",soilPh:"الرقم الهيدروجيني للتربة (pH)",solarRadiation:"الإشعاع الشمسي السنوي",potencyMultiplier:"مُضاعف التركيز الفيتوكيميائي",viewIn3d:"تحميل العينة ثلاثية الأبعاد في المعشبة",certTitle:"شهادة المطابقة الفيتوكيميائية وتحليل المستخلص النباتي",certSub:"مختبر التقنية الحيوية النباتية والفلورا السعودية الوطنية",certBatchNo:"رقم دفعة التحليل المشفرة",certIssueDate:"تاريخ الفحص والإصدار المخبري",certBotanicalSource:"المصدر النباتي والتصنيف الوراثي",certOriginTerroir:"النظام البيئي والموطن الجغرافي",certAnalysisSummary:"ملخص الفحص الكروماتوغرافي للمركبات",certAuthorizedSign:"المصادقة والاعتماد التقني الحصري",certSignatoryName:"أ. طارق ابوعشي",certSignatoryTitle:"كبير معمارية النظم والمشرف على تقنيات الاستخلاص الحيوي",certPrintBtn:"طباعة الشهادة الرسمية (PDF / Print)",certCloseBtn:"إغلاق نافذة الوثيقة",certCelebrate:"تم اعتماد وتوثيق المستخلص النباتي بنجاح!"},en:{appTitle:"UQHUWAN",appSubtitle:"Botanical Biotechnology & Saudi Flora Herbarium 3D",ownerCredit:"System Architecture & Design: Tareq Abuashi",ownerRole:"Lead Systems Architect & Botanical Biotechnology Specialist",navSpecimens:"3D Herbarium",navBiotechLab:"Biotech Extraction Lab",navTerroirAtlas:"Saudi Terroir Atlas",navChromatography:"Spectrometry & GC-MS",navCertificate:"Phytosanitary Certificate",themeLight:"Herbarium Parchment",themeDark:"Botanical Greenhouse",audioWind:"Mountain Breeze Sound",audioDistill:"Distillation Droplets",audioBloom:"Organic Bloom Chime",audioMute:"Mute Audio",audioUnmute:"Unmute Audio",growthStageLabel:"Organic Growth & Unfurling Stage",growthSprout:"Early Sprout (0%)",growthBudding:"Branching & Budding (50%)",growthFullBloom:"Full Anthesis & Bloom (100%)",cameraReset:"Reset View",cameraMacro:"Macro Lens",cameraCanopy:"Canopy View",cameraStem:"Stem Architecture",wireframeMode:"Wireframe / Organic Mode",lightDaylight:"Natural Sun",lightGreenhouse:"Greenhouse Spectra",lightBioluminescent:"Bioluminescent Glow",autoRotate:"Auto Orbit",pollenAura:"Pollen Aura",scientificTaxonomy:"Scientific Taxonomy & Genealogy",family:"Botanical Family",endemism:"Endemism & Origin Status",conservationStatus:"Conservation Status",terroirOrigin:"Native Biogeographical Terroir",floweringCycle:"Phenology & Anthesis Cycle",biotechApplications:"Biotech & Advanced Phytochemical Applications",traditionalHeritage:"Ethnobotanical Heritage & Ancient Uses",primaryBioactives:"Signature Bioactive Phytochemicals",baselineYield:"Standard Baseline Yield",simHeader:"High-Precision Biotech Extraction Simulator",simSub:"Thermodynamic optimization for essential oil and bioactive compound fractionation",methodSelect:"Extraction Methodology",methodSteam:"Bio-Steam Hydro-Distillation",methodSupercritical:"Supercritical Carbon Dioxide (scCO₂)",tempControl:"Chamber Temperature (°C)",pressureControl:"Vessel Pressure (Bar)",durationControl:"Extraction Cycle Duration (Min)",materialMassControl:"Fresh Biomass Load (kg)",solventFlowControl:"Solvent / Steam Flow Rate (L/min)",runSimulation:"Initiate Extraction & Biochemical Fractionation",simulatingProcess:"Pressurizing vessel, condensing volatile terpenes, and stratifying oil...",extractionResults:"Extraction Yield & Quality Diagnostics",yieldVolume:"Isolated Essential Oil Volume",yieldEfficiency:"Biomass Fractionation Yield Efficiency",purityIndex:"Chromatographic Purity Index",terpeneIntegrity:"Terpene & Volatile Molecular Integrity",energyConsumed:"Total Process Energy Consumption",co2Impact:"Estimated Process CO₂ Footprint",qualityGrade:"Phytopharmaceutical Classification",gradePremium:"Pharma Grade AAA (Ultra-Purified)",gradeCosmetic:"Royal Cosmetic Grade A+ (Unadulterated)",gradeStandard:"Therapeutic Aromatherapy Standard",massSpecTitle:"Gas Chromatography - Mass Spectrometry (GC-MS)",massSpecSub:"Retention time fractionation and spectral molecular confirmation",retentionTime:"Retention Time (min)",relativeAbundance:"Relative Abundance (%)",radarTitle:"Sensory & Phytomedicinal Radar",radarSub:"5-Axis Integrative Bioactivity Assessment",axisAntimicrobial:"Anti-Microbial",axisAntioxidant:"Anti-Oxidant",axisAntiinflammatory:"Anti-Inflammatory",axisNeuroaroma:"Neuro-Aroma",axisWoundhealing:"Tissue Regeneration",terroirTitle:"Saudi Flora Biogeographical & Terroir Atlas",terroirSub:"Geological, climatic, and altitude drivers of secondary metabolite expression",elevation:"Elevation Above Sea Level",rainfall:"Mean Annual Precipitation",averageTemp:"Mean Annual Temperature",soilPh:"Soil Acidity / Alkalinity (pH)",solarRadiation:"Annual Solar Radiation",potencyMultiplier:"Phytochemical Potency Index",viewIn3d:"Examine 3D Specimen in Herbarium",certTitle:"Official Phytosanitary Certificate & Phytochemical Analysis Dossier",certSub:"Saudi National Flora Herbarium & Plant Biotechnology Laboratory",certBatchNo:"Encrypted Cryptographic Batch Code",certIssueDate:"Laboratory Verification & Issue Date",certBotanicalSource:"Botanical Source & Genetic Lineage",certOriginTerroir:"Native Biogeographical Terroir",certAnalysisSummary:"Chromatographic Compound Profile Summary",certAuthorizedSign:"Sole Official Certification & Accreditation",certSignatoryName:"Tareq Abuashi",certSignatoryTitle:"Lead Systems Architect & Director of Botanical Biotechnology Systems",certPrintBtn:"Print Certificate Dossier (PDF)",certCloseBtn:"Dismiss Document",certCelebrate:"Botanical Extract successfully authenticated and certified!"}};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dl="174",hd=0,tc=1,ud=2,bh=1,Ah=2,On=3,li=0,Ge=1,un=2,ri=0,dr=1,co=2,ec=3,nc=4,dd=5,Pi=100,fd=101,pd=102,md=103,gd=104,_d=200,vd=201,xd=202,Md=203,ho=204,uo=205,yd=206,Sd=207,Ed=208,Td=209,bd=210,Ad=211,wd=212,Cd=213,Rd=214,fo=0,po=1,mo=2,vr=3,go=4,_o=5,vo=6,xo=7,wh=0,Pd=1,Ld=2,si=0,Dd=1,Id=2,Ud=3,Ch=4,Nd=5,Fd=6,Od=7,Rh=300,xr=301,Mr=302,Mo=303,yo=304,ua=306,So=1e3,Ii=1001,Eo=1002,yn=1003,Bd=1004,ms=1005,wn=1006,xa=1007,Ui=1008,Wn=1009,Ph=1010,Lh=1011,Jr=1012,fl=1013,Hi=1014,Hn=1015,as=1016,pl=1017,ml=1018,yr=1020,Dh=35902,Ih=1021,Uh=1022,Mn=1023,Nh=1024,Fh=1025,fr=1026,Sr=1027,Oh=1028,gl=1029,Bh=1030,_l=1031,vl=1033,Gs=33776,Vs=33777,Ws=33778,Xs=33779,To=35840,bo=35841,Ao=35842,wo=35843,Co=36196,Ro=37492,Po=37496,Lo=37808,Do=37809,Io=37810,Uo=37811,No=37812,Fo=37813,Oo=37814,Bo=37815,zo=37816,ko=37817,Ho=37818,Go=37819,Vo=37820,Wo=37821,qs=36492,Xo=36494,qo=36495,zh=36283,Yo=36284,$o=36285,Ko=36286,zd=3200,kd=3201,kh=0,Hd=1,ti="",hn="srgb",Er="srgb-linear",js="linear",te="srgb",Yi=7680,ic=519,Gd=512,Vd=513,Wd=514,Hh=515,Xd=516,qd=517,Yd=518,$d=519,rc=35044,sc="300 es",Gn=2e3,Qs=2001;class Pr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ma=Math.PI/180,ta=180/Math.PI;function os(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[r&255]+Pe[r>>8&255]+Pe[r>>16&255]+Pe[r>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function Ht(r,t,e){return Math.max(t,Math.min(e,r))}function Kd(r,t){return(r%t+t)%t}function ya(r,t,e){return(1-e)*r+e*t}function Nr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ze(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(t=0,e=0){Rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,n,i,s,a,o,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],_=n[8],g=i[0],m=i[3],f=i[6],S=i[1],y=i[4],M=i[7],b=i[2],C=i[5],A=i[8];return s[0]=a*g+o*S+l*b,s[3]=a*m+o*y+l*C,s[6]=a*f+o*M+l*A,s[1]=c*g+h*S+u*b,s[4]=c*m+h*y+u*C,s[7]=c*f+h*M+u*A,s[2]=d*g+p*S+_*b,s[5]=d*m+p*y+_*C,s[8]=d*f+p*M+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,_=e*u+n*d+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*s-o*e)*g,t[6]=p*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Sa.makeScale(t,e)),this}rotate(t){return this.premultiply(Sa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Sa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Sa=new Bt;function Gh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ea(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Zd(){const r=ea("canvas");return r.style.display="block",r}const ac={};function Ti(r){r in ac||(ac[r]=!0,console.warn(r))}function Jd(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function jd(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Qd(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const oc=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lc=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tf(){const r={enabled:!0,workingColorSpace:Er,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===te&&(i.r=Vn(i.r),i.g=Vn(i.g),i.b=Vn(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(i.r=pr(i.r),i.g=pr(i.g),i.b=pr(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ti?js:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Er]:{primaries:t,whitePoint:n,transfer:js,toXYZ:oc,fromXYZ:lc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:t,whitePoint:n,transfer:te,toXYZ:oc,fromXYZ:lc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),r}const Zt=tf();function Vn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function pr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let $i;class ef{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$i===void 0&&($i=ea("canvas")),$i.width=t.width,$i.height=t.height;const n=$i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$i}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ea("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Vn(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vn(e[n]/255)*255):e[n]=Vn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nf=0;class xl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=os(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ea(i[a].image)):s.push(Ea(i[a]))}else s=Ea(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ea(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ef.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rf=0;class Ve extends Pr{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=Ii,i=Ii,s=wn,a=Ui,o=Mn,l=Wn,c=Ve.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=os(),this.name="",this.source=new xl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case So:t.x=t.x-Math.floor(t.x);break;case Ii:t.x=t.x<0?0:1;break;case Eo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case So:t.y=t.y-Math.floor(t.y);break;case Ii:t.y=t.y<0?0:1;break;case Eo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Rh;Ve.DEFAULT_ANISOTROPY=1;class ee{constructor(t=0,e=0,n=0,i=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,M=(p+1)/2,b=(f+1)/2,C=(h+d)/4,A=(u+g)/4,w=(_+m)/4;return y>M&&y>b?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=C/n,s=A/n):M>b?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=C/i,s=w/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=A/s,i=w/s),this.set(n,i,s,e),this}let S=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(u-g)/S,this.z=(d-h)/S,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this.w=Ht(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this.w=Ht(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sf extends Pr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ve(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new xl(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends sf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Vh extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class af extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ls{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[a+0],p=s[a+1],_=s[a+2],g=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==d||c!==p||h!==_){let m=1-o;const f=l*d+c*p+h*_+u*g,S=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const b=Math.sqrt(y),C=Math.atan2(b,f*S);m=Math.sin(m*C)/b,o=Math.sin(o*C)/b}const M=o*S;if(l=l*m+d*M,c=c*m+p*M,h=h*m+_*M,u=u*m+g*M,m===1-o){const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],p=s[a+2],_=s[a+3];return t[e]=o*_+h*u+l*p-c*d,t[e+1]=l*_+h*d+c*u-o*p,t[e+2]=c*_+h*p+o*d-l*u,t[e+3]=h*_-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),p=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"YXZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"ZXY":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"ZYX":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"YZX":this._x=d*h*u+c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u-d*p*_;break;case"XZY":this._x=d*h*u-c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ht(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ta.copy(this).projectOnVector(t),this.sub(Ta)}reflect(t){return this.sub(Ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ta=new U,cc=new ls;class cs{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gn):gn.fromBufferAttribute(s,a),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gs.copy(n.boundingBox)),gs.applyMatrix4(t.matrixWorld),this.union(gs)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fr),_s.subVectors(this.max,Fr),Ki.subVectors(t.a,Fr),Zi.subVectors(t.b,Fr),Ji.subVectors(t.c,Fr),$n.subVectors(Zi,Ki),Kn.subVectors(Ji,Zi),gi.subVectors(Ki,Ji);let e=[0,-$n.z,$n.y,0,-Kn.z,Kn.y,0,-gi.z,gi.y,$n.z,0,-$n.x,Kn.z,0,-Kn.x,gi.z,0,-gi.x,-$n.y,$n.x,0,-Kn.y,Kn.x,0,-gi.y,gi.x,0];return!ba(e,Ki,Zi,Ji,_s)||(e=[1,0,0,0,1,0,0,0,1],!ba(e,Ki,Zi,Ji,_s))?!1:(vs.crossVectors($n,Kn),e=[vs.x,vs.y,vs.z],ba(e,Ki,Zi,Ji,_s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Dn=[new U,new U,new U,new U,new U,new U,new U,new U],gn=new U,gs=new cs,Ki=new U,Zi=new U,Ji=new U,$n=new U,Kn=new U,gi=new U,Fr=new U,_s=new U,vs=new U,_i=new U;function ba(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){_i.fromArray(r,s);const o=i.x*Math.abs(_i.x)+i.y*Math.abs(_i.y)+i.z*Math.abs(_i.z),l=t.dot(_i),c=e.dot(_i),h=n.dot(_i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const of=new cs,Or=new U,Aa=new U;class hs{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):of.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Or.subVectors(t,this.center);const e=Or.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Or,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Aa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Or.copy(t.center).add(Aa)),this.expandByPoint(Or.copy(t.center).sub(Aa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new U,wa=new U,xs=new U,Zn=new U,Ca=new U,Ms=new U,Ra=new U;class Ml{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){wa.copy(t).add(e).multiplyScalar(.5),xs.copy(e).sub(t).normalize(),Zn.copy(this.origin).sub(wa);const s=t.distanceTo(e)*.5,a=-this.direction.dot(xs),o=Zn.dot(this.direction),l=-Zn.dot(xs),c=Zn.lengthSq(),h=Math.abs(1-a*a);let u,d,p,_;if(h>0)if(u=a*l-o,d=a*o-l,_=s*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(wa).addScaledVector(xs,d),p}intersectSphere(t,e){In.subVectors(t.center,this.origin);const n=In.dot(this.direction),i=In.dot(In)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,i,s){Ca.subVectors(e,t),Ms.subVectors(n,t),Ra.crossVectors(Ca,Ms);let a=this.direction.dot(Ra),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zn.subVectors(this.origin,t);const l=o*this.direction.dot(Ms.crossVectors(Zn,Ms));if(l<0)return null;const c=o*this.direction.dot(Ca.cross(Zn));if(c<0||l+c>a)return null;const h=-o*Zn.dot(Ra);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,i,s,a,o,l,c,h,u,d,p,_,g,m){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,u,d,p,_,g,m)}set(t,e,n,i,s,a,o,l,c,h,u,d,p,_,g,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ji.setFromMatrixColumn(t,0).length(),s=1/ji.setFromMatrixColumn(t,1).length(),a=1/ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=a*h,p=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+_*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,_=c*h,g=c*u;e[0]=d+g*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-_,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,_=c*h,g=c*u;e[0]=d-g*o,e[4]=-a*u,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-p,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-d*u,e[8]=_*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+_,e[10]=d-g*u}else if(t.order==="XZY"){const d=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=a*h,e[9]=p*u-_,e[2]=_*u-p,e[6]=o*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lf,t,cf)}lookAt(t,e,n){const i=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Jn.crossVectors(n,Ze),Jn.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Jn.crossVectors(n,Ze)),Jn.normalize(),ys.crossVectors(Ze,Jn),i[0]=Jn.x,i[4]=ys.x,i[8]=Ze.x,i[1]=Jn.y,i[5]=ys.y,i[9]=Ze.y,i[2]=Jn.z,i[6]=ys.z,i[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],_=n[2],g=n[6],m=n[10],f=n[14],S=n[3],y=n[7],M=n[11],b=n[15],C=i[0],A=i[4],w=i[8],v=i[12],x=i[1],L=i[5],F=i[9],N=i[13],H=i[2],X=i[6],V=i[10],Y=i[14],G=i[3],nt=i[7],I=i[11],R=i[15];return s[0]=a*C+o*x+l*H+c*G,s[4]=a*A+o*L+l*X+c*nt,s[8]=a*w+o*F+l*V+c*I,s[12]=a*v+o*N+l*Y+c*R,s[1]=h*C+u*x+d*H+p*G,s[5]=h*A+u*L+d*X+p*nt,s[9]=h*w+u*F+d*V+p*I,s[13]=h*v+u*N+d*Y+p*R,s[2]=_*C+g*x+m*H+f*G,s[6]=_*A+g*L+m*X+f*nt,s[10]=_*w+g*F+m*V+f*I,s[14]=_*v+g*N+m*Y+f*R,s[3]=S*C+y*x+M*H+b*G,s[7]=S*A+y*L+M*X+b*nt,s[11]=S*w+y*F+M*V+b*I,s[15]=S*v+y*N+M*Y+b*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],_=t[3],g=t[7],m=t[11],f=t[15];return _*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*p-n*l*p)+g*(+e*l*p-e*c*d+s*a*d-i*a*p+i*c*h-s*l*h)+m*(+e*c*u-e*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+f*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],_=t[12],g=t[13],m=t[14],f=t[15],S=u*m*c-g*d*c+g*l*p-o*m*p-u*l*f+o*d*f,y=_*d*c-h*m*c-_*l*p+a*m*p+h*l*f-a*d*f,M=h*g*c-_*u*c+_*o*p-a*g*p-h*o*f+a*u*f,b=_*u*l-h*g*l-_*o*d+a*g*d+h*o*m-a*u*m,C=e*S+n*y+i*M+s*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return t[0]=S*A,t[1]=(g*d*s-u*m*s-g*i*p+n*m*p+u*i*f-n*d*f)*A,t[2]=(o*m*s-g*l*s+g*i*c-n*m*c-o*i*f+n*l*f)*A,t[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*p-n*l*p)*A,t[4]=y*A,t[5]=(h*m*s-_*d*s+_*i*p-e*m*p-h*i*f+e*d*f)*A,t[6]=(_*l*s-a*m*s-_*i*c+e*m*c+a*i*f-e*l*f)*A,t[7]=(a*d*s-h*l*s+h*i*c-e*d*c-a*i*p+e*l*p)*A,t[8]=M*A,t[9]=(_*u*s-h*g*s-_*n*p+e*g*p+h*n*f-e*u*f)*A,t[10]=(a*g*s-_*o*s+_*n*c-e*g*c-a*n*f+e*o*f)*A,t[11]=(h*o*s-a*u*s-h*n*c+e*u*c+a*n*p-e*o*p)*A,t[12]=b*A,t[13]=(h*g*i-_*u*i+_*n*d-e*g*d-h*n*m+e*u*m)*A,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*m-e*o*m)*A,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,_=s*u,g=a*h,m=a*u,f=o*u,S=l*c,y=l*h,M=l*u,b=n.x,C=n.y,A=n.z;return i[0]=(1-(g+f))*b,i[1]=(p+M)*b,i[2]=(_-y)*b,i[3]=0,i[4]=(p-M)*C,i[5]=(1-(d+f))*C,i[6]=(m+S)*C,i[7]=0,i[8]=(_+y)*A,i[9]=(m-S)*A,i[10]=(1-(d+g))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ji.set(i[0],i[1],i[2]).length();const a=ji.set(i[4],i[5],i[6]).length(),o=ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],_n.copy(this);const c=1/s,h=1/a,u=1/o;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,e.setFromRotationMatrix(_n),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Gn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let p,_;if(o===Gn)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Qs)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Gn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-s),d=(e+t)*c,p=(n+i)*h;let _,g;if(o===Gn)_=(a+s)*u,g=-2*u;else if(o===Qs)_=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ji=new U,_n=new ae,lf=new U(0,0,0),cf=new U(1,1,1),Jn=new U,ys=new U,Ze=new U,hc=new ae,uc=new ls;class Rn{constructor(t=0,e=0,n=0,i=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uc.setFromEuler(this),this.setFromQuaternion(uc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class Wh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hf=0;const dc=new U,Qi=new ls,Un=new ae,Ss=new U,Br=new U,uf=new U,df=new ls,fc=new U(1,0,0),pc=new U(0,1,0),mc=new U(0,0,1),gc={type:"added"},ff={type:"removed"},tr={type:"childadded",child:null},Pa={type:"childremoved",child:null};class ye extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new U,e=new Rn,n=new ls,i=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ae},normalMatrix:{value:new Bt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(fc,t)}rotateY(t){return this.rotateOnAxis(pc,t)}rotateZ(t){return this.rotateOnAxis(mc,t)}translateOnAxis(t,e){return dc.copy(t).applyQuaternion(this.quaternion),this.position.add(dc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fc,t)}translateY(t){return this.translateOnAxis(pc,t)}translateZ(t){return this.translateOnAxis(mc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ss.copy(t):Ss.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Br,Ss,this.up):Un.lookAt(Ss,Br,this.up),this.quaternion.setFromRotationMatrix(Un),i&&(Un.extractRotation(i.matrixWorld),Qi.setFromRotationMatrix(Un),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gc),tr.child=t,this.dispatchEvent(tr),tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ff),Pa.child=t,this.dispatchEvent(Pa),Pa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gc),tr.child=t,this.dispatchEvent(tr),tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,t,uf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,df,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ye.DEFAULT_UP=new U(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new U,Nn=new U,La=new U,Fn=new U,er=new U,nr=new U,_c=new U,Da=new U,Ia=new U,Ua=new U,Na=new ee,Fa=new ee,Oa=new ee;class xn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),vn.subVectors(t,e),i.cross(vn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){vn.subVectors(i,e),Nn.subVectors(n,e),La.subVectors(t,e);const a=vn.dot(vn),o=vn.dot(Nn),l=vn.dot(La),c=Nn.dot(Nn),h=Nn.dot(La),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,_=(a*h-o*l)*d;return s.set(1-p-_,_,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return Na.setScalar(0),Fa.setScalar(0),Oa.setScalar(0),Na.fromBufferAttribute(t,e),Fa.fromBufferAttribute(t,n),Oa.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Na,s.x),a.addScaledVector(Fa,s.y),a.addScaledVector(Oa,s.z),a}static isFrontFacing(t,e,n,i){return vn.subVectors(n,e),Nn.subVectors(t,e),vn.cross(Nn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),vn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return xn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;er.subVectors(i,n),nr.subVectors(s,n),Da.subVectors(t,n);const l=er.dot(Da),c=nr.dot(Da);if(l<=0&&c<=0)return e.copy(n);Ia.subVectors(t,i);const h=er.dot(Ia),u=nr.dot(Ia);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(er,a);Ua.subVectors(t,s);const p=er.dot(Ua),_=nr.dot(Ua);if(_>=0&&p<=_)return e.copy(s);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(nr,o);const m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return _c.subVectors(s,i),o=(u-h)/(u-h+(p-_)),e.copy(i).addScaledVector(_c,o);const f=1/(m+g+d);return a=g*f,o=d*f,e.copy(n).addScaledVector(er,a).addScaledVector(nr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Es={h:0,s:0,l:0};function Ba(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=Kd(t,1),e=Ht(e,0,1),n=Ht(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Ba(a,s,t+1/3),this.g=Ba(a,s,t),this.b=Ba(a,s,t-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(t,e=hn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){const n=Xh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=pr(t.r),this.g=pr(t.g),this.b=pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return Zt.fromWorkingColorSpace(Le.copy(this),t),Math.round(Ht(Le.r*255,0,255))*65536+Math.round(Ht(Le.g*255,0,255))*256+Math.round(Ht(Le.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Le.copy(this),e);const n=Le.r,i=Le.g,s=Le.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=hn){Zt.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,i=Le.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(Es);const n=ya(jn.h,Es.h,e),i=ya(jn.s,Es.s,e),s=ya(jn.l,Es.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new Vt;Vt.NAMES=Xh;let pf=0;class Wi extends Pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=os(),this.name="",this.type="Material",this.blending=dr,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ho,this.blendDst=uo,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ho&&(n.blendSrc=this.blendSrc),this.blendDst!==uo&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ic&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class yl extends Wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new U,Ts=new Rt;let mf=0;class Sn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=rc,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ts.fromBufferAttribute(this,e),Ts.applyMatrix3(t),this.setXY(e,Ts.x,Ts.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Nr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Nr(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Nr(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Nr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Nr(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),i=ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),i=ze(i,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rc&&(t.usage=this.usage),t}}class qh extends Sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yh extends Sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends Sn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let gf=0;const ln=new ae,za=new ye,ir=new U,Je=new cs,zr=new cs,Te=new U;class Oe extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gh(t)?Yh:qh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Bt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return za.lookAt(t),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new de(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Je.setFromBufferAttribute(s),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];zr.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(Je.min,zr.min),Je.expandByPoint(Te),Te.addVectors(Je.max,zr.max),Je.expandByPoint(Te)):(Je.expandByPoint(zr.min),Je.expandByPoint(zr.max))}Je.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Te.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Te));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Te.fromBufferAttribute(o,c),l&&(ir.fromBufferAttribute(t,c),Te.add(ir)),i=Math.max(i,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let w=0;w<n.count;w++)o[w]=new U,l[w]=new U;const c=new U,h=new U,u=new U,d=new Rt,p=new Rt,_=new Rt,g=new U,m=new U;function f(w,v,x){c.fromBufferAttribute(n,w),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,x),d.fromBufferAttribute(s,w),p.fromBufferAttribute(s,v),_.fromBufferAttribute(s,x),h.sub(c),u.sub(c),p.sub(d),_.sub(d);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(L),o[w].add(g),o[v].add(g),o[x].add(g),l[w].add(m),l[v].add(m),l[x].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let w=0,v=S.length;w<v;++w){const x=S[w],L=x.start,F=x.count;for(let N=L,H=L+F;N<H;N+=3)f(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const y=new U,M=new U,b=new U,C=new U;function A(w){b.fromBufferAttribute(i,w),C.copy(b);const v=o[w];y.copy(v),y.sub(b.multiplyScalar(b.dot(v))).normalize(),M.crossVectors(C,v);const L=M.dot(l[w])<0?-1:1;a.setXYZW(w,y.x,y.y,y.z,L)}for(let w=0,v=S.length;w<v;++w){const x=S[w],L=x.start,F=x.count;for(let N=L,H=L+F;N<H;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new U,s=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let d=0,p=t.count;d<p;d+=3){const _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*h;for(let f=0;f<h;f++)d[_++]=c[p++]}return new Sn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oe,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vc=new ae,vi=new Ml,bs=new hs,xc=new U,As=new U,ws=new U,Cs=new U,ka=new U,Rs=new U,Mc=new U,Ps=new U;class qt extends ye{constructor(t=new Oe,e=new yl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Rs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(ka.fromBufferAttribute(u,t),a?Rs.addScaledVector(ka,h):Rs.addScaledVector(ka.sub(e),h))}e.add(Rs)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(s),vi.copy(t.ray).recast(t.near),!(bs.containsPoint(vi.origin)===!1&&(vi.intersectSphere(bs,xc)===null||vi.origin.distanceToSquared(xc)>(t.far-t.near)**2))&&(vc.copy(s).invert(),vi.copy(t.ray).applyMatrix4(vc),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=a[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,b=y;M<b;M+=3){const C=o.getX(M),A=o.getX(M+1),w=o.getX(M+2);i=Ls(this,f,t,n,c,h,u,C,A,w),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const S=o.getX(m),y=o.getX(m+1),M=o.getX(m+2);i=Ls(this,a,t,n,c,h,u,S,y,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=a[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,b=y;M<b;M+=3){const C=M,A=M+1,w=M+2;i=Ls(this,f,t,n,c,h,u,C,A,w),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const S=m,y=m+1,M=m+2;i=Ls(this,a,t,n,c,h,u,S,y,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function _f(r,t,e,n,i,s,a,o){let l;if(t.side===Ge?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===li,o),l===null)return null;Ps.copy(o),Ps.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ps);return c<e.near||c>e.far?null:{distance:c,point:Ps.clone(),object:r}}function Ls(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,As),r.getVertexPosition(l,ws),r.getVertexPosition(c,Cs);const h=_f(r,t,e,n,As,ws,Cs,Mc);if(h){const u=new U;xn.getBarycoord(Mc,As,ws,Cs,u),i&&(h.uv=xn.getInterpolatedAttribute(i,o,l,c,u,new Rt)),s&&(h.uv1=xn.getInterpolatedAttribute(s,o,l,c,u,new Rt)),a&&(h.normal=xn.getInterpolatedAttribute(a,o,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};xn.getNormal(As,ws,Cs,d.normal),h.face=d,h.barycoord=u}return h}class Vi extends Oe{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(u,2));function _(g,m,f,S,y,M,b,C,A,w,v){const x=M/A,L=b/w,F=M/2,N=b/2,H=C/2,X=A+1,V=w+1;let Y=0,G=0;const nt=new U;for(let I=0;I<V;I++){const R=I*L-N;for(let j=0;j<X;j++){const it=j*x-F;nt[g]=it*S,nt[m]=R*y,nt[f]=H,c.push(nt.x,nt.y,nt.z),nt[g]=0,nt[m]=0,nt[f]=C>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(j/A),u.push(1-I/w),Y+=1}}for(let I=0;I<w;I++)for(let R=0;R<A;R++){const j=d+R+X*I,it=d+R+X*(I+1),O=d+(R+1)+X*(I+1),W=d+(R+1)+X*I;l.push(j,it,W),l.push(it,O,W),G+=6}o.addGroup(p,G,v),p+=G,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Tr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Fe(r){const t={};for(let e=0;e<r.length;e++){const n=Tr(r[e]);for(const i in n)t[i]=n[i]}return t}function vf(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function $h(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const xf={clone:Tr,merge:Fe};var Mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends Wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mf,this.fragmentShader=yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Tr(t.uniforms),this.uniformsGroups=vf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Kh extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new U,yc=new Rt,Sc=new Rt;class ke extends Kh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ta*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ta*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,yc,Sc),e.subVectors(Sc,yc)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ma*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const rr=-90,sr=1;class Sf extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ke(rr,sr,t,e);i.layers=this.layers,this.add(i);const s=new ke(rr,sr,t,e);s.layers=this.layers,this.add(s);const a=new ke(rr,sr,t,e);a.layers=this.layers,this.add(a);const o=new ke(rr,sr,t,e);o.layers=this.layers,this.add(o);const l=new ke(rr,sr,t,e);l.layers=this.layers,this.add(l);const c=new ke(rr,sr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Zh extends Ve{constructor(t,e,n,i,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:xr,super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ef extends Gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Zh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Vi(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:Tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:ri});s.uniforms.tEquirect.value=e;const a=new qt(i,s),o=e.minFilter;return e.minFilter===Ui&&(e.minFilter=wn),new Sf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}class xe extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tf={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tf)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Sl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Vt(t),this.density=e}clone(){return new Sl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class bf extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ga=new U,Af=new U,wf=new Bt;class bi{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ga.subVectors(n,e).cross(Af.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ga),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||wf.getNormalMatrix(t),i=this.coplanarPoint(Ga).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new hs,Ds=new U;class El{constructor(t=new bi,e=new bi,n=new bi,i=new bi,s=new bi,a=new bi){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gn){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],_=i[9],g=i[10],m=i[11],f=i[12],S=i[13],y=i[14],M=i[15];if(n[0].setComponents(l-s,d-c,m-p,M-f).normalize(),n[1].setComponents(l+s,d+c,m+p,M+f).normalize(),n[2].setComponents(l+a,d+h,m+_,M+S).normalize(),n[3].setComponents(l-a,d-h,m-_,M-S).normalize(),n[4].setComponents(l-o,d-u,m-g,M-y).normalize(),e===Gn)n[5].setComponents(l+o,d+u,m+g,M+y).normalize();else if(e===Qs)n[5].setComponents(o,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ds.x=i.normal.x>0?t.max.x:t.min.x,Ds.y=i.normal.y>0?t.max.y:t.min.y,Ds.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jh extends Wi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const na=new U,ia=new U,Ec=new ae,kr=new Ml,Is=new hs,Va=new U,Tc=new U;class Cf extends ye{constructor(t=new Oe,e=new Jh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)na.fromBufferAttribute(e,i-1),ia.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=na.distanceTo(ia);t.setAttribute("lineDistance",new de(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(i),Is.radius+=s,t.ray.intersectsSphere(Is)===!1)return;Ec.copy(i).invert(),kr.copy(t.ray).applyMatrix4(Ec);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=p,m=_-1;g<m;g+=c){const f=h.getX(g),S=h.getX(g+1),y=Us(this,t,kr,l,f,S,g);y&&e.push(y)}if(this.isLineLoop){const g=h.getX(_-1),m=h.getX(p),f=Us(this,t,kr,l,g,m,_-1);f&&e.push(f)}}else{const p=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let g=p,m=_-1;g<m;g+=c){const f=Us(this,t,kr,l,g,g+1,g);f&&e.push(f)}if(this.isLineLoop){const g=Us(this,t,kr,l,_-1,p,_-1);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Us(r,t,e,n,i,s,a){const o=r.geometry.attributes.position;if(na.fromBufferAttribute(o,i),ia.fromBufferAttribute(o,s),e.distanceSqToSegment(na,ia,Va,Tc)>n)return;Va.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Va);if(!(c<t.near||c>t.far))return{distance:c,point:Tc.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const bc=new U,Ac=new U;class Rf extends Cf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)bc.fromBufferAttribute(e,i),Ac.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+bc.distanceTo(Ac);t.setAttribute("lineDistance",new de(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jh extends Wi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const wc=new ae,Zo=new Ml,Ns=new hs,Fs=new U;class Pf extends ye{constructor(t=new Oe,e=new jh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(i),Ns.radius+=s,t.ray.intersectsSphere(Ns)===!1)return;wc.copy(i).invert(),Zo.copy(t.ray).applyMatrix4(wc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=d,g=p;_<g;_++){const m=c.getX(_);Fs.fromBufferAttribute(u,m),Cc(Fs,m,l,i,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=d,g=p;_<g;_++)Fs.fromBufferAttribute(u,_),Cc(Fs,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Cc(r,t,e,n,i,s,a){const o=Zo.distanceSqToPoint(r);if(o<e){const l=new U;Zo.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Qh extends Ve{constructor(t,e,n,i,s,a,o,l,c,h=fr){if(h!==fr&&h!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===fr&&(n=Hi),n===void 0&&h===Sr&&(n=yr),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Yn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],d=n[i+1]-h,p=(a-h)/d;return(i+p)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=e||(a.isVector2?new Rt:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new U,i=[],s=[],a=[],o=new U,l=new ae;for(let p=0;p<=t;p++){const _=p/t;i[p]=this.getTangentAt(_,new U)}s[0]=new U,a[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Ht(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(i[p],s[p])}if(e===!0){let p=Math.acos(Ht(s[0].dot(s[t]),-1,1));p/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(p=-p);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],p*_)),a[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class tu extends Yn{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Rt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Lf extends tu{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Tl(){let r=0,t=0,e=0,n=0;function i(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+n*o}}}const Os=new U,Wa=new Tl,Xa=new Tl,qa=new Tl;class Bn extends Yn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new U){const n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(Os.subVectors(i[0],i[1]).add(i[0]),c=Os);const u=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Os.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Os),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),Wa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,g,m),Xa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,g,m),qa.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(Wa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Xa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),qa.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Wa.calc(l),Xa.calc(l),qa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new U().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Rc(r,t,e,n,i){const s=(n-t)*.5,a=(i-e)*.5,o=r*r,l=r*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*r+e}function Df(r,t){const e=1-r;return e*e*t}function If(r,t){return 2*(1-r)*r*t}function Uf(r,t){return r*r*t}function qr(r,t,e,n){return Df(r,t)+If(r,e)+Uf(r,n)}function Nf(r,t){const e=1-r;return e*e*e*t}function Ff(r,t){const e=1-r;return 3*e*e*r*t}function Of(r,t){return 3*(1-r)*r*r*t}function Bf(r,t){return r*r*r*t}function Yr(r,t,e,n,i){return Nf(r,t)+Ff(r,e)+Of(r,n)+Bf(r,i)}class zf extends Yn{constructor(t=new Rt,e=new Rt,n=new Rt,i=new Rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Rt){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Yr(t,i.x,s.x,a.x,o.x),Yr(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class kf extends Yn{constructor(t=new U,e=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new U){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Yr(t,i.x,s.x,a.x,o.x),Yr(t,i.y,s.y,a.y,o.y),Yr(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Hf extends Yn{constructor(t=new Rt,e=new Rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gf extends Yn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vf extends Yn{constructor(t=new Rt,e=new Rt,n=new Rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Rt){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(qr(t,i.x,s.x,a.x),qr(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class eu extends Yn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(qr(t,i.x,s.x,a.x),qr(t,i.y,s.y,a.y),qr(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wf extends Yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Rt){const n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Rc(o,l.x,c.x,h.x,u.x),Rc(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Rt().fromArray(i))}return this}}var Xf=Object.freeze({__proto__:null,ArcCurve:Lf,CatmullRomCurve3:Bn,CubicBezierCurve:zf,CubicBezierCurve3:kf,EllipseCurve:tu,LineCurve:Hf,LineCurve3:Gf,QuadraticBezierCurve:Vf,QuadraticBezierCurve3:eu,SplineCurve:Wf});class Fi extends Oe{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],p=[];let _=0;const g=[],m=n/2;let f=0;S(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new de(u,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(p,2));function S(){const M=new U,b=new U;let C=0;const A=(e-t)/n;for(let w=0;w<=s;w++){const v=[],x=w/s,L=x*(e-t)+t;for(let F=0;F<=i;F++){const N=F/i,H=N*l+o,X=Math.sin(H),V=Math.cos(H);b.x=L*X,b.y=-x*n+m,b.z=L*V,u.push(b.x,b.y,b.z),M.set(X,A,V).normalize(),d.push(M.x,M.y,M.z),p.push(N,1-x),v.push(_++)}g.push(v)}for(let w=0;w<i;w++)for(let v=0;v<s;v++){const x=g[v][w],L=g[v+1][w],F=g[v+1][w+1],N=g[v][w+1];(t>0||v!==0)&&(h.push(x,L,N),C+=3),(e>0||v!==s-1)&&(h.push(L,F,N),C+=3)}c.addGroup(f,C,0),f+=C}function y(M){const b=_,C=new Rt,A=new U;let w=0;const v=M===!0?t:e,x=M===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*x,0),d.push(0,x,0),p.push(.5,.5),_++;const L=_;for(let F=0;F<=i;F++){const H=F/i*l+o,X=Math.cos(H),V=Math.sin(H);A.x=v*V,A.y=m*x,A.z=v*X,u.push(A.x,A.y,A.z),d.push(0,x,0),C.x=X*.5+.5,C.y=V*.5*x+.5,p.push(C.x,C.y),_++}for(let F=0;F<i;F++){const N=b+F,H=L+F;M===!0?h.push(H,H+1,N):h.push(H+1,H,N),w+=3}c.addGroup(f,w,M===!0?1:2),f+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class lr extends Fi{constructor(t=1,e=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new lr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class us extends Oe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,p=[],_=[],g=[],m=[];for(let f=0;f<h;f++){const S=f*d-a;for(let y=0;y<c;y++){const M=y*u-s;_.push(M,-S,0),g.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){const y=S+c*f,M=S+c*(f+1),b=S+1+c*(f+1),C=S+1+c*f;p.push(y,M,C),p.push(M,b,C)}this.setIndex(p),this.setAttribute("position",new de(_,3)),this.setAttribute("normal",new de(g,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.width,t.height,t.widthSegments,t.heightSegments)}}class bl extends Oe{constructor(t=.5,e=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,p=new U,_=new Rt;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const f=s+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/e+1)/2,_.y=(p.y/e+1)/2,h.push(_.x,_.y)}u+=d}for(let g=0;g<i;g++){const m=g*(n+1);for(let f=0;f<n;f++){const S=f+m,y=S,M=S+n+1,b=S+n+2,C=S+1;o.push(y,M,C),o.push(M,b,C)}}this.setIndex(o),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Li extends Oe{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new U,d=new U,p=[],_=[],g=[],m=[];for(let f=0;f<=n;f++){const S=[],y=f/n;let M=0;f===0&&a===0?M=.5/e:f===n&&l===Math.PI&&(M=-.5/e);for(let b=0;b<=e;b++){const C=b/e;u.x=-t*Math.cos(i+C*s)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(i+C*s)*Math.sin(a+y*o),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(C+M,1-y),S.push(c++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){const y=h[f][S+1],M=h[f][S],b=h[f+1][S],C=h[f+1][S+1];(f!==0||a>0)&&p.push(y,M,C),(f!==n-1||l<Math.PI)&&p.push(M,b,C)}this.setIndex(p),this.setAttribute("position",new de(_,3)),this.setAttribute("normal",new de(g,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Li(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class En extends Oe{constructor(t=new eu(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};const a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new U,l=new U,c=new Rt;let h=new U;const u=[],d=[],p=[],_=[];g(),this.setIndex(_),this.setAttribute("position",new de(u,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(p,2));function g(){for(let y=0;y<e;y++)m(y);m(s===!1?e:0),S(),f()}function m(y){h=t.getPointAt(y/e,h);const M=a.normals[y],b=a.binormals[y];for(let C=0;C<=i;C++){const A=C/i*Math.PI*2,w=Math.sin(A),v=-Math.cos(A);l.x=v*M.x+w*b.x,l.y=v*M.y+w*b.y,l.z=v*M.z+w*b.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function f(){for(let y=1;y<=e;y++)for(let M=1;M<=i;M++){const b=(i+1)*(y-1)+(M-1),C=(i+1)*y+(M-1),A=(i+1)*y+M,w=(i+1)*(y-1)+M;_.push(b,C,w),_.push(C,A,w)}}function S(){for(let y=0;y<=e;y++)for(let M=0;M<=i;M++)c.x=y/e,c.y=M/i,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new En(new Xf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ai extends Wi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kh,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class qf extends Wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Yf extends Wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class da extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ya=new ae,Pc=new U,Lc=new U;class Al{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new El,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Pc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pc),Lc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lc),e.updateMatrixWorld(),Ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ya),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class $f extends Al{constructor(){super(new ke(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ta*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Kf extends da{constructor(t,e,n=0,i=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new $f}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Dc=new ae,Hr=new U,$a=new U;class Zf extends Al{constructor(){super(new ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Rt(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Hr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Hr),$a.copy(n.position),$a.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt($a),n.updateMatrixWorld(),i.makeTranslation(-Hr.x,-Hr.y,-Hr.z),Dc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dc)}}class Jf extends da{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Zf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class nu extends Kh{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class jf extends Al{constructor(){super(new nu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ic extends da{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new jf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Qf extends da{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class tp extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class ep{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Uc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Uc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Uc(){return performance.now()}class np{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ht(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ht(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ip extends Rf{constructor(t=10,e=10,n=4473924,i=8947848){n=new Vt(n),i=new Vt(i);const s=e/2,a=t/e,o=t/2,l=[],c=[];for(let d=0,p=0,_=-o;d<=e;d++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const g=d===s?n:i;g.toArray(c,p),p+=3,g.toArray(c,p),p+=3,g.toArray(c,p),p+=3,g.toArray(c,p),p+=3}const h=new Oe;h.setAttribute("position",new de(l,3)),h.setAttribute("color",new de(c,3));const u=new Jh({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Nc(r,t,e,n){const i=rp(n);switch(e){case Ih:return r*t;case Nh:return r*t;case Fh:return r*t*2;case Oh:return r*t/i.components*i.byteLength;case gl:return r*t/i.components*i.byteLength;case Bh:return r*t*2/i.components*i.byteLength;case _l:return r*t*2/i.components*i.byteLength;case Uh:return r*t*3/i.components*i.byteLength;case Mn:return r*t*4/i.components*i.byteLength;case vl:return r*t*4/i.components*i.byteLength;case Gs:case Vs:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ws:case Xs:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case bo:case wo:return Math.max(r,16)*Math.max(t,8)/4;case To:case Ao:return Math.max(r,8)*Math.max(t,8)/2;case Co:case Ro:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Po:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Do:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Io:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case No:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Fo:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Bo:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case zo:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ko:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Ho:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Go:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Vo:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Wo:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case qs:case Xo:case qo:return Math.ceil(r/4)*Math.ceil(t/4)*16;case zh:case Yo:return Math.ceil(r/4)*Math.ceil(t/4)*8;case $o:case Ko:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rp(r){switch(r){case Wn:case Ph:return{byteLength:1,components:1};case Jr:case Lh:case as:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case Hi:case fl:case Hn:return{byteLength:4,components:1};case Dh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function iu(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function sp(r){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<u.length;p++){const _=u[d],g=u[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let p=0,_=u.length;p<_;p++){const g=u[p];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var ap=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,op=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Rp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Op=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$p=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,im=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,am=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ym=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Um=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Nm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ym=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$m=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ag=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ag=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Pg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ng=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Og=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:ap,alphahash_pars_fragment:op,alphamap_fragment:lp,alphamap_pars_fragment:cp,alphatest_fragment:hp,alphatest_pars_fragment:up,aomap_fragment:dp,aomap_pars_fragment:fp,batching_pars_vertex:pp,batching_vertex:mp,begin_vertex:gp,beginnormal_vertex:_p,bsdfs:vp,iridescence_fragment:xp,bumpmap_pars_fragment:Mp,clipping_planes_fragment:yp,clipping_planes_pars_fragment:Sp,clipping_planes_pars_vertex:Ep,clipping_planes_vertex:Tp,color_fragment:bp,color_pars_fragment:Ap,color_pars_vertex:wp,color_vertex:Cp,common:Rp,cube_uv_reflection_fragment:Pp,defaultnormal_vertex:Lp,displacementmap_pars_vertex:Dp,displacementmap_vertex:Ip,emissivemap_fragment:Up,emissivemap_pars_fragment:Np,colorspace_fragment:Fp,colorspace_pars_fragment:Op,envmap_fragment:Bp,envmap_common_pars_fragment:zp,envmap_pars_fragment:kp,envmap_pars_vertex:Hp,envmap_physical_pars_fragment:jp,envmap_vertex:Gp,fog_vertex:Vp,fog_pars_vertex:Wp,fog_fragment:Xp,fog_pars_fragment:qp,gradientmap_pars_fragment:Yp,lightmap_pars_fragment:$p,lights_lambert_fragment:Kp,lights_lambert_pars_fragment:Zp,lights_pars_begin:Jp,lights_toon_fragment:Qp,lights_toon_pars_fragment:tm,lights_phong_fragment:em,lights_phong_pars_fragment:nm,lights_physical_fragment:im,lights_physical_pars_fragment:rm,lights_fragment_begin:sm,lights_fragment_maps:am,lights_fragment_end:om,logdepthbuf_fragment:lm,logdepthbuf_pars_fragment:cm,logdepthbuf_pars_vertex:hm,logdepthbuf_vertex:um,map_fragment:dm,map_pars_fragment:fm,map_particle_fragment:pm,map_particle_pars_fragment:mm,metalnessmap_fragment:gm,metalnessmap_pars_fragment:_m,morphinstance_vertex:vm,morphcolor_vertex:xm,morphnormal_vertex:Mm,morphtarget_pars_vertex:ym,morphtarget_vertex:Sm,normal_fragment_begin:Em,normal_fragment_maps:Tm,normal_pars_fragment:bm,normal_pars_vertex:Am,normal_vertex:wm,normalmap_pars_fragment:Cm,clearcoat_normal_fragment_begin:Rm,clearcoat_normal_fragment_maps:Pm,clearcoat_pars_fragment:Lm,iridescence_pars_fragment:Dm,opaque_fragment:Im,packing:Um,premultiplied_alpha_fragment:Nm,project_vertex:Fm,dithering_fragment:Om,dithering_pars_fragment:Bm,roughnessmap_fragment:zm,roughnessmap_pars_fragment:km,shadowmap_pars_fragment:Hm,shadowmap_pars_vertex:Gm,shadowmap_vertex:Vm,shadowmask_pars_fragment:Wm,skinbase_vertex:Xm,skinning_pars_vertex:qm,skinning_vertex:Ym,skinnormal_vertex:$m,specularmap_fragment:Km,specularmap_pars_fragment:Zm,tonemapping_fragment:Jm,tonemapping_pars_fragment:jm,transmission_fragment:Qm,transmission_pars_fragment:tg,uv_pars_fragment:eg,uv_pars_vertex:ng,uv_vertex:ig,worldpos_vertex:rg,background_vert:sg,background_frag:ag,backgroundCube_vert:og,backgroundCube_frag:lg,cube_vert:cg,cube_frag:hg,depth_vert:ug,depth_frag:dg,distanceRGBA_vert:fg,distanceRGBA_frag:pg,equirect_vert:mg,equirect_frag:gg,linedashed_vert:_g,linedashed_frag:vg,meshbasic_vert:xg,meshbasic_frag:Mg,meshlambert_vert:yg,meshlambert_frag:Sg,meshmatcap_vert:Eg,meshmatcap_frag:Tg,meshnormal_vert:bg,meshnormal_frag:Ag,meshphong_vert:wg,meshphong_frag:Cg,meshphysical_vert:Rg,meshphysical_frag:Pg,meshtoon_vert:Lg,meshtoon_frag:Dg,points_vert:Ig,points_frag:Ug,shadow_vert:Ng,shadow_frag:Fg,sprite_vert:Og,sprite_frag:Bg},ht={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},bn={basic:{uniforms:Fe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Fe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Vt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Fe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Fe([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Fe([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Vt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Fe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Fe([ht.points,ht.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Fe([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Fe([ht.common,ht.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Fe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Fe([ht.sprite,ht.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Fe([ht.common,ht.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Fe([ht.lights,ht.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};bn.physical={uniforms:Fe([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Bs={r:0,b:0,g:0},Mi=new Rn,zg=new ae;function kg(r,t,e,n,i,s,a){const o=new Vt(0);let l=s===!0?0:1,c,h,u=null,d=0,p=null;function _(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?e:t).get(M)),M}function g(y){let M=!1;const b=_(y);b===null?f(o,l):b&&b.isColor&&(f(b,1),M=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,M){const b=_(M);b&&(b.isCubeTexture||b.mapping===ua)?(h===void 0&&(h=new qt(new Vi(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:Tr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Mi.copy(M.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zg.makeRotationFromEuler(Mi)),h.material.toneMapped=Zt.getTransfer(b.colorSpace)!==te,(u!==b||d!==b.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,p=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new qt(new us(2,2),new ci({name:"BackgroundMaterial",uniforms:Tr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(b.colorSpace)!==te,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,p=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,M){y.getRGB(Bs,$h(r)),n.buffers.color.setClear(Bs.r,Bs.g,Bs.b,M,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),l=M,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:g,addToRenderList:m,dispose:S}}function Hg(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(x,L,F,N,H){let X=!1;const V=u(N,F,L);s!==V&&(s=V,c(s.object)),X=p(x,N,F,H),X&&_(x,N,F,H),H!==null&&t.update(H,r.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,M(x,L,F,N),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function h(x){return r.deleteVertexArray(x)}function u(x,L,F){const N=F.wireframe===!0;let H=n[x.id];H===void 0&&(H={},n[x.id]=H);let X=H[L.id];X===void 0&&(X={},H[L.id]=X);let V=X[N];return V===void 0&&(V=d(l()),X[N]=V),V}function d(x){const L=[],F=[],N=[];for(let H=0;H<e;H++)L[H]=0,F[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:N,object:x,attributes:{},index:null}}function p(x,L,F,N){const H=s.attributes,X=L.attributes;let V=0;const Y=F.getAttributes();for(const G in Y)if(Y[G].location>=0){const I=H[G];let R=X[G];if(R===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(R=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(R=x.instanceColor)),I===void 0||I.attribute!==R||R&&I.data!==R.data)return!0;V++}return s.attributesNum!==V||s.index!==N}function _(x,L,F,N){const H={},X=L.attributes;let V=0;const Y=F.getAttributes();for(const G in Y)if(Y[G].location>=0){let I=X[G];I===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(I=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(I=x.instanceColor));const R={};R.attribute=I,I&&I.data&&(R.data=I.data),H[G]=R,V++}s.attributes=H,s.attributesNum=V,s.index=N}function g(){const x=s.newAttributes;for(let L=0,F=x.length;L<F;L++)x[L]=0}function m(x){f(x,0)}function f(x,L){const F=s.newAttributes,N=s.enabledAttributes,H=s.attributeDivisors;F[x]=1,N[x]===0&&(r.enableVertexAttribArray(x),N[x]=1),H[x]!==L&&(r.vertexAttribDivisor(x,L),H[x]=L)}function S(){const x=s.newAttributes,L=s.enabledAttributes;for(let F=0,N=L.length;F<N;F++)L[F]!==x[F]&&(r.disableVertexAttribArray(F),L[F]=0)}function y(x,L,F,N,H,X,V){V===!0?r.vertexAttribIPointer(x,L,F,H,X):r.vertexAttribPointer(x,L,F,N,H,X)}function M(x,L,F,N){g();const H=N.attributes,X=F.getAttributes(),V=L.defaultAttributeValues;for(const Y in X){const G=X[Y];if(G.location>=0){let nt=H[Y];if(nt===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(nt=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(nt=x.instanceColor)),nt!==void 0){const I=nt.normalized,R=nt.itemSize,j=t.get(nt);if(j===void 0)continue;const it=j.buffer,O=j.type,W=j.bytesPerElement,Q=O===r.INT||O===r.UNSIGNED_INT||nt.gpuType===fl;if(nt.isInterleavedBufferAttribute){const Z=nt.data,st=Z.stride,pt=nt.offset;if(Z.isInstancedInterleavedBuffer){for(let ct=0;ct<G.locationSize;ct++)f(G.location+ct,Z.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ct=0;ct<G.locationSize;ct++)m(G.location+ct);r.bindBuffer(r.ARRAY_BUFFER,it);for(let ct=0;ct<G.locationSize;ct++)y(G.location+ct,R/G.locationSize,O,I,st*W,(pt+R/G.locationSize*ct)*W,Q)}else{if(nt.isInstancedBufferAttribute){for(let Z=0;Z<G.locationSize;Z++)f(G.location+Z,nt.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Z=0;Z<G.locationSize;Z++)m(G.location+Z);r.bindBuffer(r.ARRAY_BUFFER,it);for(let Z=0;Z<G.locationSize;Z++)y(G.location+Z,R/G.locationSize,O,I,R*W,R/G.locationSize*Z*W,Q)}}else if(V!==void 0){const I=V[Y];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(G.location,I);break;case 3:r.vertexAttrib3fv(G.location,I);break;case 4:r.vertexAttrib4fv(G.location,I);break;default:r.vertexAttrib1fv(G.location,I)}}}}S()}function b(){w();for(const x in n){const L=n[x];for(const F in L){const N=L[F];for(const H in N)h(N[H].object),delete N[H];delete L[F]}delete n[x]}}function C(x){if(n[x.id]===void 0)return;const L=n[x.id];for(const F in L){const N=L[F];for(const H in N)h(N[H].object),delete N[H];delete L[F]}delete n[x.id]}function A(x){for(const L in n){const F=n[L];if(F[x.id]===void 0)continue;const N=F[x.id];for(const H in N)h(N[H].object),delete N[H];delete F[x.id]}}function w(){v(),a=!0,s!==i&&(s=i,c(s.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:v,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function Gg(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],h[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];e.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Vg(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Mn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const w=A===as&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Wn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Hn&&!w)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=_>0,C=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:b,maxSamples:C}}function Wg(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new bi,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,f=r.get(u);if(!i||_===null||_.length===0||s&&!m)s?h(null):c();else{const S=s?0:n,y=S*4;let M=f.clippingState||null;l.value=M,M=h(_,d,y,p);for(let b=0;b!==y;++b)M[b]=e[b];f.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const f=p+g*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,M=p;y!==g;++y,M+=4)a.copy(u[y]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Xg(r){let t=new WeakMap;function e(a,o){return o===Mo?a.mapping=xr:o===yo&&(a.mapping=Mr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Mo||o===yo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ef(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const cr=4,Fc=[.125,.215,.35,.446,.526,.582],Di=20,Ka=new nu,Oc=new Vt;let Za=null,Ja=0,ja=0,Qa=!1;const wi=(1+Math.sqrt(5))/2,ar=1/wi,Bc=[new U(-wi,ar,0),new U(wi,ar,0),new U(-ar,0,wi),new U(ar,0,wi),new U(0,wi,-ar),new U(0,wi,ar),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],qg=new U;class zc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,s={}){const{size:a=256,position:o=qg}=s;Za=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Za,Ja,ja),this._renderer.xr.enabled=Qa,t.scissorTest=!1,zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xr||t.mapping===Mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Za=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:as,format:Mn,colorSpace:Er,depthBuffer:!1},i=kc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yg(s)),this._blurMaterial=$g(s,t,e)}return i}_compileMaterial(t){const e=new qt(this._lodPlanes[0],t);this._renderer.compile(e,Ka)}_sceneToCubeUV(t,e,n,i,s){const l=new ke(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Oc),u.toneMapping=si,u.autoClear=!1;const _=new yl({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new qt(new Vi,_);let m=!1;const f=t.background;f?f.isColor&&(_.color.copy(f),t.background=null,m=!0):(_.color.copy(Oc),m=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[S],s.y,s.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[S]));const M=this._cubeSize;zs(i,y*M,S>2?M:0,M,M),u.setRenderTarget(i),m&&u.render(g,l),u.render(t,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===xr||t.mapping===Mr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hc());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new qt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;zs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ka)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Bc[(i-s-1)%Bc.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new qt(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Di-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):Di;m>Di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Di}`);const f=[];let S=0;for(let A=0;A<Di;++A){const w=A/g,v=Math.exp(-w*w/2);f.push(v),A===0?S+=v:A<m&&(S+=2*v)}for(let A=0;A<f.length;A++)f[A]=f[A]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-n;const M=this._sizeLods[i],b=3*M*(i>y-cr?i-y+cr:0),C=4*(this._cubeSize-M);zs(e,b,C,3*M,2*M),l.setRenderTarget(e),l.render(u,Ka)}}function Yg(r){const t=[],e=[],n=[];let i=r;const s=r-cr+1+Fc.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-cr?l=Fc[a-r+cr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,g=3,m=2,f=1,S=new Float32Array(g*_*p),y=new Float32Array(m*_*p),M=new Float32Array(f*_*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,w=C>2?0:-1,v=[A,w,0,A+2/3,w,0,A+2/3,w+1,0,A,w,0,A+2/3,w+1,0,A,w+1,0];S.set(v,g*_*C),y.set(d,m*_*C);const x=[C,C,C,C,C,C];M.set(x,f*_*C)}const b=new Oe;b.setAttribute("position",new Sn(S,g)),b.setAttribute("uv",new Sn(y,m)),b.setAttribute("faceIndex",new Sn(M,f)),t.push(b),i>cr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function kc(r,t,e){const n=new Gi(r,t,e);return n.texture.mapping=ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function $g(r,t,e){const n=new Float32Array(Di),i=new U(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Hc(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Gc(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function wl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kg(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Mo||l===yo,h=l===xr||l===Mr;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new zc(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new zc(r)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Zg(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ti("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Jg(r,t,e,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete i[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],r.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,_=u.attributes.position;let g=0;if(p!==null){const S=p.array;g=p.version;for(let y=0,M=S.length;y<M;y+=3){const b=S[y+0],C=S[y+1],A=S[y+2];d.push(b,C,C,A,A,b)}}else if(_!==void 0){const S=_.array;g=_.version;for(let y=0,M=S.length/3-1;y<M;y+=3){const b=y+0,C=y+1,A=y+2;d.push(b,C,C,A,A,b)}}else return;const m=new(Gh(d)?Yh:qh)(d,1);m.version=g;const f=s.get(u);f&&t.remove(f),s.set(u,m)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function jg(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){r.drawElements(n,p,s,d*a),e.update(p,n,1)}function c(d,p,_){_!==0&&(r.drawElementsInstanced(n,p,s,d*a,_),e.update(p,n,_))}function h(d,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];e.update(m,n,1)}function u(d,p,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,g,0,_);let f=0;for(let S=0;S<_;S++)f+=p[S]*g[S];e.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Qg(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function t_(r,t,e){const n=new WeakMap,i=new ee;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let x=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var p=x;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),g===!0&&(M=2),m===!0&&(M=3);let b=o.attributes.position.count*M,C=1;b>t.maxTextureSize&&(C=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const A=new Float32Array(b*C*4*u),w=new Vh(A,b,C,u);w.type=Hn,w.needsUpdate=!0;const v=M*4;for(let L=0;L<u;L++){const F=f[L],N=S[L],H=y[L],X=b*C*4*L;for(let V=0;V<F.count;V++){const Y=V*v;_===!0&&(i.fromBufferAttribute(F,V),A[X+Y+0]=i.x,A[X+Y+1]=i.y,A[X+Y+2]=i.z,A[X+Y+3]=0),g===!0&&(i.fromBufferAttribute(N,V),A[X+Y+4]=i.x,A[X+Y+5]=i.y,A[X+Y+6]=i.z,A[X+Y+7]=0),m===!0&&(i.fromBufferAttribute(H,V),A[X+Y+8]=i.x,A[X+Y+9]=i.y,A[X+Y+10]=i.z,A[X+Y+11]=H.itemSize===4?i.w:1)}}d={count:u,texture:w,size:new Rt(b,C)},n.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function e_(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const ru=new Ve,Vc=new Qh(1,1),su=new Vh,au=new af,ou=new Zh,Wc=[],Xc=[],qc=new Float32Array(16),Yc=new Float32Array(9),$c=new Float32Array(4);function Lr(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Wc[i];if(s===void 0&&(s=new Float32Array(i),Wc[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Se(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ee(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function fa(r,t){let e=Xc[t];e===void 0&&(e=new Int32Array(t),Xc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function n_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function i_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;r.uniform2fv(this.addr,t),Ee(e,t)}}function r_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;r.uniform3fv(this.addr,t),Ee(e,t)}}function s_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;r.uniform4fv(this.addr,t),Ee(e,t)}}function a_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;$c.set(n),r.uniformMatrix2fv(this.addr,!1,$c),Ee(e,n)}}function o_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;Yc.set(n),r.uniformMatrix3fv(this.addr,!1,Yc),Ee(e,n)}}function l_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;qc.set(n),r.uniformMatrix4fv(this.addr,!1,qc),Ee(e,n)}}function c_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function h_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;r.uniform2iv(this.addr,t),Ee(e,t)}}function u_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;r.uniform3iv(this.addr,t),Ee(e,t)}}function d_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;r.uniform4iv(this.addr,t),Ee(e,t)}}function f_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function p_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;r.uniform2uiv(this.addr,t),Ee(e,t)}}function m_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;r.uniform3uiv(this.addr,t),Ee(e,t)}}function g_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;r.uniform4uiv(this.addr,t),Ee(e,t)}}function __(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Vc.compareFunction=Hh,s=Vc):s=ru,e.setTexture2D(t||s,i)}function v_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||au,i)}function x_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ou,i)}function M_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||su,i)}function y_(r){switch(r){case 5126:return n_;case 35664:return i_;case 35665:return r_;case 35666:return s_;case 35674:return a_;case 35675:return o_;case 35676:return l_;case 5124:case 35670:return c_;case 35667:case 35671:return h_;case 35668:case 35672:return u_;case 35669:case 35673:return d_;case 5125:return f_;case 36294:return p_;case 36295:return m_;case 36296:return g_;case 35678:case 36198:case 36298:case 36306:case 35682:return __;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return x_;case 36289:case 36303:case 36311:case 36292:return M_}}function S_(r,t){r.uniform1fv(this.addr,t)}function E_(r,t){const e=Lr(t,this.size,2);r.uniform2fv(this.addr,e)}function T_(r,t){const e=Lr(t,this.size,3);r.uniform3fv(this.addr,e)}function b_(r,t){const e=Lr(t,this.size,4);r.uniform4fv(this.addr,e)}function A_(r,t){const e=Lr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function w_(r,t){const e=Lr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function C_(r,t){const e=Lr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function R_(r,t){r.uniform1iv(this.addr,t)}function P_(r,t){r.uniform2iv(this.addr,t)}function L_(r,t){r.uniform3iv(this.addr,t)}function D_(r,t){r.uniform4iv(this.addr,t)}function I_(r,t){r.uniform1uiv(this.addr,t)}function U_(r,t){r.uniform2uiv(this.addr,t)}function N_(r,t){r.uniform3uiv(this.addr,t)}function F_(r,t){r.uniform4uiv(this.addr,t)}function O_(r,t,e){const n=this.cache,i=t.length,s=fa(e,i);Se(n,s)||(r.uniform1iv(this.addr,s),Ee(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||ru,s[a])}function B_(r,t,e){const n=this.cache,i=t.length,s=fa(e,i);Se(n,s)||(r.uniform1iv(this.addr,s),Ee(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||au,s[a])}function z_(r,t,e){const n=this.cache,i=t.length,s=fa(e,i);Se(n,s)||(r.uniform1iv(this.addr,s),Ee(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||ou,s[a])}function k_(r,t,e){const n=this.cache,i=t.length,s=fa(e,i);Se(n,s)||(r.uniform1iv(this.addr,s),Ee(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||su,s[a])}function H_(r){switch(r){case 5126:return S_;case 35664:return E_;case 35665:return T_;case 35666:return b_;case 35674:return A_;case 35675:return w_;case 35676:return C_;case 5124:case 35670:return R_;case 35667:case 35671:return P_;case 35668:case 35672:return L_;case 35669:case 35673:return D_;case 5125:return I_;case 36294:return U_;case 36295:return N_;case 36296:return F_;case 35678:case 36198:case 36298:case 36306:case 35682:return O_;case 35679:case 36299:case 36307:return B_;case 35680:case 36300:case 36308:case 36293:return z_;case 36289:case 36303:case 36311:case 36292:return k_}}class G_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=y_(e.type)}}class V_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=H_(e.type)}}class W_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const to=/(\w+)(\])?(\[|\.)?/g;function Kc(r,t){r.seq.push(t),r.map[t.id]=t}function X_(r,t,e){const n=r.name,i=n.length;for(to.lastIndex=0;;){const s=to.exec(n),a=to.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Kc(e,c===void 0?new G_(o,r,t):new V_(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new W_(o),Kc(e,u)),e=u}}}class Ys{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);X_(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Zc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const q_=37297;let Y_=0;function $_(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Jc=new Bt;function K_(r){Zt._getMatrix(Jc,Zt.workingColorSpace,r);const t=`mat3( ${Jc.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(r)){case js:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function jc(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+$_(r.getShaderSource(t),a)}else return i}function Z_(r,t){const e=K_(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function J_(r,t){let e;switch(t){case Dd:e="Linear";break;case Id:e="Reinhard";break;case Ud:e="Cineon";break;case Ch:e="ACESFilmic";break;case Fd:e="AgX";break;case Od:e="Neutral";break;case Nd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ks=new U;function j_(){Zt.getLuminanceCoefficients(ks);const r=ks.x.toFixed(4),t=ks.y.toFixed(4),e=ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function t0(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function e0(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Vr(r){return r!==""}function Qc(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function th(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const n0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jo(r){return r.replace(n0,r0)}const i0=new Map;function r0(r,t){let e=kt[t];if(e===void 0){const n=i0.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jo(e)}const s0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eh(r){return r.replace(s0,a0)}function a0(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function nh(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function o0(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===bh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ah?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function l0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case xr:case Mr:t="ENVMAP_TYPE_CUBE";break;case ua:t="ENVMAP_TYPE_CUBE_UV";break}return t}function c0(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Mr:t="ENVMAP_MODE_REFRACTION";break}return t}function h0(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case wh:t="ENVMAP_BLENDING_MULTIPLY";break;case Pd:t="ENVMAP_BLENDING_MIX";break;case Ld:t="ENVMAP_BLENDING_ADD";break}return t}function u0(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function d0(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=o0(e),c=l0(e),h=c0(e),u=h0(e),d=u0(e),p=Q_(e),_=t0(s),g=i.createProgram();let m,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Vr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Vr).join(`
`),f.length>0&&(f+=`
`)):(m=[nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),f=[nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?kt.tonemapping_pars_fragment:"",e.toneMapping!==si?J_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,Z_("linearToOutputTexel",e.outputColorSpace),j_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vr).join(`
`)),a=Jo(a),a=Qc(a,e),a=th(a,e),o=Jo(o),o=Qc(o,e),o=th(o,e),a=eh(a),o=eh(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=S+m+a,M=S+f+o,b=Zc(i,i.VERTEX_SHADER,y),C=Zc(i,i.FRAGMENT_SHADER,M);i.attachShader(g,b),i.attachShader(g,C),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function A(L){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(g).trim(),N=i.getShaderInfoLog(b).trim(),H=i.getShaderInfoLog(C).trim();let X=!0,V=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,b,C);else{const Y=jc(i,b,"vertex"),G=jc(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+Y+`
`+G)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(N===""||H==="")&&(V=!1);V&&(L.diagnostics={runnable:X,programLog:F,vertexShader:{log:N,prefix:m},fragmentShader:{log:H,prefix:f}})}i.deleteShader(b),i.deleteShader(C),w=new Ys(i,g),v=e0(i,g)}let w;this.getUniforms=function(){return w===void 0&&A(this),w};let v;this.getAttributes=function(){return v===void 0&&A(this),v};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(g,q_)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Y_++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=C,this}let f0=0;class p0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new m0(t),e.set(t,n)),n}}class m0{constructor(t){this.id=f0++,this.code=t,this.usedTimes=0}}function g0(r,t,e,n,i,s,a){const o=new Wh,l=new p0,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,x,L,F,N){const H=F.fog,X=N.geometry,V=v.isMeshStandardMaterial?F.environment:null,Y=(v.isMeshStandardMaterial?e:t).get(v.envMap||V),G=Y&&Y.mapping===ua?Y.image.height:null,nt=_[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const I=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,R=I!==void 0?I.length:0;let j=0;X.morphAttributes.position!==void 0&&(j=1),X.morphAttributes.normal!==void 0&&(j=2),X.morphAttributes.color!==void 0&&(j=3);let it,O,W,Q;if(nt){const Qt=bn[nt];it=Qt.vertexShader,O=Qt.fragmentShader}else it=v.vertexShader,O=v.fragmentShader,l.update(v),W=l.getVertexShaderID(v),Q=l.getFragmentShaderID(v);const Z=r.getRenderTarget(),st=r.state.buffers.depth.getReversed(),pt=N.isInstancedMesh===!0,ct=N.isBatchedMesh===!0,bt=!!v.map,Lt=!!v.matcap,At=!!Y,D=!!v.aoMap,ne=!!v.lightMap,Dt=!!v.bumpMap,It=!!v.normalMap,yt=!!v.displacementMap,Yt=!!v.emissiveMap,vt=!!v.metalnessMap,P=!!v.roughnessMap,E=v.anisotropy>0,q=v.clearcoat>0,et=v.dispersion>0,at=v.iridescence>0,tt=v.sheen>0,Tt=v.transmission>0,ut=E&&!!v.anisotropyMap,_t=q&&!!v.clearcoatMap,Gt=q&&!!v.clearcoatNormalMap,lt=q&&!!v.clearcoatRoughnessMap,xt=at&&!!v.iridescenceMap,Pt=at&&!!v.iridescenceThicknessMap,Ut=tt&&!!v.sheenColorMap,St=tt&&!!v.sheenRoughnessMap,Xt=!!v.specularMap,zt=!!v.specularColorMap,se=!!v.specularIntensityMap,B=Tt&&!!v.transmissionMap,dt=Tt&&!!v.thicknessMap,J=!!v.gradientMap,rt=!!v.alphaMap,gt=v.alphaTest>0,mt=!!v.alphaHash,Ot=!!v.extensions;let fe=si;v.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(fe=r.toneMapping);const Re={shaderID:nt,shaderType:v.type,shaderName:v.name,vertexShader:it,fragmentShader:O,defines:v.defines,customVertexShaderID:W,customFragmentShaderID:Q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:ct,batchingColor:ct&&N._colorsTexture!==null,instancing:pt,instancingColor:pt&&N.instanceColor!==null,instancingMorph:pt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?r.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Er,alphaToCoverage:!!v.alphaToCoverage,map:bt,matcap:Lt,envMap:At,envMapMode:At&&Y.mapping,envMapCubeUVHeight:G,aoMap:D,lightMap:ne,bumpMap:Dt,normalMap:It,displacementMap:d&&yt,emissiveMap:Yt,normalMapObjectSpace:It&&v.normalMapType===Hd,normalMapTangentSpace:It&&v.normalMapType===kh,metalnessMap:vt,roughnessMap:P,anisotropy:E,anisotropyMap:ut,clearcoat:q,clearcoatMap:_t,clearcoatNormalMap:Gt,clearcoatRoughnessMap:lt,dispersion:et,iridescence:at,iridescenceMap:xt,iridescenceThicknessMap:Pt,sheen:tt,sheenColorMap:Ut,sheenRoughnessMap:St,specularMap:Xt,specularColorMap:zt,specularIntensityMap:se,transmission:Tt,transmissionMap:B,thicknessMap:dt,gradientMap:J,opaque:v.transparent===!1&&v.blending===dr&&v.alphaToCoverage===!1,alphaMap:rt,alphaTest:gt,alphaHash:mt,combine:v.combine,mapUv:bt&&g(v.map.channel),aoMapUv:D&&g(v.aoMap.channel),lightMapUv:ne&&g(v.lightMap.channel),bumpMapUv:Dt&&g(v.bumpMap.channel),normalMapUv:It&&g(v.normalMap.channel),displacementMapUv:yt&&g(v.displacementMap.channel),emissiveMapUv:Yt&&g(v.emissiveMap.channel),metalnessMapUv:vt&&g(v.metalnessMap.channel),roughnessMapUv:P&&g(v.roughnessMap.channel),anisotropyMapUv:ut&&g(v.anisotropyMap.channel),clearcoatMapUv:_t&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:St&&g(v.sheenRoughnessMap.channel),specularMapUv:Xt&&g(v.specularMap.channel),specularColorMapUv:zt&&g(v.specularColorMap.channel),specularIntensityMapUv:se&&g(v.specularIntensityMap.channel),transmissionMapUv:B&&g(v.transmissionMap.channel),thicknessMapUv:dt&&g(v.thicknessMap.channel),alphaMapUv:rt&&g(v.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(It||E),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!X.attributes.uv&&(bt||rt),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:st,skinning:N.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:j,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:fe,decodeVideoTexture:bt&&v.map.isVideoTexture===!0&&Zt.getTransfer(v.map.colorSpace)===te,decodeVideoTextureEmissive:Yt&&v.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(v.emissiveMap.colorSpace)===te,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===un,flipSided:v.side===Ge,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ot&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&v.extensions.multiDraw===!0||ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function f(v){const x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)x.push(L),x.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(S(x,v),y(x,v),x.push(r.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function S(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function y(v,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),v.push(o.mask)}function M(v){const x=_[v.type];let L;if(x){const F=bn[x];L=xf.clone(F.uniforms)}else L=v.uniforms;return L}function b(v,x){let L;for(let F=0,N=h.length;F<N;F++){const H=h[F];if(H.cacheKey===x){L=H,++L.usedTimes;break}}return L===void 0&&(L=new d0(r,x,v,s),h.push(L)),L}function C(v){if(--v.usedTimes===0){const x=h.indexOf(v);h[x]=h[h.length-1],h.pop(),v.destroy()}}function A(v){l.remove(v)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:b,releaseProgram:C,releaseShaderCache:A,programs:h,dispose:w}}function _0(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function v0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function ih(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function rh(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,p,_,g,m){let f=r[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},r[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=g,f.group=m),t++,f}function o(u,d,p,_,g,m){const f=a(u,d,p,_,g,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(u,d,p,_,g,m){const f=a(u,d,p,_,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||v0),n.length>1&&n.sort(d||ih),i.length>1&&i.sort(d||ih)}function h(){for(let u=t,d=r.length;u<d;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function x0(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new rh,r.set(n,[a])):i>=s.length?(a=new rh,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function M0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Vt};break;case"SpotLight":e={position:new U,direction:new U,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new U,halfWidth:new U,halfHeight:new U};break}return r[t.id]=e,e}}}function y0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let S0=0;function E0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function T0(r){const t=new M0,e=y0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const i=new U,s=new ae,a=new ae;function o(c){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,_=0,g=0,m=0,f=0,S=0,y=0,M=0,b=0,C=0,A=0;c.sort(E0);for(let v=0,x=c.length;v<x;v++){const L=c[v],F=L.color,N=L.intensity,H=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=F.r*N,u+=F.g*N,d+=F.b*N;else if(L.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(L.sh.coefficients[V],N);A++}else if(L.isDirectionalLight){const V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Y=L.shadow,G=e.get(L);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=L.shadow.matrix,S++}n.directional[p]=V,p++}else if(L.isSpotLight){const V=t.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(F).multiplyScalar(N),V.distance=H,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,n.spot[g]=V;const Y=L.shadow;if(L.map&&(n.spotLightMap[b]=L.map,b++,Y.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[g]=Y.matrix,L.castShadow){const G=e.get(L);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.spotShadow[g]=G,n.spotShadowMap[g]=X,M++}g++}else if(L.isRectAreaLight){const V=t.get(L);V.color.copy(F).multiplyScalar(N),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=V,m++}else if(L.isPointLight){const V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){const Y=L.shadow,G=e.get(L);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=X,n.pointShadowMatrix[_]=L.shadow.matrix,y++}n.point[_]=V,_++}else if(L.isHemisphereLight){const V=t.get(L);V.skyColor.copy(L.color).multiplyScalar(N),V.groundColor.copy(L.groundColor).multiplyScalar(N),n.hemi[f]=V,f++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const w=n.hash;(w.directionalLength!==p||w.pointLength!==_||w.spotLength!==g||w.rectAreaLength!==m||w.hemiLength!==f||w.numDirectionalShadows!==S||w.numPointShadows!==y||w.numSpotShadows!==M||w.numSpotMaps!==b||w.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+b-C,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,w.directionalLength=p,w.pointLength=_,w.spotLength=g,w.rectAreaLength=m,w.hemiLength=f,w.numDirectionalShadows=S,w.numPointShadows=y,w.numSpotShadows=M,w.numSpotMaps=b,w.numLightProbes=A,n.version=S0++)}function l(c,h){let u=0,d=0,p=0,_=0,g=0;const m=h.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){const y=c[f];if(y.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),u++}else if(y.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function sh(r){const t=new T0(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function b0(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new sh(r),t.set(i,[o])):s>=a.length?(o=new sh(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const A0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function C0(r,t,e){let n=new El;const i=new Rt,s=new Rt,a=new ee,o=new qf({depthPacking:kd}),l=new Yf,c={},h=e.maxTextureSize,u={[li]:Ge,[Ge]:li,[un]:un},d=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:A0,fragmentShader:w0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Oe;_.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new qt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bh;let f=this.type;this.render=function(C,A,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const v=r.getRenderTarget(),x=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),F=r.state;F.setBlending(ri),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const N=f!==On&&this.type===On,H=f===On&&this.type!==On;for(let X=0,V=C.length;X<V;X++){const Y=C[X],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const nt=G.getFrameExtents();if(i.multiply(nt),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/nt.x),i.x=s.x*nt.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/nt.y),i.y=s.y*nt.y,G.mapSize.y=s.y)),G.map===null||N===!0||H===!0){const R=this.type!==On?{minFilter:yn,magFilter:yn}:{};G.map!==null&&G.map.dispose(),G.map=new Gi(i.x,i.y,R),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const I=G.getViewportCount();for(let R=0;R<I;R++){const j=G.getViewport(R);a.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),F.viewport(a),G.updateMatrices(Y,R),n=G.getFrustum(),M(A,w,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===On&&S(G,w),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(v,x,L)};function S(C,A){const w=t.update(g);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Gi(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(A,null,w,d,g,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(A,null,w,p,g,null)}function y(C,A,w,v){let x=null;const L=w.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)x=L;else if(x=w.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=x.uuid,N=A.uuid;let H=c[F];H===void 0&&(H={},c[F]=H);let X=H[N];X===void 0&&(X=x.clone(),H[N]=X,A.addEventListener("dispose",b)),x=X}if(x.visible=A.visible,x.wireframe=A.wireframe,v===On?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:u[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,w.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const F=r.properties.get(x);F.light=w}return x}function M(C,A,w,v,x){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===On)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,C.matrixWorld);const N=t.update(C),H=C.material;if(Array.isArray(H)){const X=N.groups;for(let V=0,Y=X.length;V<Y;V++){const G=X[V],nt=H[G.materialIndex];if(nt&&nt.visible){const I=y(C,nt,v,x);C.onBeforeShadow(r,C,A,w,N,I,G),r.renderBufferDirect(w,null,N,I,C,G),C.onAfterShadow(r,C,A,w,N,I,G)}}}else if(H.visible){const X=y(C,H,v,x);C.onBeforeShadow(r,C,A,w,N,X,null),r.renderBufferDirect(w,null,N,X,C,null),C.onAfterShadow(r,C,A,w,N,X,null)}}const F=C.children;for(let N=0,H=F.length;N<H;N++)M(F[N],A,w,v,x)}function b(C){C.target.removeEventListener("dispose",b);for(const w in c){const v=c[w],x=C.target.uuid;x in v&&(v[x].dispose(),delete v[x])}}}const R0={[fo]:po,[mo]:vo,[go]:xo,[vr]:_o,[po]:fo,[vo]:mo,[xo]:go,[_o]:vr};function P0(r,t){function e(){let B=!1;const dt=new ee;let J=null;const rt=new ee(0,0,0,0);return{setMask:function(gt){J!==gt&&!B&&(r.colorMask(gt,gt,gt,gt),J=gt)},setLocked:function(gt){B=gt},setClear:function(gt,mt,Ot,fe,Re){Re===!0&&(gt*=fe,mt*=fe,Ot*=fe),dt.set(gt,mt,Ot,fe),rt.equals(dt)===!1&&(r.clearColor(gt,mt,Ot,fe),rt.copy(dt))},reset:function(){B=!1,J=null,rt.set(-1,0,0,0)}}}function n(){let B=!1,dt=!1,J=null,rt=null,gt=null;return{setReversed:function(mt){if(dt!==mt){const Ot=t.get("EXT_clip_control");dt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);const fe=gt;gt=null,this.setClear(fe)}dt=mt},getReversed:function(){return dt},setTest:function(mt){mt?Z(r.DEPTH_TEST):st(r.DEPTH_TEST)},setMask:function(mt){J!==mt&&!B&&(r.depthMask(mt),J=mt)},setFunc:function(mt){if(dt&&(mt=R0[mt]),rt!==mt){switch(mt){case fo:r.depthFunc(r.NEVER);break;case po:r.depthFunc(r.ALWAYS);break;case mo:r.depthFunc(r.LESS);break;case vr:r.depthFunc(r.LEQUAL);break;case go:r.depthFunc(r.EQUAL);break;case _o:r.depthFunc(r.GEQUAL);break;case vo:r.depthFunc(r.GREATER);break;case xo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}rt=mt}},setLocked:function(mt){B=mt},setClear:function(mt){gt!==mt&&(dt&&(mt=1-mt),r.clearDepth(mt),gt=mt)},reset:function(){B=!1,J=null,rt=null,gt=null,dt=!1}}}function i(){let B=!1,dt=null,J=null,rt=null,gt=null,mt=null,Ot=null,fe=null,Re=null;return{setTest:function(Qt){B||(Qt?Z(r.STENCIL_TEST):st(r.STENCIL_TEST))},setMask:function(Qt){dt!==Qt&&!B&&(r.stencilMask(Qt),dt=Qt)},setFunc:function(Qt,pn,Ln){(J!==Qt||rt!==pn||gt!==Ln)&&(r.stencilFunc(Qt,pn,Ln),J=Qt,rt=pn,gt=Ln)},setOp:function(Qt,pn,Ln){(mt!==Qt||Ot!==pn||fe!==Ln)&&(r.stencilOp(Qt,pn,Ln),mt=Qt,Ot=pn,fe=Ln)},setLocked:function(Qt){B=Qt},setClear:function(Qt){Re!==Qt&&(r.clearStencil(Qt),Re=Qt)},reset:function(){B=!1,dt=null,J=null,rt=null,gt=null,mt=null,Ot=null,fe=null,Re=null}}}const s=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],_=null,g=!1,m=null,f=null,S=null,y=null,M=null,b=null,C=null,A=new Vt(0,0,0),w=0,v=!1,x=null,L=null,F=null,N=null,H=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Y=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=Y>=1):G.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=Y>=2);let nt=null,I={};const R=r.getParameter(r.SCISSOR_BOX),j=r.getParameter(r.VIEWPORT),it=new ee().fromArray(R),O=new ee().fromArray(j);function W(B,dt,J,rt){const gt=new Uint8Array(4),mt=r.createTexture();r.bindTexture(B,mt),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ot=0;Ot<J;Ot++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(dt,0,r.RGBA,1,1,rt,0,r.RGBA,r.UNSIGNED_BYTE,gt):r.texImage2D(dt+Ot,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,gt);return mt}const Q={};Q[r.TEXTURE_2D]=W(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=W(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=W(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=W(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(r.DEPTH_TEST),a.setFunc(vr),Dt(!1),It(tc),Z(r.CULL_FACE),D(ri);function Z(B){h[B]!==!0&&(r.enable(B),h[B]=!0)}function st(B){h[B]!==!1&&(r.disable(B),h[B]=!1)}function pt(B,dt){return u[B]!==dt?(r.bindFramebuffer(B,dt),u[B]=dt,B===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=dt),B===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=dt),!0):!1}function ct(B,dt){let J=p,rt=!1;if(B){J=d.get(dt),J===void 0&&(J=[],d.set(dt,J));const gt=B.textures;if(J.length!==gt.length||J[0]!==r.COLOR_ATTACHMENT0){for(let mt=0,Ot=gt.length;mt<Ot;mt++)J[mt]=r.COLOR_ATTACHMENT0+mt;J.length=gt.length,rt=!0}}else J[0]!==r.BACK&&(J[0]=r.BACK,rt=!0);rt&&r.drawBuffers(J)}function bt(B){return _!==B?(r.useProgram(B),_=B,!0):!1}const Lt={[Pi]:r.FUNC_ADD,[fd]:r.FUNC_SUBTRACT,[pd]:r.FUNC_REVERSE_SUBTRACT};Lt[md]=r.MIN,Lt[gd]=r.MAX;const At={[_d]:r.ZERO,[vd]:r.ONE,[xd]:r.SRC_COLOR,[ho]:r.SRC_ALPHA,[bd]:r.SRC_ALPHA_SATURATE,[Ed]:r.DST_COLOR,[yd]:r.DST_ALPHA,[Md]:r.ONE_MINUS_SRC_COLOR,[uo]:r.ONE_MINUS_SRC_ALPHA,[Td]:r.ONE_MINUS_DST_COLOR,[Sd]:r.ONE_MINUS_DST_ALPHA,[Ad]:r.CONSTANT_COLOR,[wd]:r.ONE_MINUS_CONSTANT_COLOR,[Cd]:r.CONSTANT_ALPHA,[Rd]:r.ONE_MINUS_CONSTANT_ALPHA};function D(B,dt,J,rt,gt,mt,Ot,fe,Re,Qt){if(B===ri){g===!0&&(st(r.BLEND),g=!1);return}if(g===!1&&(Z(r.BLEND),g=!0),B!==dd){if(B!==m||Qt!==v){if((f!==Pi||M!==Pi)&&(r.blendEquation(r.FUNC_ADD),f=Pi,M=Pi),Qt)switch(B){case dr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case co:r.blendFunc(r.ONE,r.ONE);break;case ec:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case nc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case dr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case co:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case ec:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case nc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}S=null,y=null,b=null,C=null,A.set(0,0,0),w=0,m=B,v=Qt}return}gt=gt||dt,mt=mt||J,Ot=Ot||rt,(dt!==f||gt!==M)&&(r.blendEquationSeparate(Lt[dt],Lt[gt]),f=dt,M=gt),(J!==S||rt!==y||mt!==b||Ot!==C)&&(r.blendFuncSeparate(At[J],At[rt],At[mt],At[Ot]),S=J,y=rt,b=mt,C=Ot),(fe.equals(A)===!1||Re!==w)&&(r.blendColor(fe.r,fe.g,fe.b,Re),A.copy(fe),w=Re),m=B,v=!1}function ne(B,dt){B.side===un?st(r.CULL_FACE):Z(r.CULL_FACE);let J=B.side===Ge;dt&&(J=!J),Dt(J),B.blending===dr&&B.transparent===!1?D(ri):D(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),s.setMask(B.colorWrite);const rt=B.stencilWrite;o.setTest(rt),rt&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Yt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Z(r.SAMPLE_ALPHA_TO_COVERAGE):st(r.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(B){x!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),x=B)}function It(B){B!==hd?(Z(r.CULL_FACE),B!==L&&(B===tc?r.cullFace(r.BACK):B===ud?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):st(r.CULL_FACE),L=B}function yt(B){B!==F&&(V&&r.lineWidth(B),F=B)}function Yt(B,dt,J){B?(Z(r.POLYGON_OFFSET_FILL),(N!==dt||H!==J)&&(r.polygonOffset(dt,J),N=dt,H=J)):st(r.POLYGON_OFFSET_FILL)}function vt(B){B?Z(r.SCISSOR_TEST):st(r.SCISSOR_TEST)}function P(B){B===void 0&&(B=r.TEXTURE0+X-1),nt!==B&&(r.activeTexture(B),nt=B)}function E(B,dt,J){J===void 0&&(nt===null?J=r.TEXTURE0+X-1:J=nt);let rt=I[J];rt===void 0&&(rt={type:void 0,texture:void 0},I[J]=rt),(rt.type!==B||rt.texture!==dt)&&(nt!==J&&(r.activeTexture(J),nt=J),r.bindTexture(B,dt||Q[B]),rt.type=B,rt.texture=dt)}function q(){const B=I[nt];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function et(){try{r.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function at(){try{r.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function tt(){try{r.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Tt(){try{r.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ut(){try{r.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _t(){try{r.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Gt(){try{r.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function lt(){try{r.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xt(){try{r.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pt(){try{r.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ut(B){it.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),it.copy(B))}function St(B){O.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),O.copy(B))}function Xt(B,dt){let J=c.get(dt);J===void 0&&(J=new WeakMap,c.set(dt,J));let rt=J.get(B);rt===void 0&&(rt=r.getUniformBlockIndex(dt,B.name),J.set(B,rt))}function zt(B,dt){const rt=c.get(dt).get(B);l.get(dt)!==rt&&(r.uniformBlockBinding(dt,rt,B.__bindingPointIndex),l.set(dt,rt))}function se(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},nt=null,I={},u={},d=new WeakMap,p=[],_=null,g=!1,m=null,f=null,S=null,y=null,M=null,b=null,C=null,A=new Vt(0,0,0),w=0,v=!1,x=null,L=null,F=null,N=null,H=null,it.set(0,0,r.canvas.width,r.canvas.height),O.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:st,bindFramebuffer:pt,drawBuffers:ct,useProgram:bt,setBlending:D,setMaterial:ne,setFlipSided:Dt,setCullFace:It,setLineWidth:yt,setPolygonOffset:Yt,setScissorTest:vt,activeTexture:P,bindTexture:E,unbindTexture:q,compressedTexImage2D:et,compressedTexImage3D:at,texImage2D:xt,texImage3D:Pt,updateUBOMapping:Xt,uniformBlockBinding:zt,texStorage2D:Gt,texStorage3D:lt,texSubImage2D:tt,texSubImage3D:Tt,compressedTexSubImage2D:ut,compressedTexSubImage3D:_t,scissor:Ut,viewport:St,reset:se}}function L0(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Rt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,E){return p?new OffscreenCanvas(P,E):ea("canvas")}function g(P,E,q){let et=1;const at=vt(P);if((at.width>q||at.height>q)&&(et=q/Math.max(at.width,at.height)),et<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const tt=Math.floor(et*at.width),Tt=Math.floor(et*at.height);u===void 0&&(u=_(tt,Tt));const ut=E?_(tt,Tt):u;return ut.width=tt,ut.height=Tt,ut.getContext("2d").drawImage(P,0,0,tt,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+tt+"x"+Tt+")."),ut}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),P;return P}function m(P){return P.generateMipmaps}function f(P){r.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(P,E,q,et,at=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let tt=E;if(E===r.RED&&(q===r.FLOAT&&(tt=r.R32F),q===r.HALF_FLOAT&&(tt=r.R16F),q===r.UNSIGNED_BYTE&&(tt=r.R8)),E===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(tt=r.R8UI),q===r.UNSIGNED_SHORT&&(tt=r.R16UI),q===r.UNSIGNED_INT&&(tt=r.R32UI),q===r.BYTE&&(tt=r.R8I),q===r.SHORT&&(tt=r.R16I),q===r.INT&&(tt=r.R32I)),E===r.RG&&(q===r.FLOAT&&(tt=r.RG32F),q===r.HALF_FLOAT&&(tt=r.RG16F),q===r.UNSIGNED_BYTE&&(tt=r.RG8)),E===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(tt=r.RG8UI),q===r.UNSIGNED_SHORT&&(tt=r.RG16UI),q===r.UNSIGNED_INT&&(tt=r.RG32UI),q===r.BYTE&&(tt=r.RG8I),q===r.SHORT&&(tt=r.RG16I),q===r.INT&&(tt=r.RG32I)),E===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(tt=r.RGB8UI),q===r.UNSIGNED_SHORT&&(tt=r.RGB16UI),q===r.UNSIGNED_INT&&(tt=r.RGB32UI),q===r.BYTE&&(tt=r.RGB8I),q===r.SHORT&&(tt=r.RGB16I),q===r.INT&&(tt=r.RGB32I)),E===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(tt=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(tt=r.RGBA16UI),q===r.UNSIGNED_INT&&(tt=r.RGBA32UI),q===r.BYTE&&(tt=r.RGBA8I),q===r.SHORT&&(tt=r.RGBA16I),q===r.INT&&(tt=r.RGBA32I)),E===r.RGB&&q===r.UNSIGNED_INT_5_9_9_9_REV&&(tt=r.RGB9_E5),E===r.RGBA){const Tt=at?js:Zt.getTransfer(et);q===r.FLOAT&&(tt=r.RGBA32F),q===r.HALF_FLOAT&&(tt=r.RGBA16F),q===r.UNSIGNED_BYTE&&(tt=Tt===te?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(tt=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(tt=r.RGB5_A1)}return(tt===r.R16F||tt===r.R32F||tt===r.RG16F||tt===r.RG32F||tt===r.RGBA16F||tt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function M(P,E){let q;return P?E===null||E===Hi||E===yr?q=r.DEPTH24_STENCIL8:E===Hn?q=r.DEPTH32F_STENCIL8:E===Jr&&(q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Hi||E===yr?q=r.DEPTH_COMPONENT24:E===Hn?q=r.DEPTH_COMPONENT32F:E===Jr&&(q=r.DEPTH_COMPONENT16),q}function b(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==yn&&P.minFilter!==wn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function C(P){const E=P.target;E.removeEventListener("dispose",C),w(E),E.isVideoTexture&&h.delete(E)}function A(P){const E=P.target;E.removeEventListener("dispose",A),x(E)}function w(P){const E=n.get(P);if(E.__webglInit===void 0)return;const q=P.source,et=d.get(q);if(et){const at=et[E.__cacheKey];at.usedTimes--,at.usedTimes===0&&v(P),Object.keys(et).length===0&&d.delete(q)}n.remove(P)}function v(P){const E=n.get(P);r.deleteTexture(E.__webglTexture);const q=P.source,et=d.get(q);delete et[E.__cacheKey],a.memory.textures--}function x(P){const E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(E.__webglFramebuffer[et]))for(let at=0;at<E.__webglFramebuffer[et].length;at++)r.deleteFramebuffer(E.__webglFramebuffer[et][at]);else r.deleteFramebuffer(E.__webglFramebuffer[et]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[et])}else{if(Array.isArray(E.__webglFramebuffer))for(let et=0;et<E.__webglFramebuffer.length;et++)r.deleteFramebuffer(E.__webglFramebuffer[et]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let et=0;et<E.__webglColorRenderbuffer.length;et++)E.__webglColorRenderbuffer[et]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[et]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=P.textures;for(let et=0,at=q.length;et<at;et++){const tt=n.get(q[et]);tt.__webglTexture&&(r.deleteTexture(tt.__webglTexture),a.memory.textures--),n.remove(q[et])}n.remove(P)}let L=0;function F(){L=0}function N(){const P=L;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),L+=1,P}function H(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function X(P,E){const q=n.get(P);if(P.isVideoTexture&&yt(P),P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){const et=P.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(q,P,E);return}}e.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+E)}function V(P,E){const q=n.get(P);if(P.version>0&&q.__version!==P.version){O(q,P,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+E)}function Y(P,E){const q=n.get(P);if(P.version>0&&q.__version!==P.version){O(q,P,E);return}e.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+E)}function G(P,E){const q=n.get(P);if(P.version>0&&q.__version!==P.version){W(q,P,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+E)}const nt={[So]:r.REPEAT,[Ii]:r.CLAMP_TO_EDGE,[Eo]:r.MIRRORED_REPEAT},I={[yn]:r.NEAREST,[Bd]:r.NEAREST_MIPMAP_NEAREST,[ms]:r.NEAREST_MIPMAP_LINEAR,[wn]:r.LINEAR,[xa]:r.LINEAR_MIPMAP_NEAREST,[Ui]:r.LINEAR_MIPMAP_LINEAR},R={[Gd]:r.NEVER,[$d]:r.ALWAYS,[Vd]:r.LESS,[Hh]:r.LEQUAL,[Wd]:r.EQUAL,[Yd]:r.GEQUAL,[Xd]:r.GREATER,[qd]:r.NOTEQUAL};function j(P,E){if(E.type===Hn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===wn||E.magFilter===xa||E.magFilter===ms||E.magFilter===Ui||E.minFilter===wn||E.minFilter===xa||E.minFilter===ms||E.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,nt[E.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,nt[E.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,nt[E.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,I[E.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,I[E.minFilter]),E.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,R[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===yn||E.minFilter!==ms&&E.minFilter!==Ui||E.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function it(P,E){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",C));const et=E.source;let at=d.get(et);at===void 0&&(at={},d.set(et,at));const tt=H(E);if(tt!==P.__cacheKey){at[tt]===void 0&&(at[tt]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,q=!0),at[tt].usedTimes++;const Tt=at[P.__cacheKey];Tt!==void 0&&(at[P.__cacheKey].usedTimes--,Tt.usedTimes===0&&v(E)),P.__cacheKey=tt,P.__webglTexture=at[tt].texture}return q}function O(P,E,q){let et=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(et=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(et=r.TEXTURE_3D);const at=it(P,E),tt=E.source;e.bindTexture(et,P.__webglTexture,r.TEXTURE0+q);const Tt=n.get(tt);if(tt.version!==Tt.__version||at===!0){e.activeTexture(r.TEXTURE0+q);const ut=Zt.getPrimaries(Zt.workingColorSpace),_t=E.colorSpace===ti?null:Zt.getPrimaries(E.colorSpace),Gt=E.colorSpace===ti||ut===_t?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let lt=g(E.image,!1,i.maxTextureSize);lt=Yt(E,lt);const xt=s.convert(E.format,E.colorSpace),Pt=s.convert(E.type);let Ut=y(E.internalFormat,xt,Pt,E.colorSpace,E.isVideoTexture);j(et,E);let St;const Xt=E.mipmaps,zt=E.isVideoTexture!==!0,se=Tt.__version===void 0||at===!0,B=tt.dataReady,dt=b(E,lt);if(E.isDepthTexture)Ut=M(E.format===Sr,E.type),se&&(zt?e.texStorage2D(r.TEXTURE_2D,1,Ut,lt.width,lt.height):e.texImage2D(r.TEXTURE_2D,0,Ut,lt.width,lt.height,0,xt,Pt,null));else if(E.isDataTexture)if(Xt.length>0){zt&&se&&e.texStorage2D(r.TEXTURE_2D,dt,Ut,Xt[0].width,Xt[0].height);for(let J=0,rt=Xt.length;J<rt;J++)St=Xt[J],zt?B&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,St.width,St.height,xt,Pt,St.data):e.texImage2D(r.TEXTURE_2D,J,Ut,St.width,St.height,0,xt,Pt,St.data);E.generateMipmaps=!1}else zt?(se&&e.texStorage2D(r.TEXTURE_2D,dt,Ut,lt.width,lt.height),B&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,lt.width,lt.height,xt,Pt,lt.data)):e.texImage2D(r.TEXTURE_2D,0,Ut,lt.width,lt.height,0,xt,Pt,lt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){zt&&se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,Ut,Xt[0].width,Xt[0].height,lt.depth);for(let J=0,rt=Xt.length;J<rt;J++)if(St=Xt[J],E.format!==Mn)if(xt!==null)if(zt){if(B)if(E.layerUpdates.size>0){const gt=Nc(St.width,St.height,E.format,E.type);for(const mt of E.layerUpdates){const Ot=St.data.subarray(mt*gt/St.data.BYTES_PER_ELEMENT,(mt+1)*gt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,mt,St.width,St.height,1,xt,Ot)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,St.width,St.height,lt.depth,xt,St.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,J,Ut,St.width,St.height,lt.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?B&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,St.width,St.height,lt.depth,xt,Pt,St.data):e.texImage3D(r.TEXTURE_2D_ARRAY,J,Ut,St.width,St.height,lt.depth,0,xt,Pt,St.data)}else{zt&&se&&e.texStorage2D(r.TEXTURE_2D,dt,Ut,Xt[0].width,Xt[0].height);for(let J=0,rt=Xt.length;J<rt;J++)St=Xt[J],E.format!==Mn?xt!==null?zt?B&&e.compressedTexSubImage2D(r.TEXTURE_2D,J,0,0,St.width,St.height,xt,St.data):e.compressedTexImage2D(r.TEXTURE_2D,J,Ut,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?B&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,St.width,St.height,xt,Pt,St.data):e.texImage2D(r.TEXTURE_2D,J,Ut,St.width,St.height,0,xt,Pt,St.data)}else if(E.isDataArrayTexture)if(zt){if(se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,Ut,lt.width,lt.height,lt.depth),B)if(E.layerUpdates.size>0){const J=Nc(lt.width,lt.height,E.format,E.type);for(const rt of E.layerUpdates){const gt=lt.data.subarray(rt*J/lt.data.BYTES_PER_ELEMENT,(rt+1)*J/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,rt,lt.width,lt.height,1,xt,Pt,gt)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,xt,Pt,lt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ut,lt.width,lt.height,lt.depth,0,xt,Pt,lt.data);else if(E.isData3DTexture)zt?(se&&e.texStorage3D(r.TEXTURE_3D,dt,Ut,lt.width,lt.height,lt.depth),B&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,xt,Pt,lt.data)):e.texImage3D(r.TEXTURE_3D,0,Ut,lt.width,lt.height,lt.depth,0,xt,Pt,lt.data);else if(E.isFramebufferTexture){if(se)if(zt)e.texStorage2D(r.TEXTURE_2D,dt,Ut,lt.width,lt.height);else{let J=lt.width,rt=lt.height;for(let gt=0;gt<dt;gt++)e.texImage2D(r.TEXTURE_2D,gt,Ut,J,rt,0,xt,Pt,null),J>>=1,rt>>=1}}else if(Xt.length>0){if(zt&&se){const J=vt(Xt[0]);e.texStorage2D(r.TEXTURE_2D,dt,Ut,J.width,J.height)}for(let J=0,rt=Xt.length;J<rt;J++)St=Xt[J],zt?B&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,xt,Pt,St):e.texImage2D(r.TEXTURE_2D,J,Ut,xt,Pt,St);E.generateMipmaps=!1}else if(zt){if(se){const J=vt(lt);e.texStorage2D(r.TEXTURE_2D,dt,Ut,J.width,J.height)}B&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,xt,Pt,lt)}else e.texImage2D(r.TEXTURE_2D,0,Ut,xt,Pt,lt);m(E)&&f(et),Tt.__version=tt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function W(P,E,q){if(E.image.length!==6)return;const et=it(P,E),at=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+q);const tt=n.get(at);if(at.version!==tt.__version||et===!0){e.activeTexture(r.TEXTURE0+q);const Tt=Zt.getPrimaries(Zt.workingColorSpace),ut=E.colorSpace===ti?null:Zt.getPrimaries(E.colorSpace),_t=E.colorSpace===ti||Tt===ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Gt=E.isCompressedTexture||E.image[0].isCompressedTexture,lt=E.image[0]&&E.image[0].isDataTexture,xt=[];for(let rt=0;rt<6;rt++)!Gt&&!lt?xt[rt]=g(E.image[rt],!0,i.maxCubemapSize):xt[rt]=lt?E.image[rt].image:E.image[rt],xt[rt]=Yt(E,xt[rt]);const Pt=xt[0],Ut=s.convert(E.format,E.colorSpace),St=s.convert(E.type),Xt=y(E.internalFormat,Ut,St,E.colorSpace),zt=E.isVideoTexture!==!0,se=tt.__version===void 0||et===!0,B=at.dataReady;let dt=b(E,Pt);j(r.TEXTURE_CUBE_MAP,E);let J;if(Gt){zt&&se&&e.texStorage2D(r.TEXTURE_CUBE_MAP,dt,Xt,Pt.width,Pt.height);for(let rt=0;rt<6;rt++){J=xt[rt].mipmaps;for(let gt=0;gt<J.length;gt++){const mt=J[gt];E.format!==Mn?Ut!==null?zt?B&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,gt,0,0,mt.width,mt.height,Ut,mt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,gt,Xt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,gt,0,0,mt.width,mt.height,Ut,St,mt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,gt,Xt,mt.width,mt.height,0,Ut,St,mt.data)}}}else{if(J=E.mipmaps,zt&&se){J.length>0&&dt++;const rt=vt(xt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,dt,Xt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(lt){zt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,xt[rt].width,xt[rt].height,Ut,St,xt[rt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Xt,xt[rt].width,xt[rt].height,0,Ut,St,xt[rt].data);for(let gt=0;gt<J.length;gt++){const Ot=J[gt].image[rt].image;zt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,gt+1,0,0,Ot.width,Ot.height,Ut,St,Ot.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,gt+1,Xt,Ot.width,Ot.height,0,Ut,St,Ot.data)}}else{zt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ut,St,xt[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Xt,Ut,St,xt[rt]);for(let gt=0;gt<J.length;gt++){const mt=J[gt];zt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,gt+1,0,0,Ut,St,mt.image[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,gt+1,Xt,Ut,St,mt.image[rt])}}}m(E)&&f(r.TEXTURE_CUBE_MAP),tt.__version=at.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Q(P,E,q,et,at,tt){const Tt=s.convert(q.format,q.colorSpace),ut=s.convert(q.type),_t=y(q.internalFormat,Tt,ut,q.colorSpace),Gt=n.get(E),lt=n.get(q);if(lt.__renderTarget=E,!Gt.__hasExternalTextures){const xt=Math.max(1,E.width>>tt),Pt=Math.max(1,E.height>>tt);at===r.TEXTURE_3D||at===r.TEXTURE_2D_ARRAY?e.texImage3D(at,tt,_t,xt,Pt,E.depth,0,Tt,ut,null):e.texImage2D(at,tt,_t,xt,Pt,0,Tt,ut,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),It(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,et,at,lt.__webglTexture,0,Dt(E)):(at===r.TEXTURE_2D||at>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,et,at,lt.__webglTexture,tt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Z(P,E,q){if(r.bindRenderbuffer(r.RENDERBUFFER,P),E.depthBuffer){const et=E.depthTexture,at=et&&et.isDepthTexture?et.type:null,tt=M(E.stencilBuffer,at),Tt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=Dt(E);It(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ut,tt,E.width,E.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,ut,tt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,tt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,P)}else{const et=E.textures;for(let at=0;at<et.length;at++){const tt=et[at],Tt=s.convert(tt.format,tt.colorSpace),ut=s.convert(tt.type),_t=y(tt.internalFormat,Tt,ut,tt.colorSpace),Gt=Dt(E);q&&It(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Gt,_t,E.width,E.height):It(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Gt,_t,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,_t,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function st(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=n.get(E.depthTexture);et.__renderTarget=E,(!et.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const at=et.__webglTexture,tt=Dt(E);if(E.depthTexture.format===fr)It(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,at,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,at,0);else if(E.depthTexture.format===Sr)It(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,at,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function pt(P){const E=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const et=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),et){const at=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,et.removeEventListener("dispose",at)};et.addEventListener("dispose",at),E.__depthDisposeCallback=at}E.__boundDepthTexture=et}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");st(E.__webglFramebuffer,P)}else if(q){E.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[et]),E.__webglDepthbuffer[et]===void 0)E.__webglDepthbuffer[et]=r.createRenderbuffer(),Z(E.__webglDepthbuffer[et],P,!1);else{const at=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,tt=E.__webglDepthbuffer[et];r.bindRenderbuffer(r.RENDERBUFFER,tt),r.framebufferRenderbuffer(r.FRAMEBUFFER,at,r.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Z(E.__webglDepthbuffer,P,!1);else{const et=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,at),r.framebufferRenderbuffer(r.FRAMEBUFFER,et,r.RENDERBUFFER,at)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function ct(P,E,q){const et=n.get(P);E!==void 0&&Q(et.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&pt(P)}function bt(P){const E=P.texture,q=n.get(P),et=n.get(E);P.addEventListener("dispose",A);const at=P.textures,tt=P.isWebGLCubeRenderTarget===!0,Tt=at.length>1;if(Tt||(et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture()),et.__version=E.version,a.memory.textures++),tt){q.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[ut]=[];for(let _t=0;_t<E.mipmaps.length;_t++)q.__webglFramebuffer[ut][_t]=r.createFramebuffer()}else q.__webglFramebuffer[ut]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let ut=0;ut<E.mipmaps.length;ut++)q.__webglFramebuffer[ut]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(Tt)for(let ut=0,_t=at.length;ut<_t;ut++){const Gt=n.get(at[ut]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&It(P)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ut=0;ut<at.length;ut++){const _t=at[ut];q.__webglColorRenderbuffer[ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[ut]);const Gt=s.convert(_t.format,_t.colorSpace),lt=s.convert(_t.type),xt=y(_t.internalFormat,Gt,lt,_t.colorSpace,P.isXRRenderTarget===!0),Pt=Dt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pt,xt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,q.__webglColorRenderbuffer[ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),Z(q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(tt){e.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture),j(r.TEXTURE_CUBE_MAP,E);for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let _t=0;_t<E.mipmaps.length;_t++)Q(q.__webglFramebuffer[ut][_t],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,_t);else Q(q.__webglFramebuffer[ut],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(E)&&f(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ut=0,_t=at.length;ut<_t;ut++){const Gt=at[ut],lt=n.get(Gt);e.bindTexture(r.TEXTURE_2D,lt.__webglTexture),j(r.TEXTURE_2D,Gt),Q(q.__webglFramebuffer,P,Gt,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,0),m(Gt)&&f(r.TEXTURE_2D)}e.unbindTexture()}else{let ut=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ut=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ut,et.__webglTexture),j(ut,E),E.mipmaps&&E.mipmaps.length>0)for(let _t=0;_t<E.mipmaps.length;_t++)Q(q.__webglFramebuffer[_t],P,E,r.COLOR_ATTACHMENT0,ut,_t);else Q(q.__webglFramebuffer,P,E,r.COLOR_ATTACHMENT0,ut,0);m(E)&&f(ut),e.unbindTexture()}P.depthBuffer&&pt(P)}function Lt(P){const E=P.textures;for(let q=0,et=E.length;q<et;q++){const at=E[q];if(m(at)){const tt=S(P),Tt=n.get(at).__webglTexture;e.bindTexture(tt,Tt),f(tt),e.unbindTexture()}}}const At=[],D=[];function ne(P){if(P.samples>0){if(It(P)===!1){const E=P.textures,q=P.width,et=P.height;let at=r.COLOR_BUFFER_BIT;const tt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Tt=n.get(P),ut=E.length>1;if(ut)for(let _t=0;_t<E.length;_t++)e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let _t=0;_t<E.length;_t++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(at|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(at|=r.STENCIL_BUFFER_BIT)),ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);const Gt=n.get(E[_t]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Gt,0)}r.blitFramebuffer(0,0,q,et,0,0,q,et,at,r.NEAREST),l===!0&&(At.length=0,D.length=0,At.push(r.COLOR_ATTACHMENT0+_t),P.depthBuffer&&P.resolveDepthBuffer===!1&&(At.push(tt),D.push(tt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,At))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ut)for(let _t=0;_t<E.length;_t++){e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);const Gt=n.get(E[_t]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,Gt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Dt(P){return Math.min(i.maxSamples,P.samples)}function It(P){const E=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function yt(P){const E=a.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function Yt(P,E){const q=P.colorSpace,et=P.format,at=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==Er&&q!==ti&&(Zt.getTransfer(q)===te?(et!==Mn||at!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),E}function vt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=V,this.setTexture3D=Y,this.setTextureCube=G,this.rebindTextures=ct,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=It}function D0(r,t){function e(n,i=ti){let s;const a=Zt.getTransfer(i);if(n===Wn)return r.UNSIGNED_BYTE;if(n===pl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ml)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Dh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ph)return r.BYTE;if(n===Lh)return r.SHORT;if(n===Jr)return r.UNSIGNED_SHORT;if(n===fl)return r.INT;if(n===Hi)return r.UNSIGNED_INT;if(n===Hn)return r.FLOAT;if(n===as)return r.HALF_FLOAT;if(n===Ih)return r.ALPHA;if(n===Uh)return r.RGB;if(n===Mn)return r.RGBA;if(n===Nh)return r.LUMINANCE;if(n===Fh)return r.LUMINANCE_ALPHA;if(n===fr)return r.DEPTH_COMPONENT;if(n===Sr)return r.DEPTH_STENCIL;if(n===Oh)return r.RED;if(n===gl)return r.RED_INTEGER;if(n===Bh)return r.RG;if(n===_l)return r.RG_INTEGER;if(n===vl)return r.RGBA_INTEGER;if(n===Gs||n===Vs||n===Ws||n===Xs)if(a===te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Gs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Gs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===To||n===bo||n===Ao||n===wo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===To)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ao)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Co||n===Ro||n===Po)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Co||n===Ro)return a===te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Po)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lo||n===Do||n===Io||n===Uo||n===No||n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Ho||n===Go||n===Vo||n===Wo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Lo)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Do)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Io)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uo)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===No)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fo)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oo)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bo)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zo)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ko)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ho)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Go)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vo)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wo)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qs||n===Xo||n===qo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===qs)return a===te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zh||n===Yo||n===$o||n===Ko)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===qs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Yo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$o)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ko)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const I0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class N0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ve,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ci({vertexShader:I0,fragmentShader:U0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qt(new us(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F0 extends Pr{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,_=null;const g=new N0,m=e.getContextAttributes();let f=null,S=null;const y=[],M=[],b=new Rt;let C=null;const A=new ke;A.viewport=new ee;const w=new ke;w.viewport=new ee;const v=[A,w],x=new tp;let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let W=y[O];return W===void 0&&(W=new Ha,y[O]=W),W.getTargetRaySpace()},this.getControllerGrip=function(O){let W=y[O];return W===void 0&&(W=new Ha,y[O]=W),W.getGripSpace()},this.getHand=function(O){let W=y[O];return W===void 0&&(W=new Ha,y[O]=W),W.getHandSpace()};function N(O){const W=M.indexOf(O.inputSource);if(W===-1)return;const Q=y[W];Q!==void 0&&(Q.update(O.inputSource,O.frame,c||a),Q.dispatchEvent({type:O.type,data:O.inputSource}))}function H(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",X);for(let O=0;O<y.length;O++){const W=M[O];W!==null&&(M[O]=null,y[O].disconnect(W))}L=null,F=null,g.reset(),t.setRenderTarget(f),p=null,d=null,u=null,i=null,S=null,it.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",H),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(b),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,Z=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?Sr:fr,Z=m.stencil?yr:Hi);const pt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(pt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Gi(d.textureWidth,d.textureHeight,{format:Mn,type:Wn,depthTexture:new Qh(d.textureWidth,d.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Gi(p.framebufferWidth,p.framebufferHeight,{format:Mn,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),it.setContext(i),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(O){for(let W=0;W<O.removed.length;W++){const Q=O.removed[W],Z=M.indexOf(Q);Z>=0&&(M[Z]=null,y[Z].disconnect(Q))}for(let W=0;W<O.added.length;W++){const Q=O.added[W];let Z=M.indexOf(Q);if(Z===-1){for(let pt=0;pt<y.length;pt++)if(pt>=M.length){M.push(Q),Z=pt;break}else if(M[pt]===null){M[pt]=Q,Z=pt;break}if(Z===-1)break}const st=y[Z];st&&st.connect(Q)}}const V=new U,Y=new U;function G(O,W,Q){V.setFromMatrixPosition(W.matrixWorld),Y.setFromMatrixPosition(Q.matrixWorld);const Z=V.distanceTo(Y),st=W.projectionMatrix.elements,pt=Q.projectionMatrix.elements,ct=st[14]/(st[10]-1),bt=st[14]/(st[10]+1),Lt=(st[9]+1)/st[5],At=(st[9]-1)/st[5],D=(st[8]-1)/st[0],ne=(pt[8]+1)/pt[0],Dt=ct*D,It=ct*ne,yt=Z/(-D+ne),Yt=yt*-D;if(W.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Yt),O.translateZ(yt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),st[10]===-1)O.projectionMatrix.copy(W.projectionMatrix),O.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{const vt=ct+yt,P=bt+yt,E=Dt-Yt,q=It+(Z-Yt),et=Lt*bt/P*vt,at=At*bt/P*vt;O.projectionMatrix.makePerspective(E,q,et,at,vt,P),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function nt(O,W){W===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(W.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;let W=O.near,Q=O.far;g.texture!==null&&(g.depthNear>0&&(W=g.depthNear),g.depthFar>0&&(Q=g.depthFar)),x.near=w.near=A.near=W,x.far=w.far=A.far=Q,(L!==x.near||F!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),L=x.near,F=x.far),A.layers.mask=O.layers.mask|2,w.layers.mask=O.layers.mask|4,x.layers.mask=A.layers.mask|w.layers.mask;const Z=O.parent,st=x.cameras;nt(x,Z);for(let pt=0;pt<st.length;pt++)nt(st[pt],Z);st.length===2?G(x,A,w):x.projectionMatrix.copy(A.projectionMatrix),I(O,x,Z)};function I(O,W,Q){Q===null?O.matrix.copy(W.matrixWorld):(O.matrix.copy(Q.matrixWorld),O.matrix.invert(),O.matrix.multiply(W.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(W.projectionMatrix),O.projectionMatrixInverse.copy(W.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=ta*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let R=null;function j(O,W){if(h=W.getViewerPose(c||a),_=W,h!==null){const Q=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let Z=!1;Q.length!==x.cameras.length&&(x.cameras.length=0,Z=!0);for(let ct=0;ct<Q.length;ct++){const bt=Q[ct];let Lt=null;if(p!==null)Lt=p.getViewport(bt);else{const D=u.getViewSubImage(d,bt);Lt=D.viewport,ct===0&&(t.setRenderTargetTextures(S,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(S))}let At=v[ct];At===void 0&&(At=new ke,At.layers.enable(ct),At.viewport=new ee,v[ct]=At),At.matrix.fromArray(bt.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(bt.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),ct===0&&(x.matrix.copy(At.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Z===!0&&x.cameras.push(At)}const st=i.enabledFeatures;if(st&&st.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const ct=u.getDepthInformation(Q[0]);ct&&ct.isValid&&ct.texture&&g.init(t,ct,i.renderState)}}for(let Q=0;Q<y.length;Q++){const Z=M[Q],st=y[Q];Z!==null&&st!==void 0&&st.update(Z,W,c||a)}R&&R(O,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),_=null}const it=new iu;it.setAnimationLoop(j),this.setAnimationLoop=function(O){R=O},this.dispose=function(){}}}const yi=new Rn,O0=new ae;function B0(r,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,$h(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,S,y,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,S,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ge&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ge&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const S=t.get(f),y=S.envMap,M=S.envMapRotation;y&&(m.envMap.value=y,yi.copy(M),yi.x*=-1,yi.y*=-1,yi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),m.envMapRotation.value.setFromMatrix4(O0.makeRotationFromEuler(yi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ge&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function z0(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const M=y.program;n.uniformBlockBinding(S,M)}function c(S,y){let M=i[S.id];M===void 0&&(_(S),M=h(S),i[S.id]=M,S.addEventListener("dispose",m));const b=y.program;n.updateUBOMapping(S,b);const C=t.render.frame;s[S.id]!==C&&(d(S),s[S.id]=C)}function h(S){const y=u();S.__bindingPointIndex=y;const M=r.createBuffer(),b=S.__size,C=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,b,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,M),M}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=i[S.id],M=S.uniforms,b=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let C=0,A=M.length;C<A;C++){const w=Array.isArray(M[C])?M[C]:[M[C]];for(let v=0,x=w.length;v<x;v++){const L=w[v];if(p(L,C,v,b)===!0){const F=L.__offset,N=Array.isArray(L.value)?L.value:[L.value];let H=0;for(let X=0;X<N.length;X++){const V=N[X],Y=g(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,F+H,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,H),H+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(S,y,M,b){const C=S.value,A=y+"_"+M;if(b[A]===void 0)return typeof C=="number"||typeof C=="boolean"?b[A]=C:b[A]=C.clone(),!0;{const w=b[A];if(typeof C=="number"||typeof C=="boolean"){if(w!==C)return b[A]=C,!0}else if(w.equals(C)===!1)return w.copy(C),!0}return!1}function _(S){const y=S.uniforms;let M=0;const b=16;for(let A=0,w=y.length;A<w;A++){const v=Array.isArray(y[A])?y[A]:[y[A]];for(let x=0,L=v.length;x<L;x++){const F=v[x],N=Array.isArray(F.value)?F.value:[F.value];for(let H=0,X=N.length;H<X;H++){const V=N[H],Y=g(V),G=M%b,nt=G%Y.boundary,I=G+nt;M+=nt,I!==0&&b-I<Y.storage&&(M+=b-I),F.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=Y.storage}}}const C=M%b;return C>0&&(M+=b-C),S.__size=M,S.__cache={},this}function g(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function f(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:l,update:c,dispose:f}}class k0{constructor(t={}){const{canvas:e=Zd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,f=null;const S=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this.toneMapping=si,this.toneMappingExposure=1;const M=this;let b=!1,C=0,A=0,w=null,v=-1,x=null;const L=new ee,F=new ee;let N=null;const H=new Vt(0);let X=0,V=e.width,Y=e.height,G=1,nt=null,I=null;const R=new ee(0,0,V,Y),j=new ee(0,0,V,Y);let it=!1;const O=new El;let W=!1,Q=!1;this.transmissionResolutionScale=1;const Z=new ae,st=new ae,pt=new U,ct=new ee,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function At(){return w===null?G:1}let D=n;function ne(T,z){return e.getContext(T,z)}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${dl}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),D===null){const z="webgl2";if(D=ne(z,T),D===null)throw ne(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Dt,It,yt,Yt,vt,P,E,q,et,at,tt,Tt,ut,_t,Gt,lt,xt,Pt,Ut,St,Xt,zt,se,B;function dt(){Dt=new Zg(D),Dt.init(),zt=new D0(D,Dt),It=new Vg(D,Dt,t,zt),yt=new P0(D,Dt),It.reverseDepthBuffer&&d&&yt.buffers.depth.setReversed(!0),Yt=new Qg(D),vt=new _0,P=new L0(D,Dt,yt,vt,It,zt,Yt),E=new Xg(M),q=new Kg(M),et=new sp(D),se=new Hg(D,et),at=new Jg(D,et,Yt,se),tt=new e_(D,at,et,Yt),Ut=new t_(D,It,P),lt=new Wg(vt),Tt=new g0(M,E,q,Dt,It,se,lt),ut=new B0(M,vt),_t=new x0,Gt=new b0(Dt),Pt=new kg(M,E,q,yt,tt,p,l),xt=new C0(M,tt,It),B=new z0(D,Yt,It,yt),St=new Gg(D,Dt,Yt),Xt=new jg(D,Dt,Yt),Yt.programs=Tt.programs,M.capabilities=It,M.extensions=Dt,M.properties=vt,M.renderLists=_t,M.shadowMap=xt,M.state=yt,M.info=Yt}dt();const J=new F0(M,D);this.xr=J,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=Dt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Dt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(T){T!==void 0&&(G=T,this.setSize(V,Y,!1))},this.getSize=function(T){return T.set(V,Y)},this.setSize=function(T,z,$=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=T,Y=z,e.width=Math.floor(T*G),e.height=Math.floor(z*G),$===!0&&(e.style.width=T+"px",e.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(V*G,Y*G).floor()},this.setDrawingBufferSize=function(T,z,$){V=T,Y=z,G=$,e.width=Math.floor(T*$),e.height=Math.floor(z*$),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(R)},this.setViewport=function(T,z,$,K){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,z,$,K),yt.viewport(L.copy(R).multiplyScalar(G).round())},this.getScissor=function(T){return T.copy(j)},this.setScissor=function(T,z,$,K){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,z,$,K),yt.scissor(F.copy(j).multiplyScalar(G).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(T){yt.setScissorTest(it=T)},this.setOpaqueSort=function(T){nt=T},this.setTransparentSort=function(T){I=T},this.getClearColor=function(T){return T.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,$=!0){let K=0;if(T){let k=!1;if(w!==null){const ot=w.texture.format;k=ot===vl||ot===_l||ot===gl}if(k){const ot=w.texture.type,ft=ot===Wn||ot===Hi||ot===Jr||ot===yr||ot===pl||ot===ml,Mt=Pt.getClearColor(),Et=Pt.getClearAlpha(),Nt=Mt.r,Ft=Mt.g,wt=Mt.b;ft?(_[0]=Nt,_[1]=Ft,_[2]=wt,_[3]=Et,D.clearBufferuiv(D.COLOR,0,_)):(g[0]=Nt,g[1]=Ft,g[2]=wt,g[3]=Et,D.clearBufferiv(D.COLOR,0,g))}else K|=D.COLOR_BUFFER_BIT}z&&(K|=D.DEPTH_BUFFER_BIT),$&&(K|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),Pt.dispose(),_t.dispose(),Gt.dispose(),vt.dispose(),E.dispose(),q.dispose(),tt.dispose(),se.dispose(),B.dispose(),Tt.dispose(),J.dispose(),J.removeEventListener("sessionstart",Yl),J.removeEventListener("sessionend",$l),pi.stop()};function rt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=Yt.autoReset,z=xt.enabled,$=xt.autoUpdate,K=xt.needsUpdate,k=xt.type;dt(),Yt.autoReset=T,xt.enabled=z,xt.autoUpdate=$,xt.needsUpdate=K,xt.type=k}function mt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ot(T){const z=T.target;z.removeEventListener("dispose",Ot),fe(z)}function fe(T){Re(T),vt.remove(T)}function Re(T){const z=vt.get(T).programs;z!==void 0&&(z.forEach(function($){Tt.releaseProgram($)}),T.isShaderMaterial&&Tt.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,$,K,k,ot){z===null&&(z=bt);const ft=k.isMesh&&k.matrixWorld.determinant()<0,Mt=rd(T,z,$,K,k);yt.setMaterial(K,ft);let Et=$.index,Nt=1;if(K.wireframe===!0){if(Et=at.getWireframeAttribute($),Et===void 0)return;Nt=2}const Ft=$.drawRange,wt=$.attributes.position;let $t=Ft.start*Nt,Jt=(Ft.start+Ft.count)*Nt;ot!==null&&($t=Math.max($t,ot.start*Nt),Jt=Math.min(Jt,(ot.start+ot.count)*Nt)),Et!==null?($t=Math.max($t,0),Jt=Math.min(Jt,Et.count)):wt!=null&&($t=Math.max($t,0),Jt=Math.min(Jt,wt.count));const _e=Jt-$t;if(_e<0||_e===1/0)return;se.setup(k,K,Mt,$,Et);let pe,Kt=St;if(Et!==null&&(pe=et.get(Et),Kt=Xt,Kt.setIndex(pe)),k.isMesh)K.wireframe===!0?(yt.setLineWidth(K.wireframeLinewidth*At()),Kt.setMode(D.LINES)):Kt.setMode(D.TRIANGLES);else if(k.isLine){let Ct=K.linewidth;Ct===void 0&&(Ct=1),yt.setLineWidth(Ct*At()),k.isLineSegments?Kt.setMode(D.LINES):k.isLineLoop?Kt.setMode(D.LINE_LOOP):Kt.setMode(D.LINE_STRIP)}else k.isPoints?Kt.setMode(D.POINTS):k.isSprite&&Kt.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Ti("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Kt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Dt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ct=k._multiDrawStarts,Ae=k._multiDrawCounts,jt=k._multiDrawCount,mn=Et?et.get(Et).bytesPerElement:1,qi=vt.get(K).currentProgram.getUniforms();for(let Ke=0;Ke<jt;Ke++)qi.setValue(D,"_gl_DrawID",Ke),Kt.render(Ct[Ke]/mn,Ae[Ke])}else if(k.isInstancedMesh)Kt.renderInstances($t,_e,k.count);else if($.isInstancedBufferGeometry){const Ct=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ae=Math.min($.instanceCount,Ct);Kt.renderInstances($t,_e,Ae)}else Kt.render($t,_e)};function Qt(T,z,$){T.transparent===!0&&T.side===un&&T.forceSinglePass===!1?(T.side=Ge,T.needsUpdate=!0,ps(T,z,$),T.side=li,T.needsUpdate=!0,ps(T,z,$),T.side=un):ps(T,z,$)}this.compile=function(T,z,$=null){$===null&&($=T),f=Gt.get($),f.init(z),y.push(f),$.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),T!==$&&T.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights();const K=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ot=k.material;if(ot)if(Array.isArray(ot))for(let ft=0;ft<ot.length;ft++){const Mt=ot[ft];Qt(Mt,$,k),K.add(Mt)}else Qt(ot,$,k),K.add(ot)}),f=y.pop(),K},this.compileAsync=function(T,z,$=null){const K=this.compile(T,z,$);return new Promise(k=>{function ot(){if(K.forEach(function(ft){vt.get(ft).currentProgram.isReady()&&K.delete(ft)}),K.size===0){k(T);return}setTimeout(ot,10)}Dt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let pn=null;function Ln(T){pn&&pn(T)}function Yl(){pi.stop()}function $l(){pi.start()}const pi=new iu;pi.setAnimationLoop(Ln),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(T){pn=T,J.setAnimationLoop(T),T===null?pi.stop():pi.start()},J.addEventListener("sessionstart",Yl),J.addEventListener("sessionend",$l),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(z),z=J.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,z,w),f=Gt.get(T,y.length),f.init(z),y.push(f),st.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),O.setFromProjectionMatrix(st),Q=this.localClippingEnabled,W=lt.init(this.clippingPlanes,Q),m=_t.get(T,S.length),m.init(),S.push(m),J.enabled===!0&&J.isPresenting===!0){const ot=M.xr.getDepthSensingMesh();ot!==null&&_a(ot,z,-1/0,M.sortObjects)}_a(T,z,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(nt,I),Lt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Lt&&Pt.addToRenderList(m,T),this.info.render.frame++,W===!0&&lt.beginShadows();const $=f.state.shadowsArray;xt.render($,T,z),W===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,k=m.transmissive;if(f.setupLights(),z.isArrayCamera){const ot=z.cameras;if(k.length>0)for(let ft=0,Mt=ot.length;ft<Mt;ft++){const Et=ot[ft];Zl(K,k,T,Et)}Lt&&Pt.render(T);for(let ft=0,Mt=ot.length;ft<Mt;ft++){const Et=ot[ft];Kl(m,T,Et,Et.viewport)}}else k.length>0&&Zl(K,k,T,z),Lt&&Pt.render(T),Kl(m,T,z);w!==null&&A===0&&(P.updateMultisampleRenderTarget(w),P.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(M,T,z),se.resetDefaultState(),v=-1,x=null,y.pop(),y.length>0?(f=y[y.length-1],W===!0&&lt.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function _a(T,z,$,K){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||O.intersectsSprite(T)){K&&ct.setFromMatrixPosition(T.matrixWorld).applyMatrix4(st);const ft=tt.update(T),Mt=T.material;Mt.visible&&m.push(T,ft,Mt,$,ct.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||O.intersectsObject(T))){const ft=tt.update(T),Mt=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ct.copy(T.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),ct.copy(ft.boundingSphere.center)),ct.applyMatrix4(T.matrixWorld).applyMatrix4(st)),Array.isArray(Mt)){const Et=ft.groups;for(let Nt=0,Ft=Et.length;Nt<Ft;Nt++){const wt=Et[Nt],$t=Mt[wt.materialIndex];$t&&$t.visible&&m.push(T,ft,$t,$,ct.z,wt)}}else Mt.visible&&m.push(T,ft,Mt,$,ct.z,null)}}const ot=T.children;for(let ft=0,Mt=ot.length;ft<Mt;ft++)_a(ot[ft],z,$,K)}function Kl(T,z,$,K){const k=T.opaque,ot=T.transmissive,ft=T.transparent;f.setupLightsView($),W===!0&&lt.setGlobalState(M.clippingPlanes,$),K&&yt.viewport(L.copy(K)),k.length>0&&fs(k,z,$),ot.length>0&&fs(ot,z,$),ft.length>0&&fs(ft,z,$),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Zl(T,z,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[K.id]===void 0&&(f.state.transmissionRenderTarget[K.id]=new Gi(1,1,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float")?as:Wn,minFilter:Ui,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const ot=f.state.transmissionRenderTarget[K.id],ft=K.viewport||L;ot.setSize(ft.z*M.transmissionResolutionScale,ft.w*M.transmissionResolutionScale);const Mt=M.getRenderTarget();M.setRenderTarget(ot),M.getClearColor(H),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear(),Lt&&Pt.render($);const Et=M.toneMapping;M.toneMapping=si;const Nt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),f.setupLightsView(K),W===!0&&lt.setGlobalState(M.clippingPlanes,K),fs(T,$,K),P.updateMultisampleRenderTarget(ot),P.updateRenderTargetMipmap(ot),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let wt=0,$t=z.length;wt<$t;wt++){const Jt=z[wt],_e=Jt.object,pe=Jt.geometry,Kt=Jt.material,Ct=Jt.group;if(Kt.side===un&&_e.layers.test(K.layers)){const Ae=Kt.side;Kt.side=Ge,Kt.needsUpdate=!0,Jl(_e,$,K,pe,Kt,Ct),Kt.side=Ae,Kt.needsUpdate=!0,Ft=!0}}Ft===!0&&(P.updateMultisampleRenderTarget(ot),P.updateRenderTargetMipmap(ot))}M.setRenderTarget(Mt),M.setClearColor(H,X),Nt!==void 0&&(K.viewport=Nt),M.toneMapping=Et}function fs(T,z,$){const K=z.isScene===!0?z.overrideMaterial:null;for(let k=0,ot=T.length;k<ot;k++){const ft=T[k],Mt=ft.object,Et=ft.geometry,Nt=K===null?ft.material:K,Ft=ft.group;Mt.layers.test($.layers)&&Jl(Mt,z,$,Et,Nt,Ft)}}function Jl(T,z,$,K,k,ot){T.onBeforeRender(M,z,$,K,k,ot),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(M,z,$,K,T,ot),k.transparent===!0&&k.side===un&&k.forceSinglePass===!1?(k.side=Ge,k.needsUpdate=!0,M.renderBufferDirect($,z,K,k,T,ot),k.side=li,k.needsUpdate=!0,M.renderBufferDirect($,z,K,k,T,ot),k.side=un):M.renderBufferDirect($,z,K,k,T,ot),T.onAfterRender(M,z,$,K,k,ot)}function ps(T,z,$){z.isScene!==!0&&(z=bt);const K=vt.get(T),k=f.state.lights,ot=f.state.shadowsArray,ft=k.state.version,Mt=Tt.getParameters(T,k.state,ot,z,$),Et=Tt.getProgramCacheKey(Mt);let Nt=K.programs;K.environment=T.isMeshStandardMaterial?z.environment:null,K.fog=z.fog,K.envMap=(T.isMeshStandardMaterial?q:E).get(T.envMap||K.environment),K.envMapRotation=K.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Nt===void 0&&(T.addEventListener("dispose",Ot),Nt=new Map,K.programs=Nt);let Ft=Nt.get(Et);if(Ft!==void 0){if(K.currentProgram===Ft&&K.lightsStateVersion===ft)return Ql(T,Mt),Ft}else Mt.uniforms=Tt.getUniforms(T),T.onBeforeCompile(Mt,M),Ft=Tt.acquireProgram(Mt,Et),Nt.set(Et,Ft),K.uniforms=Mt.uniforms;const wt=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(wt.clippingPlanes=lt.uniform),Ql(T,Mt),K.needsLights=ad(T),K.lightsStateVersion=ft,K.needsLights&&(wt.ambientLightColor.value=k.state.ambient,wt.lightProbe.value=k.state.probe,wt.directionalLights.value=k.state.directional,wt.directionalLightShadows.value=k.state.directionalShadow,wt.spotLights.value=k.state.spot,wt.spotLightShadows.value=k.state.spotShadow,wt.rectAreaLights.value=k.state.rectArea,wt.ltc_1.value=k.state.rectAreaLTC1,wt.ltc_2.value=k.state.rectAreaLTC2,wt.pointLights.value=k.state.point,wt.pointLightShadows.value=k.state.pointShadow,wt.hemisphereLights.value=k.state.hemi,wt.directionalShadowMap.value=k.state.directionalShadowMap,wt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,wt.spotShadowMap.value=k.state.spotShadowMap,wt.spotLightMatrix.value=k.state.spotLightMatrix,wt.spotLightMap.value=k.state.spotLightMap,wt.pointShadowMap.value=k.state.pointShadowMap,wt.pointShadowMatrix.value=k.state.pointShadowMatrix),K.currentProgram=Ft,K.uniformsList=null,Ft}function jl(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=Ys.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function Ql(T,z){const $=vt.get(T);$.outputColorSpace=z.outputColorSpace,$.batching=z.batching,$.batchingColor=z.batchingColor,$.instancing=z.instancing,$.instancingColor=z.instancingColor,$.instancingMorph=z.instancingMorph,$.skinning=z.skinning,$.morphTargets=z.morphTargets,$.morphNormals=z.morphNormals,$.morphColors=z.morphColors,$.morphTargetsCount=z.morphTargetsCount,$.numClippingPlanes=z.numClippingPlanes,$.numIntersection=z.numClipIntersection,$.vertexAlphas=z.vertexAlphas,$.vertexTangents=z.vertexTangents,$.toneMapping=z.toneMapping}function rd(T,z,$,K,k){z.isScene!==!0&&(z=bt),P.resetTextureUnits();const ot=z.fog,ft=K.isMeshStandardMaterial?z.environment:null,Mt=w===null?M.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Er,Et=(K.isMeshStandardMaterial?q:E).get(K.envMap||ft),Nt=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ft=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),wt=!!$.morphAttributes.position,$t=!!$.morphAttributes.normal,Jt=!!$.morphAttributes.color;let _e=si;K.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(_e=M.toneMapping);const pe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Kt=pe!==void 0?pe.length:0,Ct=vt.get(K),Ae=f.state.lights;if(W===!0&&(Q===!0||T!==x)){const Ue=T===x&&K.id===v;lt.setState(K,T,Ue)}let jt=!1;K.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Ae.state.version||Ct.outputColorSpace!==Mt||k.isBatchedMesh&&Ct.batching===!1||!k.isBatchedMesh&&Ct.batching===!0||k.isBatchedMesh&&Ct.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ct.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ct.instancing===!1||!k.isInstancedMesh&&Ct.instancing===!0||k.isSkinnedMesh&&Ct.skinning===!1||!k.isSkinnedMesh&&Ct.skinning===!0||k.isInstancedMesh&&Ct.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ct.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ct.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ct.instancingMorph===!1&&k.morphTexture!==null||Ct.envMap!==Et||K.fog===!0&&Ct.fog!==ot||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==lt.numPlanes||Ct.numIntersection!==lt.numIntersection)||Ct.vertexAlphas!==Nt||Ct.vertexTangents!==Ft||Ct.morphTargets!==wt||Ct.morphNormals!==$t||Ct.morphColors!==Jt||Ct.toneMapping!==_e||Ct.morphTargetsCount!==Kt)&&(jt=!0):(jt=!0,Ct.__version=K.version);let mn=Ct.currentProgram;jt===!0&&(mn=ps(K,z,k));let qi=!1,Ke=!1,Dr=!1;const oe=mn.getUniforms(),an=Ct.uniforms;if(yt.useProgram(mn.program)&&(qi=!0,Ke=!0,Dr=!0),K.id!==v&&(v=K.id,Ke=!0),qi||x!==T){yt.buffers.depth.getReversed()?(Z.copy(T.projectionMatrix),jd(Z),Qd(Z),oe.setValue(D,"projectionMatrix",Z)):oe.setValue(D,"projectionMatrix",T.projectionMatrix),oe.setValue(D,"viewMatrix",T.matrixWorldInverse);const Be=oe.map.cameraPosition;Be!==void 0&&Be.setValue(D,pt.setFromMatrixPosition(T.matrixWorld)),It.logarithmicDepthBuffer&&oe.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&oe.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,Ke=!0,Dr=!0)}if(k.isSkinnedMesh){oe.setOptional(D,k,"bindMatrix"),oe.setOptional(D,k,"bindMatrixInverse");const Ue=k.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),oe.setValue(D,"boneTexture",Ue.boneTexture,P))}k.isBatchedMesh&&(oe.setOptional(D,k,"batchingTexture"),oe.setValue(D,"batchingTexture",k._matricesTexture,P),oe.setOptional(D,k,"batchingIdTexture"),oe.setValue(D,"batchingIdTexture",k._indirectTexture,P),oe.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&oe.setValue(D,"batchingColorTexture",k._colorsTexture,P));const on=$.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&Ut.update(k,$,mn),(Ke||Ct.receiveShadow!==k.receiveShadow)&&(Ct.receiveShadow=k.receiveShadow,oe.setValue(D,"receiveShadow",k.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(an.envMap.value=Et,an.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&z.environment!==null&&(an.envMapIntensity.value=z.environmentIntensity),Ke&&(oe.setValue(D,"toneMappingExposure",M.toneMappingExposure),Ct.needsLights&&sd(an,Dr),ot&&K.fog===!0&&ut.refreshFogUniforms(an,ot),ut.refreshMaterialUniforms(an,K,G,Y,f.state.transmissionRenderTarget[T.id]),Ys.upload(D,jl(Ct),an,P)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ys.upload(D,jl(Ct),an,P),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&oe.setValue(D,"center",k.center),oe.setValue(D,"modelViewMatrix",k.modelViewMatrix),oe.setValue(D,"normalMatrix",k.normalMatrix),oe.setValue(D,"modelMatrix",k.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Ue=K.uniformsGroups;for(let Be=0,va=Ue.length;Be<va;Be++){const mi=Ue[Be];B.update(mi,mn),B.bind(mi,mn)}}return mn}function sd(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function ad(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,z,$){vt.get(T.texture).__webglTexture=z,vt.get(T.depthTexture).__webglTexture=$;const K=vt.get(T);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=$===void 0,K.__autoAllocateDepthBuffer||Dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,z){const $=vt.get(T);$.__webglFramebuffer=z,$.__useDefaultFramebuffer=z===void 0};const od=D.createFramebuffer();this.setRenderTarget=function(T,z=0,$=0){w=T,C=z,A=$;let K=!0,k=null,ot=!1,ft=!1;if(T){const Et=vt.get(T);if(Et.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(D.FRAMEBUFFER,null),K=!1;else if(Et.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(Et.__hasExternalTextures)P.rebindTextures(T,vt.get(T.texture).__webglTexture,vt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const wt=T.depthTexture;if(Et.__boundDepthTexture!==wt){if(wt!==null&&vt.has(wt)&&(T.width!==wt.image.width||T.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}const Nt=T.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(ft=!0);const Ft=vt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ft[z])?k=Ft[z][$]:k=Ft[z],ot=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?k=vt.get(T).__webglMultisampledFramebuffer:Array.isArray(Ft)?k=Ft[$]:k=Ft,L.copy(T.viewport),F.copy(T.scissor),N=T.scissorTest}else L.copy(R).multiplyScalar(G).floor(),F.copy(j).multiplyScalar(G).floor(),N=it;if($!==0&&(k=od),yt.bindFramebuffer(D.FRAMEBUFFER,k)&&K&&yt.drawBuffers(T,k),yt.viewport(L),yt.scissor(F),yt.setScissorTest(N),ot){const Et=vt.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,Et.__webglTexture,$)}else if(ft){const Et=vt.get(T.texture),Nt=z;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.__webglTexture,$,Nt)}else if(T!==null&&$!==0){const Et=vt.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Et.__webglTexture,$)}v=-1},this.readRenderTargetPixels=function(T,z,$,K,k,ot,ft){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=vt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){yt.bindFramebuffer(D.FRAMEBUFFER,Mt);try{const Et=T.texture,Nt=Et.format,Ft=Et.type;if(!It.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-K&&$>=0&&$<=T.height-k&&D.readPixels(z,$,K,k,zt.convert(Nt),zt.convert(Ft),ot)}finally{const Et=w!==null?vt.get(w).__webglFramebuffer:null;yt.bindFramebuffer(D.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(T,z,$,K,k,ot,ft){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=vt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){const Et=T.texture,Nt=Et.format,Ft=Et.type;if(!It.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=T.width-K&&$>=0&&$<=T.height-k){yt.bindFramebuffer(D.FRAMEBUFFER,Mt);const wt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,wt),D.bufferData(D.PIXEL_PACK_BUFFER,ot.byteLength,D.STREAM_READ),D.readPixels(z,$,K,k,zt.convert(Nt),zt.convert(Ft),0);const $t=w!==null?vt.get(w).__webglFramebuffer:null;yt.bindFramebuffer(D.FRAMEBUFFER,$t);const Jt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Jd(D,Jt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,wt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ot),D.deleteBuffer(wt),D.deleteSync(Jt),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,z=null,$=0){T.isTexture!==!0&&(Ti("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,T=arguments[1]);const K=Math.pow(2,-$),k=Math.floor(T.image.width*K),ot=Math.floor(T.image.height*K),ft=z!==null?z.x:0,Mt=z!==null?z.y:0;P.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,$,0,0,ft,Mt,k,ot),yt.unbindTexture()};const ld=D.createFramebuffer(),cd=D.createFramebuffer();this.copyTextureToTexture=function(T,z,$=null,K=null,k=0,ot=null){T.isTexture!==!0&&(Ti("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,T=arguments[1],z=arguments[2],ot=arguments[3]||0,$=null),ot===null&&(k!==0?(Ti("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ot=k,k=0):ot=0);let ft,Mt,Et,Nt,Ft,wt,$t,Jt,_e;const pe=T.isCompressedTexture?T.mipmaps[ot]:T.image;if($!==null)ft=$.max.x-$.min.x,Mt=$.max.y-$.min.y,Et=$.isBox3?$.max.z-$.min.z:1,Nt=$.min.x,Ft=$.min.y,wt=$.isBox3?$.min.z:0;else{const on=Math.pow(2,-k);ft=Math.floor(pe.width*on),Mt=Math.floor(pe.height*on),T.isDataArrayTexture?Et=pe.depth:T.isData3DTexture?Et=Math.floor(pe.depth*on):Et=1,Nt=0,Ft=0,wt=0}K!==null?($t=K.x,Jt=K.y,_e=K.z):($t=0,Jt=0,_e=0);const Kt=zt.convert(z.format),Ct=zt.convert(z.type);let Ae;z.isData3DTexture?(P.setTexture3D(z,0),Ae=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(P.setTexture2DArray(z,0),Ae=D.TEXTURE_2D_ARRAY):(P.setTexture2D(z,0),Ae=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const jt=D.getParameter(D.UNPACK_ROW_LENGTH),mn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),qi=D.getParameter(D.UNPACK_SKIP_PIXELS),Ke=D.getParameter(D.UNPACK_SKIP_ROWS),Dr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,pe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Nt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ft),D.pixelStorei(D.UNPACK_SKIP_IMAGES,wt);const oe=T.isDataArrayTexture||T.isData3DTexture,an=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){const on=vt.get(T),Ue=vt.get(z),Be=vt.get(on.__renderTarget),va=vt.get(Ue.__renderTarget);yt.bindFramebuffer(D.READ_FRAMEBUFFER,Be.__webglFramebuffer),yt.bindFramebuffer(D.DRAW_FRAMEBUFFER,va.__webglFramebuffer);for(let mi=0;mi<Et;mi++)oe&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(T).__webglTexture,k,wt+mi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(z).__webglTexture,ot,_e+mi)),D.blitFramebuffer(Nt,Ft,ft,Mt,$t,Jt,ft,Mt,D.DEPTH_BUFFER_BIT,D.NEAREST);yt.bindFramebuffer(D.READ_FRAMEBUFFER,null),yt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||T.isRenderTargetTexture||vt.has(T)){const on=vt.get(T),Ue=vt.get(z);yt.bindFramebuffer(D.READ_FRAMEBUFFER,ld),yt.bindFramebuffer(D.DRAW_FRAMEBUFFER,cd);for(let Be=0;Be<Et;Be++)oe?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,on.__webglTexture,k,wt+Be):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,on.__webglTexture,k),an?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ue.__webglTexture,ot,_e+Be):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ue.__webglTexture,ot),k!==0?D.blitFramebuffer(Nt,Ft,ft,Mt,$t,Jt,ft,Mt,D.COLOR_BUFFER_BIT,D.NEAREST):an?D.copyTexSubImage3D(Ae,ot,$t,Jt,_e+Be,Nt,Ft,ft,Mt):D.copyTexSubImage2D(Ae,ot,$t,Jt,Nt,Ft,ft,Mt);yt.bindFramebuffer(D.READ_FRAMEBUFFER,null),yt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else an?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Ae,ot,$t,Jt,_e,ft,Mt,Et,Kt,Ct,pe.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Ae,ot,$t,Jt,_e,ft,Mt,Et,Kt,pe.data):D.texSubImage3D(Ae,ot,$t,Jt,_e,ft,Mt,Et,Kt,Ct,pe):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ot,$t,Jt,ft,Mt,Kt,Ct,pe.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ot,$t,Jt,pe.width,pe.height,Kt,pe.data):D.texSubImage2D(D.TEXTURE_2D,ot,$t,Jt,ft,Mt,Kt,Ct,pe);D.pixelStorei(D.UNPACK_ROW_LENGTH,jt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,qi),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ke),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Dr),ot===0&&z.generateMipmaps&&D.generateMipmap(Ae),yt.unbindTexture()},this.copyTextureToTexture3D=function(T,z,$=null,K=null,k=0){return T.isTexture!==!0&&(Ti("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,K=arguments[1]||null,T=arguments[2],z=arguments[3],k=arguments[4]||0),Ti('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,z,$,K,k)},this.initRenderTarget=function(T){vt.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),yt.unbindTexture()},this.resetState=function(){C=0,A=0,w=null,yt.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}function zn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function lu(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var nn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},jr={duration:.5,overwrite:!1,delay:0},Cl,Ce,le,dn=1e8,re=1/dn,jo=Math.PI*2,H0=jo/4,G0=0,cu=Math.sqrt,V0=Math.cos,W0=Math.sin,be=function(t){return typeof t=="string"},me=function(t){return typeof t=="function"},Xn=function(t){return typeof t=="number"},Rl=function(t){return typeof t>"u"},Pn=function(t){return typeof t=="object"},We=function(t){return t!==!1},Pl=function(){return typeof window<"u"},Hs=function(t){return me(t)||be(t)},hu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ie=Array.isArray,X0=/random\([^)]+\)/g,q0=/,\s*/g,ah=/(?:-?\.?\d|\.)+/gi,uu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,hr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,eo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,du=/[+-]=-?[.\d]+/,Y0=/[^,'"\[\]\s]+/gi,$0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,he,Tn,Qo,Ll,rn={},ra={},fu,pu=function(t){return(ra=br(t,rn))&&$e},Dl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Qr=function(t,e){return!e&&console.warn(t)},mu=function(t,e){return t&&(rn[t]=e)&&ra&&(ra[t]=e)||rn},ts=function(){return 0},K0={suppressEvents:!0,isStart:!0,kill:!1},$s={suppressEvents:!0,kill:!1},Z0={suppressEvents:!0},Il={},ai=[],tl={},gu,je={},no={},oh=30,Ks=[],Ul="",Nl=function(t){var e=t[0],n,i;if(Pn(e)||me(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ks.length;i--&&!Ks[i].targetTest(e););n=Ks[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Bu(t[i],n)))||t.splice(i,1);return t},Oi=function(t){return t._gsap||Nl(fn(t))[0]._gsap},_u=function(t,e,n){return(n=t[e])&&me(n)?t[e]():Rl(n)&&t.getAttribute&&t.getAttribute(e)||n},Xe=function(t,e){return(t=t.split(",")).forEach(e)||t},ge=function(t){return Math.round(t*1e5)/1e5||0},ce=function(t){return Math.round(t*1e7)/1e7||0},mr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},J0=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},sa=function(){var t=ai.length,e=ai.slice(0),n,i;for(tl={},ai.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Fl=function(t){return!!(t._initted||t._startAt||t.add)},vu=function(t,e,n,i){ai.length&&!Ce&&sa(),t.render(e,n,!!(Ce&&e<0&&Fl(t))),ai.length&&!Ce&&sa()},xu=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Y0).length<2?e:be(t)?t.trim():t},Mu=function(t){return t},sn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},j0=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},br=function(t,e){for(var n in e)t[n]=e[n];return t},lh=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Pn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},aa=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},$r=function(t){var e=t.parent||he,n=t.keyframes?j0(Ie(t.keyframes)):sn;if(We(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Q0=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},yu=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},pa=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},hi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Bi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},tv=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},el=function(t,e,n,i){return t._startAt&&(Ce?t._startAt.revert($s):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},ev=function r(t){return!t||t._ts&&r(t.parent)},ch=function(t){return t._repeat?Ar(t._tTime,t=t.duration()+t._rDelay)*t:0},Ar=function(t,e){var n=Math.floor(t=ce(t/e));return t&&n===t?n-1:n},oa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ma=function(t){return t._end=ce(t._start+(t._tDur/Math.abs(t._ts||t._rts||re)||0))},ga=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ce(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ma(t),n._dirty||Bi(n,t)),t},Su=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=oa(t.rawTime(),e),(!e._dur||ds(0,e.totalDuration(),n)-e._tTime>re)&&e.render(n,!0)),Bi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-re}},An=function(t,e,n,i){return e.parent&&hi(e),e._start=ce((Xn(n)?n:n||t!==he?cn(t,n,e):t._time)+e._delay),e._end=ce(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),yu(t,e,"_first","_last",t._sort?"_start":0),nl(e)||(t._recent=e),i||Su(t,e),t._ts<0&&ga(t,t._tTime),t},Eu=function(t,e){return(rn.ScrollTrigger||Dl("scrollTrigger",e))&&rn.ScrollTrigger.create(e,t)},Tu=function(t,e,n,i,s){if(Bl(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Ce&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&gu!==Qe.frame)return ai.push(t),t._lazy=[s,i],1},nv=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},nl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},iv=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&nv(t)&&!(!t._initted&&nl(t))||(t._ts<0||t._dp._ts<0)&&!nl(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=ds(0,t._tDur,e),h=Ar(l,o),t._yoyo&&h&1&&(a=1-a),h!==Ar(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Ce||i||t._zTime===re||!e&&t._zTime){if(!t._initted&&Tu(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?re:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&el(t,e,n,!0),t._onUpdate&&!n&&tn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&tn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&hi(t,1),!n&&!Ce&&(tn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},rv=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},wr=function(t,e,n,i){var s=t._repeat,a=ce(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:ce(a*(s+1)+t._rDelay*s):a,o>0&&!i&&ga(t,t._tTime=t._tDur*o),t.parent&&ma(t),n||Bi(t.parent,t),t},hh=function(t){return t instanceof He?Bi(t):wr(t,t._dur)},sv={_start:0,endTime:ts,totalDuration:ts},cn=function r(t,e,n){var i=t.labels,s=t._recent||sv,a=t.duration()>=dn?s.endTime(!1):t._dur,o,l,c;return be(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Ie(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Kr=function(t,e,n){var i=Xn(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=We(l.vars.inherit)&&l.parent;a.immediateRender=We(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Me(e[0],a,e[s+1])},fi=function(t,e){return t||t===0?e(t):e},ds=function(t,e,n){return n<t?t:n>e?e:n},De=function(t,e){return!be(t)||!(e=$0.exec(t))?"":e[1]},av=function(t,e,n){return fi(n,function(i){return ds(t,e,i)})},il=[].slice,bu=function(t,e){return t&&Pn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Pn(t[0]))&&!t.nodeType&&t!==Tn},ov=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return be(i)&&!e||bu(i,1)?(s=n).push.apply(s,fn(i)):n.push(i)})||n},fn=function(t,e,n){return le&&!e&&le.selector?le.selector(t):be(t)&&!n&&(Qo||!Cr())?il.call((e||Ll).querySelectorAll(t),0):Ie(t)?ov(t,n):bu(t)?il.call(t,0):t?[t]:[]},rl=function(t){return t=fn(t)[0]||Qr("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return fn(e,n.querySelectorAll?n:n===t?Qr("Invalid scope")||Ll.createElement("div"):t)}},Au=function(t){return t.sort(function(){return .5-Math.random()})},wu=function(t){if(me(t))return t;var e=Pn(t)?t:{each:t},n=zi(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,u=i;return be(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(d,p,_){var g=(_||e).length,m=a[g],f,S,y,M,b,C,A,w,v;if(!m){if(v=e.grid==="auto"?0:(e.grid||[1,dn])[1],!v){for(A=-dn;A<(A=_[v++].getBoundingClientRect().left)&&v<g;);v<g&&v--}for(m=a[g]=[],f=l?Math.min(v,g)*h-.5:i%v,S=v===dn?0:l?g*u/v-.5:i/v|0,A=0,w=dn,C=0;C<g;C++)y=C%v-f,M=S-(C/v|0),m[C]=b=c?Math.abs(c==="y"?M:y):cu(y*y+M*M),b>A&&(A=b),b<w&&(w=b);i==="random"&&Au(m),m.max=A-w,m.min=w,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(v>g?g-1:c?c==="y"?g/v:v:Math.max(v,g/v))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=De(e.amount||e.each)||0,n=n&&g<0?Mv(n):n}return g=(m[d]-m.min)/m.max||0,ce(m.b+(n?n(g):g)*m.v)+m.u}},sl=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ce(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Xn(n)?0:De(n))}},Cu=function(t,e){var n=Ie(t),i,s;return!n&&Pn(t)&&(i=n=t.radius||dn,t.values?(t=fn(t.values),(s=!Xn(t[0]))&&(i*=i)):t=sl(t.increment)),fi(e,n?me(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=dn,h=0,u=t.length,d,p;u--;)s?(d=t[u].x-o,p=t[u].y-l,d=d*d+p*p):d=Math.abs(t[u]-o),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:a,s||h===a||Xn(a)?h:h+De(a)}:sl(t))},Ru=function(t,e,n,i){return fi(Ie(t)?!e:n===!0?!!(n=0):!i,function(){return Ie(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},lv=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},cv=function(t,e){return function(n){return t(parseFloat(n))+(e||De(n))}},hv=function(t,e,n){return Lu(t,e,0,1,n)},Pu=function(t,e,n){return fi(n,function(i){return t[~~e(i)]})},uv=function r(t,e,n){var i=e-t;return Ie(t)?Pu(t,r(0,t.length),e):fi(n,function(s){return(i+(s-t)%i)%i+t})},dv=function r(t,e,n){var i=e-t,s=i*2;return Ie(t)?Pu(t,r(0,t.length-1),e):fi(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},es=function(t){return t.replace(X0,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(q0);return Ru(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Lu=function(t,e,n,i,s){var a=e-t,o=i-n;return fi(s,function(l){return n+((l-t)/a*o||0)})},fv=function r(t,e,n,i){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var a=be(t),o={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Ie(t)&&!Ie(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=e}else i||(t=br(Ie(t)?[]:{},t));if(!h){for(l in e)Ol.call(o,t,l,"get",e[l]);s=function(_){return Hl(_,o)||(a?t.p:t)}}}return fi(n,s)},uh=function(t,e,n){var i=t.labels,s=dn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},tn=function(t,e,n){var i=t.vars,s=i[e],a=le,o=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&ai.length&&sa(),o&&(le=o),h=l?s.apply(c,l):s.call(c),le=a,h},Wr=function(t){return hi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ce),t.progress()<1&&tn(t,"onInterrupt"),t},ur,Du=[],Iu=function(t){if(t)if(t=!t.name&&t.default||t,Pl()||t.headless){var e=t.name,n=me(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ts,render:Hl,add:Ol,kill:Pv,modifier:Rv,rawVars:0},a={targetTest:0,get:0,getSetter:kl,aliases:{},register:0};if(Cr(),t!==i){if(je[e])return;sn(i,sn(aa(t,s),a)),br(i.prototype,br(s,aa(t,a))),je[i.prop=e]=i,t.targetTest&&(Ks.push(i),Il[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}mu(e,i),t.register&&t.register($e,i,qe)}else Du.push(t)},ie=255,Xr={aqua:[0,ie,ie],lime:[0,ie,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ie],navy:[0,0,128],white:[ie,ie,ie],olive:[128,128,0],yellow:[ie,ie,0],orange:[ie,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ie,0,0],pink:[ie,192,203],cyan:[0,ie,ie],transparent:[ie,ie,ie,0]},io=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ie+.5|0},Uu=function(t,e,n){var i=t?Xn(t)?[t>>16,t>>8&ie,t&ie]:0:Xr.black,s,a,o,l,c,h,u,d,p,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Xr[t])i=Xr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ie,i&ie,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ie,t&ie]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(ah),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=io(l+1/3,s,a),i[1]=io(l,s,a),i[2]=io(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(uu),n&&i.length<4&&(i[3]=1),i}else i=t.match(ah)||Xr.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/ie,a=i[1]/ie,o=i[2]/ie,u=Math.max(s,a,o),d=Math.min(s,a,o),h=(u+d)/2,u===d?l=c=0:(p=u-d,c=h>.5?p/(2-u-d):p/(u+d),l=u===s?(a-o)/p+(a<o?6:0):u===a?(o-s)/p+2:(s-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Nu=function(t){var e=[],n=[],i=-1;return t.split(oi).forEach(function(s){var a=s.match(hr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},dh=function(t,e,n){var i="",s=(t+i).match(oi),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return t;if(s=s.map(function(d){return(d=Uu(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Nu(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(oi,"1").split(hr),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(oi),u=c.length-1;o<u;o++)i+=c[o]+s[o];return i+c[u]},oi=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Xr)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),pv=/hsl[a]?\(/,Fu=function(t){var e=t.join(" "),n;if(oi.lastIndex=0,oi.test(e))return n=pv.test(e),t[1]=dh(t[1],n),t[0]=dh(t[0],n,Nu(t[1])),!0},ns,Qe=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,u,d,p,_=function g(m){var f=r()-i,S=m===!0,y,M,b,C;if((f>t||f<0)&&(n+=f-e),i+=f,b=i-n,y=b-a,(y>0||S)&&(C=++u.frame,d=b-u.time*1e3,u.time=b=b/1e3,a+=y+(y>=s?4:s-y),M=1),S||(l=c(g)),M)for(p=0;p<o.length;p++)o[p](b,d,C,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){fu&&(!Qo&&Pl()&&(Tn=Qo=window,Ll=Tn.document||{},rn.gsap=$e,(Tn.gsapVersions||(Tn.gsapVersions=[])).push($e.version),pu(ra||Tn.GreenSockGlobals||!Tn.gsap&&Tn||{}),Du.forEach(Iu)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},ns=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ns=0,c=ts},lagSmoothing:function(m,f){t=m||1/0,e=Math.min(f||33,t)},fps:function(m){s=1e3/(m||240),a=u.time*1e3+s},add:function(m,f,S){var y=f?function(M,b,C,A){m(M,b,C,A),u.remove(y)}:m;return u.remove(m),o[S?"unshift":"push"](y),Cr(),y},remove:function(m,f){~(f=o.indexOf(m))&&o.splice(f,1)&&p>=f&&p--},_listeners:o},u})(),Cr=function(){return!ns&&Qe.wake()},Wt={},mv=/^[\d.\-M][\d.\-,\s]/,gv=/["']/g,_v=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(gv,"").trim():+c,i=l.substr(o+1).trim();return e},vv=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},xv=function(t){var e=(t+"").split("("),n=Wt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[_v(e[1])]:vv(t).split(",").map(xu)):Wt._CE&&mv.test(t)?Wt._CE("",t):n},Mv=function(t){return function(e){return 1-t(1-e)}},zi=function(t,e){return t&&(me(t)?t:Wt[t]||xv(t))||e},Xi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Xe(t,function(o){Wt[o]=rn[o]=s,Wt[a=o.toLowerCase()]=n;for(var l in s)Wt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Wt[o+"."+l]=s[l]}),s},Ou=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},ro=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/jo*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*W0((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Ou(o);return s=jo/s,l.config=function(c,h){return r(t,c,h)},l},so=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Ou(n);return i.config=function(s){return r(t,s)},i};Xe("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Xi(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Wt.Linear.easeNone=Wt.none=Wt.Linear.easeIn;Xi("Elastic",ro("in"),ro("out"),ro());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Xi("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Xi("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Xi("Circ",function(r){return-(cu(1-r*r)-1)});Xi("Sine",function(r){return r===1?1:-V0(r*H0)+1});Xi("Back",so("in"),so("out"),so());Wt.SteppedEase=Wt.steps=rn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-re;return function(o){return((i*ds(0,a,o)|0)+s)*n}}};jr.ease=Wt["quad.out"];Xe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ul+=r+","+r+"Params,"});var Bu=function(t,e){this.id=G0++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:_u,this.set=e?e.getSetter:kl},is=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,wr(this,+e.duration,1,1),this.data=e.data,le&&(this._ctx=le,le.data.push(this)),ns||Qe.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,wr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Cr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ga(this,n),!s._dp||s.parent||Su(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&An(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===re||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),vu(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ch(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ch(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ar(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-re?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?oa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-re?0:this._rts,this.totalTime(ds(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),ma(this),tv(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Cr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==re&&(this._tTime-=re)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=ce(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&An(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(We(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?oa(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Z0);var i=Ce;return Ce=n,Fl(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ce=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,hh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,hh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(cn(this,n),We(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,We(i)),this._dur||(this._zTime=-re),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-re:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-re,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-re)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=me(n)?n:Mu,l=function(){var h=i.then;i.then=null,s&&s(),me(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Wr(this)},r})();sn(is.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-re,_prom:0,_ps:!1,_rts:1});var He=(function(r){lu(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=We(n.sortChildren),he&&An(n.parent||he,zn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Eu(zn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return Kr(0,arguments,this),this},e.from=function(i,s,a){return Kr(1,arguments,this),this},e.fromTo=function(i,s,a,o){return Kr(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,$r(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Me(i,s,cn(this,a),1),this},e.call=function(i,s,a){return An(this,Me.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Me(i,a,cn(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,$r(a).immediateRender=We(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},e.staggerFromTo=function(i,s,a,o,l,c,h,u){return o.startAt=a,$r(o).immediateRender=We(o.immediateRender),this.staggerTo(i,s,o,l,c,h,u)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:ce(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,p,_,g,m,f,S,y,M,b,C,A;if(this!==he&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),d=h,M=this._start,y=this._ts,f=!y,u&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(d=ce(h%m),h===l?(g=this._repeat,d=c):(b=ce(h/m),g=~~b,g&&g===b&&(d=c,g--),d>c&&(d=c)),b=Ar(this._tTime,m),!o&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),C&&g&1&&(d=c-d,A=1),g!==b&&!this._lock){var w=C&&b&1,v=w===(C&&g&1);if(g<b&&(w=!w),o=w?0:h%c?c:h,this._lock=1,this.render(o||(A?0:ce(g*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&tn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,b=g),o&&o!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=w?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!f)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=rv(this,ce(o),ce(d)),S&&(h-=d-(d=S._start))),this._tTime=h,this._time=d,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!b&&(tn(this,"onStart"),this._tTime!==h))return this;if(d>=o&&i>=0)for(p=this._first;p;){if(_=p._next,(p._act||d>=p._start)&&p._ts&&S!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,a),d!==this._time||!this._ts&&!f){S=0,_&&(h+=this._zTime=-re);break}}p=_}else{p=this._last;for(var x=i<0?i:d;p;){if(_=p._prev,(p._act||x<=p._end)&&p._ts&&S!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(x-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(x-p._start)*p._ts,s,a||Ce&&Fl(p)),d!==this._time||!this._ts&&!f){S=0,_&&(h+=this._zTime=x?-re:re);break}}p=_}}if(S&&!s&&(this.pause(),S.render(d>=o?0:-re)._zTime=d>=o?1:-1,this._ts))return this._start=M,ma(this),this.render(i,s,a);this._onUpdate&&!s&&tn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(M===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&hi(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(tn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(Xn(s)||(s=cn(this,s,i)),!(i instanceof is)){if(Ie(i))return i.forEach(function(o){return a.add(o,s)}),this;if(be(i))return this.addLabel(i,s);if(me(i))i=Me.delayedCall(0,i);else return this}return this!==i?An(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-dn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Me?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return be(i)?this.removeLabel(i):me(i)?this.killTweensOf(i):(i.parent===this&&pa(this,i),i===this._recent&&(this._recent=this._last),Bi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ce(Qe.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=cn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=Me.delayedCall(0,s||ts,a);return o.data="isPause",this._hasPause=1,An(this,o,cn(this,i))},e.removePause=function(i){var s=this._first;for(i=cn(this,i);s;)s._start===i&&s.data==="isPause"&&hi(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ei!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=fn(i),l=this._first,c=Xn(s),h;l;)l instanceof Me?J0(l._targets,o)&&(c?(!ei||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=cn(a,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,p,_=Me.to(a,sn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||re,onStart:function(){if(a.pause(),!p){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&wr(_,m,0,1).render(_._time,!0,!0),p=1}h&&h.apply(_,u||[])}},s));return d?_.render(0):_},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,sn({startAt:{time:cn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),uh(this,cn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),uh(this,cn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+re)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=ce(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Bi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Bi(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=dn,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,An(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=ce(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;wr(a,a===he&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(he._ts&&(vu(he,oa(i,he)),gu=Qe.frame),Qe.frame>=oh){oh+=nn.autoSleep||120;var s=he._first;if((!s||!s._ts)&&nn.autoSleep&&Qe._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Qe.sleep()}}},t})(is);sn(He.prototype,{_lock:0,_hasPause:0,_forcing:0});var yv=function(t,e,n,i,s,a,o){var l=new qe(this._pt,t,e,0,1,Wu,null,s),c=0,h=0,u,d,p,_,g,m,f,S;for(l.b=n,l.e=i,n+="",i+="",(f=~i.indexOf("random("))&&(i=es(i)),a&&(S=[n,i],a(S,t,e),n=S[0],i=S[1]),d=n.match(eo)||[];u=eo.exec(i);)_=u[0],g=i.substring(c,u.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?mr(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},c=eo.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(du.test(i)||f)&&(l.e=0),this._pt=l,l},Ol=function(t,e,n,i,s,a,o,l,c,h){me(i)&&(i=i(s||0,t,a));var u=t[e],d=n!=="get"?n:me(u)?c?t[e.indexOf("set")||!me(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,p=me(u)?c?Av:Gu:zl,_;if(be(i)&&(~i.indexOf("random(")&&(i=es(i)),i.charAt(1)==="="&&(_=mr(d,i)+(De(d)||0),(_||_===0)&&(i=_))),!h||d!==i||al)return!isNaN(d*i)&&i!==""?(_=new qe(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?Cv:Vu,0,p),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!u&&!(e in t)&&Dl(e,i),yv.call(this,t,e,d,i,p,l||nn.stringFilter,c))},Sv=function(t,e,n,i,s){if(me(t)&&(t=Zr(t,s,e,n,i)),!Pn(t)||t.style&&t.nodeType||Ie(t)||hu(t))return be(t)?Zr(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Zr(t[o],s,e,n,i);return a},zu=function(t,e,n,i,s,a){var o,l,c,h;if(je[t]&&(o=new je[t]).init(s,o.rawVars?e[t]:Sv(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new qe(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==ur))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},ei,al,Bl=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,p=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,f=t.parent,S=f&&f.data==="nested"?f.vars.targets:m,y=t._overwrite==="auto"&&!Cl,M=t.timeline,b=i.easeReverse||u,C,A,w,v,x,L,F,N,H,X,V,Y,G;if(M&&(!d||!s)&&(s="none"),t._ease=zi(s,jr.ease),t._rEase=b&&(zi(b)||t._ease),t._from=!M&&!!i.runBackwards,t._from&&(t.ratio=1),!M||d&&!i.stagger){if(N=m[0]?Oi(m[0]).harness:0,Y=N&&i[N.prop],C=aa(i,Il),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!p?g.render(-1,!0):g.revert(h&&_?$s:K0),g._lazy=0),a){if(hi(t._startAt=Me.set(m,sn({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!g&&We(l),startAt:null,delay:0,onUpdate:c&&function(){return tn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ce||!o&&!p)&&t._startAt.revert($s),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(o=!1),w=sn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&We(l),immediateRender:o,stagger:0,parent:f},C),Y&&(w[N.prop]=Y),hi(t._startAt=Me.set(m,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ce?t._startAt.revert($s):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,re,re);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&We(l)||l&&!_,A=0;A<m.length;A++){if(x=m[A],F=x._gsap||Nl(m)[A]._gsap,t._ptLookup[A]=X={},tl[F.id]&&ai.length&&sa(),V=S===m?A:S.indexOf(x),N&&(H=new N).init(x,Y||C,t,V,S)!==!1&&(t._pt=v=new qe(t._pt,x,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(nt){X[nt]=v}),H.priority&&(L=1)),!N||Y)for(w in C)je[w]&&(H=zu(w,C,t,V,x,S))?H.priority&&(L=1):X[w]=v=Ol.call(t,x,w,"get",C[w],V,S,0,i.stringFilter);t._op&&t._op[A]&&t.kill(x,t._op[A]),y&&t._pt&&(ei=t,he.killTweensOf(x,X,t.globalTime(e)),G=!t.parent,ei=0),t._pt&&l&&(tl[F.id]=1)}L&&Xu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!G,d&&e<=0&&M.render(dn,!0,!0)},Ev=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,p;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,p=t._targets.length;p--;){if(h=d[p][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return al=1,t.vars[e]="+=0",Bl(t,o),al=0,l?Qr(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(p=c.length;p--;)u=c[p],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=ge(n)+De(u.e)),u.b&&(u.b=h.s+De(u.b))},Tv=function(t,e){var n=t[0]?Oi(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=br({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},bv=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(Ie(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Zr=function(t,e,n,i,s){return me(t)?t.call(e,n,i,s):be(t)&&~t.indexOf("random(")?es(t):t},ku=Ul+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Hu={};Xe(ku+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Hu[r]=1});var Me=(function(r){lu(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:$r(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,f=i.parent||he,S=(Ie(n)||hu(n)?Xn(n[0]):"length"in i)?[n]:fn(n),y,M,b,C,A,w,v,x;if(o._targets=S.length?Nl(S):Qr("GSAP target "+n+" not found. https://gsap.com",!nn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,_||d||Hs(c)||Hs(h)){i=o.vars;var L=i.easeReverse||i.yoyoEase;if(y=o.timeline=new He({data:"nested",defaults:g||{},targets:f&&f.data==="nested"?f.vars.targets:S}),y.kill(),y.parent=y._dp=zn(o),y._start=0,d||Hs(c)||Hs(h)){if(C=S.length,v=d&&wu(d),Pn(d))for(A in d)~ku.indexOf(A)&&(x||(x={}),x[A]=d[A]);for(M=0;M<C;M++)b=aa(i,Hu),b.stagger=0,L&&(b.easeReverse=L),x&&br(b,x),w=S[M],b.duration=+Zr(c,zn(o),M,w,S),b.delay=(+Zr(h,zn(o),M,w,S)||0)-o._delay,!d&&C===1&&b.delay&&(o._delay=h=b.delay,o._start+=h,b.delay=0),y.to(w,b,v?v(M,w,S):0),y._ease=Wt.none;y.duration()?c=h=0:o.timeline=0}else if(_){$r(sn(y.vars.defaults,{ease:"none"})),y._ease=zi(_.ease||i.ease||"none");var F=0,N,H,X;if(Ie(_))_.forEach(function(V){return y.to(S,V,">")}),y.duration();else{b={};for(A in _)A==="ease"||A==="easeEach"||bv(A,_[A],b,_.easeEach);for(A in b)for(N=b[A].sort(function(V,Y){return V.t-Y.t}),F=0,M=0;M<N.length;M++)H=N[M],X={ease:H.e,duration:(H.t-(M?N[M-1].t:0))/100*c},X[A]=H.v,y.to(S,X,F),F+=X.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return p===!0&&!Cl&&(ei=zn(o),he.killTweensOf(S),ei=0),An(f,zn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!_&&o._start===ce(f._time)&&We(u)&&ev(zn(o))&&f.data!=="nested")&&(o._tTime=-re,o.render(Math.max(0,-h)||0)),m&&Eu(zn(o),m),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-re&&!h?l:i<re?0:i,d,p,_,g,m,f,S,y;if(!c)iv(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,a);if(d=ce(u%g),u===l?(_=this._repeat,d=c):(m=ce(u/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),f=this._yoyo&&_&1,f&&(d=c-d),m=Ar(this._tTime,g),d===o&&!a&&this._initted&&_===m)return this._tTime=u,this;_!==m&&this.vars.repeatRefresh&&!f&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(ce(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Tu(this,h?i:d,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var M=d<o;if(M!==this._inv){var b=M?o:c-o;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=b?(M?-1:1)/b:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(d/c);if(this._from&&(this.ratio=S=1-S),this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&u&&!s&&!m&&(tn(this,"onStart"),this._tTime!==u))return this;for(p=this._pt;p;)p.r(S,p.d),p=p._next;y&&y.render(i<0?i:y._dur*y._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&el(this,i,s,a),tn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&tn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&el(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&hi(this,1),!s&&!(h&&!o)&&(u||o||f)&&(tn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){ns||Qe.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Bl(this,c),h=this._ease(c/this._dur),Ev(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(ga(this,0),this.parent||yu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Wr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ce),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ei&&ei.vars.overwrite!==!0)._first||Wr(this),this.parent&&a!==this.timeline.totalDuration()&&wr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?fn(i):o,c=this._ptLookup,h=this._pt,u,d,p,_,g,m,f;if((!s||s==="all")&&Q0(o,l))return s==="all"&&(this._pt=0),Wr(this);for(u=this._op=this._op||[],s!=="all"&&(be(s)&&(g={},Xe(s,function(S){return g[S]=1}),s=g),s=Tv(o,s)),f=o.length;f--;)if(~l.indexOf(o[f])){d=c[f],s==="all"?(u[f]=s,_=d,p={}):(p=u[f]=u[f]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&pa(this,m,"_pt"),delete d[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&h&&Wr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Kr(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return Kr(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return he.killTweensOf(i,s,a)},t})(is);sn(Me.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Xe("staggerTo,staggerFrom,staggerFromTo",function(r){Me[r]=function(){var t=new He,e=il.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var zl=function(t,e,n){return t[e]=n},Gu=function(t,e,n){return t[e](n)},Av=function(t,e,n,i){return t[e](i.fp,n)},wv=function(t,e,n){return t.setAttribute(e,n)},kl=function(t,e){return me(t[e])?Gu:Rl(t[e])&&t.setAttribute?wv:zl},Vu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Cv=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Wu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Hl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Rv=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},Pv=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?pa(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Lv=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Xu=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},qe=(function(){function r(e,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Vu,this.d=l||this,this.set=c||zl,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Lv,this.m=n,this.mt=s,this.tween=i},r})();Xe(Ul+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Il[r]=1});rn.TweenMax=rn.TweenLite=Me;rn.TimelineLite=rn.TimelineMax=He;he=new He({sortChildren:!1,defaults:jr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});nn.stringFilter=Fu;var ki=[],Zs={},Dv=[],fh=0,Iv=0,ao=function(t){return(Zs[t]||Dv).map(function(e){return e()})},ol=function(){var t=Date.now(),e=[];t-fh>2&&(ao("matchMediaInit"),ki.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Tn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),ao("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),fh=t,ao("matchMedia"))},qu=(function(){function r(e,n){this.selector=n&&rl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Iv++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){me(n)&&(s=i,i=n,n=me);var a=this,o=function(){var c=le,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=rl(s)),le=a,u=i.apply(a,arguments),me(u)&&a._r.push(u),le=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===me?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=le;le=null,n(this),le=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Me&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof He?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Me)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=ki.length;a--;)ki[a].id===this.id&&ki.splice(a,1)},t.revert=function(n){this.kill(n||{})},r})(),Uv=(function(){function r(e){this.contexts=[],this.scope=e,le&&le.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Pn(n)||(n={matches:n});var a=new qu(0,s||this.scope),o=a.conditions={},l,c,h;le&&!a.selector&&(a.selector=le.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Tn.matchMedia(n[c]),l&&(ki.indexOf(a)<0&&ki.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(ol):l.addEventListener("change",ol)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),la={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Iu(i)})},timeline:function(t){return new He(t)},getTweensOf:function(t,e){return he.getTweensOf(t,e)},getProperty:function(t,e,n,i){be(t)&&(t=fn(t)[0]);var s=Oi(t||{}).get,a=n?Mu:xu;return n==="native"&&(n=""),t&&(e?a((je[e]&&je[e].get||s)(t,e,n,i)):function(o,l,c){return a((je[o]&&je[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=fn(t),t.length>1){var i=t.map(function(h){return $e.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var a=je[e],o=Oi(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;ur._pt=0,u.init(t,n?h+n:h,ur,0,[t]),u.render(1,u),ur._pt&&Hl(1,ur)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=$e.to(t,sn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return he.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=zi(t.ease,jr.ease)),lh(jr,t||{})},config:function(t){return lh(nn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!je[o]&&!rn[o]&&Qr(e+" effect requires "+o+" plugin.")}),no[e]=function(o,l,c){return n(fn(o),sn(l||{},s),c)},a&&(He.prototype[e]=function(o,l,c){return this.add(no[e](o,Pn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Wt[t]=zi(e)},parseEase:function(t,e){return arguments.length?zi(t,e):Wt},getById:function(t){return he.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new He(t),i,s;for(n.smoothChildTiming=We(t.smoothChildTiming),he.remove(n),n._dp=0,n._time=n._tTime=he._time,i=he._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Me&&i.vars.onComplete===i._targets[0]))&&An(n,i,i._start-i._delay),i=s;return An(he,n,0),n},context:function(t,e){return t?new qu(t,e):le},matchMedia:function(t){return new Uv(t)},matchMediaRefresh:function(){return ki.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ol()},addEventListener:function(t,e){var n=Zs[t]||(Zs[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Zs[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:uv,wrapYoyo:dv,distribute:wu,random:Ru,snap:Cu,normalize:hv,getUnit:De,clamp:av,splitColor:Uu,toArray:fn,selector:rl,mapRange:Lu,pipe:lv,unitize:cv,interpolate:fv,shuffle:Au},install:pu,effects:no,ticker:Qe,updateRoot:He.updateRoot,plugins:je,globalTimeline:he,core:{PropTween:qe,globals:mu,Tween:Me,Timeline:He,Animation:is,getCache:Oi,_removeLinkedListItem:pa,reverting:function(){return Ce},context:function(t){return t&&le&&(le.data.push(t),t._ctx=le),le},suppressOverwrites:function(t){return Cl=t}}};Xe("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return la[r]=Me[r]});Qe.add(He.updateRoot);ur=la.to({},{duration:0});var Nv=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Fv=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Nv(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},oo=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(be(s)&&(l={},Xe(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Fv(o,s)}}}},$e=la.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Ce?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},oo("roundProps",sl),oo("modifiers"),oo("snap",Cu))||la;Me.version=He.version=$e.version="3.15.0";fu=1;Pl()&&Cr();Wt.Power0;Wt.Power1;Wt.Power2;Wt.Power3;Wt.Power4;Wt.Linear;Wt.Quad;Wt.Cubic;Wt.Quart;Wt.Quint;Wt.Strong;Wt.Elastic;Wt.Back;Wt.SteppedEase;Wt.Bounce;Wt.Sine;Wt.Expo;Wt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ph,ni,gr,Gl,Ni,mh,Vl,Ov=function(){return typeof window<"u"},qn={},Ci=180/Math.PI,_r=Math.PI/180,or=Math.atan2,gh=1e8,Wl=/([A-Z])/g,Bv=/(left|right|width|margin|padding|x)/i,zv=/[\s,\(]\S/,Cn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ll=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},kv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Hv=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Gv=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Vv=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Yu=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},$u=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Wv=function(t,e,n){return t.style[e]=n},Xv=function(t,e,n){return t.style.setProperty(e,n)},qv=function(t,e,n){return t._gsap[e]=n},Yv=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},$v=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Kv=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},ue="transform",Ye=ue+"Origin",Zv=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in qn&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Cn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=kn(i,o)}):this.tfm[t]=a.x?a[t]:kn(i,t),t===Ye&&(this.tfm.zOrigin=a.zOrigin);else return Cn.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(ue)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ye,e,"")),t=ue}(s||e)&&this.props.push(t,e,s[t])},Ku=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Jv=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Wl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Vl(),(!s||!s.isStart)&&!n[ue]&&(Ku(n),i.zOrigin&&n[Ye]&&(n[Ye]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Zu=function(t,e){var n={target:t,props:[],revert:Jv,save:Zv};return t._gsap||$e.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Ju,cl=function(t,e){var n=ni.createElementNS?ni.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ni.createElement(t);return n&&n.style?n:ni.createElement(t)},en=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Wl,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Rr(e)||e,1)||""},_h="O,Moz,ms,Ms,Webkit".split(","),Rr=function(t,e,n){var i=e||Ni,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(_h[a]+t in s););return a<0?null:(a===3?"ms":a>=0?_h[a]:"")+t},hl=function(){Ov()&&window.document&&(ph=window,ni=ph.document,gr=ni.documentElement,Ni=cl("div")||{style:{}},cl("div"),ue=Rr(ue),Ye=ue+"Origin",Ni.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ju=!!Rr("perspective"),Vl=$e.core.reverting,Gl=1)},vh=function(t){var e=t.ownerSVGElement,n=cl("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),gr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),gr.removeChild(n),s},xh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},ju=function(t){var e,n;try{e=t.getBBox()}catch{e=vh(t),n=1}return e&&(e.width||e.height)||n||(e=vh(t)),e&&!e.width&&!e.x&&!e.y?{x:+xh(t,["x","cx","x1"])||0,y:+xh(t,["y","cy","y1"])||0,width:0,height:0}:e},Qu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&ju(t))},ui=function(t,e){if(e){var n=t.style,i;e in qn&&e!==Ye&&(e=ue),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Wl,"-$1").toLowerCase())):n.removeAttribute(e)}},ii=function(t,e,n,i,s,a){var o=new qe(t._pt,e,n,0,1,a?$u:Yu);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Mh={deg:1,rad:1,turn:1},jv={grid:1,flex:1},di=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ni.style,l=Bv.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",p=i==="%",_,g,m,f;if(i===a||!s||Mh[i]||Mh[a])return s;if(a!=="px"&&!d&&(s=r(t,e,n,"px")),f=t.getCTM&&Qu(t),(p||a==="%")&&(qn[e]||~e.indexOf("adius")))return _=f?t.getBBox()[l?"width":"height"]:t[h],ge(p?s/_*u:s/100*_);if(o[l?"width":"height"]=u+(d?a:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,f&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===ni||!g.appendChild)&&(g=ni.body),m=g._gsap,m&&p&&m.width&&l&&m.time===Qe.time&&!m.uncache)return ge(s/m.width*u);if(p&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=u+i,_=t[h],S?t.style[e]=S:ui(t,e)}else(p||a==="%")&&!jv[en(g,"display")]&&(o.position=en(t,"position")),g===t&&(o.position="static"),g.appendChild(Ni),_=Ni[h],g.removeChild(Ni),o.position="absolute";return l&&p&&(m=Oi(g),m.time=Qe.time,m.width=g[h]),ge(d?_*s/u:_&&s?u/_*s:0)},kn=function(t,e,n,i){var s;return Gl||hl(),e in Cn&&e!=="transform"&&(e=Cn[e],~e.indexOf(",")&&(e=e.split(",")[0])),qn[e]&&e!=="transform"?(s=ss(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:ha(en(t,Ye))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ca[e]&&ca[e](t,e,n)||en(t,e)||_u(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?di(t,e,s,n)+n:s},Qv=function(t,e,n,i){if(!n||n==="none"){var s=Rr(e,t,1),a=s&&en(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=en(t,"borderTopColor"))}var o=new qe(this._pt,t.style,e,0,1,Wu),l=0,c=0,h,u,d,p,_,g,m,f,S,y,M,b;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=en(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=en(t,e)||i,g?t.style[e]=g:ui(t,e)),h=[n,i],Fu(h),n=h[0],i=h[1],d=n.match(hr)||[],b=i.match(hr)||[],b.length){for(;u=hr.exec(i);)m=u[0],S=i.substring(l,u.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(p=parseFloat(g)||0,M=g.substr((p+"").length),m.charAt(1)==="="&&(m=mr(p,m)+M),f=parseFloat(m),y=m.substr((f+"").length),l=hr.lastIndex-y.length,y||(y=y||nn.units[e]||M,l===i.length&&(i+=y,o.e+=y)),M!==y&&(p=di(t,e,g,y)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:p,c:f-p,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?$u:Yu;return du.test(i)&&(o.e=0),this._pt=o,o},yh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},tx=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=yh[n]||n,e[1]=yh[i]||i,e.join(" ")},ex=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],qn[o]&&(l=1,o=o==="transformOrigin"?Ye:ue),ui(n,o);l&&(ui(n,ue),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ss(n,1),a.uncache=1,Ku(i)))}},ca={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new qe(t._pt,e,n,0,0,ex);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},rs=[1,0,0,1,0,0],td={},ed=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Sh=function(t){var e=en(t,ue);return ed(e)?rs:e.substr(7).match(uu).map(ge)},Xl=function(t,e){var n=t._gsap||Oi(t),i=t.style,s=Sh(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?rs:s):(s===rs&&!t.offsetParent&&t!==gr&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,gr.appendChild(t)),s=Sh(t),l?i.display=l:ui(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):gr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ul=function(t,e,n,i,s,a){var o=t._gsap,l=s||Xl(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],f=l[4],S=l[5],y=e.split(" "),M=parseFloat(y[0])||0,b=parseFloat(y[1])||0,C,A,w,v;n?l!==rs&&(A=p*m-_*g)&&(w=M*(m/A)+b*(-g/A)+(g*S-m*f)/A,v=M*(-_/A)+b*(p/A)-(p*S-_*f)/A,M=w,b=v):(C=ju(t),M=C.x+(~y[0].indexOf("%")?M/100*C.width:M),b=C.y+(~(y[1]||y[0]).indexOf("%")?b/100*C.height:b)),i||i!==!1&&o.smooth?(f=M-c,S=b-h,o.xOffset=u+(f*p+S*g)-f,o.yOffset=d+(f*_+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=b,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Ye]="0px 0px",a&&(ii(a,o,"xOrigin",c,M),ii(a,o,"yOrigin",h,b),ii(a,o,"xOffset",u,o.xOffset),ii(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",M+" "+b)},ss=function(t,e){var n=t._gsap||new Bu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=en(t,Ye)||"0",h,u,d,p,_,g,m,f,S,y,M,b,C,A,w,v,x,L,F,N,H,X,V,Y,G,nt,I,R,j,it,O,W;return h=u=d=g=m=f=S=y=M=0,p=_=1,n.svg=!!(t.getCTM&&Qu(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ue]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ue]!=="none"?l[ue]:"")),i.scale=i.rotate=i.translate="none"),A=Xl(t,n.svg),n.svg&&(n.uncache?(G=t.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",Y=""):Y=!e&&t.getAttribute("data-svg-origin"),ul(t,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,A)),b=n.xOrigin||0,C=n.yOrigin||0,A!==rs&&(L=A[0],F=A[1],N=A[2],H=A[3],h=X=A[4],u=V=A[5],A.length===6?(p=Math.sqrt(L*L+F*F),_=Math.sqrt(H*H+N*N),g=L||F?or(F,L)*Ci:0,S=N||H?or(N,H)*Ci+g:0,S&&(_*=Math.abs(Math.cos(S*_r))),n.svg&&(h-=b-(b*L+C*N),u-=C-(b*F+C*H))):(W=A[6],it=A[7],I=A[8],R=A[9],j=A[10],O=A[11],h=A[12],u=A[13],d=A[14],w=or(W,j),m=w*Ci,w&&(v=Math.cos(-w),x=Math.sin(-w),Y=X*v+I*x,G=V*v+R*x,nt=W*v+j*x,I=X*-x+I*v,R=V*-x+R*v,j=W*-x+j*v,O=it*-x+O*v,X=Y,V=G,W=nt),w=or(-N,j),f=w*Ci,w&&(v=Math.cos(-w),x=Math.sin(-w),Y=L*v-I*x,G=F*v-R*x,nt=N*v-j*x,O=H*x+O*v,L=Y,F=G,N=nt),w=or(F,L),g=w*Ci,w&&(v=Math.cos(w),x=Math.sin(w),Y=L*v+F*x,G=X*v+V*x,F=F*v-L*x,V=V*v-X*x,L=Y,X=G),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,f=180-f),p=ge(Math.sqrt(L*L+F*F+N*N)),_=ge(Math.sqrt(V*V+W*W)),w=or(X,V),S=Math.abs(w)>2e-4?w*Ci:0,M=O?1/(O<0?-O:O):0),n.svg&&(Y=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!ed(en(t,ue)),Y&&t.setAttribute("transform",Y))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(p*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=ge(p),n.scaleY=ge(_),n.rotation=ge(g)+o,n.rotationX=ge(m)+o,n.rotationY=ge(f)+o,n.skewX=S+o,n.skewY=y+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Ye]=ha(c)),n.xOffset=n.yOffset=0,n.force3D=nn.force3D,n.renderTransform=n.svg?ix:Ju?nd:nx,n.uncache=0,n},ha=function(t){return(t=t.split(" "))[0]+" "+t[1]},lo=function(t,e,n){var i=De(e);return ge(parseFloat(e)+parseFloat(di(t,"x",n+"px",i)))+i},nx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,nd(t,e)},Si="0deg",Gr="0px",Ei=") ",nd=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,p=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,f=n.force3D,S=n.target,y=n.zOrigin,M="",b=f==="auto"&&t&&t!==1||f===!0;if(y&&(u!==Si||h!==Si)){var C=parseFloat(h)*_r,A=Math.sin(C),w=Math.cos(C),v;C=parseFloat(u)*_r,v=Math.cos(C),a=lo(S,a,A*v*-y),o=lo(S,o,-Math.sin(C)*-y),l=lo(S,l,w*v*-y+y)}m!==Gr&&(M+="perspective("+m+Ei),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(b||a!==Gr||o!==Gr||l!==Gr)&&(M+=l!==Gr||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ei),c!==Si&&(M+="rotate("+c+Ei),h!==Si&&(M+="rotateY("+h+Ei),u!==Si&&(M+="rotateX("+u+Ei),(d!==Si||p!==Si)&&(M+="skew("+d+", "+p+Ei),(_!==1||g!==1)&&(M+="scale("+_+", "+g+Ei),S.style[ue]=M||"translate(0, 0)"},ix=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,p=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,f=n.yOffset,S=n.forceCSS,y=parseFloat(a),M=parseFloat(o),b,C,A,w,v;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=_r,c*=_r,b=Math.cos(l)*u,C=Math.sin(l)*u,A=Math.sin(l-c)*-d,w=Math.cos(l-c)*d,c&&(h*=_r,v=Math.tan(c-h),v=Math.sqrt(1+v*v),A*=v,w*=v,h&&(v=Math.tan(h),v=Math.sqrt(1+v*v),b*=v,C*=v)),b=ge(b),C=ge(C),A=ge(A),w=ge(w)):(b=u,w=d,C=A=0),(y&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(y=di(p,"x",a,"px"),M=di(p,"y",o,"px")),(_||g||m||f)&&(y=ge(y+_-(_*b+g*A)+m),M=ge(M+g-(_*C+g*w)+f)),(i||s)&&(v=p.getBBox(),y=ge(y+i/100*v.width),M=ge(M+s/100*v.height)),v="matrix("+b+","+C+","+A+","+w+","+y+","+M+")",p.setAttribute("transform",v),S&&(p.style[ue]=v)},rx=function(t,e,n,i,s){var a=360,o=be(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ci:1),c=l-i,h=i+c+"deg",u,d;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*gh)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*gh)%a-~~(c/a)*a)),t._pt=d=new qe(t._pt,e,n,i,c,kv),d.e=h,d.u="deg",t._props.push(n),d},Eh=function(t,e){for(var n in e)t[n]=e[n];return t},sx=function(t,e,n){var i=Eh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,d,p,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[ue]=e,o=ss(n,1),ui(n,ue),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ue],a[ue]=e,o=ss(n,1),a[ue]=c);for(l in qn)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(p=De(c),_=De(h),u=p!==_?di(n,l,c,_):parseFloat(c),d=parseFloat(h),t._pt=new qe(t._pt,o,l,u,d-u,ll),t._pt.u=_||0,t._props.push(l));Eh(o,i)};Xe("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});ca[t>1?"border"+r:r]=function(o,l,c,h,u){var d,p;if(arguments.length<4)return d=a.map(function(_){return kn(o,_,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(h+"").split(" "),p={},a.forEach(function(_,g){return p[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,p,u)}});var id={name:"css",register:hl,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,h,u,d,p,_,g,m,f,S,y,M,b,C,A,w,v;Gl||hl(),this.styles=this.styles||Zu(t),w=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(je[g]&&zu(g,e,n,i,t,s)))){if(p=typeof h,_=ca[g],p==="function"&&(h=h.call(n,i,t,s),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=es(h)),_)_(this,t,g,h,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",oi.lastIndex=0,oi.test(c)||(m=De(c),f=De(h),f?m!==f&&(c=di(t,g,c,f)+f):m&&(h+=m)),this.add(o,"setProperty",c,h,i,s,0,0,g),a.push(g),w.push(g,0,o[g]);else if(p!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],be(c)&&~c.indexOf("random(")&&(c=es(c)),De(c+"")||c==="auto"||(c+=nn.units[g]||De(kn(t,g))||""),(c+"").charAt(1)==="="&&(c=kn(t,g))):c=kn(t,g),d=parseFloat(c),S=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),u=parseFloat(h),g in Cn&&(g==="autoAlpha"&&(d===1&&kn(t,"visibility")==="hidden"&&u&&(d=0),w.push("visibility",0,o.visibility),ii(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Cn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in qn,y){if(this.styles.save(g),v=h,p==="string"&&h.substring(0,6)==="var(--"){if(h=en(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var x=t.style.perspective;t.style.perspective=h,h=en(t,"perspective"),x?t.style.perspective=x:ui(t,"perspective")}u=parseFloat(h)}if(M||(b=t._gsap,b.renderTransform&&!e.parseTransform||ss(t,e.parseTransform),C=e.smoothOrigin!==!1&&b.smooth,M=this._pt=new qe(this._pt,o,ue,0,1,b.renderTransform,b,0,-1),M.dep=1),g==="scale")this._pt=new qe(this._pt,b,"scaleY",b.scaleY,(S?mr(b.scaleY,S+u):u)-b.scaleY||0,ll),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){w.push(Ye,0,o[Ye]),h=tx(h),b.svg?ul(t,h,0,C,0,this):(f=parseFloat(h.split(" ")[2])||0,f!==b.zOrigin&&ii(this,b,"zOrigin",b.zOrigin,f),ii(this,o,g,ha(c),ha(h)));continue}else if(g==="svgOrigin"){ul(t,h,1,C,0,this);continue}else if(g in td){rx(this,b,g,d,S?mr(d,S+h):h);continue}else if(g==="smoothOrigin"){ii(this,b,"smooth",b.smooth,h);continue}else if(g==="force3D"){b[g]=h;continue}else if(g==="transform"){sx(this,h,t);continue}}else g in o||(g=Rr(g)||g);if(y||(u||u===0)&&(d||d===0)&&!zv.test(h)&&g in o)m=(c+"").substr((d+"").length),u||(u=0),f=De(h)||(g in nn.units?nn.units[g]:m),m!==f&&(d=di(t,g,c,f)),this._pt=new qe(this._pt,y?b:o,g,d,(S?mr(d,S+u):u)-d,!y&&(f==="px"||g==="zIndex")&&e.autoRound!==!1?Vv:ll),this._pt.u=f||0,y&&v!==h?(this._pt.b=c,this._pt.e=v,this._pt.r=Gv):m!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=Hv);else if(g in o)Qv.call(this,t,g,c,S?S+h:h);else if(g in t)this.add(t,g,c||t[g],S?S+h:h,i,s);else if(g!=="parseTransform"){Dl(g,h);continue}y||(g in o?w.push(g,0,o[g]):typeof t[g]=="function"?w.push(g,2,t[g]()):w.push(g,1,c||t[g])),a.push(g)}}A&&Xu(this)},render:function(t,e){if(e.tween._time||!Vl())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:kn,aliases:Cn,getSetter:function(t,e,n){var i=Cn[e];return i&&i.indexOf(",")<0&&(e=i),e in qn&&e!==Ye&&(t._gsap.x||kn(t,"x"))?n&&mh===n?e==="scale"?Yv:qv:(mh=n||{})&&(e==="scale"?$v:Kv):t.style&&!Rl(t.style[e])?Wv:~e.indexOf("-")?Xv:kl(t,e)},core:{_removeProperty:ui,_getMatrix:Xl}};$e.utils.checkPrefix=Rr;$e.core.getStyleSaver=Zu;(function(r,t,e,n){var i=Xe(r+","+t+","+e,function(s){qn[s]=1});Xe(t,function(s){nn.units[s]="deg",td[s]=1}),Cn[i[13]]=r+","+t,Xe(n,function(s){var a=s.split(":");Cn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Xe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){nn.units[r]="px"});$e.registerPlugin(id);var Js=$e.registerPlugin(id)||$e;Js.core.Tween;function ax(r){const t=new xe,e=new xe,n=new xe,i=new xe,s=new xe;t.add(e),t.add(n),t.add(i),t.add(s);const a=new Ai({color:r.renderParams.stemColor,roughness:.85,metalness:.1,flatShading:!0}),o=new Ai({color:r.renderParams.branchColor,roughness:.75,metalness:.05}),l=new Ai({color:r.renderParams.leafColor,roughness:.5,metalness:.1,side:un}),c=new Ai({color:r.renderParams.flowerColor,roughness:.4,metalness:.05,side:un}),h=new Ai({color:r.renderParams.pollenColor,roughness:.3,metalness:.2}),u=new Ai({color:r.renderParams.flowerColor,roughness:.6,metalness:.15}),d=[],p=[];if(r.id==="juniperus_procera"){const w=new Bn([new U(0,0,0),new U(.08,.8,-.05),new U(-.06,1.8,.08),new U(.04,2.8,-.04),new U(0,3.8,0)]),v=new En(w,32,.18,12,!1),x=new qt(v,a);x.castShadow=!0,e.add(x);const L=8;for(let F=0;F<L;F++){const N=.8+F*.38,H=(1-F/L)*1.5+.3,X=5+Math.floor(Math.random()*3);for(let V=0;V<X;V++){const Y=V/X*Math.PI*2+F*.45,G=H*(.8+Math.random()*.4),nt=new xe;nt.position.set(0,N,0);const I=new Bn([new U(0,0,0),new U(Math.cos(Y)*G*.5,.12,Math.sin(Y)*G*.5),new U(Math.cos(Y)*G,-.08,Math.sin(Y)*G)]),R=new En(I,12,.05*(1-F/L)+.02,8,!1),j=new qt(R,o);nt.add(j),e.add(nt);const it=4;for(let O=0;O<it;O++){const W=(O+1)/(it+1),Q=I.getPoint(W),Z=new xe;Z.position.copy(Q);const st=new lr(.08,.35,5),pt=new qt(st,l);if(pt.rotation.x=Math.PI*.5,Z.add(pt),n.add(Z),d.push({mesh:Z,baseScale:new U(1,1,1),baseRot:Z.rotation.clone(),basePos:Q.clone(),triggerProgress:.2+F/L*.5}),F<5&&Math.random()>.45){const ct=new Li(.065,8,8),bt=new qt(ct,u);bt.position.set(Q.x,Q.y-.06,Q.z),s.add(bt)}}}}}else if(r.id==="rosa_damascena_taif"){const w=new Fi(.08,.12,2.6,12);w.translate(0,1.3,0);const v=new qt(w,o);e.add(v);const x=5;for(let L=0;L<x;L++){const F=1+L*.32,N=L/x*Math.PI*2+.3,H=new xe;H.position.set(0,F,0);const X=new Bn([new U(0,0,0),new U(Math.cos(N)*.5,.4,Math.sin(N)*.5),new U(Math.cos(N)*1.1,.75,Math.sin(N)*1.1)]),V=new En(X,16,.045,8,!1),Y=new qt(V,o);H.add(Y),e.add(H);for(let W=0;W<3;W++){const Q=.3+W*.25,Z=X.getPoint(Q),st=new xe;st.position.copy(Z);for(let pt=-2;pt<=2;pt++){const ct=new lr(.08,.24,4);ct.scale(1,1,.3);const bt=new qt(ct,l);bt.position.set(pt*.07,Math.abs(pt)*-.03,0),bt.rotation.z=pt*-.25,st.add(bt)}n.add(st),d.push({mesh:st,baseScale:new U(1,1,1),baseRot:st.rotation.clone(),basePos:Z.clone(),triggerProgress:.15+L/x*.4})}const G=X.getPoint(1),nt=new xe;nt.position.copy(G);const I=new Li(.09,12,12),R=new qt(I,h);nt.add(R);const j=24;for(let W=0;W<j;W++){const Q=W/j*Math.PI*2,Z=new qt(new Fi(.008,.008,.12),h);Z.position.set(Math.cos(Q)*.07,.08,Math.sin(Q)*.07),nt.add(Z)}const it=[];[{count:5,radius:.14,height:.08,scale:.22,tilt:.3},{count:7,radius:.24,height:.06,scale:.28,tilt:.55},{count:9,radius:.35,height:.03,scale:.34,tilt:.8},{count:11,radius:.46,height:-.01,scale:.38,tilt:1.05}].forEach((W,Q)=>{for(let Z=0;Z<W.count;Z++){const st=Z/W.count*Math.PI*2+Q*.5,pt=new Li(W.scale,8,8);pt.scale(.8,.15,1.2);const ct=new qt(pt,c);ct.position.set(Math.cos(st)*W.radius,W.height,Math.sin(st)*W.radius),ct.rotation.y=st,ct.rotation.x=W.tilt,nt.add(ct),it.push(ct)}}),i.add(nt),p.push({mesh:nt,baseScale:new U(1,1,1),baseRot:nt.rotation.clone(),petals:it,triggerProgress:.35+L*.12})}}else if(r.id==="lavandula_coronopifolia")for(let v=0;v<9;v++){const x=v/9*Math.PI*2+Math.random()*.3,L=.2+v%3*.15,F=1.8+Math.random()*.6,N=new xe;N.position.set(Math.cos(x)*L,0,Math.sin(x)*L);const H=new Vi(.045,F,.045);H.translate(0,F/2,0);const X=new qt(H,o);N.add(X),e.add(N);const V=6;for(let I=0;I<V;I++){const R=.25+I*.2,j=I*Math.PI/2;for(let it=-1;it<=1;it+=2){const O=new Vi(.02,.35,.015);O.translate(0,.17,0);const W=new qt(O,l);W.position.set(Math.cos(j)*it*.03,R,Math.sin(j)*it*.03),W.rotation.z=it*.6,n.add(W),d.push({mesh:W,baseScale:new U(1,1,1),baseRot:W.rotation.clone(),basePos:W.position.clone(),triggerProgress:.1+I/V*.3})}}const Y=new xe;Y.position.set(Math.cos(x)*L,F,Math.sin(x)*L);const G=[],nt=7;for(let I=0;I<nt;I++){const R=I*.08,j=6;for(let it=0;it<j;it++){const O=it/j*Math.PI*2+I*.5,W=new lr(.035,.12,6);W.rotateX(Math.PI/2);const Q=new qt(W,c);Q.position.set(Math.cos(O)*.05,R,Math.sin(O)*.05),Q.rotation.y=O,Y.add(Q),G.push(Q)}}i.add(Y),p.push({mesh:Y,baseScale:new U(1,1,1),baseRot:Y.rotation.clone(),petals:G,triggerProgress:.3+v/9*.4})}else if(r.id==="moringa_peregrina"){const w=new Bn([new U(0,0,0),new U(.04,1.2,.03),new U(-.05,2.2,-.02),new U(0,3.2,0)]),v=new En(w,24,.14,10,!1),x=new qt(v,a);e.add(x);const L=8;for(let F=0;F<L;F++){const N=F/L*Math.PI*2,H=2+F%3*.4,X=new Bn([new U(0,H,0),new U(Math.cos(N)*.8,H+.3,Math.sin(N)*.8),new U(Math.cos(N)*1.6,H-.4,Math.sin(N)*1.6)]),V=new En(X,16,.04,8,!1),Y=new qt(V,o);e.add(Y);for(let R=1;R<=4;R++){const j=R/5,it=X.getPoint(j),O=new xe;O.position.copy(it);const W=new us(.35,.15),Q=new qt(W,l);Q.rotation.x=Math.PI/4,O.add(Q),n.add(O),d.push({mesh:O,baseScale:new U(1,1,1),baseRot:O.rotation.clone(),basePos:it.clone(),triggerProgress:.2+F/L*.4})}const G=X.getPoint(1),nt=new xe;nt.position.copy(G);const I=[];for(let R=0;R<5;R++){const j=R/5*Math.PI*2,it=new qt(new lr(.06,.22,5),c);it.position.set(Math.cos(j)*.08,0,Math.sin(j)*.08),it.rotation.z=Math.PI/3,it.rotation.y=j,nt.add(it),I.push(it)}if(i.add(nt),p.push({mesh:nt,baseScale:new U(1,1,1),baseRot:nt.rotation.clone(),petals:I,triggerProgress:.4+F/L*.3}),F%2===0){const R=new Bn([G.clone(),new U(G.x,G.y-.3,G.z),new U(G.x+.05,G.y-.7,G.z)]),j=new En(R,12,.035,8,!1),it=new qt(j,u);s.add(it)}}}else{for(let N=0;N<28;N++){const H=.4+Math.random()*1.4,X=Math.random()*Math.PI*2,V=.35+Math.random()*.45,Y=new Fi(.025,.04,V,6);Y.translate(0,V/2,0);const G=new qt(Y,a);G.position.set(Math.cos(X)*H,0,Math.sin(X)*H),e.add(G)}const v=new Bn([new U(0,0,0),new U(-.1,.6,.05),new U(.08,1.4,-.06),new U(0,2.2,0)]),x=new En(v,20,.16,10,!1),L=new qt(x,a);e.add(L);const F=6;for(let N=0;N<F;N++){const H=N/F*Math.PI*2,X=1.3+N%2*.4,V=new Bn([new U(0,X,0),new U(Math.cos(H)*.7,X+.25,Math.sin(H)*.7),new U(Math.cos(H)*1.4,X+.1,Math.sin(H)*1.4)]),Y=new En(V,14,.06,8,!1),G=new qt(Y,o);e.add(G);for(let j=1;j<=3;j++){const it=j/4,O=V.getPoint(it),W=new xe;W.position.copy(O);for(let Q=-1;Q<=1;Q+=2){const Z=new Li(.18,8,8);Z.scale(1.2,.1,.5);const st=new qt(Z,l);st.position.set(Q*.12,0,0),st.rotation.z=Q*.3,W.add(st)}n.add(W),d.push({mesh:W,baseScale:new U(1,1,1),baseRot:W.rotation.clone(),basePos:O.clone(),triggerProgress:.15+N/F*.4})}const nt=V.getPoint(1),I=new xe;I.position.copy(nt);const R=[];for(let j=0;j<6;j++){const it=new Li(.07,6,6),O=new qt(it,c);O.position.set((Math.random()-.5)*.18,(Math.random()-.5)*.18,(Math.random()-.5)*.18),I.add(O),R.push(O)}i.add(I),p.push({mesh:I,baseScale:new U(1,1,1),baseRot:I.rotation.clone(),petals:R,triggerProgress:.35+N/F*.4})}}const _=280,g=new Oe,m=new Float32Array(_*3),f=new Float32Array(_*3),S=new Float32Array(_);for(let w=0;w<_;w++){const v=.4+Math.random()*2.2,x=Math.random()*Math.PI*2,L=.2+Math.random()*3.8,F=Math.cos(x)*v,N=Math.sin(x)*v;m[w*3]=F,m[w*3+1]=L,m[w*3+2]=N,f[w*3]=F,f[w*3+1]=L,f[w*3+2]=N,S[w]=.3+Math.random()*.7}g.setAttribute("position",new Sn(m,3));const y=new jh({color:r.renderParams.pollenColor,size:.05,transparent:!0,opacity:.75,blending:co}),M=new Pf(g,y);t.add(M);const b=w=>{const v=Math.max(.001,Math.min(1,w));e.scale.set(.35+.65*Math.pow(v,.7),.2+.8*v,.35+.65*Math.pow(v,.7)),d.forEach(x=>{if(v<x.triggerProgress)x.mesh.scale.set(.001,.001,.001);else{const L=(v-x.triggerProgress)/(1-x.triggerProgress),F=Math.min(1,L*1.35);x.mesh.scale.set(x.baseScale.x*F,x.baseScale.y*F,x.baseScale.z*F)}}),p.forEach(x=>{if(v<x.triggerProgress)x.mesh.scale.set(.001,.001,.001);else{const L=(v-x.triggerProgress)/(1-x.triggerProgress),F=Math.min(1,L*1.5);x.mesh.scale.set(x.baseScale.x*F,x.baseScale.y*F,x.baseScale.z*F),x.petals.forEach((N,H)=>{N.scale.set(F,F,F),N.rotation.x=.2+L*.7+H%3*.05})}}),s.scale.set(Math.max(.001,(v-.6)/.4),Math.max(.001,(v-.6)/.4),Math.max(.001,(v-.6)/.4)),y.opacity=Math.max(.1,v*.85)},C=w=>{a.wireframe=w,o.wireframe=w,l.wireframe=w,c.wireframe=w,h.wireframe=w,u.wireframe=w},A=(w,v)=>{const x=Math.sin(v*1.2)*.02+Math.sin(v*2.4)*.01;e.rotation.z=x,n.rotation.z=x*1.4,i.rotation.z=x*1.6;const L=g.attributes.position,F=L.array;for(let N=0;N<_;N++){const H=N*3,X=S[N],V=f[H],Y=f[H+2],G=Math.atan2(Y,V)+v*.25*X,nt=Math.sqrt(V*V+Y*Y);F[H]=Math.cos(G)*nt,F[H+1]=f[H+1]+Math.sin(v*X+N)*.15,F[H+2]=Math.sin(G)*nt}L.needsUpdate=!0};return b(1),{rootGroup:t,stemGroup:e,foliageGroup:n,flowerGroup:i,fruitGroup:s,pollenSystem:M,specimen:r,setGrowth:b,update:A,setWireframe:C}}class ox{container;scene;camera;renderer;clock;animFrameId=null;currentPlant=null;currentSpecimen=null;ambientLight;mainSunLight;fillLight;rimLight;specimenSpot;pedimentMesh;gridHelper;isPointerDown=!1;prevPointerX=0;prevPointerY=0;spherical=new np(4.8,Math.PI/2.3,.4);targetLookAt=new U(0,1.6,0);autoRotate=!0;autoRotateSpeed=.4;isWireframe=!1;constructor(t){this.container=t,this.scene=new bf,this.clock=new ep,this.scene.fog=new Sl(139032,.045);const e=t.clientWidth/(t.clientHeight||1);this.camera=new ke(42,e,.1,100),this.updateCameraFromSpherical(),this.renderer=new k0({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ah,this.renderer.toneMapping=Ch,this.renderer.toneMappingExposure=1.1,t.appendChild(this.renderer.domElement),this.ambientLight=new Qf(14482663,.9),this.scene.add(this.ambientLight),this.mainSunLight=new Ic(16707722,2.2),this.mainSunLight.position.set(5,9,6),this.mainSunLight.castShadow=!0,this.mainSunLight.shadow.mapSize.width=1024,this.mainSunLight.shadow.mapSize.height=1024,this.scene.add(this.mainSunLight),this.fillLight=new Jf(3462041,1.4,15),this.fillLight.position.set(-4,3,-3),this.scene.add(this.fillLight),this.rimLight=new Ic(3718648,1.2),this.rimLight.position.set(-4,5,-6),this.scene.add(this.rimLight),this.specimenSpot=new Kf(16710083,3,12,Math.PI/4,.4),this.specimenSpot.position.set(0,8,2),this.specimenSpot.target.position.set(0,1.5,0),this.scene.add(this.specimenSpot),this.scene.add(this.specimenSpot.target);const n=new Fi(2.2,2.4,.15,48),i=new Ai({color:413243,roughness:.35,metalness:.6});this.pedimentMesh=new qt(n,i),this.pedimentMesh.position.y=-.075,this.pedimentMesh.receiveShadow=!0,this.scene.add(this.pedimentMesh);const s=new bl(2,2.15,64),a=new yl({color:16096779,side:un}),o=new qt(s,a);o.rotation.x=-Math.PI/2,o.position.y=.005,this.scene.add(o),this.gridHelper=new ip(5,10,1096065,292951),this.gridHelper.position.y=.002,this.scene.add(this.gridHelper),this.bindEvents(),this.animate()}updateCameraFromSpherical(){this.camera.position.setFromSpherical(this.spherical).add(this.targetLookAt),this.camera.lookAt(this.targetLookAt)}loadPlant(t,e=1){this.currentPlant&&this.scene.remove(this.currentPlant.rootGroup),this.currentSpecimen=t,this.currentPlant=ax(t),this.currentPlant.setWireframe(this.isWireframe),this.currentPlant.setGrowth(e),this.scene.add(this.currentPlant.rootGroup),this.setCameraPreset("reset")}setGrowth(t){this.currentPlant&&this.currentPlant.setGrowth(t)}animateGrowth(t,e=1.2){if(!this.currentPlant)return;const n={p:.5};Js.to(n,{p:t,duration:e,ease:"power2.out",onUpdate:()=>{this.setGrowth(n.p)}})}setLightingMode(t){t==="daylight"?(this.renderer.toneMappingExposure=1.15,this.scene.fog?.color.setHex(142370),this.ambientLight.color.setHex(16710083),this.ambientLight.intensity=.95,this.mainSunLight.color.setHex(16772565),this.mainSunLight.intensity=2.4,this.fillLight.color.setHex(8843180),this.rimLight.color.setHex(12248829)):t==="greenhouse"?(this.renderer.toneMappingExposure=1.25,this.scene.fog?.color.setHex(413243),this.ambientLight.color.setHex(11006928),this.ambientLight.intensity=1.2,this.mainSunLight.color.setHex(7268279),this.mainSunLight.intensity=2,this.fillLight.color.setHex(3462041),this.rimLight.color.setHex(16707722)):(this.renderer.toneMappingExposure=1.45,this.scene.fog?.color.setHex(135436),this.ambientLight.color.setHex(417606),this.ambientLight.intensity=.4,this.mainSunLight.color.setHex(2282478),this.mainSunLight.intensity=1.2,this.fillLight.color.setHex(11032055),this.rimLight.color.setHex(15485081))}setCameraPreset(t){let e=4.8,n=Math.PI/2.3,i=this.spherical.theta;const s=new U(0,1.6,0);t==="macro"?(e=1.8,n=Math.PI/2.6,s.set(0,2.2,0)):t==="canopy"?(e=3.8,n=Math.PI/5,s.set(0,1.8,0)):t==="stem"?(e=2.6,n=Math.PI/2.1,s.set(0,.7,0)):(e=4.8,n=Math.PI/2.3,s.set(0,1.6,0)),Js.to(this.spherical,{radius:e,phi:n,theta:i,duration:1,ease:"power3.out",onUpdate:()=>this.updateCameraFromSpherical()}),Js.to(this.targetLookAt,{x:s.x,y:s.y,z:s.z,duration:1,ease:"power3.out",onUpdate:()=>this.updateCameraFromSpherical()})}toggleWireframe(){return this.isWireframe=!this.isWireframe,this.currentPlant&&this.currentPlant.setWireframe(this.isWireframe),this.isWireframe}toggleAutoRotate(){return this.autoRotate=!this.autoRotate,this.autoRotate}bindEvents(){const t=this.renderer.domElement;t.addEventListener("pointerdown",e=>{this.isPointerDown=!0,this.prevPointerX=e.clientX,this.prevPointerY=e.clientY}),window.addEventListener("pointermove",e=>{if(!this.isPointerDown)return;const n=e.clientX-this.prevPointerX,i=e.clientY-this.prevPointerY;this.prevPointerX=e.clientX,this.prevPointerY=e.clientY,this.spherical.theta-=n*.007,this.spherical.phi=Math.max(.15,Math.min(Math.PI/2-.05,this.spherical.phi-i*.007)),this.updateCameraFromSpherical()}),window.addEventListener("pointerup",()=>{this.isPointerDown=!1}),t.addEventListener("wheel",e=>{e.preventDefault(),this.spherical.radius=Math.max(1.2,Math.min(8,this.spherical.radius+e.deltaY*.004)),this.updateCameraFromSpherical()},{passive:!1}),window.addEventListener("resize",()=>{if(!this.container)return;const e=this.container.clientWidth,n=this.container.clientHeight;this.camera.aspect=e/(n||1),this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n)})}animate=()=>{this.animFrameId=requestAnimationFrame(this.animate);const t=this.clock.getDelta(),e=this.clock.getElapsedTime();this.autoRotate&&!this.isPointerDown&&(this.spherical.theta+=t*this.autoRotateSpeed*.35,this.updateCameraFromSpherical()),this.currentPlant&&this.currentPlant.update(t,e),this.renderer.render(this.scene,this.camera)};dispose(){this.animFrameId!==null&&cancelAnimationFrame(this.animFrameId),this.renderer.dispose()}}class lx{ctx=null;isMuted=!1;isWindActive=!1;masterGain=null;windGain=null;windFilter=null;windSource=null;windLfo=null;constructor(){}initContext(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.7,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.initContext(),this.isMuted=!this.isMuted,this.masterGain&&this.ctx&&this.masterGain.gain.linearRampToValueAtTime(this.isMuted?0:.7,this.ctx.currentTime+.1),this.isMuted}getIsMuted(){return this.isMuted}startMountainWind(){if(!this.isWindActive&&(this.initContext(),!(!this.ctx||!this.masterGain)))try{const t=this.ctx.sampleRate*3,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);let i=0,s=0,a=0,o=0,l=0,c=0,h=0;for(let d=0;d<t;d++){const p=Math.random()*2-1;i=.99886*i+p*.0555179,s=.99332*s+p*.0750759,a=.969*a+p*.153852,o=.8665*o+p*.3104856,l=.55*l+p*.5329522,c=-.7616*c-p*.016898,n[d]=(i+s+a+o+l+c+h+p*.5362)*.04,h=p*.115926}this.windSource=this.ctx.createBufferSource(),this.windSource.buffer=e,this.windSource.loop=!0,this.windFilter=this.ctx.createBiquadFilter(),this.windFilter.type="bandpass",this.windFilter.frequency.setValueAtTime(380,this.ctx.currentTime),this.windFilter.Q.setValueAtTime(2.2,this.ctx.currentTime),this.windGain=this.ctx.createGain(),this.windGain.gain.setValueAtTime(.01,this.ctx.currentTime),this.windGain.gain.linearRampToValueAtTime(.25,this.ctx.currentTime+2),this.windLfo=this.ctx.createOscillator(),this.windLfo.frequency.setValueAtTime(.18,this.ctx.currentTime);const u=this.ctx.createGain();u.gain.setValueAtTime(220,this.ctx.currentTime),this.windLfo.connect(u),u.connect(this.windFilter.frequency),this.windSource.connect(this.windFilter),this.windFilter.connect(this.windGain),this.windGain.connect(this.masterGain),this.windSource.start(),this.windLfo.start(),this.isWindActive=!0}catch{}}stopMountainWind(){!this.isWindActive||!this.windGain||!this.ctx||(this.windGain.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+1),setTimeout(()=>{try{this.windSource?.stop(),this.windLfo?.stop(),this.windSource?.disconnect(),this.windLfo?.disconnect()}catch{}this.isWindActive=!1},1100))}playWaterDroplet(){if(this.initContext(),!this.ctx||!this.masterGain||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=750+Math.random()*500;e.type="sine",e.frequency.setValueAtTime(i,t),e.frequency.exponentialRampToValueAtTime(i*1.8,t+.08),n.gain.setValueAtTime(.001,t),n.gain.linearRampToValueAtTime(.18,t+.01),n.gain.exponentialRampToValueAtTime(1e-4,t+.18),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.2)}playBloomChime(){if(this.initContext(),!this.ctx||!this.masterGain||this.isMuted)return;const t=[440,554.37,659.25,830.61,987.77,1318.5],e=this.ctx.currentTime;t.forEach((n,i)=>{if(!this.ctx||!this.masterGain)return;const s=e+i*.09,a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime(n,s),o.gain.setValueAtTime(.001,s),o.gain.linearRampToValueAtTime(.12/(i*.4+1),s+.03),o.gain.exponentialRampToValueAtTime(1e-4,s+1.8),a.connect(o),o.connect(this.masterGain),a.start(s),a.stop(s+2)})}playUiClick(){if(this.initContext(),!this.ctx||!this.masterGain||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(420,t),e.frequency.exponentialRampToValueAtTime(180,t+.05),n.gain.setValueAtTime(.08,t),n.gain.exponentialRampToValueAtTime(.001,t+.05),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.06)}}const we=new lx;class Th{static simulate(t,e,n){const i=n.method==="supercritical_co2",s=e.phytochemicalPotencyMultiplier;let a=.85,o=90,l=92;if(i){const v=Math.abs(n.temperatureC-42),x=Math.abs(n.pressureBar-220);a=Math.max(.65,1.15-(v*.015+x*.0015)),o=Math.min(99.6,Math.max(88,98.5-v*.25-x*.02)),l=Math.min(99.8,Math.max(85,99.2-Math.max(0,n.temperatureC-45)*.4))}else{const v=Math.abs(n.temperatureC-100),x=Math.abs(n.pressureBar-1.5);a=Math.max(.55,1-(v*.03+x*.1)),o=Math.min(96.5,Math.max(78,94-v*.5-x*2)),l=Math.max(68,94-Math.max(0,n.temperatureC-95)*.85)}const c=1-Math.exp(-n.durationMinutes/(i?28:45));a*=c;const u=n.rawMaterialKg*(t.extractionYieldBaselinePct/100)*s*a,d=Math.max(.1,u*1e3),_=d/.885,g=d/(n.rawMaterialKg*1e3)*100;let m=0;i?m=n.rawMaterialKg*.18*(n.durationMinutes/60)+n.pressureBar*.012:m=n.rawMaterialKg*.35*(n.durationMinutes/60)*(n.temperatureC/100);const f=t.primaryCompounds.map(v=>{let x=a;!i&&v.boilingPointC>240&&(x*=Math.min(1,n.durationMinutes/60));const L=Math.min(99.9,Math.max(20,v.abundancePercent*x*(l/100)));return{compound:v,recoveredPercentage:Number(L.toFixed(2))}}),S=i?m*320*.3:m*450,y=new Date().toISOString().slice(2,10).replace(/-/g,""),M=Math.floor(1e3+Math.random()*9e3),b=i?"SC2":"STM",C=`UQ-${t.id.slice(0,3).toUpperCase()}-${b}-${y}-${M}`;let A="رتبة صيدلانية فائقة النقاوة (Pharma Grade AAA)",w="Pharma Grade AAA (Ultra-Purified)";return o<90||l<82?(A="رتبة عطرية قياسية (Aromatherapy Standard)",w="Therapeutic Aromatherapy Standard"):o<96&&(A="رتبة تجميلية ملكية فاخرة (Cosmetic Grade A+)",w="Royal Cosmetic Grade A+ (Unadulterated)"),{yieldMl:Number(_.toFixed(2)),yieldWeightGrams:Number(d.toFixed(2)),yieldEfficiencyPct:Number(g.toFixed(3)),purityIndexPct:Number(o.toFixed(1)),energyConsumptionKwh:Number(m.toFixed(2)),activeConstituentsProfile:f,terpeneIntegrityPct:Number(l.toFixed(1)),co2FootprintGrams:Number(S.toFixed(1)),batchSerialNumber:C,qualityGradeAr:A,qualityGradeEn:w}}}class cx{canvas;ctx;animProgress=1;animId=null;activeSpecimen=null;hoveredCompound=null;peaks=[];constructor(t){this.canvas=t;const e=t.getContext("2d");if(!e)throw new Error("Cannot get 2D context");this.ctx=e,this.bindHover()}setSpecimen(t){this.activeSpecimen=t,this.animProgress=0,this.animateScan()}animateScan(){this.animId&&cancelAnimationFrame(this.animId);const t=()=>{this.animProgress+=.035,this.draw(),this.animProgress<1?this.animId=requestAnimationFrame(t):(this.animProgress=1,this.draw())};t()}bindHover(){this.canvas.addEventListener("mousemove",t=>{const e=this.canvas.getBoundingClientRect(),n=t.clientX-e.left,i=t.clientY-e.top;let s=null;for(const a of this.peaks)if(Math.abs(n-a.x)<a.width*1.5&&i>=a.y-20&&i<=this.canvas.height-30){s=a.compound;break}this.hoveredCompound!==s&&(this.hoveredCompound=s,this.draw())}),this.canvas.addEventListener("mouseleave",()=>{this.hoveredCompound!==null&&(this.hoveredCompound=null,this.draw())})}draw(){const t=this.canvas.width,e=this.canvas.height,n=this.ctx;n.clearRect(0,0,t,e),n.fillStyle="#021812",n.fillRect(0,0,t,e),n.strokeStyle="#064e3b",n.lineWidth=1,n.setLineDash([3,4]);const i=45,s=20,a=35,o=25,l=t-i-s,c=e-o-a;for(let _=0;_<=5;_++){const g=o+c/5*_;n.beginPath(),n.moveTo(i,g),n.lineTo(t-s,g),n.stroke(),n.setLineDash([]),n.fillStyle="#6ee7b7",n.font="10px monospace",n.fillText(`${100-_*20}%`,10,g+4),n.setLineDash([3,4])}const h=22;for(let _=0;_<=h;_+=2){const g=i+_/h*l;n.beginPath(),n.moveTo(g,o),n.lineTo(g,e-a),n.stroke(),n.setLineDash([]),n.fillStyle="#94a3b8",n.font="10px monospace",n.fillText(`${_}m`,g-8,e-a+16),n.setLineDash([3,4])}if(n.setLineDash([]),!this.activeSpecimen)return;this.peaks=[];const u=this.activeSpecimen.primaryCompounds;n.beginPath(),n.strokeStyle="#10b981",n.lineWidth=2;const d=[],p=400;for(let _=0;_<=p;_++){const g=_/p;if(g>this.animProgress)break;const m=g*h,f=i+g*l;let S=2+Math.sin(m*8)*.8+Math.cos(m*19)*.4;u.forEach(M=>{const b=M.retentionTimeMin,C=.35,w=M.abundancePercent/100*85*Math.exp(-Math.pow(m-b,2)/(2*C*C));S+=w});const y=e-a-S/100*c;d.push({x:f,y}),_===0?n.moveTo(f,y):n.lineTo(f,y)}if(n.stroke(),d.length>1){const _=d[d.length-1];n.lineTo(_.x,e-a),n.lineTo(i,e-a),n.closePath();const g=n.createLinearGradient(0,o,0,e-a);g.addColorStop(0,"rgba(16, 185, 129, 0.35)"),g.addColorStop(1,"rgba(16, 185, 129, 0.0)"),n.fillStyle=g,n.fill()}if(u.forEach(_=>{const g=_.retentionTimeMin/h;if(g<=this.animProgress){const m=i+g*l,f=e-a-(_.abundancePercent*.85+2)/100*c;this.peaks.push({x:m,y:f,width:18,compound:_});const S=this.hoveredCompound?.id===_.id;n.fillStyle=S?"#f59e0b":"#34d399",n.beginPath(),n.arc(m,f,S?6:4,0,Math.PI*2),n.fill(),n.fillStyle=S?"#fbbf24":"#f8fafc",n.font=S?"bold 11px sans-serif":"10px sans-serif",n.fillText(_.nameAr,m-20,f-12),n.fillStyle="#6ee7b7",n.font="9px monospace",n.fillText(`${_.retentionTimeMin}m (${_.abundancePercent}%)`,m-22,f-2)}}),this.hoveredCompound){const _=this.hoveredCompound,g=210,m=90,f=_.retentionTimeMin/h;let S=i+f*l+12,y=o+20;S+g>t-10&&(S=i+f*l-g-12),n.fillStyle="rgba(2, 44, 34, 0.95)",n.strokeStyle="#f59e0b",n.lineWidth=1.5,n.beginPath(),n.roundRect(S,y,g,m,8),n.fill(),n.stroke(),n.fillStyle="#fef08a",n.font="bold 11px sans-serif",n.fillText(`${_.nameAr} (${_.nameEn})`,S+10,y+18),n.fillStyle="#94a3b8",n.font="9px monospace",n.fillText(`Formula: ${_.molecularFormula} | MW: ${_.molecularWeight} g/mol`,S+10,y+34),n.fillText(`BP: ${_.boilingPointC}°C | CAS: ${_.casNo}`,S+10,y+48),n.fillStyle="#6ee7b7",n.font="9px sans-serif",n.fillText(_.therapeuticCategoryAr.slice(0,32)+"...",S+10,y+64),n.fillText(_.fragranceNotesAr.slice(0,32)+"...",S+10,y+78)}}}class hx{canvas;ctx;currentSpecimen=null;lang="ar";constructor(t){this.canvas=t;const e=t.getContext("2d");if(!e)throw new Error("Cannot get 2D context for radar");this.ctx=e}setSpecimen(t,e="ar"){this.currentSpecimen=t,this.lang=e,this.draw()}draw(){const t=this.canvas.width,e=this.canvas.height,n=this.ctx;n.clearRect(0,0,t,e);const i=t/2,s=e/2+5,a=Math.min(i,s)-45,o=Ri[this.lang],l=[{key:"antiMicrobial",label:o.axisAntimicrobial},{key:"antiOxidant",label:o.axisAntioxidant},{key:"antiInflammatory",label:o.axisAntiinflammatory},{key:"neuroAroma",label:o.axisNeuroaroma},{key:"woundHealing",label:o.axisWoundhealing}],c=l.length,h=Math.PI*2/c,u=5;for(let m=1;m<=u;m++){const f=a/u*m;n.beginPath(),n.strokeStyle=m===u?"#10b981":"rgba(16, 185, 129, 0.2)",n.lineWidth=m===u?1.5:1,n.setLineDash(m===u?[]:[2,3]);for(let S=0;S<c;S++){const y=S*h-Math.PI/2,M=i+Math.cos(y)*f,b=s+Math.sin(y)*f;S===0?n.moveTo(M,b):n.lineTo(M,b)}n.closePath(),n.stroke(),n.setLineDash([]),n.fillStyle="rgba(110, 231, 183, 0.6)",n.font="8px monospace",n.fillText(`${m*20}%`,i+4,s-f+10)}n.setLineDash([]);for(let m=0;m<c;m++){const f=m*h-Math.PI/2,S=i+Math.cos(f)*a,y=s+Math.sin(f)*a;n.beginPath(),n.strokeStyle="rgba(52, 211, 153, 0.35)",n.lineWidth=1,n.moveTo(i,s),n.lineTo(S,y),n.stroke();const M=a+22,b=i+Math.cos(f)*M,C=s+Math.sin(f)*M;n.fillStyle="#f8fafc",n.font="bold 10px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(l[m].label,b,C)}if(!this.currentSpecimen)return;const d={antiMicrobial:0,antiOxidant:0,antiInflammatory:0,neuroAroma:0,woundHealing:0};let p=0;this.currentSpecimen.primaryCompounds.forEach(m=>{const f=m.abundancePercent;p+=f,d.antiMicrobial+=m.radarScores.antiMicrobial*f,d.antiOxidant+=m.radarScores.antiOxidant*f,d.antiInflammatory+=m.radarScores.antiInflammatory*f,d.neuroAroma+=m.radarScores.neuroAroma*f,d.woundHealing+=m.radarScores.woundHealing*f}),p>0&&(d.antiMicrobial/=p,d.antiOxidant/=p,d.antiInflammatory/=p,d.neuroAroma/=p,d.woundHealing/=p),n.beginPath(),n.strokeStyle="#f59e0b",n.lineWidth=2.5;const _=[];l.forEach((m,f)=>{const y=(d[m.key]||50)/100*a,M=f*h-Math.PI/2,b=i+Math.cos(M)*y,C=s+Math.sin(M)*y;_.push({x:b,y:C}),f===0?n.moveTo(b,C):n.lineTo(b,C)}),n.closePath(),n.stroke();const g=n.createRadialGradient(i,s,10,i,s,a);g.addColorStop(0,"rgba(245, 158, 11, 0.45)"),g.addColorStop(1,"rgba(16, 185, 129, 0.15)"),n.fillStyle=g,n.fill(),_.forEach((m,f)=>{n.beginPath(),n.fillStyle="#f59e0b",n.arc(m.x,m.y,4.5,0,Math.PI*2),n.fill(),n.lineWidth=1.5,n.strokeStyle="#ffffff",n.stroke();const S=Math.round(d[l[f].key]);n.fillStyle="#fef08a",n.font="bold 9px monospace",n.textAlign="center",n.fillText(`${S}`,m.x,m.y-8)})}}var ql={};(function r(t,e,n,i){var s=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=(function(){if(!t.OffscreenCanvas)return!1;try{var I=new OffscreenCanvas(1,1),R=I.getContext("2d");R.fillRect(0,0,1,1);var j=I.transferToImageBitmap();R.createPattern(j,"no-repeat")}catch{return!1}return!0})();function l(){}function c(I){var R=e.exports.Promise,j=R!==void 0?R:t.Promise;return typeof j=="function"?new j(I):(I(l,l),null)}var h=(function(I,R){return{transform:function(j){if(I)return j;if(R.has(j))return R.get(j);var it=new OffscreenCanvas(j.width,j.height),O=it.getContext("2d");return O.drawImage(j,0,0),R.set(j,it),it},clear:function(){R.clear()}}})(o,new Map),u=(function(){var I=Math.floor(16.666666666666668),R,j,it={},O=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(R=function(W){var Q=Math.random();return it[Q]=requestAnimationFrame(function Z(st){O===st||O+I-1<st?(O=st,delete it[Q],W()):it[Q]=requestAnimationFrame(Z)}),Q},j=function(W){it[W]&&cancelAnimationFrame(it[W])}):(R=function(W){return setTimeout(W,I)},j=function(W){return clearTimeout(W)}),{frame:R,cancel:j}})(),d=(function(){var I,R,j={};function it(O){function W(Q,Z){O.postMessage({options:Q||{},callback:Z})}O.init=function(Z){var st=Z.transferControlToOffscreen();O.postMessage({canvas:st},[st])},O.fire=function(Z,st,pt){if(R)return W(Z,null),R;var ct=Math.random().toString(36).slice(2);return R=c(function(bt){function Lt(At){At.data.callback===ct&&(delete j[ct],O.removeEventListener("message",Lt),R=null,h.clear(),pt(),bt())}O.addEventListener("message",Lt),W(Z,ct),j[ct]=Lt.bind(null,{data:{callback:ct}})}),R},O.reset=function(){O.postMessage({reset:!0});for(var Z in j)j[Z](),delete j[Z]}}return function(){if(I)return I;if(!n&&s){var O=["var CONFETTI, SIZE = {}, module = {};","("+r.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{I=new Worker(URL.createObjectURL(new Blob([O])))}catch(W){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",W),null}it(I)}return I}})(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function _(I,R){return R?R(I):I}function g(I){return I!=null}function m(I,R,j){return _(I&&g(I[R])?I[R]:p[R],j)}function f(I){return I<0?0:Math.floor(I)}function S(I,R){return Math.floor(Math.random()*(R-I))+I}function y(I){return parseInt(I,16)}function M(I){return I.map(b)}function b(I){var R=String(I).replace(/[^0-9a-f]/gi,"");return R.length<6&&(R=R[0]+R[0]+R[1]+R[1]+R[2]+R[2]),{r:y(R.substring(0,2)),g:y(R.substring(2,4)),b:y(R.substring(4,6))}}function C(I){var R=m(I,"origin",Object);return R.x=m(R,"x",Number),R.y=m(R,"y",Number),R}function A(I){I.width=document.documentElement.clientWidth,I.height=document.documentElement.clientHeight}function w(I){var R=I.getBoundingClientRect();I.width=R.width,I.height=R.height}function v(I){var R=document.createElement("canvas");return R.style.position="fixed",R.style.top="0px",R.style.left="0px",R.style.pointerEvents="none",R.style.zIndex=I,R}function x(I,R,j,it,O,W,Q,Z,st){I.save(),I.translate(R,j),I.rotate(W),I.scale(it,O),I.arc(0,0,1,Q,Z,st),I.restore()}function L(I){var R=I.angle*(Math.PI/180),j=I.spread*(Math.PI/180);return{x:I.x,y:I.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:I.startVelocity*.5+Math.random()*I.startVelocity,angle2D:-R+(.5*j-Math.random()*j),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:I.color,shape:I.shape,tick:0,totalTicks:I.ticks,decay:I.decay,drift:I.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:I.gravity*3,ovalScalar:.6,scalar:I.scalar,flat:I.flat}}function F(I,R){R.x+=Math.cos(R.angle2D)*R.velocity+R.drift,R.y+=Math.sin(R.angle2D)*R.velocity+R.gravity,R.velocity*=R.decay,R.flat?(R.wobble=0,R.wobbleX=R.x+10*R.scalar,R.wobbleY=R.y+10*R.scalar,R.tiltSin=0,R.tiltCos=0,R.random=1):(R.wobble+=R.wobbleSpeed,R.wobbleX=R.x+10*R.scalar*Math.cos(R.wobble),R.wobbleY=R.y+10*R.scalar*Math.sin(R.wobble),R.tiltAngle+=.1,R.tiltSin=Math.sin(R.tiltAngle),R.tiltCos=Math.cos(R.tiltAngle),R.random=Math.random()+2);var j=R.tick++/R.totalTicks,it=R.x+R.random*R.tiltCos,O=R.y+R.random*R.tiltSin,W=R.wobbleX+R.random*R.tiltCos,Q=R.wobbleY+R.random*R.tiltSin;if(I.fillStyle="rgba("+R.color.r+", "+R.color.g+", "+R.color.b+", "+(1-j)+")",I.beginPath(),a&&R.shape.type==="path"&&typeof R.shape.path=="string"&&Array.isArray(R.shape.matrix))I.fill(Y(R.shape.path,R.shape.matrix,R.x,R.y,Math.abs(W-it)*.1,Math.abs(Q-O)*.1,Math.PI/10*R.wobble));else if(R.shape.type==="bitmap"){var Z=Math.PI/10*R.wobble,st=Math.abs(W-it)*.1,pt=Math.abs(Q-O)*.1,ct=R.shape.bitmap.width*R.scalar,bt=R.shape.bitmap.height*R.scalar,Lt=new DOMMatrix([Math.cos(Z)*st,Math.sin(Z)*st,-Math.sin(Z)*pt,Math.cos(Z)*pt,R.x,R.y]);Lt.multiplySelf(new DOMMatrix(R.shape.matrix));var At=I.createPattern(h.transform(R.shape.bitmap),"no-repeat");At.setTransform(Lt),I.globalAlpha=1-j,I.fillStyle=At,I.fillRect(R.x-ct/2,R.y-bt/2,ct,bt),I.globalAlpha=1}else if(R.shape==="circle")I.ellipse?I.ellipse(R.x,R.y,Math.abs(W-it)*R.ovalScalar,Math.abs(Q-O)*R.ovalScalar,Math.PI/10*R.wobble,0,2*Math.PI):x(I,R.x,R.y,Math.abs(W-it)*R.ovalScalar,Math.abs(Q-O)*R.ovalScalar,Math.PI/10*R.wobble,0,2*Math.PI);else if(R.shape==="star")for(var D=Math.PI/2*3,ne=4*R.scalar,Dt=8*R.scalar,It=R.x,yt=R.y,Yt=5,vt=Math.PI/Yt;Yt--;)It=R.x+Math.cos(D)*Dt,yt=R.y+Math.sin(D)*Dt,I.lineTo(It,yt),D+=vt,It=R.x+Math.cos(D)*ne,yt=R.y+Math.sin(D)*ne,I.lineTo(It,yt),D+=vt;else I.moveTo(Math.floor(R.x),Math.floor(R.y)),I.lineTo(Math.floor(R.wobbleX),Math.floor(O)),I.lineTo(Math.floor(W),Math.floor(Q)),I.lineTo(Math.floor(it),Math.floor(R.wobbleY));return I.closePath(),I.fill(),R.tick<R.totalTicks}function N(I,R,j,it,O){var W=R.slice(),Q=I.getContext("2d"),Z,st,pt=c(function(ct){function bt(){Z=st=null,Q.clearRect(0,0,it.width,it.height),h.clear(),O(),ct()}function Lt(){n&&!(it.width===i.width&&it.height===i.height)&&(it.width=I.width=i.width,it.height=I.height=i.height),!it.width&&!it.height&&(j(I),it.width=I.width,it.height=I.height),Q.clearRect(0,0,it.width,it.height),W=W.filter(function(At){return F(Q,At)}),W.length?Z=u.frame(Lt):bt()}Z=u.frame(Lt),st=bt});return{addFettis:function(ct){return W=W.concat(ct),pt},canvas:I,promise:pt,reset:function(){Z&&u.cancel(Z),st&&st()}}}function H(I,R){var j=!I,it=!!m(R||{},"resize"),O=!1,W=m(R,"disableForReducedMotion",Boolean),Q=s&&!!m(R||{},"useWorker"),Z=Q?d():null,st=j?A:w,pt=I&&Z?!!I.__confetti_initialized:!1,ct=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,bt;function Lt(D,ne,Dt){for(var It=m(D,"particleCount",f),yt=m(D,"angle",Number),Yt=m(D,"spread",Number),vt=m(D,"startVelocity",Number),P=m(D,"decay",Number),E=m(D,"gravity",Number),q=m(D,"drift",Number),et=m(D,"colors",M),at=m(D,"ticks",Number),tt=m(D,"shapes"),Tt=m(D,"scalar"),ut=!!m(D,"flat"),_t=C(D),Gt=It,lt=[],xt=I.width*_t.x,Pt=I.height*_t.y;Gt--;)lt.push(L({x:xt,y:Pt,angle:yt,spread:Yt,startVelocity:vt,color:et[Gt%et.length],shape:tt[S(0,tt.length)],ticks:at,decay:P,gravity:E,drift:q,scalar:Tt,flat:ut}));return bt?bt.addFettis(lt):(bt=N(I,lt,st,ne,Dt),bt.promise)}function At(D){var ne=W||m(D,"disableForReducedMotion",Boolean),Dt=m(D,"zIndex",Number);if(ne&&ct)return c(function(vt){vt()});j&&bt?I=bt.canvas:j&&!I&&(I=v(Dt),document.body.appendChild(I)),it&&!pt&&st(I);var It={width:I.width,height:I.height};Z&&!pt&&Z.init(I),pt=!0,Z&&(I.__confetti_initialized=!0);function yt(){if(Z){var vt={getBoundingClientRect:function(){if(!j)return I.getBoundingClientRect()}};st(vt),Z.postMessage({resize:{width:vt.width,height:vt.height}});return}It.width=It.height=null}function Yt(){bt=null,it&&(O=!1,t.removeEventListener("resize",yt)),j&&I&&(document.body.contains(I)&&document.body.removeChild(I),I=null,pt=!1)}return it&&!O&&(O=!0,t.addEventListener("resize",yt,!1)),Z?Z.fire(D,It,Yt):Lt(D,It,Yt)}return At.reset=function(){Z&&Z.reset(),bt&&bt.reset()},At}var X;function V(){return X||(X=H(null,{useWorker:!0,resize:!0})),X}function Y(I,R,j,it,O,W,Q){var Z=new Path2D(I),st=new Path2D;st.addPath(Z,new DOMMatrix(R));var pt=new Path2D;return pt.addPath(st,new DOMMatrix([Math.cos(Q)*O,Math.sin(Q)*O,-Math.sin(Q)*W,Math.cos(Q)*W,j,it])),pt}function G(I){if(!a)throw new Error("path confetti are not supported in this browser");var R,j;typeof I=="string"?R=I:(R=I.path,j=I.matrix);var it=new Path2D(R),O=document.createElement("canvas"),W=O.getContext("2d");if(!j){for(var Q=1e3,Z=Q,st=Q,pt=0,ct=0,bt,Lt,At=0;At<Q;At+=2)for(var D=0;D<Q;D+=2)W.isPointInPath(it,At,D,"nonzero")&&(Z=Math.min(Z,At),st=Math.min(st,D),pt=Math.max(pt,At),ct=Math.max(ct,D));bt=pt-Z,Lt=ct-st;var ne=10,Dt=Math.min(ne/bt,ne/Lt);j=[Dt,0,0,Dt,-Math.round(bt/2+Z)*Dt,-Math.round(Lt/2+st)*Dt]}return{type:"path",path:R,matrix:j}}function nt(I){var R,j=1,it="#000000",O='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof I=="string"?R=I:(R=I.text,j="scalar"in I?I.scalar:j,O="fontFamily"in I?I.fontFamily:O,it="color"in I?I.color:it);var W=10*j,Q=""+W+"px "+O,Z=new OffscreenCanvas(W,W),st=Z.getContext("2d");st.font=Q;var pt=st.measureText(R),ct=Math.ceil(pt.actualBoundingBoxRight+pt.actualBoundingBoxLeft),bt=Math.ceil(pt.actualBoundingBoxAscent+pt.actualBoundingBoxDescent),Lt=2,At=pt.actualBoundingBoxLeft+Lt,D=pt.actualBoundingBoxAscent+Lt;ct+=Lt+Lt,bt+=Lt+Lt,Z=new OffscreenCanvas(ct,bt),st=Z.getContext("2d"),st.font=Q,st.fillStyle=it,st.fillText(R,At,D);var ne=1/j;return{type:"bitmap",bitmap:Z.transferToImageBitmap(),matrix:[ne,0,0,ne,-ct*ne/2,-bt*ne/2]}}e.exports=function(){return V().apply(this,arguments)},e.exports.reset=function(){V().reset()},e.exports.create=H,e.exports.shapeFromPath=G,e.exports.shapeFromText=nt})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),ql,!1);const ux=ql.exports;ql.exports.create;class dx{container;lang="ar";constructor(t){this.container=t}open(t,e,n,i="ar"){this.lang=i;const s=Ri[i],a=i==="ar";we.playBloomChime(),ux({particleCount:80,spread:70,origin:{y:.6},colors:["#10b981","#f59e0b","#34d399","#fef08a"]});const o=n.activeConstituentsProfile.map(c=>`
        <div class="cert-compound-row">
          <div class="cert-compound-name">
            <strong>${a?c.compound.nameAr:c.compound.nameEn}</strong>
            <span class="cert-compound-cas">CAS: ${c.compound.casNo} | ${c.compound.molecularFormula}</span>
          </div>
          <div class="cert-compound-stats">
            <span class="cert-compound-ret">RT: ${c.compound.retentionTimeMin} min</span>
            <span class="cert-compound-rec">${c.recoveredPercentage}%</span>
          </div>
        </div>
      `).join(""),l=`
      <div class="cert-backdrop" id="cert-backdrop">
        <div class="cert-modal-card">
          <!-- Close & Action Bar -->
          <div class="cert-actions-bar no-print">
            <button id="cert-print-btn" class="btn-cert-action btn-gold">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><path d="M6 14h12v8H6z"/></svg>
              ${s.certPrintBtn}
            </button>
            <button id="cert-close-btn" class="btn-cert-action btn-dismiss">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ${s.certCloseBtn}
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
                    <div class="cert-kingdom">${a?"المملكة العربية السعودية":"Kingdom of Saudi Arabia"}</div>
                    <div class="cert-lab-name">${s.certSub}</div>
                  </div>
                </div>

                <div class="cert-doc-identity">
                  <span class="cert-badge">${s.certTitle}</span>
                  <div class="cert-code">BATCH: ${n.batchSerialNumber}</div>
                  <div class="cert-date">${s.certIssueDate}: ${new Date().toLocaleDateString(a?"ar-SA":"en-US")}</div>
                </div>
              </div>

              <!-- Specimen & Origin Metadata -->
              <div class="cert-meta-grid">
                <div class="cert-meta-cell">
                  <span class="cert-meta-label">${s.certBotanicalSource}</span>
                  <span class="cert-meta-val">${a?t.localNameAr:t.localNameEn}</span>
                  <span class="cert-meta-sub"><em>${t.botanicalName}</em> (${a?t.familyAr:t.familyEn})</span>
                </div>
                <div class="cert-meta-cell">
                  <span class="cert-meta-label">${s.certOriginTerroir}</span>
                  <span class="cert-meta-val">${a?e.nameAr:e.nameEn}</span>
                  <span class="cert-meta-sub">${a?e.regionAr:e.regionEn} | Alt: ${e.elevationMeters}m | pH: ${e.soilPh}</span>
                </div>
              </div>

              <!-- Extraction & Quality Diagnostics -->
              <div class="cert-kpi-row">
                <div class="cert-kpi-item">
                  <span class="kpi-label">${s.yieldVolume}</span>
                  <span class="kpi-num">${n.yieldMl} <small>ml</small></span>
                </div>
                <div class="cert-kpi-item">
                  <span class="kpi-label">${s.purityIndex}</span>
                  <span class="kpi-num">${n.purityIndexPct}%</span>
                </div>
                <div class="cert-kpi-item">
                  <span class="kpi-label">${s.terpeneIntegrity}</span>
                  <span class="kpi-num">${n.terpeneIntegrityPct}%</span>
                </div>
                <div class="cert-kpi-item">
                  <span class="kpi-label">${s.qualityGrade}</span>
                  <span class="kpi-grade">${a?n.qualityGradeAr:n.qualityGradeEn}</span>
                </div>
              </div>

              <!-- Compound Fractionation Profile -->
              <div class="cert-section-title">${s.certAnalysisSummary}</div>
              <div class="cert-compounds-list">
                ${o}
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
                  <div class="cert-sign-label">${s.certAuthorizedSign}</div>
                  <div class="cert-signature-art">أ. طارق ابوعشي</div>
                  <div class="cert-signer-name">${s.certSignatoryName}</div>
                  <div class="cert-signer-title">${s.certSignatoryTitle}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;this.container.innerHTML=l,this.bindModalEvents()}bindModalEvents(){const t=document.getElementById("cert-backdrop"),e=document.getElementById("cert-close-btn"),n=document.getElementById("cert-print-btn");e?.addEventListener("click",()=>this.close()),t?.addEventListener("click",i=>{i.target===t&&this.close()}),n?.addEventListener("click",()=>{window.print()})}close(){this.container.innerHTML=""}}class fx{currentSpecimen=Ir[0];currentLang="ar";sceneManager;massSpecRenderer;radarRenderer;certController;latestExtractionResult=null;currentLightingIndex=0;lightingModes=["daylight","greenhouse","bioluminescent"];constructor(){this.init()}init(){const t=document.getElementById("three-canvas-container");if(!t)throw new Error("Missing Three canvas container");this.sceneManager=new ox(t),this.sceneManager.loadPlant(this.currentSpecimen,1);const e=document.getElementById("canvas-mass-spec");e&&(this.massSpecRenderer=new cx(e),this.massSpecRenderer.setSpecimen(this.currentSpecimen));const n=document.getElementById("certificate-modal-mount");n&&(this.certController=new dx(n)),this.renderSpecimenSidebar(),this.renderSpecimenDossier(),this.renderTerroirAtlas(),this.runInitialSimulation(),this.bindEvents(),this.applyLanguage()}renderSpecimenSidebar(){const t=document.getElementById("specimens-list-container");if(!t)return;const e=this.currentLang==="ar";t.innerHTML=Ir.map(n=>{const i=n.id===this.currentSpecimen.id,s=n.primaryCompounds.map(a=>`<span class="bioactive-tag">${e?a.nameAr:a.nameEn}</span>`).join("");return`
        <div class="specimen-card ${i?"active":""}" data-plant-id="${n.id}">
          <div class="card-top-row">
            <span class="card-local-name">${e?n.localNameAr:n.localNameEn}</span>
            <span class="card-family-badge">${e?n.familyAr:n.familyEn}</span>
          </div>
          <div class="card-latin-name">${n.botanicalName}</div>
          <div class="card-bioactives-tags">${s}</div>
        </div>
      `}).join(""),t.querySelectorAll(".specimen-card").forEach(n=>{n.addEventListener("click",()=>{const i=n.dataset.plantId,s=Ir.find(a=>a.id===i);s&&s.id!==this.currentSpecimen.id&&(we.playUiClick(),this.switchSpecimen(s))})})}switchSpecimen(t){this.currentSpecimen=t,this.renderSpecimenSidebar(),this.renderSpecimenDossier();const e=document.getElementById("growth-slider"),n=e?Number(e.value)/100:1;this.sceneManager.loadPlant(t,n),this.massSpecRenderer&&this.massSpecRenderer.setSpecimen(t),this.runInitialSimulation()}renderSpecimenDossier(){const t=document.getElementById("specimen-dossier");if(!t)return;const e=this.currentLang==="ar",n=Ri[this.currentLang],i=Ur[this.currentSpecimen.iconicTerroirId],s=(e?this.currentSpecimen.biotechApplicationsAr:this.currentSpecimen.biotechApplicationsEn).map(l=>`<li>${l}</li>`).join(""),a=(e?this.currentSpecimen.traditionalUsesAr:this.currentSpecimen.traditionalUsesEn).map(l=>`<li>${l}</li>`).join("");t.innerHTML=`
      <div class="dossier-header-box">
        <h2 class="dossier-title">${e?this.currentSpecimen.localNameAr:this.currentSpecimen.localNameEn}</h2>
        <div class="dossier-botanical">${this.currentSpecimen.botanicalName}</div>
        <div class="dossier-badge-row">
          <span class="brand-badge">${e?this.currentSpecimen.familyAr:this.currentSpecimen.familyEn}</span>
          <span class="bioactive-tag">${e?this.currentSpecimen.endemismLevelAr:this.currentSpecimen.endemismLevelEn}</span>
        </div>
      </div>

      <!-- Radar Bioactivity Chart -->
      <div class="chart-card-box">
        <div class="dossier-sec-title">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          <span>${n.radarTitle}</span>
        </div>
        <canvas id="dossier-radar-canvas" class="radar-canvas" width="300" height="240"></canvas>
      </div>

      <!-- Terroir Section -->
      <div class="dossier-section">
        <div class="dossier-sec-title">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
          <span>${n.terroirOrigin}</span>
        </div>
        <div class="dossier-text">
          <strong>${e?i.nameAr:i.nameEn}</strong> (${e?i.regionAr:i.regionEn})
          <br>
          <small style="color: var(--mint-light);">${e?i.climateZoneAr:i.climateZoneEn}</small>
        </div>
      </div>

      <!-- Biotech Applications -->
      <div class="dossier-section">
        <div class="dossier-sec-title">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2v7.31L4 19a2 2 0 0 0 1.7 3h12.6a2 2 0 0 0 1.7-3l-6-9.69V2h-4z"/></svg>
          <span>${n.biotechApplications}</span>
        </div>
        <ul class="dossier-list">${s}</ul>
      </div>

      <!-- Ethnobotanical Heritage -->
      <div class="dossier-section">
        <div class="dossier-sec-title">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21a9 9 0 0 0 9-9c0-4.97-4.03-9-9-9s-9 4.03-9 9a9 9 0 0 0 9 9z"/></svg>
          <span>${n.traditionalHeritage}</span>
        </div>
        <ul class="dossier-list">${a}</ul>
      </div>
    `;const o=document.getElementById("dossier-radar-canvas");o&&(this.radarRenderer=new hx(o),this.radarRenderer.setSpecimen(this.currentSpecimen,this.currentLang))}renderTerroirAtlas(){const t=document.getElementById("terroir-cards-container");if(!t)return;const e=this.currentLang==="ar",n=Ri[this.currentLang];t.innerHTML=Object.values(Ur).map(i=>{const s=Ir.filter(a=>a.iconicTerroirId===i.id);return`
        <div class="terroir-card">
          <div class="terroir-card-header">
            <span class="terroir-name">${e?i.nameAr:i.nameEn}</span>
            <span class="terroir-multiplier-badge">+${Math.round((i.phytochemicalPotencyMultiplier-1)*100)}% Potency</span>
          </div>
          <div style="font-size: 0.78rem; color: var(--mint-light);">${e?i.regionAr:i.regionEn}</div>
          <p style="font-size: 0.8rem; line-height: 1.5; color: #cbd5e1;">${e?i.descriptionAr:i.descriptionEn}</p>
          
          <div class="terroir-meta-row">
            <div><strong>${n.elevation}:</strong> ${i.elevationMeters} m</div>
            <div><strong>${n.rainfall}:</strong> ${i.annualRainfallMm} mm</div>
            <div><strong>${n.averageTemp}:</strong> ${i.averageTempC} °C</div>
            <div><strong>${n.soilPh}:</strong> ${i.soilPh}</div>
          </div>

          <div style="margin-top: 8px; display: flex; gap: 8px; flex-wrap: wrap;">
            ${s.map(a=>`
              <button class="nav-tab-btn btn-view-plant-3d" data-plant-id="${a.id}" style="background: rgba(16,185,129,0.2); border: 1px solid var(--primary-emerald);">
                <span>🌿 ${e?a.localNameAr:a.localNameEn}</span>
              </button>
            `).join("")}
          </div>
        </div>
      `}).join(""),t.querySelectorAll(".btn-view-plant-3d").forEach(i=>{i.addEventListener("click",()=>{const s=i.dataset.plantId,a=Ir.find(o=>o.id===s);a&&(this.switchSpecimen(a),this.closeAllModals())})})}runInitialSimulation(){const t=Ur[this.currentSpecimen.iconicTerroirId],e={method:"supercritical_co2",temperatureC:42,pressureBar:220,durationMinutes:45,rawMaterialKg:5,solventFlowRateLpm:1.5},n=Th.simulate(this.currentSpecimen,t,e);this.latestExtractionResult=n,this.updateSimulationUi(n)}updateSimulationUi(t){const e=this.currentLang==="ar",n=document.getElementById("kpi-yield-val"),i=document.getElementById("kpi-purity-val"),s=document.getElementById("kpi-terpene-val"),a=document.getElementById("kpi-grade-val"),o=document.getElementById("txt-gcms-batch");n&&(n.innerHTML=`${t.yieldMl} <small>ml</small>`),i&&(i.innerHTML=`${t.purityIndexPct} <small>%</small>`),s&&(s.innerHTML=`${t.terpeneIntegrityPct} <small>%</small>`),a&&(a.innerText=e?t.qualityGradeAr:t.qualityGradeEn),o&&(o.innerText=t.batchSerialNumber)}bindEvents(){const t=document.getElementById("growth-slider"),e=document.getElementById("txt-growth-stage-name");t?.addEventListener("input",l=>{const c=Number(l.target.value),h=c/100;this.sceneManager.setGrowth(h);const u=Ri[this.currentLang];e&&(c<30?e.innerText=u.growthSprout:c<80?e.innerText=u.growthBudding:e.innerText=u.growthFullBloom),c===100&&we.playBloomChime()}),document.getElementById("hud-cam-reset")?.addEventListener("click",()=>{we.playUiClick(),this.sceneManager.setCameraPreset("reset")}),document.getElementById("hud-cam-macro")?.addEventListener("click",()=>{we.playUiClick(),this.sceneManager.setCameraPreset("macro")}),document.getElementById("hud-cam-canopy")?.addEventListener("click",()=>{we.playUiClick(),this.sceneManager.setCameraPreset("canopy")}),document.getElementById("hud-cam-stem")?.addEventListener("click",()=>{we.playUiClick(),this.sceneManager.setCameraPreset("stem")}),document.getElementById("hud-wireframe-toggle")?.addEventListener("click",l=>{we.playUiClick();const c=this.sceneManager.toggleWireframe();l.currentTarget.classList.toggle("active",c)}),document.getElementById("hud-autorotate-toggle")?.addEventListener("click",l=>{we.playUiClick();const c=this.sceneManager.toggleAutoRotate();l.currentTarget.classList.toggle("active",c)}),document.getElementById("hud-lighting-toggle")?.addEventListener("click",()=>{we.playUiClick(),this.currentLightingIndex=(this.currentLightingIndex+1)%this.lightingModes.length;const l=this.lightingModes[this.currentLightingIndex];this.sceneManager.setLightingMode(l);const c=document.getElementById("txt-hud-light"),h=Ri[this.currentLang];c&&(l==="daylight"?c.innerText=h.lightDaylight:l==="greenhouse"?c.innerText=h.lightGreenhouse:c.innerText=h.lightBioluminescent)}),document.querySelectorAll(".nav-tab-btn[data-tab]").forEach(l=>{l.addEventListener("click",()=>{const c=l.dataset.tab;we.playUiClick(),c==="herbarium"?(this.closeAllModals(),this.setActiveTab("herbarium")):c==="lab"?(this.openModal("modal-lab"),this.setActiveTab("lab")):c==="atlas"?(this.openModal("modal-atlas"),this.setActiveTab("atlas")):c==="certificate"&&this.openCertificate()})}),document.querySelectorAll(".btn-modal-close").forEach(l=>{l.addEventListener("click",()=>{this.closeAllModals(),this.setActiveTab("herbarium")})}),document.getElementById("btn-sound-toggle")?.addEventListener("click",()=>{const l=we.toggleMute();l?we.stopMountainWind():we.startMountainWind();const c=document.getElementById("icon-sound");c&&(c.style.opacity=l?"0.4":"1.0")}),document.getElementById("btn-theme-toggle")?.addEventListener("click",()=>{we.playUiClick(),document.body.classList.toggle("theme-light")}),document.getElementById("btn-lang-toggle")?.addEventListener("click",()=>{we.playUiClick(),this.currentLang=this.currentLang==="ar"?"en":"ar",this.applyLanguage()});const n=document.getElementById("range-temp"),i=document.getElementById("range-press"),s=document.getElementById("range-duration"),a=document.getElementById("range-mass"),o=document.getElementById("sim-method-select");n?.addEventListener("input",()=>{const l=document.getElementById("lbl-param-temp");l&&(l.innerText=`${n.value} °C`)}),i?.addEventListener("input",()=>{const l=document.getElementById("lbl-param-press");l&&(l.innerText=`${i.value} Bar`)}),s?.addEventListener("input",()=>{const l=document.getElementById("lbl-param-duration");l&&(l.innerText=`${s.value} ${this.currentLang==="ar"?"دقيقة":"min"}`)}),a?.addEventListener("input",()=>{const l=document.getElementById("lbl-param-mass");l&&(l.innerText=`${a.value} ${this.currentLang==="ar"?"كجم":"kg"}`)}),o?.addEventListener("change",()=>{o.value==="steam"?(n.value="100",i.value="1.5"):(n.value="42",i.value="220"),n.dispatchEvent(new Event("input")),i.dispatchEvent(new Event("input"))}),document.getElementById("btn-run-simulation")?.addEventListener("click",()=>{we.playWaterDroplet();const l=Ur[this.currentSpecimen.iconicTerroirId],c={method:o.value,temperatureC:Number(n.value),pressureBar:Number(i.value),durationMinutes:Number(s.value),rawMaterialKg:Number(a.value),solventFlowRateLpm:1.5},h=Th.simulate(this.currentSpecimen,l,c);this.latestExtractionResult=h,this.updateSimulationUi(h),this.massSpecRenderer&&this.massSpecRenderer.setSpecimen(this.currentSpecimen)})}openCertificate(){this.latestExtractionResult||this.runInitialSimulation();const t=Ur[this.currentSpecimen.iconicTerroirId];this.latestExtractionResult&&this.certController.open(this.currentSpecimen,t,this.latestExtractionResult,this.currentLang)}openModal(t){this.closeAllModals();const e=document.getElementById(t);e&&e.classList.remove("hidden")}closeAllModals(){document.querySelectorAll(".full-modal-overlay").forEach(t=>{t.classList.add("hidden")})}setActiveTab(t){document.querySelectorAll(".nav-tab-btn[data-tab]").forEach(e=>{const n=e.dataset.tab;e.classList.toggle("active",n===t)})}applyLanguage(){const t=this.currentLang==="ar",e=Ri[this.currentLang];document.documentElement.lang=this.currentLang,document.documentElement.dir=t?"rtl":"ltr";const n=document.getElementById("btn-lang-toggle");n&&(n.innerText=t?"English":"العربية");const i=document.getElementById("txt-app-title"),s=document.getElementById("txt-app-sub"),a=document.getElementById("txt-owner-credit");i&&(i.innerText=e.appTitle),s&&(s.innerText=e.appSubtitle),a&&(a.innerHTML=`<span>🌿</span><span>${e.ownerCredit}</span>`);const o=document.getElementById("txt-nav-herbarium"),l=document.getElementById("txt-nav-lab"),c=document.getElementById("txt-nav-atlas"),h=document.getElementById("txt-nav-cert");o&&(o.innerText=e.navSpecimens),l&&(l.innerText=e.navBiotechLab),c&&(c.innerText=e.navTerroirAtlas),h&&(h.innerText=e.navCertificate);const u=document.getElementById("txt-sidebar-title");u&&(u.innerText=t?"عينات الفلورا السعودية النموذجية":"Saudi Flora Specimen Herbarium");const d=document.getElementById("txt-hud-reset"),p=document.getElementById("txt-hud-macro"),_=document.getElementById("txt-hud-canopy"),g=document.getElementById("txt-hud-stem"),m=document.getElementById("txt-hud-wireframe"),f=document.getElementById("txt-hud-light"),S=document.getElementById("txt-hud-orbit");d&&(d.innerText=e.cameraReset),p&&(p.innerText=e.cameraMacro),_&&(_.innerText=e.cameraCanopy),g&&(g.innerText=e.cameraStem),m&&(m.innerText=e.wireframeMode),f&&(f.innerText=e.lightDaylight),S&&(S.innerText=e.autoRotate);const y=document.getElementById("txt-growth-label"),M=document.getElementById("txt-tick-sprout"),b=document.getElementById("txt-tick-budding"),C=document.getElementById("txt-tick-bloom");y&&(y.innerText=e.growthStageLabel),M&&(M.innerText=e.growthSprout),b&&(b.innerText=e.growthBudding),C&&(C.innerText=e.growthFullBloom);const A=document.getElementById("txt-sim-title"),w=document.getElementById("txt-sim-sub"),v=document.getElementById("txt-param-method"),x=document.getElementById("txt-param-temp"),L=document.getElementById("txt-param-press"),F=document.getElementById("txt-param-duration"),N=document.getElementById("txt-param-mass"),H=document.getElementById("txt-btn-simulate"),X=document.getElementById("txt-kpi-yield"),V=document.getElementById("txt-kpi-purity"),Y=document.getElementById("txt-kpi-terpene"),G=document.getElementById("txt-kpi-grade"),nt=document.getElementById("txt-gcms-title");A&&(A.innerText=e.simHeader),w&&(w.innerText=e.simSub),v&&(v.innerText=e.methodSelect),x&&(x.innerText=e.tempControl),L&&(L.innerText=e.pressureControl),F&&(F.innerText=e.durationControl),N&&(N.innerText=e.materialMassControl),H&&(H.innerText=e.runSimulation),X&&(X.innerText=e.yieldVolume),V&&(V.innerText=e.purityIndex),Y&&(Y.innerText=e.terpeneIntegrity),G&&(G.innerText=e.qualityGrade),nt&&(nt.innerText=e.massSpecTitle);const I=document.getElementById("txt-atlas-title"),R=document.getElementById("txt-atlas-sub");I&&(I.innerText=e.terroirTitle),R&&(R.innerText=e.terroirSub),this.renderSpecimenSidebar(),this.renderSpecimenDossier(),this.renderTerroirAtlas(),this.latestExtractionResult&&this.updateSimulationUi(this.latestExtractionResult)}}window.addEventListener("DOMContentLoaded",()=>{new fx});
