"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function SkipNav() {
  const { t } = useLanguage();
  return (
    <a href="#main-content" className="skip-nav">
      {t("common.skipNav")}
    </a>
  );
}
