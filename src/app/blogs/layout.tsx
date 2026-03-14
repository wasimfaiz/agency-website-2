import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design & Development Blog — Setzet Agency",
  description:
    "Explore the Setzet Agency blog for expert insights on web design, development, SEO, and automation. Level up your digital strategy with our articles on design systems, technical SEO, and modern web engineering.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Web Design & Development Blog — Setzet Agency",
    description:
      "Explore the Setzet Agency blog for expert insights on web design, development, SEO, and automation. Level up your digital strategy with our articles on design systems, technical SEO, and modern web engineering.",
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