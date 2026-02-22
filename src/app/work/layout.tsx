import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "See how SetZet turns business goals into measurable digital outcomes across web, product, and brand experiences.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Our Work | SetZet",
    description:
      "Case stories and digital projects crafted for growth-focused brands.",
    url: "/work",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}