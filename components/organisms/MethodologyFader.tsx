"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const STEPS = [
    {
        step: "01",
        title: "Listen First",
        body: "Every patient journey begins with careful listening — to the person, not just the condition. Physical symptoms and emotional state are assessed together.",
    },
    {
        step: "02",
        title: "Dual Assessment",
        body: "Our Ayurvedic and allopathic physicians assess the patient together, combining classical diagnostic methods with modern clinical evaluation.",
    },
    {
        step: "03",
        title: "Integrated Care Plan",
        body: "A single unified care plan is designed — drawing on the most appropriate therapies from both traditions, with mental wellbeing integrated from the start.",
    },
    {
        step: "04",
        title: "Treat Only If Safe",
        body: "Following our Chief Physician's guiding principle: we proceed only when we are confident the treatment is in the patient's best interest.",
    },
];

export default function MethodologyFader() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="bg-ivory relative w-full h-[400vh]" aria-label="Our Approach">
            <div className="sticky top-0 h-[100dvh] w-full flex items-center px-6 md:px-16 overflow-hidden">
                <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row gap-8 md:gap-32 items-center">

                    {/* Left Side: Static Context with Increased Headline */}
                    <div className="w-full md:w-5/12 flex flex-col justify-center">
                        <p className="font-sans font-bold text-xs tracking-[0.2em] uppercase text-plum mb-4 md:mb-6 flex items-center gap-3">
                            <span className="w-4 h-px bg-plum"></span>
                            How We Work
                        </p>
                        <h2 className="font-serif font-medium text-6xl md:text-7xl lg:text-[7rem] tracking-tight text-charcoal leading-[0.9] mb-4 md:mb-6">
                            Our Approach <br className="hidden lg:block" /> to Care
                        </h2>
                        <p className="font-sans font-medium text-charcoal/50 text-sm md:text-base leading-relaxed max-w-sm">
                            A structured, highly methodical journey. Not a compromise between two systems, but a true philosophical integration.
                        </p>
                    </div>

                    {/* Right Side: Pinned Crossfading Steps */}
                    <div className="w-full md:w-7/12 relative h-[45vh] md:h-[60vh] flex items-center">
                        {STEPS.map((step, index) => (
                            <MethodologyStep
                                key={step.step}
                                step={step}
                                index={index}
                                progress={scrollYProgress}
                                total={STEPS.length}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

function MethodologyStep({
    step,
    index,
    progress,
    total
}: {
    step: any,
    index: number,
    progress: MotionValue<number>,
    total: number
}) {
    const start = index / total;
    const end = (index + 1) / total;
    const segmentLength = 1 / total;

    // Dynamic mapping constraints so index 0 immediately starts visible and index N-1 never fades out on scroll down
    let inputRange = [start, start + segmentLength * 0.2, start + segmentLength * 0.8, end];
    let opacityRange = [0, 1, 1, 0];
    let blurRange = [8, 0, 0, 8];
    let yRange = [60, 0, 0, -60];

    if (index === 0) {
        inputRange = [0, start + segmentLength * 0.8, end];
        opacityRange = [1, 1, 0];
        blurRange = [0, 0, 8];
        yRange = [0, 0, -60];
    } else if (index === total - 1) {
        inputRange = [start, start + segmentLength * 0.2, 1];
        opacityRange = [0, 1, 1];
        blurRange = [8, 0, 0];
        yRange = [60, 0, 0];
    }

    const opacity = useTransform(progress, inputRange, opacityRange);

    const filterBlur = useTransform(progress, inputRange, blurRange);
    const filter = useTransform(filterBlur, (value) => `blur(${value}px)`);

    const y = useTransform(progress, inputRange, yRange);

    return (
        <motion.div
            style={{ opacity, filter, y }}
            className="absolute inset-x-0 mx-auto flex flex-col md:flex-row gap-6 md:gap-12 items-start justify-center"
        >
            <div className="flex-shrink-0">
                <span className="font-serif text-4xl sm:text-5xl md:text-[8rem] font-light text-plum opacity-30 block leading-none">
                    {step.step}
                </span>
            </div>

            <div className="flex flex-col gap-1 md:gap-4 mt-1 md:mt-2">
                <h3 className="font-serif text-xl sm:text-2xl md:text-5xl lg:text-5xl text-charcoal leading-[1.05] tracking-tight">
                    {step.title}
                </h3>
                <p className="font-sans font-light text-[13px] sm:text-sm md:text-xl lg:text-2xl text-charcoal/70 leading-relaxed max-w-lg mt-1 lg:mt-2">
                    {step.body}
                </p>
            </div>
        </motion.div>
    );
}
