"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { testimonials, TestimonialItem } from "@/config/testimonials";

export default function TestimonialsAndStats() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlayingEmbed, setIsPlayingEmbed] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const trustMetrics = [
    { value: "24×7", label: t("home.trustMetrics.emergencyCare") },
    { value: "120", label: t("home.trustMetrics.beds") },
    { value: "3", label: t("home.trustMetrics.coreSpecialties") },
    { value: "50+", label: t("home.trustMetrics.expertPractitioners") },
    { value: "1300", label: t("home.trustMetrics.estYearAd") },
    { value: "5", label: t("home.trustMetrics.centresAcrossKerala") },
  ];

  const total = testimonials.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Automatic sliding with 8s interval, paused on hover/touch/focus
  useEffect(() => {
    if (isPaused || total <= 1) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide, total]);

  const currentItem: TestimonialItem = testimonials[currentIndex] || testimonials[0];

  return (
    <section
      className="py-16 md:py-24 bg-sandstone border-y border-plum/10 relative overflow-hidden"
      aria-label="Verified Patient Testimonials & Clinical Metrics"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Shared Parent Container: Left (~65% width) + Right (~35% width) */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-10 xl:gap-14 items-stretch">

          {/* ── Left Container: 9:16 Instagram Reel Carousel (~65% width) ── */}
          <div className="w-full lg:w-[63%] xl:w-[65%] flex flex-col justify-between lg:border-r lg:border-plum/15 lg:pr-10 xl:pr-14">

            {/* Header: Title and Prev/Next Navigation Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 md:mb-8">
              <div>
                <p className="eyebrow mb-2 text-taupe">
                  {t("home.testimonials.eyebrow")}
                </p>
                <h2
                  className="font-serif font-light text-2xl sm:text-3xl md:text-4xl text-charcoal tracking-tight leading-tight"
                  style={{ fontFamily: "var(--font-juana)" }}
                >
                  {t("home.testimonials.title")}
                </h2>
              </div>

              {/* Prev / Next Controls */}
              <div className="flex items-center gap-3">
                <span className="font-sans text-xs tracking-widest text-taupe mr-1">
                  {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label={t("home.testimonials.prevSlide")}
                  className="w-10 h-10 rounded-full border border-plum/20 hover:border-plum hover:bg-plum hover:text-ivory text-plum transition-all duration-300 flex items-center justify-center focus-visible:outline-plum active:scale-95"
                >
                  <svg className="w-4 h-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label={t("home.testimonials.nextSlide")}
                  className="w-10 h-10 rounded-full border border-plum/20 hover:border-plum hover:bg-plum hover:text-ivory text-plum transition-all duration-300 flex items-center justify-center focus-visible:outline-plum active:scale-95"
                >
                  <svg className="w-4 h-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Main Active Testimonial Card featuring 9:16 Instagram Reel Aspect Ratio */}
            <div className="relative bg-ivory/70 backdrop-blur-md rounded-2xl p-5 sm:p-7 md:p-8 border border-plum/10 shadow-soft">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-stretch"
                >
                  {/* ── 9:16 Instagram Reel Video Player Container ── */}
                  <div className="w-full sm:w-[240px] md:w-[250px] lg:w-[260px] shrink-0">
                    <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-lg border border-plum/20 group">

                      {/* Live Instagram Reel Embed Iframe */}
                      {currentItem.reelCode && (
                        <iframe
                          key={`iframe-${currentItem.reelCode}`}
                          src={`https://www.instagram.com/reel/${currentItem.reelCode}/embed/`}
                          className="w-full h-full border-0 rounded-2xl bg-black"
                          scrolling="no"
                          frameBorder="0"
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          allowFullScreen
                          title={`Changampally Instagram Reel - ${currentItem.author}`}
                        />
                      )}

                      {/* Fallback & External Link Watermark */}
                      <a
                        href={currentItem.postUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-3 left-3 right-3 bg-ivory/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[11px] font-sans text-charcoal font-medium shadow flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      >
                        <span className="truncate">Open in Instagram</span>
                        <svg className="w-3.5 h-3.5 shrink-0 text-plum ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* ── Testimonial Clinical Details & Quote ── */}
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      {/* Top Badges: Instagram + Clinical Condition Tag */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sans tracking-wide bg-plum/10 text-plum border border-plum/20">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                          <span>Instagram Reel</span>
                        </span>

                        {currentItem.condition && (
                          <span className="px-3 py-1 rounded-full text-xs font-sans tracking-wide bg-sandstone/70 text-charcoal border border-plum/15 font-medium">
                            {currentItem.condition}
                          </span>
                        )}
                      </div>

                      {/* Main Quote / Story */}
                      <blockquote className="relative my-3">
                        <span className="text-4xl text-plum/20 font-serif leading-none select-none block mb-1">“</span>
                        <p
                          className="font-light text-base sm:text-lg md:text-xl text-charcoal leading-relaxed"
                          style={{ fontFamily: "var(--font-juana)" }}
                        >
                          {currentItem.text}
                        </p>
                      </blockquote>
                    </div>

                    {/* Footer Info: Author, Role & Link to original Reel */}
                    <div className="pt-4 mt-4 border-t border-plum/10 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-sandstone flex items-center justify-center border border-plum/15 shrink-0">
                          <Image
                            src="/assets/Changampally Remedium_logo.png"
                            alt={currentItem.author}
                            width={36}
                            height={36}
                            className="object-contain p-1"
                          />
                        </div>
                        <div>
                          <cite className="not-italic">
                            <strong
                              className="block font-serif font-light text-base text-charcoal leading-tight"
                              style={{ fontFamily: "var(--font-juana)" }}
                            >
                              {currentItem.author}
                            </strong>
                            <span className="block font-sans text-xs text-taupe mt-0.5">
                              {currentItem.authorRole || currentItem.authorHandle}
                            </span>
                          </cite>
                        </div>
                      </div>

                      {/* Watch on Instagram Button */}
                      <a
                        href={currentItem.postUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-plum/20 text-xs font-sans tracking-[0.12em] uppercase text-plum font-medium hover:bg-plum hover:text-ivory transition-all group shrink-0"
                        aria-label={`Watch ${currentItem.author} Reel on Instagram`}
                      >
                        <span>Watch Reel</span>
                        <svg
                          className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Quick Reel Selector Pills (All 5 Reels Accessible with One Click) */}
            <div className="mt-5 flex flex-wrap items-center gap-2" role="tablist" aria-label="Instagram Reel Stories">
              {testimonials.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={idx === currentIndex}
                  onClick={() => goToSlide(idx)}
                  className={`px-3 py-1.5 rounded-full text-xs font-sans tracking-wide transition-all duration-300 flex items-center gap-1.5 ${idx === currentIndex
                    ? "bg-plum text-ivory shadow-sm font-medium"
                    : "bg-ivory/60 text-taupe hover:bg-ivory hover:text-charcoal border border-plum/10"
                    }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                  <span className="truncate max-w-[130px] sm:max-w-[180px]">
                    {item.condition || item.author}
                  </span>
                </button>
              ))}
            </div>

          </div>

          {/* ── Right Container: Relocated Numerical Statistics (~35% width) ── */}
          <div className="w-full lg:w-[37%] xl:w-[35%] flex flex-col justify-center">

            {/* Header for relocated institutional metrics */}
            <div className="mb-6 md:mb-8 text-center lg:text-start">
              <p className="eyebrow text-taupe">
                {t("home.testimonials.trustStatsHeading")}
              </p>
            </div>

            {/* Preserved metrics grid: exact values, labels, and typography */}
            <ul
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-y-10 sm:gap-y-12 gap-x-6 sm:gap-x-8"
              role="list"
              aria-label={t("common.brandName")}
            >
              {trustMetrics.map((metric) => (
                <li
                  key={metric.label}
                  className="flex flex-col items-center lg:items-start text-center lg:text-start gap-1.5 md:gap-2.5"
                >
                  <strong
                    className="font-serif font-light text-3xl md:text-5xl tracking-tight text-plum"
                    style={{ fontFamily: "var(--font-juana)" }}
                  >
                    {metric.value}
                  </strong>
                  <span className="font-sans font-medium text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-taupe leading-tight">
                    {metric.label}
                  </span>
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
}
