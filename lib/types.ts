/**
 * @file lib/types.ts
 * Shared TypeScript interfaces for Changampally website data models.
 */

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export interface NavItem {
  label: string;
  href: string;
  ariaLabel?: string;
}

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

export interface FooterLinkGroup {
  heading: string;
  links: NavItem[];
}

export interface SocialLink {
  platform: string;
  href: string;
  ariaLabel: string;
  iconId: string;
}

// ---------------------------------------------------------------------------
// Legacy Timeline
// ---------------------------------------------------------------------------

export type TimelineEra = "Founding" | "Present";

export interface TimelineEvent {
  id: string;
  year: string;
  era: TimelineEra;
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
}

// ---------------------------------------------------------------------------
// Service Spectrum
// "Modern" removed — Changampally is an integrated institution.
// The three service pillars are: Traditional | Integrated | Mental Wellbeing
// ---------------------------------------------------------------------------

export type ServiceCategory = "Traditional" | "Integrated";

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  name: string;
  shortDescription: string;
  longDescription: string;
  iconId: string;
  highlights: string[];
}

// ---------------------------------------------------------------------------
// Centres of Excellence
// ---------------------------------------------------------------------------

export interface Centre {
  id: string;
  name: string;
  tagline: string;
  location: string;
  phone: string;
  description: string;
  specialisations: string[];
  anchor: string;
}

// ---------------------------------------------------------------------------
// Team
// ---------------------------------------------------------------------------

export interface TeamMember {
  id: string;
  name: string;
  credentials: string;
  role: string;
  bio: string;
}
