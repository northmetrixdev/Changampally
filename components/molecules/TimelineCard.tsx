"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import type { TimelineEvent } from "@/lib/types";

// Map eras to earthy palette dot colors
const ERA_DOT: Record<string, string> = {
    founding: "#2A3226", // Forest
    present: "#C27A65",  // Terracotta
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 1.2, // Slower, more cinematic transition
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        },
    },
};

const dateVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        },
    },
};

export default function TimelineCard({ event, index, total }: {
    event: TimelineEvent;
    index: number;
    total: number;
}) {
    const ref = useRef<HTMLLIElement>(null);
    const inView = useInView(ref, { once: true, margin: "0px -20% 0px 0px" });
    const dotColor = ERA_DOT[event.era.toLowerCase()] ?? ERA_DOT.present;

    return (
        <motion.li
            ref={ref}
            className="flex-none w-72 md:w-80 relative px-6 pb-6"
            style={{ minWidth: "18rem" }}
            aria-label={`${index + 1} of ${total}: ${event.title}, ${event.year}`}
        >
            {/* Era dot — pops in when card enters view */}
            <motion.span
                className="absolute left-1/2 -translate-x-1/2 z-10 w-3 h-3 rounded-full"
                style={{
                    top: "7.5rem",
                    backgroundColor: dotColor,
                }}
                aria-hidden="true"
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            />

            {/* Year — above dot, fades in first */}
            <motion.div
                className="text-center mb-16"
                variants={dateVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                <time
                    className="font-serif font-light text-3xl tracking-tight text-forest"
                    dateTime={event.year}
                >
                    {event.year}
                </time>
                <span className="block text-[9px] font-sans font-medium tracking-[0.25em] uppercase mt-2 text-taupe/60">
                    {event.era}
                </span>
            </motion.div>

            {/* Card body — slow fade up without boxes */}
            <motion.div
                className="mt-12 group"
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                {/* Decorative image area (minimalist) */}
                <div
                    className="w-full h-16 mb-4 flex items-center justify-center border-b border-charcoal/5 transition-colors duration-700 group-hover:border-plum/30 pb-4"
                    role="img"
                    aria-label={event.imageAlt ?? event.title}
                >
                    <div className="w-8 h-px bg-plum/30" />
                </div>

                <h3 className="font-serif font-light text-xl text-charcoal leading-snug mb-3 group-hover:text-forest transition-colors duration-700">
                    {event.title}
                </h3>
                <p className="font-sans font-light text-sm leading-loose text-taupe line-clamp-4">
                    {event.description}
                </p>
            </motion.div>
        </motion.li>
    );
}
