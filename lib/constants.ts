/**
 * @file lib/constants.ts
 * All content sourced directly from www.changampally.com — no fabrications.
 * Testimonials: NONE (original site has none — will not be invented here).
 * Legacy timeline: limited to what is publicly confirmed (est. 1300 AD by the family).
 * Services: Based on 5 verified centres and their stated specialisations.
 */

import type {
    NavItem,
    FooterLinkGroup,
    SocialLink,
    TimelineEvent,
    ServiceItem,
    Centre,
    TeamMember,
} from "./types";

// ---------------------------------------------------------------------------
// Site Metadata — verified
// ---------------------------------------------------------------------------

export const SITE_NAME = "Changampally";
export const SITE_TAGLINE = "Centre of Excellence in Intricate Disorders";
export const SITE_DESCRIPTION =
    "Changampally is a Kerala-based integrated healthcare institution rooted in the Vaidya family tradition since 1300 AD — combining the wisdom of Ayurveda with the precision of modern medicine, and a deep commitment to mental wellbeing.";

// ---------------------------------------------------------------------------
// Real contact details — from www.changampally.com footer
// ---------------------------------------------------------------------------
export const CONTACT = {
    addressLine1: "Changampally Remedium Integrated Healthcare",
    addressLine2: "Kandanakam, Edappal, Malappuram Dt., Kerala, India - 679582",
    phoneMedical1: "+91 9072666104",
    phoneMedical2: "+91 9072666105",
    phoneOffice: "+91 9072666104",
    email: "remediumchangampally@gmail.com",
    website: "https://www.changampally.com",
    shop: "https://www.changampallyonline.com",
};

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export const NAV_LINKS: NavItem[] = [
    { label: "Home", href: "/", ariaLabel: "Go to Changampally home" },
    { label: "About", href: "/about", ariaLabel: "About Changampally and our legacy" },
    { label: "Centres", href: "/services", ariaLabel: "Explore our centres of excellence" },
    { label: "Departments", href: "/departments", ariaLabel: "View our Ayurvedic departments" },
    { label: "Doctors", href: "/doctors", ariaLabel: "Meet our doctors and specialists" },
    { label: "Blogs", href: "/blogs", ariaLabel: "Read our health and wellness blogs" },
    { label: "Contact", href: "/contact", ariaLabel: "Get in touch with us" },
];

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
    {
        heading: "Company",
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

// Social links — verified from user-provided URLs
export const SOCIAL_LINKS: SocialLink[] = [
    {
        platform: "Instagram",
        href: "https://www.instagram.com/changampally_remedium?igsh=MXFvdTRrN2Z5NDVjcQ==",
        ariaLabel: "Follow Changampally on Instagram",
        iconId: "instagram",
    },
    {
        platform: "Facebook",
        href: "https://www.facebook.com/people/Changampally-Remedium-Integrated-healthcare/61569368193000/",
        ariaLabel: "Like Changampally on Facebook",
        iconId: "facebook",
    },
    {
        platform: "YouTube",
        href: "https://www.youtube.com/@ChangampallyRemedium",
        ariaLabel: "Subscribe to Changampally on YouTube",
        iconId: "youtube",
    },
];

// ---------------------------------------------------------------------------
// Legacy Timeline
// Verified fact: The Changampally Vaidya family dates their practice to 1300 AD.
// All other dates in the previous version were FABRICATED and have been removed.
// Only the confirmed founding and the present state of the institution are listed.
// ---------------------------------------------------------------------------

export const TIMELINE_EVENTS: TimelineEvent[] = [
    {
        id: "timeline-1",
        year: "1300 AD",
        era: "Founding",
        title: "The Vaidya Legacy Begins",
        description:
            "The Changampally Vaidya family begins its healing tradition in Kerala. This lineage of Ayurvedic physicians would pass its knowledge — and its commitment to compassionate care — from generation to generation, unbroken for over seven centuries.",
        imageAlt: "Depiction of the Changampally Vaidya family's founding era in Kerala",
    },
    {
        id: "timeline-2",
        year: "Present",
        era: "Present",
        title: "An Integrated Institution",
        description:
            "Today, the Changampally family operates five centres across Kerala — from an integrated hospital at Edappal to Ayurvedic wellness retreats in Peringode and Munnar. With 120 beds, 24×7 care, and over 50 specialists across 3 core disciplines, the mission remains unchanged: restore health with honesty and wisdom.",
        imageAlt: "Changampally's five modern centres of excellence across Kerala",
    },
];

// ---------------------------------------------------------------------------
// Centres of Excellence — verified from www.changampally.com/excellence
// ---------------------------------------------------------------------------


export const CENTRES: Centre[] = [
    {
        id: "centre-remedium",
        anchor: "remedium",
        name: "Changampally Remedium",
        tagline: "Integrated Healthcare",
        location: "Kandanakam, Edappal",
        phone: "+91 9072 666 104",
        description:
            "Changampally Remedium is an integrated healthcare hospital delivering scientific care — combining Ayurveda and modern medicine. Specialised units include Cancer Rehabilitation (Ayurvedic oncology), mental health through counselling and psychotherapy, a Cosmetooncology unit for post-therapy care, and comprehensive management of lifestyle disorders, infertility, paediatric conditions, and chronic diseases.",
        specialisations: [
            "Oncology & Tumor Disorders",
            "Mental Health & Behavioural Disorders",
            "Endocrine & Metabolic Disorders",
            "Cardio-renal & Respiratory Disorders",
            "Rare & Multi-system Disorders",
            "Reproductive & Fertility Care",
            "Neurological & Neuro-psychiatric Disorders",
            "Autoimmune & Inflammatory Disorders",
            "Gastrointestinal & Hepatobiliary Disorders",
            "Musculoskeletal & Degenerative Disorders",
            "Dermatology, Aesthetic & Regenerative Care",
            "Diabetic & Chronic Wound Care",
            "Oncology-Associated Specialty Care",
        ],
    },
    {
        id: "centre-kaivalya",
        anchor: "kaivalya",
        name: "Changampally Kaivalya",
        tagline: "Ayurveda Village & Retreat",
        location: "Peringode",
        phone: "+91 70251 29232",
        description:
            "Set in a serene, lush environment in Peringode, Kaivalya blends traditional Ayurvedic wisdom with modern comforts. The centre provides a peaceful sanctuary for scientific healing, personalised therapies, Ayurvedic meals, and restful accommodation — designed for those seeking both recovery and deep rejuvenation.",
        specialisations: [
            "Stress Management Therapy",
            "Obesity & Metabolism Correction",
            "Insomnia and Sleep Disorder Care",
            "Migraine and Headache Treatment",
            "Seasonal Detox Programmes",
        ],
    },
    {
        id: "centre-wellness",
        anchor: "wellness",
        name: "Changampally Ayurveda Wellness Centre",
        tagline: "Heritage Retreat",
        location: "Veu, Munnar",
        phone: "+91 9072 666 107",
        description:
            "Nestled in the highlands of Munnar, this heritage retreat combines the cultural richness of Ayurveda with contemporary wellness practices. Guests experience personalised therapies, Ayurvedic meals, yoga, and meditation in a tranquil setting designed around scientific healing and rejuvenation.",
        specialisations: [
            "Scientific Rejuvenation Packages",
            "Anti-ageing Therapies",
            "Ayurvedic Beauty & Skin Treatments",
            "Immune Boosting Programmes",
            "Bone and Spine Care",
        ],
    },
    {
        id: "centre-vaidyabhavan",
        anchor: "vaidyabhavan",
        name: "Changampally Vaidya Bhavan",
        tagline: "Authentic Ayurvedic Heritage Centre",
        location: "Thirunavaya",
        phone: "+91 8921 043851",
        description:
            "Located in Thirunavaya, Vaidya Bhavan is rooted in authentic Ayurvedic tradition. The centre's heritage-style architecture reflects the timeless legacy of the Changampally lineage. It offers personalised care from experienced practitioners, Ayurvedic meals, and comfortable accommodation — from standard rooms to A/C rooms with private balconies.",
        specialisations: [
            "Respiratory Disorders Management",
            "Traditional Panchakarma Therapy",
            "Women's Health Ayurveda",
            "Geriatric Care Programmes",
            "Mind-Body Wellness Therapies",
        ],
    },
    {
        id: "centre-sanjeevani",
        anchor: "sanjeevani",
        name: "Changampally Sanjeevani",
        tagline: "Scientific Healing Retreat",
        location: "Edappal",
        phone: "+91 85473 53585",
        description:
            "Sanjeevani blends traditional Ayurvedic care with modern amenities across a tranquil landscape in Edappal. The centre features specialised treatment suites, lush herbal gardens, a meditation pavilion, and a therapeutic spa — offering personalised therapies for physical and emotional wellbeing in a harmonious natural setting.",
        specialisations: [
            "Joint Care & Arthritis Management",
            "Digestive Disorders Treatment",
            "Lifestyle Disease Management",
            "Skin Disease Treatments",
            "Rejuvenation & Detox Programmes",
        ],
    },
];

// ---------------------------------------------------------------------------
// SERVICE_ITEMS — kept for ServiceSpectrum component compatibility
// Reflects verified service categories: Traditional Ayurveda, Integrated Care,
// and Mental & Emotional Wellbeing (confirmed by Dr. Sajjad's psychiatry role
// and Remedium's "Mental Health & Behavioural Disorders" specialisation).
// All fabricated services (cardiovascular cardiology unit, genomic diagnostics,
// fake Panchakarma specifics not mentioned on site) have been removed.
// ---------------------------------------------------------------------------

export const SERVICE_ITEMS: ServiceItem[] = [

    // ── Traditional Ayurveda ─────────────────────────────────────────────
    {
        id: "svc-panchakarma",
        category: "Traditional",
        name: "Panchakarma Therapy",
        shortDescription: "Classical Ayurvedic detoxification & purification",
        longDescription:
            "Rooted in the Changampally Vaidya tradition, Panchakarma is offered at Vaidya Bhavan as the cornerstone classical therapy — a systematic bio-purification process to restore doshic balance and address chronic conditions.",
        iconId: "leaf",
        highlights: ["Bio-purification", "Doshic balance", "Chronic condition management"],
    },
    {
        id: "svc-womens-health",
        category: "Traditional",
        name: "Women's Health Ayurveda",
        shortDescription: "Classical Ayurvedic care for women at every stage",
        longDescription:
            "Available at Changampally Vaidya Bhavan — comprehensive Ayurvedic care spanning reproductive health, hormonal balance, and menopausal support through classical formulations and therapies.",
        iconId: "flower",
        highlights: ["Hormonal balance", "Reproductive health", "Menopausal support"],
    },
    {
        id: "svc-rejuvenation",
        category: "Traditional",
        name: "Rejuvenation & Detox",
        shortDescription: "Seasonal detox and anti-ageing Ayurvedic programmes",
        longDescription:
            "Offered across Kaivalya, the Wellness Centre, and Sanjeevani — personalised detox programmes, anti-ageing therapies, and immune-boosting packages rooted in classical Ayurvedic science.",
        iconId: "sun",
        highlights: ["Seasonal detox", "Anti-ageing", "Immune enhancement"],
    },

    // ── Integrated Care (Ayurveda + Modern Medicine) ─────────────────────
    {
        id: "svc-oncology",
        category: "Integrated",
        name: "Cancer Rehabilitation",
        shortDescription: "Ayurvedic oncology integrated with modern cancer care",
        longDescription:
            "Led by Dr. Jannathul Firdouse Changampally — an Ayurveda Oncology Specialist with 25 years of experience and a 12-year tenure at Nims Super Specialty Hospital — Changampally Remedium's Cancer Rehabilitation unit combines evidence-based Ayurvedic protocols with conventional oncology to support recovery, mitigate side-effects, and improve quality of life.",
        iconId: "microscope",
        highlights: ["Ayurvedic oncology", "Side-effect mitigation", "Quality of life support"],
    },
    {
        id: "svc-lifestyle",
        category: "Integrated",
        name: "Lifestyle Disease Management",
        shortDescription: "Evidence-based management of chronic and metabolic conditions",
        longDescription:
            "Changampally addresses lifestyle disorders, diabetes, chronic wounds including diabetic foot, autoimmune conditions, and skin diseases — through an integrated approach that combines the root-cause focus of Ayurveda with the diagnostic precision of modern medicine.",
        iconId: "activity",
        highlights: ["Metabolic disorders", "Diabetic & chronic wound care", "Autoimmune conditions"],
    },
    {
        id: "svc-fertility",
        category: "Integrated",
        name: "Reproductive & Fertility Care",
        shortDescription: "Integrated approach to infertility and reproductive health",
        longDescription:
            "Changampally Remedium's Reproductive & Fertility Care unit provides integrated support for infertility — combining modern diagnostic workup with targeted Ayurvedic therapeutic protocols for both men and women.",
        iconId: "heart",
        highlights: ["Infertility support", "Dual diagnostic approach", "Hormonal care"],
    },

    // ── Mental & Emotional Wellbeing ──────────────────────────────────────
    {
        id: "svc-mental-health",
        category: "Integrated",
        name: "Mental Health & Psychiatric Care",
        shortDescription: "Ayurvedic psychiatry, counselling & psychotherapy",
        longDescription:
            "Changampally Remedium offers dedicated mental health care through counselling and psychotherapy. This is further supported by Dr. Sajjad Changampally, an MD in Ayurvedic Psychiatry, who brings scientific mental health approaches through Ayurvedic psychiatric practice at Changampally Vaidya Bhavan — addressing psychiatric conditions, stress, anxiety, sleep disorders, and contemporary challenges with compassionate, evidence-informed care.",
        iconId: "brain",
        highlights: ["Ayurvedic psychiatry", "Counselling & psychotherapy", "Stress & sleep care"],
    },
    {
        id: "svc-stress",
        category: "Traditional",
        name: "Mind-Body Wellness",
        shortDescription: "Stress, sleep, and mental calm through Ayurvedic therapies",
        longDescription:
            "Available across Kaivalya and Vaidya Bhavan — dedicated programmes for stress management, insomnia, migraine, and overall mind-body balance, using Shirodhara, medicated therapies, and personalised Ayurvedic protocols.",
        iconId: "moon",
        highlights: ["Stress management", "Insomnia care", "Migraine treatment"],
    },
    {
        id: "svc-neuro",
        category: "Integrated",
        name: "Neurological & Neuro-psychiatric Disorders",
        shortDescription: "Integrated care for neurological conditions",
        longDescription:
            "Changampally Remedium's neurology unit addresses neurological and neuro-psychiatric conditions through a combined approach — modern neurological assessment alongside Ayurvedic neuro-rejuvenation therapies and mind-body practices.",
        iconId: "zap",
        highlights: ["Neurological assessment", "Ayurvedic neuro-rejuvenation", "Neuro-psychiatric support"],
    },
];

// ---------------------------------------------------------------------------
// Trust Metrics — verified from About page (www.changampally.com/about)
// ---------------------------------------------------------------------------
export const TRUST_METRICS = [
    { value: "24×7", label: "Emergency Care" },
    { value: "120", label: "Beds" },
    { value: "3", label: "Core Specialties" },
    { value: "50+", label: "Expert Practitioners" },
    { value: "1300", label: "Est. Year AD" },
    { value: "5", label: "Centres Across Kerala" },
];

// ---------------------------------------------------------------------------
// Management Team — verified from About page (www.changampally.com/about)
// ---------------------------------------------------------------------------
export const TEAM = [
    {
        id: "team-1",
        name: "Dr. Jannathul Firdouse Changampally",
        credentials: "BSc, BAMS",
        role: "Chief Consultant — Ayurveda Oncology Specialist",
        bio: "A distinguished figure in Ayurvedic oncology with 25 years of expertise. Dr. Firdouse served as a cancer consultant at Nims Super Specialty Hospital, Trivandrum for 12 years and is a member of the Open Source Drug Discovery (OSDD) initiative.",
    },
    {
        id: "team-2",
        name: "Dr. Jibu Gurukkal Changampally",
        credentials: "MBBS",
        role: "Allopathic General Physician & Medicine Manufacturer",
        bio: "An accomplished Allopathic General Physician with 13 years of experience. Actively engaged in Ayurvedic medicine manufacturing and export at Changampally Vaidya Bhavan and Vedic Age in Thirunnavaya. Medical Director at Orchid Medicity.",
    },
    {
        id: "team-3",
        name: "Dr. Sajjad Changampally",
        credentials: "MD (Ayurvedic Psychiatry)",
        role: "Ayurvedic Psychiatrist & Managing Director, Happymoon",
        bio: "An esteemed Ayurvedic Psychiatrist offering compassionate care at Changampally Vaidya Bhavan, Thirunnavaya. Managing Director of Happymoon, advocating scientific mental health approaches. Secretary, Ayurveda Medical Association of India, Ponnani. Researcher on mobile phone addiction and contemporary mental health challenges.",
    },
];
