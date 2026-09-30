"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import SectionHeading from "@/components/atoms/SectionHeading";
import { CENTRES } from "@/lib/constants";

export default function CentresHorizontalScroll() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    // Smooth out the progress bar
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={targetRef} className="relative h-[400vh] bg-sandstone">
            <div className="sticky top-0 h-screen flex flex-col pt-24 pb-12 overflow-hidden justify-center shadow-[inset_0_20px_40px_rgba(0,0,0,0.02)]">

                {/* Progress Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-taupe/10 origin-left">
                    <motion.div
                        className="h-full bg-plum"
                        style={{ scaleX }}
                    />
                </div>

                <div className="px-6 md:px-24 mb-10 shrink-0">
                    <SectionHeading
                        id="centres-heading"
                        title="Centres of Excellence"
                        subtitle="Each centre is specialised. All are united by the Changampally philosophy."
                        centered={false}
                    />
                </div>

                <div className="flex-1 flex items-center h-full">
                    <motion.div style={{ x }} className="flex gap-8 px-6 md:px-24 mb-20 w-[600vw] sm:w-[450vw] md:w-[350vw] lg:w-[250vw]">
                        {CENTRES.map((centre, index) => (
                            <article
                                key={centre.id}
                                className="w-[85vw] sm:w-[70vw] md:w-[60vw] lg:w-[45vw] lg:max-w-3xl shrink-0 grid grid-cols-1 md:grid-cols-2 overflow-hidden border border-white/40 rounded-[2rem] bg-white/40 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(164,19,60,0.08)] transition-all duration-500"
                                aria-label={centre.name}
                            >
                                {/* Info column */}
                                <div className="p-10 md:p-12 flex flex-col gap-5 border-b md:border-b-0 md:border-r border-plum/10">
                                    <div>
                                        <span className="eyebrow text-[10px] text-plum bg-plum/5 px-2 py-1 rounded inline-block">{centre.tagline}</span>
                                        <h2 className="font-serif text-[2.5rem] md:text-[3rem] text-charcoal tracking-[0.05em] leading-[0.9] mt-4" style={{ fontFamily: "var(--font-catchye)", fontWeight: 300 }}>
                                            {centre.name}
                                        </h2>
                                    </div>
                                    <p className="font-sans font-light text-base leading-relaxed text-taupe flex-1">
                                        {centre.description}
                                    </p>
                                    <div className="flex flex-col gap-1 pt-6 mt-4 border-t border-plum/10">
                                        <span className="font-sans font-medium text-[10px] tracking-[0.22em] uppercase text-taupe">
                                            Location
                                        </span>
                                        <span className="font-sans font-light text-sm text-charcoal">{centre.location}</span>
                                    </div>
                                    <div className="pt-6 mt-auto">
                                        <Link href={`/centres/${centre.anchor}`} className="btn-ghost-secondary px-8">
                                            Explore {centre.name}
                                        </Link>
                                    </div>
                                </div>

                                {/* Specialisations column */}
                                <div className="p-10 md:p-12 flex flex-col gap-6 bg-ivory/50">
                                    <h3 className="font-sans font-medium text-xs tracking-[0.22em] uppercase text-taupe flex items-center gap-3">
                                        <span className="w-8 h-px bg-plum/30 block"></span>
                                        Specialisations
                                    </h3>
                                    <ul className="flex flex-col gap-4" role="list">
                                        {centre.specialisations.map((spec) => (
                                            <li key={spec} className="flex items-start gap-4">
                                                <span className="text-plum mt-0.5 shrink-0 text-sm" aria-hidden="true">✦</span>
                                                <span className="font-sans font-light text-base text-charcoal leading-snug">{spec}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
