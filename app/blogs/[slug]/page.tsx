import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/blogs";
import BlogPostDetailClient from "@/components/organisms/BlogPostDetailClient";

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
    if (!post) return { title: "Blog Not Found | Changampally" };

    return {
        title: `${post.title} — Changampally Insights`,
        description: post.excerpt,
        alternates: {
            canonical: `https://www.changampally.com/blogs/${post.slug}`,
            languages: {
                en: `https://www.changampally.com/blogs/${post.slug}`,
                ar: `https://www.changampally.com/blogs/${post.slug}?lang=ar`,
            },
        },
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const resolvedParams = await params;
    const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

    if (!post) {
        notFound();
    }

    return <BlogPostDetailClient slug={resolvedParams.slug} initialPost={post} />;
}
