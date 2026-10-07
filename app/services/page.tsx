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

// Centre icons — leaf/nature themed
const CENTRE_ICONS = [
    // Remedium — cross/medical
    <svg key="remedium" viewBox="0 0 40 40" fill="none" className="w-8 h-8"><rect x="17" y="8" width="6" height="24" rx="3" fill="currentColor" /><rect x="8" y="17" width="24" height="6" rx="3" fill="currentColor" /></svg>,
    // Kaivalya — leaf
    <svg key="kaivalya" viewBox="0 0 40 40" fill="none" className="w-8 h-8"><path d="M20 8C20 8 8 14 8 24C8 30 13.6 34 20 34C26.4 34 32 30 32 24C32 14 20 8 20 8Z" fill="currentColor" /><path d="M20 8L20 34" stroke="white" strokeWidth="1.5" /></svg>,
    // Wellness — sun
    <svg key="wellness" viewBox="0 0 40 40" fill="none" className="w-8 h-8"><circle cx="20" cy="20" r="7" fill="currentColor" />{[0,45,90,135,180,225,270,315].map(a => <line key={a} x1="20" y1="20" x2={20+13*Math.cos(a*Math.PI/180)} y2={20+13*Math.sin(a*Math.PI/180)} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />)}</svg>,
    // Vaidya Bhavan — heritage arch
    <svg key="vaidya" viewBox="0 0 40 40" fill="none" className="w-8 h-8"><path d="M8 32V20C8 13.4 13.4 8 20 8C26.6 8 32 13.4 32 20V32H8Z" fill="currentColor" /><rect x="15" y="22" width="10" height="10" fill="white" opacity="0.4" /></svg>,
    // Sanjeevani — lotus
    <svg key="sanjeevani" viewBox="0 0 40 40" fill="none" className="w-8 h-8"><ellipse cx="20" cy="24" rx="4" ry="9" fill="currentColor" /><ellipse cx="13" cy="22" rx="4" ry="7" transform="rotate(-20 13 22)" fill="currentColor" opacity="0.6" /><ellipse cx="27" cy="22" rx="4" ry="7" transform="rotate(20 27 22)" fill="currentColor" opacity="0.6" /></svg>,
];

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
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {CENTRES.slice(0, 3).map((centre, idx) => {
                            const propertyImages = [
                                "/images/properties/PERINGODE KAIVALYA/unnamed-2.jpg",
                                "/images/properties/PERINGODE KAIVALYA/unnamed.jpg",
                                "/images/properties/THIRUNNAVYA/unnamed-3.jpg",
                            ];
                            return (
                                <motion.article
                                    key={centre.id}
                                    variants={fadeReveal}
                                    className="group flex flex-col bg-sandstone border border-charcoal/[0.06] hover:border-plum/30 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
                                    aria-label={centre.name}
                                >
                                    {/* Property photo header */}
                                    <div className="relative h-48 bg-plum/5 border-b border-charcoal/[0.04] overflow-hidden">
                                        <Image
                                            src={propertyImages[idx]}
                                            alt={centre.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-60" />
                                        <div className="absolute bottom-3 left-4 text-ivory flex items-center gap-2">
                                            {CENTRE_ICONS[idx]}
                                            <span className="font-sans font-medium text-[10px] tracking-widest uppercase text-ivory/90">{centre.location}</span>
                                        </div>
                                    </div>

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

                                        {/* Location & Maps */}
                                        <div className="flex items-center justify-between pt-3 border-t border-charcoal/[0.08]">
                                            <div className="flex flex-col gap-1">
                                                <span className="font-sans font-light text-[11px] text-taupe tracking-wide">{centre.location}</span>
                                                <a href={`tel:${centre.phone.replace(/\s+/g, "")}`} className="text-[10px] font-sans font-medium text-plum hover:text-plum-dark transition-colors">
                                                    {centre.phone}
                                                </a>
                                            </div>
                                            {centre.mapUrl && (
                                                <a
                                                    href={centre.mapUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center w-8 h-8 bg-plum text-ivory rounded-full hover:bg-plum-dark transition-all shadow-sm shrink-0 hover:scale-110"
                                                    aria-label={`Open Google Maps location for ${centre.name}`}
                                                    title={`Open Google Maps for ${centre.name}`}
                                                >
                                                    <svg className="w-4 h-4 fill-current text-ivory" viewBox="0 0 24 24">
                                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                                    </svg>
                                                </a>
                                            )}
                                        </div>

                                        {/* Specialisations */}
                                        <div className="mt-4 flex flex-wrap gap-1.5">
                                            {centre.specialisations.slice(0, 3).map(spec => (
                                                <span key={spec} className="text-[10px] px-2 py-0.5 bg-ivory text-charcoal/70 rounded font-sans border border-charcoal/5">
                                                    {spec}
                                                </span>
                                            ))}
                                            {centre.specialisations.length > 3 && (
                                                <span className="text-[10px] px-2 py-0.5 bg-ivory text-plum rounded font-sans border border-plum/10">
                                                    +{centre.specialisations.length - 3} more
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* CTA Link */}
                                    <Link
                                        href={`/centres/${centre.anchor}`}
                                        className="mt-auto px-5 py-3.5 text-xs tracking-[0.18em] uppercase font-sans font-medium text-plum border-t border-charcoal/[0.08] hover:bg-plum hover:text-ivory transition-all duration-300 text-center"
                                        aria-label={`Learn more about ${centre.name}`}
                                    >
                                        Learn More →
                                    </Link>
                                </motion.article>
                            );
                        })}
                    </motion.div>

                    {/* Bottom row: 2 cards centered */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto"
                        variants={staggerGrid}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {CENTRES.slice(3, 5).map((centre, idx) => {
                            const propertyImages = [
                                "/images/properties/THIRUNNAVYA/unnamed.jpg",
                                "/images/properties/THIRUNNAVYA/unnamed-2.jpg",
                            ];
                            const globalIdx = idx + 3;
                            return (
                                <motion.article
                                    key={centre.id}
                                    variants={fadeReveal}
                                    className="group flex flex-col bg-sandstone border border-charcoal/[0.06] hover:border-plum/30 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
                                    aria-label={centre.name}
                                >
                                    {/* Property photo header */}
                                    <div className="relative h-48 bg-plum/5 border-b border-charcoal/[0.04] overflow-hidden">
                                        <Image
                                            src={propertyImages[idx]}
                                            alt={centre.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-60" />
                                        <div className="absolute bottom-3 left-4 text-ivory flex items-center gap-2">
                                            {CENTRE_ICONS[globalIdx]}
                                            <span className="font-sans font-medium text-[10px] tracking-widest uppercase text-ivory/90">{centre.location}</span>
                                        </div>
                                    </div>

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

                                        {/* Location & Maps */}
                                        <div className="flex items-center justify-between pt-3 border-t border-charcoal/[0.08]">
                                            <div className="flex flex-col gap-1">
                                                <span className="font-sans font-light text-[11px] text-taupe tracking-wide">{centre.location}</span>
                                                <a href={`tel:${centre.phone.replace(/\s+/g, "")}`} className="text-[10px] font-sans font-medium text-plum hover:text-plum-dark transition-colors">
                                                    {centre.phone}
                                                </a>
                                            </div>
                                            {centre.mapUrl && (
                                                <a
                                                    href={centre.mapUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center w-8 h-8 bg-plum text-ivory rounded-full hover:bg-plum-dark transition-all shadow-sm shrink-0 hover:scale-110"
                                                    aria-label={`Open Google Maps location for ${centre.name}`}
                                                    title={`Open Google Maps for ${centre.name}`}
                                                >
                                                    <svg className="w-4 h-4 fill-current text-ivory" viewBox="0 0 24 24">
                                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                                    </svg>
                                                </a>
                                            )}
                                        </div>

                                        {/* Specialisations */}
                                        <div className="mt-4 flex flex-wrap gap-1.5">
                                            {centre.specialisations.slice(0, 3).map(spec => (
                                                <span key={spec} className="text-[10px] px-2 py-0.5 bg-ivory text-charcoal/70 rounded font-sans border border-charcoal/5">
                                                    {spec}
                                                </span>
                                            ))}
                                            {centre.specialisations.length > 3 && (
                                                <span className="text-[10px] px-2 py-0.5 bg-ivory text-plum rounded font-sans border border-plum/10">
                                                    +{centre.specialisations.length - 3} more
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* CTA Link */}
                                    <Link
                                        href={`/centres/${centre.anchor}`}
                                        className="mt-auto px-5 py-3.5 text-xs tracking-[0.18em] uppercase font-sans font-medium text-plum border-t border-charcoal/[0.08] hover:bg-plum hover:text-ivory transition-all duration-300 text-center"
                                        aria-label={`Learn more about ${centre.name}`}
                                    >
                                        Learn More →
                                    </Link>
                                </motion.article>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* ── CTA ────────────────────────────────────────────────────────── */}
            <section className="py-16 px-4 md:px-6 bg-plum text-ivory text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
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
