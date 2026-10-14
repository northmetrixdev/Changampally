"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center bg-sandstone">
      <div className="max-w-md mx-auto">
        <span
          className="font-serif text-7xl md:text-8xl text-plum/30 select-none block mb-4"
          style={{ fontFamily: "var(--font-juana)" }}
        >
          404
        </span>
        <h1
          className="font-serif font-light text-2xl md:text-3xl text-charcoal mb-4"
          style={{ fontFamily: "var(--font-juana)" }}
        >
          {t("common.pageNotFound")}
        </h1>
        <p className="font-sans font-light text-sm md:text-base text-taupe mb-8 leading-relaxed">
          {t("common.pageNotFoundDesc")}
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 bg-plum text-ivory text-xs font-sans uppercase tracking-[0.2em] rounded-full hover:bg-plum-dark transition-all duration-300"
        >
          {t("common.backHome")}
        </Link>
      </div>
    </div>
  );
}
