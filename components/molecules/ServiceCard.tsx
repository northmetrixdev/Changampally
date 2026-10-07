import type { ServiceItem } from "@/lib/types";

// Light, minimal badge styles mapped to Earthy palette
const BADGE_STYLES: Record<string, { bg: string; color: string; border: string }> = {
    traditional: { bg: "rgba(194, 122, 101, 0.10)", color: "#C27A65", border: "rgba(194, 122, 101, 0.20)" }, // Terracotta
    modern: { bg: "rgba(34, 34, 34, 0.04)", color: "#8C857B", border: "rgba(34, 34, 34, 0.08)" },           // Taupe
    integrated: { bg: "rgba(163, 177, 155, 0.20)", color: "#7A8A71", border: "rgba(163, 177, 155, 0.35)" }, // Sage
};

export default function ServiceCard({ service }: { service: ServiceItem }) {
    const key = service.category.toLowerCase();
    const badge = BADGE_STYLES[key] ?? BADGE_STYLES.integrated;

    return (
        <article
            className="group relative flex flex-col p-8 bg-ivory h-full transition-all duration-700 hover:bg-ivory/50"
            aria-label={`${service.category}: ${service.name}`}
        >
            {/* Minimalist framing rather than a box border */}
            <div className="absolute inset-0 border border-charcoal/5 transition-colors duration-700 group-hover:border-sage/40 rounded-2xl pointer-events-none" aria-hidden="true" />

            <header className="mb-6 flex flex-col items-start gap-4">
                {/* Icon circle — subtle */}
                <div
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-700 group-hover:-translate-y-1 bg-sandstone border border-plum/10 text-plum"
                    aria-hidden="true"
                >
                    <div className="w-2 h-2 rounded-full bg-plum" />
                </div>

                {/* Badge */}
                <span
                    className="inline-block text-[9px] font-sans font-medium tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm"
                    style={{ background: badge.bg, color: badge.color, border: `1px solid ${badge.border}` }}
                >
                    {service.category}
                </span>
            </header>

            {/* Content */}
            <h3 className="font-serif font-light text-xl text-charcoal tracking-tight leading-snug mb-3 pr-4 group-hover:text-plum transition-colors duration-700" style={{ fontFamily: "var(--font-juana)" }}>
                {service.name}
            </h3>

            <p className="font-sans font-light text-sm leading-relaxed mb-6 text-taupe flex-grow">
                {service.shortDescription}
            </p>

            {/* Highlights */}
            {service.highlights.length > 0 && (
                <ul className="flex flex-col gap-2 mt-auto pt-4 border-t border-charcoal/[0.03]" aria-label={`Highlights for ${service.name}`}>
                    {service.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-xs font-sans font-light text-taupe">
                            <span className="w-1.5 h-1.5 rounded-full bg-plum/40 shrink-0" aria-hidden="true" />
                            <span className="flex-1 leading-snug">{h}</span>
                        </li>
                    ))}
                </ul>
            )}
        </article>
    );
}

