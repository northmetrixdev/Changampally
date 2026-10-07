"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const DEPARTMENTS = [
    { name: "Oncology and Tumor Disorders", centre: "Remedium" },
    { name: "Mental Health and Behavioral Disorders", centre: "Remedium" },
    { name: "Neurological and Neuro Psychiatric Disorders", centre: "Remedium" },
    { name: "Autoimmune and Inflammatory Disorders", centre: "Remedium" },
    { name: "Reproductive and Fertility Care", centre: "Remedium" },
    { name: "Dermatology, Aesthetic and Regenerative Care", centre: "Remedium" },
];

export default function SpecialisationsInteractive() {
    return (
        <section
            className="py-20 md:py-32 px-4 sm:px-6 bg-plum relative"
            aria-labelledby="depts-preview-heading"
        >
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 relative">

                {/* ── Left Column: Sticky Header ── */}
                <div className="lg:w-1/3 relative">
                    <div className="sticky top-24 md:top-32">
                        <p className="eyebrow mb-4 md:mb-6 text-ivory/50">Specialisations</p>
                        <h2 id="depts-preview-heading" className="font-serif font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ivory leading-[1.2] md:leading-[1.1] mb-6" style={{ letterSpacing: "0.02em" }}>
                            33 Specialisations.<br />
                            <span className="italic text-ivory/80">5 Centres.</span>
                        </h2>
                        <p className="font-sans font-light text-sm md:text-base lg:text-lg text-ivory/60 leading-relaxed mb-8 md:mb-10 max-w-sm">
                            From Oncology and Psychiatry to Panchakarma and Skin Regeneration — scientific healing across every system of the body and mind.
                        </p>
                        <Link
                            href="/departments"
                            className="inline-flex items-center gap-4 text-ivory group uppercase tracking-[0.2em] text-[10px] md:text-xs font-medium pb-2 border-b border-ivory/30 hover:border-ivory transition-colors"
                        >
                            View All Departments
                            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </Link>
                    </div>
                </div>

                {/* ── Right Column: Interactive List ── */}
                <div className="lg:w-2/3 flex flex-col pt-4 lg:pt-0">
                    {DEPARTMENTS.map((dept, idx) => (
                        <motion.div
                            key={dept.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10% 0px" }}
                            transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative border-b border-ivory/10 py-6 md:py-10 cursor-pointer hover:border-ivory/40 transition-colors duration-500 flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4"
                        >
                            <div className="flex items-start md:items-center gap-4 md:gap-10">
                                <span className="font-sans font-light text-xs md:text-sm text-ivory/30 group-hover:text-ivory/60 transition-colors duration-500 mt-1 md:mt-0">
                                    0{idx + 1}
                                </span>
                                <h3 className="font-serif font-light text-xl md:text-3xl lg:text-4xl text-ivory/80 group-hover:text-ivory md:group-hover:translate-x-2 transition-all duration-500 leading-snug max-w-lg">
                                    {dept.name}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
