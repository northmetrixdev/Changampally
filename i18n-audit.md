# i18n Inventory & Audit Checklist

> Comprehensive inventory of all user-facing strings across the Changampally Healthcare website.
> Stack: Next.js 16 (App Router), React 19, Tailwind CSS.
> Languages: English (Default / `en`, `dir="ltr"`) & Arabic (`ar`, `dir="rtl"`).

---

## 1. Global, Layout & Common UI
- [x] Document Skip Nav: "Skip to main content" / "الانتقال إلى المحتوى الرئيسي"
- [x] Brand Name: "Changampally" / "تشانغامبالي"
- [x] Brand Tagline: "Centre of Excellence in Intricate Disorders" / "مركز التميز في الاضطرابات المعقدة"
- [x] Brand Full Description: "Changampally is a Kerala-based integrated healthcare institution rooted in the Vaidya family tradition since 1300 AD..."
- [x] Language Toggle Label: "العربية" (when viewing English), "English" (when viewing Arabic)
- [x] Language Toggle Aria-Label: "Switch language to Arabic" / "تغيير اللغة إلى الإنجليزية"
- [x] 404 Page Title: "Page Not Found" / "الصفحة غير موجودة"
- [x] 404 Page Subtitle: "The page you are looking for does not exist or has been moved." / "الصفحة التي تبحث عنها غير موجودة أو تم نقلها."
- [x] 404 Back to Home button: "Back to Home" / "العودة إلى الرئيسية"
- [x] Form submission success toast: "Thank you. Your message has been received." / "شكراً لك. تم استلام رسالتك بنجاح."
- [x] Form submission error toast: "An error occurred. Please try again or call us directly." / "حدث خطأ. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة."
- [x] Form validation required: "Please fill out this field." / "يرجى ملء هذا الحقل."

---

## 2. Navigation (`Navbar.tsx` & `NavLink.tsx`)
- [x] Nav Link: "Home" / "الرئيسية" (`ariaLabel`: "Go to Changampally home" / "الانتقال إلى رئيسية تشانغامبالي")
- [x] Nav Link: "About" / "من نحن" (`ariaLabel`: "About Changampally and our legacy" / "عن تشانغامبالي وإرثنا")
- [x] Nav Link: "Centres" / "مراكزنا" (`ariaLabel`: "Explore our centres of excellence" / "استكشف مراكز التميز لدينا")
- [x] Nav Link: "Departments" / "الأقسام" (`ariaLabel`: "View our Ayurvedic departments" / "استعرض أقسامنا الطبية والأيورفيدية")
- [x] Nav Link: "Doctors" / "الأطباء" (`ariaLabel`: "Meet our doctors and specialists" / "تعرف على أطبائنا وأخصائيينا")
- [x] Nav Link: "Blogs" / "المدونة" (`ariaLabel`: "Read our health and wellness blogs" / "اقرأ مقالاتنا الصحية والطبية")
- [x] Nav Link: "Contact" / "اتصل بنا" (`ariaLabel`: "Get in touch with us" / "تواصل معنا")
- [x] Desktop CTA Button: "Book Consultation" / "حجز استشارة"
- [x] Mobile Hamburger Aria Open: "Open menu" / "فتح القائمة"
- [x] Mobile Hamburger Aria Close: "Close menu" / "إغلاق القائمة"
- [x] Mobile Menu Drawer CTA: "Book Consultation" / "حجز استشارة"
- [x] Mobile Menu Drawer Language Switcher

---

## 3. Footer (`Footer.tsx`)
- [x] Logo link aria-label: "Changampally — home" / "تشانغامبالي — الرئيسية"
- [x] Logo image alt: "Changampally Medical Institute" / "معهد تشانغامبالي الطبي"
- [x] Tagline: "Centre of Excellence in Intricate Disorders" / "مركز التميز في الاضطرابات المعقدة"
- [x] Social link aria: "Follow Changampally on Instagram" / "تابع تشانغامبالي على إنستغرام"
- [x] Social link aria: "Like Changampally on Facebook" / "تابع تشانغامبالي على فيسبوك"
- [x] Social link aria: "Subscribe to Changampally on YouTube" / "اشترك في قناة تشانغامبالي على يوتيوب"
- [x] Column Heading: "Company" / "المؤسسة"
- [x] Link: "Home" / "الرئيسية"
- [x] Link: "About Us" / "من نحن"
- [x] Link: "Doctors" / "الأطباء"
- [x] Link: "Blogs" / "المدونة"
- [x] Link: "Contact Us" / "اتصل بنا"
- [x] Column Heading: "Our Centres" / "مراكزنا"
- [x] Link: "Changampally Remedium" / "تشانغامبالي ريميديوم"
- [x] Link: "Changampally Kaivalya" / "تشانغامبالي كايفاليا"
- [x] Link: "Ayurveda Wellness Centre" / "مركز العافية الأيورفيدي"
- [x] Link: "Changampally Vaidya Bhavan" / "تشانغامبالي فايديا بافان"
- [x] Link: "Changampally Sanjeevani" / "تشانغامبالي سانجيفاني"
- [x] Copyright text: "© {year} Changampally. All rights reserved." / "© {year} تشانغامبالي. جميع الحقوق محفوظة."
- [x] Legal link: "Privacy Policy" / "سياسة الخصوصية"
- [x] Legal link: "Terms of Service" / "شروط الخدمة"

