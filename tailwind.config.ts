import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            // ── Brand Kit Palette — Changampally ──────────────────────────────
            colors: {
                // Background scale
                ivory: "#EAECE4",        // Brand light bg (was #F9F6F0)
                sandstone: "#DDD9C9",    // Brand muted/secondary bg
                forest: {
                    DEFAULT: "#33181C",  // Brand primary dark (maroon-plum)
                    dark: "#1E0B0F",     // Ultra deep
                },

                // Text scale
                charcoal: "#33181C",     // Primary text — brand dark
                taupe: {
                    DEFAULT: "#6F5F4D",  // Brand mid-tone warm brown
                    light: "#A89E8E"     // Faintest muted text
                },
                cream: {
                    DEFAULT: "#EAECE4",  // Light text on dark sections
                    muted: "#DDD9C9",    // Muted text on dark
                },

                // Accents
                terracotta: {
                    DEFAULT: "#6F5F4D",  // Warm earth accent
                    light: "#8A7A6A",
                },
                sage: {
                    DEFAULT: "#A3B19B",  // Secondary calm accent
                    dark: "#7A8A71",
                },

                // Primary brand plum/bistre scale
                plum: {
                    deep: "#1E0B0F",     // Darkest
                    dark: "#33181C",     // Brand primary dark
                    DEFAULT: "#33181C",  // Primary brand color
                    light: "#6F5F4D",    // Mid warm tone
                    bright: "#8A7060",   // Warm highlight
                    pale: "#EAECE4",     // Palest tint
                },
                onyx: {
                    DEFAULT: "#DDD9C9",  // Mapped to sandstone
                    mid: "#EAECE4",      // Mapped to ivory
                    card: "#EAECE4",     // Mapped to ivory
                    border: "#DDD9C9",   // Border
                }
            },

            // ── Typography ──────────────────────────────────────────────────────
            fontFamily: {
                sans: ["'JuanaFont'", "var(--font-juana)", "Georgia", "serif"],
                serif: ["'JuanaFont'", "var(--font-juana)", "Georgia", "serif"],
                display: ["'JuanaFont'", "var(--font-juana)", "Georgia", "serif"],
                juana: ["'JuanaFont'", "var(--font-juana)", "Georgia", "serif"],
            },

            // ── Font weights ────────────────────────────────────────────────────
            fontWeight: {
                hair: "200",
                thin: "300",
                light: "400",
            },

            // ── Letter spacing ──────────────────────────────────────────────────
            letterSpacing: {
                "widest-xl": "0.15em",
                "widest-2xl": "0.25em",
            },

            // ── Backdrop blur ───────────────────────────────────────────────────
            backdropBlur: {
                xs: "2px",
                sm: "4px",
                md: "12px",
                lg: "20px",
            },

            // ── Shadows ─────────────────────────────────────────────────────────
            boxShadow: {
                "soft": "0 4px 40px 0 rgba(34,34,34,0.05)",
                "plum-sm": "0 1px 8px 0 rgba(34,34,34,0.05)", // legacy mapping
                "plum-md": "0 4px 24px 0 rgba(34,34,34,0.08)", // legacy mapping
                "plum-lg": "0 8px 40px 0 rgba(34,34,34,0.12)", // legacy mapping
            },

            // ── Screens ─────────────────────────────────────────────────────────
            screens: {
                xs: "390px",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1440px",
            },

            // ── Transitions ─────────────────────────────────────────────────────
            transitionTimingFunction: {
                apple: "cubic-bezier(0.4, 0, 0.2, 1)",
            },
            transitionDuration: {
                "250": "250ms",
                "400": "400ms",
                "1000": "1000ms", // Added slower transition speeds for cinematic feel
                "1500": "1500ms",
                "2000": "2000ms",
            },
        },
    },
    plugins: [],
};

export default config;
