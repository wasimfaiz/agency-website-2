import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Setzet services including strategy, UI/UX, web design, web development, and technical SEO.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Setzet",
    description:
      "From strategy to engineering, discover end-to-end digital services built for growth.",
    url: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}