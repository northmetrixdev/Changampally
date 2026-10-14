/**
 * @file lib/i18n/config.ts
 * Internationalization configuration for Changampally Healthcare.
 */

export type Locale = "en" | "ar";

export const DEFAULT_LOCALE: Locale = "en";
export const SUPPORTED_LOCALES: readonly Locale[] = ["en", "ar"] as const;

/**
 * ENABLE_RTL:
 * Phase 4 requirement: Set <html lang="ar" dir="rtl"> (and lang="en" dir="ltr" for English).
 * Expose this as a single config flag (ENABLE_RTL, default true) so it can be turned off.
 */
export const ENABLE_RTL = true;

/**
 * USE_WESTERN_DIGITS:
 * Phase 5 requirement: Dates, numbers, currency: use locale-aware formatting for ar,
 * with Western digits (0-9) as the default behind a single config flag.
 */
export const USE_WESTERN_DIGITS = true;

export const LOCALE_COOKIE_KEY = "changampally_locale";
export const LOCALE_STORAGE_KEY = "changampally_locale";
