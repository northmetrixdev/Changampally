"use client";

import { SITE_URL } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function StructuredData() {
  const { locale, t } = useLanguage();

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: t("common.brandName"),
    alternateName: locale === "ar" ? "Changampally" : "تشانغامبالي",
    description: t("common.brandDescription"),
    url: SITE_URL,
    logo: `${SITE_URL}/assets/Changampally%20Remedium_logo.png`,
    foundingDate: "1300",
    telephone: "+91-9072666104",
    email: "remediumchangampally@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kandanakam, Edappal",
      addressLocality: "Malappuram",
      addressRegion: "Kerala",
      postalCode: "679582",
      addressCountry: "IN",
    },
    medicalSpecialty: [
      "Ayurvedic",
      "Oncology",
      "Psychiatry",
      "Rehabilitation",
      "HolisticHealth",
    ],
    inLanguage: locale === "ar" ? "ar" : "en",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
