import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product & CRM Solutions",
  description:
    "Discover Setzet's advanced product capabilities and custom CRM interfaces. We build scalable, high-performance architecture for startups, SaaS, and B2B brands to drive automated business growth.",
  keywords: "web development, custom CRM, scalable architecture, SaaS design, B2B software, automated workflows, Setzet product, UI/UX, enterprise software",
  alternates: {
    canonical: "https://setzet.com/product",
  },
  openGraph: {
    title: "Product & CRM Solutions",
    description:
      "See how Setzet designs and develops interactive product experiences and powerful custom CRMs built for scale and performance.",
    url: "https://setzet.com/product",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
