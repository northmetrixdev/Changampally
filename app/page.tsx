"use client";

import { useEffect } from "react";
import HeroSection from "@/components/organisms/HeroSection";
import StorySection from "@/components/organisms/StorySection";
import ServiceSpectrum from "@/components/organisms/ServiceSpectrum";
import SpecialisationsInteractive from "@/components/organisms/SpecialisationsInteractive";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Link from "next/link";

export default function HomePage() {
  const { t, locale } = useLanguage();

  useEffect(() => {
    document.title = t("meta.defaultTitle");
  }, [t, locale]);

  const trustMetrics = [
    { value: "24×7", label: t("home.trustMetrics.emergencyCare") },
    { value: "120", label: t("home.trustMetrics.beds") },
    { value: "3", label: t("home.trustMetrics.coreSpecialties") },
    { value: "50+", label: t("home.trustMetrics.expertPractitioners") },
    { value: "1300", label: t("home.trustMetrics.estYearAd") },
    { value: "5", label: t("home.trustMetrics.centresAcrossKerala") },
  ];

  return (
    <>
      <HeroSection />

      <StorySection />

      {/* ── Services Spectrum ─────────────────────────────────────────── */}
      <ServiceSpectrum />

      {/* ── Departments preview ────────────────────────────────────────── */}
      <SpecialisationsInteractive />

      {/* ── Trust metrics ──────────────────────── */}
      <section
        className="py-16 md:py-24 bg-sandstone border-y border-plum/10"
        aria-label={t("common.brandName")}
      >
        <ul className="max-w-[1440px] mx-auto auto-rows-max px-6 grid grid-cols-2 lg:grid-cols-6 gap-y-12 md:gap-y-16 gap-x-8" role="list">
          {trustMetrics.map((metric) => (
            <li key={metric.label} className="flex flex-col items-center text-center gap-2 md:gap-3">
              <strong className="font-serif font-light text-3xl md:text-5xl tracking-tight text-plum" style={{ fontFamily: "var(--font-juana)" }}>
                {metric.value}
              </strong>
              <span className="font-sans font-medium text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-taupe leading-tight">
                {metric.label}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Doctor message ────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-32 px-6 bg-ivory"
        aria-labelledby="physician-message-heading"
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-center">
          <div className="flex-1">
            <p className="eyebrow mb-6 md:mb-8 text-taupe">{t("home.physician.eyebrow")}</p>
            <blockquote className="relative px-2">
              <span className="absolute -top-6 md:-top-10 -left-2 md:-left-6 text-6xl md:text-8xl text-plum/10 pointer-events-none leading-none select-none" aria-hidden="true" style={{ fontFamily: "Georgia, serif" }}>“</span>
              <p className="font-light text-2xl md:text-4xl text-charcoal leading-tight mb-6 md:mb-8" style={{ fontFamily: "var(--font-juana)" }}>
                {t("home.physician.quoteLead")}
              </p>
              <p className="font-sans font-light text-sm md:text-base text-taupe leading-relaxed">
                {t("home.physician.quoteBody")}
              </p>
              <footer className="mt-8 md:mt-10 flex items-center gap-4">
                <div className="w-12 h-px bg-plum/30" aria-hidden="true" />
                <cite className="not-italic">
                  <strong className="block font-serif font-light text-lg md:text-xl text-charcoal" style={{ fontFamily: "var(--font-juana)" }}>
                    {t("home.physician.doctorName")}
                  </strong>
                  <span className="block font-sans font-light text-[11px] md:text-xs text-taupe mt-1">
                    {t("home.physician.doctorRole")}
                  </span>
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-32 px-6 text-center relative overflow-hidden bg-plum text-ivory"
        aria-label={t("common.bookConsultation")}
      >
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <p className="eyebrow mb-4 md:mb-6 text-ivory/50 tracking-[0.3em]">{t("home.finalCta.eyebrow")}</p>
          <h2 className="font-serif font-light text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4 md:mb-6 mx-auto max-w-2xl leading-tight" style={{ fontFamily: "var(--font-juana)" }}>
            {t("home.finalCta.title")}
          </h2>
          <p className="font-sans font-light text-base md:text-lg leading-relaxed mb-10 md:mb-12 text-ivory/80 max-w-xl">
            {t("home.finalCta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto sm:gap-6 justify-center">
            <Link href="/contact" className="btn-ghost-white border-ivory/50 text-ivory hover:bg-ivory hover:text-plum hover:border-ivory w-full sm:w-auto text-center">
              {t("home.finalCta.btnConsult")}
            </Link>
            <Link href="/services" className="btn-ghost-secondary border-transparent bg-ivory/10 hover:bg-ivory/20 hover:border-transparent text-ivory w-full sm:w-auto text-center">
              {t("home.finalCta.btnCentres")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
