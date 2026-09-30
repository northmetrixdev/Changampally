"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import SectionHeading from "@/components/atoms/SectionHeading";
import { TEAM } from "@/lib/constants";

// ─────────────────────────────────────────────────────────────
// Sub-components for each scrollytelling section
// ─────────────────────────────────────────────────────────────

function HeroParallax() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

    return (
        <section
            ref={ref}
            className="relative h-screen flex items-center justify-center overflow-hidden bg-plum"
        >
            {/* Background Image/Pattern placeholder overlay */}
            <motion.div
                style={{ scale: scaleImage }}
                className="absolute inset-0 z-0 opacity-20 bg-[url('/hero-bg-placeholder.jpg')] bg-cover bg-center"
            />
            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-plum/80 to-charcoal/90" />

            <motion.div
                style={{ y: yText, opacity: opacityText }}
                className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center"
            >
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="eyebrow mb-6 text-sandstone tracking-[0.3em] uppercase"
                >
                    Est. 1300 AD · Kerala, India
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="font-serif font-light text-5xl md:text-7xl lg:text-8xl tracking-tight text-ivory mb-6"
                >
                    The Vaidya Legacy
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="font-sans font-light text-lg md:text-xl text-ivory/80 max-w-2xl leading-relaxed"
                >
                    Practising Ayurvedic medicine for over seven centuries.
                    Today their tradition lives on across five centres — honouring the past, integrating the present.
                </motion.p>
            </motion.div>
        </section>
    );
}

