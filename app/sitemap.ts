import { MetadataRoute } from "next";
import { CENTRES } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.changampally.com";

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/departments",
    "/doctors",
    "/blogs",
    "/contact",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.flatMap((route) => [
    {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1.0 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}${route}`,
          ar: `${baseUrl}${route}?lang=ar`,
        },
      },
    },
  ]);

  const centreEntries: MetadataRoute.Sitemap = CENTRES.flatMap((centre) => [
    {
      url: `${baseUrl}/centres/${centre.anchor}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/centres/${centre.anchor}`,
          ar: `${baseUrl}/centres/${centre.anchor}?lang=ar`,
        },
      },
    },
  ]);

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.flatMap((post) => [
    {
      url: `${baseUrl}/blogs/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/blogs/${post.slug}`,
          ar: `${baseUrl}/blogs/${post.slug}?lang=ar`,
        },
      },
    },
  ]);

  return [...staticEntries, ...centreEntries, ...blogEntries];
}
