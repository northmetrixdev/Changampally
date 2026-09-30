"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimationFrame, useMotionValue, useTransform, wrap } from "framer-motion";
import { CENTRES } from "@/lib/constants";

export default function CentresMarquee() {
    // We duplicate the centres array to create a seamless infinite rolling loop
    const duplicatedCentres = [...CENTRES, ...CENTRES, ...CENTRES, ...CENTRES];

    const [isHovered, setIsHovered] = useState(false);

    // Core motion value driving the marquee
    const baseX = useMotionValue(0);

    // We wrap the X position between 0% and -25% since we have 4 sets of data
    // This creates an infinite loop without any visual jumping
    const x = useTransform(baseX, (v) => `${wrap(0, -25, v)}%`);

    const directionFactor = useRef<number>(-1);
    const baseVelocity = -0.5; // Base speed

    // If the user clicks the "speed up" arrow, we temporarily increase velocity
    const [speedMultiplier, setSpeedMultiplier] = useState(1);

    useAnimationFrame((t, delta) => {
        // If user is hovering a card, smoothly decelerate to a halt
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (isHovered) {
            moveBy = 0; // Pause completely on hover
        } else {
            // Apply manual speed multiplier when button is pressed
            moveBy *= speedMultiplier;
        }

        baseX.set(baseX.get() + moveBy);
    });

    const handleSpeedBoost = () => {
        setSpeedMultiplier(8); // Dramatically speed up
        setTimeout(() => setSpeedMultiplier(1), 300); // Return to normal speed quickly
    };

    return (
        <section
            className="bg-ivory relative w-full pt-16 pb-24 overflow-hidden border-b border-charcoal/5"
            aria-label="Centres Quick Overview"
        >
            <div className="px-6 md:px-16 mb-12 flex justify-between items-end">
                <h2 className="font-serif text-3xl md:text-5xl text-charcoal/80 tracking-tight">
                    Our Network
                </h2>

                {/* Manual control arrow */}
                <button
                    onClick={handleSpeedBoost}
                    className="group flex flex-col items-center gap-2 outline-none focus:outline-none"
                    aria-label="Scroll network faster"
                >
                    <span className="font-sans font-bold text-[10px] tracking-[0.2em] uppercase text-charcoal/40 transition-colors group-hover:text-plum">Fast Forward</span>
                    <div className="w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center transition-all duration-300 group-hover:border-plum group-hover:bg-plum/5 active:scale-90">
                        <span className="font-serif text-2xl text-charcoal/60 transition-colors group-hover:text-plum">→</span>
                    </div>
                </button>
            </div>

            <div
                className="relative w-full flex items-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}
            >
                <motion.div
                    className="flex gap-6 md:gap-8 px-6"
                    style={{ x, width: "fit-content" }}
                >
                    {duplicatedCentres.map((centre, idx) => (
                        <MarqueeCard
                            key={`${centre.id}-${idx}`}
                            centre={centre}
                            index={idx % CENTRES.length}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function MarqueeCard({ centre, index }: { centre: any, index: number }) {

    const handleClickScroll = () => {
        // Find the full viewport sticky card wrapper in the directory list below
        const directoryCardWrapper = document.getElementById(`centre-wrapper-${centre.anchor}`);
        if (directoryCardWrapper) {
            // Smoothly scroll the window down to that card's wrapper top
            directoryCardWrapper.scrollIntoView({ behavior: "smooth", block: "start" });

            // Dispatch a custom event to trigger the arrival pulse animation when we land
            const event = new CustomEvent('marquee-arrival', { detail: { anchor: centre.anchor } });
            window.dispatchEvent(event);
        }
    };

    return (
        <div
            className="relative w-[600px] h-[400px] rounded-3xl overflow-hidden cursor-pointer group flex-shrink-0 bg-charcoal shadow-lg border border-charcoal/10"
            onClick={handleClickScroll}
        >
            {/* Background Image that gracefully zooms in slightly on hover */}
            <Image
                src={`/images/placeholders/centre-${index + 1}.jpg`}
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 group-hover:blur-[2px]"
                sizes="600px"
                alt={centre.name}
            />

            {/* Gradient overlay to ensure text readability */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent transition-opacity duration-700 group-hover:opacity-40"></div>

            {/* Visible Info (Name & Location) - Fades out on hover */}
            <div className="absolute bottom-8 left-8 right-8 flex flex-col gap-3 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:translate-y-4">
                <div className="flex gap-3 items-center">
                    <span className="font-sans font-bold text-[10px] tracking-[0.2em] uppercase text-ivory/80 border border-ivory/30 px-3 py-1.5 rounded backdrop-blur-md bg-charcoal/20">
                        {centre.location}
                    </span>
                </div>
                <h3 className="font-serif text-4xl text-ivory tracking-tight">{centre.name}</h3>
            </div>

            {/* Unique Click Indicator - Fades in on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out scale-90 group-hover:scale-100 pointer-events-none">
                <div className="flex flex-col items-center gap-4 mix-blend-overlay">
                    {/* A delicate, expanding dashed circle framing an arrow */}
                    <div className="w-24 h-24 rounded-full border-[1px] border-dashed border-ivory flex items-center justify-center animate-[spin_10s_linear_infinite]">
                    </div>
                    {/* The static inner icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-serif italic text-3xl text-ivory">Explore</span>
                    </div>
                </div>
            </div>

        </div>
    );
}
