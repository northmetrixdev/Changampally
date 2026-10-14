"use client";

import { useRef, useState } from "react";
import {
    useScroll,
    useTransform,
    useSpring,
    useMotionValueEvent,
    motion,
    AnimatePresence,
    type Variants,
} from "framer-motion";

/**
 * StorySection — Two-Phase Cinematic Scroll
 * ─────────────────────────────────────────────────────────────────────────────
 * • Phase 1: Visitor lands on "Our Story" — soft, contemplative word-by-word reveal.
 * • Phase 2: Scrolling upwards raises the luxury plum card from the bottom.
 * • Single-scroll transitions cross-fade the cards: Tradition → Integration → Wholeness.
 * • Pure scroll behavior with minimal dots indicator (no button tabs).
 */

const BISTRE_BG = "#33181C";   // Brand plum dark
const BISTRE_DIV = "rgba(234,236,228,0.18)";

const LUXURY_EASE = [0.22, 1, 0.36, 1] as const;

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

// Words for Phase 1 text reveal
const HEADLINE_WORDS = HEADLINE.split(" ");
const SUBTITLE_WORDS = SUBTITLE.split(" ");

// Variants for Phase 1 "Our Story" section (slow, contemplative reveal)
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
            staggerChildren: 0.26,
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
            duration: 1.0,
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
            delay: 4.0,
            ease: LUXURY_EASE,
        },
    },
};

const subtitleContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.18,
            delayChildren: 4.5,
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

// ── PillarText Component ──────────────────────────────────────────────────────
function PillarText({
    pillar,
    isActive,
}: {
    pillar: typeof PILLARS[number];
    isActive: boolean;
}) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 },
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.45, ease: "easeOut" as const },
        },
    };

    const headlineVariants = {
        hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: LUXURY_EASE },
        },
    };

    const subheadingVariants = {
        hidden: { opacity: 0, y: 16 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: LUXURY_EASE },
        },
    };

    return (
        <AnimatePresence mode="wait">
            {isActive && (
                <motion.div
                    key={pillar.label}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8 md:px-16"
                >
                    <motion.span
                        variants={subheadingVariants}
                        className="font-sans font-medium text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase text-ivory/40 block mb-6 md:mb-8 text-center"
                    >
                        {pillar.label}
                    </motion.span>

                    <motion.h3
                        variants={headlineVariants}
                        className="font-serif font-light text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory text-center mb-6 md:mb-8 max-w-4xl leading-[1.15]"
                        style={{ fontFamily: "var(--font-juana)" }}
                    >
                        {pillar.titleNode}
                    </motion.h3>

                    <div className="flex flex-col items-center w-full px-2">
                        <motion.div
                            variants={subheadingVariants}
                            style={{ background: BISTRE_DIV }}
                            className="w-12 h-px mb-6 md:mb-8"
                        />

                        <motion.p
                            variants={subheadingVariants}
                            className="font-sans font-light text-sm sm:text-base md:text-lg leading-relaxed text-ivory/70 text-center max-w-xl mb-6 md:mb-8"
                        >
                            {pillar.body}
                        </motion.p>

                        <motion.p
                            variants={subheadingVariants}
                            className="font-serif font-thin text-base sm:text-lg italic text-ivory/50 text-center"
                        >
                            &ldquo;{pillar.pull}&rdquo;
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// ── Main StorySection Component ───────────────────────────────────────────────
export default function StorySection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activePillar, setActivePillar] = useState<number>(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Spring-smoothed progress for the upward curtain raise
    const springProgress = useSpring(scrollYProgress, {
        stiffness: 85,
        damping: 24,
        restDelta: 0.001,
    });

    // Phase 2 curtain-raise from bottom: rises smoothly as you scroll
    const plumCurtain = useTransform(
        springProgress,
        [0.15, 0.28],
        ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
    );

    // Track active pillar smoothly across the scroll window
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        let newActive = 0;
        if (latest >= 0.52 && latest < 0.74) {
            newActive = 1;
        } else if (latest >= 0.74) {
            newActive = 2;
        }

        if (newActive !== activePillar) {
            setActivePillar(newActive);
        }
    });

    return (
        <div
            ref={containerRef}
            className="relative bg-ivory"
            style={{ height: "260vh" }}
            aria-labelledby="story-heading"
        >
            <div className="absolute top-0 w-full h-px bg-[#3D2B1F]/10" />

            {/* ── Sticky Fullscreen Viewport ── */}
            <div
                className="sticky top-0 h-screen overflow-hidden"
                style={{ background: BISTRE_BG }}
            >
                {/* ── PHASE 1 — Ivory Word-by-Word Reveal ── */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center bg-ivory z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        className="max-w-5xl mx-auto flex flex-col items-center"
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
                </div>

                {/* ── PHASE 2 — Plum Card Curtain-Raises Upwards & Scrolls Through Cards ── */}
                <motion.div
                    style={{ clipPath: plumCurtain }}
                    className="absolute inset-0 z-20"
                >
                    <div className="absolute inset-0" style={{ background: BISTRE_BG }}>
                        {/* Ambient top glow */}
                        <div
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px]"
                            style={{ background: "linear-gradient(90deg, transparent, rgba(255,252,248,0.2), transparent)" }}
                        />

                        {/* Three pillar cards — only active card visible with smooth cross-fade */}
                        <div className="absolute inset-0">
                            {PILLARS.map((pillar, index) => (
                                <PillarText
                                    key={pillar.label}
                                    pillar={pillar}
                                    isActive={activePillar === index}
                                />
                            ))}
                        </div>

                        {/* Minimal luxury bottom progress dots — no buttons */}
                        <div
                            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30"
                            aria-hidden="true"
                        >
                            {PILLARS.map((p, idx) => (
                                <div
                                    key={p.label}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${activePillar === idx
                                        ? "w-8 bg-ivory shadow-[0_0_8px_rgba(255,252,248,0.3)]"
                                        : "w-1.5 bg-ivory/30"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-0 w-full h-px bg-[#3D2B1F]/10" />
        </div>
    );
}
