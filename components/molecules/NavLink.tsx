"use client";

import Link from "next/link";

interface NavLinkProps {
    label: string;
    href: string;
    ariaLabel?: string;
    currentPathname: string;
    scrolled?: boolean;
}

export default function NavLink({ label, href, ariaLabel, currentPathname, scrolled = false }: NavLinkProps) {
    const isActive = currentPathname === href || (href === "/services" && currentPathname?.startsWith("/centres/"));

    return (
        <Link
            href={href}
            className={`relative font-sans font-light text-sm tracking-wider transition-all duration-500 pb-0.5
                  after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px
                  after:transition-transform after:duration-300 after:origin-left
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
