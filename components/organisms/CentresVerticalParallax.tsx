"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { CENTRES } from "@/lib/constants";

// Map each centre to a unique, premium background colour for the parallax effect
// Using the site's colour tokens: charcoal, plum, sandstone, taupe, ivory.
// We'll use very dark variations to make the text pop.
const CENTRE_THEMES = [
    "bg-charcoal text-ivory",
    "bg-[#3A1C2D] text-ivory", // Dark Plum
    "bg-[#1A1A1D] text-ivory", // Near Black
    "bg-[#2C2428] text-ivory", // Dark Rose/Taupe
    "bg-[#4A203B] text-ivory", // Deep Magenta/Plum
];

export default function CentresVerticalParallax() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    // Smooth overall progress
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <section ref={containerRef} className="relative w-full">
            {/* Overall Progress Indicator */}
            <motion.div
                className="fixed left-0 top-0 bottom-0 w-1 bg-ivory/20 z-50 mix-blend-difference"
                style={{ scaleY: smoothProgress, transformOrigin: "top" }}
            />

            {CENTRES.map((centre, index) => {
                return (
                    <ParallaxSection
                        key={centre.id}
                        centre={centre}
                        index={index}
                        total={CENTRES.length}
                    />
                );
            })}
        </section>
    );
}

function ParallaxSection({ centre, index, total }: { centre: any, index: number, total: number }) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const themeClass = CENTRE_THEMES[index % CENTRE_THEMES.length];

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax logic: Background text/elements move slightly slower than the foreground
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);

    return (
        <div ref={sectionRef} className="h-screen w-full relative overflow-hidden flex items-center justify-center sticky top-0">
            {/* Background Layer */}
            <motion.div
                className={`absolute inset-0 w-full h-full ${themeClass} flex flex-col items-center justify-center`}
                style={{ y: backgroundY }}
            >
                {/* Subtle Grain / Texture Overlay could go here */}
                <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                <h1 className="absolute font-serif text-[15vw] whitespace-nowrap opacity-5 pointer-events-none select-none" style={{ fontFamily: "var(--font-catchye)" }}>
                    {centre.name.split(" ").pop()?.toUpperCase()}
                </h1>
            </motion.div>

            {/* Foreground Content */}
            <motion.div
                className="relative z-10 text-center px-6 md:px-24 flex flex-col items-center max-w-5xl"
                style={{ opacity, scale }}
            >
                <div className="mb-6 inline-flex items-center gap-4">
                    <span className="w-8 h-px bg-ivory/30"></span>
                    <p className="eyebrow text-ivory/60 tracking-[0.3em]">
                        Centre {index + 1} of {total}
                    </p>
                    <span className="w-8 h-px bg-ivory/30"></span>
                </div>

                <h2 className="font-serif font-light text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] mb-8 text-ivory drop-shadow-2xl" style={{ fontFamily: "var(--font-catchye)" }}>
                    {centre.name}
                </h2>

                <p className="font-sans font-light text-[10px] md:text-xs tracking-[0.2em] uppercase text-ivory/80 mb-12 py-2 px-4 border border-ivory/20 rounded-full bg-black/10 backdrop-blur-sm">
                    {centre.tagline} • {centre.location}
                </p>

                <p className="font-sans font-light text-lg md:text-xl text-ivory/90 leading-relaxed mb-16 max-w-3xl drop-shadow-lg">
                    {centre.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                    <Link href={`/centres/${centre.anchor}`} className="group relative px-8 py-4 overflow-hidden rounded-full bg-ivory text-charcoal border border-transparent hover:border-ivory transition-all duration-300">
                        <span className="relative z-10 font-sans text-xs tracking-[0.2em] uppercase font-medium">Enter {centre.name.split(" ").pop()}</span>
                        <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 ease-out group-hover:scale-100 group-hover:bg-plum/10"></div>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
