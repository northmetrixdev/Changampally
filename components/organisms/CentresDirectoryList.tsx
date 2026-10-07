"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { CENTRES } from "@/lib/constants";

function truncateToSentence(text: string) {
    const periodIndex = text.indexOf('.');
    if (periodIndex === -1) return text;
    return text.substring(0, periodIndex + 1);
}

export default function CentresDirectoryList() {
    return (
        // Replaced buggy CSS scroll snapping with bulletproof sticky staking
        // The container needs to be relative to contain the sticky elements.
        <section
            className="bg-ivory relative w-full h-[500vh] md:h-auto md:pb-32"
            aria-label="Directory of Centres"
        >
            {/* We map out each center. On desktop, they just act as normal massive block.
                To get the "stuck" feeling naturally while staying out from under the navbar, we use sticky top-0 and add top padding. */}
            {CENTRES.map((centre, index) => (
                <div
                    id={`centre-wrapper-${centre.anchor}`}
                    key={centre.id}
                    className="w-full h-[100dvh] sticky top-0 pt-20 md:pt-24 pb-4 md:pb-8 flex items-center justify-center px-4 md:px-8 bg-ivory shadow-[0_-10px_40px_rgba(0,0,0,0.02)]"
                    style={{ zIndex: index + 1 }} // Each card stacks over the previous one naturally
                >
                    <CentreDirectoryCard
                        centre={centre}
                        index={index}
                    />
                </div>
            ))}
        </section>
    );
}

