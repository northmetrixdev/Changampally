"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

/*
 * BlendSlider
 * ──────────────────────────────────────────────────────────────────────────
 * Automatically slides from Traditional (0) → Integrated (100) as the user
 * scrolls the section into view. Manual drag still works and overrides the
 * auto-scroll.
 *
 * Layers use plum tones — no green.
 */

interface BlendSliderProps {
    /** Optional ref for the containing section, used for scroll-driven animation */
    containerRef?: React.RefObject<HTMLElement | null>;
    /** Callback that fires with current blend position (0 = fully Traditional, 100 = fully Integrated) */
    onPositionChange?: (position: number) => void;
    /** Initial position 0–100, defaults to 0 so that scroll drives it forward */
    initialPosition?: number;
}

const TRACK_LABELS = [
    { label: "Traditional Ayurveda", side: "left" },
    { label: "Integrated Care", side: "right" },
] as const;

export default function BlendSlider({ containerRef, onPositionChange, initialPosition = 0 }: BlendSliderProps) {
    const trackRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState<number>(initialPosition); // 0 – 100
    const [isDragging, setIsDragging] = useState(false);
    // Track whether user has manually dragged (disables auto-scroll override)
    const hasManuallyDragged = useRef(false);

    // ── Scroll-driven auto-slide ─────────────────────────────────────────
    const { scrollYProgress } = useScroll({
        target: containerRef ?? undefined,
        offset: ["start 80%", "end 20%"],
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Only auto-drive if user hasn't grabbed the handle manually
        if (hasManuallyDragged.current) return;
        const scrollDriven = Math.min(100, Math.max(0, latest * 100));
        setPosition(scrollDriven);
        onPositionChange?.(scrollDriven);
    });

    const updatePosition = useCallback(
        (clientX: number) => {
            const track = trackRef.current;
            if (!track) return;
            const rect = track.getBoundingClientRect();
            const raw = ((clientX - rect.left) / rect.width) * 100;
            const clamped = Math.min(100, Math.max(0, raw));
            setPosition(clamped);
            onPositionChange?.(clamped);
        },
        [onPositionChange],
    );

    // ── Pointer events (mouse + touch) ───────────────────────────────────
    const onPointerDown = useCallback(
        (e: React.PointerEvent) => {
            e.preventDefault();
            hasManuallyDragged.current = true;
            setIsDragging(true);
            updatePosition(e.clientX);
            (e.target as Element).setPointerCapture(e.pointerId);
        },
        [updatePosition],
    );

    const onPointerMove = useCallback(
        (e: React.PointerEvent) => {
            if (!isDragging) return;
            updatePosition(e.clientX);
        },
        [isDragging, updatePosition],
    );

    const onPointerUp = useCallback(() => setIsDragging(false), []);

    return (
        <div className="w-full select-none" aria-label="Blend slider — Traditional vs Integrated">

            {/* ── Visual blend track ──────────────────────────────────────── */}
            <div
                ref={trackRef}
                className="relative h-28 md:h-36 overflow-hidden cursor-ew-resize"
                style={{ touchAction: "none" }}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
                role="slider"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(position)}
                aria-label="Drag to blend between Traditional Ayurveda and Integrated Care"
                tabIndex={0}
                onKeyDown={(e) => {
                    hasManuallyDragged.current = true;
                    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
                    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
                    onPositionChange?.(position);
                }}
            >
                {/* Left layer — Traditional (Sandstone/Ivory) */}
                <div
                    className="absolute inset-0 flex items-center justify-center bg-sandstone"
                    style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
                >
                    <div className="text-center px-6">
                        <p className="font-serif font-light text-2xl md:text-3xl text-charcoal tracking-wide">Traditional</p>
                        <p className="font-sans font-medium text-[10px] tracking-[0.3em] uppercase mt-2 text-taupe">Ayurveda</p>
                    </div>
                </div>

                {/* Right layer — Integrated (Plum on ivory) */}
                <div
                    className="absolute inset-0 flex items-center justify-center bg-plum"
                    style={{ clipPath: `inset(0 0 0 ${position}%)` }}
                >
                    <div className="text-center px-6">
                        <p className="font-serif font-light text-2xl md:text-3xl text-ivory tracking-wide">Integrated</p>
                        <p className="font-sans font-medium text-[10px] tracking-[0.3em] uppercase mt-2 text-ivory/60">Modern + Ayurveda</p>
                    </div>
                </div>

                {/* Centre reveal — fades in near 50% */}
                <div
                    className="absolute inset-0 pointer-events-none flex items-center justify-center"
                    style={{
                        opacity: Math.abs(position - 50) < 25 ? ((25 - Math.abs(position - 50)) / 25) * 0.9 : 0,
                        transition: "opacity 0.15s",
                    }}
                >
                    <div className="text-center">
                        <div
                            className="w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-2 bg-ivory/90 border border-plum/20 shadow-soft"
                            aria-hidden="true"
                        >
                            <span className="font-sans font-light text-xl text-plum">∞</span>
                        </div>
                        <p className="font-sans font-medium text-[10px] uppercase text-charcoal tracking-[0.3em]">Integration</p>
                    </div>
                </div>

                {/* Draggable handle */}
                <div
                    className="absolute top-0 bottom-0 z-20 flex items-center justify-center"
                    style={{ left: `${position}%`, transform: "translateX(-50%)" }}
                >
                    {/* Vertical divider line */}
                    <div className="absolute top-0 bottom-0 w-px bg-ivory/40" aria-hidden="true" />
                    {/* Handle knob */}
                    <motion.div
                        className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing bg-ivory text-plum shadow-soft border border-plum/20"
                        animate={{ scale: isDragging ? 1.1 : 1 }}
                        transition={{ duration: 0.15 }}
                        aria-hidden="true"
                    >
                        <span className="font-sans font-light text-[10px] tracking-tight select-none">◀▶</span>
                    </motion.div>
                </div>
            </div>

            {/* ── Label bar ────────────────────────────────────────────────── */}
            <div className="flex justify-between items-center mt-4 px-1">
                {TRACK_LABELS.map(({ label }) => (
                    <span key={label} className="font-sans font-medium text-[10px] tracking-[0.3em] uppercase text-taupe">
                        {label}
                    </span>
                ))}
            </div>

            {/* ── Position indicator ───────────────────────────────────────── */}
            <div className="mt-4 flex justify-center">
                <span className="font-sans font-medium text-[9px] tracking-[0.3em] uppercase px-4 py-2 bg-sandstone text-charcoal border border-plum/10">
                    {position < 30
                        ? "Rooted in Tradition"
                        : position > 70
                            ? "Modern Integration"
                            : "The Blend — Where We Live"}
                </span>
            </div>
        </div>
    );
}
