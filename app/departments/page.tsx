"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getDepartments } from "@/lib/i18n/data";

export default function DepartmentsPage() {
    const { locale, t } = useLanguage();
    const departments = getDepartments(locale);

    useEffect(() => {
        document.title = t("meta.departmentsTitle");
    }, [t, locale]);

    return (
        <main className="min-h-screen bg-sandstone selection:bg-plum/20 selection:text-plum-dark font-sans">

            {/* ── Professional Plum Hero ────────────────────────────────────────── */}
            <section className="relative pt-24 md:pt-36 pb-16 md:pb-20 px-4 md:px-12 xl:px-24 bg-plum overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 blur-[120px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/3" />

                <div className="max-w-[1440px] mx-auto text-left flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 relative z-10">
                    <div className="max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="font-serif font-light text-4xl sm:text-5xl md:text-[4.5rem] text-ivory tracking-tight leading-tight mb-4 md:mb-6"
                            style={{ fontFamily: "var(--font-juana)" }}
                        >
                            {t("departments.hero.title")}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                            className="font-sans font-light text-sm sm:text-base md:text-lg text-ivory leading-relaxed max-w-2xl pr-4 md:pr-0"
                        >
                            {t("departments.hero.desc")}
                        </motion.p>
                    </div>
                    {/* Professional metric/highlight stat for balance */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="hidden md:flex flex-col items-end border-l border-ivory/20 pl-8 py-2"
                    >
                        <span className="font-serif text-4xl text-ivory mb-1">{departments.length}</span>
                        <span className="font-sans font-medium text-[11px] tracking-widest uppercase text-ivory/60">
                            {t("departments.hero.statLabel")}
                        </span>
                    </motion.div>
                </div>
            </section>

            {/* ── Refined Smaller Departments Grid ───────────────────────────── */}
            <section className="relative py-16 md:py-20 px-4 md:px-6" aria-labelledby="departments-heading">
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                        {departments.map((dept, idx) => (
                            <motion.article
                                key={dept.id}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: (idx % 6) * 0.08, ease: "easeOut" }}
                                className="group flex flex-col bg-white border border-charcoal/[0.04] hover:border-plum/20 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-lg hover:-translate-y-1 h-full"
                            >
                                {/* Fully Visible Image Banner */}
                                <div className="h-32 md:h-40 w-full relative bg-plum/5 shrink-0 border-b border-charcoal/[0.02] overflow-hidden">
                                    <img
                                        src={`/images/departments/dept_${dept.id}.png`}
                                        alt={`${dept.name} visualization`}
                                        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                                    />

                                    {/* Index */}
                                    <div className="absolute top-3 right-4 md:top-4 md:right-5 text-ivory/90 drop-shadow-md font-serif font-light text-lg md:text-xl italic z-20 transition-opacity duration-300">
                                        {String(idx + 1).padStart(2, '0')}
                                    </div>
                                </div>

                                {/* Content Sector */}
                                <div className="p-6 md:p-8 flex flex-col flex-grow bg-white z-10 text-left">
                                    <h2 className="font-serif text-xl md:text-2xl text-charcoal mb-3 group-hover:text-plum transition-colors duration-500" style={{ fontFamily: "var(--font-juana)" }}>
                                        {dept.name}
                                    </h2>

                                    <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-5 md:mb-7 flex-grow">
                                        {dept.description}
                                    </p>

                                    {/* Diseases list */}
                                    {dept.diseases.length > 0 && (
                                        <div className="mt-auto border-t border-charcoal/10 pt-4 md:pt-5">
                                            <h3 className="text-[9px] md:text-[10px] font-sans font-semibold uppercase tracking-[0.18em] text-plum mb-3">
                                                {t("departments.conditionsTreated")}
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {dept.diseases.map(disease => (
                                                    <span
                                                        key={disease}
                                                        className="inline-flex px-2.5 py-1 bg-ivory border border-charcoal/[0.06] rounded text-[10px] md:text-[11px] font-sans text-charcoal/70 group-hover:text-charcoal transition-colors duration-500"
                                                    >
                                                        {disease}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ──────────────────────────────────────────────────────── */}
            <section className="py-16 md:py-20 px-4 md:px-6 bg-ivory text-center border-t border-plum/10" aria-label={t("departments.cta.title")}>
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal mb-4 tracking-tight" style={{ fontFamily: "var(--font-juana)" }}>
                        {t("departments.cta.title")}
                    </h2>
                    <p className="font-sans text-sm md:text-base mb-6 md:mb-8 text-charcoal/80 leading-relaxed">
                        {t("departments.cta.desc")}
                    </p>
                    <Link href="/contact" className="inline-flex items-center justify-center w-full sm:w-auto px-6 md:px-8 py-3 md:py-3.5 bg-transparent border border-plum/30 text-plum font-sans font-medium text-[10px] md:text-xs tracking-[0.2em] uppercase rounded-full hover:bg-plum hover:text-white transition-all duration-300">
                        {t("departments.cta.button")}
                    </Link>
                </motion.div>
            </section>
        </main>
    );
}
