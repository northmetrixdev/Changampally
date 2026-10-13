"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Centre } from "@/lib/types";

interface CentreDetailClientProps {
    centre: Centre;
}

const MEDIA_MAP: Record<string, { video?: string; photos: string[] }> = {
    kaivalya: {
        video: "/videos/properties/kaivalya.mp4",
        photos: [
            "/images/properties/PERINGODE KAIVALYA/unnamed.jpg",
            "/images/properties/PERINGODE KAIVALYA/unnamed-2.jpg",
            "/images/properties/PERINGODE KAIVALYA/unnamed-3.jpg",
            "/images/properties/PERINGODE KAIVALYA/unnamed-4.jpg",
        ],
    },
    remedium: {
        video: "/videos/properties/remedium_UUJs3ZgW.mp4",
        photos: [
            "/images/properties/REMEDIUM/D7F08459.JPG",
            "/images/properties/REMEDIUM/D7F08454.JPG",
            "/images/properties/REMEDIUM/D7F08457.JPG",
        ],
    },
    vaidyabhavan: {
        photos: [
            "/images/properties/THIRUNNAVYA/unnamed.jpg",
            "/images/properties/THIRUNNAVYA/unnamed-2.jpg",
            "/images/properties/THIRUNNAVYA/unnamed-3.jpg",
            "/images/properties/THIRUNNAVYA/unnamed-4.jpg",
            "/images/properties/THIRUNNAVYA/unnamed-5.jpg",
            "/images/properties/THIRUNNAVYA/unnamed-6.jpg",
        ],
    },
    wellness: {
        photos: [],
    },
    sanjeevani: {
        photos: [],
    },
};