---

## 4. Home Page (`app/page.tsx`)
### Hero Section (`HeroSection.tsx`)
- [x] Video background aria-label: "Changampally hero background" / "خلفية فيديو تشانغامبالي"
- [x] Logo image alt: "Changampally logo" / "شعار تشانغامبالي"
- [x] Main Headline line 1: "Where Centuries of" / "حيث تلتقي قرون من"
- [x] Main Headline line 2 (italic): "Healing Meet Today." / "الشفاء بالطب المعاصر."
- [x] Subheadline: "600 years of Ayurvedic heritage, integrated with modern oncology and rehabilitation." / "أكثر من 600 عام من الإرث الأيورفيدي، متكاملة مع طب الأورام وإعادة التأهيل الحديث."
- [x] Hero CTA button: "Begin Healing" / "ابدأ رحلة الشفاء"
- [x] Hero CTA aria-label: "Book a consultation" / "حجز استشارة"
- [x] Scroll Indicator label: "Discover" / "اكتشف"

### Our Story Section (`StorySection.tsx`)
- [x] Eyebrow: "Our Story" / "قصتنا"
- [x] Animated Headline: "Since 1300 AD, the Changampally family has preserved the purest forms of Ayurvedic healing." / "منذ عام 1300 ميلادي، حافظت عائلة تشانغامبالي على أنقى أشكال الشفاء الأيورفيدي."
- [x] Badge: "Est. 1300 AD" / "تأسست عام 1300 م"
- [x] Animated Subtitle: "Today, that unbroken heritage meets molecular precision — treating the whole person, not just the disease." / "واليوم، يلتقي هذا الإرث العريق بالدقة العلمية الحديثة — لنعالج الإنسان ككل، وليس مجرد المرض."
- [x] Pillar 1 Tab/Label: "Tradition" / "الأصالة"
- [x] Pillar 1 Title: "Traditional Ayurveda" / "الأيورفيدا التقليدية"
- [x] Pillar 1 Body: "Rooted in the Changampally Vaidya lineage — Panchakarma, classical formulations, and time-tested therapies passed down since 1300 AD." / "متجذرة في سلالة فايديا تشانغامبالي — علاجات بانتشاكارما وتركيبات كلاسيكية متوارثة عبر الأجيال منذ عام 1300 م."
- [x] Pillar 1 Pull Quote: "700 years of unbroken lineage." / "700 عام من الإرث الطبي المتواصل."
- [x] Pillar 2 Tab/Label: "Integration" / "التكامل"
- [x] Pillar 2 Title: "Integrated Modern Medicine" / "الطب الحديث المتكامل"
- [x] Pillar 2 Body: "Under the combined expertise of our Ayurvedic specialists and allopathic physicians, we address intricate disorders with an evidence based, dual approach." / "تحت إشراف نخبة من أخصائيي الأيورفيدا وأطباء الطب البشري العام، نعالج الاضطرابات المعقدة بنهج مزدوج قائم على الأدلة."
- [x] Pillar 2 Pull Quote: "Two traditions. One care plan." / "منهجان طبيان.. في خطة علاجية واحدة."
- [x] Pillar 3 Tab/Label: "Wholeness" / "الشمولية"
- [x] Pillar 3 Title: "Mental and Emotional Wellbeing" / "الصحة النفسية والعاطفية"
- [x] Pillar 3 Body: "Guided by our Ayurvedic psychiatric care, we provide counselling and psychotherapy — because healing is never complete without addressing the mind." / "بإشراف رعايتنا النفسية الأيورفيدية، نقدم الاستشارات والعلاج النفسي — لأن الشفاء لا يكتمل دون العناية بالعقل والروح."
- [x] Pillar 3 Pull Quote: "The mind is never an afterthought." / "الصحة النفسية أولويتنا دائماً."

### Service Spectrum Section (`ServiceSpectrum.tsx`)
- [x] Eyebrow: "What We Offer" / "ما نقدمه"
- [x] Node 1: "Centuries of Ayurveda" / "قرون من الأيورفيدا"
- [x] Node 2: "Modern Scientific Precision" / "الدقة العلمية الحديثة"
- [x] Convergence Title: "Integrated Medicine" / "الطب المتكامل"
- [x] Subtitle: "Two complete systems of evidence based science coming together. One unified, highly personalised care plan for intricate disorders." / "منظومتان علميتان متكاملتان تلتقيان معاً لتقديم خطة علاجية موحدة ومصممة خصيصاً للاضطرابات المستعصية."
- [x] Scroll hint: "Scroll to Reveal" / "مرر لأسفل للاستكشاف"

