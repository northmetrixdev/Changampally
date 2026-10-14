"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import {
  type Locale,
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  ENABLE_RTL,
  LOCALE_COOKIE_KEY,
  LOCALE_STORAGE_KEY,
} from "./config";
import { en, type Translations } from "./translations/en";
import { ar } from "./translations/ar";

const translationsMap: Record<Locale, Translations> = { en, ar };

export type TextDirection = "ltr" | "rtl";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (path: string, params?: Record<string, string | number>) => string;
  dir: TextDirection;
  isRtl: boolean;
  dictionary: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getNestedValue(obj: any, path: string): string {
  const parts = path.split(".");
  let current = obj;
  for (const part of parts) {
    if (current && typeof current === "object" && part in current) {
      current = current[part];
    } else {
      return path; // Fallback to path if missing
    }
  }
  return typeof current === "string" ? current : path;
}

function interpolate(text: string, params?: Record<string, string | number>): string {
  if (!params) return text;
  return text.replace(/\{(\w+)\}/g, (_, key) => {
    return params[key] !== undefined ? String(params[key]) : `{${key}}`;
  });
}

function getStoredLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;

  try {
    // 1. Check localStorage
    const saved = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
    if (saved && SUPPORTED_LOCALES.includes(saved)) {
      return saved;
    }

    // 2. Check Cookie
    const match = document.cookie.match(new RegExp(`(?:^|; )${LOCALE_COOKIE_KEY}=([^;]*)`));
    if (match) {
      const cookieLocale = decodeURIComponent(match[1]) as Locale;
      if (SUPPORTED_LOCALES.includes(cookieLocale)) {
        return cookieLocale;
      }
    }
  } catch {
    // Fall back to default
  }

  return DEFAULT_LOCALE;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [mounted, setMounted] = useState(false);

  // Initialize from storage on mount
  useEffect(() => {
    const initial = getStoredLocale();
    setLocaleState(initial);
    setMounted(true);
  }, []);

  // Update HTML attributes and persist whenever locale changes
  useEffect(() => {
    if (typeof window === "undefined") return;

    const currentDir: TextDirection = ENABLE_RTL && locale === "ar" ? "rtl" : "ltr";

    document.documentElement.lang = locale;
    document.documentElement.dir = currentDir;

    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, locale);
      // 1 year persistence cookie
      const maxAge = 365 * 24 * 60 * 60;
      document.cookie = `${LOCALE_COOKIE_KEY}=${locale}; path=/; max-age=${maxAge}; SameSite=Lax`;
    } catch {
      // Storage unavailable in private browsing modes
    }
  }, [locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    if (SUPPORTED_LOCALES.includes(newLocale)) {
      setLocaleState(newLocale);
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  const dict = useMemo(() => translationsMap[locale] || en, [locale]);

  const t = useCallback(
    (path: string, params?: Record<string, string | number>): string => {
      const raw = getNestedValue(dict, path);
      return interpolate(raw, params);
    },
    [dict]
  );

  const dir: TextDirection = ENABLE_RTL && locale === "ar" ? "rtl" : "ltr";
  const isRtl = dir === "rtl";

  const contextValue = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      t,
      dir,
      isRtl,
      dictionary: dict,
    }),
    [locale, setLocale, toggleLocale, t, dir, isRtl, dict]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
