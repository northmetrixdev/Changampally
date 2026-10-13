import Link from "next/link";
import Image from "next/image";
import { SITE_NAME, FOOTER_LINK_GROUPS, SOCIAL_LINKS, SITE_TAGLINE } from "@/lib/constants";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="border-t bg-ivory text-charcoal"
            style={{ borderTopColor: "rgba(51,24,28,0.12)" }}
            role="contentinfo"
            aria-label="Site footer"
        >
            <div className="max-w-[1440px] mx-auto px-6 py-10 md:py-16 flex flex-col md:flex-row gap-12 md:gap-24 justify-between">
                
                {/* Brand Column */}
                <div className="flex flex-col gap-4 max-w-sm">
                    <Link href="/" className="group w-fit block" aria-label={`${SITE_NAME} — home`}>
                        <Image
                            src="/assets/Changampally Remedium_logo.png"
                            alt="Changampally Medical Institute"
                            width={160}
                            height={48}
                            className="h-10 w-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                            priority
                        />
                    </Link>
                    <p className="font-light text-[11px] leading-relaxed text-taupe">
                        {SITE_TAGLINE}
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                        {SOCIAL_LINKS.map((social) => (
                            <a
                                key={social.platform}
                                href={social.href}
                                className="font-sans text-[10px] uppercase tracking-widest transition-colors duration-300 text-taupe hover:text-plum"
                                aria-label={social.ariaLabel}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {social.platform}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Link Columns */}
                <div className="grid grid-cols-2 gap-8 md:gap-16">
                    {FOOTER_LINK_GROUPS.slice(0, 2).map((group) => (
                        <div key={group.heading} className="flex flex-col gap-3">
                            <h3 className="font-medium text-[10px] tracking-[0.2em] uppercase text-plum">
                                {group.heading}
                            </h3>
                            <ul className="flex flex-col gap-2" role="list">
                                {group.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="font-light text-[11px] transition-colors duration-300 text-taupe hover:text-plum"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="px-6 py-4 border-t border-plum/10">
                <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-light text-taupe">
                    <p>&copy; {currentYear} {SITE_NAME}. All rights reserved.</p>
                    <nav className="flex gap-4" aria-label="Legal navigation">
                        <Link href="#" className="hover:text-plum">Privacy Policy</Link>
                        <Link href="#" className="hover:text-plum">Terms of Service</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