### Specialisations Interactive Section (`SpecialisationsInteractive.tsx`)
- [x] Eyebrow: "Specialisations" / "التخصصات"
- [x] Section Title: "33 Specialisations. 5 Centres." / "33 تخصصاً. 5 مراكز."
- [x] Section Subtitle: "From Oncology and Psychiatry to Panchakarma and Skin Regeneration — scientific healing across every system of the body and mind." / "من الأورام والطب النفسي إلى بانتشاكارما وتجديد البشرة — شفاء علمي يشمل كافة وظائف الجسد والنفس."
- [x] View All Link: "View All Departments →" / "استعراض جميع الأقسام ←"
- [x] Preview 1: "Oncology and Tumor Disorders" / "الأورام واضطرابات الخلايا الورمية"
- [x] Preview 2: "Mental Health and Behavioral Disorders" / "الصحة النفسية والاضطرابات السلوكية"
- [x] Preview 3: "Neurological and Neuro Psychiatric Disorders" / "الاضطرابات العصبية والنفسية العصبية"
- [x] Preview 4: "Autoimmune and Inflammatory Disorders" / "أمراض المناعة الذاتية والالتهابات"
- [x] Preview 5: "Reproductive and Fertility Care" / "رعاية الإنجاب والخصوبة"
- [x] Preview 6: "Dermatology, Aesthetic and Regenerative Care" / "الجلدية، والتجميل، والرعاية التجديدية"

### Trust Metrics (`TRUST_METRICS`)
- [x] Metric 1: "24×7" — "Emergency Care" / "رعاية طارئة"
- [x] Metric 2: "120" — "Beds" / "سريراً علاجياً"
- [x] Metric 3: "3" — "Core Specialties" / "تخصصات رئيسية"
- [x] Metric 4: "50+" — "Expert Practitioners" / "ممارساً وخبيراً طبياً"
- [x] Metric 5: "1300" — "Est. Year AD" / "عام التأسيس م"
- [x] Metric 6: "5" — "Centres Across Kerala" / "مراكز في أنحاء كيرلا"

### Physician Message Section
- [x] Eyebrow: "Chief Physician's Message" / "رسالة كبير الأطباء"
- [x] Quote Lead: "A person walking into your clinic should not be the reason to treat them. Treat only if you are sure that the person is safe in your hands." / "دخول المريض إلى عيادتك لا ينبغي أن يكون سبباً لعلاجه؛ بل عالجه فقط عندما تتيقن من أنه في أيدٍ أمينة."
- [x] Quote Body: "Safety is the first and most sacred aspect of any treatment. The doctorhood is not the promise of extended life but the accuracy in diagnosis, excellence in practical knowledge, and the compassionate touch to remove physical and mental suffering." / "السلامة هي أول وأقدس ركن في أي علاج. رسالة الطبيب ليست وعداً بإطالة العمر، بل دقة في التشخيص، وتفوق في المعرفة التطبيقية، ولمسة إنسانية حانية تزيل الألم الجسدي والمعاناة النفسية."
- [x] Doctor Name: "Dr. Jannathul Firdouse Changampally" / "د. جنة الفردوس تشانغامبالي"
- [x] Doctor Title: "Chief Consultant — Ayurveda Oncology Specialist" / "كبير المستشارين — أخصائي علاج الأورام بالأيورفيدا"

### Home Final CTA Section
- [x] Eyebrow: "Begin Today" / "ابدأ اليوم"
- [x] Title: "Get free second opinion from India’s leading specialists" / "احصل على رأي طبي ثانٍ مجاناً من كبار الخبراء في الهند"
- [x] Subtitle: "Per consultation handle (free)" / "استشارة أولية مجانية لكل حالة"
- [x] Button 1: "Book a Consultation" / "حجز استشارة"
- [x] Button 2: "Explore Our Centres" / "استكشف مراكزنا"

---

