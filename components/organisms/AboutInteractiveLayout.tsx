"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TEAM } from "@/lib/constants";

const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as const },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

// ── 1. Static Timeline ──────────────────────────────────────────────────────
const TIMELINE_DATA = [
    { year: "1300 AD", title: "The Foundation", desc: "The Changampally Vaidya family establishes its Ayurvedic practice in Kerala." },
    { year: "18th Century", title: "Refining the Craft", desc: "Generations perfect classical formulations and Panchakarma therapies." },
    { year: "Late 1900s", title: "The Modern Shift", desc: "Integrating clinical rigour while preserving ancient authenticity." },
    { year: "Today", title: "Integrative Healing", desc: "Five centres providing dual-qualified care across intricate disorders." },
];

function InteractiveTimeline() {
    return (
        <div className="w-full bg-ivory py-24 md:py-32">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUpVariant} className="flex flex-col items-center text-center mb-16 md:mb-24">
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal mb-3 tracking-tight" style={{ fontFamily: "var(--font-juana)" }}>
                        The Journey
                    </h2>
                    <div className="font-sans font-medium text-[9px] md:text-[10px] md:tracking-widest tracking-[0.2em] uppercase text-plum">
                        A legacy spanning generations
                    </div>
                </motion.div>

                <div className="relative border-l border-plum/20 ml-3 md:ml-6 pl-8 md:pl-12 flex flex-col gap-12 md:gap-16">
                    {TIMELINE_DATA.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUpVariant}
                            className="relative"
                        >
                            <div className="absolute -left-[39px] md:-left-[55px] top-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-ivory border-2 border-plum shadow-sm" />
                            <span className="font-sans font-medium text-[10px] md:text-xs tracking-widest text-plum uppercase block mb-2">
                                {item.year}
                            </span>
                            <h3 className="font-serif text-xl md:text-2xl text-charcoal mb-2" style={{ fontFamily: "var(--font-juana)" }}>{item.title}</h3>
                            <p className="font-sans font-light text-sm text-taupe leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ── 2. Philosophy Columns ──────────────────────────────────────────────────
const SECTIONS = [
    {
        id: "philosophy",
        title: "01. Philosophy",
        heading: "A sanctuary of scientific healing",
        text: "The Changampally Vaidya Family embraces alternative medicine alongside a logical approach to therapy. We introduce a legacy dating to 1300 AD with honesty, clinical rigour, and deep compassion."
    },
    {
        id: "wellbeing",
        title: "02. Emotional Wellbeing",
        heading: "Healing lies in the mind.",
        text: "Medication alone isn't enough. Mental health is central to every Changampally care plan, guided by Ayurvedic psychiatry."
    },
    {
        id: "focus",
        title: "03. Clinical Focus",
        heading: "Treating the Intricate",
        text: "We specialise in chronic ailments: Cancer Rehabilitation, Infertility, Psychiatric Disorders, Diabetic Foot and Ulcers, Autoimmune Conditions, and Child Development."
    }
];

function InteractiveFocusWheel() {
    return (
        <div className="w-full relative py-24 md:py-32 bg-sandstone">
            <div className="text-center mb-16 md:mb-20 px-6">
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-sans font-medium text-[9px] tracking-[0.3em] uppercase text-plum mb-4">Who We Are</motion.p>
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal mb-4" style={{ fontFamily: "var(--font-juana)" }}>
                    Our Philosophy
                </motion.h2>
                <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-sans font-light text-sm sm:text-base text-charcoal/70 max-w-xl mx-auto leading-relaxed">
                    Three pillars of integrity, mental healing, and medical precision directing every care plan.
                </motion.p>
            </div>

            <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {SECTIONS.map((sec, idx) => (
                        <motion.div
                            key={sec.id}
                            variants={fadeUpVariant}
                            className="group flex flex-col bg-ivory border border-plum/10 rounded-2xl p-8 lg:p-10"
                        >
                            <div className="flex justify-between items-baseline mb-6 border-b border-plum/10 pb-4">
                                <span className="font-serif text-3xl md:text-4xl text-plum font-light" style={{ fontFamily: "var(--font-juana)" }}>
                                    0{idx + 1}
                                </span>
                                <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold text-plum">
                                    {sec.title.split('. ')[1]}
                                </span>
                            </div>
                            <h3 className="font-serif font-light text-xl sm:text-2xl text-charcoal leading-snug mb-4 tracking-tight" style={{ fontFamily: "var(--font-juana)" }}>
                                {sec.heading}
                            </h3>
                            <p className="font-sans font-light text-sm text-charcoal/80 leading-relaxed">
                                {sec.text}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

// ── 3. Tabs (Vision & Mission) ──────────────────────────────────────────────
const TABS = [
    { id: "vision", label: "Our Vision", content: "Ayurveda, the ancient system of medicine from India, is known for its scientific healing approach. We envision a world where this wisdom is accessible, evidence informed, and integrated with modern care." },
    { id: "mission", label: "Our Mission", content: "We aim to bring Ayurveda to the forefront of modern medicine while preserving its authenticity — treating intricate chronic disorders with compassion, precision, and the accumulated wisdom of generations." },
    { id: "mind", label: "Mental Wellbeing", content: "Guided by Dr. Sajjad Changampally, MD (Ayurvedic Psychiatry), we provide counselling, psychotherapy, and Ayurvedic psychiatric care. Healing is never complete without looking after the mind." },
    { id: "safety", label: "Safety First", content: "\"Treat only if you are sure that the person is safe in your hands.\" — Dr. Jannathul Firdouse. Safety and honesty are the most sacred aspects of our practice. We will never overstate outcomes." },
];

function ScrollRevealPrinciples() {
    return (
        <div className="w-full bg-sandstone py-24 md:py-32">
            <div className="max-w-[1440px] mx-auto px-6 text-center">
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUpVariant} className="mb-16 md:mb-20">
                    <p className="font-sans font-medium text-[9px] tracking-[0.3em] uppercase text-plum mb-4">Guiding Principles</p>
                    <h2 className="font-serif text-4xl sm:text-5xl text-charcoal" style={{ fontFamily: "var(--font-juana)" }}>
                        The philosophy directing every consultation.
                    </h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 text-left"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {TABS.map((tab, idx) => (
                        <motion.div key={tab.id} variants={fadeUpVariant} className="flex flex-col bg-ivory p-8 md:p-10 border border-plum/10 rounded-2xl">
                            <span className="font-serif text-2xl text-plum mb-4" style={{ fontFamily: "var(--font-juana)" }}>0{idx + 1}</span>
                            <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-4" style={{ fontFamily: "var(--font-juana)" }}>{tab.label}</h3>
                            <p className="font-sans font-light text-sm text-taupe leading-relaxed">{tab.content}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

// ── 4. Team ──────────────────────────────────────────────────────────────────
function InteractiveTeam() {
    return (
        <motion.ul
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            role="list"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
        >
            {TEAM.map((member) => (
                <motion.li key={member.id} variants={fadeUpVariant} className="group relative">
                    <div className="relative h-full p-6 md:p-8 bg-sandstone border border-plum/10 transition-all duration-500 rounded-2xl overflow-hidden w-full flex flex-col items-center text-center shadow-soft hover:shadow-lg hover:-translate-y-1">
                        {/* Doctor photo centered */}
                        <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 border-4 border-ivory shadow-md mb-5 bg-plum/10">
                            {member.image ? (
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="font-serif text-3xl font-light text-plum" style={{ fontFamily: "var(--font-juana)" }}>
                                        {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Name & Credentials */}
                        <h3 className="font-serif font-light text-xl md:text-2xl text-charcoal leading-tight mb-1" style={{ fontFamily: "var(--font-juana)" }}>
                            {member.name}
                        </h3>
                        <span className="font-sans font-medium text-xs text-plum mb-2 block">{member.credentials}</span>

                        <span className="font-sans font-light text-xs text-taupe block mb-4 border-b border-plum/15 pb-3 w-full">
                            {member.role}
                        </span>

                        {/* Description */}
                        <p className="font-sans font-light text-sm leading-relaxed text-taupe text-center flex-grow">
                            {member.bio}
                        </p>
                    </div>
                </motion.li>
            ))}
        </motion.ul>
    );
}

// ── Main Layout ──────────────────────────────────────────────────────────────
export default function AboutInteractiveLayout() {
    return (
        <div className="bg-ivory selection:bg-plum/20">
            {/* ── Page hero — Brand Kit Plum theme ─────────────────────────────── */}
            <section className="relative pt-24 md:pt-36 pb-12 md:pb-16 px-4 md:px-12 xl:px-24 bg-plum overflow-hidden" style={{ minHeight: "20vh" }} aria-label="About Changampally — hero">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 blur-[120px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/3" />
                
                <div className="max-w-[1440px] mx-auto text-center relative z-10 w-full">
                    <motion.div initial="hidden" animate="show" variants={staggerContainer} className="max-w-4xl mx-auto">
                        <motion.p variants={fadeUpVariant} className="font-sans font-medium text-[9px] tracking-[0.4em] uppercase mb-4 text-ivory/60">
                            Est. 1300 AD · Kerala, India
                        </motion.p>
                        <motion.h1 variants={fadeUpVariant} className="font-serif font-light text-4xl sm:text-5xl md:text-[4.5rem] text-ivory tracking-tight mb-4 leading-tight" style={{ fontFamily: "var(--font-juana)" }}>
                            The Vaidya Legacy
                        </motion.h1>
                        <motion.p variants={fadeUpVariant} className="font-sans font-light text-sm sm:text-base text-ivory/80 leading-relaxed max-w-2xl mx-auto">
                            A lineage of healers preserving the purity of Ayurveda while integrating the precision of modern medicine across five centres.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            <InteractiveTimeline />
            <InteractiveFocusWheel />
            <ScrollRevealPrinciples />

            <section className="py-24 md:py-32 px-6 bg-ivory" aria-labelledby="team-heading">
                <div className="max-w-[1440px] mx-auto">
                    <div className="text-center mb-16">
                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-sans font-medium text-[9px] tracking-[0.3em] uppercase text-plum mb-4">Our Specialists</motion.p>
                        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-serif text-4xl sm:text-5xl text-charcoal mb-4" style={{ fontFamily: "var(--font-juana)" }}>
                            The Physician Team
                        </motion.h2>
                        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-sans font-light text-sm text-taupe max-w-xl mx-auto">
                            Dual-qualified specialists — Ayurvedic and allopathic — working together.
                        </motion.p>
                    </div>
                    <InteractiveTeam />
                </div>
            </section>

            <section className="py-20 md:py-32 px-4 md:px-6 bg-plum relative overflow-hidden" aria-label="Chief Physician message">
                <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-ivory/10 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <motion.div
                    className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    <motion.p variants={fadeUpVariant} className="font-sans font-medium text-[9px] tracking-[0.3em] uppercase mb-8 text-ivory/50">In Their Own Words</motion.p>
                    <motion.blockquote variants={fadeUpVariant} className="relative w-full px-4">
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl text-ivory/10 pointer-events-none leading-none select-none" aria-hidden="true" style={{ fontFamily: "Georgia, serif" }}>“</span>
                        <p className="font-serif font-light text-2xl sm:text-3xl md:text-4xl text-ivory leading-tight tracking-tight mb-10 relative z-10" style={{ fontFamily: "var(--font-juana)" }}>
                            The doctorhood is not the promise of extended life but the accuracy in diagnosis,
                            excellence in practical knowledge, and the compassionate touch.
                        </p>
                        <footer className="flex flex-col items-center gap-4">
                            <div className="w-12 h-px bg-ivory/30" aria-hidden="true" />
                            <cite className="not-italic mt-4">
                                <strong className="block font-serif font-light text-xl text-ivory mb-2" style={{ fontFamily: "var(--font-juana)" }}>
                                    Dr. Jannathul Firdouse Changampally
                                </strong>
                                <span className="block font-sans font-light text-[10px] tracking-widest uppercase text-ivory/60">
                                    BSc, BAMS — Chief Consultant
                                </span>
                            </cite>
                        </footer>
                    </motion.blockquote>
                </motion.div>
            </section>
        </div>
    );
}
