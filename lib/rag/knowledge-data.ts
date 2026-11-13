/**
 * @file lib/rag/knowledge-data.ts
 * Comprehensive, verified knowledge base extracted directly from Changampally's clinical documents,
 * department profiles, doctor credentials, centres, hospital services, and research publications.
 * Strictly verified data: no fabrications.
 */

import { KnowledgeChunk } from "./types";

export const KNOWLEDGE_CHUNKS: KnowledgeChunk[] = [
  // ═════════════════════════════════════════════════════════════════════
  // 1. LEGACY, HERITAGE & INSTITUTIONAL PILLARS
  // ═════════════════════════════════════════════════════════════════════
  {
    id: "legacy-founding-700-years",
    title: "Changampally 700-Year Vaidya Lineage & Founding in 1300 AD",
    category: "legacy",
    content: `The Changampally Vaidya family healing lineage in Kerala dates back to 1300 AD, spanning over seven centuries and more than 700 years of unbroken Ayurvedic medical practice. Rooted in traditional Ashtanga Hridaya wisdom, the family has served generations of patients across South India. Today, Changampally has evolved into a premier integrated healthcare institution operating 5 specialized centres across Kerala, featuring 120 hospital beds, 24/7 round-the-clock emergency medical care, and over 50 expert physicians and healthcare practitioners across 3 core disciplines (Classical Ayurveda, Modern Allopathic Medicine, and Mental & Emotional Wellbeing).`,
    keywords: ["1300 AD", "700 years", "history", "heritage", "lineage", "vaidya", "kerala", "founding", "ashtanga hridaya", "family tradition", "tradition"],
  },
  {
    id: "legacy-philosophy-integrative",
    title: "Core Philosophy: Integrative Medicine and Patient Safety First",
    category: "legacy",
    content: `Changampally's foundational philosophy is built on three pillars: Tradition (Panchakarma and classical formulations passed down since 1300 AD), Integration (combining Ayurvedic specialists and allopathic physicians for evidence-based care plans for intricate disorders), and Wholeness (mental and emotional wellbeing through psychiatry and psychotherapy). Chief Physician Dr. Jannathul Firdouse emphasizes: 'A person walking into your clinic should not be the reason to treat them. Treat only if you are sure that the person is safe in your hands. Safety is the first and most sacred aspect of any treatment.' Doctorhood is defined by precision in diagnosis, practical expertise, and compassionate touch rather than hollow promises.`,
    keywords: ["philosophy", "safety first", "integrative care", "chief physician quote", "allopathy and ayurveda", "three pillars", "patient care", "principles"],
  },
  {
    id: "institutional-capacity-metrics",
    title: "Hospital Metrics, Capacity & Accreditations",
    category: "general",
    content: `Key Changampally Institutional Metrics: Established in 1300 AD; 120 inpatient hospital beds; 24x7 emergency medical services; over 50 expert doctors and practitioners; 3 core specialties; 5 specialized centres across Kerala (Edappal, Peringode, Munnar, Thirunavaya); 14 specialized clinical departments with 33 sub-specializations. Changampally operates dedicated NABH-coordinated quality standards under certified research fellows and healthcare quality managers.`,
    keywords: ["metrics", "120 beds", "24/7", "50 doctors", "5 centres", "capacity", "statistics", "nabh", "accreditation", "emergency"],
  },

  // ═════════════════════════════════════════════════════════════════════
  // 2. CENTRES OF EXCELLENCE (ALL 5 CENTRES)
  // ═════════════════════════════════════════════════════════════════════
  {
    id: "centre-remedium-edappal",
    title: "Changampally Remedium — Integrated Healthcare Hospital (Edappal)",
    category: "centre",
    content: `Changampally Remedium is the flagship multi-specialty integrated healthcare hospital located at Kandanakam, Edappal, Malappuram District, Kerala - 679582. It features 120 hospital beds and 24x7 emergency care. Remedium bridges classical Ayurveda with modern diagnostic precision, housing departments in Ayurvedic Oncology (Cancer Rehabilitation), Psychiatry and Psychology (Happy Moon department), PM&R (Physical Medicine and Rehabilitation), Cosmetooncology, Endocrinology & Metabolic Care, Neurology, Orthopedics, and Chronic Diabetic Wound Care. Contact Phone: Medical Desk: +91 9072 666 103 / +91 9072 666 104 / +91 9072 666 105; Office: +91 9072 666 106. Email: remediumchangampally@gmail.com. Google Maps: Kandanakam, Edappal.`,
    keywords: ["remedium", "edappal", "kandanakam", "malappuram", "flagship hospital", "120 beds", "24x7", "emergency", "oncology", "contact", "phone"],
  },
  {
    id: "centre-kaivalya-peringode",
    title: "Changampally Kaivalya — Ayurveda Village and Retreat (Peringode)",
    category: "centre",
    content: `Changampally Kaivalya is a specialized Ayurveda village and wellness retreat nestled in the serene, lush greenery of Peringode, Kerala. Kaivalya is designed for inpatient recovery, stress alleviation, and deep rejuvenation. Specializations include Stress Management Therapy, Obesity & Metabolism Correction, Insomnia & Sleep Disorder Care, Migraine & Chronic Headache Treatment, and Seasonal Detox & Panchakarma Programmes. It provides tranquil living accommodations, custom Ayurvedic diet plans, and holistic recovery therapies. Contact Phone: +91 70251 29232.`,
    keywords: ["kaivalya", "peringode", "ayurveda village", "retreat", "stress management", "insomnia", "sleep", "obesity", "migraine", "detox", "phone"],
  },
  {
    id: "centre-wellness-munnar",
    title: "Changampally Ayurveda Wellness Centre — Heritage Retreat (Munnar)",
    category: "centre",
    content: `Changampally Ayurveda Wellness Centre is a heritage retreat located at Veu in the misty highlands of Munnar, Kerala. Munnar's crisp, cool climate and pristine natural setting provide the ideal setting for Ayurvedic healing. Specializations include Scientific Rejuvenation Packages, Anti-Ageing Therapies, Ayurvedic Beauty & Skin Treatments, Immune Boosting Programmes, and Bone & Spine Care. Guests experience personalised therapies, yoga, meditation, and pure Ayurvedic nutrition. Contact Phone: +91 9072 666 107.`,
    keywords: ["munnar", "wellness centre", "heritage retreat", "highlands", "veu", "rejuvenation", "anti-ageing", "immune boosting", "spine care", "beauty", "phone"],
  },
  {
    id: "centre-vaidya-bhavan-thirunavaya",
    title: "Changampally Vaidya Bhavan — Authentic Ayurvedic Heritage Centre (Thirunavaya)",
    category: "centre",
    content: `Located in Thirunavaya, Malappuram, Changampally Vaidya Bhavan reflects the timeless heritage architecture of the Vaidya family. It serves as an authentic sanctuary for classical Panchakarma therapies (Vamana, Virechana, Vasti, Nasya, Raktamokshana), Respiratory Disorders Management, Women's Health Ayurveda (gynecology, hormonal balance, menopause), Geriatric Care, and Mind-Body Wellness. Accommodations range from standard heritage rooms to air-conditioned suites with private balconies and personalized Ayurvedic catering. Vaidya Bhavan also houses Vedic Age Ayurvedic medicine manufacturing facilities. Contact Phone: +91 8921 043851.`,
    keywords: ["vaidya bhavan", "thirunavaya", "panchakarma", "respiratory", "women's health", "geriatric", "balcony suites", "heritage", "manufacturing", "phone"],
  },
  {
    id: "centre-sanjeevani-edappal",
    title: "Changampally Sanjeevani — Scientific Healing Retreat (Edappal)",
    category: "centre",
    content: `Changampally Sanjeevani is a scientific healing retreat situated in Edappal, Kerala. Set amidst tranquil landscaped grounds, Sanjeevani features specialized treatment suites, lush medicinal herbal gardens, a dedicated meditation pavilion, and therapeutic spa amenities. Core clinical areas include Joint Care & Arthritis Management, Digestive Disorders & Gut Health Treatment, Lifestyle Disease Management, and Chronic Skin Disease Treatments. Contact Phone: +91 85473 53585.`,
    keywords: ["sanjeevani", "edappal", "joint care", "arthritis", "digestive", "skin diseases", "herbal garden", "meditation pavilion", "healing retreat", "phone"],
  },

  // ═════════════════════════════════════════════════════════════════════
  // 3. DOCTORS & CLINICAL LEADERSHIP (ALL EXPERTS)
  // ═════════════════════════════════════════════════════════════════════
  {
    id: "doctor-jannathul-firdouse",
    title: "Dr. Jannathul Firdouse Changampally (BSc, BAMS) — Chief Physician & Oncology Specialist",
    category: "doctor",
    content: `Dr. Jannathul Firdouse Changampally (BSc, BAMS) is the Chief Physician and Chief Consultant in Ayurveda Oncology at Changampally Remedium, Edappal. With over 30 years of clinical experience, Dr. Firdouse previously served for 12 years as Cancer Consultant at NIMS Super Specialty Hospital, Trivandrum. He is an active member of the Open Source Drug Discovery (OSDD) initiative. He pioneered integrative cancer rehabilitation protocols combining Ayurvedic formulations with conventional oncology, mitigating chemotherapy and radiation side-effects, supporting blood counts, and restoring vitality in cancer patients.`,
    keywords: ["dr firdouse", "jannathul firdouse", "chief physician", "oncology", "cancer specialist", "bams", "nims hospital", "osdd", "30 years experience"],
  },
  {
    id: "doctor-jibu-gurukkal",
    title: "Dr. Jibu Gurukkal Changampally (MD Physician) — General Physician & Medicine Manufacturer",
    category: "doctor",
    content: `Dr. Jibu Gurukkal Changampally is an accomplished Allopathic General Physician with 13 years of clinical practice. In addition to practicing modern general medicine at Changampally Remedium, he serves as Medical Director at Orchid Medicity (Malappuram and Changaramkulam). He actively directs authentic Ayurvedic medicine manufacturing and export operations at Changampally Vaidya Bhavan and Vedic Age in Thirunnavaya, ensuring rigorous pharmacological quality control.`,
    keywords: ["dr jibu", "jibu gurukkal", "md physician", "allopathic", "general physician", "orchid medicity", "vedic age", "medicine manufacturing", "export"],
  },
  {
    id: "doctor-sajjad-changampally",
    title: "Dr. Sajjad Changampally (BAMS, MD) — Ayurveda Psychiatrist & MD, Happymoon",
    category: "doctor",
    content: `Dr. Sajjad Changampally holds an MD in Ayurvedic Psychiatry. He leads mental health and psychiatric services at Changampally Remedium (Edappal) and Vaidya Bhavan (Thirunavaya). He is the Managing Director of Happymoon (Department of Happiness & Mental Wellbeing), Secretary of the Ayurveda Medical Association of India (AMAI) Ponnani chapter, and an internationally published clinical researcher on Nomophobia (smartphone addiction), cyber psychology, and integrative psychotherapeutic protocols combining Ashwagandha and Satvavajaya Chikitsa.`,
    keywords: ["dr sajjad", "sajjad changampally", "ayurvedic psychiatrist", "happymoon", "psychiatry", "nomophobia", "cyber psychology", "mental health", "amai"],
  },
  {
    id: "doctor-azhar-kalliyath",
    title: "Dr. Azhar Kalliyath (MBBS, DNB PM&R, MNAMS, FIPM) — Physiatrist & Pain Management",
    category: "doctor",
    content: `Dr. Azhar Kalliyath is a Physiatrist holding MBBS, DNB in Physical Medicine and Rehabilitation (PM&R), MNAMS, and Fellowship in Interventional Pain Management (FIPM). At Changampally Remedium, Dr. Kalliyath leads the PM&R department, offering non-surgical interventions, interventional pain management, neurorehabilitation, sports and regenerative medicine, post-stroke recovery, and musculoskeletal rehabilitation.`,
    keywords: ["dr azhar kalliyath", "physiatrist", "pm&r", "pain management", "fipm", "dnb", "rehabilitation", "sports medicine", "stroke rehab"],
  },
  {
    id: "doctor-shani-nebil",
    title: "Dr. Shani Nebil (BAMS, MSc) — Senior Consultant Physician",
    category: "doctor",
    content: `Dr. Shani Nebil (BAMS, MSc) is a Senior Consultant Physician with 12+ years of clinical experience based at Changampally Vaidya Bhavan, Thirunavaya. Her specializations include Ayurvedic Gynecology, Women's Reproductive Health, Classical Panchakarma administration, and traditional Para-surgical procedures (such as Kshara Karma and Raktamokshana).`,
    keywords: ["dr shani nebil", "senior physician", "gynecology", "panchakarma", "para-surgical", "women's health", "vaidya bhavan", "thirunavaya"],
  },
  {
    id: "doctor-shahna-mt",
    title: "Dr. Shahna MT (BAMS, PGDAN, CSAMT) — HOD Ayurveda & Medical Communications",
    category: "doctor",
    content: `Dr. Shahna MT (BAMS, PGDAN, CSAMT) serves as Head of the Ayurveda Department and Medical Communications at Changampally Remedium. Certified in Ayurvedic Nutrition (PGDAN) and Smriti Ayurveda Meditation Therapy (CSAMT), her clinical focus centers on psychosomatic disorders, gut-brain health, clinical nutrition, dermatology, and musculoskeletal care, as well as authoring interdisciplinary research in cognitive science and Ayurveda.`,
    keywords: ["dr shahna mt", "hod ayurveda", "smriti meditation", "nutrition", "psychosomatic", "gut health", "medical communications", "cognitive science"],
  },
  {
    id: "doctor-najla-gurukkal",
    title: "Dr. Najla Gurukkal (BDS) — Dentist & Dental Oncology",
    category: "doctor",
    content: `Dr. Najla Gurukkal (BDS) is the Dental Surgeon at Changampally Remedium. She manages comprehensive oral health and hygiene and specializes in Dental Oncology—the specialized oral healthcare, restorative dentistry, and mucosal management required for oncology patients undergoing cancer treatments.`,
    keywords: ["dr najla gurukkal", "dentist", "bds", "dental oncology", "oral health", "remedium", "dental care"],
  },
  {
    id: "doctor-navyasree-em",
    title: "Dr. Navyasree E M (BAMS, PGDM Clinical Pathology, CCCT) — Oncology Consultant & QC Coordinator",
    category: "doctor",
    content: `Dr. Navyasree E M is an Ayurveda Oncology Consultant, Junior Research Fellow (JRF), and Quality / NABH Coordinator at Changampally Remedium. With qualifications in clinical pathology (PGDM) and cosmetology, she specializes in integrative oncology care, cosmetology and cosmetooncology, rheumatic conditions, and women's health.`,
    keywords: ["dr navyasree", "oncology consultant", "jrf", "quality coordinator", "nabh", "cosmetology", "clinical pathology"],
  },
  {
    id: "specialist-hiba-karakkad",
    title: "Ms. Hiba Karakkad (Master of Clinical Psychology) — Consultant Psychologist",
    category: "doctor",
    content: `Ms. Hiba Karakkad holds a Master of Clinical Psychology and serves as Consultant Psychologist at Happy Moon (Department of Happiness & Mental Wellbeing), Changampally Remedium. She specializes in Cognitive Behavioral Therapy (CBT), Acceptance and Commitment Therapy (ACT), anxiety, depression, emotional regulation, and stress coaching.`,
    keywords: ["hiba karakkad", "psychologist", "clinical psychology", "happymoon", "cbt", "act", "counselling", "anxiety", "depression"],
  },
  {
    id: "doctor-neethu",
    title: "Dr. Neethu (BAMS) — Ayurveda Physician",
    category: "doctor",
    content: `Dr. Neethu (BAMS) is an experienced Ayurveda Physician practicing at Changampally Vaidya Bhavan, Thirunavaya, dedicated to classical Panchakarma therapies, geriatric wellness, and personalized holistic recovery protocols.`,
    keywords: ["dr neethu", "ayurveda physician", "bams", "vaidya bhavan", "thirunavaya", "panchakarma"],
  },

  // ═════════════════════════════════════════════════════════════════════
  // 4. DEPARTMENTS & CLINICAL SPECIALIZATIONS (ALL 14 DEPARTMENTS)
  // ═════════════════════════════════════════════════════════════════════
  {
    id: "dept-oncology",
    title: "Department of Oncology & Cancer Rehabilitation",
    category: "department",
    content: `Changampally's Oncology Department adopts an integrated approach combining classical Ayurveda with conventional oncology to manage cancers and complex neoplastic disorders. Led by Chief Physician Dr. Jannathul Firdouse (30+ years experience, ex-NIMS Super Specialty Hospital), the department specializes in: Brain Tumors (e.g., Medulloblastoma, Glioma), Breast Cancer, Cervical Cancer, Ovarian Cancer, Lung Cancer, Bone Cancer, Skin Cancer, Gastrointestinal Cancer, Blood Cancer (Leukemia, Lymphoma), and Prostate Cancer. Treatments focus on scientific recovery, mitigating chemotherapy and radiation toxicities, alleviating cachexia, maintaining WBC and platelet counts, protecting organ vitality, and improving survival and quality of life.`,
    keywords: ["oncology", "cancer", "chemotherapy side effects", "radiation recovery", "brain tumor", "breast cancer", "lung cancer", "leukemia", "firdouse"],
  },
  {
    id: "dept-neurology",
    title: "Department of Neurology & Neurorehabilitation",
    category: "department",
    content: `The Neurology Department specializes in diagnosing and treating disorders of the central and peripheral nervous system (brain, spinal cord, and nerves). Conditions treated include: Post-Stroke Hemiplegia, Memory Disorders, Dementia, Alzheimer's Disease, Parkinson's Disease, Multiple Sclerosis (MS), Epilepsy, Amyotrophic Lateral Sclerosis (ALS), Autism Spectrum Disorder (ASD), and Cerebral Palsy. Therapies integrate specialized Ayurvedic neuro-rejuvenative procedures (Shirodhara, Medicated Thalam, Njavarakizhi, Nasya) with modern physiotherapy and neuro-rehabilitation.`,
    keywords: ["neurology", "stroke", "post-stroke rehab", "parkinson's", "alzheimer's", "dementia", "multiple sclerosis", "als", "epilepsy", "autism", "cerebral palsy"],
  },
  {
    id: "dept-rheumatology-immunology",
    title: "Department of Rheumatology and Immunology",
    category: "department",
    content: `Specializes in autoimmune diseases and chronic inflammatory disorders affecting joints, muscles, connective tissues, and immune function. Conditions treated include: Rheumatoid Arthritis (RA), Systemic Lupus Erythematosus (SLE), Type 1 Diabetes Mellitus, Psoriasis, Psoriatic Arthritis, Hashimoto's Thyroiditis, Ankylosing Spondylitis, and Vasculitis. Treatment protocols cleanse circulating Ama (metabolic toxins), modulate immune response via Rasayana botanicals, and reduce pain without immunosuppressive toxicity.`,
    keywords: ["rheumatology", "immunology", "rheumatoid arthritis", "lupus", "sle", "autoimmune", "psoriasis", "hashimoto", "joint pain", "ama"],
  },
  {
    id: "dept-endocrinology-metabolism",
    title: "Department of Endocrinology and Metabolism",
    category: "department",
    content: `Focuses on hormonal balances, metabolic health, and endocrine gland disorders. Conditions managed include: Type 1 and Type 2 Diabetes Mellitus, Diabetic Neuropathy, Polycystic Ovary Syndrome (PCOS/PCOD), Metabolic Syndrome, Thyroid Disorders (Hypothyroidism, Hyperthyroidism, Goitre), Cushing's Syndrome, Adrenal Insufficiency, and Osteoporosis. Integrated protocols combine glycemic dietary management, classical Medohara formulations, panchakarma bio-purification, and lifestyle correction.`,
    keywords: ["endocrinology", "metabolism", "diabetes", "pcos", "pcod", "thyroid", "hypothyroidism", "metabolic syndrome", "osteoporosis", "hormones"],
  },
  {
    id: "dept-cardiology-vascular",
    title: "Department of Cardiology & Vascular Medicine",
    category: "department",
    content: `Treats cardiovascular and vascular system disorders with a focus on arterial health, microcirculation, and preventive cardiology. Conditions managed: Essential Hypertension (High Blood Pressure), Coronary Artery Disease (CAD) supportive care, Cardiac Arrhythmias (Atrial Fibrillation, Tachycardia), Dyslipidemia (High Cholesterol), and Peripheral Artery Disease (PAD). Therapies employ cardioprotective botanicals (such as Arjuna formulations), stress reduction through Shirodhara, and therapeutic lifestyle modifications.`,
    keywords: ["cardiology", "hypertension", "blood pressure", "heart", "coronary artery disease", "arrhythmia", "cholesterol", "arjuna", "circulation"],
  },
  {
    id: "dept-gastroenterology-hepatology",
    title: "Department of Gastroenterology & Hepatology",
    category: "department",
    content: `Focuses on diseases of the digestive tract and hepatobiliary system: esophagus, stomach, small intestine, colon, liver, gallbladder, and pancreas. Conditions treated: Irritable Bowel Syndrome (IBS), Crohn's Disease, Ulcerative Colitis, Gastroesophageal Reflux Disease (GERD / Acid Reflux), Alcoholic Liver Cirrhosis, Fatty Liver (NAFLD), Celiac Disease, Chronic Pancreatitis, and Peptic Ulcer Disease. Protocols restore Agni (digestive fire), repair mucosal barriers, and regulate gut microbiome.`,
    keywords: ["gastroenterology", "ibs", "gerd", "crohn's", "colitis", "liver cirrhosis", "fatty liver", "pancreatitis", "ulcer", "gut health", "agni"],
  },
  {
    id: "dept-psychiatry-happymoon",
    title: "Department of Psychiatry, Psychology & Happy Moon",
    category: "department",
    content: `Happy Moon is Changampally's dedicated Department of Happiness and Mental Wellbeing, led by MD Ayurvedic Psychiatrist Dr. Sajjad Changampally and clinical psychologists. Treats: Major Depressive Disorder (MDD), Generalized Anxiety Disorder (GAD), Bipolar Disorder, Obsessive-Compulsive Disorder (OCD), Post-Traumatic Stress Disorder (PTSD), Insomnia, Panic Attacks, and Nomophobia / Digital Dependence Syndrome. Therapies integrate Cognitive Behavioral Therapy (CBT), Acceptance & Commitment Therapy (ACT), Smriti Meditation Therapy, Shirodhara, and Ashwagandha-based botanical protocols.`,
    keywords: ["psychiatry", "happymoon", "depression", "anxiety", "insomnia", "ocd", "ptsd", "nomophobia", "digital addiction", "cbt", "shirodhara", "sajjad"],
  },
  {
    id: "dept-pulmonology-respiratory",
    title: "Department of Pulmonology & Respiratory Medicine",
    category: "department",
    content: `Specializes in diseases of the airways and respiratory tract. Conditions treated: Chronic Obstructive Pulmonary Disease (COPD), Bronchial Asthma, Chronic Bronchitis, Allergic Rhinitis, Sinusitis, and Post-viral Pulmonary Fibrosis. Treatments include classical Nasya (nasal administration), Dhoomapana (medicated herbal smoke), chest-clearing Kizhis, and Rasayanas that expand lung capacity and clear airway inflammation.`,
    keywords: ["pulmonology", "respiratory", "asthma", "copd", "bronchitis", "allergies", "sinusitis", "nasya", "lungs"],
  },
  {
    id: "dept-orthopedics-musculoskeletal",
    title: "Department of Orthopedics, Spine & Musculoskeletal Health",
    category: "department",
    content: `Specializes in the diagnosis, non-surgical treatment, and rehabilitation of disorders affecting bones, joints, ligaments, tendons, and spine. Conditions treated: Osteoarthritis (Knee, Hip), Ankylosing Spondylitis, Cervical & Lumbar Spondylosis, Disc Prolapse / Herniation, Sciatica, Gouty Arthritis, Frozen Shoulder, and Chronic Back/Neck Pain. Interventions include Janu Basti, Kati Basti, Patra Pinda Sweda, Marma therapy, and non-surgical alignment.`,
    keywords: ["orthopedics", "osteoarthritis", "sciatica", "spondylosis", "disc prolapse", "back pain", "knee pain", "gout", "kati basti", "janu basti"],
  },
  {
    id: "dept-pmr-rehabilitation",
    title: "Department of Physical Medicine & Rehabilitation (PM&R)",
    category: "department",
    content: `Led by Physiatrist Dr. Azhar Kalliyath (MBBS, DNB PM&R, FIPM), the PM&R department helps patients regain strength, mobility, and functional autonomy. Key units: Interventional Pain Management (ultrasound-guided blocks, regenerative medicine), Neurorehabilitation (post-stroke, spinal cord injury), Sports Injury Rehabilitation (ACL tears, meniscus injuries, rotator cuff tears), Critical Care Rehabilitation, and Post-surgical Orthopedic Rehabilitation.`,
    keywords: ["pm&r", "rehabilitation", "pain management", "sports medicine", "acl injury", "stroke recovery", "azhar kalliyath", "physiotherapy"],
  },
  {
    id: "dept-dermatology-woundcare",
    title: "Department of Dermatology & Chronic Diabetic Wound Care",
    category: "department",
    content: `Manages acute and chronic skin, hair, and nail disorders as well as complex wounds. Conditions treated: Psoriasis (plaque, guttate, scalp), Atopic Dermatitis (Eczema), Chronic Urticaria, Lichen Planus, Vitiligo, and Alopecia. The department operates a specialized Diabetic and Chronic Non-Healing Wound Care unit that combines modern antiseptic debridement with Ayurvedic formulations (Jatyadi, Murivenna) to stimulate tissue granulation and prevent amputations.`,
    keywords: ["dermatology", "skin", "psoriasis", "eczema", "urticaria", "vitiligo", "diabetic foot", "wound care", "jatyadi", "amputation prevention"],
  },
  {
    id: "dept-dental-oncology",
    title: "Department of Dental Oncology & Oral Health",
    category: "department",
    content: `Led by Dr. Najla Gurukkal (BDS), the Dental Oncology department delivers specialized oral health care for cancer patients. Focus areas: prevention and treatment of oral mucositis, osteoradionecrosis, xerostomia (dry mouth), and dental decay secondary to head and neck radiation or chemotherapy. It also delivers comprehensive family dentistry and preventive oral health.`,
    keywords: ["dental oncology", "dentist", "oral health", "mucositis", "radiation side effects", "teeth", "najla gurukkal"],
  },
  {
    id: "dept-ophthalmology",
    title: "Department of Ophthalmology & Vision Care",
    category: "department",
    content: `Focuses on the visual system and ocular health. Conditions treated: Refractive Errors (Myopia, Astigmatism), Glaucoma (Intraocular Pressure management), Inflammatory Eye Diseases (Uveitis, Blepharitis), Dry Eye Syndrome, and Retinitis Pigmentosa. Treatments use classical Netra Kriya Kalpas including Netra Tarpana (nourishing medicated ghee eye bath), Aschyotana, and Pindi.`,
    keywords: ["ophthalmology", "eye care", "glaucoma", "myopia", "netra tarpana", "vision", "dry eyes", "retinitis pigmentosa"],
  },
  {
    id: "dept-hematology",
    title: "Department of Hematology & Blood Health",
    category: "department",
    content: `Specializes in blood disorders and hematopoietic restoration. Conditions managed: Immune Thrombocytopenia (low platelet count), Chronic Anemia (iron deficiency, chronic illness anemia), and post-chemotherapy bone marrow suppression. Therapies combine iron-bioavailable Ayurvedic Bhasmas, Lohasavams, and bone-marrow stimulating Rasayanas.`,
    keywords: ["hematology", "blood disorders", "thrombocytopenia", "platelets", "anemia", "hemoglobin", "bone marrow"],
  },

  // ═════════════════════════════════════════════════════════════════════
  // 5. THERAPIES & CLINICAL PROTOCOLS
  // ═════════════════════════════════════════════════════════════════════
  {
    id: "therapy-panchakarma-details",
    title: "Authentic Classical Panchakarma Procedures",
    category: "department",
    content: `Classical Panchakarma at Changampally Vaidya Bhavan and Remedium follows strict classical protocol divided into three stages: 
1. Purva Karma (Preparatory): Snehana (internal oleation with medicated ghee like Ghritham) and Swedana (herbal steam sudation) to loosen toxins.
2. Pradhana Karma (The 5 Main Cleansing Procedures):
   - Vamana: Therapeutic emesis for Kapha disorders (asthma, psoriasis).
   - Virechana: Medicated purgation for Pitta disorders (liver, skin diseases).
   - Vasti (Anuvasana & Niruha): Medicated oil and decoction enemas for Vata disorders (neurological, arthritis, spine).
   - Nasya: Errhine therapy via nostrils for brain, neurological, sinusitis, and ENT disorders.
   - Raktamokshana: Bloodletting via leech therapy (Jalaukavacharana) for severe skin lesions and local inflammatory pooling.
3. Paschat Karma: Samsarjana Krama (graduated dietary resuscitation) to rebuild digestive fire (Agni).`,
    keywords: ["panchakarma", "vamana", "virechana", "vasti", "nasya", "raktamokshana", "leech therapy", "snehana", "swedana", "detox"],
  },
  {
    id: "therapy-cancer-oncology-protocol",
    title: "Ayurvedic Oncology & Integrative Cancer Protocols",
    category: "department",
    content: `Led by Dr. Jannathul Firdouse, Changampally's Cancer Rehabilitation program is designed to work in synergy with allopathic cancer care (chemotherapy, radiation, and surgery):
- Phase 1: Chemotherapy Support — mitigating nausea, vomiting, peripheral neuropathy, and mucosal ulcerations while preserving liver and renal parameters.
- Phase 2: Bone Marrow & Hematopoietic Support — natural protocols to counter neutropenia, anemia, and thrombocytopenia, enabling patients to complete planned chemo cycles without interruptions.
- Phase 3: Radiation Recovery — topical and systemic rasayanas for radiation dermatitis, internal fibrosis, and dry mouth.
- Phase 4: Long-Term Rehabilitation & Cachexia Reversal — restorative Rasayanas, herbal immuno-modulators, and nutrition to rebuild strength and minimize recurrence.`,
    keywords: ["cancer rehabilitation", "oncology protocol", "chemotherapy support", "neutropenia", "thrombocytopenia", "radiation dermatitis", "cachexia"],
  },
  {
    id: "therapy-nomophobia-research",
    title: "Research on Nomophobia, Cyber Psychology & Happy Moon",
    category: "legacy",
    content: `Dr. Sajjad Changampally and Dr. Shahna MT have conducted extensive clinical research in cyber psychology and smartphone addiction (Nomophobia). In a published study of college students evaluated with the validated Nomophobia Questionnaire (NMP-Q), daily smartphone usage exceeding 5 hours was directly correlated with anxiety and sleep architecture breakdown. Changampally's clinical trial evaluated an integrative protocol pairing Ashwagandha Churna with classical Satvavajaya Chikitsa (Ayurvedic psychotherapy), demonstrating statistically significant reductions on HAM-A (anxiety), HAM-D (depression), and NMP-Q scales. This protocol is now practiced through Happy Moon at CRIH.`,
    keywords: ["nomophobia", "smartphone addiction", "cyber psychology", "happymoon", "sajjad research", "ashwagandha", "satvavajaya chikitsa", "ham-a", "nmp-q"],
  },

  // ═════════════════════════════════════════════════════════════════════
  // 6. PRACTICAL INFORMATION, VISITOR LOGISTICS & CONTACTS
  // ═════════════════════════════════════════════════════════════════════
  {
    id: "practical-contact-appointment-booking",
    title: "Contact Details, Telephone Numbers & Appointment Process",
    category: "contact",
    content: `Main Hospital Campus: Changampally Remedium Integrated Healthcare, Kandanakam, Edappal, Malappuram Dt., Kerala, India - 679582.
Telephone Contacts:
- Medical Enquiries & Appointments: +91 9072 666 103 / +91 9072 666 104 / +91 9072 666 105
- Administrative Office: +91 9072 666 106
- Changampally Kaivalya (Peringode): +91 70251 29232
- Changampally Wellness Centre (Munnar): +91 9072 666 107
- Changampally Vaidya Bhavan (Thirunavaya): +91 8921 043851
- Changampally Sanjeevani (Edappal): +91 85473 53585
Email: remediumchangampally@gmail.com
Official Website: https://www.changampally.com
Online Ayurvedic Medicine Store: https://www.changampallyonline.com
Appointments can be booked online via the website contact form or directly over telephone. Free second opinion reviews are available by uploading clinical records.`,
    keywords: ["contact", "phone numbers", "appointments", "edappal", "malappuram", "pincode", "679582", "email", "online consultation", "booking"],
  },
  {
    id: "practical-travel-location-directions",
    title: "How to Reach Changampally Remedium & Travel Guide",
    category: "contact",
    content: `Location: Changampally Remedium is situated in Kandanakam, Edappal in Malappuram district, Kerala. 
Travel Options:
- By Train: Nearest railway stations are Kuttippuram Railway Station (KTU, ~12 km / 20 mins drive) and Tirur Railway Station (TIR, ~28 km / 45 mins drive), with frequent express trains connecting Mumbai, Delhi, Bangalore, and Chennai.
- By Flight: Nearest airports are Calicut International Airport (CCJ, Karipur — ~65 km / 1.5 hrs drive) and Cochin International Airport (COK, Nedumbassery — ~95 km / 2.5 hrs drive). Both airports operate international flights from the Gulf (Dubai, Doha, Riyadh, Muscat) and domestic hubs.
- By Road: Edappal is well connected via NH 66 and state highways connecting Thrissur, Palakkad, and Kozhikode. Hospital transport and airport pick-up can be arranged upon request.`,
    keywords: ["how to reach", "directions", "kuttippuram", "calicut airport", "cochin airport", "railway station", "transport", "travel guide"],
  },
  {
    id: "practical-online-shop-medicines",
    title: "Authentic Medicine Manufacturing & Online Shop",
    category: "general",
    content: `Changampally manufactures authentic Ayurvedic formulations, Arishtams, Asavams, Kashayams, Thailams, Lehyams, and Ghrithams through its manufacturing facility Vedic Age and Vaidya Bhavan in Thirunnavaya, directed by Dr. Jibu Gurukkal. Medicines undergo classical preparation adhering strictly to pharmacopoeial standards and are exported worldwide. Patients and patrons can purchase genuine Changampally remedies online with doorstep delivery at https://www.changampallyonline.com.`,
    keywords: ["shop", "medicines", "online store", "vedic age", "manufacturing", "kashayam", "arishtam", "thailam", "changampallyonline.com"],
  },
  {
    id: "practical-free-second-opinion",
    title: "Free Second Opinion Program",
    category: "general",
    content: `Changampally offers a complimentary Free Second Opinion program for patients diagnosed with cancer, neurological conditions, autoimmune diseases, and intricate disorders. Patients or family members can submit existing biopsy reports, PET/CT scans, MRI, or blood work through the website contact page. A multidisciplinary clinical board comprising Ayurvedic consultants and modern medical physicians reviews the records to recommend an integrative treatment roadmap without any consultation charge.`,
    keywords: ["free second opinion", "second opinion", "consultation", "medical review", "reports", "pet scan", "mri", "biopsy"],
  }
];