## 5. About Page (`app/about/page.tsx` & `AboutInteractiveLayout.tsx`)
- [x] Meta Title: "About Us | Changampally" / "من نحن | تشانغامبالي"
- [x] Meta Description: "Learn about the Changampally Vaidya family heritage — a lineage of healers since 1300 AD..."
- [x] Hero Eyebrow: "Est. 1300 AD · Kerala, India" / "تأسست عام 1300 م · كيرلا، الهند"
- [x] Hero Title: "The Vaidya Legacy" / "إرث عائلة فايديا"
- [x] Hero Description: "A lineage of healers preserving the purity of Ayurveda while integrating the precision of modern medicine across five centres." / "سلالة من الأطباء تحافظ على نقاء الأيورفيدا وتدمجها مع دقة الطب الحديث عبر خمسة مراكز علاجية متخصصة."
- [x] Timeline Section Title: "The Journey" / "مسيرة التاريخ"
- [x] Timeline Section Eyebrow: "A legacy spanning generations" / "إرث يمتد عبر أجيال متعاقبة"
- [x] Timeline 1300 AD: "The Foundation" / "التأسيس" — "The Changampally Vaidya family establishes its Ayurvedic practice in Kerala." / "عائلة تشانغامبالي فايديا تؤسس ممارستها الطبية الأيورفيدية في كيرلا."
- [x] Timeline 18th Century: "Refining the Craft" / "صقل المعرفة الطبية" — "Generations perfect classical formulations and Panchakarma therapies." / "أجيال متعاقبة تصقل التركيبات العلاجية الكلاسيكية وعلاجات بانتشاكارما."
- [x] Timeline Late 1900s: "The Modern Shift" / "التحول نحو الحداثة" — "Integrating clinical rigour while preserving ancient authenticity." / "دمج الدقة السريرية الحديثة مع الحفاظ التام على الأصالة العريقة."
- [x] Timeline Today: "Integrative Healing" / "الطب التكاملي اليوم" — "Five centres providing dual-qualified care across intricate disorders." / "خمسة مراكز تقدم رعاية مزدوجة التخصص لعلاج مختلف الاضطرابات المعقدة."
- [x] Philosophy Eyebrow: "Who We Are" / "هويتنا"
- [x] Philosophy Title: "Our Philosophy" / "فلسفتنا العلاجية"
- [x] Philosophy Subtitle: "Three pillars of integrity, mental healing, and medical precision directing every care plan." / "ثلاث ركائز تقوم على الأمانة، والشفاء النفسي، والدقة الطبية لتوجيه كل خطة علاجية."
- [x] Pillar 1: "Philosophy" / "الفلسفة" — "A sanctuary of scientific healing" / "ملاذ للشفاء العلمي" — "The Changampally Vaidya Family embraces alternative medicine alongside a logical approach to therapy. We introduce a legacy dating to 1300 AD with honesty, clinical rigour, and deep compassion." / "تتبنى عائلة تشانغامبالي فايديا الطب التكاملي إلى جانب نهج منطقي وعلمي في العلاج، حاملةً إرثاً يعود إلى 1300 م بأمانة ودقة سريرية وإنسانية بالغة."
- [x] Pillar 2: "Emotional Wellbeing" / "الصحة العاطفية" — "Healing lies in the mind." / "الشفاء ينبع من العقل." — "Medication alone isn't enough. Mental health is central to every Changampally care plan, guided by Ayurvedic psychiatry." / "الدواء وحده لا يكفي؛ فالصحة النفسية جزء محوري في كل خطة علاجية لدينا، بإشراف الطب النفسي الأيورفيدي."
- [x] Pillar 3: "Clinical Focus" / "التركيز السريري" — "Treating the Intricate" / "علاج الحالات المستعصية" — "We specialise in chronic ailments: Cancer Rehabilitation, Infertility, Psychiatric Disorders, Diabetic Foot and Ulcers, Autoimmune Conditions, and Child Development." / "نختص في الأمراض المزمنة: إعادة تأهيل مرضى الأورام، علاج العقم، الاضطرابات النفسية، القدم السكرية والقروح، أمراض المناعة الذاتية، ونمو الأطفال."
- [x] Guiding Principles Eyebrow: "Guiding Principles" / "المبادئ التوجيهية"
- [x] Guiding Principles Title: "The philosophy directing every consultation." / "النهج الذي يحكم كل استشارة طبية."
- [x] Tab 1: "Our Vision" / "رؤيتنا" — "Ayurveda, the ancient system of medicine from India, is known for its scientific healing approach. We envision a world where this wisdom is accessible, evidence informed, and integrated with modern care." / "تتميز الأيورفيدا بنهجها الاستشفائي الشامل. نتطلع إلى عالم تتاح فيه هذه الحكمة للجميع، مبنية على الأدلة ومتكاملة مع الطب الحديث."
- [x] Tab 2: "Our Mission" / "رسالتنا" — "We aim to bring Ayurveda to the forefront of modern medicine while preserving its authenticity — treating intricate chronic disorders with compassion, precision, and the accumulated wisdom of generations." / "نهدف إلى وضع الأيورفيدا في طليعة الرعاية الصحية الحديثة مع الحفاظ على أصالتها — لمعالجة الاضطرابات المزمنة برحمة ودقة وحكمة متوارثة."
- [x] Tab 3: "Mental Wellbeing" / "السلامة النفسية" — "Guided by Dr. Sajjad Changampally, MD (Ayurvedic Psychiatry), we provide counselling, psychotherapy, and Ayurvedic psychiatric care. Healing is never complete without looking after the mind." / "بإشراف د. سجاد تشانغامبالي، ماجستير الطب النفسي الأيورفيدي، نقدم جلسات العلاج والاستشارات النفسية المتخصصة."
- [x] Tab 4: "Safety First" / "السلامة أولاً" — "\"Treat only if you are sure that the person is safe in your hands.\" — Dr. Jannathul Firdouse. Safety and honesty are the most sacred aspects of our practice. We will never overstate outcomes." / "\"عالج فقط إذا تأكدت أن المريض آمن بين يديك.\" — د. جنة الفردوس. الأمان والصدق هما جوهر رسالتنا الطبية."
- [x] Specialists Eyebrow: "Our Specialists" / "أطباؤنا وأخصائيونا"
- [x] Specialists Title: "The Physician Team" / "الفريق الطبي"
- [x] Specialists Subtitle: "Dual-qualified specialists — Ayurvedic and allopathic — working together." / "أطباء يجمعون بين اختصاصات الأيورفيدا والطب الحديث، يعملون بروح الفريق الواحد."
- [x] Chief Physician In Their Own Words Eyebrow: "In Their Own Words" / "من أقوال أطبائنا"
- [x] Chief Physician Quote: "The doctorhood is not the promise of extended life but the accuracy in diagnosis, excellence in practical knowledge, and the compassionate touch." / "رسالة الطب ليست وعداً بإطالة الحياة، بل هي الدقة في التشخيص، والبراعة في المعرفة التطبيقية، واللمسة الإنسانية المخلصة."

