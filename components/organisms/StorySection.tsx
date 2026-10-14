"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

/**
 * StorySection — Soft Word-by-Word Auto-Animated Story Flow
 * ─────────────────────────────────────────────────────────────────────────────
 * • Headline & narrative story text reveal word-by-word in a soft, dreamy cascade
 *   with optical blur-clearing and silky deceleration curves.
 * • Single scroll flow with no scrub hurdles.
 * • Three pillars (Tradition, Integration, Wholeness) cycle smoothly with word-by-word body flow.
 */

const BISTRE_BG = "#33181C";   // Brand plum dark
const BISTRE_DIV = "rgba(234,236,228,0.18)";

const LUXURY_EASE = [0.22, 1, 0.36, 1] as const;
const PANEL_EASE = [0.16, 1, 0.3, 1] as const;
const EXIT_EASE = [0.4, 0, 1, 1] as const;

const HEADLINE =
    "Since 1300 AD, the Changampally family has preserved the purest forms of Ayurvedic healing.";

const SUBTITLE =
    "Today, that unbroken heritage meets molecular precision — treating the whole person, not just the disease.";

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

// Split words for text reveal
const HEADLINE_WORDS = HEADLINE.split(" ");
const SUBTITLE_WORDS = SUBTITLE.split(" ");

// Variants for top "Our Story" section (slow, natural follow-along reading cadence)
const eyebrowVariants: Variants = {
    hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 1.0,
            ease: LUXURY_EASE,
        },
    },
};

const headlineContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.26, // Slow enough to comfortably follow each word as it appears
            delayChildren: 0.35,
        },
    },
};

const headlineWordVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 10,
        filter: "blur(10px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 1.0, // Soft, dreamy bloom into focus
            ease: LUXURY_EASE,
        },
    },
};

const dividerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1.2,
            delay: 4.0, // Appears smoothly right as the headline finishes
            ease: LUXURY_EASE,
        },
    },
};

const subtitleContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.18, // Comfortable, readable pace to follow along
            delayChildren: 4.5, // Begins right after the headline & badge settle
        },
    },
};

const subtitleWordVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 8,
        filter: "blur(8px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.9,
            ease: LUXURY_EASE,
        },
    },
};

// Variants for the cycling pillar panel (slow, readable reveal)
const pillarPanelVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.9,
            ease: PANEL_EASE,
            staggerChildren: 0.11, // Slower word-by-word flow for pillar body
            delayChildren: 0.3,
        },
    },
    exit: {
        opacity: 0,
        y: -16,
        filter: "blur(8px)",
        transition: { duration: 0.6, ease: EXIT_EASE },
    },
};

const pillarBodyWordVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 6,
        filter: "blur(6px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.85,
            ease: LUXURY_EASE,
        },
    },
};

export default function StorySection() {
    const [activePillar, setActivePillar] = useState(0);

    // Auto-cycle through the 3 pillars every 10 seconds to allow relaxed reading
    useEffect(() => {
        const interval = setInterval(() => {
            setActivePillar((prev) => (prev + 1) % PILLARS.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const current = PILLARS[activePillar];
    const pillarWords = current.body.split(" ");

    return (
        <section
            className="relative bg-ivory text-charcoal overflow-hidden"
            aria-labelledby="story-heading"
        >
            {/* ── Section 1: Our Story Headline (Soft Word-by-Word Auto Animated) ───────────── */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className="py-20 md:py-28 px-6 text-center max-w-5xl mx-auto flex flex-col items-center"
            >
                <motion.p
                    variants={eyebrowVariants}
                    className="eyebrow text-[#3D2B1F] tracking-[0.3em] md:tracking-[0.4em] mb-6 md:mb-8 text-xs md:text-sm"
                >
                    Our Story
                </motion.p>

                <motion.h2
                    id="story-heading"
                    variants={headlineContainerVariants}
                    className="font-serif font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.28] tracking-tight max-w-4xl px-2"
                    style={{ fontFamily: "var(--font-juana)" }}
                >
                    {HEADLINE_WORDS.map((word, index) => (
                        <span
                            key={index}
                            className="inline-block whitespace-nowrap mr-[0.28em] last:mr-0"
                        >
                            <motion.span
                                variants={headlineWordVariants}
                                className="inline-block will-change-[transform,opacity,filter]"
                            >
                                {word}
                            </motion.span>
                        </span>
                    ))}
                </motion.h2>

                <motion.div
                    variants={dividerVariants}
                    className="flex items-center gap-4 mt-8 mb-6"
                >
                    <div className="h-px w-10 bg-[#3D2B1F]/20" />
                    <span className="text-[9px] font-sans font-medium tracking-[0.3em] uppercase text-taupe">
                        Est. 1300 AD
                    </span>
                    <div className="h-px w-10 bg-[#3D2B1F]/20" />
                </motion.div>

                <motion.p
                    variants={subtitleContainerVariants}
                    className="font-sans font-light text-sm sm:text-base md:text-lg max-w-xl text-taupe leading-relaxed"
                >
                    {SUBTITLE_WORDS.map((word, index) => (
                        <span
                            key={index}
                            className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0"
                        >
                            <motion.span
                                variants={subtitleWordVariants}
                                className="inline-block will-change-[transform,opacity,filter]"
                            >
                                {word}
                            </motion.span>
                        </span>
                    ))}
                </motion.p>
            </motion.div>

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
                            variants={pillarPanelVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
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
                                {pillarWords.map((word, index) => (
                                    <span
                                        key={index}
                                        className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0"
                                    >
                                        <motion.span
                                            variants={pillarBodyWordVariants}
                                            className="inline-block will-change-[transform,opacity,filter]"
                                        >
                                            {word}
                                        </motion.span>
                                    </span>
                                ))}
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
