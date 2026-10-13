"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blogs";

const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const CATEGORIES = [
    { id: "all", label: "All Articles" },
    { id: "psychiatry", label: "Ayurvedic Psychiatry" },
    { id: "cyber", label: "Cyber Psychology" },
    { id: "oncology", label: "Integrative Oncology" },
    { id: "wellness", label: "Mental Well-being" },
];

export default function BlogsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredPosts = useMemo(() => {
        return BLOG_POSTS.filter((post) => {
            const matchesSearch =
                searchQuery.trim() === "" ||
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.category.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesCategory =
                selectedCategory === "all" ||
                (selectedCategory === "psychiatry" && post.category.toLowerCase().includes("psychiatry")) ||
                (selectedCategory === "cyber" && (post.category.toLowerCase().includes("cyber") || post.title.toLowerCase().includes("cyber") || post.title.toLowerCase().includes("nomophobia"))) ||
                (selectedCategory === "oncology" && post.category.toLowerCase().includes("oncology")) ||
                (selectedCategory === "wellness" && (post.category.toLowerCase().includes("mental") || post.category.toLowerCase().includes("well")));

            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    return (
        <main className="min-h-screen bg-sandstone text-charcoal">
            {/* ── Seamless Plum Hero: Exact same structure & colors as Services, Doctors, Departments ── */}
            <section
                className="relative pt-24 md:pt-32 pb-8 md:pb-10 px-4 md:px-12 xl:px-24 bg-plum overflow-hidden"
                style={{ minHeight: "18vh" }}
            >
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 blur-[120px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/3" />
                <div className="max-w-[1440px] mx-auto text-left flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-10 relative z-10">
                    <div className="max-w-3xl">
                        <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="font-sans font-light text-[10px] tracking-[0.3em] uppercase text-ivory/60 mb-2"
                        >
                            Clinical Insights &amp; Articles
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="font-serif font-light text-3xl sm:text-4xl md:text-5xl text-ivory tracking-tight leading-tight mb-2.5"
                            style={{ fontFamily: "var(--font-juana)" }}
                        >
                            All Articles
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
                            className="font-sans font-light text-xs sm:text-sm text-ivory/80 leading-relaxed max-w-2xl"
                        >
                            Find clinically grounded perspectives, research summaries, and therapeutic wisdom to navigate modern psychosomatic and physical wellbeing.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* ── Search & Filter Controls: Tight bar directly above cards ── */}
            <div className="bg-ivory border-b border-plum/10 py-3 px-4 md:px-12 xl:px-24">
                <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                    {/* Search Input Box */}
                    <div className="relative w-full md:w-72 shrink-0">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-taupe/60">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search articles..."
                            className="w-full pl-9 pr-3 py-1.5 bg-white border border-charcoal/15 rounded-lg text-xs text-charcoal placeholder-taupe/60 focus:outline-none focus:border-plum focus:ring-1 focus:ring-plum transition-all"
                        />
                    </div>

                    {/* Filter Pills without emojis */}
                    <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto">
                        {CATEGORIES.map((cat) => {
                            const isSelected = selectedCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    type="button"
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`px-3 py-1 rounded-full text-[11px] font-sans transition-all border ${
                                        isSelected
                                            ? "bg-plum text-ivory border-plum font-medium shadow-sm"
                                            : "bg-white text-charcoal/70 border-charcoal/15 hover:border-plum/40 hover:text-charcoal"
                                    }`}
                                >
                                    <span>{cat.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* ── Article Feed: Compact Medium-style layout that fits without scrolling ── */}
            <section className="py-6 px-4 md:px-12 xl:px-24 max-w-[1440px] mx-auto">
                <div className="mb-4 flex items-center justify-between">
                    <h2
                        className="font-serif font-light text-xl md:text-2xl text-charcoal tracking-tight"
                        style={{ fontFamily: "var(--font-juana)" }}
                    >
                        Latest Blog
                    </h2>
                    <span className="text-xs font-sans text-taupe">
                        {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
                    </span>
                </div>

                {filteredPosts.length === 0 ? (
                    <div className="text-center py-12 bg-white/60 rounded-2xl border border-charcoal/10">
                        <p className="text-taupe text-xs">No articles found matching your query.</p>
                        <button
                            type="button"
                            onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                            className="mt-2 text-xs text-plum underline font-medium"
                        >
                            Reset filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filteredPosts.map((post) => (
                            <motion.article
                                key={post.id}
                                variants={fadeUp}
                                initial="hidden"
                                animate="show"
                                className="flex flex-col group bg-white rounded-xl p-4 border border-charcoal/10 shadow-soft hover:shadow-medium hover:border-plum/30 transition-all duration-300"
                            >
                                <Link href={`/blogs/${post.slug}`} className="flex flex-col h-full cursor-pointer">
                                    {/* Medium-style Author Header (Avatar + Name + Date • Read Time) */}
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border border-plum/20 bg-sandstone">
                                            <Image
                                                src={post.author.avatar}
                                                alt={post.author.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col min-w-0">
                                            <span className="font-sans font-medium text-xs text-charcoal leading-tight truncate group-hover:text-plum transition-colors">
                                                {post.author.name}
                                            </span>
                                            <div className="flex items-center gap-1.5 text-[10px] font-sans text-taupe leading-tight mt-0.5">
                                                <span>{post.date}</span>
                                                <span>•</span>
                                                <span className="text-plum font-medium">{post.readTime}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Compact Thumbnail Banner */}
                                    <div className="relative w-full h-36 sm:h-40 rounded-lg overflow-hidden bg-sandstone mb-3">
                                        <Image
                                            src={post.coverImage}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>

                                    {/* Category Pill Tag */}
                                    <div className="mb-1.5">
                                        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-sans font-medium uppercase tracking-wider text-plum bg-plum/10 border border-plum/15">
                                            {post.category}
                                        </span>
                                    </div>

                                    {/* Article Heading with Juana Font */}
                                    <h3
                                        className="font-serif font-light text-base md:text-lg text-charcoal leading-snug group-hover:text-plum transition-colors mb-1.5 line-clamp-2"
                                        style={{ fontFamily: "var(--font-juana)" }}
                                    >
                                        {post.title}
                                    </h3>

                                    {/* Excerpt Body */}
                                    <p className="font-sans text-xs text-taupe leading-relaxed mb-3 line-clamp-2">
                                        {post.excerpt}
                                    </p>

                                    {/* Card Footer: Read Story + Role */}
                                    <div className="mt-auto pt-2.5 border-t border-charcoal/5 flex items-center justify-between text-xs">
                                        <span className="font-medium text-xs text-plum group-hover:text-plum-dark transition-colors inline-flex items-center gap-1">
                                            <span>Read Story</span>
                                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </span>
                                        <span className="text-[10px] text-taupe/70 font-sans truncate max-w-[130px]">
                                            {post.author.role}
                                        </span>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}
