"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getFeaturedDoctors, getSupportingDoctors } from "@/lib/i18n/data";

const fadeReveal = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function DoctorsPage() {
    const { locale, t } = useLanguage();
    const featuredDoctors = getFeaturedDoctors(locale);
    const otherDoctors = getSupportingDoctors(locale);

    useEffect(() => {
        document.title = t("meta.doctorsTitle");
    }, [t, locale]);

    return (
        <main className="min-h-screen bg-sandstone">

            {/* ── Compact Hero — same 20% style as Departments ─────────────── */}
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
                            {t("doctors.hero.eyebrow")}
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="font-serif font-light text-4xl sm:text-5xl md:text-[4.5rem] text-ivory tracking-tight leading-tight mb-4"
                            style={{ fontFamily: "var(--font-juana)" }}
                        >
                            {t("doctors.hero.title")}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                            className="font-sans font-light text-sm sm:text-base text-ivory/80 leading-relaxed max-w-2xl"
                        >
                            {t("doctors.hero.desc")}
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden md:flex flex-col items-end border-l border-ivory/20 pl-8 py-2"
                    >
                        <span className="font-sans font-light text-4xl text-ivory mb-1">50+</span>
                        <span className="font-sans font-medium text-[11px] tracking-widest uppercase text-ivory/60">
                            {t("doctors.hero.statLabel")}
                        </span>
                    </motion.div>
                </div>
            </section>

            {/* ── 3 Featured Doctor Cards — side by side ────────────────────── */}
            <section className="py-16 md:py-20 px-4 md:px-8 xl:px-16 bg-ivory" aria-labelledby="featured-doctors-heading">
                <div className="max-w-[1440px] mx-auto">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="font-sans font-medium text-[10px] tracking-[0.25em] uppercase text-plum mb-2"
                    >
                        {t("doctors.leadership.eyebrow")}
                    </motion.p>
                    <motion.h2
                        id="featured-doctors-heading"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="font-serif font-light text-3xl md:text-4xl text-charcoal mb-10"
                        style={{ fontFamily: "var(--font-juana)" }}
                    >
                        {t("doctors.leadership.title")}
                    </motion.h2>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                        variants={stagger}
                        initial="hidden"
                        animate="show"
                    >
                        {featuredDoctors.map((doctor) => {
                            const initials = doctor.name
                                .split(" ")
                                .filter((w) => w.match(/^[A-Z\u0600-\u06FF]/))
                                .map((w) => w[0])
                                .join("")
                                .slice(0, 2);

                            return (
                                <motion.article
                                    key={doctor.id}
                                    variants={fadeReveal}
                                    className="relative flex flex-col bg-sandstone border border-charcoal/[0.06] rounded-2xl overflow-visible shadow-soft group transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
                                    aria-label={doctor.name}
                                >
                                    {/* Specialty badge */}
                                    <div className="px-6 pt-6 pb-0">
                                        <span className="inline-block text-[8px] tracking-[0.22em] uppercase font-sans font-medium text-plum bg-plum/8 px-2.5 py-1 rounded border border-plum/15">
                                            {doctor.speciality}
                                        </span>
                                    </div>

                                    {/* Doctor photo — pops above card */}
                                    <div className="relative mt-6 mx-auto">
                                        <div
                                            className="relative w-28 h-28 md:w-32 md:h-32 rounded-full mx-auto overflow-hidden border-4 border-ivory shadow-md"
                                            style={{ background: `linear-gradient(135deg, ${doctor.accentColor}22 0%, ${doctor.accentColor}44 100%)` }}
                                            aria-label={`Photo of ${doctor.name}`}
                                        >
                                            {doctor.image ? (
                                                <Image
                                                    src={doctor.image}
                                                    alt={doctor.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                    <span className="font-serif text-3xl font-light" style={{ color: doctor.accentColor, fontFamily: "var(--font-juana)" }}>
                                                        {initials}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <div
                                            className="absolute inset-0 rounded-full -m-1 border-2 opacity-20"
                                            style={{ borderColor: doctor.accentColor }}
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="flex flex-col gap-3 p-6 pt-4 flex-grow">
                                        <div className="text-center">
                                            <h3 className="font-serif text-xl md:text-2xl text-charcoal leading-tight mb-1" style={{ fontFamily: "var(--font-juana)", fontWeight: 400 }}>
                                                {doctor.name}
                                            </h3>
                                            <p className="font-sans font-medium text-xs text-plum">{doctor.credentials}</p>
                                            <p className="font-sans font-light text-xs text-taupe mt-1">{doctor.tagline}</p>
                                        </div>

                                        <p className="font-sans font-light text-sm leading-relaxed text-taupe mt-1 text-center">
                                            {doctor.bio}
                                        </p>

                                        {/* Highlights */}
                                        {doctor.highlights && (
                                            <ul className="flex flex-col gap-2 mt-3 pt-3 border-t border-charcoal/[0.06]">
                                                {doctor.highlights.map((h) => (
                                                    <li key={h} className="flex items-start gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-plum/40 mt-1 shrink-0 inline-block" />
                                                        <span className="font-sans font-light text-[11px] md:text-xs leading-relaxed text-charcoal">{h}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {/* Centre */}
                                        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-charcoal/[0.06]">
                                            <span className="w-1.5 h-1.5 rounded-full bg-plum/40 shrink-0 inline-block" aria-hidden="true" />
                                            <span className="font-sans font-light text-[10px] tracking-[0.12em] text-taupe">{doctor.centre}</span>
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* ── Supporting Doctors Grid ────────────────────────────────────── */}
            <section className="py-16 md:py-24 px-4 md:px-8 xl:px-16 bg-sandstone border-t border-charcoal/[0.06]" aria-labelledby="other-doctors-heading">
                <div className="max-w-[1440px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 text-center"
                    >
                        <p className="font-sans font-medium text-[10px] tracking-[0.25em] uppercase text-plum mb-2">
                            {t("doctors.specialistTeam.eyebrow")}
                        </p>
                        <h2
                            id="other-doctors-heading"
                            className="font-serif font-light text-3xl md:text-4xl text-charcoal"
                            style={{ fontFamily: "var(--font-juana)" }}
                        >
                            {t("doctors.specialistTeam.title")}
                        </h2>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                        variants={stagger}
                        initial="hidden"
                        animate="show"
                    >
                        {otherDoctors.map((doctor) => {
                            const initials = doctor.name
                                .split(" ")
                                .filter((w) => w.match(/^[A-Z\u0600-\u06FF]/))
                                .map((w) => w[0])
                                .join("")
                                .slice(0, 2);
                            return (
                                <motion.article
                                    key={doctor.id}
                                    variants={fadeReveal}
                                    className="relative flex flex-col bg-sandstone border border-charcoal/[0.06] rounded-2xl overflow-visible shadow-soft group transition-all duration-500 hover:shadow-lg hover:-translate-y-1 p-6 md:p-8"
                                    aria-label={doctor.name}
                                >
                                    {/* Specialty badge */}
                                    <div className="text-center mb-2">
                                        <span className="inline-block text-[8px] tracking-[0.22em] uppercase font-sans font-medium text-plum bg-plum/8 px-2.5 py-1 rounded border border-plum/15">
                                            {doctor.speciality}
                                        </span>
                                    </div>

                                    {/* Doctor photo centered */}
                                    <div className="relative my-4 mx-auto">
                                        <div
                                            className="relative w-28 h-28 md:w-32 md:h-32 rounded-full mx-auto overflow-hidden border-4 border-ivory shadow-md bg-plum/10"
                                            aria-label={`Photo of ${doctor.name}`}
                                        >
                                            {doctor.image ? (
                                                <Image src={doctor.image} alt={doctor.name} fill className="object-cover" />
                                            ) : (
                                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                    <span className="font-serif text-3xl font-light text-plum" style={{ fontFamily: "var(--font-juana)" }}>
                                                        {initials}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Doctor Info */}
                                    <div className="flex flex-col gap-2 flex-grow text-center">
                                        <h3 className="font-serif text-xl md:text-2xl text-charcoal leading-tight" style={{ fontFamily: "var(--font-juana)", fontWeight: 400 }}>
                                            {doctor.name}
                                        </h3>
                                        <p className="font-sans font-medium text-xs text-plum">{doctor.credentials}</p>
                                        {doctor.tagline ? (
                                            <p className="font-sans font-light text-xs text-taupe mb-2">{doctor.tagline}</p>
                                        ) : null}

                                        <p className="font-sans font-light text-sm text-taupe leading-relaxed flex-grow border-t border-charcoal/[0.06] pt-3 mt-1">
                                            {doctor.bio}
                                        </p>

                                        <div className="flex items-center justify-center gap-2 mt-4 pt-3 border-t border-charcoal/[0.06]">
                                            <span className="font-sans font-light text-[10px] tracking-[0.12em] text-taupe">{doctor.centre}</span>
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* ── Guiding Principle ────────────────── */}
            <section className="py-16 md:py-24 px-4 sm:px-6 bg-ivory" aria-label={t("doctors.principle.eyebrow")}>
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col md:flex-row gap-10 md:gap-16 items-center"
                    >
                        {/* Doctor Photo */}
                        <div className="shrink-0 flex flex-col items-center gap-3">
                            <div
                                className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-plum/20 shadow-md bg-gradient-to-br from-plum/10 to-plum/25"
                                aria-label={t("doctors.principle.doctorName")}
                            >
                                <Image src="/images/doctors/Dr_Firdouse.png" alt={t("doctors.principle.doctorName")} fill className="object-cover" />
                            </div>
                            <cite className="not-italic text-center">
                                <span className="block font-serif font-light text-base text-plum" style={{ fontFamily: "var(--font-juana)" }}>
                                    {t("doctors.principle.doctorName")}
                                </span>
                                <span className="block font-sans font-light text-xs text-taupe mt-0.5">
                                    {t("doctors.principle.doctorRole")}
                                </span>
                            </cite>
                        </div>

                        {/* Quote */}
                        <blockquote className="flex-1">
                            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-plum mb-6">{t("doctors.principle.eyebrow")}</p>
                            <span className="text-5xl md:text-7xl font-serif text-plum/25 block leading-none mb-4" style={{ fontFamily: "Georgia, serif" }} aria-hidden="true">&ldquo;</span>
                            <p className="font-serif font-light text-xl sm:text-2xl md:text-3xl leading-snug text-charcoal" style={{ fontFamily: "var(--font-juana)" }}>
                                {t("doctors.principle.quote")}
                            </p>
                        </blockquote>
                    </motion.div>
                </div>
            </section>

            {/* ── CTA ─────────────────────────────────────────────────────────── */}
            <section className="py-14 px-6 text-center bg-plum" aria-label={t("doctors.cta.aria")}>
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="font-sans font-light text-sm mb-4 text-ivory/70">{t("doctors.cta.text")}</p>
                    <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-ivory/50 text-ivory font-sans font-light text-xs tracking-[0.2em] uppercase transition-all duration-400 hover:bg-ivory hover:text-plum" aria-label={t("doctors.cta.aria")}>
                        {t("doctors.cta.button")}
                    </Link>
                </motion.div>
            </section>
        </main>
    );
}
