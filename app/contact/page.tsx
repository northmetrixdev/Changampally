"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { COUNTRIES } from "@/lib/i18n/data";
import { CONTACT } from "@/lib/constants";

const fadeReveal = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function ContactPage() {
    const { locale, t } = useLanguage();
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        document.title = t("meta.contactTitle");
    }, [t, locale]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        // Simulate immediate reliable submission
        await new Promise((resolve) => setTimeout(resolve, 600));
        setSubmitting(false);
        setSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-ivory font-sans pt-24 md:pt-32 pb-16 md:pb-24">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                
                {/* ── Minimal enquiry form at top ───────────────────────────── */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div variants={fadeReveal} className="mb-8">
                        <span className="font-sans font-medium text-[9px] tracking-[0.28em] uppercase text-plum">
                            {t("contact.hero.eyebrow")}
                        </span>
                        <h1 className="font-serif font-light text-3xl md:text-5xl text-charcoal mt-2" style={{ fontFamily: "var(--font-juana)" }}>
                            {t("contact.hero.title")}
                        </h1>
                        <p className="font-sans font-light text-sm text-taupe mt-3">
                            {t("contact.hero.subtitle")}
                        </p>
                    </motion.div>

                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-8 bg-sandstone border border-plum/20 rounded-2xl text-center"
                        >
                            <span className="text-3xl mb-3 block">✓</span>
                            <h3 className="font-serif text-2xl text-charcoal mb-2" style={{ fontFamily: "var(--font-juana)" }}>
                                {t("contact.form.successMessage")}
                            </h3>
                            <button
                                type="button"
                                onClick={() => setSubmitted(false)}
                                className="mt-4 text-xs font-sans font-medium text-plum underline cursor-pointer"
                            >
                                {locale === "ar" ? "إرسال استفسار آخر" : "Send another enquiry"}
                            </button>
                        </motion.div>
                    ) : (
                        <form
                            className="flex flex-col gap-8"
                            onSubmit={handleSubmit}
                            aria-label={t("contact.hero.title")}
                            noValidate={false}
                        >
                            {/* Row 1 — name + email + phone */}
                            <motion.div variants={fadeReveal} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="cp-name" className="font-sans font-medium text-[9px] tracking-[0.2em] uppercase text-plum/70">
                                        {t("contact.form.fullName")} <span className="text-plum font-sans" style={{ fontFamily: "Arial, sans-serif" }}>*</span>
                                    </label>
                                    <input
                                        id="cp-name" name="name" type="text"
                                        placeholder={t("contact.form.namePlaceholder")}
                                        required autoComplete="name"
                                        className="w-full px-0 py-2.5 font-sans font-light text-sm text-charcoal placeholder:text-taupe-light bg-transparent border-0 border-b border-plum/25 outline-none focus:border-plum transition-all duration-300"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="cp-email" className="font-sans font-medium text-[9px] tracking-[0.2em] uppercase text-plum/70">
                                        {t("contact.form.email")} <span className="text-plum font-sans" style={{ fontFamily: "Arial, sans-serif" }}>*</span>
                                    </label>
                                    <input
                                        id="cp-email" name="email" type="email"
                                        placeholder={t("contact.form.emailPlaceholder")}
                                        required autoComplete="email"
                                        className="w-full px-0 py-2.5 font-sans font-light text-sm text-charcoal placeholder:text-taupe-light bg-transparent border-0 border-b border-plum/25 outline-none focus:border-plum transition-all duration-300"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="cp-phone" className="font-sans font-medium text-[9px] tracking-[0.2em] uppercase text-plum/70">
                                        {t("contact.form.phone")}
                                    </label>
                                    <div className="flex items-center gap-1.5 border-0 border-b border-plum/25 focus-within:border-plum transition-all duration-300">
                                        <select
                                            name="countryCode"
                                            defaultValue="+91"
                                            aria-label={t("contact.form.countryCodeAria")}
                                            className="py-2.5 font-sans font-normal text-[11px] sm:text-xs text-charcoal bg-transparent border-none outline-none cursor-pointer shrink-0 w-[84px] sm:w-[94px] truncate"
                                        >
                                            {COUNTRIES.map((c) => (
                                                <option key={c.value} value={c.value}>
                                                    {c.flag} {c.code} ({locale === "ar" ? c.nameAr : c.nameEn})
                                                </option>
                                            ))}
                                        </select>
                                        <span className="text-plum/30 text-xs font-light select-none pointer-events-none">|</span>
                                        <input
                                            id="cp-phone" name="phone" type="tel"
                                            placeholder={t("contact.form.phonePlaceholder")}
                                            autoComplete="tel"
                                            className="flex-1 w-full min-w-0 py-2.5 font-sans font-light text-sm text-charcoal placeholder:text-taupe-light bg-transparent border-none outline-none"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Row 2 — subject */}
                            <motion.div variants={fadeReveal} className="flex flex-col gap-1.5">
                                <label htmlFor="cp-subject" className="font-sans font-medium text-[9px] tracking-[0.2em] uppercase text-plum/70">
                                    {t("contact.form.subject")} <span className="text-plum font-sans" style={{ fontFamily: "Arial, sans-serif" }}>*</span>
                                </label>
                                <select
                                    id="cp-subject" name="subject" required
                                    defaultValue=""
                                    className="w-full px-0 py-2.5 font-sans font-light text-sm text-charcoal bg-transparent border-0 border-b border-plum/25 outline-none focus:border-plum transition-all duration-300 appearance-none rounded-none cursor-pointer"
                                >
                                    <option value="" disabled>{t("contact.form.subjectPlaceholder")}</option>
                                    <option value="consultation">{t("contact.form.subjectConsultation")}</option>
                                    <option value="oncology">{t("contact.form.subjectOncology")}</option>
                                    <option value="mental_health">{t("contact.form.subjectMentalHealth")}</option>
                                    <option value="general">{t("contact.form.subjectGeneral")}</option>
                                </select>
                            </motion.div>

                            {/* Row 3 — message */}
                            <motion.div variants={fadeReveal} className="flex flex-col gap-1.5">
                                <label htmlFor="cp-message" className="font-sans font-medium text-[9px] tracking-[0.2em] uppercase text-plum/70">
                                    {t("contact.form.message")} <span className="text-plum font-sans" style={{ fontFamily: "Arial, sans-serif" }}>*</span>
                                </label>
                                <textarea
                                    id="cp-message" name="message" required
                                    placeholder={t("contact.form.messagePlaceholder")}
                                    rows={4}
                                    className="w-full px-0 py-2.5 font-sans font-light text-sm text-charcoal placeholder:text-taupe-light bg-transparent border-0 border-b border-plum/25 outline-none focus:border-plum transition-all duration-300 resize-y min-h-[100px]"
                                />
                            </motion.div>

                            <motion.div variants={fadeReveal} className="flex items-center justify-between mt-4 border-t border-plum/10 pt-8">
                                <p className="font-sans font-light text-[10px] text-taupe max-w-[200px]">
                                    {t("contact.form.privacyNotice")}
                                </p>
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="inline-flex items-center justify-center px-8 py-3.5 bg-plum text-ivory font-sans font-medium text-[10px] tracking-[0.2em] uppercase hover:bg-plum-dark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 rounded-sm cursor-pointer disabled:opacity-50"
                                >
                                    {submitting ? t("contact.form.submitting") : t("contact.form.submit")}
                                </button>
                            </motion.div>
                        </form>
                    )}
                </motion.div>

                {/* ── Divider ───────────────────────────────────────────────── */}
                <div className="h-px bg-plum/10 my-16 md:my-24" />

                {/* ── Minimal contact info ──────────────────────────────────── */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16"
                    variants={stagger}
                    initial="hidden"
                    animate="show"
                >
                    {/* Main centre contact */}
                    <motion.div variants={fadeReveal} className="flex flex-col gap-4">
                        <span className="font-sans font-medium text-[9px] tracking-[0.28em] uppercase text-plum border-b border-plum/15 pb-2">
                            {t("contact.info.mainCentre")}
                        </span>
                        <address className="not-italic font-sans font-light text-sm text-charcoal leading-relaxed">
                            {locale === "ar" ? "تشانغامبالي ريميديوم للرعاية الصحية المتكاملة" : CONTACT.addressLine1}<br />
                            <bdi dir="ltr">{CONTACT.addressLine2}</bdi>
                        </address>
                        <div className="flex flex-col gap-1 mt-1">
                            <a href={`tel:${CONTACT.phoneMedical1.replace(/\s+/g, "")}`}
                                className="font-sans font-light text-base text-plum hover:text-plum-dark transition-colors" dir="ltr">
                                <bdi>{CONTACT.phoneMedical1}</bdi>
                            </a>
                            <a href={`tel:${CONTACT.phoneMedical2.replace(/\s+/g, "")}`}
                                className="font-sans font-light text-sm text-taupe hover:text-plum transition-colors" dir="ltr">
                                <bdi>{CONTACT.phoneMedical2}</bdi>
                            </a>
                        </div>
                        <a href={`mailto:${CONTACT.email}`}
                            className="font-sans font-light text-xs text-taupe hover:text-plum transition-colors mt-1" dir="ltr">
                            <bdi>{CONTACT.email}</bdi>
                        </a>
                    </motion.div>

                    {/* Other number */}
                    <motion.div variants={fadeReveal} className="flex flex-col gap-4">
                        <span className="font-sans font-medium text-[9px] tracking-[0.28em] uppercase text-plum border-b border-plum/15 pb-2">
                            {t("contact.info.helpline")}
                        </span>
                        <p className="font-sans font-light text-xs text-taupe leading-relaxed">
                            {t("contact.info.helplineDesc")}
                        </p>
                        <a href="tel:+919072666105"
                            className="font-sans font-light text-base text-plum hover:text-plum-dark transition-colors" dir="ltr">
                            <bdi>+91 9072 666 105</bdi>
                        </a>
                        <p className="font-sans font-light text-xs text-taupe mt-2">
                            {t("contact.info.hours")}
                        </p>
                    </motion.div>
                </motion.div>

            </div>
        </main>
    );
}