---

## 6. Centres & Services Page (`app/services/page.tsx`)
- [x] Meta Title: "Centres of Excellence | Changampally" / "مراكز التميز | تشانغامبالي"
- [x] Hero Eyebrow: "Our Centres of Excellence" / "مراكز التميز لدينا"
- [x] Hero Title: "Care Across Kerala" / "رعاية طبية في أنحاء كيرلا"
- [x] Hero Subtitle: "Five centres — each distinct in specialisation and setting — united by one philosophy: treating the whole person with Ayurveda and modern medicine." / "خمسة مراكز — يتميز كل منها بتخصص وبيئة فريدة — توحدها رؤية واحدة: علاج الإنسان ككل بالأيورفيدا والطب الحديث."
- [x] Stat Box: "5 Centres Across Kerala" / "5 مراكز في أرجاء كيرلا"
- [x] Centre 1 Name: "Changampally Remedium" / "تشانغامبالي ريميديوم"
- [x] Centre 1 Tagline: "Integrated Healthcare" / "رعاية صحية متكاملة"
- [x] Centre 1 Location: "Kandanakam, Edappal" / "كاندانكام، إدابال"
- [x] Centre 1 Description: "Changampally Remedium is an integrated healthcare hospital delivering scientific care — combining Ayurveda and modern medicine..."
- [x] Centre 2 Name: "Changampally Kaivalya" / "تشانغامبالي كايفاليا"
- [x] Centre 2 Tagline: "Ayurveda Village and Retreat" / "قرية ومنتجع الأيورفيدا"
- [x] Centre 2 Location: "Peringode" / "بيرينغود"
- [x] Centre 2 Description: "Set in a serene, lush environment in Peringode, Kaivalya blends traditional Ayurvedic wisdom with modern comforts..."
- [x] Centre 3 Name: "Changampally Ayurveda Wellness Centre" / "مركز تشانغامبالي للعافية الأيورفيدية"
- [x] Centre 3 Tagline: "Heritage Retreat" / "منتجع الإرث الطبيعي"
- [x] Centre 3 Location: "Veu, Munnar" / "فيو، مونار"
- [x] Centre 3 Description: "Nestled in the highlands of Munnar, this heritage retreat combines the cultural richness of Ayurveda with contemporary wellness practices..."
- [x] Centre 4 Name: "Changampally Vaidya Bhavan" / "تشانغامبالي فايديا بافان"
- [x] Centre 4 Tagline: "Authentic Ayurvedic Heritage Centre" / "مركز التراث الأيورفيدي الأصيل"
- [x] Centre 4 Location: "Thirunavaya" / "ثيرونافايا"
- [x] Centre 4 Description: "Located in Thirunavaya, Vaidya Bhavan is rooted in authentic Ayurvedic tradition..."
- [x] Centre 5 Name: "Changampally Sanjeevani" / "تشانغامبالي سانجيفاني"
- [x] Centre 5 Tagline: "Scientific Healing Retreat" / "منتجع الاستشفاء العلمي"
- [x] Centre 5 Location: "Edappal" / "إدابال"
- [x] Centre 5 Description: "Sanjeevani blends traditional Ayurvedic care with modern amenities across a tranquil landscape in Edappal..."
- [x] Card Action Link: "View Centre →" / "استعراض المركز ←"
- [x] Bottom CTA Eyebrow: "Begin Your Journey" / "ابدأ رحلتك"
- [x] Bottom CTA Title: "Find the Centre Right for You" / "اختر المركز الأنسب لحالتك"
- [x] Bottom CTA Subtitle: "Each of our five centres offers a unique healing environment. Book a consultation and our team will guide you to the most suitable care." / "يقدم كل مركز من مراكزنا بيئة علاجية مخصصة. احجز استشارتك وسيرشدك فريقنا إلى الخيار الأمثل."
- [x] Bottom CTA Button: "Book a Consultation" / "حجز استشارة"

