/**
 * @file lib/i18n/data.ts
 * Localized dataset helpers for Centres, Departments, Doctors, Blogs, Timeline, and Form constants.
 */

import type { Locale } from "./config";
import type { Centre, TimelineEvent, TeamMember, ServiceItem, NavItem, FooterLinkGroup } from "@/lib/types";
import { CENTRES } from "@/lib/constants";
import { BLOG_POSTS, type BlogPost } from "@/lib/blogs";

// ── 1. Centres of Excellence ──────────────────────────────────────────────────

export const AR_CENTRES: Centre[] = [
  {
    id: "centre-remedium",
    anchor: "remedium",
    name: "تشانغامبالي ريميديوم",
    tagline: "الرعاية الصحية المتكاملة",
    location: "كاندانكام، إدابال",
    phone: "+91 9072 666 104",
    mapUrl: "https://maps.app.goo.gl/vi4HHRfwggfezT4H8?g_st=iw",
    description:
      "تشانغامبالي ريميديوم هو مستشفى رعاية صحية متكامل يقدم رعاية علمية تجمع بين حكمة الأيورفيدا ودقة الطب الحديث. تشمل الوحدات المتخصصة إعادة تأهيل مرضى السرطان (طب الأورام الأيورفيدي)، والصحة النفسية عبر الإرشاد والعلاج النفسي، ووحدة العناية التجميلية لما بعد العلاج، وإدارة شاملة لاضطرابات نمط الحياة، والعقم، وأمراض الأطفال، والأمراض المزمنة.",
    specialisations: [
      "الأورام واضطرابات الخلايا الورمية",
      "الصحة النفسية والاضطرابات السلوكية",
      "اضطرابات الغدد الصماء والتمثيل الغذائي",
      "أمراض القلب والكلى والجهاز التنفسي",
      "الاضطرابات النادرة ومتعددة الأجهزة",
      "رعاية الإنجاب والخصوبة",
      "الاضطرابات العصبية والنفسية العصبية",
      "أمراض المناعة الذاتية والالتهابات",
      "اضطرابات الجهاز الهضمي والكبد والقنوات الصفراوية",
      "اضطرابات الجهاز الحركي والعظام والأمراض التنكسية",
      "الجلدية، والتجميل، والرعاية التجديدية",
      "العناية بالقدم السكرية والجروح المزمنة",
      "الرعاية التخصصية المصاحبة لعلاج الأورام",
    ],
  },
  {
    id: "centre-kaivalya",
    anchor: "kaivalya",
    name: "تشانغامبالي كايفاليا",
    tagline: "قرية ومنتجع الأيورفيدا",
    location: "بيرينغود",
    phone: "+91 70251 29232",
    mapUrl: "https://maps.app.goo.gl/ofgbngCLBzoTULCd8?g_st=iw",
    description:
      "يقع كايفاليا وسط طبيعة خضراء هادئة في بيرينغود، ويجمع بين حكمة الأيورفيدا العريقة ووسائل الراحة الحديثة. يوفر المركز ملاذاً هادئاً للشفاء العلمي، والعلاجات المخصصة، والوجبات الأيورفيدية الصحية، والإقامة المريحة — صُمم خصيصاً للراغبين في التعافي وتجديد الحيوية العميقة.",
    specialisations: [
      "علاج التوتر والضغوط النفسية",
      "علاج السمنة وتصحيح التمثيل الغذائي",
      "علاج الأرق واضطرابات النوم",
      "علاج الصداع النصفي والصداع المزمن",
      "برامج التخلص من السموم الموسمية",
    ],
  },
  {
    id: "centre-wellness",
    anchor: "wellness",
    name: "مركز تشانغامبالي للعافية الأيورفيدية",
    tagline: "منتجع الإرث الطبيعي",
    location: "فيو، مونار",
    phone: "+91 9072 666 107",
    mapUrl: "https://maps.app.goo.gl/vi4HHRfwggfezT4H8?g_st=iw",
    description:
      "يقع هذا المنتجع التراثي بين مرتفعات مونار الساحرة، ويجمع بين الثراء الثقافي للأيورفيدا وممارسات العافية المعاصرة. يستمتع النزلاء ببرامج علاجية مخصصة، ووجبات أيورفيدية، وجلسات يوجا وتأمل في بيئة هادئة صُممت خصيصاً للشفاء العلمي وتجديد النشاط.",
    specialisations: [
      "باقات التجديد الصحي العلمي",
      "علاجات مكافحة الشيخوخة",
      "علاجات العناية بالبشرة والجمال الأيورفيدي",
      "برامج تعزيز المناعة والحيوية",
      "رعاية العظام وصحة العمود الفقري",
    ],
  },
  {
    id: "centre-vaidyabhavan",
    anchor: "vaidyabhavan",
    name: "تشانغامبالي فايديا بافان",
    tagline: "مركز التراث الأيورفيدي الأصيل",
    location: "ثيرونافايا",
    phone: "+91 8921 043851",
    mapUrl: "https://maps.app.goo.gl/3Ec9CY7wVB6MkndW6?g_st=iw",
    description:
      "يقع فايديا بافان في ثيرونافايا، متجذراً في التقاليد الأيورفيدية الأصيلة. تعكس عمارته التراثية الإرث الخالد لسلالة تشانغامبالي. يقدم المركز رعاية شخصية من أطباء ذوي خبرة طويلة، ووجبات أيورفيدية، وإقامة مريحة — من الغرف القياسية إلى الغرف المكيفة ذات الشرفات الخاصة.",
    specialisations: [
      "علاج اضطرابات الجهاز التنفسي",
      "علاجات بانتشاكارما التقليدية",
      "طب النساء وصحة المرأة في الأيورفيدا",
      "برامج رعاية كبار السن",
      "علاجات صحة العقل والجسد",
    ],
  },
  {
    id: "centre-sanjeevani",
    anchor: "sanjeevani",
    name: "تشانغامبالي سانجيفاني",
    tagline: "منتجع الاستشفاء العلمي",
    location: "إدابال",
    phone: "+91 85473 53585",
    mapUrl: "https://maps.app.goo.gl/iGEE6kCLjLrQvp3e6?g_st=iw",
    description:
      "يمزج سانجيفاني بين الرعاية الأيورفيدية التقليدية والمرافق العصرية عبر مساحات طبيعية هادئة في إدابال. يضم المركز أجنحة علاجية متخصصة، وحدائق أعشاب غناء، وجناحاً للتأمل، ومنتجعاً صحياً علاجياً — مقدماً علاجات مخصصة للصحة الجسدية والنفسية في بيئة طبيعية متناغمة.",
    specialisations: [
      "رعاية المفاصل وعلاج التهاب المفاصل",
      "علاج اضطرابات الجهاز الهضمي",
      "إدارة وعلاج أمراض نمط الحياة",
      "علاجات الأمراض الجلدية",
      "برامج التخلص من السموم وتجديد الحيوية",
    ],
  },
];

export function getCentres(locale: Locale): Centre[] {
  return locale === "ar" ? AR_CENTRES : CENTRES;
}

export function getCentreBySlug(slug: string, locale: Locale): Centre | undefined {
  const centres = getCentres(locale);
  return centres.find((c) => c.anchor === slug);
}

// ── 2. Navigation Links ───────────────────────────────────────────────────────

export function getNavLinks(locale: Locale): NavItem[] {
  if (locale === "ar") {
    return [
      { label: "الرئيسية", href: "/", ariaLabel: "الانتقال إلى رئيسية تشانغامبالي" },
      { label: "من نحن", href: "/about", ariaLabel: "عن تشانغامبالي وإرثنا" },
      { label: "مراكزنا", href: "/services", ariaLabel: "استكشف مراكز التميز لدينا" },
      { label: "الأقسام", href: "/departments", ariaLabel: "استعرض أقسامنا الطبية" },
      { label: "الأطباء", href: "/doctors", ariaLabel: "تعرف على أطبائنا وأخصائيينا" },
      { label: "المدونة", href: "/blogs", ariaLabel: "اقرأ مقالاتنا الصحية والطبية" },
      { label: "اتصل بنا", href: "/contact", ariaLabel: "تواصل معنا" },
    ];
  }
  return [
    { label: "Home", href: "/", ariaLabel: "Go to Changampally home" },
    { label: "About", href: "/about", ariaLabel: "About Changampally and our legacy" },
    { label: "Centres", href: "/services", ariaLabel: "Explore our centres of excellence" },
    { label: "Departments", href: "/departments", ariaLabel: "View our Ayurvedic departments" },
    { label: "Doctors", href: "/doctors", ariaLabel: "Meet our doctors and specialists" },
    { label: "Blogs", href: "/blogs", ariaLabel: "Read our health and wellness blogs" },
    { label: "Contact", href: "/contact", ariaLabel: "Get in touch with us" },
  ];
}

