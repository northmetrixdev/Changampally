"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const JOURNEY_STEPS = [
    {
        title: "Initial Consultation",
        description: "Your journey begins with an in-depth diagnosis combining Ayurvedic Nadi Pariksha and modern medical assessments to uncover the root cause.",
    },
    {
        title: "Personalised Therapy",
        description: "Experience tailored treatments using classical formulations, bio-purification techniques, and state-of-the-art integrated care.",
    },
    {
        title: "Mind and Body Rest",
        description: "Healing requires profound rest. Our serene environments, coupled with Yoga and meditation, foster deep emotional and physical recovery.",
    },
    {
        title: "Dietary Mastery",
        description: "Nourish yourself with customised Ayurvedic meals designed to support your specific metabolic needs and treatment protocol.",
    }
];

export default function CentreJourney() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

    return (
        <section
            ref={containerRef}
            className="relative bg-ivory py-32 md:py-48 px-6 text-plum"
        >
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <div className="text-center mb-24">
                    <p className="eyebrow text-taupe mb-4">Patient Experience</p>
                    <h2 className="font-serif text-4xl md:text-6xl text-plum">
                        A Day at the Centre
                    </h2>
                </div>

                <div className="relative w-full flex flex-col gap-32">
                    {/* Vertical Progress Line Background */}
                    <div className="absolute left-4 md:left-1/2 md:-ml-px top-0 bottom-0 w-0.5 bg-plum/10" />

                    {/* Active Progress Line */}
                    <motion.div
                        className="absolute left-4 md:left-1/2 md:-ml-px top-0 w-0.5 bg-plum origin-top"
                        style={{ scaleY: smoothProgress }}
                    />

                    {JOURNEY_STEPS.map((step, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <div key={idx} className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>

                                {/* Step Dot - Fixed positioned on the line */}
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 bg-ivory border-4 border-plum w-6 h-6 rounded-full z-10" />

                                {/* Content */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8 }}
                                    className={`pl-12 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}
                                >
                                    <h3 className="font-serif text-2xl md:text-3xl text-plum mb-4">{step.title}</h3>
                                    <p className="font-sans font-light text-taupe text-lg leading-relaxed">
                                        {step.description}
                                    </p>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
