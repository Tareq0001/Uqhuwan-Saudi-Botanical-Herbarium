# أُقْـحُـوان | معمل التقنية الحيوية النباتية ومستخلصات الفلورا السعودية ثلاثي الأبعاد
## UQHUWAN | Botanical Biotechnology & Saudi Flora Herbarium 3D

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-047857?style=for-the-badge&logo=github)](https://tareq0001.github.io/Uqhuwan-Saudi-Botanical-Herbarium/)
[![Built with Three.js](https://img.shields.io/badge/Three.js-WebGL_3D-10b981?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646cff?style=for-the-badge&logo=vite)](https://vitejs.dev/)

---

### 🌿 نظرة عامة على المشروع (Project Overview)
**أُقْـحُـوان (UQHUWAN)** هي منصة تقنية حيوية ومعشبة رقمية تفاعلية ثلاثية الأبعاد متقدمة، مكرسة لاستكشاف الفلورا السعودية الوطنية المستوطنة والنادرة، ونمذجة نموها وتفتحها العضوي إجرائياً، ومحاكاة عمليات الاستخلاص الكيميائي الحيوي للزيوت العطرية والمركبات الفعالة علاجياً (Therapeutic Phytochemicals).

**تصميم وهندسة معمارية النظم:** أ. طارق ابوعشي (Tareq Abuashi)  
**الرابط المباشر:** [https://tareq0001.github.io/Uqhuwan-Saudi-Botanical-Herbarium/](https://tareq0001.github.io/Uqhuwan-Saudi-Botanical-Herbarium/)

---

### ✨ الركائز المعمارية والتقنية (Core Architectural Pillars)

#### 1. محرك النمو والتفتح العضوي ثلاثي الأبعاد (Procedural 3D Growth & Bloom Engine)
- مبني بالكامل على مكتبة **Three.js** مع محاكاة التفرع الكسوري والهندسة الإجرائية للأشجار والنباتات دون الاعتماد على نماذج ثابتة جاهزة.
- شريط نمو تفاعلي انسيابي مدعوم بمكتبة **GSAP** (من الإنبات المبكر 0% ⟵ التفرع والتبرعم 50% ⟵ الإزهار والتفتح الكامل 100%).
- تتبع دقيق لخمسة أصناف نباتية سعودية أصيلة:
  1. **عرعر عسير الجبلي المعمر** (*Juniperus procera*) - الفصيلة السروية.
  2. **ورد الطائف الملكي ثلاثيني البتلات** (*Rosa damascena trigintipetala*) - الفصيلة الوردية.
  3. **خزامى الجوف البرية العطرية** (*Lavandula coronopifolia*) - الفصيلة الشفوية.
  4. **يسر العلا وبان الجزيرة العربية** (*Moringa peregrina*) - الفصيلة البانية.
  5. **قرم البحر الأحمر والفرسان** (*Avicennia marina*) - الفصيلة الأقنثية (نبات المانجروف الملحي).
- هالة جسيمات حبوب اللقاح الحية (Pollen Aura Particles) مع تأثير نسيم الرياح وتمايل الفروع.
- أوضاع كاميرا احترافية: عدسة الماكرو المقربة للبتلات، منظر التاج العلوي، هيكل الجذع، والعرض الشبكي (Wireframe Mode).
- ثلاثة أنماط إضاءة سينمائية: ضوء النهار الطبيعي، طيف الحاضنة الزجاجية الحيوية، والتوهج الحيوي الليلي (Bioluminescence).

#### 2. محاكي الاستخلاص الفيتوكيميائي المتقدم (Biotechnology Extraction Simulator)
- **التقطير المائي بالبخار الحيوي (Bio-Steam Distillation)** و**استخلاص ثنائي أكسيد الكربون فوق الحرج (Supercritical scCO₂)**.
- ضبط ديناميكي لدرجات الحرارة (°C)، الضغط (Bar)، زمن الدورة (Min)، وكتلة العينة الحيوية (kg).
- حسابات فورية لحجم الزيت المستخلص (ml)، كفاءة الاستخلاص (%)، مؤشر النقاوة الكيميائية، سلامة التربينات العطرية، واستهلاك الطاقة.
- **كروماتوغرافيا الغاز ومطيافية الكتلة (GC-MS)**: رسم طيفي تفاعلي يعرض قمم المركبات المتطايرة مع أوقات الاحتباس (Retention Times).
- **رادار النشاط الحيوي خماسي المحاور (5-Axis Bioactivity Radar)**: قياس مؤشرات مقاومة الميكروبات، مضادات الأكسدة، مضادات الالتهاب، التأثير العصبي الحسي، وترميم الأنسجة.

#### 3. أطلس الجغرافيا الحيوية والتربة السعودية (Saudi Terroir Atlas)
- تحليل تأثير الارتفاع الشاهق (جبال السروات 2850م، مرتفعات الهدا والشفا 2200م)، الرقم الهيدروجيني للتربة (Soil pH)، الإشعاع الشمسي، ومعدل هطول الأمطار على تركيز المستخلصات الفعالة.

#### 4. محرك الصوت الإجرائي (Web Audio API Botanical Acoustic Engine)
- توليف صوت نسيم الرياح عبر أوراق العرعر الجبلي بواسطة مولد ضوضاء إجرائي مرشح الترددات (Filtered Pink Noise with LFO).
- أصوات قطرات التكثيف أثناء التقطير ورنين التفتح العضوي الفضائي خماسي النغمات (Pentatonic Chime).

#### 5. نظام الشهادات الفيتوكيمائية الرسمية (Phytosanitary Certification Dossier)
- توليد وتوثيق شهادة تحليل معتمدة برمز دفعة مشفر (Cryptographic Batch Code)، وختم QR تفاعلي، وجدول تفصيلي للمركبات المستخلصة جاهز للطباعة الفورية (`window.print()`) مع احتفالية المؤثرات الحركية (Confetti).

---

### 💻 التطوير والتشغيل المحلي (Local Development)

```bash
# استنساخ المستودع
git clone https://github.com/Tareq0001/Uqhuwan-Saudi-Botanical-Herbarium.git

# الانتقال لمجلد المشروع
cd Uqhuwan-Saudi-Botanical-Herbarium

# تثبيت الحزم البرمجية
npm install

# تشغيل بيئة التطوير
npm run dev

# بناء النسخة الإنتاجية
npm run build
```

---

### 🏛️ حقوق الملكية والاعتماد (Ownership & Accreditation)
- **المطور وكبير معمارية النظم:** أ. طارق ابوعشي
- **المؤسسة:** منصة أُقْـحُـوان للتقنية الحيوية والفلورا السعودية
- جميع الحقوق محفوظة © 2026
