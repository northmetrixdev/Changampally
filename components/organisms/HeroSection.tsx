"use client";

import Link from "next/link";
import Image from "next/image";
import VideoBackground from "@/components/atoms/VideoBackground";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { motion } from "framer-motion";

// ─── Variants ───────────────────────────────────────────────────────────────

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.4, delayChildren: 0.5 },
    },
};

const fadeUpBlur = {
    hidden: {
        opacity: 0,
        y: 40,
        filter: "blur(20px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 1.8,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        },
    },
};

// ─── Component ──────────────────────────────────────────────────────────────

export default function HeroSection() {
    const { t } = useLanguage();

    return (
        <section
            className="relative w-full h-screen min-h-[700px] overflow-hidden bg-sandstone"
            aria-label={t("common.brandTagline")}
        >
            {/* ── Video backdrop ────────────────────────────────────────────── */}
            <div className="absolute inset-0" aria-hidden="true">
                <VideoBackground
                    src="/assets/hero-bg.mp4"
                    poster=""
                    ariaLabel={t("home.hero.bgVideoAria")}
                    slot="hero"
                />

                {/* Minimal top/bottom gradient to ensure text contrast without changing video hue */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50 pointer-events-none" />
            </div>

            {/* ── Content overlay ──────────────────────────────────────────── */}
            <motion.div
                className="relative z-20 flex flex-col items-center justify-center h-full px-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Logo */}
                <motion.div variants={fadeUpBlur} className="mb-12">
                    <Image
                        src="/assets/Changampally Remedium_logo-light1.png"
                        alt={t("home.hero.logoAlt")}
                        width={140}
                        height={140}
                        className="object-contain opacity-90"
                        priority
                    />
                </motion.div>

                <div className="text-center max-w-5xl mx-auto">
                    {/* H1 Headline */}
                    <motion.h1
                        variants={fadeUpBlur}
                        className="font-serif font-light text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] tracking-[0.05em] text-ivory leading-[1.1] mb-6 md:mb-8"
                        style={{ fontFamily: "var(--font-juana)", fontWeight: 300 }}
                    >
                        {t("home.hero.line1")}<br />
                        <span className="italic">{t("home.hero.line2")}</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        variants={fadeUpBlur}
                        className="font-sans font-light text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed text-ivory/80 tracking-wide"
                    >
                        {t("home.hero.subheadline")}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={fadeUpBlur}
                        className="flex flex-col sm:flex-row gap-6 mt-16 justify-center"
                        role="group"
                    >
                        <Link href="/contact" className="btn-ghost-white tracking-[0.25em]" aria-label={t("home.hero.ctaAria")}>
                            {t("home.hero.cta")}
                        </Link>
                    </motion.div>
                </div>

                {/* Scroll indicator — Minimalist line */}
                <motion.div
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                    aria-hidden="true"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2, duration: 1.5 }}
                >
                    <span className="text-[9px] font-sans font-medium tracking-[0.4em] uppercase text-ivory/60">
                        {t("home.hero.discover")}
                    </span>
                    <div className="w-px h-16 bg-ivory/20 relative overflow-hidden">
                        <motion.div
                            className="w-full h-1/2 bg-ivory"
                            animate={{ y: ["-100%", "200%"] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