---

## 7. Centre Dynamic Route (`app/centres/[slug]/page.tsx` & `CentreDetailClient.tsx`)
- [x] Video aria-label: "{name} Video Tour" / "جولة فيديو في {name}"
- [x] Video control: "Pause video" / "إيقاف الفيديو مؤقتاً", "Play video" / "تشغيل الفيديو"
- [x] Audio control: "Mute audio" / "كتم الصوت", "Unmute audio" / "تشغيل الصوت"
- [x] Map link aria: "Open Google Maps location for {name}" / "فتح موقع {name} على خرائط جوجل"
- [x] Quick highlight: "Location:" / "الموقع:"
- [x] Quick highlight: "Direct Helpline:" / "خط المساعدة المباشر:"
- [x] Google Maps button text: "Google Maps ↗" / "خرائط جوجل ↗"
- [x] Centre Overview Eyebrow: "Centre Overview" / "نبذة عن المركز"
- [x] Overview Heading: "Scientific Healing and Authentic Ayurveda" / "استشفاء علمي وأيورفيدا أصيلة"
- [x] Facility Details Title: "Facility Details" / "تفاصيل المرفق"
- [x] Quick info card button: "Book Consultation" / "حجز استشارة"
- [x] Gallery Eyebrow: "Property Gallery" / "معرض صور المرفق"
- [x] Gallery Heading: "Explore {name}" / "استكشف {name}"
- [x] Gallery helper text: "Click any photo to view full screen & swipe through the gallery" / "انقر على أي صورة لعرضها بالشاشة الكاملة والتنقل بين الصور"
- [x] Expand photo badge: "Expand Photo ↗" / "تكبير الصورة ↗"
- [x] Photo aria-label: "View photo {idx} of {name}" / "عرض الصورة {idx} لـ {name}"
- [x] Lightbox close button aria: "Close photo preview" / "إغلاق معاينة الصورة"
- [x] Lightbox photo counter: "{name} — Photo {curr} of {total}" / "{name} — صورة {curr} من {total}"
- [x] Lightbox Prev aria: "Previous photo" / "الصورة السابقة"
- [x] Lightbox Next aria: "Next photo" / "الصورة التالية"
- [x] Specialisations Heading: "Specialised Clinical Focus" / "التخصصات السريرية المعتمدة"
- [x] Specialisations Subtitle: "Specialities and clinical units available at {name}." / "الوحدات العلاجية والتخصصات المتاحة في {name}."
- [x] All 28 unique clinical specialisations mapped to Arabic.

---

## 8. Departments Page (`app/departments/page.tsx`)
- [x] Meta Title: "Medical Departments | Changampally" / "الأقسام الطبية | تشانغامبالي"
- [x] Hero Title: "Medical Departments" / "الأقسام الطبية المتخصصة"
- [x] Hero Subtitle: "Our integrated approach combines the principles of Ayurveda with conventional modern medicine to manage complex diseases. The focus is on evidence based approaches to root out the causes of diseases." / "يجمع نهجنا التكاملي بين مبادئ الأيورفيدا والطب الحديث لعلاج الحالات المعقدة، مركزين على الحلول القائمة على الأدلة لاستئصال جذور المرض."
- [x] Stat Box: "14 Specialised Units" / "14 وحدة طبية متخصصة"
- [x] Department 1: Oncology (الأورام)
- [x] Department 2: Neurology (الأعصاب)
- [x] Department 3: Rheumatology and Immunology (الروماتيزم والمناعة)
- [x] Department 4: Endocrinology and Metabolism (الغدد الصماء والتمثيل الغذائي)
- [x] Department 5: Cardiology (القلب والأوعية الدموية)
- [x] Department 6: Gastroenterology (الجهاز الهضمي والكبد)
- [x] Department 7: Psychiatry and Psychology (الطب النفسي وعلم النفس)
- [x] Department 8: Pulmonology (الجهاز التنفسي والرئة)
- [x] Department 9: Orthopedics and Musculoskeletal (العظام والجهاز الحركي)
- [x] Department 10: Ophthalmology (العيون وجراحة البصر)
- [x] Department 11: Hematology (أمراض الدم)
- [x] Department 12: Dermatology (الجلدية والتناسلية)
- [x] Department 13: Dental Oncology (طب أسنان الأورام)
- [x] Department 14: Physical Medicine and Rehabilitation (الطب الطبيعي وإعادة التأهيل)
- [x] Label: "Conditions Treated" / "الحالات المعالجة"
- [x] 60+ individual medical condition names translated.
- [x] CTA Heading: "Need guidance on specialized care?" / "هل تحتاج إلى استشارة حول التخصص المناسب؟"
- [x] CTA Subtitle: "Request a preliminary assessment consultation to let our multidisciplinary team direct you to the optimal care path." / "اطلب استشارة تقييم أولي ليوجهك فريقنا الطبي المتكامل إلى مسار العلاج الأنسب لحالتك."
- [x] CTA Button: "Request Assessment" / "طلب تقييم طبي"

