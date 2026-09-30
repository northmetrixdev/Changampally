"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { SERVICE_ITEMS } from "@/lib/constants";

export default function ServiceSpectrum() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const springProgress = useSpring(scrollYProgress, {
        stiffness: 70,
        damping: 22,
        restDelta: 0.001
    });

    // ── Phase 1: The Weave ──

    // The gold/plum thread draws from 0 to 1 over the first 45% of the scroll
    const pathLength = useTransform(springProgress, [0.0, 0.45], [0, 1]);

    // Fades down AS Integrated Medicine appears
    const svgOp = useTransform(springProgress, [0.42, 0.50], [1, 0.1]);
    const svgBlur = useTransform(springProgress, [0.42, 0.50], ["blur(0px)", "blur(12px)"]);

    // 1. Top-Left Node: "Centuries of Ayurveda" (Appears First, fades out AS Integrated appears)
    const tradOpArray = useTransform(springProgress, [0.05, 0.15, 0.42, 0.50], [0, 1, 1, 0]);
    const tradBlurArray = useTransform(springProgress, [0.05, 0.15, 0.42, 0.50], ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]);
    const tradX = useTransform(springProgress, [0.05, 0.15], [-20, 0]);

    // 2. Bottom-Right Node: "Modern Scientific Precision" (Appears Second when threads meet at the bottom)
    const modOpArray = useTransform(springProgress, [0.32, 0.40, 0.42, 0.50], [0, 1, 1, 0]);
    const modBlurArray = useTransform(springProgress, [0.32, 0.40, 0.42, 0.50], ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]);
    const modX = useTransform(springProgress, [0.32, 0.40], [20, 0]);

    // 3. Center Convergence Node: "Integrated Medicine" (Appears Third, stays)
    const intOp = useTransform(springProgress, [0.42, 0.50], [0, 1]);
    const intBlur = useTransform(springProgress, [0.42, 0.50], ["blur(12px)", "blur(0px)"]);
    const intScale = useTransform(springProgress, [0.42, 0.50], [0.9, 1]);

    // 4. Description Subtitle (Appears Fourth, quickly trailing Integrated Medicine)
    const descOp = useTransform(springProgress, [0.48, 0.56], [0, 1]);
    const descY = useTransform(springProgress, [0.48, 0.56], [20, 0]);

    // Master Phase 1 Exit (Whole block leaves cleanly)
    const masterOp = useTransform(springProgress, [0.85, 0.95], [1, 0]);
    const masterBlur = useTransform(springProgress, [0.85, 0.95], ["blur(0px)", "blur(12px)"]);
    const masterY = useTransform(springProgress, [0.85, 0.95], [0, -60]);

    return (
        <section className="bg-ivory" aria-labelledby="spectrum-heading">

            {/* ── 300vh Scroll-Jacked Weave Container ── */}
            <div ref={containerRef} style={{ height: "300vh" }} className="relative w-full">

                {/* Sticky viewport */}
                <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

                    {/* The Master Weave Block */}
                    <motion.div
                        style={{ opacity: masterOp, filter: masterBlur, y: masterY }}
                        className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-center"
                    >

                        <p className="absolute top-[10%] left-1/2 -translate-x-1/2 eyebrow text-taupe tracking-[0.3em]">
                            What We Offer
                        </p>

                        {/* The SVG Weave (Parallel Curves) */}
                        <motion.div
                            style={{ opacity: svgOp, filter: svgBlur }}
                            className="absolute inset-0 flex items-center justify-center pointer-events-none"
                        >
                            <svg viewBox="0 0 600 800" className="h-[75vh] min-h-[500px] w-auto overflow-visible" preserveAspectRatio="xMidYMid meet">
                                {/* Left Thread */}
                                <motion.path
                                    d="M 300,0 L 300,150 C 300,300 100,300 100,400 C 100,500 300,500 300,650 L 300,800"
                                    fill="none"
                                    stroke="#2E1130"
                                    strokeWidth="1.5"
                                    strokeOpacity="0.4"
                                    style={{ pathLength }}
                                />
                                {/* Right Thread */}
                                <motion.path
                                    d="M 300,0 L 300,150 C 300,300 500,300 500,400 C 500,500 300,500 300,650 L 300,800"
                                    fill="none"
                                    stroke="#2E1130"
                                    strokeWidth="1.5"
                                    strokeOpacity="0.4"
                                    style={{ pathLength }}
                                />
                            </svg>
                        </motion.div>

                        {/* Top Left Text: Centuries of Ayurveda */}
                        <motion.div
                            style={{ opacity: tradOpArray, filter: tradBlurArray, x: tradX }}
                            className="absolute left-[5%] md:left-[10%] lg:left-[15%] top-[15%] md:top-[20%] text-left"
                        >
                            <h3 className="font-serif font-light text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-charcoal leading-[1.2] md:leading-[1.1]"
                                style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}
                            >
                                Centuries of<br />
                                <span className="italic">Ayurveda</span>
                            </h3>
                        </motion.div>

                        {/* Bottom Right Text: Modern Scientific Precision */}
                        <motion.div
                            style={{ opacity: modOpArray, filter: modBlurArray, x: modX }}
                            className="absolute right-[5%] md:right-[3%] bottom-[15%] text-left md:text-right"
                        >
                            <h3 className="font-serif font-light text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-charcoal leading-[1.2] md:leading-[1.1]"
                                style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}
                            >
                                Modern Scientific<br />
                                <span className="italic">Precision</span>
                            </h3>
                        </motion.div>

                        {/* Center Text: Integrated Medicine & Subtitle */}
                        <motion.div
                            style={{ opacity: intOp, filter: intBlur, scale: intScale }}
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center px-4 z-10"
                        >
                            <h2
                                id="spectrum-heading"
                                className="font-serif font-light text-4xl sm:text-5xl md:text-7xl lg:text-[7rem] text-[#3D2B1F] leading-[1.1] md:leading-[0.9] text-center mb-6"
                                style={{ fontFamily: "var(--font-catchye)", fontWeight: 300, letterSpacing: "0.05em" }}
                            >
                                Integrated Medicine
                            </h2>
                            <motion.p
                                style={{ opacity: descOp, y: descY }}
                                className="font-sans font-light text-sm sm:text-base md:text-xl text-taupe text-center max-w-sm md:max-w-2xl leading-relaxed"
                            >
                                Two complete systems of evidence-based science coming together.<br className="hidden md:block" />
                                One unified, highly personalised care plan for intricate disorders.
                            </motion.p>
                        </motion.div>

                    </motion.div>

                    {/* Scroll hint during weave */}
                    <motion.div
                        style={{ opacity: masterOp }}
                        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
                        aria-hidden="true"
                    >
                        <span className="text-[9px] font-sans font-medium tracking-[0.4em] uppercase text-taupe">
                            Scroll to Reveal
                        </span>
                        <div className="w-px h-10 bg-[#3D2B1F]/20 relative overflow-hidden">
                            <motion.div
                                className="w-full h-1/2 bg-[#3D2B1F]/50"
                                animate={{ y: ["-100%", "200%"] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                            />
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Services Grid Removed per user request */}

        </section>
    );
}
