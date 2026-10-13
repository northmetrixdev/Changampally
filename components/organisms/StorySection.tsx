"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * StorySection — Auto-Animated Story with Clean One-Scroll Flow
 * ─────────────────────────────────────────────────────────────────────────────
 * • Single scroll brings the visitor into the Story section.
 * • Three pillars (Tradition, Integration, Wholeness) cycle automatically every 5s
 *   with smooth luxury cross-fades and interactive click tabs.
 * • No endless 700vh scroll hurdles.
 */

const BISTRE_BG = "#33181C";   // Brand plum dark
const BISTRE_DIV = "rgba(234,236,228,0.18)";

const HEADLINE =
    "Since 1300 AD, the Changampally family has preserved the purest forms of Ayurvedic healing.";

const PILLARS = [
    {
        label: "Tradition",
        title: "Traditional Ayurveda",
        titleNode: <>Traditional<br /><span className="italic">Ayurveda</span></>,
        body: "Rooted in the Changampally Vaidya lineage — Panchakarma, classical formulations, and time-tested therapies passed down since 1300 AD.",
        pull: "700 years of unbroken lineage.",
    },
    {
        label: "Integration",
        title: "Integrated Modern Medicine",
        titleNode: <>Integrated Modern<br /><span className="italic">Medicine</span></>,
        body: "Under the combined expertise of our Ayurvedic specialists and allopathic physicians, we address intricate disorders with an evidence based, dual approach.",
        pull: "Two traditions. One care plan.",
    },
    {
        label: "Wholeness",
        title: "Mental and Emotional Wellbeing",
        titleNode: <>Mental and Emotional<br /><span className="italic">Wellbeing</span></>,
        body: "Guided by our Ayurvedic psychiatric care, we provide counselling and psychotherapy — because healing is never complete without addressing the mind.",
        pull: "The mind is never an afterthought.",
    },
];

export default function StorySection() {
    const [activePillar, setActivePillar] = useState(0);

    // Auto-cycle through the 3 pillars every 5 seconds softly
    useEffect(() => {
        const interval = setInterval(() => {
            setActivePillar((prev) => (prev + 1) % PILLARS.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const current = PILLARS[activePillar];

    return (
        <section
            className="relative bg-ivory text-charcoal overflow-hidden"
            aria-labelledby="story-heading"
        >
            {/* ── Section 1: Our Story Headline (Auto-revealed) ───────────── */}
            <div className="py-20 md:py-28 px-6 text-center max-w-5xl mx-auto flex flex-col items-center">
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="eyebrow text-[#3D2B1F] tracking-[0.3em] md:tracking-[0.4em] mb-6 md:mb-8 text-xs md:text-sm"
                >
                    Our Story
                </motion.p>

                <motion.h2
                    id="story-heading"
                    initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="font-serif font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.25] tracking-tight max-w-4xl px-2"
                    style={{ fontFamily: "var(--font-juana)" }}
                >
                    {HEADLINE}
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex items-center gap-4 mt-8 mb-6"
                >
                    <div className="h-px w-10 bg-[#3D2B1F]/20" />
                    <span className="text-[9px] font-sans font-medium tracking-[0.3em] uppercase text-taupe">
                        Est. 1300 AD
                    </span>
                    <div className="h-px w-10 bg-[#3D2B1F]/20" />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                    className="font-sans font-light text-sm sm:text-base md:text-lg max-w-xl text-taupe leading-relaxed"
                >
                    Today, that unbroken heritage meets molecular precision — treating the whole person, not just the disease.
                </motion.p>
            </div>

            {/* ── Section 2: Persistent Luxury Plum Panel (Cycles Pillars Smoothly) ── */}
            <div className="relative py-24 md:py-32 px-6 sm:px-12 text-ivory overflow-hidden" style={{ background: BISTRE_BG }}>
                {/* Ambient glow */}
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px]"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(255,252,248,0.2), transparent)" }}
                />

                <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10 min-h-[380px] justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activePillar}
                            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col items-center"
                        >
                            <span className="font-sans font-medium text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-ivory/50 block mb-6">
                                {current.label}
                            </span>

                            <h3
                                className="font-serif font-light text-3xl sm:text-5xl md:text-6xl text-ivory text-center mb-6 max-w-3xl leading-[1.15]"
                                style={{ fontFamily: "var(--font-juana)" }}
                            >
                                {current.titleNode}
                            </h3>

                            <div
                                style={{ background: BISTRE_DIV }}
                                className="w-12 h-px mb-6"
                            />

                            <p className="font-sans font-light text-sm sm:text-base md:text-lg text-ivory/70 text-center max-w-xl mb-6 leading-relaxed">
                                {current.body}
                            </p>

                            <p className="font-serif font-thin text-base sm:text-lg italic text-ivory/50">
                                &ldquo;{current.pull}&rdquo;
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Interactive Tab Dots / Switcher */}
                    <div className="flex items-center gap-3 mt-12">
                        {PILLARS.map((p, idx) => (
                            <button
                                key={p.label}
                                onClick={() => setActivePillar(idx)}
                                aria-label={`View ${p.label}`}
                                className={`h-2 rounded-full transition-all duration-500 ${activePillar === idx
                                    ? "w-8 bg-ivory"
                                    : "w-2 bg-ivory/30 hover:bg-ivory/60"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