---

## 9. Doctors Page (`app/doctors/page.tsx`)
- [x] Meta Title: "Doctors & Specialists | Changampally" / "الأطباء والأخصائيون | تشانغامبالي"
- [x] Hero Eyebrow: "Our Physicians" / "طاقمنا الطبي"
- [x] Hero Title: "People Behind the Care" / "رواد الرعاية والشفاء"
- [x] Hero Subtitle: "At Changampally, our doctors are both Ayurvedic specialists and modern physicians — working together so every patient receives a unified, integrated care plan." / "في تشانغامبالي، يضم فريقنا أخصائيي الأيورفيدا وأطباء الطب الحديث معاً، لضمان حصول كل مريض على رعاية تكاملية متسقة."
- [x] Stat Box: "50+ Expert Practitioners" / "أكثر من 50 ممارساً وخبيراً"
- [x] Leadership Eyebrow: "Leadership" / "القيادة الطبية"
- [x] Leadership Heading: "Our Medical Leadership" / "فريق القيادة الطبية"
- [x] Featured Doctor 1: Dr. Jannathul Firdouse Changampally (د. جنة الفردوس تشانغامبالي)
- [x] Featured Doctor 2: Dr. Jibu Gurukkal Changampally (د. جيبو غوروكل تشانغامبالي)
- [x] Featured Doctor 3: Dr. Sajjad Changampally (د. سجاد تشانغامبالي)
- [x] Supporting Doctor 1: Dr. Najla Gurukkal (د. نجلاء غوروكل)
- [x] Supporting Doctor 2: Dr. Shani Nebil (د. شاني نبيل)
- [x] Supporting Doctor 3: Dr. Shahna MT (د. شاهنة م. ت.)
- [x] Supporting Doctor 4: Dr. Neethu (د. نيثو)
- [x] Supporting Doctor 5: Dr. Navya (د. نافيا)
- [x] Bios, credentials, centres, specialisations, taglines, and highlights all translated.
- [x] Guiding Principle Eyebrow: "Guiding Principle" / "المبدأ التوجيهي"
- [x] Guiding Principle Quote by Dr. Jannathul Firdaus translated.
- [x] CTA: "Ready to speak with one of our physicians?" / "هل ترغب في التحدث إلى أحد أطبائنا؟"
- [x] CTA Button: "Book a Consultation" / "حجز استشارة طبية"

---

## 10. Blogs Page (`app/blogs/page.tsx`)
- [x] Meta Title: "Insights & Articles | Changampally" / "المدونة والمقالات | تشانغامبالي"
- [x] Hero Eyebrow: "Clinical Insights & Articles" / "مقالات ودراسات سريرية"
- [x] Hero Title: "All Articles" / "جميع المقالات"
- [x] Hero Subtitle: "Find clinically grounded perspectives, research summaries, and therapeutic wisdom to navigate modern psychosomatic and physical wellbeing." / "استكشف أحدث الرؤى السريرية، وملخصات الأبحاث، والحكمة الطبية لمواكبة التحديات النفسية والجسدية المعاصرة."
- [x] Search input placeholder: "Search articles..." / "ابحث في المقالات..."
- [x] Category Filter: "All Articles" / "جميع المقالات"
- [x] Category Filter: "Ayurvedic Psychiatry" / "الطب النفسي الأيورفيدي"
- [x] Category Filter: "Cyber Psychology" / "علم النفس الرقمي"
- [x] Category Filter: "Integrative Oncology" / "طب الأورام التكاملي"
- [x] Category Filter: "Mental Well-being" / "الصحة النفسية"
- [x] Header: "Latest Blog" / "أحدث المقالات"
- [x] Counter: "{count} article / articles" / "{count} مقال / مقالات"
- [x] Empty state: "No articles found matching your query." / "لم يتم العثور على مقالات مطابقة لبحثك."
- [x] Reset filters button: "Reset filters" / "إعادة ضبط التصفية"
- [x] Card Action: "Read Story →" / "قراءة المقال ←"

---

## 11. Blog Post Detail (`app/blogs/[slug]/page.tsx` & `lib/blogs.ts`)
- [x] Meta Title: "{title} — Changampally Insights"
- [x] Back Button Top: "← Back to All Articles" / "← العودة إلى جميع المقالات"
- [x] Post Meta: "{date} • {readTime} • By {author} ({role})"
- [x] Full article translation for "Nomophobia and the Digital Mind: Insights from Cyber Psychology"
  - Arabic Title: "النوموفوبيا والعقل الرقمي: رؤى من علم النفس السيبراني"
  - Subtitle: "كيف يغير فرط الاتصال الرقمي الضبط العاطفي، وكيف يعيد الطب النفسي الأيورفيدي التوازن المعرفي."
  - 10 structured content blocks (headings, paragraphs, quotes).
