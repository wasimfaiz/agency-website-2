import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about SetZet, our process, values, and the team behind high-impact web design and development.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About SetZet",
    description:
      "Meet the team, process, and philosophy behind SetZet's digital experiences.",
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
