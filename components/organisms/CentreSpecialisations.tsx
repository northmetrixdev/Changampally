"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CentreSpecialisationsProps {
    specialisations: string[];
}

export default function CentreSpecialisations({ specialisations }: CentreSpecialisationsProps) {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    return (
        <section className="py-32 px-6 bg-ivory text-plum border-t border-plum/10">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center md:text-left">
                    <p className="eyebrow text-plum/60 mb-4">Focus Areas</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-plum">
                        Core Specialisations
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {specialisations.map((spec, idx) => (
                        <SpecialisationCard
                            key={spec}
                            title={spec}
                            isHovered={hoveredIdx === idx}
                            onHover={() => setHoveredIdx(idx)}
                            onLeave={() => setHoveredIdx(null)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function SpecialisationCard({ title, isHovered, onHover, onLeave }: { title: string, isHovered: boolean, onHover: () => void, onLeave: () => void }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setMousePosition({ x, y });
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseEnter={onHover}
            onMouseLeave={() => {
                onLeave();
                setMousePosition({ x: 0, y: 0 });
            }}
            onMouseMove={handleMouseMove}
            animate={{
                rotateX: isHovered ? (mousePosition.y / 20) * -1 : 0,
                rotateY: isHovered ? (mousePosition.x / 20) : 0,
                scale: isHovered ? 1.05 : 1,
                zIndex: isHovered ? 10 : 1,
                boxShadow: isHovered ? "0 20px 40px rgba(164,19,60,0.15)" : "0 4px 6px rgba(0,0,0,0.02)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative bg-white border border-plum/10 rounded-2xl p-8 flex flex-col justify-center items-start overflow-hidden cursor-crosshair h-48"
        >
            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-plum text-2xl">✦</span>
            </div>

            <h3 className="font-sans font-light text-xl leading-snug text-plum z-10">
                {title}
            </h3>

            {/* Magnetic aura effect */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: `radial-gradient(circle at ${mousePosition.x + cardRef.current?.offsetWidth! / 2}px ${mousePosition.y + cardRef.current?.offsetHeight! / 2}px, rgba(164,19,60,0.05) 0%, transparent 80%)`
                        }}
                    />
                )}
            </AnimatePresence>
        </motion.div>
    );
}
