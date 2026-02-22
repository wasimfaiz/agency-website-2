import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Discover SetZet product capabilities, including CRM-focused interfaces and scalable architecture for business growth.",
  alternates: {
    canonical: "/product",
  },
  openGraph: {
    title: "Product | SetZet",
    description:
      "See how SetZet designs and develops product experiences built for performance.",
    url: "/product",
  },
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}