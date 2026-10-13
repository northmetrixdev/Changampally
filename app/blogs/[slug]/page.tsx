import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blogs";

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
    const resolvedParams = await params;
    const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);
    if (!post) return { title: "Blog Not Found" };

    return {
        title: `${post.title} — Changampally Insights`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const resolvedParams = await params;
    const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-ivory text-charcoal font-sans pt-24 sm:pt-28 md:pt-36 pb-24">
            <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
                {/* Back to Blogs */}
                <Link
                    href="/blogs"
                    className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-plum hover:text-plum-dark mb-8 transition-colors group"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span>
                    <span>All Knowledge Posts</span>
                </Link>

                {/* Category Pill */}
                <span className="inline-block px-3 py-1 bg-plum/10 text-plum rounded-full text-xs font-sans font-medium uppercase tracking-wider mb-4 border border-plum/15">
                    {post.category}
                </span>

                {/* Article Title — Medium Editorial Style */}
                <h1
                    className="font-serif font-light text-3xl sm:text-4xl md:text-5xl text-charcoal leading-[1.18] tracking-tight mb-4"
                    style={{ fontFamily: "var(--font-juana)" }}
                >
                    {post.title}
                </h1>

                {/* Subtitle / Excerpt */}
                {post.subtitle && (
                    <p className="font-serif text-lg sm:text-xl text-taupe leading-relaxed mb-8 italic">
                        {post.subtitle}
                    </p>
                )}

                {/* Author Card Header — Exact Medium Style */}
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

                {/* Medium-style Body Typography */}
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

                {/* Author Bio Box at Bottom of Article */}
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
                            Written by
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
                        Back to Knowledge Posts
                    </Link>
                </div>
            </div>
        </article>
    );
}
