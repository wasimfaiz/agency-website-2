import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Custom Software Development | Setzet",
  description: "Setzet engineers complex, highly-scalable software solutions. Modernizing legacy systems, building enterprise SaaS, and deploying cloud infrastructures.",
  alternates: {
    canonical: "https://setzet.com/services/custom-software-development",
  },
  openGraph: {
    title: "Premium Custom Software Development | Setzet",
    description: "Build systems that never break. We architect, engineer, and deploy massive, highly-scalable software solutions.",
    url: "https://setzet.com/services/custom-software-development",
    siteName: "Setzet",
    images: [
      {
        url: "https://setzet.com/images/aesthetic-img3.png",
        width: 1200,
        height: 630,
        alt: "Setzet Custom Software Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function CustomSoftwareDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Software Development",
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
    "description": "Reliable backend, API integrations, and tailored software solutions engineered for enterprise scale.",
    "serviceType": "Custom Software Development",
    "areaServed": "Worldwide",
    "offers": {
      "@type": "Offer",
      "description": "Enterprise Software Development starting at flexible pricing."
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
