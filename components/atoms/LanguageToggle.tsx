"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

interface LanguageToggleProps {
  isNavDark?: boolean;
  className?: string;
  isMobileDrawer?: boolean;
}

export default function LanguageToggle({
  isNavDark = false,
  className = "",
  isMobileDrawer = false,
}: LanguageToggleProps) {
  const { locale, toggleLocale, t } = useLanguage();

  if (isMobileDrawer) {
    return (
      <button
        type="button"
        onClick={toggleLocale}
        aria-label={t("common.toggleAria")}
        className={`w-full flex items-center justify-between py-2 px-3 rounded-lg border border-plum/20 bg-plum/5 text-plum text-xs font-sans font-medium uppercase tracking-wider hover:bg-plum hover:text-ivory transition-all duration-300 ${className}`}
      >
        <span className="text-[11px] font-sans font-light text-taupe">
          {locale === "en" ? "Language / اللغة" : "اللغة / Language"}
        </span>
        <span className="font-sans font-semibold text-xs tracking-wider">
          {t("common.toggleTarget")}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t("common.toggleAria")}
      className={`text-[13px] md:text-[14px] tracking-wider uppercase font-sans font-medium px-3.5 py-1.5 md:py-2 rounded-full border transition-all duration-300 cursor-pointer focus:outline-none focus:ring-1 focus:ring-plum ${
        isNavDark
          ? "border-charcoal/25 text-charcoal hover:bg-plum hover:border-plum hover:text-ivory"
          : "border-ivory/50 text-ivory hover:bg-ivory hover:text-plum"
      } ${className}`}
    >
      {t("common.toggleTarget")}
    </button>
  );
}