- [x] Author Box Header: "Written by" / "كُتب بواسطة"
- [x] Author Bio translated.
- [x] Back Button Bottom: "Back to Knowledge Posts" / "العودة إلى المقالات العلمية"

---

## 12. Contact Page (`app/contact/page.tsx`)
- [x] Meta Title: "Contact Us | Changampally" / "اتصل بنا | تشانغامبالي"
- [x] Eyebrow: "Enquiry Form" / "نموذج الاستفسار"
- [x] Heading: "Send an Enquiry" / "إرسال استفسار"
- [x] Subtitle: "We'll respond within one working day." / "سنرد عليك خلال يوم عمل واحد."
- [x] Form Label: "Full Name *" / "الاسم الكامل *"
- [x] Form Placeholder: "Your full name" / "اسمك الكامل"
- [x] Form Label: "Email *" / "البريد الإلكتروني *"
- [x] Form Placeholder: "your@email.com" / "name@example.com"
- [x] Form Label: "Phone Number" / "رقم الهاتف"
- [x] Form Placeholder: "Phone number" / "رقم الهاتف"
- [x] Country code dropdown: 60+ countries translated into Arabic country names
- [x] Form Label: "Subject *" / "الموضوع *"
- [x] Select placeholder: "Select an enquiry type" / "اختر نوع الاستفسار"
- [x] Subject Option 1: "Request a Consultation" / "طلب استشارة طبية"
- [x] Subject Option 2: "Cancer Care Enquiry" / "استفسار عن رعاية مرضى الأورام"
- [x] Subject Option 3: "Mental Wellbeing and Counselling" / "الصحة النفسية وجلسات الإرشاد"
- [x] Subject Option 4: "General Information" / "معلومات عامة"
- [x] Form Label: "Message *" / "الرسالة *"
- [x] Form Placeholder: "How can we assist you?" / "كيف يمكننا مساعدتك؟"
- [x] Privacy Note: "Your privacy is respected. All inquiries are strictly confidential." / "نحترم خصوصيتك بالكامل. جميع الاستفسارات تخضع للسرية التامة."
- [x] Submit Button: "Send Enquiry" / "إرسال الاستفسار"
- [x] Submitting Button text: "Sending..." / "جارٍ الإرسال..."
- [x] Success Message: "Thank you. Your enquiry has been submitted successfully." / "شكراً لك. تم إرسال استفسارك بنجاح."
- [x] Contact Info Column 1: "Main Centre" / "المركز الرئيسي"
- [x] Address line 1: "Changampally Remedium Integrated Healthcare" / "تشانغامبالي ريميديوم للرعاية الصحية المتكاملة"
- [x] Address line 2: "Kandanakam, Edappal, Malappuram Dt., Kerala, India - 679582" (Direction protected with `<bdi>`)
- [x] Contact Info Column 2: "Medical Helpline" / "خط المساعدة الطبي"
- [x] Helpline note: "For urgent medical queries, speak directly with our care team." / "للاستفسارات الطبية العاجلة، تحدث مباشرة مع فريق الرعاية لدينا."
- [x] Hours note: "Available Mon–Sat, 9am–6pm" / "متاح من الاثنين إلى السبت، 9 صباحاً – 6 مساءً"

---

## 13. Direction & Latin Brand / Number Protection (`dir="ltr"` & `<bdi>`)
- [x] Phone numbers (`+91 9072666104`, `+91 9072 666 105`, `+91 70251 29232`, etc.) wrapped in `<bdi dir="ltr">`
- [x] Email addresses (`remediumchangampally@gmail.com`) wrapped in `<bdi dir="ltr">`
- [x] Website URLs (`https://www.changampally.com`) wrapped in `<bdi dir="ltr">`
- [x] Latin brand marks (`Changampally`, `Remedium`, `Kaivalya`, `Sanjeevani`, `Vaidya Bhavan`, `CRIH`) wrapped in `<bdi>` where mixed in Arabic prose.

---

## 14. Non-Translated Elements (Flagged per constraints)
- [x] Text baked into logo image (`/assets/Changampally Remedium_logo.png`): "Changampally Remedium Integrated Healthcare". Per constraint, images are NOT recreated; logo is preserved.
- [x] Video files (`/assets/hero-bg.mp4`, `/videos/properties/*.mp4`): Background cinematic footage without spoken dialogue.
- [x] Medical qualification acronyms (`MBBS`, `BAMS`, `BDS`, `MD`, `PGDAN`, `CSAMT`): Kept in standard medical international notation alongside Arabic descriptors.
- [x] Western Arabic numerals (0-9): Used by default behind single config flag `USE_WESTERN_DIGITS = true`.
