"use client";

import Link from "next/link";
import Image from "next/image";
import VideoBackground from "@/components/atoms/VideoBackground";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";
import { motion } from "framer-motion";

// ─── Variants ───────────────────────────────────────────────────────────────

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.4, delayChildren: 0.5 }, // Slower stagger for cinematic feel
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
            duration: 1.8, // Extremely slow fade for luxury feel
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        },
    },
};

const lineVariant = {
    hidden: { scaleX: 0 },
    visible: {
        scaleX: 1,
        transition: { duration: 1.4, delay: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
};

// ─── Component ──────────────────────────────────────────────────────────────

export default function HeroSection() {
    return (
        <section
            className="relative w-full h-screen min-h-[700px] overflow-hidden bg-sandstone"
            aria-label="Changampally Clinical Wellness Sanctuary"
        >
            {/* ── Video backdrop ────────────────────────────────────────────── */}
            <div className="absolute inset-0" aria-hidden="true">
                <VideoBackground
                    src="/assets/hero-bg.mp4"
                    poster=""
                    ariaLabel="Changampally hero background"
                    slot="hero"
                />

                {/* Unified dark overlay for text contrast — pure neutral charcoal, no plum */}
                <div className="absolute inset-0"
                    style={{ background: "linear-gradient(135deg, rgba(34,34,34,0.70) 0%, rgba(34,34,34,0.45) 50%, rgba(34,34,34,0.85) 100%)" }}
                />


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
                        alt="Changampally logo"
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
                        style={{ fontFamily: "var(--font-catchye)", fontWeight: 300 }}
                    >
                        Where Centuries of<br />
                        <span className="italic">Healing Meet Today.</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        variants={fadeUpBlur}
                        className="font-sans font-light text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed text-ivory/80 tracking-wide"
                    >
                        600 years of Ayurvedic heritage, integrated with modern oncology and rehabilitation.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={fadeUpBlur}
                        className="flex flex-col sm:flex-row gap-6 mt-16 justify-center"
                        role="group"
                    >
                        <Link href="/contact" className="btn-ghost-white tracking-[0.25em]" aria-label="Book a consultation">
                            Begin Healing
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
                        Discover
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
