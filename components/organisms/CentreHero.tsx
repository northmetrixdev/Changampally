"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface CentreHeroProps {
    name: string;
    tagline: string;
    description: string;
    location: string;
}

export default function CentreHero({ name, tagline, description, location }: CentreHeroProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Parallax values
    const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scaleTransform = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    // Bottom panel sliding up slightly as we scroll down
    const panelY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

    // For demonstration, since we don't have centre-specific images in constants yet, we'll use a placeholder
    // gradient or an image from public if you prefer. We'll stick to a sophisticated abstract background matching the theme.
    return (
        <section
            ref={containerRef}
            className="relative h-[120vh] bg-plum overflow-hidden text-ivory"
            aria-label={`${name} Hero`}
        >
            {/* Background Parallax Layer */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                style={{
                    y: yTransform,
                    scale: scaleTransform,
                    // Use a subtle premium gradient or image
                    background: "linear-gradient(135deg, rgba(88,31,70,1) 0%, rgba(31,31,35,1) 100%)",
                }}
            >
                {/* Optional: Add a subtle overlay noise texture or pattern to make it feel more premium */}
                <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            {/* Foreground Content - Centre Title Fading Out */}
            <motion.div
                className="sticky top-0 h-screen flex flex-col justify-center items-center text-center px-6 z-10"
                style={{ opacity: opacityTransform }}
            >
                <p className="eyebrow mb-6 text-ivory/60 tracking-[0.3em]">{tagline}</p>
                <h1 className="font-serif font-light text-6xl md:text-8xl tracking-tight leading-[0.9] max-w-5xl" style={{ fontFamily: "var(--font-catchye)", fontWeight: 300 }}>
                    {name}
                </h1>
                <p className="font-sans font-light text-sm mt-8 text-ivory/60 tracking-[0.2em] uppercase">
                    {location}
                </p>
                <div className="mt-16 animate-bounce">
                    <span className="block w-px h-16 bg-ivory/30 mx-auto" />
                </div>
            </motion.div>

            {/* Glassmorphism Descriptor Panel coming from bottom */}
            <motion.div
                className="absolute bottom-10 left-6 right-6 md:left-24 md:max-w-3xl z-20"
                style={{ y: panelY }}
            >
                <div className="bg-ivory/10 backdrop-blur-xl border border-ivory/20 p-8 md:p-12 rounded-[2rem] shadow-2xl">
                    <h2 className="font-sans font-medium text-[10px] tracking-[0.2em] uppercase text-ivory/50 mb-6 flex items-center gap-4">
                        <span className="w-8 h-px bg-ivory/30 block"></span>
                        Our Philosophy
                    </h2>
                    <p className="font-sans font-light text-lg md:text-xl text-ivory/90 leading-relaxed">
                        {description}
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
