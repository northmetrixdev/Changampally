import type { Metadata } from "next";
import HeroSection from "@/components/organisms/HeroSection";
import StorySection from "@/components/organisms/StorySection";
import ServiceSpectrum from "@/components/organisms/ServiceSpectrum";
import SpecialisationsInteractive from "@/components/organisms/SpecialisationsInteractive";
import SectionHeading from "@/components/atoms/SectionHeading";
import { TRUST_METRICS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Changampally Health Care — Centre of Excellence in Intricate Disorders",
};

export default function HomePage() {
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
        aria-label="Changampally by the numbers"
      >
        <ul className="max-w-[1440px] mx-auto auto-rows-max px-6 grid grid-cols-2 lg:grid-cols-6 gap-y-12 md:gap-y-16 gap-x-8" role="list">
          {TRUST_METRICS.map((metric) => (
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
            <p className="eyebrow mb-6 md:mb-8 text-taupe">Chief Physician's Message</p>
            <blockquote className="relative px-2">
              <span className="absolute -top-6 md:-top-10 -left-2 md:-left-6 text-6xl md:text-8xl text-plum/10 pointer-events-none leading-none select-none" aria-hidden="true" style={{ fontFamily: "Georgia, serif" }}>“</span>
              <p className="font-light text-2xl md:text-4xl text-charcoal leading-tight mb-6 md:mb-8" style={{ fontFamily: "var(--font-juana)" }}>
                A person walking into your clinic should not be the reason to treat them. Treat only if you are sure that the person is safe in your hands.
              </p>
              <p className="font-sans font-light text-sm md:text-base text-taupe leading-relaxed">
                Safety is the first and most sacred aspect of any treatment. The doctorhood is not the promise of extended life but the accuracy in diagnosis, excellence in practical knowledge, and the compassionate touch to remove physical and mental suffering.
              </p>
              <footer className="mt-8 md:mt-10 flex items-center gap-4">
                <div className="w-12 h-px bg-plum/30" aria-hidden="true" />
                <cite className="not-italic">
                  <strong className="block font-serif font-light text-lg md:text-xl text-charcoal" style={{ fontFamily: "var(--font-juana)" }}>Dr. Jannathul Firdouse Changampally</strong>
                  <span className="block font-sans font-light text-[11px] md:text-xs text-taupe mt-1">Chief Consultant — Ayurveda Oncology Specialist</span>
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-32 px-6 text-center relative overflow-hidden bg-plum text-ivory"
        aria-label="Book a consultation"
      >
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <p className="eyebrow mb-4 md:mb-6 text-ivory/50 tracking-[0.3em]">Begin Today</p>
          <h2 className="font-serif font-light text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4 md:mb-6 mx-auto max-w-2xl leading-tight" style={{ fontFamily: "var(--font-juana)" }}>
            Get free second opinion from India’s leading specialists
          </h2>
          <p className="font-sans font-light text-base md:text-lg leading-relaxed mb-10 md:mb-12 text-ivory/80 max-w-xl">
            Per consultation handle (free)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto sm:gap-6 justify-center">
            <a href="/contact" className="btn-ghost-white border-ivory/50 text-ivory hover:bg-ivory hover:text-plum hover:border-ivory w-full sm:w-auto text-center">Book a Consultation</a>
            <a href="/services" className="btn-ghost-secondary border-transparent bg-ivory/10 hover:bg-ivory/20 hover:border-transparent text-ivory w-full sm:w-auto text-center">Explore Our Centres</a>
          </div>
        </div>
      </section>
    </>
  );
}
