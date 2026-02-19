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
  title: "Setzet",
  description: "A strategy-led digital experience studio building brands that command attention.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${montserrat.variable} ${playfair.variable} antialiased font-sans overflow-x-hidden`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
