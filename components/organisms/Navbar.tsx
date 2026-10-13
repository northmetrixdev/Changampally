"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "@/components/molecules/NavLink";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export default function Navbar() {
    const currentPathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const isCentrePage = currentPathname?.startsWith("/centres/");
        const handler = () => {
            const threshold = isCentrePage ? Math.max(300, window.innerHeight - 120) : 30;
            setScrolled(window.scrollY > threshold);
        };
        handler();
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, [currentPathname]);

    const isCentrePage = currentPathname?.startsWith("/centres/");
    const isLightPage = currentPathname === "/contact" || currentPathname?.startsWith("/blogs");
    const isNavDark = isCentrePage ? false : (scrolled || isLightPage);

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 bg-ivory md:bg-transparent ${isNavDark
                ? "md:glass-nav md:shadow-soft"
                : "md:border-b md:border-transparent"
                } border-b border-plum/10 md:border-b-0`}
            role="banner"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.1 }}
        >
            <nav
                className="flex items-center justify-between max-w-[1440px] mx-auto px-6 py-4"
                aria-label="Main site navigation"
            >
                {/* Logo wordmark */}
                <Link href="/" className="flex items-center gap-3 group" aria-label={`${SITE_NAME} — home`}>
                    {/* On mobile always dark logo since mobile navbar is brand off-white (ivory); on desktop switch based on isNavDark */}
                    <div className="relative w-20 h-12 flex items-center">
                        <Image
                            src="/assets/Changampally Remedium_logo.png"
                            alt={`${SITE_NAME} logo`}
                            width={80}
                            height={80}
                            className={`object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300 md:${isNavDark ? "block" : "hidden"}`}
                            priority
                        />
                        <Image
                            src="/assets/Changampally Remedium_logo-light1.png"
                            alt={`${SITE_NAME} logo`}
                            width={80}
                            height={80}
                            className={`object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300 hidden md:${isNavDark ? "hidden" : "block"}`}
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-10" role="list">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <NavLink
                                label={link.label}
                                href={link.href}
                                ariaLabel={link.ariaLabel}
                                currentPathname={currentPathname}
                                scrolled={isNavDark}
                            />
                        </li>
                    ))}
                </ul>

                {/* Right side: Desktop CTA + Mobile Hamburger */}
                <div className="flex items-center gap-4">
                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Link href="/contact" className={`text-xs tracking-[0.2em] uppercase font-sans font-light px-6 py-2.5 border transition-all duration-400 ${isNavDark
                            ? "border-charcoal/20 text-charcoal hover:bg-plum hover:border-plum hover:text-ivory"
                            : "border-ivory/50 text-ivory hover:bg-ivory hover:text-plum"
                            }`}>
                            Book Consultation
                        </Link>
                    </div>

                    {/* Mobile hamburger - dark bars since mobile navbar is off-white */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-menu"
                        type="button"
                        onClick={() => setMobileOpen((v) => !v)}
                    >
                        <span className={`block w-6 h-px transition-all duration-300 bg-charcoal/80 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                        <span className={`block w-6 h-px transition-all duration-300 bg-charcoal/80 ${mobileOpen ? "opacity-0" : ""}`} />
                        <span className={`block w-6 h-px transition-all duration-300 bg-charcoal/80 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                    </button>
                </div>
            </nav>

            {/* Mobile drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                        className="md:hidden overflow-hidden border-t border-plum/10 bg-ivory shadow-lg"
                        style={{ background: "rgba(255,252,248,0.97)", backdropFilter: "blur(20px)" }}
                    >
                        <ul className="flex flex-col py-5 px-6 gap-5" role="list">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href} onClick={() => setMobileOpen(false)}>
                                    <NavLink
                                        label={link.label}
                                        href={link.href}
                                        ariaLabel={link.ariaLabel}
                                        currentPathname={currentPathname}
                                        scrolled={true}
                                    />
                                </li>
                            ))}
                            <li className="pt-3 border-t border-plum/15">
                                <Link href="/contact" className="btn-ghost w-full text-center text-xs" onClick={() => setMobileOpen(false)}>
                                    Book Consultation
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
