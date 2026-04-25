import type { Metadata } from "next";
import { Montserrat, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://setzet.com"),
  title: {
    default: "Setzet | Web Design & Development Agency",
    template: "%s | Setzet",
  },
  description:
    "Setzet is a strategy-led web design and development agency helping brands launch high-converting, SEO-ready digital experiences.",
  icons: {
    icon: "/fevicon.jpeg",
  },
  keywords: [
    "web development agency",
    "web design agency",
    "next.js development",
    "seo optimization",
    "ui ux design",
    "digital product development",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Setzet | Web Design & Development Agency",
    description:
      "Strategy, design, and development for modern brands that need high-performance websites and digital products.",
    url: "/",
    siteName: "Setzet",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Setzet | Web Design & Development Agency",
    description:
      "A strategy-led digital agency building high-converting websites and digital platforms.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: "Setzet",
    url: "https://setzet.com",
    logo: "https://setzet.com/setzet-logo.png",
    description: "Setzet is a premium strategy-led web design and development agency. We engineer blazing-fast websites, scalable custom software, and digital experiences.",
    slogan: "We build scalable digital products that drive revenue.",
    knowsAbout: [
      "Web Design",
      "Web Development",
      "Next.js Development",
      "UI/UX Design",
      "Mobile App Development",
      "Custom Software Development",
      "Search Engine Optimization (SEO)",
      "Influencer Marketing"
    ],
    email: "wasim@setzet.com",
    telephone: "+91-9128376231",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressCountry: "IN",
    },
    sameAs: [
      "https://twitter.com/setzet",
      "https://linkedin.com/company/setzet"
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${montserrat.variable} ${playfair.variable} antialiased font-sans overflow-x-hidden`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
