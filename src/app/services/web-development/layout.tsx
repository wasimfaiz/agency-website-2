import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Web Development Agency | Next.js & React | Setzet",
  description: "Setzet engineers high-performance, SEO-ready, and conversion-optimized web applications using Next.js, React, and modern tech stacks.",
  alternates: {
    canonical: "https://setzet.com/services/web-development",
  },
  openGraph: {
    title: "Premium Web Development Services | Setzet",
    description: "Award-winning, high-performance web experiences designed to capture attention and drive revenue.",
    url: "https://setzet.com/services/web-development",
    siteName: "Setzet",
    images: [
      {
        url: "https://setzet.com/images/aesthetic-img3.png",
        width: 1200,
        height: 630,
        alt: "Setzet Web Development Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development",
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
    "description": "High-performance, SEO-ready Next.js web applications, e-commerce platforms, and custom software development.",
    "serviceType": "Web Development",
    "areaServed": "Worldwide",
    "offers": {
      "@type": "Offer",
      "description": "Premium Web Development starting at flexible pricing."
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
