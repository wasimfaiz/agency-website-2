import type { MetadataRoute } from "next";

const baseUrl = "https://setzet.com";

// Blog post IDs — update this list when new blog posts are added
const BLOG_POST_IDS = [1, 2, 3, 4];

export default function sitemap(): MetadataRoute.Sitemap {
  // --- Core pages ---
  const corePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2026-03-11"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2026-03-11"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/web-development`,
      lastModified: new Date("2026-03-14"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/mobile-app-development`,
      lastModified: new Date("2026-03-14"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/performance-marketing`,
      lastModified: new Date("2026-03-25"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/social-media-marketing`,
      lastModified: new Date("2026-03-25"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/conversion-optimization`,
      lastModified: new Date("2026-03-25"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/marketing-automation`,
      lastModified: new Date("2026-03-25"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date("2026-03-08"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/product`,
      lastModified: new Date("2026-03-08"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date("2026-02-26"),
      changeFrequency: "weekly",
      priority: 0.75,
    },
  ];

  // --- Individual blog post pages ---
  const blogPages: MetadataRoute.Sitemap = BLOG_POST_IDS.map((id) => ({
    url: `${baseUrl}/blogs/${id}`,
    lastModified: new Date("2026-02-26"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // --- Legal pages (low crawl priority) ---
  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return [...corePages, ...blogPages, ...legalPages];
}
