"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// ── Verified department data ────────────────────────────────────────────────

const DEPARTMENTS = [
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

export default function DepartmentsPage() {
    return (
        <main className="min-h-screen bg-sandstone selection:bg-plum/20 selection:text-plum-dark font-sans">

            {/* ── Professional Plum Hero ────────────────────────────────────────── */}
            <section className="relative pt-24 md:pt-36 pb-16 md:pb-20 px-4 md:px-12 xl:px-24 bg-plum overflow-hidden">
                {/* Subtle light ambient glow in background to break up solid color */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 blur-[120px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/3" />

                <div className="max-w-[1440px] mx-auto text-left flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 relative z-10">
                    <div className="max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="font-serif font-light text-4xl sm:text-5xl md:text-[4.5rem] text-ivory tracking-tight leading-tight mb-4 md:mb-6"
                            style={{ fontFamily: "var(--font-juana)" }}
                        >
                            Medical Departments
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                            className="font-sans font-light text-sm sm:text-base md:text-lg text-ivory leading-relaxed max-w-2xl pr-4 md:pr-0"
                        >
                            Our integrated approach combines the principles of Ayurveda with conventional modern medicine to manage complex diseases. The focus is on evidence based approaches to root out the causes of diseases.
                        </motion.p>
                    </div>
                    {/* Professional metric/highlight stat for balance */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="hidden md:flex flex-col items-end border-l border-ivory/20 pl-8 py-2"
                    >
                        <span className="font-serif text-4xl text-ivory mb-1">{DEPARTMENTS.length}</span>
                        <span className="font-sans font-medium text-[11px] tracking-widest uppercase text-ivory/60">Specialised Units</span>
                    </motion.div>
                </div>
            </section>

            {/* ── Refined Smaller Departments Grid WITH IMAGES RESTORED ────────── */}
            <section className="relative py-16 md:py-20 px-4 md:px-6" aria-labelledby="departments-heading">
                <div className="max-w-[1440px] mx-auto">
                    {/* Retained 3-column, cards have less internal padding to feel tighter */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                        {DEPARTMENTS.map((dept, idx) => (
                            <motion.article
                                key={dept.id}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: (idx % 6) * 0.08, ease: "easeOut" }}
                                className="group flex flex-col bg-white border border-charcoal/[0.04] hover:border-plum/20 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-lg hover:-translate-y-1 h-full"
                            >
                                {/* Fully Visible Image Banner */}
                                <div className="h-32 md:h-40 w-full relative bg-plum/5 shrink-0 border-b border-charcoal/[0.02] overflow-hidden">
                                    <img
                                        src={`/images/departments/dept_${dept.id}.png`}
                                        alt={`${dept.name} visualization`}
                                        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                                    />

                                    {/* Subtle Index */}
                                    <div className="absolute top-3 right-4 md:top-4 md:right-5 text-ivory/90 drop-shadow-md font-serif font-light text-lg md:text-xl italic z-20 transition-opacity duration-300">
                                        {String(idx + 1).padStart(2, '0')}
                                    </div>
                                </div>

                                {/* Content Sector */}
                                <div className="p-6 md:p-8 flex flex-col flex-grow bg-white z-10 text-left">
                                    <h2 className="font-serif text-xl md:text-2xl text-charcoal mb-3 group-hover:text-plum transition-colors duration-500" style={{ fontFamily: "var(--font-juana)" }}>
                                        {dept.name}
                                    </h2>

                                    <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-5 md:mb-7 flex-grow">
                                        {dept.description}
                                    </p>

                                    {/* Diseases list - refined size */}
                                    {dept.diseases.length > 0 && (
                                        <div className="mt-auto border-t border-charcoal/10 pt-4 md:pt-5">
                                            <h3 className="text-[9px] md:text-[10px] font-sans font-semibold uppercase tracking-[0.18em] text-plum mb-3">
                                                Conditions Treated
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {dept.diseases.map(disease => (
                                                    <span
                                                        key={disease}
                                                        className="inline-flex px-2.5 py-1 bg-ivory border border-charcoal/[0.06] rounded text-[10px] md:text-[11px] font-sans text-charcoal/70 group-hover:text-charcoal transition-colors duration-500"
                                                    >
                                                        {disease}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ──────────────────────────────────────────────────────── */}
            <section className="py-16 md:py-20 px-4 md:px-6 bg-ivory text-center border-t border-plum/10" aria-label="Book a consultation">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal mb-4 tracking-tight" style={{ fontFamily: "var(--font-juana)" }}>
                        Need guidance on specialized care?
                    </h2>
                    <p className="font-sans text-sm md:text-base mb-6 md:mb-8 text-charcoal/80 leading-relaxed">
                        Request a preliminary assessment consultation to let our multidisciplinary team direct you to the optimal care path.
                    </p>
                    <Link href="/contact" className="inline-flex items-center justify-center w-full sm:w-auto px-6 md:px-8 py-3 md:py-3.5 bg-transparent border border-plum/30 text-plum font-sans font-medium text-[10px] md:text-xs tracking-[0.2em] uppercase rounded-full hover:bg-plum hover:text-white transition-all duration-300">
                        Request Assessment
                    </Link>
                </motion.div>
            </section>
        </main>
    );
}
