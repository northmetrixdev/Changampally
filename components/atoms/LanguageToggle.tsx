"use client";

import { motion } from "framer-motion";
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
  const { locale, setLocale } = useLanguage();

  const options = [
    { code: "en" as const, label: "EN", ariaLabel: "Switch language to English" },
    { code: "ar" as const, label: "عربي", ariaLabel: "التبديل إلى اللغة العربية" },
  ];

  if (isMobileDrawer) {
    return (
      <div
        dir="ltr"
        style={{ direction: "ltr" }}
        className={`w-full flex items-center justify-between py-2 px-3.5 rounded-xl border border-plum/15 bg-plum/[0.03] ${className}`}
        role="group"
        aria-label="Language selection"
      >
        <div className="flex flex-col text-left">
          <span className="text-[11px] font-sans font-medium text-charcoal tracking-wide">
            Language / اللغة
          </span>
          <span className="text-[9px] font-sans text-taupe uppercase tracking-wider">
            {locale === "en" ? "English active" : "العربية مفعلة"}
          </span>
        </div>

        {/* Minimal segmented pill toggle with fixed dimensions */}
        <div
          dir="ltr"
          style={{ direction: "ltr" }}
          className="inline-flex items-center p-0.5 rounded-full bg-sandstone/80 border border-plum/15 relative shrink-0"
        >
          {options.map((opt) => {
            const isActive = locale === opt.code;
            return (
              <button
                key={opt.code}
                type="button"
                onClick={() => setLocale(opt.code)}
                aria-pressed={isActive}
                aria-label={opt.ariaLabel}
                className={`relative z-10 w-11 h-6.5 flex items-center justify-center text-xs font-sans font-medium tracking-wider transition-colors duration-200 cursor-pointer ${
                  isActive ? "text-ivory" : "text-taupe hover:text-charcoal"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="mobileLangIndicator"
                    className="absolute inset-0 rounded-full bg-plum shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div
      dir="ltr"
      style={{ direction: "ltr" }}
      role="group"
      aria-label="Language selection"
      className={`inline-flex items-center p-[2.5px] rounded-full transition-colors duration-300 relative select-none shrink-0 ${
        isNavDark
          ? "bg-plum/[0.06] border border-charcoal/15 hover:border-charcoal/30"
          : "bg-black/20 border border-ivory/30 backdrop-blur-md hover:border-ivory/50"
      } ${className}`}
    >
      {options.map((opt) => {
        const isActive = locale === opt.code;

        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => setLocale(opt.code)}
            aria-pressed={isActive}
            aria-label={opt.ariaLabel}
            className={`relative z-10 w-9 sm:w-10 h-6 sm:h-7 flex items-center justify-center text-[11px] sm:text-xs font-sans tracking-wider transition-colors duration-200 cursor-pointer ${
              isActive
                ? isNavDark
                  ? "text-ivory font-medium"
                  : "text-plum font-semibold"
                : isNavDark
                ? "text-taupe hover:text-charcoal"
                : "text-ivory/70 hover:text-ivory"
            }`}
          >
            {/* Smooth animated active pill background */}
            {isActive && (
              <motion.span
                layoutId="navLangIndicator"
                className={`absolute inset-0 rounded-full shadow-sm -z-10 ${
                  isNavDark ? "bg-plum" : "bg-ivory"
                }`}
                transition={{ type: "spring", stiffness: 450, damping: 35 }}
              />
            )}
            <span className="leading-none">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
