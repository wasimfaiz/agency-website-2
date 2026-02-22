import type { Metadata } from "next";
import { Montserrat, Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://setzet.studio"),
  title: {
    default: "SetZet | Web Design & Development Agency",
    template: "%s | SetZet",
  },
  description:
    "SetZet is a strategy-led web design and development agency helping brands launch high-converting, SEO-ready digital experiences.",
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
    title: "SetZet | Web Design & Development Agency",
    description:
      "Strategy, design, and development for modern brands that need high-performance websites and digital products.",
    url: "/",
    siteName: "SetZet",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SetZet | Web Design & Development Agency",
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
    "@type": "Organization",
    name: "SetZet",
    url: "https://setzet.studio",
    email: "hello@setzet.studio",
    telephone: "+91-9128376231",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressCountry: "IN",
    },
    sameAs: [],
  };

  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${montserrat.variable} ${playfair.variable} antialiased font-sans overflow-x-hidden`}
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
