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
                                    Full Name <span className="text-plum font-sans" style={{ fontFamily: "Arial, sans-serif" }}>*</span>
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
                                    Email <span className="text-plum font-sans" style={{ fontFamily: "Arial, sans-serif" }}>*</span>
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
                                <div className="flex items-center gap-1.5 border-0 border-b border-plum/25 focus-within:border-plum transition-all duration-300">
                                    <select
                                        name="countryCode"
                                        defaultValue="+91"
                                        aria-label="Country code"
                                        className="py-2.5 font-sans font-normal text-[11px] sm:text-xs text-charcoal bg-transparent border-none outline-none cursor-pointer shrink-0 w-[78px] sm:w-[88px] truncate"
                                    >
                                        <option value="+91">🇮🇳 +91 (India)</option>
                                        <option value="+971">🇦🇪 +971 (UAE)</option>
                                        <option value="+974">🇶🇦 +974 (Qatar)</option>
                                        <option value="+968">🇴🇲 +968 (Oman)</option>
                                        <option value="+966">🇸🇦 +966 (Saudi Arabia)</option>
                                        <option value="+965">🇰🇼 +965 (Kuwait)</option>
                                        <option value="+973">🇧🇭 +973 (Bahrain)</option>
                                        <option value="+44">🇬🇧 +44 (UK)</option>
                                        <option value="+1">🇺🇸 +1 (USA)</option>
                                        <option value="+1-CA">🇨🇦 +1 (Canada)</option>
                                        <option value="+61">🇦🇺 +61 (Australia)</option>
                                        <option value="+65">🇸🇬 +65 (Singapore)</option>
                                        <option value="+60">🇲🇾 +60 (Malaysia)</option>
                                        <option value="+960">🇲🇻 +960 (Maldives)</option>
                                        <option value="+94">🇱🇰 +94 (Sri Lanka)</option>
                                        <option value="+880">🇧🇩 +880 (Bangladesh)</option>
                                        <option value="+92">🇵🇰 +92 (Pakistan)</option>
                                        <option value="+977">🇳🇵 +977 (Nepal)</option>
                                        <option value="+49">🇩🇪 +49 (Germany)</option>
                                        <option value="+33">🇫🇷 +33 (France)</option>
                                        <option value="+39">🇮🇹 +39 (Italy)</option>
                                        <option value="+34">🇪🇸 +34 (Spain)</option>
                                        <option value="+31">🇳🇱 +31 (Netherlands)</option>
                                        <option value="+41">🇨🇭 +41 (Switzerland)</option>
                                        <option value="+46">🇸🇪 +46 (Sweden)</option>
                                        <option value="+47">🇳🇴 +47 (Norway)</option>
                                        <option value="+45">🇩🇰 +45 (Denmark)</option>
                                        <option value="+358">🇫🇮 +358 (Finland)</option>
                                        <option value="+353">🇮🇪 +353 (Ireland)</option>
                                        <option value="+32">🇧🇪 +32 (Belgium)</option>
                                        <option value="+43">🇦🇹 +43 (Austria)</option>
                                        <option value="+351">🇵🇹 +351 (Portugal)</option>
                                        <option value="+30">🇬🇷 +30 (Greece)</option>
                                        <option value="+48">🇵🇱 +48 (Poland)</option>
                                        <option value="+380">🇺🇦 +380 (Ukraine)</option>
                                        <option value="+7">🇷🇺 +7 (Russia)</option>
                                        <option value="+90">🇹🇷 +90 (Turkey)</option>
                                        <option value="+20">🇪🇬 +20 (Egypt)</option>
                                        <option value="+27">🇿🇦 +27 (South Africa)</option>
                                        <option value="+234">🇳🇬 +234 (Nigeria)</option>
                                        <option value="+254">🇰🇪 +254 (Kenya)</option>
                                        <option value="+212">🇲🇦 +212 (Morocco)</option>
                                        <option value="+81">🇯🇵 +81 (Japan)</option>
                                        <option value="+82">🇰🇷 +82 (South Korea)</option>
                                        <option value="+86">🇨🇳 +86 (China)</option>
                                        <option value="+852">🇭🇰 +852 (Hong Kong)</option>
                                        <option value="+886">🇹🇼 +886 (Taiwan)</option>
                                        <option value="+66">🇹🇭 +66 (Thailand)</option>
                                        <option value="+84">🇻🇳 +84 (Vietnam)</option>
                                        <option value="+62">🇮🇩 +62 (Indonesia)</option>
                                        <option value="+63">🇵🇭 +63 (Philippines)</option>
                                        <option value="+64">🇳🇿 +64 (New Zealand)</option>
                                        <option value="+55">🇧🇷 +55 (Brazil)</option>
                                        <option value="+52">🇲🇽 +52 (Mexico)</option>
                                        <option value="+54">🇦🇷 +54 (Argentina)</option>
                                        <option value="+56">🇨🇱 +56 (Chile)</option>
                                        <option value="+57">🇨🇴 +57 (Colombia)</option>
                                        <option value="+972">🇮🇱 +972 (Israel)</option>
                                        <option value="+962">🇯🇴 +962 (Jordan)</option>
                                        <option value="+961">🇱🇧 +961 (Lebanon)</option>
                                        <option value="+98">🇮🇷 +98 (Iran)</option>
                                        <option value="+964">🇮🇶 +964 (Iraq)</option>
                                    </select>
                                    <span className="text-plum/30 text-xs font-light select-none pointer-events-none">|</span>
                                    <input
                                        id="cp-phone" name="phone" type="tel"
                                        placeholder="Phone number"
                                        autoComplete="tel"
                                        className="flex-1 w-full min-w-0 py-2.5 font-sans font-light text-sm text-charcoal placeholder:text-taupe-light bg-transparent border-none outline-none"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Row 2 — subject */}
                        <motion.div variants={fadeReveal} className="flex flex-col gap-1.5">
                            <label htmlFor="cp-subject" className="font-sans font-medium text-[9px] tracking-[0.2em] uppercase text-plum/70">
                                Subject <span className="text-plum font-sans" style={{ fontFamily: "Arial, sans-serif" }}>*</span>
                            </label>
                            <select
                                id="cp-subject" name="subject" required
                                defaultValue=""
                                className="w-full px-0 py-2.5 font-sans font-light text-sm text-charcoal bg-transparent border-0 border-b border-plum/25 outline-none focus:border-plum transition-all duration-300 appearance-none rounded-none cursor-pointer"
                            >
                                <option value="" disabled>Select an enquiry type</option>
                                <option value="consultation">Request a Consultation</option>
                                <option value="oncology">Cancer Care Enquiry</option>
                                <option value="mental_health">Mental Wellbeing and Counselling</option>
                                <option value="general">General Information</option>
                            </select>
                        </motion.div>

                        {/* Row 3 — message */}
                        <motion.div variants={fadeReveal} className="flex flex-col gap-1.5">
                            <label htmlFor="cp-message" className="font-sans font-medium text-[9px] tracking-[0.2em] uppercase text-plum/70">
                                Message <span className="text-plum font-sans" style={{ fontFamily: "Arial, sans-serif" }}>*</span>
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
