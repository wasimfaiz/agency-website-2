import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design & Development Blog — Insights by Setzet",
  description:
    "Read Setzet insights on web design, development, SEO, automation, and digital growth strategy.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Blogs | Setzet",
    description:
      "Practical insights on design systems, technical SEO, and modern web engineering.",
    url: "/blogs",
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}