"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import SectionHeading from "@/components/atoms/SectionHeading";
import TimelineCard from "@/components/molecules/TimelineCard";
import { TIMELINE_EVENTS } from "@/lib/constants";

const ERA_CHIP_STYLES: Record<string, string> = {
    Founding: "bg-terracotta/10 text-terracotta",
    Present: "bg-forest/10 text-forest",
};

export default function LegacyTimeline() {
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);

    const headingInView = useInView(headingRef, { once: true, margin: "-10% 0px" });

    // Scroll-driven track draw — maps scroll progress (0→1) within the section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 80%", "end 60%"],
    });
    const trackScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section
            ref={sectionRef}
            className="py-32 overflow-hidden bg-sandstone"
            aria-labelledby="timeline-heading"
        >
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="mb-16" ref={headingRef}>
                    <motion.p
                        className="eyebrow mb-6 text-taupe tracking-[0.3em]"
                        initial={{ opacity: 0, y: 16 }}
                        animate={headingInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                    >
                        Our Heritage
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={headingInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                    >
                        <h2 id="timeline-heading" className="font-serif font-light text-5xl md:text-6xl text-charcoal leading-[1.1] mb-6">
                            A Living Legacy
                        </h2>
                        <p className="font-sans font-light text-lg md:text-xl text-taupe leading-relaxed max-w-3xl">
                            The Changampally Vaidya family: a heritage of healing from 1300 AD to the present day.
                        </p>
                    </motion.div>
                </div>

                {/* Era legend */}
                <motion.nav
                    className="flex flex-wrap gap-3 mb-12"
                    aria-label="Timeline era legend"
                    initial={{ opacity: 0 }}
                    animate={headingInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {(["Founding", "Present"] as const).map((era) => (
                        <span
                            key={era}
                            className={`text-[10px] font-sans font-medium tracking-[0.3em] uppercase px-4 py-2 ${ERA_CHIP_STYLES[era]}`}
                        >
                            {era}
                        </span>
                    ))}
                </motion.nav>
            </div>

            {/* Horizontal scroll region */}
            <div
                className="relative"
                role="region"
                aria-label="Timeline events — scroll horizontally"
                tabIndex={0}
            >
                {/* Left fade */}
                <div
                    className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
                    style={{ background: "linear-gradient(to right, #EAE6DF, transparent)" }}
                />
                {/* Right fade */}
                <div
                    className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
                    style={{ background: "linear-gradient(to left, #EAE6DF, transparent)" }}
                />

                {/* Animated track line — scaleX driven by scroll */}
                <div
                    ref={trackRef}
                    className="absolute left-0 right-0 top-[9rem] h-px z-0 overflow-hidden pointer-events-none"
                    aria-hidden="true"
                >
                    <motion.div
                        className="h-full w-full origin-left bg-charcoal/10"
                        style={{
                            scaleX: trackScaleX,
                        }}
                    />
                </div>

                <ol
                    className="flex gap-4 overflow-x-auto scroll-smooth pb-8 pt-4
                     [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    style={{ paddingLeft: "max(1.5rem, calc((100vw - 1440px) / 2 + 1.5rem))", paddingRight: "3rem" }}
                    aria-label={`Timeline: ${TIMELINE_EVENTS[0].year} to ${TIMELINE_EVENTS[TIMELINE_EVENTS.length - 1].year}`}
                >
                    {TIMELINE_EVENTS.map((event, index) => (
                        <TimelineCard
                            key={event.id}
                            event={event}
                            index={index}
                            total={TIMELINE_EVENTS.length}
                        />
                    ))}
                </ol>
            </div>

            <p
                className="text-center font-sans font-medium text-[9px] tracking-[0.4em] uppercase mt-4 text-taupe/60"
                aria-hidden="true"
            >
                ← SCROLL TO EXPLORE →
            </p>
        </section>
    );
}
