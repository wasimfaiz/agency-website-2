import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Mobile App Development | iOS & Android | Setzet",
  description: "Setzet builds award-winning, high-performance mobile applications for iOS and Android that users return to every day.",
  alternates: {
    canonical: "https://setzet.com/services/mobile-app-development",
  },
  openGraph: {
    title: "Premium Mobile App Development Services | Setzet",
    description: "Build a mobile app users return to daily. We combine product strategy, intuitive UX, and bulletproof engineering.",
    url: "https://setzet.com/services/mobile-app-development",
    siteName: "Setzet",
    images: [
      {
        url: "https://setzet.com/images/aesthetic-img3.png",
        width: 1200,
        height: 630,
        alt: "Setzet Mobile App Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function MobileAppDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile App Development",
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
    "description": "Scalable cross-platform and native mobile apps for iOS and Android.",
    "serviceType": "Mobile App Development",
    "areaServed": "Worldwide",
    "offers": {
      "@type": "Offer",
      "description": "Premium Mobile App Development starting at flexible pricing."
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
