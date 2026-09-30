"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, useSpring, motion, MotionValue, useMotionValueEvent, AnimatePresence } from "framer-motion";

/**
 * StorySection — Two-Phase Cinematic Scroll
 * ─────────────────────────────────────────────────────────────────────────────
 * PHASE 1 (0 → 0.40) — Full-screen centred word-by-word reveal on ivory.
 *
 * PHASE 2 (0.46 → 1.00) — ONE persistent premium plum panel.
 *   The panel stays fixed. Three pillar texts cross-fade inside it.
 *   Animations run independently of scroll speed once triggered.
 *
 * Total: 700vh
 */

// ── Palette ───────────────────────────────────────────────────────────────────
const BISTRE_BG = "#3D2B1F";   // Bistre earthy brown
const BISTRE_DIV = "rgba(255,252,248,0.18)";

// ── Data ─────────────────────────────────────────────────────────────────────
const HEADLINE =
    "Since 1300 AD, the Changampally family has preserved the purest forms of Ayurvedic healing.";
const WORDS = HEADLINE.split(" ");

const PILLARS = [
    {
        label: "Tradition",
        title: "Traditional Ayurveda",
        titleNode: <>Traditional<br /><span className="italic">Ayurveda</span></>,
        body: "Rooted in the Changampally Vaidya lineage — Panchakarma, classical formulations, and time-tested therapies passed down since 1300 AD.",
        pull: "700 years of unbroken lineage.",
        inStart: 0.46, inEnd: 0.52, outStart: 0.62, outEnd: 0.67,
    },
    {
        label: "Integration",
        title: "Integrated Modern Medicine",
        titleNode: <>Integrated Modern<br /><span className="italic">Medicine</span></>,
        body: "Under the combined expertise of our Ayurvedic specialists and allopathic physicians, we address intricate disorders with an evidence-based, dual approach.",
        pull: "Two traditions. One care plan.",
        inStart: 0.62, inEnd: 0.68, outStart: 0.78, outEnd: 0.83,
    },
    {
        label: "Wholeness",
        title: "Mental & Emotional Wellbeing",
        titleNode: <>Mental & Emotional<br /><span className="italic">Wellbeing</span></>,
        body: "Guided by our Ayurvedic psychiatric care, we provide counselling and psychotherapy — because healing is never complete without addressing the mind.",
        pull: "The mind is never an afterthought.",
        inStart: 0.78, inEnd: 0.84, outStart: 0.97, outEnd: 1.00,
    },
];

// ── Scroll windows ────────────────────────────────────────────────────────────
const W_START = 0.02;
const W_END = 0.34;
const W_SLICE = (W_END - W_START) / WORDS.length;

// ── AnimatedWord ──────────────────────────────────────────────────────────────
function AnimatedWord({
    word, progress, start, end,
}: { word: string; progress: MotionValue<number>; start: number; end: number }) {
    const opacity = useTransform(progress, [start, end], [0, 1]);
    const y = useTransform(progress, [start, end], [20, 0]);
    const filter = useTransform(progress, [start, end], ["blur(8px)", "blur(0px)"]);
    return (
        <motion.span style={{ opacity, y, filter, display: "inline-block", marginRight: "0.24em" }}>
            {word}
        </motion.span>
    );
}

