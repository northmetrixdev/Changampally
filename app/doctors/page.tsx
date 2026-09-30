"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TEAM } from "@/lib/constants";

// ── Animation: single-scroll reveal ─────────────────────────────────────────
const fadeReveal = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

// ── 3 main featured doctors ──────────────────────────────────────────────────
const FEATURED_DOCTORS = [
    {
        ...TEAM[0],
        centre: "Changampally Remedium, Edappal",
        speciality: "Ayurveda Oncology",
        tagline: "Chief Consultant & Ayurveda Oncology Specialist",
        highlights: [
            "25 years of Ayurvedic Oncology experience",
            "12-year tenure at Nims Super Specialty Hospital, Trivandrum",
            "Member, Open Source Drug Discovery (OSDD) initiative",
        ],
        accentColor: "#33181C",
    },
    {
        ...TEAM[1],
        centre: "Changampally Vaidya Bhavan, Thirunavaya",
        speciality: "Allopathic General Medicine",
        tagline: "Allopathic Physician & Ayurvedic Medicine Manufacturer",
        highlights: [
            "13 years of allopathic general medicine practice",
            "Medicine Manufacturer & Exporter — Changampally Vaidya Bhavan & Vedic Age",
            "Medical Director, Orchid Medicity (Malappuram & Changaramkulam)",
        ],
        accentColor: "#4A2832",
    },
    {
        ...TEAM[2],
        centre: "Changampally Vaidya Bhavan, Thirunavaya",
        speciality: "Ayurvedic Psychiatry",
        tagline: "Ayurvedic Psychiatrist & Mental Health Specialist",
        highlights: [
            "MD in Ayurvedic Psychiatry",
            "Managing Director, Happymoon — scientific mental health platform",
            "Secretary, Ayurveda Medical Association of India, Ponnani",
        ],
        accentColor: "#5A3040",
    },
];

// ── Supporting doctors ────────────────────────────────────────────────────────
const OTHER_DOCTORS = [
    {
        id: "team-4",
        name: "Dr. Azhar Kalliyath",
        credentials: "MBBS, DNB(PM&R), MNAMS, FIPM",
        bio: "An experienced Physiatrist specializing in Physical Medicine and Rehabilitation, offering comprehensive care for intricate physical health conditions.",
        centre: "Changampally Remedium, Edappal",
        speciality: "Physiatrist",
        tagline: "Specialist in Physical Medicine and Rehabilitation",
    },
    {
        id: "team-5",
        name: "Dr. Shani Nebil",
        credentials: "BAMS, MSc",
        bio: "A dedicated Senior Ayurvedic Physician providing traditional consultations and integrated health management.",
        centre: "Changampally Remedium, Edappal",
        speciality: "Senior Physician",
        tagline: "Senior Ayurvedic Physician",
    },
    {
        id: "team-6",
        name: "Dr. Najla Gurukkal",
        credentials: "BDS",
        bio: "A skilled Dental Surgeon ensuring complete oral health and hygiene as part of our integrated healthcare approach.",
        centre: "Changampally Remedium, Edappal",
        speciality: "Dentist",
        tagline: "Dental Surgeon",
    },
];

