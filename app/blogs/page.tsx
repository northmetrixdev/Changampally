"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blogs";

const fadeReveal = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function BlogsPage() {
    return (
        <main className="min-h-screen bg-ivory">
            {/* ── Compact Hero ─────────────────────────────────────────────── */}
            <section className="bg-plum pt-24 md:pt-36 pb-12 md:pb-16 px-4 md:px-12 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="font-sans font-light text-[9px] tracking-[0.3em] uppercase text-ivory/50 mb-3"
                >
                    Research &amp; Clinical Insights
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="font-serif font-light text-3xl sm:text-4xl md:text-5xl text-ivory tracking-tight leading-tight mb-4 max-w-2xl mx-auto"
                    style={{ fontFamily: "var(--font-juana)" }}
                >
                    Clinical Perspectives
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="font-sans font-light text-xs sm:text-sm text-ivory/70 max-w-lg mx-auto leading-relaxed"
                >
                    Original clinical research and integrative insights authored by Changampally physicians and specialists.
                </motion.p>
            </section>

            {/* ── Blogs List: Medium Publication Editorial Card ────────────── */}
            <section className="py-14 md:py-20 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto">
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1, transition: { staggerChildren: 0.1 } },
                    }}
                    className="flex flex-col gap-8"
                >
                    {BLOG_POSTS.map((blog) => (
                        <motion.article
                            key={blog.id}
                            variants={fadeReveal}
                            className="bg-sandstone border border-plum/15 rounded-2xl overflow-hidden hover:border-plum/40 transition-all duration-300 hover:shadow-lg"
                        >
                            <Link href={`/blogs/${blog.slug}`} className="flex flex-col md:flex-row gap-6 p-6 sm:p-8 cursor-pointer group">
                                {/* Author Portrait on the Left (Medium-style) */}
                                <div className="flex md:flex-col items-center md:items-center text-center gap-3 shrink-0 md:w-52 border-b md:border-b-0 md:border-r border-plum/15 pb-4 md:pb-0 md:pr-6">
                                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-plum/30 shadow-md bg-white shrink-0 group-hover:scale-105 transition-transform duration-300">
                                        <Image
                                            src={blog.author.avatar}
                                            alt={blog.author.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start md:items-center text-left md:text-center">
                                        <span className="font-serif font-normal text-sm sm:text-base text-charcoal group-hover:text-plum transition-colors" style={{ fontFamily: "var(--font-juana)" }}>
                                            {blog.author.name}
                                        </span>
                                        <span className="font-sans font-medium text-[10px] text-plum mt-0.5">
                                            {blog.author.role}
                                        </span>
                                        <span className="font-sans font-light text-[9px] text-taupe leading-tight mt-1 hidden md:block">
                                            {blog.author.dept}
                                        </span>
                                        <span className="font-sans font-light text-[8px] text-taupe/80 leading-tight mt-1 hidden md:block">
                                            {blog.author.institute}
                                        </span>
                                    </div>
                                </div>

                                {/* Article Content on the Right */}
                                <div className="flex flex-col flex-1 justify-between">
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="inline-block text-[8px] tracking-[0.2em] uppercase font-sans font-medium text-plum bg-plum/10 px-2.5 py-0.5 rounded border border-plum/15">
                                                {blog.category}
                                            </span>
                                            <span className="text-[10px] font-sans font-light text-taupe">
                                                {blog.date} • {blog.readTime}
                                            </span>
                                        </div>

                                        <h2
                                            className="font-serif font-light text-xl sm:text-2xl md:text-3xl text-charcoal mb-3 leading-snug group-hover:text-plum transition-colors"
                                            style={{ fontFamily: "var(--font-juana)" }}
                                        >
                                            {blog.title}
                                        </h2>

                                        <p className="font-sans font-light text-xs sm:text-sm text-taupe leading-relaxed mb-4">
                                            {blog.excerpt}
                                        </p>
                                    </div>

                                    {/* Action row */}
                                    <div className="pt-4 border-t border-plum/10 flex items-center justify-between">
                                        <span className="text-[10px] font-sans font-light text-taupe italic">
                                            Original clinical publication
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 text-xs font-sans font-medium uppercase tracking-[0.15em] text-plum group-hover:text-plum-dark transition-colors">
                                            Read Article <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </motion.div>
            </section>
        </main>
    );
}