function CentreDirectoryCard({
    centre,
    index
}: {
    centre: any;
    index: number;
}) {
    const cardRef = useRef<HTMLElement>(null);
    const specsListRef = useRef<HTMLUListElement>(null);
    const [isHoveringList, setIsHoveringList] = useState(false);

    // Arrival Pulse specific to being clicked from the marquee above
    const [arrivalPulse, setArrivalPulse] = useState(false);

    useEffect(() => {
        const handleArrival = (e: any) => {
            if (e.detail?.anchor === centre.anchor) {
                setArrivalPulse(true);
                setTimeout(() => setArrivalPulse(false), 2000);
            }
        };
        window.addEventListener('marquee-arrival', handleArrival);
        return () => window.removeEventListener('marquee-arrival', handleArrival);
    }, [centre.anchor]);

    // To and fro animation using the window's main native scroll, perfectly smooth.
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    // Mappings for individual elements moving to and fro based on scroll
    const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
    const imageOpacity = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [0, 1, 1, 0]);

    // We reduced the movement axis slightly to feel more 'stuck' natively
    const textY = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -30]);
    const textOpacity = useTransform(scrollYProgress, [0.2, 0.45, 0.55, 0.8], [0, 1, 1, 0]);

    const specsX = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, 30]);
    const specsOpacity = useTransform(scrollYProgress, [0.25, 0.5, 0.5, 0.75], [0, 1, 1, 0]);

    const hasManySpecs = centre.specialisations.length > 10;

    // Hover-to-scroll effect with a 2-second breathing delay
    useEffect(() => {
        const list = specsListRef.current;
        if (!list || !hasManySpecs) return;

        let animationFrameId: number;
        let timeoutId: ReturnType<typeof setTimeout>;
        let isHovering = false;

        const scrollAmount = 1;

        const smoothScroll = () => {
            if (isHovering && list) {
                list.scrollTop += scrollAmount;
                if (list.scrollTop >= list.scrollHeight - list.clientHeight) {
                    // hit bottom
                } else {
                    animationFrameId = requestAnimationFrame(smoothScroll);
                }
            }
        };

        const handleMouseEnter = () => {
            isHovering = true;
            setIsHoveringList(true); // instantly hide the 'hover here' text
            // Breathe user for 2 seconds before auto-scrolling starts so they can read
            timeoutId = setTimeout(() => {
                if (isHovering) {
                    animationFrameId = requestAnimationFrame(smoothScroll);
                }
            }, 2000);
        };

        const handleMouseLeave = () => {
            isHovering = false;
            setIsHoveringList(false);
            clearTimeout(timeoutId);
            cancelAnimationFrame(animationFrameId);
        };

        list.addEventListener("mouseenter", handleMouseEnter);
        list.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            if (list) {
                list.removeEventListener("mouseenter", handleMouseEnter);
                list.removeEventListener("mouseleave", handleMouseLeave);
            }
            clearTimeout(timeoutId);
            cancelAnimationFrame(animationFrameId);
        };
    }, [hasManySpecs]);

    return (
        <motion.section
            ref={cardRef}
            className="w-[80vw] max-w-[1440px] mx-auto relative flex flex-col xl:flex-row gap-8 xl:gap-24 items-center justify-center h-full origin-center"
            id={`centre-${centre.anchor}`}
            animate={arrivalPulse ? {
                scale: [1, 1.02, 1],
                filter: ["contrast(1)", "contrast(1.1) brightness(1.1)", "contrast(1)"]
            } : { scale: 1, filter: "contrast(1) brightness(1)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            {/* Left Block: The Image containing Name + Description ONLY */}
            <motion.div
                style={{ scale: imageScale, opacity: imageOpacity }}
                className="w-full xl:w-[60%] h-[55vh] md:h-[75vh] relative rounded-[2rem] overflow-hidden shadow-2xl bg-charcoal/5 group"
            >
                {/* Landscape Image */}
                <Image
                    src={`/images/placeholders/centre-${index + 1}.jpg`}
                    alt={centre.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 1440px) 60vw, 1000px"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.classList.add('bg-gradient-to-br', 'from-charcoal/20', 'to-charcoal/10');
                    }}
                />

                {/* Gradient to ensure text readability */}
                <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent opacity-95"></div>

                {/* Name & Single-Sentence Description */}
                <motion.div
                    style={{ y: textY, opacity: textOpacity }}
                    className="absolute bottom-4 left-4 md:bottom-12 md:left-12 z-10 w-full max-w-2xl pr-6 md:pr-8 flex flex-col gap-1 md:gap-3"
                >
                    <div className="flex gap-2 md:gap-4 items-center">
                        <span className="w-6 md:w-8 h-px bg-ivory/80 shadow-sm"></span>
                        <span className="font-sans font-bold text-[8px] md:text-[10px] tracking-[0.2em] uppercase text-ivory/90 drop-shadow-md">
                            {centre.tagline}
                        </span>
                    </div>

                    <h2 className="font-serif font-medium text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-ivory tracking-tight leading-[1] md:leading-[1.05] drop-shadow-lg">
                        {centre.name}
                    </h2>

                    <p className="font-sans font-medium text-xs sm:text-sm md:text-lg text-ivory/90 leading-relaxed md:leading-relaxed drop-shadow-md mt-1 md:mt-2 max-w-xl">
                        {truncateToSentence(centre.description)}
                    </p>
                </motion.div>
            </motion.div>

            {/* Right Block: Editorial Layout for Location, Specialisations, Button */}
            <motion.div
                style={{ x: specsX, opacity: specsOpacity }}
                className="w-full xl:w-[40%] flex flex-col justify-center h-auto md:h-[55vh] lg:h-[75vh] py-4 md:py-8"
            >
                {/* Location at top right */}
                <div className="flex items-center justify-between gap-4 mb-6 md:mb-10 border-l-2 px-4 md:px-6 border-charcoal/20">
                    <div className="flex flex-col gap-1">
                        <span className="font-sans font-bold text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-charcoal/40">Location</span>
                        <span className="font-sans font-bold text-xs md:text-sm text-charcoal/80">{centre.location}</span>
                    </div>
                    {centre.mapUrl && (
                        <a
                            href={centre.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-10 h-10 bg-plum text-ivory rounded-full hover:bg-plum-dark transition-all shadow-sm shrink-0 hover:scale-110"
                            aria-label={`Open Google Maps location for ${centre.name}`}
                            title={`Open Google Maps for ${centre.name}`}
                        >
                            <svg className="w-5 h-5 fill-current text-ivory" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                        </a>
                    )}
                </div>

                {/* Specialisations (No card background, clean editorial text) */}
                <div className="flex-1 flex flex-col relative overflow-hidden mb-4 md:mb-8 pl-4 md:pl-6">
                    <div className="flex-shrink-0">
                        <h3 className="font-sans font-bold text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-charcoal/50 mb-3 md:mb-6 flex items-center gap-3">
                            Core Specialisations
                        </h3>
                    </div>

                    <div className="relative flex-1 overflow-hidden">
                        <ul
                            ref={specsListRef}
                            className={`flex flex-col gap-y-2 md:gap-y-3 h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${hasManySpecs ? 'pb-[80px] md:pb-[120px]' : ''}`}
                            role="list"
                            style={{ scrollBehavior: 'auto' }}
                        >
                            {centre.specialisations.map((spec: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-3 md:gap-4">
                                    <span className="text-charcoal/20 text-[10px] md:text-xs mt-0.5 md:mt-1" aria-hidden="true">—</span>
                                    <span className="font-sans font-medium md:font-semibold text-sm md:text-base text-charcoal/80 leading-snug">{spec}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Hover indicator for lists > 10 */}
                        {hasManySpecs && (
                            <div className={`absolute bottom-0 left-0 right-0 h-24 md:h-40 bg-gradient-to-t from-ivory via-ivory/90 to-transparent pointer-events-none flex items-end pb-4 md:pb-8 transition-opacity duration-300 ${isHoveringList ? 'opacity-0' : 'opacity-100'}`}>
                                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal/40 flex items-center gap-2 md:gap-3 animate-pulse pt-6 md:pt-12 pb-2 md:pb-4">
                                    Hover below to scroll <span className="text-xs md:text-sm">↓</span>
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Explore Link (Text + Tilted Arrow) */}
                <div className="flex-shrink-0 pt-4 md:pt-6 border-t border-charcoal/10 ml-4 md:ml-6">
                    <Link href={`/centres/${centre.anchor}`} className="group inline-flex items-center gap-3 md:gap-4 py-2 text-charcoal/80 hover:text-charcoal transition-colors duration-300">
                        <span className="font-sans font-bold text-[9px] md:text-[10px] tracking-[0.2em] uppercase">Explore {centre.name}</span>
                        <span className="text-xl md:text-2xl font-light group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                            ↗
                        </span>
                    </Link>
                </div>

            </motion.div>
        </motion.section>
    );
}
