"use client";

import type { Metadata } from "next";
import { motion } from "framer-motion";
import Link from "next/link";
import { CENTRES } from "@/lib/constants";

// ── Animation variant: single scroll reveal ──────────────────────────────────
const fadeReveal = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

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

            {/* ── 5-column Centre Cards Grid ──────────────────────────────── */}
            <section className="py-16 md:py-20 px-4 md:px-6 xl:px-12 bg-ivory" aria-labelledby="centres-grid-heading">
                <div className="max-w-[1440px] mx-auto">
                    <h2 id="centres-grid-heading" className="sr-only">Our Five Centres</h2>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
                        variants={staggerGrid}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {CENTRES.map((centre, idx) => (
                            <motion.article
                                key={centre.id}
                                variants={fadeReveal}
                                className="group flex flex-col bg-white border border-charcoal/[0.06] hover:border-plum/30 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
                                aria-label={centre.name}
                            >
                                {/* Icon / Visual header */}
                                <div className="flex items-center justify-center h-28 bg-plum/5 border-b border-charcoal/[0.04] transition-colors duration-500 group-hover:bg-plum/10">
                                    <div className="text-plum/60 group-hover:text-plum transition-colors duration-500">
                                        {CENTRE_ICONS[idx]}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-grow p-5">
                                    {/* Badge */}
                                    <span className="inline-block text-[8px] tracking-[0.2em] uppercase font-sans font-medium text-plum bg-plum/8 px-2 py-1 rounded mb-3 self-start border border-plum/15">
                                        {centre.tagline}
                                    </span>

                                    <h3 className="font-serif text-base md:text-lg text-charcoal mb-2 leading-snug group-hover:text-plum transition-colors duration-500" style={{ fontFamily: "var(--font-juana)", fontWeight: 400 }}>
                                        {centre.name}
                                    </h3>

                                    <p className="font-sans text-[11px] md:text-xs text-taupe leading-relaxed mb-4 flex-grow">
                                        {centre.description.slice(0, 160)}{centre.description.length > 160 ? "…" : ""}
                                    </p>

                                    {/* Location */}
                                    <div className="flex flex-col gap-2 pt-3 border-t border-charcoal/[0.06]">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] text-plum/40" aria-hidden="true">⊙</span>
                                            <span className="font-sans font-light text-[10px] text-taupe tracking-wide">{centre.location}</span>
                                        </div>
                                        <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-plum hover:text-plum-dark transition-colors w-fit" aria-label={`View ${centre.name} on Google Maps`}>
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                            <span className="text-[9px] font-sans font-medium uppercase tracking-widest">Google Maps</span>
                                        </a>
                                    </div>

                                    {/* Specialisations */}
                                    <div className="mt-3 flex flex-wrap gap-1">
                                        {centre.specialisations.slice(0, 3).map(spec => (
                                            <span key={spec} className="text-[9px] px-1.5 py-0.5 bg-sandstone text-charcoal/60 rounded font-sans">
                                                {spec.split(" ").slice(0, 2).join(" ")}
                                            </span>
                                        ))}
                                        {centre.specialisations.length > 3 && (
                                            <span className="text-[9px] px-1.5 py-0.5 bg-sandstone text-plum/60 rounded font-sans">
                                                +{centre.specialisations.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* CTA Link */}
                                <Link
                                    href={`/centres/${centre.anchor}`}
                                    className="mt-auto px-5 py-3 text-[10px] tracking-[0.18em] uppercase font-sans font-medium text-plum border-t border-charcoal/[0.06] hover:bg-plum hover:text-ivory transition-all duration-300 text-center"
                                    aria-label={`Learn more about ${centre.name}`}
                                >
                                    Learn More →
                                </Link>
                            </motion.article>
                        ))}
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
