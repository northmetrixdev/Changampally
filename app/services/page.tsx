"use client";

import type { Metadata } from "next";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CENTRES } from "@/lib/constants";

// ── Animation variant: single scroll reveal ──────────────────────────────────
const fadeReveal = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

function truncateToSentence(text: string) {
    const periodIndex = text.indexOf('.');
    if (periodIndex === -1) return text;
    return text.substring(0, periodIndex + 1);
}

const staggerGrid = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-ivory">
            {/* ── Compact hero: ~20% page height, matches Departments style ── */}
            <section className="relative pt-24 md:pt-36 pb-10 md:pb-14 px-4 md:px-12 xl:px-24 bg-plum overflow-hidden" style={{ minHeight: "20vh" }}>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 blur-[120px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/3" />
                <div className="max-w-[1440px] mx-auto text-left flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12 relative z-10">
                    <div className="max-w-3xl">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="font-sans font-light text-[10px] tracking-[0.3em] uppercase text-ivory/60 mb-3"
                        >
                            Our Centres of Excellence
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="font-serif font-light text-4xl sm:text-5xl md:text-[4.5rem] text-ivory tracking-tight leading-tight mb-4"
                            style={{ fontFamily: "var(--font-juana)" }}
                        >
                            Care Across Kerala
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                            className="font-sans font-light text-sm sm:text-base text-ivory/80 leading-relaxed max-w-2xl"
                        >
                            Five centres — each distinct in specialisation and setting — united by one philosophy: treating the whole person with Ayurveda and modern medicine.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden md:flex flex-col items-end border-l border-ivory/20 pl-8 py-2"
                    >
                        <span className="font-serif text-4xl text-ivory mb-1">5</span>
                        <span className="font-sans font-medium text-[11px] tracking-widest uppercase text-ivory/60">Centres Across Kerala</span>
                    </motion.div>
                </div>
            </section>

            {/* ── Centre Cards Grid (3 cards top, 2 cards bottom) ──────────────── */}
            <section className="py-16 md:py-20 px-4 md:px-6 xl:px-12 bg-ivory" aria-labelledby="centres-grid-heading">
                <div className="max-w-[1440px] mx-auto">
                    <h2 id="centres-grid-heading" className="sr-only">Our Five Centres</h2>
                    
                    {/* Top row: 3 cards */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8"
                        variants={staggerGrid}
                        initial="hidden"
                        animate="show"
                    >
                        {CENTRES.slice(0, 3).map((centre) => {
                            // Map photos strictly by anchor so Munnar ('wellness') and Sanjeevani have NO photo
                            const photoMap: Record<string, string> = {
                                remedium: "/images/properties/REMEDIUM/D7F08459.JPG",
                                kaivalya: "/images/properties/PERINGODE KAIVALYA/unnamed.jpg",
                                vaidyabhavan: "/images/properties/THIRUNNAVYA/unnamed.jpg",
                            };
                            const photo = photoMap[centre.anchor];

                            return (
                                <motion.div
                                    key={centre.id}
                                    variants={fadeReveal}
                                    className="flex"
                                >
                                    <Link
                                        href={`/centres/${centre.anchor}`}
                                        className="group flex flex-col w-full bg-sandstone border border-charcoal/[0.06] hover:border-plum/30 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                                        aria-label={`View ${centre.name}`}
                                    >
                                        {/* Property photo header if available */}
                                        {photo ? (
                                            <div className="relative h-48 bg-plum/5 border-b border-charcoal/[0.04] overflow-hidden">
                                                <Image
                                                    src={photo}
                                                    alt={centre.name}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-60" />
                                                <div className="absolute bottom-3 left-4 text-ivory flex items-center">
                                                    <span className="font-sans font-medium text-[10px] tracking-widest uppercase text-ivory/90">{centre.location}</span>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="relative h-24 bg-gradient-to-br from-plum/10 via-plum/5 to-sandstone border-b border-charcoal/[0.04] p-5 flex flex-col justify-end">
                                                <span className="font-sans font-medium text-[10px] tracking-widest uppercase text-plum/70">{centre.location}</span>
                                            </div>
                                        )}

                                        {/* Content */}
                                        <div className="flex flex-col flex-grow p-6">
                                            {/* Badge */}
                                            <span className="inline-block text-[8px] tracking-[0.2em] uppercase font-sans font-medium text-plum bg-plum/10 px-2.5 py-1 rounded mb-3 self-start border border-plum/15">
                                                {centre.tagline}
                                            </span>

                                            <h3 className="font-serif text-xl md:text-2xl text-charcoal mb-2 leading-snug group-hover:text-plum transition-colors duration-500" style={{ fontFamily: "var(--font-juana)", fontWeight: 400 }}>
                                                {centre.name}
                                            </h3>

                                            <p className="font-sans text-xs md:text-sm text-taupe leading-relaxed mb-4 flex-grow">
                                                {truncateToSentence(centre.description)}
                                            </p>

                                            {/* Location & Contact info */}
                                            <div className="flex items-center justify-between pt-3 border-t border-charcoal/[0.08]">
                                                <div className="flex flex-col gap-1">
                                                    <span className="font-sans font-light text-[11px] text-taupe tracking-wide">{centre.location}</span>
                                                    <span className="text-[10px] font-sans font-medium text-plum">
                                                        {centre.phone}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Specialisations */}
                                            <div className="mt-4 flex flex-wrap gap-1.5">
                                                {centre.specialisations.slice(0, 4).map(spec => (
                                                    <span key={spec} className="text-[10px] px-2 py-0.5 bg-ivory text-charcoal/70 rounded font-sans border border-charcoal/5">
                                                        {spec}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Seamless Bottom Action */}
                                        <div className="mt-auto px-5 py-3.5 text-xs tracking-[0.18em] uppercase font-sans font-medium text-plum border-t border-charcoal/[0.08] group-hover:bg-plum group-hover:text-ivory transition-all duration-300 text-center">
                                            View Centre →
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Bottom row: 2 cards centered */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto"
                        variants={staggerGrid}
                        initial="hidden"
                        animate="show"
                    >
                        {CENTRES.slice(3, 5).map((centre) => {
                            const photoMap: Record<string, string> = {
                                remedium: "/images/properties/REMEDIUM/D7F08459.JPG",
                                kaivalya: "/images/properties/PERINGODE KAIVALYA/unnamed.jpg",
                                vaidyabhavan: "/images/properties/THIRUNNAVYA/unnamed.jpg",
                            };
                            const photo = photoMap[centre.anchor];

                            return (
                                <motion.div
                                    key={centre.id}
                                    variants={fadeReveal}
                                    className="flex"
                                >
                                    <Link
                                        href={`/centres/${centre.anchor}`}
                                        className="group flex flex-col w-full bg-sandstone border border-charcoal/[0.06] hover:border-plum/30 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                                        aria-label={`View ${centre.name}`}
                                    >
                                        {/* Property photo header if available */}
                                        {photo ? (
                                            <div className="relative h-48 bg-plum/5 border-b border-charcoal/[0.04] overflow-hidden">
                                                <Image
                                                    src={photo}
                                                    alt={centre.name}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-60" />
                                                <div className="absolute bottom-3 left-4 text-ivory flex items-center">
                                                    <span className="font-sans font-medium text-[10px] tracking-widest uppercase text-ivory/90">{centre.location}</span>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="relative h-24 bg-gradient-to-br from-plum/10 via-plum/5 to-sandstone border-b border-charcoal/[0.04] p-5 flex flex-col justify-end">
                                                <span className="font-sans font-medium text-[10px] tracking-widest uppercase text-plum/70">{centre.location}</span>
                                            </div>
                                        )}

                                        {/* Content */}
                                        <div className="flex flex-col flex-grow p-6">
                                            {/* Badge */}
                                            <span className="inline-block text-[8px] tracking-[0.2em] uppercase font-sans font-medium text-plum bg-plum/10 px-2.5 py-1 rounded mb-3 self-start border border-plum/15">
                                                {centre.tagline}
                                            </span>

                                            <h3 className="font-serif text-xl md:text-2xl text-charcoal mb-2 leading-snug group-hover:text-plum transition-colors duration-500" style={{ fontFamily: "var(--font-juana)", fontWeight: 400 }}>
                                                {centre.name}
                                            </h3>

                                            <p className="font-sans text-xs md:text-sm text-taupe leading-relaxed mb-4 flex-grow">
                                                {truncateToSentence(centre.description)}
                                            </p>

                                            {/* Location & Contact info */}
                                            <div className="flex items-center justify-between pt-3 border-t border-charcoal/[0.08]">
                                                <div className="flex flex-col gap-1">
                                                    <span className="font-sans font-light text-[11px] text-taupe tracking-wide">{centre.location}</span>
                                                    <span className="text-[10px] font-sans font-medium text-plum">
                                                        {centre.phone}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Specialisations */}
                                            <div className="mt-4 flex flex-wrap gap-1.5">
                                                {centre.specialisations.slice(0, 4).map(spec => (
                                                    <span key={spec} className="text-[10px] px-2 py-0.5 bg-ivory text-charcoal/70 rounded font-sans border border-charcoal/5">
                                                        {spec}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Seamless Bottom Action */}
                                        <div className="mt-auto px-5 py-3.5 text-xs tracking-[0.18em] uppercase font-sans font-medium text-plum border-t border-charcoal/[0.08] group-hover:bg-plum group-hover:text-ivory transition-all duration-300 text-center">
                                            View Centre →
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* ── CTA ────────────────────────────────────────────────────────── */}
            <section className="py-16 px-4 md:px-6 bg-plum text-ivory text-center">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl mx-auto"
                >
                    <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-ivory/50 mb-4">Begin Your Journey</p>
                    <h2 className="font-serif font-light text-3xl sm:text-4xl text-ivory mb-6" style={{ fontFamily: "var(--font-juana)" }}>
                        Find the Centre Right for You
                    </h2>
                    <p className="font-sans font-light text-sm text-ivory/70 mb-8 leading-relaxed">
                        Each of our five centres offers a unique healing environment. Book a consultation and our team will guide you to the most suitable care.
                    </p>
                    <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-ivory/50 text-ivory font-sans font-light text-xs tracking-[0.2em] uppercase transition-all duration-400 hover:bg-ivory hover:text-plum">
                        Book a Consultation
                    </Link>
                </motion.div>
            </section>
        </main>
    );
}
