import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Influencer Marketing | Setzet",
  description: "We weaponize the Creator Economy. Authentic UGC, celebrity partnerships, and performance-driven creator whitelisting.",
  alternates: {
    canonical: "https://setzet.com/services/influencer-marketing",
  },
  openGraph: {
    title: "Premium Influencer Marketing | Setzet",
    description: "Buy trust at massive scale. Deploy high-converting micro and macro-creators to serve as the ultimate authentic sales engine for your brand.",
    url: "https://setzet.com/services/influencer-marketing",
    siteName: "Setzet",
    images: [
      {
        url: "https://setzet.com/images/aesthetic-img3.png",
        width: 1200,
        height: 630,
        alt: "Setzet Influencer Marketing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function InfluencerMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Influencer Marketing",
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
    "description": "Connecting brands with top-tier influencers for maximum ROI, UGC content sourcing, and creator whitelisting.",
    "serviceType": "Influencer Marketing",
    "areaServed": "Worldwide",
    "offers": {
      "@type": "Offer",
      "description": "Influencer Marketing Services starting at flexible pricing."
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
