"use client";

import { motion } from "framer-motion";
import { CONTACT } from "@/lib/constants";

const fadeReveal = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-ivory font-sans pt-24 md:pt-32 pb-16 md:pb-24">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                
                {/* ── Minimal enquiry form at top ───────────────────────────── */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <motion.div variants={fadeReveal} className="mb-8">
                        <span className="font-sans font-medium text-[9px] tracking-[0.28em] uppercase text-plum">Enquiry Form</span>
                        <h1 className="font-serif font-light text-3xl md:text-5xl text-charcoal mt-2" style={{ fontFamily: "var(--font-juana)" }}>
                            Send an Enquiry
                        </h1>
                        <p className="font-sans font-light text-sm text-taupe mt-3">We'll respond within one working day.</p>
                    </motion.div>

                    <form
                        className="flex flex-col gap-8"
                        action="/api/contact"
                        method="POST"
                        aria-label="Contact and enquiry form"
                        noValidate
                    >
                        {/* Row 1 — name + email + phone */}
                        <motion.div variants={fadeReveal} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="cp-name" className="font-sans font-medium text-[9px] tracking-[0.2em] uppercase text-plum/70">
                                    Full Name <span className="text-plum">*</span>
                                </label>
                                <input
                                    id="cp-name" name="name" type="text"
                                    placeholder="Your full name"
                                    required autoComplete="name"
                                    className="w-full px-0 py-2.5 font-sans font-light text-sm text-charcoal placeholder:text-taupe-light bg-transparent border-0 border-b border-plum/25 outline-none focus:border-plum transition-all duration-300"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="cp-email" className="font-sans font-medium text-[9px] tracking-[0.2em] uppercase text-plum/70">
                                    Email <span className="text-plum">*</span>
                                </label>
                                <input
                                    id="cp-email" name="email" type="email"
                                    placeholder="your@email.com"
                                    required autoComplete="email"
                                    className="w-full px-0 py-2.5 font-sans font-light text-sm text-charcoal placeholder:text-taupe-light bg-transparent border-0 border-b border-plum/25 outline-none focus:border-plum transition-all duration-300"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="cp-phone" className="font-sans font-medium text-[9px] tracking-[0.2em] uppercase text-plum/70">
                                    Phone Number
                                </label>
                                <input
                                    id="cp-phone" name="phone" type="tel"
                                    placeholder="+91 _____ _____"
                                    autoComplete="tel"
                                    className="w-full px-0 py-2.5 font-sans font-light text-sm text-charcoal placeholder:text-taupe-light bg-transparent border-0 border-b border-plum/25 outline-none focus:border-plum transition-all duration-300"
                                />
                            </div>
                        </motion.div>

                        {/* Row 2 — subject */}
                        <motion.div variants={fadeReveal} className="flex flex-col gap-1.5">
                            <label htmlFor="cp-subject" className="font-sans font-medium text-[9px] tracking-[0.2em] uppercase text-plum/70">
                                Subject <span className="text-plum">*</span>
                            </label>
                            <select
                                id="cp-subject" name="subject" required
                                className="w-full px-0 py-2.5 font-sans font-light text-sm text-charcoal bg-transparent border-0 border-b border-plum/25 outline-none focus:border-plum transition-all duration-300 appearance-none rounded-none cursor-pointer"
                            >
                                <option value="" disabled selected>Select an enquiry type</option>
                                <option value="consultation">Request a Consultation</option>
                                <option value="oncology">Cancer Care Enquiry</option>
                                <option value="mental_health">Mental Wellbeing & Counselling</option>
                                <option value="general">General Information</option>
                            </select>
                        </motion.div>

                        {/* Row 3 — message */}
                        <motion.div variants={fadeReveal} className="flex flex-col gap-1.5">
                            <label htmlFor="cp-message" className="font-sans font-medium text-[9px] tracking-[0.2em] uppercase text-plum/70">
                                Message <span className="text-plum">*</span>
                            </label>
                            <textarea
                                id="cp-message" name="message" required
                                placeholder="How can we assist you?"
                                rows={4}
                                className="w-full px-0 py-2.5 font-sans font-light text-sm text-charcoal placeholder:text-taupe-light bg-transparent border-0 border-b border-plum/25 outline-none focus:border-plum transition-all duration-300 resize-y min-h-[100px]"
                            />
                        </motion.div>

                        <motion.div variants={fadeReveal} className="flex items-center justify-between mt-4 border-t border-plum/10 pt-8">
                            <p className="font-sans font-light text-[10px] text-taupe max-w-[200px]">
                                Your privacy is respected. All inquiries are strictly confidential.
                            </p>
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center px-8 py-3.5 bg-plum text-ivory font-sans font-medium text-[10px] tracking-[0.2em] uppercase hover:bg-plum-dark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 rounded-sm"
                            >
                                Send Enquiry
                            </button>
                        </motion.div>
                    </form>
                </motion.div>

                {/* ── Divider ───────────────────────────────────────────────── */}
                <div className="h-px bg-plum/10 my-16 md:my-24" />

                {/* ── Minimal contact info ──────────────────────────────────── */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16"
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {/* Main centre contact */}
                    <motion.div variants={fadeReveal} className="flex flex-col gap-4">
                        <span className="font-sans font-medium text-[9px] tracking-[0.28em] uppercase text-plum border-b border-plum/15 pb-2">
                            Main Centre
                        </span>
                        <address className="not-italic font-sans font-light text-sm text-charcoal leading-relaxed">
                            {CONTACT.addressLine1}<br />
                            {CONTACT.addressLine2}
                        </address>
                        <div className="flex flex-col gap-1 mt-1">
                            <a href={`tel:${CONTACT.phoneMedical1.replace(/\s+/g, "")}`}
                                className="font-sans font-light text-base text-plum hover:text-plum-dark transition-colors">
                                {CONTACT.phoneMedical1}
                            </a>
                            <a href={`tel:${CONTACT.phoneMedical2.replace(/\s+/g, "")}`}
                                className="font-sans font-light text-sm text-taupe hover:text-plum transition-colors">
                                {CONTACT.phoneMedical2}
                            </a>
                        </div>
                        <a href={`mailto:${CONTACT.email}`}
                            className="font-sans font-light text-xs text-taupe hover:text-plum transition-colors mt-1">
                            {CONTACT.email}
                        </a>
                    </motion.div>

                    {/* Other number */}
                    <motion.div variants={fadeReveal} className="flex flex-col gap-4">
                        <span className="font-sans font-medium text-[9px] tracking-[0.28em] uppercase text-plum border-b border-plum/15 pb-2">
                            Medical Helpline
                        </span>
                        <p className="font-sans font-light text-xs text-taupe leading-relaxed">
                            For urgent medical queries, speak directly with our care team.
                        </p>
                        <a href="tel:+919072666105"
                            className="font-sans font-light text-base text-plum hover:text-plum-dark transition-colors">
                            +91 9072 666 105
                        </a>
                        <p className="font-sans font-light text-xs text-taupe mt-2">
                            Available Mon–Sat, 9am–6pm
                        </p>
                    </motion.div>
                </motion.div>

            </div>
        </main>
    );
}
