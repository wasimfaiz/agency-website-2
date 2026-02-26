import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Setzet, our process, values, and the team behind high-impact web design and development.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Setzet",
    description:
      "Meet the team, process, and philosophy behind Setzet's digital experiences.",
    url: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