function StoryStickySection() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    // Subcontent 1
    const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.35, 0.5], [0, 1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.15, 0.35, 0.5], [50, 0, 0, -50]);

    // Subcontent 2
    const opacity2 = useTransform(scrollYProgress, [0.4, 0.55, 0.75, 0.9], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.4, 0.55, 0.75, 0.9], [50, 0, 0, -50]);

    // Subcontent 3
    const opacity3 = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);
    const y3 = useTransform(scrollYProgress, [0.8, 0.9, 1], [50, 0, 0]);

    // Background transition
    const bgOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return (
        <section ref={ref} className="relative h-[400vh]">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-ivory text-charcoal px-6">

                <motion.div
                    style={{ opacity: bgOpacity }}
                    className="absolute inset-0 pointer-events-none bg-gradient-to-b from-sandstone/30 to-transparent"
                />

                <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-start h-full">
                    {/* Left Sticky Title - Aligned downward and left */}
                    <div className="md:sticky md:top-[40%] flex justify-start">
                        <SectionHeading
                            id="brand-story-heading"
                            title="Who We Are"
                            subtitle="A sanctuary of scientific healing and wellbeing, rooted in Kerala."
                            centered={false}
                        />
                    </div>

                    {/* Right Scrolling Content - Absolute overlapping */}
                    <div className="relative h-1/2 md:h-full flex items-center w-full">
                        {/* Paragraph 1 */}
                        <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute w-full space-y-4">
                            <h3 className="text-2xl font-serif text-plum md:text-3xl">Our Roots</h3>
                            <p className="font-sans font-light text-xl md:text-2xl text-taupe leading-relaxed">
                                The Changampally Vaidya Family is embracing alternative medicine alongside
                                a scientific approach to therapy. We introduce this medical legacy — dating
                                to 1300 AD — to the world with honesty, clinical rigour, and deep compassion.
                            </p>
                        </motion.div>

                        {/* Paragraph 2 */}
                        <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute w-full space-y-4 pointer-events-none">
                            <h3 className="text-2xl font-serif text-plum md:text-3xl">Focus Areas</h3>
                            <p className="font-sans font-light text-xl md:text-2xl text-taupe leading-relaxed">
                                Our primary focus areas are cancer rehabilitation, infertility, child intellectual
                                and physical disabilities, psychiatric problems, lifestyle disorders, diabetic foot
                                and chronic ulcers, skin conditions, and autoimmune disorders. We provide solace to those who are without other options.
                            </p>
                        </motion.div>

                        {/* Paragraph 3 */}
                        <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute w-full space-y-4 pointer-events-none">
                            <h3 className="text-2xl font-serif text-plum md:text-3xl">Body & Mind</h3>
                            <p className="font-sans font-light text-xl md:text-2xl text-taupe leading-relaxed">
                                We believe that medication alone is not enough. The body and the mind must both
                                be cared for. That is why mental health and emotional wellbeing are not an
                                afterthought at Changampally — they are central to every care plan.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const VALUES = [
    {
        heading: "Our Vision",
        body: "Ayurveda, the ancient system of medicine from India, is known for its scientific healing approach. We envision a world where this wisdom is accessible, evidence-informed, and integrated with modern care.",
    },
    {
        heading: "Our Mission",
        body: "We aim to bring Ayurveda to the forefront of modern medicine while preserving its authenticity — treating intricate chronic disorders with compassion, precision, and the accumulated wisdom of generations.",
    },
    {
        heading: "Mental Wellbeing",
        body: "Guided by Dr. Sajjad Changampally, MD (Ayurvedic Psychiatry), we provide counselling, psychotherapy, and Ayurvedic psychiatric care. Healing is never complete without looking after the mind.",
    },
    {
        heading: "Safety First",
        body: "\"Treat only if you are sure that the person is safe in your hands.\" — Dr. Jannathul Firdouse. Safety and honesty are the most sacred aspects of our practice. We will never overstate outcomes.",
    },
];

function VisionImmersiveScroll() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    const opacities = [
        useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [0, 1, 1, 0]),
        useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]),
        useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]),
        useTransform(scrollYProgress, [0.75, 0.85, 0.95, 1], [0, 1, 1, 0]),
    ];

    const scales = [
        useTransform(scrollYProgress, [0, 0.3], [0.95, 1.05]),
        useTransform(scrollYProgress, [0.25, 0.55], [0.95, 1.05]),
        useTransform(scrollYProgress, [0.5, 0.8], [0.95, 1.05]),
        useTransform(scrollYProgress, [0.75, 1], [0.95, 1.05]),
    ];

    return (
        <section ref={ref} className="relative h-[400vh] bg-charcoal text-ivory">
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
                {/* Background ethereal glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-plum/10 rounded-full blur-[100px] pointer-events-none" />

                {VALUES.map((value, idx) => (
                    <motion.div
                        key={idx}
                        style={{ opacity: opacities[idx], scale: scales[idx] }}
                        className={`absolute w-full px-6 md:px-24 flex flex-col items-center text-center isolate ${idx > 0 ? "pointer-events-none" : ""}`}
                    >
                        <span className="text-xl md:text-2xl font-serif text-plum/60 tracking-widest uppercase mb-8">0{idx + 1}</span>
                        <h3
                            className="font-serif font-light text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-ivory/90 mb-8 max-w-5xl leading-[0.9]"
                            style={{ fontFamily: "var(--font-catchye)", letterSpacing: "0.02em" }}
                        >
                            {value.heading}
                        </h3>
                        <p className="font-sans font-light text-lg md:text-2xl text-ivory/60 max-w-3xl leading-relaxed">
                            {value.body}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

function TeamGridSection() {
    return (
        <section className="py-32 px-6 bg-ivory" aria-labelledby="team-heading">
            <div className="max-w-[1440px] mx-auto">
                <div className="text-center mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="eyebrow mb-4 text-taupe uppercase tracking-[0.2em]"
                    >
                        Our Specialists
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <SectionHeading
                            id="team-heading"
                            title="The Physician Team"
                            subtitle="Dual-qualified specialists — Ayurvedic and allopathic — working together."
                        />
                    </motion.div>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
                    {TEAM.map((member, idx) => (
                        <motion.li
                            key={member.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                        >
                            <article className="h-full flex flex-col gap-6 p-8 md:p-10 bg-white rounded-[2rem] border border-transparent shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(164,19,60,0.08)] hover:-translate-y-2 transition-all duration-500">
                                {/* Initials circle with glassmorphism touch */}
                                <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 bg-plum/5 border border-plum/10" aria-hidden="true">
                                    <span className="font-serif font-light text-xl text-plum">
                                        {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-serif font-light text-2xl text-charcoal leading-snug">{member.name}</h3>
                                    <span className="font-sans font-medium text-sm text-plum tracking-wide">{member.credentials}</span>
                                    <span className="font-sans font-light text-sm mt-1 text-taupe/80">
                                        {member.role}
                                    </span>
                                </div>
                                <p className="font-sans font-light text-base leading-relaxed mt-auto text-taupe">
                                    {member.bio}
                                </p>
                            </article>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

function QuoteSection() {
    return (
        <section className="py-32 px-6 bg-charcoal text-ivory relative overflow-hidden" aria-label="Chief Physician message">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-plum/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-8xl font-serif text-plum/40 mb-8 block leading-none">“</span>
                    <p className="font-serif font-light text-3xl md:text-5xl leading-tight md:leading-snug mb-12 text-ivory/90">
                        The doctorhood is not the promise of extended life but the accuracy in diagnosis,
                        excellence in practical knowledge, and the compassionate touch to remove physical
                        and mental suffering — it's the very essence of vaidyathvam.
                    </p>
                    <footer>
                        <cite className="not-italic flex flex-col items-center gap-2">
                            <span className="w-12 h-px bg-plum inline-block mb-4" />
                            <span className="font-sans font-medium text-lg text-ivory block">
                                Dr. Jannathul Firdouse Changampally
                            </span>
                            <span className="font-sans font-light text-sm text-ivory/60 block">
                                Chief Consultant — Ayurveda Oncology Specialist
                            </span>
                        </cite>
                    </footer>
                </motion.div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────
// Main Container Export
// ─────────────────────────────────────────────────────────────

export default function AboutScrollytelling() {
    return (
        <div className="w-full bg-ivory">
            <HeroParallax />
            <StoryStickySection />
            <VisionImmersiveScroll />
            <TeamGridSection />
            <QuoteSection />
        </div>
    );
}
