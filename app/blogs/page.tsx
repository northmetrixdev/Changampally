"use client";

import type { Metadata } from "next";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

// ── Blog data ─────────────────────────────────────────────────────────────────
const BLOG_CATEGORIES = ["All Articles", "Ayurveda", "Wellness", "Oncology", "Mental Health", "Lifestyle"];

const BLOGS = [
    {
        id: "blog-1",
        category: "Ayurveda",
        date: "Sep 15, 2026",
        title: "Understanding Panchakarma: The Ancient Detox That Works",
        excerpt: "Panchakarma — the cornerstone of Ayurvedic medicine — is more than a detox. Explore how this centuries-old bio-purification process can restore doshic balance and address chronic conditions in modern life.",
        readTime: "6 min read",
        color: "from-plum/10 to-plum/5",
        imageGradient: "linear-gradient(135deg, #33181C22 0%, #6F5F4D44 100%)",
    },
    {
        id: "blog-2",
        category: "Oncology",
        date: "Sep 8, 2026",
        title: "Ayurvedic Oncology: Supporting Cancer Recovery Naturally",
        excerpt: "Changampally's integrative approach to cancer care combines Ayurvedic wisdom with modern oncology. Dr. Jannathul Firdause shares insights on how ancient protocols mitigate treatment side-effects and improve quality of life.",
        readTime: "8 min read",
        color: "from-taupe/10 to-taupe/5",
        imageGradient: "linear-gradient(135deg, #33181C33 0%, #33181C11 100%)",
    },
    {
        id: "blog-3",
        category: "Mental Health",
        date: "Aug 28, 2026",
        title: "Ayurvedic Psychiatry: A Scientific Approach to Mental Wellness",
        excerpt: "Mobile phone addiction, chronic anxiety, and burnout are defining challenges of our era. Dr. Sajjad Changampally explains how Ayurvedic psychiatry offers evidence informed solutions to contemporary mental health.",
        readTime: "7 min read",
        color: "from-plum/10 to-ivory",
        imageGradient: "linear-gradient(135deg, #6F5F4D33 0%, #33181C22 100%)",
    },
    {
        id: "blog-4",
        category: "Wellness",
        date: "Aug 20, 2026",
        title: "Kaivalya Retreats: Healing in the Lap of Peringode's Nature",
        excerpt: "Set in a serene, lush environment, Changampally Kaivalya offers a sanctuary for both recovery and deep rejuvenation. Learn about the retreat experience and its tailored therapeutic programmes.",
        readTime: "5 min read",
        color: "from-sage/20 to-sage/5",
        imageGradient: "linear-gradient(135deg, #A3B19B44 0%, #33181C11 100%)",
    },
    {
        id: "blog-5",
        category: "Lifestyle",
        date: "Aug 12, 2026",
        title: "Managing Diabetes the Ayurvedic Way: Root Causes and Remedies",
        excerpt: "Lifestyle diseases like diabetes need root-cause solutions. Our integrated team explains how combining metabolic medicine with Ayurvedic protocols delivers results that go beyond symptom management.",
        readTime: "9 min read",
        color: "from-plum/10 to-sandstone",
        imageGradient: "linear-gradient(135deg, #33181C33 0%, #DDD9C9 100%)",
    },
    {
        id: "blog-6",
        category: "Ayurveda",
        date: "Jul 30, 2026",
        title: "The Changampally Legacy: 700 Years of Healing Wisdom",
        excerpt: "From a Vaidya family lineage dating back to 1300 AD, to five modern centres of excellence across Kerala — the story of Changampally is one of unbroken commitment to compassionate, science-guided care.",
        readTime: "10 min read",
        color: "from-taupe/15 to-ivory",
        imageGradient: "linear-gradient(135deg, #6F5F4D44 0%, #EAECE4 100%)",
    },
];