// ── PillarText ────────────────────────────────────────────────────────────────
function PillarText({
    pillar, isActive,
}: { pillar: typeof PILLARS[number]; isActive: boolean }) {

    // Container handles orchestration
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.25 }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };

    // Headline gets the ultra smooth blur reveal
    const headlineVariants = {
        hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] as const }
        }
    };

    // Subheadings get standard slide/fade reveal (no blur)
    const subheadingVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] as const }
        }
    };

    return (
        <AnimatePresence>
            {isActive && (
                <motion.div
                    key="pillar"
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
                        className="font-serif font-light text-3xl sm:text-4xl md:text-6xl lg:text-[5.5rem] text-ivory text-center mb-6 md:mb-8 max-w-4xl leading-[1.2] md:leading-[1.1]"
                    >
                        {pillar.titleNode}
                    </motion.h3>

                    <div className="flex flex-col items-center w-full px-2">
                        <motion.div
                            variants={subheadingVariants}
                            style={{ background: BISTRE_DIV }}
                            className="w-10 h-px mb-6 md:mb-8"
                        />

                        <motion.p
                            variants={subheadingVariants}
                            className="font-sans font-light text-sm md:text-base lg:text-lg leading-relaxed md:leading-relaxed text-ivory/60 text-center max-w-xl mb-8 md:mb-10"
                        >
                            {pillar.body}
                        </motion.p>

                        <motion.p
                            variants={subheadingVariants}
                            className="font-serif font-thin text-lg md:text-xl italic text-ivory/50 text-center"
                        >
                            &ldquo;{pillar.pull}&rdquo;
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function StorySection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activePillar, setActivePillar] = useState<number | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // To prevent scroll lag from continuous re-renders,
    // we strictly ONLY update React state when the active index changes.
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        let newActive: number | null = null;
        if (latest >= 0.45 && latest < 0.62) newActive = 0;
        else if (latest >= 0.62 && latest < 0.78) newActive = 1;
        else if (latest >= 0.78 && latest < 0.98) newActive = 2;

        if (newActive !== activePillar) {
            setActivePillar(newActive);
        }
    });

    // Spring-smoothed progress for Phase 2 curtain raise
    const springProgress = useSpring(scrollYProgress, {
        stiffness: 70,
        damping: 22,
        restDelta: 0.001,
    });

    // Phase 1
    const W_REVEAL_START = 0.02;
    const W_REVEAL_END = 0.16;
    const W_SUB_START = 0.16;
    const W_SUB_END = 0.28;

    const eyebrowOp = useTransform(scrollYProgress, [0.01, 0.05], [0, 1]);
    const eyebrowY = useTransform(scrollYProgress, [0.01, 0.05], [16, 0]);

    const textOpacity = useTransform(scrollYProgress, [W_REVEAL_START, W_REVEAL_END], [0, 1]);
    const textY = useTransform(scrollYProgress, [W_REVEAL_START, W_REVEAL_END], [24, 0]);
    const textFilter = useTransform(scrollYProgress, [W_REVEAL_START, W_REVEAL_END], ["blur(8px)", "blur(0px)"]);

    const subtitleOp = useTransform(scrollYProgress, [W_SUB_START, W_SUB_END], [0, 1]);
    const subtitleY = useTransform(scrollYProgress, [W_SUB_START, W_SUB_END], [16, 0]);
    // Phase 1 stays fully visible — the plum curtain covers it
    // (no opacity or scale exit needed)

    // Scroll hint
    const hintOp = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

    // Phase 2 — curtain-raise from bottom into the plum panel
    const plumCurtain = useTransform(
        springProgress,
        [0.40, 0.48],
        ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"],
    );

    // Progress indicator — tracks active pillar
    const dot0 = useTransform(scrollYProgress, [0.46, 0.63], [1, 0.2]);
    const dot1 = useTransform(scrollYProgress, [0.63, 0.81], [1, 0.2]);
    const dot2 = useTransform(scrollYProgress, [0.81, 1.00], [1, 0.2]);

    return (
        <div
            ref={containerRef}
            className="relative bg-ivory"
            style={{ height: "700vh" }}
            aria-labelledby="story-heading"
        >
            <div className="absolute top-0 w-full h-px bg-[#3D2B1F]/10" />

            {/* ── Sticky viewport ── */}
            <div
                className="sticky top-0 h-screen overflow-hidden"
                style={{ background: BISTRE_BG }}
            >
                {/* ── PHASE 1 — ivory word reveal ── */}
                <div
                    className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-6 text-center bg-ivory z-10"
                >
                    <motion.p
                        style={{ opacity: eyebrowOp, y: eyebrowY }}
                        className="eyebrow text-[#3D2B1F] tracking-[0.3em] md:tracking-[0.45em] mb-6 md:mb-10 text-xs md:text-sm"
                    >
                        Our Story
                    </motion.p>

                    <motion.h2
                        id="story-heading"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.3] md:leading-[1.2] tracking-tight max-w-4xl px-2 mx-auto"
                        style={{
                            fontFamily: "var(--font-serif)",
                            fontWeight: 100,
                            opacity: textOpacity,
                            y: textY,
                            filter: textFilter,
                        }}
                        aria-label={HEADLINE}
                    >
                        {HEADLINE}
                    </motion.h2>

                    <motion.div
                        style={{ opacity: subtitleOp }}
                        className="flex items-center gap-3 md:gap-5 mt-8 md:mt-10 mb-5 md:mb-7"
                    >
                        <div className="h-px w-8 md:w-12 bg-[#3D2B1F]/20" />
                        <span className="text-[8px] md:text-[9px] font-sans font-medium tracking-[0.3em] md:tracking-[0.45em] uppercase text-taupe">
                            Est. 1300 AD
                        </span>
                        <div className="h-px w-8 md:w-12 bg-[#3D2B1F]/20" />
                    </motion.div>

                    <motion.p
                        style={{ opacity: subtitleOp, y: subtitleY }}
                        className="font-sans font-light text-sm md:text-base lg:text-lg px-4 max-w-xl leading-relaxed text-taupe"
                    >
                        Today, that unbroken heritage meets molecular precision — treating the whole person, not just the disease.
                    </motion.p>
                </div>

                {/* Scroll hint */}
                <motion.div
                    style={{ opacity: hintOp }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
                    aria-hidden="true"
                >
                    <span className="text-[9px] font-sans font-medium tracking-[0.4em] uppercase text-taupe">
                        Scroll
                    </span>
                    <div className="w-px h-10 bg-[#3D2B1F]/20 relative overflow-hidden">
                        <motion.div
                            className="w-full h-1/2 bg-[#3D2B1F]/50"
                            animate={{ y: ["-100%", "200%"] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        />
                    </div>
                </motion.div>

                {/* ── PHASE 2 — plum card curtain-raises from bottom, sits above Phase 1 ── */}
                <motion.div
                    style={{ clipPath: plumCurtain }}
                    className="absolute inset-0 z-20"
                >
                    {/* The card — fills viewport */}
                    <div className="absolute inset-0" style={{ background: BISTRE_BG }}>

                        {/* Ambient top glow */}
                        <div
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px]"
                            style={{ background: "linear-gradient(90deg, transparent, rgba(255,252,248,0.12), transparent)" }}
                        />

                        {/* Three pillar texts — only one visible at a time */}
                        <div className="absolute inset-0">
                            {PILLARS.map((pillar, index) => (
                                <PillarText
                                    key={pillar.label}
                                    pillar={pillar}
                                    isActive={activePillar === index}
                                />
                            ))}
                        </div>

                        {/* Bottom progress dots */}
                        <div
                            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3"
                            aria-hidden="true"
                        >
                            {[dot0, dot1, dot2].map((op, i) => (
                                <motion.div
                                    key={i}
                                    style={{ opacity: op }}
                                    className="w-1.5 h-1.5 rounded-full bg-ivory/60"
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-0 w-full h-px bg-[#3D2B1F]/10" />
        </div >
    );
}
