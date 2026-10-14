"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getBlogPostBySlug } from "@/lib/i18n/data";
import type { BlogPost } from "@/lib/blogs";

interface BlogPostDetailClientProps {
    slug: string;
    initialPost?: BlogPost;
}

export default function BlogPostDetailClient({ slug, initialPost }: BlogPostDetailClientProps) {
    const { locale, t, isRtl } = useLanguage();
    const post = getBlogPostBySlug(slug, locale) || initialPost;

    useEffect(() => {
        if (post) {
            document.title = `${post.title} — ${t("common.brandName")}`;
        }
    }, [post, t]);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-sandstone text-charcoal font-sans pb-28">
            {/* ── Seamless Plum Hero (~20% page height) ────────────────────── */}
            <section
                className="relative pt-24 md:pt-36 pb-12 md:pb-16 px-4 md:px-12 xl:px-24 bg-plum overflow-hidden"
                style={{ minHeight: "20vh" }}
            >
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 blur-[120px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/3" />
                <div className="max-w-5xl mx-auto relative z-10">
                    {/* Back link */}
                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-ivory/70 hover:text-ivory mb-6 transition-colors group"
                    >
                        <span className={`${isRtl ? "group-hover:translate-x-1" : "group-hover:-translate-x-1"} transition-transform`}>
                            {isRtl ? "→" : "←"}
                        </span>
                        <span>{t("blogs.backToArticles")}</span>
                    </Link>

                    {/* Category */}
                    <div className="mb-3">
                        <span className="inline-block px-3 py-1 bg-white/10 text-ivory rounded-full text-xs font-sans font-medium uppercase tracking-wider border border-white/15">
                            {post.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h1
                        className="font-serif font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ivory leading-[1.18] tracking-tight mb-6"
                        style={{ fontFamily: "var(--font-juana)" }}
                    >
                        {post.title}
                    </h1>

                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-ivory/70 pt-2 border-t border-white/10">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span>
                            {locale === "ar" ? "بقلم: " : "By "}
                            {post.author.name} ({post.author.role})
                        </span>
                    </div>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 pt-12">
                {/* Subtitle / Excerpt */}
                {post.subtitle && (
                    <p className="font-serif text-lg sm:text-xl text-taupe leading-relaxed mb-8 italic">
                        {post.subtitle}
                    </p>
                )}

                {/* Author Card Header */}
                <div className="flex items-center gap-4 py-6 border-y border-charcoal/10 mb-10">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border border-plum/20 shadow-sm bg-sandstone">
                        <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2 flex-wrap">
                            <h2 className="font-sans font-bold text-sm sm:text-base text-charcoal">
                                {post.author.name}
                            </h2>
                            <span className="text-xs text-plum font-medium">({post.author.role})</span>
                        </div>
                        <p className="font-sans text-xs text-taupe leading-tight mt-0.5">
                            {post.author.dept} • {post.author.institute}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-taupe/80 mt-1 font-sans">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span className="text-plum font-medium">{post.readTime}</span>
                        </div>
                    </div>
                </div>

                {/* Body Typography */}
                <div className="prose prose-lg max-w-none space-y-6 text-charcoal/90 font-serif leading-[1.8] text-base sm:text-lg">
                    {post.content.map((block, idx) => {
                        if (block.type === "heading") {
                            return (
                                <h2
                                    key={idx}
                                    className="font-serif text-2xl sm:text-3xl text-charcoal pt-6 pb-2 tracking-tight leading-snug font-normal"
                                    style={{ fontFamily: "var(--font-juana)" }}
                                >
                                    {block.text}
                                </h2>
                            );
                        }
                        if (block.type === "quote") {
                            return (
                                <blockquote
                                    key={idx}
                                    className="border-l-4 border-plum pl-6 my-8 italic text-lg sm:text-xl text-plum font-serif bg-plum/5 py-4 pr-4 rounded-r-lg"
                                >
                                    “{block.text}”
                                </blockquote>
                            );
                        }
                        return (
                            <p key={idx} className="font-serif font-light text-charcoal/85 leading-relaxed">
                                {block.text}
                            </p>
                        );
                    })}
                </div>

                {/* Author Bio Box */}
                <div className="mt-16 pt-10 border-t border-charcoal/15 bg-sandstone/60 p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row gap-5 items-start">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 border-2 border-plum/30 shadow-sm bg-white">
                        <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest font-sans font-bold text-plum mb-1">
                            {t("blogs.writtenBy")}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-medium mb-1">
                            {post.author.name}
                        </h3>
                        <p className="font-sans text-xs text-taupe font-medium mb-2">
                            {post.author.role} • {post.author.dept}
                        </p>
                        {post.author.bio && (
                            <p className="font-sans text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                                {post.author.bio}
                            </p>
                        )}
                    </div>
                </div>

                {/* Bottom Back Button */}
                <div className="mt-12 text-center">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center justify-center px-8 py-3 bg-plum text-ivory text-xs font-sans uppercase tracking-[0.2em] rounded-full hover:bg-plum-dark transition-all duration-300 shadow-sm"
                    >
                        {t("blogs.backToKnowledge")}
                    </Link>
                </div>
            </div>
        </article>
    );
}
