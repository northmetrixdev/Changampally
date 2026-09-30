interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    level?: "h1" | "h2" | "h3";
    className?: string;
    id?: string;
    centered?: boolean;
}

export default function SectionHeading({
    title,
    subtitle,
    level: Tag = "h2",
    className = "",
    id,
    centered = true,
}: SectionHeadingProps) {
    return (
        <header className={`${centered ? "text-center" : ""} ${className}`}>
            <Tag
                id={id}
                className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[0.9] tracking-[0.05em]"
                style={{ fontFamily: "var(--font-catchye)", fontWeight: 300 }}
            >
                {title}
            </Tag>
            {subtitle && (
                <p
                    className="mt-4 font-sans font-light text-base md:text-lg max-w-2xl leading-relaxed text-taupe"
                    style={{ marginLeft: centered ? "auto" : undefined, marginRight: centered ? "auto" : undefined }}
                >
                    {subtitle}
                </p>
            )}
        </header>
    );
}