// ── 3. Footer Link Groups ─────────────────────────────────────────────────────

export function getFooterLinkGroups(locale: Locale): FooterLinkGroup[] {
  if (locale === "ar") {
    return [
      {
        heading: "المؤسسة",
        links: [
          { label: "الرئيسية", href: "/" },
          { label: "من نحن", href: "/about" },
          { label: "الأطباء", href: "/doctors" },
          { label: "المدونة", href: "/blogs" },
          { label: "اتصل بنا", href: "/contact" },
        ],
      },
      {
        heading: "مراكزنا",
        links: [
          { label: "تشانغامبالي ريميديوم", href: "/services#remedium" },
          { label: "تشانغامبالي كايفاليا", href: "/services#kaivalya" },
          { label: "مركز العافية الأيورفيدي", href: "/services#wellness" },
          { label: "تشانغامبالي فايديا بافان", href: "/services#vaidyabhavan" },
          { label: "تشانغامبالي سانجيفاني", href: "/services#sanjeevani" },
        ],
      },
    ];
  }
  return [
    {
      heading: "",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Doctors", href: "/doctors" },
        { label: "Blogs", href: "/blogs" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      heading: "Our Centres",
      links: [
        { label: "Changampally Remedium", href: "/services#remedium" },
        { label: "Changampally Kaivalya", href: "/services#kaivalya" },
        { label: "Ayurveda Wellness Centre", href: "/services#wellness" },
        { label: "Changampally Vaidya Bhavan", href: "/services#vaidyabhavan" },
        { label: "Changampally Sanjeevani", href: "/services#sanjeevani" },
      ],
    },
  ];
}

// ── 4. Departments ────────────────────────────────────────────────────────────

export interface DepartmentItem {
  id: string;
  name: string;
  description: string;
  diseases: string[];
  gradient: string;
}

export const EN_DEPARTMENTS: DepartmentItem[] = [
  {
    id: "oncology",
    name: "Oncology",
    description: "Specializes in the diagnosis, supportive treatment, and rehabilitation of various types of cancers.",
    diseases: ["Brain tumor", "Breast cancer", "Cervical cancer", "Ovarian cancer", "Lung cancer", "Blood cancer", "Prostate cancer"],
    gradient: "radial-gradient(circle at 0% 0%, hsla(320, 15%, 96%, 1) 0%, transparent 60%), radial-gradient(circle at 100% 100%, hsla(320, 10%, 93%, 1) 0%, transparent 60%)"
  },
  {
    id: "neurology",
    name: "Neurology",
    description: "Specializes in diagnosing and treating disorders of the nervous system including the brain, spinal cord and nerves.",
    diseases: ["Stroke", "Memory disorders", "Dementia", "Alzheimer's", "Parkinson's", "Multiple sclerosis (MS)", "Epilepsy"],
    gradient: "radial-gradient(circle at 100% 0%, hsla(310, 20%, 97%, 1) 0%, transparent 60%), radial-gradient(circle at 0% 100%, hsla(320, 15%, 92%, 1) 0%, transparent 60%)"
  },
  {
    id: "rheumatology",
    name: "Rheumatology and Immunology",
    description: "This department specializes in diagnosing and treating diseases that affect the joints, muscles, bones and disorders of the immune system.",
    diseases: ["Rheumatoid arthritis (RA)", "Systemic lupus erythematosus (SLE)", "Type 1 diabetes", "Psoriasis"],
    gradient: "radial-gradient(circle at 50% 0%, hsla(330, 15%, 95%, 1) 0%, transparent 60%), radial-gradient(circle at 0% 50%, hsla(310, 10%, 93%, 1) 0%, transparent 60%)"
  },
  {
    id: "endocrinology",
    name: "Endocrinology and Metabolism",
    description: "This department specializes in the diagnosis and treatment of disorders related to hormones, glands, and the body's metabolism.",
    diseases: ["Diabetes mellitus", "Polycystic ovary syndrome (PCOS)", "Metabolic syndrome", "Thyroid disorders", "Osteoporosis"],
    gradient: "radial-gradient(circle at 0% 100%, hsla(320, 15%, 96%, 1) 0%, transparent 60%), radial-gradient(circle at 100% 0%, hsla(300, 10%, 92%, 1) 0%, transparent 60%)"
  },
  {
    id: "cardiology",
    name: "Cardiology",
    description: "Treats heart and vascular system disorders, focusing on maintaining cardiovascular health.",
    diseases: ["Hypertension", "Coronary Artery Disease (CAD)", "Arrhythmias", "Peripheral artery disease (PAD)"],
    gradient: "radial-gradient(circle at 100% 100%, hsla(340, 15%, 95%, 1) 0%, transparent 60%), radial-gradient(circle at 0% 0%, hsla(320, 5%, 92%, 1) 0%, transparent 60%)"
  },
  {
    id: "gastroenterology",
    name: "Gastroenterology",
    description: "This department focuses on the diagnosis and treatment of disorders affecting the digestive system, including the esophagus, stomach, intestine, liver, gallbladder, and pancreas.",
    diseases: ["Irritable bowel syndrome (IBS)", "Crohn's disease", "GERD", "Celiac disease"],
    gradient: "radial-gradient(circle at 0% 50%, hsla(315, 15%, 96%, 1) 0%, transparent 60%), radial-gradient(circle at 100% 50%, hsla(325, 10%, 93%, 1) 0%, transparent 60%)"
  },
  {
    id: "psychiatry",
    name: "Psychiatry and Psychology",
    description: "An integrated approach to diagnosing and treating mental, emotional, and behavioral disorders, focusing on both psychological well-being and psychiatric conditions.",
    diseases: ["Major depressive disorder", "Generalized anxiety", "Bipolar disorder", "OCD", "PTSD", "Eating disorders"],
    gradient: "radial-gradient(circle at 50% 100%, hsla(310, 18%, 95%, 1) 0%, transparent 60%), radial-gradient(circle at 50% 0%, hsla(330, 8%, 92%, 1) 0%, transparent 60%)"
  },
  {
    id: "pulmonology",
    name: "Pulmonology",
    description: "Pulmonology is a medical specialty that deals with diseases involving the respiratory tract. It focuses on the diagnosis and treatment of lung conditions.",
    diseases: ["Chronic obstructive pulmonary disease (COPD)", "Asthma", "Complicated lung diseases"],
    gradient: "radial-gradient(circle at 0% 0%, hsla(320, 10%, 97%, 1) 0%, transparent 60%), radial-gradient(circle at 100% 50%, hsla(300, 12%, 93%, 1) 0%, transparent 60%)"
  },
  {
    id: "orthopedics",
    name: "Orthopedics and Musculoskeletal",
    description: "This department specializes in the diagnosis, treatment, and prevention of disorders affecting bones, joints, ligaments, tendons, muscles, and nerves.",
    diseases: ["Osteoarthritis (OA)", "Ankylosing spondylitis", "Gout", "Sciatica"],
    gradient: "radial-gradient(circle at 100% 0%, hsla(325, 15%, 96%, 1) 0%, transparent 60%), radial-gradient(circle at 0% 100%, hsla(340, 10%, 92%, 1) 0%, transparent 60%)"
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology",
    description: "The Ophthalmology department specializes in eyes and visual system. Our experts diagnose, treat, and prevent a wide range of eye conditions, from common refractive errors to complex diseases.",
    diseases: ["Myopia (Nearsightedness)", "Astigmatism", "Glaucoma", "Inflammatory Eye Diseases"],
    gradient: "radial-gradient(circle at 0% 100%, hsla(310, 20%, 96%, 1) 0%, transparent 60%), radial-gradient(circle at 100% 0%, hsla(320, 10%, 93%, 1) 0%, transparent 60%)"
  },
  {
    id: "hematology",
    name: "Hematology",
    description: "The Hematology Department specializes in the diagnosis and treatment of blood disorders, including conditions like Thrombocytopenia, Chronic Anemia, and various other blood-related ailments.",
    diseases: ["Thrombocytopenia", "Chronic anemia", "Other blood disorders"],
    gradient: "radial-gradient(circle at 50% 50%, hsla(330, 15%, 97%, 1) 0%, transparent 60%), radial-gradient(circle at 0% 0%, hsla(310, 8%, 92%, 1) 0%, transparent 60%)"
  },
  {
    id: "dermatology",
    name: "Dermatology",
    description: "The Dermatology Department specializes in the diagnosis and treatment of skin, hair, and nail conditions. This includes common issues like acne and eczema, as well as more complex diseases.",
    diseases: ["Atopic dermatitis (Eczema)", "Psoriasis", "Chronic urticaria"],
    gradient: "radial-gradient(circle at 100% 100%, hsla(320, 18%, 95%, 1) 0%, transparent 60%), radial-gradient(circle at 0% 50%, hsla(340, 10%, 93%, 1) 0%, transparent 60%)"
  },
  {
    id: "dental",
    name: "Dental Oncology",
    description: "A Dental Oncology department specializes in the oral health care of cancer patients. This involves the diagnosis and management of cancers affecting the teeth, gums, tongue, jaw, and surrounding tissues.",
    diseases: ["Oral cancer supportive care", "Dental rehabilitation"],
    gradient: "radial-gradient(circle at 0% 50%, hsla(310, 15%, 96%, 1) 0%, transparent 60%), radial-gradient(circle at 50% 100%, hsla(330, 10%, 92%, 1) 0%, transparent 60%)"
  },
  {
    id: "rehab",
    name: "Physical Medicine and Rehabilitation",
    description: "Helps you regain strength, mobility, and quality of life. We provide personalized care for a wide range of musculoskeletal, neurological and pain related conditions.",
    diseases: ["Interventional Pain Management", "Neurorehabilitation", "Critical Care Rehab", "Sports Medicine"],
    gradient: "radial-gradient(circle at 100% 50%, hsla(325, 15%, 97%, 1) 0%, transparent 60%), radial-gradient(circle at 0% 0%, hsla(315, 10%, 92%, 1) 0%, transparent 60%)"
  }
];

export const AR_DEPARTMENTS: DepartmentItem[] = [
  {
    id: "oncology",
    name: "الأورام",
    description: "يختص بالتشخيص والرعاية الداعمة وإعادة تأهيل مختلف أنواع السرطان عبر برامج تكاملية قائمة على الأدلة.",
    diseases: ["أورام الدماغ", "سرطان الثدي", "سرطان عنق الرحم", "سرطان المبيض", "سرطان الرئة", "سرطان الدم (اللوكيميا)", "سرطان البروستاتا"],
    gradient: "radial-gradient(circle at 0% 0%, hsla(320, 15%, 96%, 1) 0%, transparent 60%), radial-gradient(circle at 100% 100%, hsla(320, 10%, 93%, 1) 0%, transparent 60%)"
  },
  {
    id: "neurology",
    name: "الأعصاب",
    description: "يختص بتشخيص وعلاج اضطرابات الجهاز العصبي بما في ذلك الدماغ والحبل الشوكي والأعصاب الطرفية.",
    diseases: ["السكتة الدماغية", "اضطرابات الذاكرة", "الخرف", "ألزهايمر", "باركنسون", "التصلب المتعدد (MS)", "الصرع"],
    gradient: "radial-gradient(circle at 100% 0%, hsla(310, 20%, 97%, 1) 0%, transparent 60%), radial-gradient(circle at 0% 100%, hsla(320, 15%, 92%, 1) 0%, transparent 60%)"
  },
  {
    id: "rheumatology",
    name: "الروماتيزم والمناعة",
    description: "يختص بتشخيص وعلاج الأمراض التي تصيب المفاصل والعضلات والعظام واعتلالات الجهاز المناعي.",
    diseases: ["التهاب المفاصل الروماتويدي (RA)", "الذئبة الحمامية الجهازية (SLE)", "السكري من النوع الأول", "الصدفية"],
    gradient: "radial-gradient(circle at 50% 0%, hsla(330, 15%, 95%, 1) 0%, transparent 60%), radial-gradient(circle at 0% 50%, hsla(310, 10%, 93%, 1) 0%, transparent 60%)"
  },
  {
    id: "endocrinology",
    name: "الغدد الصماء والتمثيل الغذائي",
    description: "يختص بتشخيص وعلاج الاضطرابات المرتبطة بالهرمونات والغدد الحيوية وعمليات الأيض في الجسم.",
    diseases: ["داء السكري", "متلازمة تكيس المبايض (PCOS)", "المتلازمة الأيضية", "اضطرابات الغدة الدرقية", "هشاشة العظام"],
    gradient: "radial-gradient(circle at 0% 100%, hsla(320, 15%, 96%, 1) 0%, transparent 60%), radial-gradient(circle at 100% 0%, hsla(300, 10%, 92%, 1) 0%, transparent 60%)"
  },
  {
    id: "cardiology",
    name: "القلب والأوعية الدموية",
    description: "يعالج اضطرابات القلب والجهاز الوعائي، مع التركيز على تعزيز صحة الدورة الدموية والوقاية من المضاعفات.",
    diseases: ["ارتفاع ضغط الدم", "مرض الشريان التاجي (CAD)", "اضطراب نظم القلب", "مرض الشرايين المحيطية (PAD)"],
    gradient: "radial-gradient(circle at 100% 100%, hsla(340, 15%, 95%, 1) 0%, transparent 60%), radial-gradient(circle at 0% 0%, hsla(320, 5%, 92%, 1) 0%, transparent 60%)"
  },
  {
    id: "gastroenterology",
    name: "الجهاز الهضمي والكبد",
    description: "يركز على تشخيص وعلاج اضطرابات الجهاز الهضمي بما في ذلك المريء والمعدة والأمعاء والكبد والمرارة والبنكرياس.",
    diseases: ["متلازمة القولون العصبي (IBS)", "داء كرون", "الارتجاع المعدي المريئي (GERD)", "الداء البطني (السيلياك)"],
    gradient: "radial-gradient(circle at 0% 50%, hsla(315, 15%, 96%, 1) 0%, transparent 60%), radial-gradient(circle at 100% 50%, hsla(325, 10%, 93%, 1) 0%, transparent 60%)"
  },
  {
    id: "psychiatry",
    name: "الطب النفسي وعلم النفس",
    description: "نهج تكاملي لتشخيص وعلاج الاضطرابات النفسية والعاطفية والسلوكية، بالتركيز على التوازن النفسي والعصبي.",
    diseases: ["اضطراب الاكتئاب الحاد", "القلق العام", "الاضطراب ثنائي القطب", "الوسواس القهري (OCD)", "اضطراب ما بعد الصدمة (PTSD)", "اضطرابات الأكل"],
    gradient: "radial-gradient(circle at 50% 100%, hsla(310, 18%, 95%, 1) 0%, transparent 60%), radial-gradient(circle at 50% 0%, hsla(330, 8%, 92%, 1) 0%, transparent 60%)"
  },
  {
    id: "pulmonology",
    name: "الجهاز التنفسي والرئة",
    description: "تخصص طبي يُعنى بأمراض الجهاز التنفسي، ويركز على تشخيص وعلاج أمراض الرئة والمسالك التنفسية المزمنة.",
    diseases: ["مرض الانسداد الرئوي المزمن (COPD)", "الربو الشعبي", "أمراض الرئة المعقدة"],
    gradient: "radial-gradient(circle at 0% 0%, hsla(320, 10%, 97%, 1) 0%, transparent 60%), radial-gradient(circle at 100% 50%, hsla(300, 12%, 93%, 1) 0%, transparent 60%)"
  },
  {
    id: "orthopedics",
    name: "العظام والجهاز الحركي",
    description: "يختص بتشخيص وعلاج والوقاية من اضطرابات العظام والمفاصل والأربطة والأوتار والعضلات والأعصاب.",
    diseases: ["خشونة والتهاب المفاصل (OA)", "التهاب الفقار اللاصق", "النقرس", "عرق النسا"],
    gradient: "radial-gradient(circle at 100% 0%, hsla(325, 15%, 96%, 1) 0%, transparent 60%), radial-gradient(circle at 0% 100%, hsla(340, 10%, 92%, 1) 0%, transparent 60%)"
  },
  {
    id: "ophthalmology",
    name: "العيون وجراحة البصر",
    description: "يختص بالعيون والجهاز البصري. يقوم خبراؤنا بتشخيص وعلاج عيوب الإبصار الشائعة والأمراض البصرية المعقدة.",
    diseases: ["قصر النظر", "الاستجماتيزم (اللابؤرية)", "المياه الزرقاء (الجلوكوما)", "أمراض العين الالتهابية"],
    gradient: "radial-gradient(circle at 0% 100%, hsla(310, 20%, 96%, 1) 0%, transparent 60%), radial-gradient(circle at 100% 0%, hsla(320, 10%, 93%, 1) 0%, transparent 60%)"
  },
  {
    id: "hematology",
    name: "أمراض الدم",
    description: "يختص بتشخيص وعلاج اضطرابات الدم، بما في ذلك نقص الصفائح الدموية وفقر الدم المزمن واعتلالات الدم الأخرى.",
    diseases: ["نقص الصفائح الدموية", "فقر الدم المزمن (الأنيميا)", "اعتلالات الدم الأخرى"],
    gradient: "radial-gradient(circle at 50% 50%, hsla(330, 15%, 97%, 1) 0%, transparent 60%), radial-gradient(circle at 0% 0%, hsla(310, 8%, 92%, 1) 0%, transparent 60%)"
  },
  {
    id: "dermatology",
    name: "الجلدية والتناسلية",
    description: "يختص بتشخيص وعلاج أمراض الجلد والشعر والأظافر، بما يشمل حب الشباب والأكزيما والأمراض المناعية الجلدية.",
    diseases: ["التهاب الجلد التأتبي (الأكزيما)", "الصدفية", "الشرى المزمن (الأرتيكاريا)"],
    gradient: "radial-gradient(circle at 100% 100%, hsla(320, 18%, 95%, 1) 0%, transparent 60%), radial-gradient(circle at 0% 50%, hsla(340, 10%, 93%, 1) 0%, transparent 60%)"
  },
  {
    id: "dental",
    name: "طب أسنان الأورام",
    description: "يختص برعاية صحة الفم لمرضى السرطان، بما يشمل تشخيص وإدارة الأورام المؤثرة على الأسنان واللثة والفكين والأنسجة المحيطة.",
    diseases: ["الرعاية الداعمة لسرطان الفم", "إعادة تأهيل الأسنان والفكين"],
    gradient: "radial-gradient(circle at 0% 50%, hsla(310, 15%, 96%, 1) 0%, transparent 60%), radial-gradient(circle at 50% 100%, hsla(330, 10%, 92%, 1) 0%, transparent 60%)"
  },
  {
    id: "rehab",
    name: "الطب الطبيعي وإعادة التأهيل",
    description: "يساعدك على استعادة القوة والحركة وجودة الحياة عبر خطط رعاية مخصصة للحالات العضلية والعصبية المزمنة والآلام.",
    diseases: ["علاج الألم التداخلي", "إعادة التأهيل العصبي", "تأهيل العناية المركزة", "الطب الرياضي وإصابات الملاعب"],
    gradient: "radial-gradient(circle at 100% 50%, hsla(325, 15%, 97%, 1) 0%, transparent 60%), radial-gradient(circle at 0% 0%, hsla(315, 10%, 92%, 1) 0%, transparent 60%)"
  }
];

export function getDepartments(locale: Locale): DepartmentItem[] {
  return locale === "ar" ? AR_DEPARTMENTS : EN_DEPARTMENTS;
}

// ── 5. Doctors & Physicians ───────────────────────────────────────────────────

export interface DoctorItem {
  id: string;
  name: string;
  credentials: string;
  role: string;
  tagline: string;
  bio: string;
  centre: string;
  speciality: string;
  highlights?: string[];
  image: string;
  accentColor?: string;
}

export const EN_FEATURED_DOCTORS: DoctorItem[] = [
  {
    id: "team-1",
    name: "Dr. Jannathul Firdouse Changampally",
    credentials: "BSc, BAMS",
    role: "Chief Consultant — Ayurveda Oncology Consultant",
    tagline: "Chief Consultant and Ayurveda Oncology Consultant",
    bio: "A distinguished figure in Ayurvedic oncology with 30+ years of expertise. Dr. Firdouse served as a cancer consultant at Nims Super Specialty Hospital, Trivandrum for 12 years and is a member of the Open Source Drug Discovery (OSDD) initiative.",
    centre: "Changampally Remedium, Edappal",
    speciality: "Ayurveda Oncology",
    highlights: [
      "30+ years of Ayurvedic Oncology experience",
      "12-year tenure at Nims Super Specialty Hospital, Trivandrum",
      "Member, Open Source Drug Discovery (OSDD) initiative",
    ],
    accentColor: "#33181C",
    image: "/images/doctors/Dr_Firdouse.png",
  },
  {
    id: "team-2",
    name: "Dr. Jibu Gurukkal Changampally",
    credentials: "MD Physician",
    role: "Allopathic General Physician and Medicine Manufacturer",
    tagline: "Allopathic Physician and Ayurvedic Medicine Manufacturer",
    bio: "An accomplished Allopathic General Physician with 13 years of experience. Actively engaged in Ayurvedic medicine manufacturing and export at Changampally Vaidya Bhavan and Vedic Age in Thirunnavaya. Medical Director at Orchid Medicity.",
    centre: "Changampally Vaidya Bhavan, Thirunavaya",
    speciality: "Allopathic General Medicine",
    highlights: [
      "13 years of allopathic general medicine practice",
      "Medicine Manufacturer and Exporter — Changampally Vaidya Bhavan and Vedic Age",
      "Medical Director, Orchid Medicity (Malappuram and Changaramkulam)",
    ],
    accentColor: "#4A2832",
    image: "/images/doctors/DR.jibu_Gurukkal.png",
  },
  {
    id: "team-3",
    name: "Dr. Sajjad Changampally",
    credentials: "MD (Ayurvedic Psychiatry)",
    role: "Ayurvedic Psychiatrist and Managing Director, Happymoon",
    tagline: "Ayurvedic Psychiatrist and Mental Health Specialist",
    bio: "An esteemed Ayurvedic Psychiatrist offering compassionate care at Changampally Vaidya Bhavan, Thirunnavaya. Managing Director of Happymoon, advocating scientific mental health approaches. Secretary, Ayurveda Medical Association of India, Ponnani. Researcher on mobile phone addiction and contemporary mental health challenges.",
    centre: "Changampally Vaidya Bhavan, Thirunavaya",
    speciality: "Ayurvedic Psychiatry",
    highlights: [
      "MD in Ayurvedic Psychiatry",
      "Managing Director, Happymoon — scientific mental health platform",
      "Secretary, Ayurveda Medical Association of India, Ponnani",
    ],
    accentColor: "#5A3040",
    image: "/images/doctors/Dr_Sajad.png",
  },
];

export const AR_FEATURED_DOCTORS: DoctorItem[] = [
  {
    id: "team-1",
    name: "د. جنة الفردوس تشانغامبالي",
    credentials: "بكالوريوس علوم، بكالوريوس طب وجراحة أيورفيدا",
    role: "كبير المستشارين — استشاري علاج الأورام بالأيورفيدا",
    tagline: "كبير المستشارين واستشاري علاج الأورام بالأيورفيدا",
    bio: "قامة طبية رائدة في علاج الأورام بالأيورفيدا بخبرة تتجاوز 30 عاماً. شغل منصب استشاري الأورام في مستشفى نيمز للتخصصات الدقيقة بتريفاندروم لمدة 12 عاماً، وهو عضو في مبادرة اكتشاف الأدوية مفتوحة المصدر (OSDD).",
    centre: "تشانغامبالي ريميديوم، إدابال",
    speciality: "طب الأورام الأيورفيدي",
    highlights: [
      "أكثر من 30 عاماً من الخبرة في طب الأورام الأيورفيدي",
      "12 عاماً استشارياً في مستشفى نيمز للتخصصات الدقيقة",
      "عضو مبادرة اكتشاف الأدوية مفتوحة المصدر (OSDD)",
    ],
    accentColor: "#33181C",
    image: "/images/doctors/Dr_Firdouse.png",
  },
  {
    id: "team-2",
    name: "د. جيبو غوروكل تشانغامبالي",
    credentials: "طبيب بشري (MD Physician)",
    role: "طبيب عام ومصنّع أدوية أيورفيدية",
    tagline: "طبيب بشري عام ومصنّع ومصدر للأدوية الأيورفيدية",
    bio: "طبيب بشري عام متميز بخبرة سريرية تمتد لـ 13 عاماً. يشارك بفاعلية في تصنيع وتصدير الأدوية الأيورفيدية في فايديا بافان وفيديك إيدج في ثيرونافايا. المدير الطبي لمجموعة أوركيد ميديسيتي.",
    centre: "تشانغامبالي فايديا بافان، ثيرونافايا",
    speciality: "الطب البشري العام",
    highlights: [
      "13 عاماً من الممارسة السريرية في الطب البشري العام",
      "مُصنّع ومُصدّر للأدوية — تشانغامبالي فايديا بافان وفيديك إيدج",
      "المدير الطبي لمستشفى أوركيد ميديسيتي",
    ],
    accentColor: "#4A2832",
    image: "/images/doctors/DR.jibu_Gurukkal.png",
  },
  {
    id: "team-3",
    name: "د. سجاد تشانغامبالي",
    credentials: "ماجستير (الطب النفسي الأيورفيدي)",
    role: "أخصائي الطب النفسي الأيورفيدي والمدير التنفيذي لـ Happymoon",
    tagline: "أخصائي الطب النفسي الأيورفيدي والصحة النفسية",
    bio: "أخصائي طب نفسي أيورفيدي مرموق يقدم رعاية إنسانية راقية في فايديا بافان بثيرونافايا. العضو المنتدب لمنصة هابي مون لدعم الصحة النفسية علمياً. سكرتير جمعية الأيورفيدا الطبية الهندية في بوناني. باحث في إدمان الهواتف الذكية وتحديات العصر النفسية.",
    centre: "تشانغامبالي فايديا بافان، ثيرونافايا",
    speciality: "الطب النفسي الأيورفيدي",
    highlights: [
      "ماجستير في الطب النفسي الأيورفيدي",
      "المدير التنفيذي لمنصة Happymoon للصحة النفسية العلمية",
      "أمين سر الجمعية الطبية الأيورفيدية في الهند، بوناني",
    ],
    accentColor: "#5A3040",
    image: "/images/doctors/Dr_Sajad.png",
  },
];

export const EN_OTHER_DOCTORS: DoctorItem[] = [
  {
    id: "team-4",
    name: "Dr. Najla Gurukkal",
    credentials: "BDS",
    role: "Dental Surgeon",
    tagline: "Dental Surgeon",
    bio: "A skilled Dental Surgeon ensuring complete oral health and hygiene as part of our integrated healthcare approach.",
    centre: "Changampally Remedium, Edappal",
    speciality: "Dentist",
    image: "/images/doctors/Dr.Najila_Gurukkal.png",
  },
  {
    id: "team-5",
    name: "Dr. Shani Nebil",
    credentials: "BAMS, MSc",
    role: "Senior Ayurvedic Physician",
    tagline: "Senior Ayurvedic Physician",
    bio: "A dedicated Senior Ayurvedic Physician providing traditional consultations and integrated health management.",
    centre: "Changampally Vaidya Bhavan, Thirunavaya",
    speciality: "Ayurveda Physician",
    image: "/images/doctors/Dr_shani.png",
  },
  {
    id: "team-5b",
    name: "Dr. Shahna MT",
    credentials: "BAMS, PGDAN, CSAMT",
    role: "Ayurveda Physician",
    tagline: "Ayurveda Physician & Medical Communications",
    bio: "Ayurveda physician with a clinical focus on psychosomatic disorders, gut health, clinical nutrition, dermatology, and musculoskeletal disorders. Certified in Ayurveda Nutrition and Smriti Ayurveda Meditation Therapy, with an emphasis on individualized, integrative patient care.",
    centre: "Changampally Remedium, Edappal",
    speciality: "Ayurveda Physician",
    image: "/images/doctors/Dr_shana.png",
  },
  {
    id: "team-6",
    name: "Dr. Neethu",
    credentials: "BAMS",
    role: "Resident Medical Officer",
    tagline: "Resident Medical Officer",
    bio: "Experienced Ayurvedic practitioner dedicated to holistic patient care and personalized treatment protocols as Resident Medical Officer.",
    centre: "Changampally Vaidya Bhavan, Thirunavaya",
    speciality: "Resident Medical Officer",
    image: "/images/doctors/Dr.Neethu.png",
  },
  {
    id: "team-7",
    name: "Dr. Navyasree E M",
    credentials: "BAMS, PGDM – Clinical Pathology (Ay), CCCT",
    role: "Oncology Consultant",
    tagline: "Quality Coordinator (QC) & Junior Research Fellow (JRF)",
    bio: "An Ayurvedic physician with 5 years of clinical experience, serving as JRF and Quality Coordinator/NABH Coordinator at Changampally, with clinical focus on women’s health, rheumatic & lifestyle disorders, and cosmetology.",
    centre: "Changampally Remedium, Edappal",
    speciality: "Oncology Consultant",
    image: "/images/doctors/Dr_navya.png",
  },
];

export const AR_OTHER_DOCTORS: DoctorItem[] = [
  {
    id: "team-4",
    name: "د. نجلاء غوروكل",
    credentials: "بكالوريوس جراحة الأسنان (BDS)",
    role: "جراحة أسنان",
    tagline: "جراحة أسنان معتمدة",
    bio: "جراحة أسنان متميزة تضمن صحة الفم والأسنان الشاملة كجزء أساسي من نهجنا الطبي التكاملي.",
    centre: "تشانغامبالي ريميديوم، إدابال",
    speciality: "طب وجراحة الأسنان",
    image: "/images/doctors/Dr.Najila_Gurukkal.png",
  },
  {
    id: "team-5",
    name: "د. شاني نبيل",
    credentials: "بكالوريوس طب وجراحة أيورفيدا، ماجستير علوم",
    role: "طبيبة أيورفيدا أولى",
    tagline: "طبيبة أيورفيدية استشارية",
    bio: "طبيبة أيورفيدا أولى متمرسة تقدم استشارات علاجية تقليدية وإدارة صحية متكاملة للحالات المزمنة.",
    centre: "تشانغامبالي فايديا بافان، ثيرونافايا",
    speciality: "طبيبة أيورفيدا",
    image: "/images/doctors/Dr_shani.png",
  },
  {
    id: "team-5b",
    name: "د. شاهنة م. ت.",
    credentials: "بكالوريوس طب وجراحة أيورفيدا، دبلوم تغذية، CSAMT",
    role: "طبيبة أيورفيدا",
    tagline: "طبيبة أيورفيدا والاتصال الطبي",
    bio: "طبيبة أيورفيدا مع تركيز سريري على الاضطرابات النفسجسدية، وصحة الجهاز الهضمي، والتغذية السريرية، والأمراض الجلدية، واضطرابات الجهاز العضلي الهيكلي. معتمدة في التغذية الأيورفيدية والعلاج بالتأمل الأيورفيدي سمريتي، مع التركيز على الرعاية التكاملية الفردية للمرضى.",
    centre: "تشانغامبالي ريميديوم، إدابال",
    speciality: "طبيبة أيورفيدا",
    image: "/images/doctors/Dr_shana.png",
  },
  {
    id: "team-6",
    name: "د. نيثو",
    credentials: "بكالوريوس طب وجراحة أيورفيدا (BAMS)",
    role: "مسؤول طبي مقيم",
    tagline: "مسؤول طبي مقيم",
    bio: "ممارسة أيورفيدية ذات خبرة واسعة، مكرسة جهودها للرعاية الشاملة للمرضى وبروتوكولات العلاج الفردية كمسؤول طبي مقيم.",
    centre: "تشانغامبالي فايديا بافان، ثيرونافايا",
    speciality: "مسؤول طبي مقيم",
    image: "/images/doctors/Dr.Neethu.png",
  },
  {
    id: "team-7",
    name: "د. نافيا سري إي إم",
    credentials: "BAMS, PGDM – Clinical Pathology (Ay), CCCT",
    role: "استشارية أورام",
    tagline: "منسقة الجودة وباحثة علمية مبتدئة",
    bio: "طبيبة أيورفيدا بخبرة سريرية 5 سنوات، تعمل كباحثة ومنسقة جودة واعتماد NABH في تشانغامبالي، مع تركيز سريري على صحة المرأة، والاضطرابات الروماتيزمية، وعلاجات التجميل والعناية بالبشرة.",
    centre: "تشانغامبالي ريميديوم، إدابال",
    speciality: "استشارية أورام",
    image: "/images/doctors/Dr_navya.png",
  },
];

export function getFeaturedDoctors(locale: Locale): DoctorItem[] {
  return locale === "ar" ? AR_FEATURED_DOCTORS : EN_FEATURED_DOCTORS;
}

export function getSupportingDoctors(locale: Locale): DoctorItem[] {
  return locale === "ar" ? AR_OTHER_DOCTORS : EN_OTHER_DOCTORS;
}

export function getAllDoctors(locale: Locale): DoctorItem[] {
  return [...getFeaturedDoctors(locale), ...getSupportingDoctors(locale)];
}

// ── 6. Blog Posts ─────────────────────────────────────────────────────────────

export const AR_BLOG_POSTS: BlogPost[] = [
  {
    id: "nomophobia-and-the-digital-mind",
    slug: "nomophobia-and-the-digital-mind",
    title: "النوموفوبيا والعقل الرقمي: رؤى من علم النفس السيبراني",
    subtitle: "كيف يغير فرط الاتصال الرقمي الضبط العاطفي، وكيف يعيد الطب النفسي الأيورفيدي التوازن المعرفي.",
    category: "الصحة النفسية",
    date: "أكتوبر 2026",
    readTime: "قراءة 5 دقائق",
    coverImage: "/images/departments/dept_psychiatry.png",
    author: {
      name: "د. سجاد تشانغامبالي",
      role: "أخصائي الطب النفسي الأيورفيدي",
      dept: "هابي مون، قسم السعادة والسلامة النفسية",
      institute: "معهد تشانغامبالي ريميديوم للرعاية الصحية المتكاملة (CRIH)",
      avatar: "/images/doctors/Dr_Sajad.png",
      bio: "طبيب وباحث في الطب النفسي الأيورفيدي بقسم هابي مون للسعادة والسلامة النفسية بمعهد CRIH، متخصص في علم النفس السيبراني والتدخلات النفسية التكاملية."
    },
    excerpt:
      "يتكيف العقل البشري بسرعة مع بيئة رقمية تطورت بوتيرة تفوق مرونتنا النفسية. ولعل أبرز تجليات هذا التباين هو «النوموفوبيا» — حالة القلق والتوتر الشديد عند عدم القدرة على الوصول إلى الهاتف المحمول أو استخدامه.",
    content: [
      {
        type: "paragraph",
        text: "يتكيف العقل البشري بسرعة مع بيئة رقمية تطورت بوتيرة تفوق بكثير مرونتنا النفسية وتطورنا البيولوجي. ولعل أبرز تجليات هذا التباين في عصرنا الحالي هو النوموفوبيا (Nomophobia) — وهي القلق العصابي والتوجس الذي يختبره الفرد عند انقطاع اتصاله بهاتفه المحمول. ومن منظور علم النفس السيبراني، لا تمثل النوموفوبيا مجرد استخدام مفرط للهاتف، بل تعكس تحولاً جذرياً في آليات الضبط العاطفي، والانتباه، والتحكم السلوكي."
      },
      {
        type: "heading",
        text: "النوموفوبيا: ظاهرة نفسية سيبرانية معاصرة"
      },
      {
        type: "paragraph",
        text: "يدرس علم النفس السيبراني تأثير التكنولوجيا الرقمية على الإدراك البشري والعواطف والسلوك. وتندرج النوموفوبيا بشكل مباشر ضمن هذا الحقل؛ فالتعرض المستمر للمحفزات الرقمية — كالإشعارات اللحظية وحلقات التغذية الراجعة على وسائل التواصل الاجتماعي — يُبقي الدماغ في حالة استثارة معرفية مستمرة. ومع مرور الوقت، يعتاد الدماغ على التحفيز الخارجي الدائم، مما يقلل قدرتنا على تحمل الصمت أو الهدوء أو الانفصال المؤقت."
      },
      {
        type: "paragraph",
        text: "سريرياً، يتجلى ذلك في صورة قلق مزمن، وسرعة انفعال، واضطراب في جودة النوم وعمارته، وضعف التركيز المستمر، وعدم الاستقرار الانفعالي. وتمر هذه الأعراض غالباً دون تشخيص دقيق بين الطلاب والمهنيين، حتى تؤثر سلباً وبشكل ملحوظ على التحصيل الأكاديمي أو العلاقات الإنسانية أو الصحة النفسية العامة."
      },
      {
        type: "quote",
        text: "النوموفوبيا إشارة تحذيرية — ليست دليلاً على فشل التكنولوجيا، بل تذكرة بالحاجة الملحة لإعادة مواءمة النفس البشرية مع الواقع الرقمي."
      },
      {
        type: "heading",
        text: "شواهد من الأبحاث السريرية الميدانية"
      },
      {
        type: "paragraph",
        text: "كجزء من أبحاثنا الأكاديمية والسريرية، أُجريت دراسة مقطعية شملت طلاب الجامعات في كيرلا باستخدام استبيان النوموفوبيا المعتمد (NMP-Q). وأظهرت النتائج انتشاراً مرتفعاً بشكل لافت للسلوك النوموفوبي، لا سيما بين الأفراد الذين يتجاوز استخدامهم اليومي للهواتف الذكية 5 ساعات. وهذا يؤكد أن النوموفوبيا لم تعد مجرد عادة سلوكية عابرة، بل غدت وباءً نفسياً يرتبط ارتباطاً وثيقاً بالعصر الرقمي."
      },
      {
        type: "paragraph",
        text: "إضافة إلى ذلك، تم تطبيق تقييم سريري منهجي لبروتوكول علاجي تكاملي يجمع بين عشبة الأشفغاندا (Aśvagandha) وعلاج «ساتفافاجايا شيكيتسا» الكلاسيكي (العلاج النفسي الأيورفيدي المعرفي). وأظهر المشاركون انخفاضاً ذا دلالة إحصائية في درجات القلق وأعراض الاكتئاب وشدة النوموفوبيا وفق مقاييس HAM-A و HAM-D و NMP-Q المعتمدة عالمياً."
      },
      {
        type: "heading",
        text: "حيث تلتقي حكمة الأيورفيدا بعلم النفس السيبراني"
      },
      {
        type: "paragraph",
        text: "تقدم الأيورفيدا إطاراً نفسياً فائق الدقة يتقاطع ببراعة مع مفاهيم علم النفس الحديث. فالإفراط في الانغماس الرقمي يخل بتوازن «راجاس» (فرط النشاط والاضطراب) و«تاماس» (الخمول والانفصال الذهني)، مما يضعف «دهي» (التمييز العقلي) و«دهريتي» (ضبط النفس وقوة الإرادة) و«سمريتي» (الذاكرة والتركيز) — وهي حالة توصف في الأيورفيدا بأنها «براجنابارادها» (الجناية على حكمة الذات). ويتطابق هذا النموذج القديم تماماً مع الفهم البيولوجي العصبي المعاصر للإدمان السلوكي وتثبيط مستقبلات الدوبامين."
      },
      {
        type: "heading",
        text: "مسار علمي تكاملي للمستقبل"
      },
      {
        type: "paragraph",
        text: "في قسم «هابي مون» للصحة النفسية بمعهد CRIH، نتبع نهجاً علمياً تكاملياً رائداً — يجمع بين التقييمات النفسية الدقيقة، والتدخلات المعرفية السلوكية، وممارسات اليقظة الذهنية، والعلاجات النباتية الأيورفيدية الكلاسيكية. هدفنا ليس الانقطاع البدائي عن التكنولوجيا، بل استعادة الاستقلالية الذهنية الحقيقية والاتزان الداخلي في عالم رقمي لا مفر منه."
      },
      {
        type: "paragraph",
        text: "إن مواجهة النوموفوبيا وتحديات العصر الرقمي تتطلب رعاية نفسية رحيمة ومتعددة التخصصات ترتكز بقوة على البحث العلمي والأصالة الإنسانية."
      }
    ]
  },
  {
    id: "synesthetic-minds-tridosha-cognitive-science",
    slug: "synesthetic-minds-tridosha-cognitive-science",
    title: "عقول حسّية مشتركة؟ استكشاف نظام التريدوشا من منظور العلوم المعرفية",
    subtitle: "رؤية متعددة التخصصات حول الارتباطات الحسية، والنظرية الأيورفيدية، والميل الإنساني لتحديد الأنماط عبر مجالات التجربة المختلفة.",
    category: "العلوم المعرفية والأيورفيدا",
    date: "أكتوبر 2026",
    readTime: "قراءة 7 دقائق",
    coverImage: "/images/departments/dept_neurology.png",
    author: {
      name: "د. شاهنة م. ت.",
      role: "طبيبة أيورفيدا",
      dept: "قسم الأيورفيدا والاتصال الطبي",
      institute: "معهد تشانغامبالي ريميديوم للرعاية الصحية المتكاملة (CRIH)",
      avatar: "/images/doctors/Dr_shana.png",
      bio: "طبيبة أيورفيدا متخصصة في الاضطرابات النفسجسدية، وصحة الجهاز الهضمي، والتغذية السريرية، وصحة العقل والجسد، ومعتمدة في التغذية الأيورفيدية وعلاج التأمل سمريتي."
    },
    excerpt:
      "يقدم إطار التريدوشا الأيورفيدي نموذجاً مترابطاً تُستخدم فيه صفات مثل الحرارة والجفاف والحركة والثقل والاستقرار لوصف أبعاد الجسد والعقل والنظام الغذائي والبيئة. هل يمكن مقارنة هذا البناء الوصفي بظاهرة الحواس المتشابكة (السينستيزيا)؟",
    content: [
      {
        type: "paragraph",
        text: "يقدم إطار التريدوشا الأيورفيدي نموذجاً مترابطاً تُستخدم فيه صفات مثل الحرارة والجفاف والحركة والثقل والاستقرار لوصف أبعاد الجسد والعقل والنظام الغذائي والبيئة. ويثير هذا التنظيم عبر المجالات المختلفة سؤالاً مفاهيمياً مهماً: هل يمكن مقارنة هذا البناء الوصفي بظاهرة الحواس المتشابكة (Synesthesia)، وهي ظاهرة إدراكية تثير فيها منبهات معينة تجارب حسية إضافية وتلقائية؟ يتناول هذا المقال أوجه الشبه والاختلاف بين الإطارين، ويوضح أن نظام التريدوشا يُفهم على نحو أفضل بوصفه نظام تصنيف متوارثاً ثقافياً أكثر من كونه دليلاً على إدراك حسي متشابك عصبياً."
      },
      {
        type: "heading",
        text: "1. مقدمة: عندما تشترك التجارب المتباينة في صفة جوهرية واحدة"
      },
      {
        type: "paragraph",
        text: "ما الرابط المشترك بين حرارة شمس الظهيرة، والمذاق الحار للفلفل، والشعور بالدفء أثناء الهضم، والإحساس بالغضب أو التوتر؟ على الرغم من اختلاف هذه التجارب في خصائصها الفيزيائية والنفسية، فإن المنظور الأيورفيدي يفسرها من خلال صفة مشتركة واحدة: أوشنا (Ushna) أو الحرارة."
      },
      {
        type: "paragraph",
        text: "يتكرر هذا النمط في سائر نظام التريدوشا؛ حيث يرتبط الفاتا (Vata) بصفات الجفاف والخفة والبرودة والحركة، ويرتبط البيتا (Pitta) بالحرارة والحدة والتحول، في حين يتصل الكافا (Kapha) بالثقل والاستقرار والرطوبة والتماسك. وتُوظف هذه الصفات لتفسير ملاحظات متنوعة تشمل وظائف الأعضاء، والتغذية، والسلوك، والظروف البيئية المحيطة."
      },
      {
        type: "quote",
        text: "الهدف من هذه المقارنة ليس الادعاء بأن السينستيزيا هي أصل النظرية الأيورفيدية، بل استكشاف ما تكشفه هذه المماثلة حول الطرق الإنسانية في تنظيم التجربة الحياتية وتفسيرها."
      },
      {
        type: "heading",
        text: "2. السينستيزيا: ظاهرة إدراكية حسية متزامنة"
      },
      {
        type: "paragraph",
        text: "تتميز السينستيزيا بارتباطات يثير فيها محفز حسي معين تجربة إضافية متزامنة؛ مثل رؤية ألوان محددة عند سماع أصوات أو قراءة حروف. ويختلف نظام التريدوشا جذرياً عن ذلك، إذ يُكتسب عبر منظومة مفاهيمية تعليمية ومصطلحات وتقاليد نصية عريقة، وليس كاستجابة عصبية حسية لا إرادية."
      },
      {
        type: "heading",
        text: "3. نظام التريدوشا كإطار تصنيفي متكامل عبر المجالات"
      },
      {
        type: "paragraph",
        text: "ينظم نموذج التريدوشا طائفة واسعة من الملاحظات السريرية والطبيعية. فالفاتا يفسر التغيرات والحركة، والبيتا يفسر الهضم والتمثيل الغذائي والتحولات الحيوية، بينما يفسر الكافا البنية والترطيب والاستقرار النسيجي."
      },
      {
        type: "heading",
        text: "4. التقاطع مع العلوم المعرفية المعاصرة"
      },
      {
        type: "paragraph",
        text: "يقدم مفهومان أساسيان في العلوم المعرفية الحديثة مداخل تفسيرية واعدة: الإدراك المتجسد (Embodied Cognition) الذي يوضح كيف تساهم التجارب الجسدية في بناء المفاهيم المجردة، والاستعارة المفاهيمية (Conceptual Metaphor) التي تفسر استخدام الصفات المادية الحية لوصف الحالات المعنوية والنفسية."
      },
      {
        type: "heading",
        text: "5. الخاتمة والآفاق العلمية"
      },
      {
        type: "paragraph",
        text: "يمثل نظام التريدوشا نموذجاً تراثياً فريداً لتنظيم الملاحظات الشاملة عبر لغة نوعية غنية. إن التعامل مع المعرفة الطبية التقليدية بوصفها موضوعاً للبحث الاستكشافي المنهجي يسمح بتقدير عمقها الفلسفي دون الخلط بين المجاز المفاهيمي والبرهان العصبي المعاصر."
      }
    ]
  }
];

export function getBlogPosts(locale: Locale): BlogPost[] {
  return locale === "ar" ? AR_BLOG_POSTS : BLOG_POSTS;
}

export function getBlogPostBySlug(slug: string, locale: Locale): BlogPost | undefined {
  const posts = getBlogPosts(locale);
  return posts.find((p) => p.slug === slug);
}

// ── 7. Country Codes (for Contact Form) ───────────────────────────────────────

export interface CountryOption {
  value: string;
  code: string;
  flag: string;
  nameEn: string;
  nameAr: string;
}

export const COUNTRIES: CountryOption[] = [
  { value: "+91", code: "+91", flag: "🇮🇳", nameEn: "India", nameAr: "الهند" },
  { value: "+971", code: "+971", flag: "🇦🇪", nameEn: "UAE", nameAr: "الإمارات" },
  { value: "+974", code: "+974", flag: "🇶🇦", nameEn: "Qatar", nameAr: "قطر" },
  { value: "+968", code: "+968", flag: "🇴🇲", nameEn: "Oman", nameAr: "عُمان" },
  { value: "+966", code: "+966", flag: "🇸🇦", nameEn: "Saudi Arabia", nameAr: "السعودية" },
  { value: "+965", code: "+965", flag: "🇰🇼", nameEn: "Kuwait", nameAr: "الكويت" },
  { value: "+973", code: "+973", flag: "🇧🇭", nameEn: "Bahrain", nameAr: "البحرين" },
  { value: "+44", code: "+44", flag: "🇬🇧", nameEn: "UK", nameAr: "المملكة المتحدة" },
  { value: "+1", code: "+1", flag: "🇺🇸", nameEn: "USA", nameAr: "الولايات المتحدة" },
  { value: "+1-CA", code: "+1", flag: "🇨🇦", nameEn: "Canada", nameAr: "كندا" },
  { value: "+61", code: "+61", flag: "🇦🇺", nameEn: "Australia", nameAr: "أستراليا" },
  { value: "+65", code: "+65", flag: "🇸🇬", nameEn: "Singapore", nameAr: "سنغافورة" },
  { value: "+60", code: "+60", flag: "🇲🇾", nameEn: "Malaysia", nameAr: "ماليزيا" },
  { value: "+960", code: "+960", flag: "🇲🇻", nameEn: "Maldives", nameAr: "المالديف" },
  { value: "+94", code: "+94", flag: "🇱🇰", nameEn: "Sri Lanka", nameAr: "سريلانكا" },
  { value: "+880", code: "+880", flag: "🇧🇩", nameEn: "Bangladesh", nameAr: "بنغلاديش" },
  { value: "+92", code: "+92", flag: "🇵🇰", nameEn: "Pakistan", nameAr: "باكستان" },
  { value: "+977", code: "+977", flag: "🇳🇵", nameEn: "Nepal", nameAr: "نيبال" },
  { value: "+49", code: "+49", flag: "🇩🇪", nameEn: "Germany", nameAr: "ألمانيا" },
  { value: "+33", code: "+33", flag: "🇫🇷", nameEn: "France", nameAr: "فرنسا" },
  { value: "+39", code: "+39", flag: "🇮🇹", nameEn: "Italy", nameAr: "إيطاليا" },
  { value: "+34", code: "+34", flag: "🇪🇸", nameEn: "Spain", nameAr: "إسبانيا" },
  { value: "+31", code: "+31", flag: "🇳🇱", nameEn: "Netherlands", nameAr: "هولندا" },
  { value: "+41", code: "+41", flag: "🇨🇭", nameEn: "Switzerland", nameAr: "سويسرا" },
  { value: "+46", code: "+46", flag: "🇸🇪", nameEn: "Sweden", nameAr: "السويد" },
  { value: "+47", code: "+47", flag: "🇳🇴", nameEn: "Norway", nameAr: "النرويج" },
  { value: "+45", code: "+45", flag: "🇩🇰", nameEn: "Denmark", nameAr: "الدنمارك" },
  { value: "+358", code: "+358", flag: "🇫🇮", nameEn: "Finland", nameAr: "فنلندا" },
  { value: "+353", code: "+353", flag: "🇮🇪", nameEn: "Ireland", nameAr: "أيرلندا" },
  { value: "+32", code: "+32", flag: "🇧🇪", nameEn: "Belgium", nameAr: "بلجيكا" },
  { value: "+43", code: "+43", flag: "🇦🇹", nameEn: "Austria", nameAr: "النمسا" },
  { value: "+351", code: "+351", flag: "🇵🇹", nameEn: "Portugal", nameAr: "البرتغال" },
  { value: "+30", code: "+30", flag: "🇬🇷", nameEn: "Greece", nameAr: "اليونان" },
  { value: "+48", code: "+48", flag: "🇵🇱", nameEn: "Poland", nameAr: "بولندا" },
  { value: "+380", code: "+380", flag: "🇺🇦", nameEn: "Ukraine", nameAr: "أوكرانيا" },
  { value: "+7", code: "+7", flag: "🇷🇺", nameEn: "Russia", nameAr: "روسيا" },
  { value: "+90", code: "+90", flag: "🇹🇷", nameEn: "Turkey", nameAr: "تركيا" },
  { value: "+20", code: "+20", flag: "🇪🇬", nameEn: "Egypt", nameAr: "مصر" },
  { value: "+27", code: "+27", flag: "🇿🇦", nameEn: "South Africa", nameAr: "جنوب أفريقيا" },
  { value: "+234", code: "+234", flag: "🇳🇬", nameEn: "Nigeria", nameAr: "نيجيريا" },
  { value: "+254", code: "+254", flag: "🇰🇪", nameEn: "Kenya", nameAr: "كينيا" },
  { value: "+212", code: "+212", flag: "🇲🇦", nameEn: "Morocco", nameAr: "المغرب" },
  { value: "+81", code: "+81", flag: "🇯🇵", nameEn: "Japan", nameAr: "اليابان" },
  { value: "+82", code: "+82", flag: "🇰🇷", nameEn: "South Korea", nameAr: "كوريا الجنوبية" },
  { value: "+86", code: "+86", flag: "🇨🇳", nameEn: "China", nameAr: "الصين" },
  { value: "+852", code: "+852", flag: "🇭🇰", nameEn: "Hong Kong", nameAr: "هونغ كونغ" },
  { value: "+886", code: "+886", flag: "🇹🇼", nameEn: "Taiwan", nameAr: "تايوان" },
  { value: "+66", code: "+66", flag: "🇹🇭", nameEn: "Thailand", nameAr: "تايلاند" },
  { value: "+84", code: "+84", flag: "🇻🇳", nameEn: "Vietnam", nameAr: "فيتنام" },
  { value: "+62", code: "+62", flag: "🇮🇩", nameEn: "Indonesia", nameAr: "إندونيسيا" },
  { value: "+63", code: "+63", flag: "🇵🇭", nameEn: "Philippines", nameAr: "الفلبين" },
  { value: "+64", code: "+64", flag: "🇳🇿", nameEn: "New Zealand", nameAr: "نيوزيلندا" },
  { value: "+55", code: "+55", flag: "🇧🇷", nameEn: "Brazil", nameAr: "البرازيل" },
  { value: "+52", code: "+52", flag: "🇲🇽", nameEn: "Mexico", nameAr: "المكسيك" },
  { value: "+54", code: "+54", flag: "🇦🇷", nameEn: "Argentina", nameAr: "الأرجنتين" },
  { value: "+56", code: "+56", flag: "🇨🇱", nameEn: "Chile", nameAr: "تشيلي" },
  { value: "+57", code: "+57", flag: "🇨🇴", nameEn: "Colombia", nameAr: "كولومبيا" },
  { value: "+972", code: "+972", flag: "🇮🇱", nameEn: "Israel", nameAr: "إسرائيل" },
  { value: "+962", code: "+962", flag: "🇯🇴", nameEn: "Jordan", nameAr: "الأردن" },
  { value: "+961", code: "+961", flag: "🇱🇧", nameEn: "Lebanon", nameAr: "لبنان" },
  { value: "+98", code: "+98", flag: "🇮🇷", nameEn: "Iran", nameAr: "إيران" },
  { value: "+964", code: "+964", flag: "🇮🇶", nameEn: "Iraq", nameAr: "العراق" },
];