const fadeReveal = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function BlogsPage() {
    const [activeCategory, setActiveCategory] = useState("All Articles");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredBlogs = BLOGS.filter((blog) => {
        const matchesCategory = activeCategory === "All Articles" || blog.category === activeCategory;
        const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="min-h-screen bg-ivory">

            {/* ── Hero ─────────────────────────────────────────────────────── */}
            <section className="bg-plum pt-28 pb-16 px-6 md:px-12 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="font-sans font-light text-[9px] tracking-[0.3em] uppercase text-ivory/50 mb-4"
                >
                    Blog &amp; Insights
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="font-serif font-light text-4xl sm:text-5xl md:text-6xl text-ivory tracking-tight leading-tight mb-6 max-w-3xl mx-auto"
                    style={{ fontFamily: "var(--font-juana)" }}
                >
                    Insights &amp; Wellness
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="font-sans font-light text-sm md:text-base text-ivory/70 max-w-xl mx-auto leading-relaxed"
                >
                    Perspectives on Ayurveda, integrative medicine, and holistic wellness — from the practitioners of Changampally.
                </motion.p>
            </section>

            {/* ── Articles ──────────────────────────────────────────────────── */}
            <section className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-16 py-14 md:py-20">

                {/* Header + search + filters */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-10"
                >
                    <h2 className="font-serif font-light text-2xl md:text-3xl text-charcoal mb-2" style={{ fontFamily: "var(--font-juana)" }}>
                        All Articles
                    </h2>
                    <p className="font-sans font-light text-xs text-taupe mb-6">
                        In-depth articles on Ayurveda, wellness, and integrative healthcare from our expert practitioners.
                    </p>

                    {/* Search */}
                    <div className="relative max-w-sm mb-5">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-taupe text-xs">Search</span>
                        <input
                            type="search"
                            placeholder="Search articles…"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-16 pr-4 py-2.5 font-sans font-light text-sm text-charcoal bg-sandstone border border-charcoal/10 rounded-lg outline-none focus:border-plum/50 transition-all duration-300 placeholder:text-taupe"
                            aria-label="Search blog articles"
                        />
                    </div>

                    {/* Category filters */}
                    <div className="flex flex-wrap gap-2">
                        {BLOG_CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-1.5 text-[10px] font-sans font-medium tracking-[0.15em] uppercase rounded-full border transition-all duration-300 ${activeCategory === cat
                                    ? "bg-plum text-ivory border-plum"
                                    : "bg-sandstone text-taupe border-charcoal/15 hover:border-plum/30 hover:text-plum"
                                    }`}
                                aria-pressed={activeCategory === cat}
                                aria-label={`Filter by ${cat}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Articles grid */}
                {filteredBlogs.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="font-sans font-light text-taupe">No articles found matching your search.</p>
                    </motion.div>
                ) : (
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.05 }}
                    >
                        {filteredBlogs.map((blog) => (
                            <motion.article
                                key={blog.id}
                                variants={fadeReveal}
                                className="group flex flex-col bg-white border border-charcoal/[0.06] rounded-2xl overflow-hidden hover:border-plum/20 transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
                                aria-label={blog.title}
                            >
                                {/* Image area */}
                                <div
                                    className="w-full h-44 shrink-0 transition-transform duration-700 group-hover:scale-105"
                                    style={{ background: blog.imageGradient }}
                                    aria-hidden="true"
                                >
                                    <div className="w-full h-full flex items-center justify-center">
                                        <span className="font-serif text-4xl text-white/20" style={{ fontFamily: "var(--font-juana)" }}>
                                            {blog.category.slice(0, 1)}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-grow p-5 md:p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-[8px] tracking-[0.2em] uppercase font-sans font-medium text-plum bg-plum/8 px-2 py-0.5 rounded border border-plum/15">
                                            {blog.category}
                                        </span>
                                        <span className="font-sans font-light text-[10px] text-taupe">{blog.date}</span>
                                    </div>

                                    <h3 className="font-serif font-light text-lg md:text-xl text-charcoal mb-3 leading-snug group-hover:text-plum transition-colors duration-500" style={{ fontFamily: "var(--font-juana)", fontWeight: 400 }}>
                                        {blog.title}
                                    </h3>

                                    <p className="font-sans font-light text-xs md:text-sm text-taupe leading-relaxed flex-grow">
                                        {blog.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-charcoal/[0.06]">
                                        <span className="font-sans font-light text-[10px] text-taupe-light">{blog.readTime}</span>
                                        <Link
                                            href={`/blogs/${blog.id}`}
                                            className="font-sans font-medium text-[10px] tracking-[0.15em] uppercase text-plum hover:text-plum-dark transition-colors duration-300 flex items-center gap-1.5"
                                            aria-label={`Read: ${blog.title}`}
                                        >
                                            Learn More <span aria-hidden="true">→</span>
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                )}
            </section>

            {/* ── Newsletter CTA ────────────────────────────────────────────── */}
            <section className="bg-plum py-16 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-xl mx-auto"
                >
                    <p className="font-sans font-light text-[9px] tracking-[0.3em] uppercase text-ivory/50 mb-4">Stay Informed</p>
                    <h2 className="font-serif font-light text-3xl text-ivory mb-4" style={{ fontFamily: "var(--font-juana)" }}>
                        Wellness Insights, Delivered
                    </h2>
                    <p className="font-sans font-light text-xs text-ivory/60 mb-6 leading-relaxed">
                        Subscribe to receive thoughtful articles on Ayurveda, integrative medicine, and holistic wellness.
                    </p>
                    <form className="flex gap-0 max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()} aria-label="Newsletter signup">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-1 px-4 py-3 font-sans font-light text-sm text-charcoal bg-ivory border-0 outline-none placeholder:text-taupe-light"
                            aria-label="Email for newsletter"
                        />
                        <button
                            type="submit"
                            className="px-5 py-3 bg-charcoal text-ivory font-sans font-light text-xs tracking-[0.18em] uppercase transition-all duration-300 hover:bg-plum-dark shrink-0"
                            aria-label="Subscribe to newsletter"
                        >
                            Subscribe
                        </button>
                    </form>
                </motion.div>
            </section>
        </main>
    );
}