export default function CentreDetailClient({ centre }: CentreDetailClientProps) {
    const media = MEDIA_MAP[centre.anchor] || { photos: [] };
    const hasMedia = Boolean(media.video || media.photos.length > 0);
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.defaultMuted = true;
            videoRef.current.muted = true;
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => setIsPlaying(true))
                    .catch(() => setIsPlaying(false));
            }
        }
    }, [media.video]);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const toggleMute = () => {
        if (!videoRef.current) return;
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    // Keyboard navigation for lightbox
    useEffect(() => {
        if (selectedPhotoIndex === null) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedPhotoIndex(null);
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "ArrowRight") handleNext();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedPhotoIndex, media.photos.length]);

    const handlePrev = () => {
        if (selectedPhotoIndex === null) return;
        setSelectedPhotoIndex((prev) => (prev === 0 ? media.photos.length - 1 : (prev ?? 0) - 1));
    };

    const handleNext = () => {
        if (selectedPhotoIndex === null) return;
        setSelectedPhotoIndex((prev) => (prev === media.photos.length - 1 ? 0 : (prev ?? 0) + 1));
    };

    return (
        <main className="min-h-screen bg-ivory font-sans pt-0">
            {/* ── First Viewport Screen: Hero Video landscape on mobile below navbar, full screen on desktop, or Elegant Text Hero for photo-less centres ───── */}
            {hasMedia ? (
                <div className="relative w-full pt-[72px] md:pt-0 md:h-screen md:min-h-[600px] flex flex-col justify-between bg-black">
                    {/* Upper Video / Photo Container */}
                    {media.video ? (
                        <section
                            className="relative w-full aspect-video md:aspect-auto md:flex-1 overflow-hidden bg-black flex items-center justify-center"
                            aria-label={`${centre.name} Video Tour`}
                        >
                            <video
                                ref={videoRef}
                                src={media.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                webkit-playsinline="true"
                                preload="auto"
                                className="w-full h-full object-cover opacity-100"
                            >
                                <source src={media.video} type="video/mp4" />
                            </video>

                            {/* Interactive Play/Pause & Sound Controls overlay — minimal seamless buttons */}
                            <div className="absolute bottom-3 right-3 md:bottom-6 md:right-8 flex items-center gap-2 z-20">
                                <button
                                    onClick={togglePlay}
                                    className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-black/50 hover:bg-black/75 text-ivory rounded-full shadow-lg backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-105"
                                    aria-label={isPlaying ? "Pause video" : "Play video"}
                                    title={isPlaying ? "Pause" : "Play"}
                                >
                                    {isPlaying ? (
                                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                            <rect x="6" y="4" width="4" height="16" rx="1" />
                                            <rect x="14" y="4" width="4" height="16" rx="1" />
                                        </svg>
                                    ) : (
                                        <svg className="w-3.5 h-3.5 fill-current translate-x-0.5" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    )}
                                </button>
                                <button
                                    onClick={toggleMute}
                                    className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-black/50 hover:bg-black/75 text-ivory rounded-full shadow-lg backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-105"
                                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                                    title={isMuted ? "Unmute" : "Mute"}
                                >
                                    {isMuted ? (
                                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </section>
                    ) : media.photos.length > 0 ? (
                        <section className="relative w-full aspect-video md:aspect-auto md:flex-1 overflow-hidden bg-sandstone">
                            <Image
                                src={media.photos[0]}
                                alt={centre.name}
                                fill
                                className="object-cover opacity-100"
                                priority
                            />
                        </section>
                    ) : null}

                    {/* Centre Header Details bar */}
                    <section className="relative z-10 w-full bg-sandstone border-t border-plum/15 py-4 sm:py-5 px-4 sm:px-6 shadow-md">
                        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-1.5">
                            <span className="inline-block text-[9px] tracking-[0.25em] uppercase font-sans font-medium text-plum bg-plum/8 px-3 py-0.5 rounded-full border border-plum/15">
                                {centre.tagline}
                            </span>
                            <h1
                                className="font-serif font-light text-2xl sm:text-3xl md:text-4xl tracking-tight text-plum"
                                style={{ fontFamily: "var(--font-juana)" }}
                            >
                                {centre.name}
                            </h1>
                            <div className="flex items-center justify-center gap-3">
                                <span className="font-sans font-light text-xs sm:text-sm text-taupe">
                                    {centre.location}
                                </span>
                                {centre.mapUrl && (
                                    <a
                                        href={centre.mapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 bg-plum text-ivory rounded-full hover:bg-plum-dark transition-all duration-300 shadow-md hover:scale-110 shrink-0"
                                        aria-label={`Open Google Maps location for ${centre.name}`}
                                        title={`Open Google Maps for ${centre.name}`}
                                    >
                                        <svg className="w-4 h-4 fill-current text-ivory" viewBox="0 0 24 24">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            ) : (
                /* Hero Section for Munnar & Sanjeevani (no photos/video) — elegant editorial hero */
                <div className="relative w-full pt-28 sm:pt-36 md:pt-40 pb-16 md:pb-24 px-6 md:px-12 bg-plum text-ivory overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[120px] rounded-full pointer-events-none" />
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
                        <span className="inline-block text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-ivory/60 bg-ivory/10 px-3.5 py-1 rounded-full border border-ivory/15 mb-6">
                            {centre.tagline}
                        </span>
                        <h1
                            className="font-serif font-light text-3xl sm:text-5xl md:text-6xl tracking-tight text-ivory mb-6 leading-tight"
                            style={{ fontFamily: "var(--font-juana)" }}
                        >
                            {centre.name}
                        </h1>
                        <p className="font-sans font-light text-base sm:text-lg md:text-xl text-ivory/80 leading-relaxed max-w-2xl mb-8">
                            {centre.description}
                        </p>

                        {/* Quick hero highlights */}
                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-6 border-t border-ivory/15 w-full max-w-2xl text-xs sm:text-sm font-sans font-light text-ivory/90">
                            <div className="flex items-center gap-2">
                                <span className="text-ivory/40">Location:</span>
                                <strong className="font-medium text-ivory">{centre.location}</strong>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-ivory/40">Direct Helpline:</span>
                                <a href={`tel:${centre.phone.replace(/\s+/g, "")}`} className="font-medium text-ivory underline hover:text-ivory/80">
                                    {centre.phone}
                                </a>
                            </div>
                            {centre.mapUrl && (
                                <a
                                    href={centre.mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-ivory/15 hover:bg-ivory/25 text-ivory rounded-full text-xs font-sans transition-all border border-ivory/20"
                                >
                                    <span>Google Maps</span>
                                    <span>↗</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* ── Overview & Contact Cards ───────────────────────────────────── */}
            <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
                    {/* Main Description */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <span className="font-sans font-medium text-[9px] tracking-[0.28em] uppercase text-plum">
                            Centre Overview
                        </span>
                        <h2
                            className="font-serif font-light text-3xl md:text-4xl text-charcoal leading-tight"
                            style={{ fontFamily: "var(--font-juana)" }}
                        >
                            Scientific Healing and Authentic Ayurveda
                        </h2>
                        <div className="w-12 h-px bg-plum/20" />
                        <p className="font-sans font-light text-base md:text-lg text-taupe leading-relaxed">
                            {centre.description}
                        </p>
                    </div>

                    {/* Quick Info Card */}
                    <div className="flex flex-col gap-5 bg-sandstone p-8 border border-plum/10 rounded-2xl h-fit">
                        <h3 className="font-sans font-medium text-[10px] tracking-[0.2em] uppercase text-plum border-b border-plum/15 pb-3">
                            Facility Details
                        </h3>
                        <div className="flex flex-col gap-3 font-sans font-light text-sm text-charcoal">
                            <div>
                                <span className="block text-[10px] text-taupe uppercase tracking-wider">Location</span>
                                <strong className="font-medium text-charcoal">{centre.location}</strong>
                            </div>
                            <div>
                                <span className="block text-[10px] text-taupe uppercase tracking-wider">Direct Helpline</span>
                                <a href={`tel:${centre.phone.replace(/\s+/g, "")}`} className="font-medium text-plum hover:text-plum-dark transition-colors">
                                    {centre.phone}
                                </a>
                            </div>
                        </div>

                        {centre.mapUrl && (
                            <a
                                href={centre.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-plum text-ivory text-xs font-sans font-medium uppercase tracking-widest rounded hover:bg-plum-dark transition-all duration-300 shadow-sm"
                                aria-label="Open Google Maps"
                            >
                                <svg className="w-4 h-4 fill-current text-ivory" viewBox="0 0 24 24">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                            </a>
                        )}

                        <Link
                            href="/contact"
                            className="w-full inline-flex items-center justify-center px-4 py-3 border border-plum/30 text-plum font-sans font-medium text-xs tracking-widest uppercase hover:bg-plum hover:text-ivory transition-all duration-300 rounded"
                        >
                            Book Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Photo Gallery (Selectable & Swipeable Lightbox) ───────────── */}
            {media.photos.length > 0 && (
                <section className="py-16 md:py-24 px-6 md:px-12 bg-sandstone border-t border-plum/10" aria-label="Photo Gallery">
                    <div className="max-w-[1440px] mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                            <div>
                                <span className="font-sans font-medium text-[9px] tracking-[0.28em] uppercase text-plum block mb-2">
                                    Property Gallery
                                </span>
                                <h2
                                    className="font-serif font-light text-3xl md:text-4xl text-charcoal"
                                    style={{ fontFamily: "var(--font-juana)" }}
                                >
                                    Explore {centre.name}
                                </h2>
                            </div>
                            <p className="hidden md:block font-sans font-light text-xs text-taupe">
                                Click any photo to view full screen &amp; swipe through the gallery
                            </p>
                        </div>

                        {/* Photo Grid: 2-col grid on mobile for compact gallery feel, 3-col on desktop */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                            {media.photos.map((photo, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.02 }}
                                    onClick={() => setSelectedPhotoIndex(idx)}
                                    className="relative h-44 sm:h-64 md:h-72 rounded-xl overflow-hidden border border-plum/15 shadow-soft cursor-pointer group bg-ivory"
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`View photo ${idx + 1} of ${centre.name}`}
                                    onKeyDown={(e) => { if (e.key === 'Enter') setSelectedPhotoIndex(idx); }}
                                >
                                    <Image
                                        src={photo}
                                        alt={`${centre.name} property photo ${idx + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-plum text-ivory text-[10px] sm:text-xs font-sans font-medium tracking-wider uppercase rounded-full shadow-lg">
                                            Expand Photo ↗
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── Lightbox Modal for Swipeable Photo Gallery ──────────────────── */}
            <AnimatePresence>
                {selectedPhotoIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] bg-charcoal/95 backdrop-blur-md flex flex-col items-center justify-between p-4 md:p-8 select-none"
                        onClick={() => setSelectedPhotoIndex(null)}
                    >
                        {/* Top bar */}
                        <div className="w-full max-w-6xl flex items-center justify-between z-10 text-ivory" onClick={(e) => e.stopPropagation()}>
                            <span className="font-sans font-light text-xs tracking-widest uppercase text-ivory/70">
                                {centre.name} — Photo {selectedPhotoIndex + 1} of {media.photos.length}
                            </span>
                            <button
                                onClick={() => setSelectedPhotoIndex(null)}
                                className="w-10 h-10 rounded-full bg-ivory/10 hover:bg-ivory/20 flex items-center justify-center text-ivory text-xl transition-all"
                                aria-label="Close photo preview"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Image display with touch swipe listeners */}
                        <div
                            className="relative w-full max-w-5xl h-[70vh] my-auto flex items-center justify-center touch-pan-y"
                            onClick={(e) => e.stopPropagation()}
                            onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
                            onTouchEnd={(e) => {
                                if (touchStartX === null) return;
                                const touchEndX = e.changedTouches[0].clientX;
                                const diff = touchStartX - touchEndX;
                                if (diff > 50) handleNext();
                                else if (diff < -50) handlePrev();
                                setTouchStartX(null);
                            }}
                        >
                            <Image
                                src={media.photos[selectedPhotoIndex]}
                                alt={`${centre.name} photo ${selectedPhotoIndex + 1}`}
                                fill
                                className="object-contain"
                                priority
                            />

                            {/* Prev button */}
                            <button
                                onClick={handlePrev}
                                className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-ivory/20 hover:bg-ivory text-white hover:text-plum flex items-center justify-center text-2xl transition-all shadow-lg"
                                aria-label="Previous photo"
                            >
                                ‹
                            </button>

                            {/* Next button */}
                            <button
                                onClick={handleNext}
                                className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-ivory/20 hover:bg-ivory text-white hover:text-plum flex items-center justify-center text-2xl transition-all shadow-lg"
                                aria-label="Next photo"
                            >
                                ›
                            </button>
                        </div>

                        {/* Thumbnails at bottom */}
                        <div className="flex gap-2 max-w-xl overflow-x-auto py-2 z-10" onClick={(e) => e.stopPropagation()}>
                            {media.photos.map((p, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedPhotoIndex(idx)}
                                    className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${idx === selectedPhotoIndex ? "border-ivory scale-110" : "border-transparent opacity-50"}`}
                                >
                                    <Image src={p} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Specialisations ────────────────────────────────────────────── */}
            <section className="bg-ivory py-16 md:py-24 px-6 md:px-12 border-t border-plum/10">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2
                        className="font-serif font-light text-3xl md:text-4xl text-charcoal mb-3"
                        style={{ fontFamily: "var(--font-juana)" }}
                    >
                        Specialised Clinical Focus
                    </h2>
                    <p className="font-sans font-light text-sm text-taupe max-w-xl mx-auto">
                        Specialities and clinical units available at {centre.name}.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
                        {centre.specialisations.map((spec, idx) => (
                            <li key={idx} className="flex items-start gap-3 p-5 bg-sandstone border border-plum/10 rounded-xl">
                                <span className="w-2 h-2 rounded-full bg-plum mt-1.5 shrink-0" />
                                <span className="font-sans font-light text-sm text-charcoal">{spec}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
}
