import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium SEO & Content Marketing | Setzet",
  description: "SEO and content marketing systems that build unshakeable authority, capture high-intent traffic, and turn search visibility into qualified pipeline.",
  alternates: {
    canonical: "https://setzet.com/services/seo-growth",
  },
  openGraph: {
    title: "Premium SEO & Content Marketing | Setzet",
    description: "Capture demand. Dominate Search. We build compounding search assets that intercept high-intent buyers.",
    url: "https://setzet.com/services/seo-growth",
    siteName: "Setzet",
    images: [
      {
        url: "https://setzet.com/images/aesthetic-img3.png",
        width: 1200,
        height: 630,
        alt: "Setzet SEO & Growth Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function SeoGrowthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO & Growth",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Setzet",
      "url": "https://setzet.com",
      "telephone": "+91-9128376231",
      "email": "wasim@setzet.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Noida",
        "addressCountry": "IN"
      }
    },
    "description": "Strategy-led SEO implementation to drive organic growth, capture high-intent traffic, and build authority.",
    "serviceType": "SEO & Content Marketing",
    "areaServed": "Worldwide",
    "offers": {
      "@type": "Offer",
      "description": "Enterprise SEO & Growth services starting at flexible pricing."
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