export default function DoctorsPage() {
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
                            Our Physicians
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="font-serif font-light text-4xl sm:text-5xl md:text-[4.5rem] text-ivory tracking-tight leading-tight mb-4"
                            style={{ fontFamily: "var(--font-juana)" }}
                        >
                            People Behind the Care
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                            className="font-sans font-light text-sm sm:text-base text-ivory/80 leading-relaxed max-w-2xl"
                        >
                            At Changampally, our doctors are both Ayurvedic specialists and modern physicians — working together so every patient receives a unified, integrated care plan.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden md:flex flex-col items-end border-l border-ivory/20 pl-8 py-2"
                    >
                        <span className="font-serif text-4xl text-ivory mb-1">50+</span>
                        <span className="font-sans font-medium text-[11px] tracking-widest uppercase text-ivory/60">Expert Practitioners</span>
                    </motion.div>
                </div>
            </section>

            {/* ── 3 Featured Doctor Cards — side by side ────────────────────── */}
            <section className="py-16 md:py-20 px-4 md:px-8 xl:px-16 bg-ivory" aria-labelledby="featured-doctors-heading">
                <div className="max-w-[1440px] mx-auto">
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-sans font-medium text-[10px] tracking-[0.25em] uppercase text-plum mb-2"
                    >
                        Leadership
                    </motion.p>
                    <motion.h2
                        id="featured-doctors-heading"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="font-serif font-light text-3xl md:text-4xl text-charcoal mb-10"
                        style={{ fontFamily: "var(--font-juana)" }}
                    >
                        Our Medical Leadership
                    </motion.h2>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {FEATURED_DOCTORS.map((doctor, idx) => {
                            const initials = doctor.name
                                .split(" ")
                                .filter((w) => w.match(/^[A-Z]/))
                                .map((w) => w[0])
                                .join("")
                                .slice(0, 2);

                            return (
                                <motion.article
                                    key={doctor.id}
                                    variants={fadeReveal}
                                    className="relative flex flex-col bg-white border border-charcoal/[0.06] rounded-2xl overflow-visible shadow-soft group transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
                                    aria-label={`Featured doctor: ${doctor.name}`}
                                >
                                    {/* Specialty badge */}
                                    <div className="px-6 pt-6 pb-0">
                                        <span className="inline-block text-[8px] tracking-[0.22em] uppercase font-sans font-medium text-plum bg-plum/8 px-2.5 py-1 rounded border border-plum/15">
                                            {doctor.speciality}
                                        </span>
                                    </div>

                                    {/* Doctor photo placeholder — pops above card */}
                                    <div className="relative mt-6 mx-auto">
                                        {/* Photo placeholder circle — pops out visually */}
                                        <div
                                            className="relative w-28 h-28 md:w-32 md:h-32 rounded-full mx-auto overflow-hidden border-4 border-white shadow-md"
                                            style={{ background: `linear-gradient(135deg, ${doctor.accentColor}22 0%, ${doctor.accentColor}44 100%)` }}
                                            aria-label={`Photo placeholder for ${doctor.name}`}
                                        >
                                            {/* Initials as placeholder */}
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <span className="font-serif text-3xl font-light" style={{ color: doctor.accentColor, fontFamily: "var(--font-juana)" }}>
                                                    {initials}
                                                </span>
                                                <span className="text-[8px] font-sans text-taupe mt-1 tracking-wider opacity-70">Photo</span>
                                            </div>
                                        </div>
                                        {/* Subtle decorative ring */}
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
                                        <ul className="flex flex-col gap-2 mt-3 pt-3 border-t border-charcoal/[0.06]">
                                            {doctor.highlights.map((h) => (
                                                <li key={h} className="flex items-start gap-2">
                                                    <span className="text-[10px] mt-0.5 shrink-0 text-plum/40">✦</span>
                                                    <span className="font-sans font-light text-[11px] md:text-xs leading-relaxed text-charcoal">{h}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Centre */}
                                        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-charcoal/[0.06]">
                                            <span className="text-[10px] text-plum/40" aria-hidden="true">⊙</span>
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
            <section className="py-12 md:py-16 px-4 md:px-8 xl:px-16 bg-sandstone" aria-labelledby="other-doctors-heading">
                <div className="max-w-[1440px] mx-auto">
                    <motion.h2
                        id="other-doctors-heading"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-serif font-light text-2xl md:text-3xl text-charcoal mb-8"
                        style={{ fontFamily: "var(--font-juana)" }}
                    >
                        Our Specialist Team
                    </motion.h2>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {OTHER_DOCTORS.map((doctor) => {
                            const initials = doctor.name
                                .split(" ")
                                .filter((w) => w.match(/^[A-Z]/))
                                .map((w) => w[0])
                                .join("")
                                .slice(0, 2);
                            return (
                                <motion.article
                                    key={doctor.id}
                                    variants={fadeReveal}
                                    className="flex flex-col bg-ivory border border-charcoal/[0.06] rounded-xl overflow-hidden hover:border-plum/20 transition-all duration-400 hover:shadow-soft"
                                    aria-label={doctor.name}
                                >
                                    {/* Top area with initials */}
                                    <div className="flex items-center gap-4 p-5 pb-0">
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-plum/10 border border-plum/15 shrink-0">
                                            <span className="font-serif text-lg text-plum/70" style={{ fontFamily: "var(--font-juana)" }}>{initials}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-serif text-base text-charcoal leading-tight" style={{ fontFamily: "var(--font-juana)", fontWeight: 400 }}>
                                                {doctor.name}
                                            </h3>
                                            <p className="font-sans font-medium text-[10px] text-plum mt-0.5">{doctor.credentials}</p>
                                        </div>
                                    </div>
                                    <div className="p-5 flex flex-col gap-2 flex-grow">
                                        <span className="text-[8px] tracking-[0.2em] uppercase font-sans font-medium text-plum bg-plum/8 px-2 py-0.5 rounded border border-plum/10 self-start">
                                            {doctor.speciality}
                                        </span>
                                        <p className="font-sans font-light text-xs text-taupe leading-relaxed mt-1">{doctor.bio}</p>
                                        <div className="flex items-center gap-2 mt-auto pt-3 border-t border-charcoal/[0.06]">
                                            <span className="text-[10px] text-plum/40">⊙</span>
                                            <span className="font-sans font-light text-[10px] text-taupe">{doctor.centre}</span>
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* ── Guiding Principle by Dr. Jannathul Firdaus ────────────────── */}
            <section className="py-16 md:py-24 px-4 sm:px-6 bg-ivory" aria-label="Chief Physician guiding principle">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col md:flex-row gap-10 md:gap-16 items-center"
                    >
                        {/* Photo placeholder */}
                        <div className="shrink-0 flex flex-col items-center gap-3">
                            <div
                                className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-plum/20 shadow-md flex flex-col items-center justify-center bg-gradient-to-br from-plum/10 to-plum/25"
                                aria-label="Photo placeholder for Dr. Jannathul Firdaus Changampally"
                            >
                                <span className="font-serif text-3xl text-plum/60" style={{ fontFamily: "var(--font-juana)" }}>JF</span>
                                <span className="text-[8px] font-sans text-taupe mt-1 tracking-wider opacity-70">Photo</span>
                            </div>
                            <cite className="not-italic text-center">
                                <span className="block font-serif font-light text-base text-plum" style={{ fontFamily: "var(--font-juana)" }}>
                                    Dr. Jannathul Firdous Changampally
                                </span>
                                <span className="block font-sans font-light text-xs text-taupe mt-0.5">
                                    Chief Consultant — Ayurveda Oncology Specialist
                                </span>
                            </cite>
                        </div>

                        {/* Quote */}
                        <blockquote className="flex-1">
                            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-plum mb-6">Guiding Principle</p>
                            <span className="text-5xl md:text-7xl font-serif text-plum/15 block leading-none mb-4" aria-hidden="true">"</span>
                            <p className="font-serif font-light text-xl sm:text-2xl md:text-3xl leading-snug text-charcoal" style={{ fontFamily: "var(--font-juana)" }}>
                                A person walking into your clinic should not be the reason to treat them. Treat only if you are sure that the person is safe in your hands.
                            </p>
                        </blockquote>
                    </motion.div>
                </div>
            </section>

            {/* ── CTA ─────────────────────────────────────────────────────────── */}
            <section className="py-14 px-6 text-center bg-plum" aria-label="Book a consultation">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="font-sans font-light text-sm mb-4 text-ivory/70">Ready to speak with one of our physicians?</p>
                    <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-ivory/50 text-ivory font-sans font-light text-xs tracking-[0.2em] uppercase transition-all duration-400 hover:bg-ivory hover:text-plum" aria-label="Book a consultation with Changampally">
                        Book a Consultation
                    </a>
                </motion.div>
            </section>
        </main>
    );
}
