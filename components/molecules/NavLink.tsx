"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface NavLinkProps {
    label: string;
    href: string;
    ariaLabel?: string;
    currentPathname: string;
    scrolled?: boolean;
}

export default function NavLink({ label, href, ariaLabel, currentPathname, scrolled = false }: NavLinkProps) {
    const { locale } = useLanguage();
    const isArabic = locale === "ar";
    const isActive = currentPathname === href || (href === "/services" && currentPathname?.startsWith("/centres/"));

    return (
        <Link
            href={href}
            className={`relative font-sans transition-all duration-500 pb-0.5 whitespace-nowrap
                  ${isArabic ? "text-[18px] md:text-[17.5px] lg:text-[18.5px] font-medium tracking-normal leading-normal" : "text-sm font-light tracking-wider"}
                  after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px
                  after:transition-transform after:duration-300 after:origin-left rtl:after:origin-right
                  ${scrolled
                    ? isActive
                        ? "text-plum after:bg-plum after:scale-x-100"
                        : "text-charcoal/60 hover:text-plum after:bg-plum after:scale-x-0 hover:after:scale-x-100"
                    : isActive
                        ? "text-ivory after:bg-ivory/60 after:scale-x-100"
                        : "text-ivory/70 hover:text-ivory after:bg-ivory/50 after:scale-x-0 hover:after:scale-x-100"
                }`}
            aria-label={ariaLabel ?? label}
            aria-current={isActive ? "page" : undefined}
        >
            {label}
        </Link>
    );
}
