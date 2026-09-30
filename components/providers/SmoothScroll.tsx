"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * SmoothScroll
 * ─────────────────────────────────────────────────────────────────────────────
 * Mounts Lenis on the client for ultra-smooth, physics-based scrolling.
 * Integrates with framer-motion via requestAnimationFrame loop.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.4,            // slightly longer = silky
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo ease-out
            smoothWheel: true,
            touchMultiplier: 1.5,
        });

        // Tie Lenis into the browser's rAF loop
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        const id = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(id);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
