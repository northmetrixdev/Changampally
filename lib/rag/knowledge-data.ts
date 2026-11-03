/**
 * @file lib/rag/knowledge-data.ts
 * Cleanly preprocessed and structured knowledge base extracted directly from Changampally website content.
 * Strictly verified data: no fabrications.
 */

import { KnowledgeChunk } from "./types";

export const KNOWLEDGE_CHUNKS: KnowledgeChunk[] = [
  // ── Legacy & Identity ───────────────────────────────────────────────
  {
    id: "legacy-founding",
    title: "Changampally Vaidya Family Heritage & Founding",
    category: "legacy",
    content: `The Changampally Vaidya family healing lineage in Kerala dates back to 1300 AD, spanning over 700 years of unbroken medical tradition. Today, Changampally is an integrated healthcare institution combining classical Ayurvedic wisdom with modern scientific diagnostics. The institution operates 5 centres across Kerala with 120 hospital beds, 24/7 emergency care, and over 50 expert healthcare practitioners across 3 core disciplines.`,
    keywords: ["1300 AD", "heritage", "legacy", "vaidya", "history", "kerala", "ayurveda", "integrated medicine", "tradition"],
  },
  {
    id: "legacy-philosophy",
    title: "Philosophy of Integrative Medicine",
    category: "legacy",
    content: `Changampally's core philosophy combines two complete systems of evidence-based science: classical Ayurveda and modern allopathic medicine. Rather than treating disease in isolation, Changampally provides unified, highly personalized care plans for intricate and multi-system disorders, treating the root cause while supporting the patient's physical and mental wellbeing. Safety is considered the first and most sacred aspect of treatment.`,
    keywords: ["philosophy", "integrative care", "holistic", "allopathy", "two traditions", "patient care", "principles"],
  },

  // ── Centres of Excellence ───────────────────────────────────────────
  {
    id: "centre-remedium",
    title: "Changampally Remedium (Integrated Healthcare Hospital)",
    category: "centre",
    content: `Changampally Remedium is an integrated healthcare hospital located at Kandanakam, Edappal, Malappuram District, Kerala - 679582. It provides 24x7 emergency care, 120 hospital beds, and specialized medical units. Key departments include Ayurvedic Oncology (Cancer Rehabilitation), Mental Health & Psychiatry (counselling and psychotherapy), Cosmetooncology (post-therapy aesthetic restoration), Endocrinology & Metabolic care (Diabetes, Thyroid), Neuro-psychiatric care, and chronic wound management. Contact phone: +91 9072 666 104 / +91 9072 666 105. Email: remediumchangampally@gmail.com.`,
    keywords: ["remedium", "edappal", "hospital", "kandanakam", "oncology", "cancer", "emergency", "120 beds", "24/7", "contact", "phone"],
  },
  {
    id: "centre-kaivalya",
    title: "Changampally Kaivalya (Ayurveda Village & Retreat)",
    category: "centre",
    content: `Changampally Kaivalya is an Ayurveda village and wellness retreat located in Peringode, Kerala. Set in a peaceful, lush sanctuary, Kaivalya specializes in Stress Management Therapy, Obesity & Metabolism Correction, Insomnia & Sleep Disorder Care, Migraine & Chronic Headache Treatment, and Seasonal Detox & Rejuvenation Programmes. It offers comfortable accommodation and personalized Ayurvedic dining. Phone: +91 70251 29232.`,
    keywords: ["kaivalya", "peringode", "retreat", "stress", "insomnia", "sleep", "migraine", "obesity", "detox", "wellness village"],
  },
  {
    id: "centre-wellness-munnar",
    title: "Changampally Ayurveda Wellness Centre (Munnar Heritage Retreat)",
    category: "centre",
    content: `Changampally Ayurveda Wellness Centre is located in Veu, Munnar, Kerala. Situated in the serene highlands of Munnar, this heritage retreat combines traditional Ayurvedic healing with contemporary wellness practices. Specializations include Scientific Rejuvenation Packages, Anti-Ageing Therapies, Ayurvedic Skin & Beauty Care, Immune Boosting Programmes, and Bone & Spine Health Care. Phone: +91 9072 666 107.`,
    keywords: ["munnar", "wellness centre", "heritage retreat", "rejuvenation", "anti-ageing", "immune boosting", "spine care", "highlands"],
  },
  {
    id: "centre-vaidya-bhavan",
    title: "Changampally Vaidya Bhavan (Authentic Heritage Centre)",
    category: "centre",
    content: `Changampally Vaidya Bhavan is situated in Thirunavaya, Kerala, reflecting the timeless architecture and heritage of the Changampally Vaidya lineage. It specializes in Traditional Panchakarma Therapy (systematic bio-purification), Respiratory Disorders Management, Women's Health Ayurveda (gynecology, hormonal balance, menopause), Geriatric Care, and Mind-Body Wellness Therapies. Accommodations range from standard to private balcony air-conditioned suites with tailored Ayurvedic nutrition. Phone: +91 8921 043851.`,
    keywords: ["vaidya bhavan", "thirunavaya", "panchakarma", "women's health", "respiratory", "geriatric", "classical ayurveda"],
  },
  {
    id: "centre-sanjeevani",
    title: "Changampally Sanjeevani (Scientific Healing Retreat)",
    category: "centre",
    content: `Changampally Sanjeevani is a scientific healing retreat located in Edappal, Kerala. Set amid lush herbal gardens and tranquil scenery, Sanjeevani features specialized therapy suites, a meditation pavilion, and therapeutic spa facilities. Core specializations include Joint Care & Arthritis Management, Digestive & Gastrointestinal Disorders, Lifestyle Disease Correction, and Skin Disease Treatments. Phone: +91 85473 53585.`,
    keywords: ["sanjeevani", "edappal", "arthritis", "joint care", "digestive", "skin diseases", "herbal gardens", "healing retreat"],
  },

  // ── Core Doctors & Leadership ────────────────────────────────────────
  {
    id: "doctor-firdouse",
    title: "Dr. Jannathul Firdouse Changampally (Chief Physician)",
    category: "doctor",
    content: `Dr. Jannathul Firdouse Changampally (BSc, BAMS) is the Chief Physician and Ayurveda Oncology Consultant at Changampally Remedium. He possesses over 30 years of clinical experience, including a 12-year tenure as a Cancer Consultant at NIMS Super Specialty Hospital, Trivandrum. He is a member of the Open Source Drug Discovery (OSDD) initiative and specializes in evidence-based Ayurvedic oncology, integrative cancer rehabilitation, mitigating chemotherapy/radiation side effects, and improving quality of life for oncology patients.`,
    keywords: ["dr firdouse", "chief physician", "oncology", "cancer", "nims hospital", "bams", "founder", "qualifications"],
  },
  {
    id: "doctor-jibu",
    title: "Dr. Jibu Gurukkal Changampally (General Physician & Medicine Manufacturer)",
    category: "doctor",
    content: `Dr. Jibu Gurukkal Changampally is an Allopathic General Physician with 13 years of clinical practice. He serves as Medical Director at Orchid Medicity and actively directs Ayurvedic medicine manufacturing, quality control, and export operations at Changampally Vaidya Bhavan and Vedic Age in Thirunnavaya, bridging classical pharmacology with modern quality standards.`,
    keywords: ["dr jibu gurukkal", "allopathic", "general physician", "medicine manufacturing", "orchid medicity", "vedic age"],
  },
  {
    id: "doctor-sajjad",
    title: "Dr. Sajjad Changampally (Ayurvedic Psychiatrist)",
    category: "doctor",
    content: `Dr. Sajjad Changampally holds an MD in Ayurvedic Psychiatry. He leads mental health services at Changampally Remedium, Edappal, and Changampally Vaidya Bhavan. He is Managing Director of Happymoon, Secretary of the Ayurveda Medical Association of India (AMAI) Ponnani chapter, and an active researcher on mobile phone addiction and contemporary psychiatric challenges, combining Ayurvedic psychiatry, counselling, psychotherapy, and mindfulness.`,
    keywords: ["dr sajjad", "psychiatry", "mental health", "happymoon", "counselling", "psychotherapy", "stress", "addiction"],
  },

  // ── Clinical Specialties & Treatments ───────────────────────────────
  {
    id: "treatment-cancer-rehab",
    title: "Cancer Rehabilitation & Ayurvedic Oncology",
    category: "department",
    content: `At Changampally Remedium, the Cancer Rehabilitation unit integrates evidence-based Ayurvedic protocols with conventional oncology. Led by Dr. Jannathul Firdouse, this unit supports cancer patients throughout and after chemotherapy, radiation, or surgical treatments. Therapies focus on mitigating toxic side effects, boosting immunity, reducing fatigue, preserving organ function, and improving overall survival and vitality.`,
    keywords: ["cancer rehabilitation", "oncology", "chemotherapy side effects", "radiation recovery", "tumors", "cancer care"],
  },
  {
    id: "treatment-panchakarma",
    title: "Classical Panchakarma Bio-Purification",
    category: "department",
    content: `Changampally Vaidya Bhavan in Thirunavaya offers authentic, classical Panchakarma therapies. Panchakarma consists of five bio-purification procedures (Vamana, Virechana, Vasti, Nasya, and Raktamokshana) aimed at eliminating deep-seated cellular toxins, balancing the tridoshas (Vata, Pitta, Kapha), and restoring homeostasis for chronic autoimmune, metabolic, and musculoskeletal conditions.`,
    keywords: ["panchakarma", "detox", "purification", "vasti", "nasya", "virechana", "dosha balance", "classical therapy"],
  },
  {
    id: "treatment-mental-health",
    title: "Ayurvedic Psychiatry & Mental Health",
    category: "department",
    content: `Changampally Remedium and Vaidya Bhavan offer specialized mental health care combining Ayurvedic psychiatry with modern psychotherapy. Conditions treated include anxiety disorders, clinical depression, chronic insomnia, migraine, stress burnout, and digital/mobile screen addiction. Treatments include herbal neuro-tonics, Shirodhara, counselling, and meditative therapies.`,
    keywords: ["mental health", "psychiatry", "shirodhara", "anxiety", "depression", "insomnia", "stress management", "counselling"],
  },
  {
    id: "treatment-lifestyle-metabolic",
    title: "Lifestyle Diseases, Metabolic & Diabetic Wound Care",
    category: "department",
    content: `Changampally provides integrated management for metabolic and lifestyle disorders including Type 2 Diabetes, hypertension, dyslipidemia, thyroid disorders, and obesity. In addition, the hospital operates a specialized Diabetic and Chronic Wound Care unit that combines modern antiseptic wound debridement with Ayurvedic tissue-regenerating oils and formulations to accelerate healing and prevent amputations.`,
    keywords: ["diabetes", "diabetic foot", "wound care", "lifestyle diseases", "hypertension", "thyroid", "metabolic syndrome"],
  },
  {
    id: "treatment-womens-health",
    title: "Women's Health and Fertility Care",
    category: "department",
    content: `Changampally offers comprehensive Ayurvedic gynecology and integrated fertility care. Protocols address polycystic ovary syndrome (PCOS/PCOD), menstrual irregularities, endometriosis, hormonal imbalances, menopausal distress, and both male and female infertility through targeted Ayurvedic purification and rejuvenative Rasayana therapies.`,
    keywords: ["women's health", "fertility", "infertility", "pcos", "pcod", "menopause", "hormonal balance", "reproductive care"],
  },

  // ── Contact & Practical Information ──────────────────────────────────
  {
    id: "contact-details",
    title: "Contact Details, Locations & Appointments",
    category: "contact",
    content: `Main Campus: Changampally Remedium Integrated Healthcare, Kandanakam, Edappal, Malappuram Dt., Kerala, India - 679582. Medical inquiries and appointments: +91 9072666104 / +91 9072666105. Email: remediumchangampally@gmail.com. Official website: https://www.changampally.com. Authentic Ayurvedic medicines can be ordered online at https://www.changampallyonline.com. Appointments and free second opinions can be requested directly via the website contact form.`,
    keywords: ["contact", "phone", "email", "address", "location", "edappal", "malappuram", "pincode", "online store", "appointment", "booking"],
  },
  {
    id: "metrics-overview",
    title: "Institutional Statistics and Capacity",
    category: "general",
    content: `Key Changampally Institutional Metrics: Established in 1300 AD (700+ years of healing lineage); 120 inpatient hospital beds; 24x7 emergency medical care; over 50 expert doctors and healthcare practitioners; 3 core specialties (Ayurveda, Modern Medicine, Mental Wellbeing); 5 specialized centres situated across Kerala (Edappal, Peringode, Munnar, Thirunavaya).`,
    keywords: ["statistics", "numbers", "beds", "emergency", "practitioners", "centres", "metrics", "capacity"],
  }
];

