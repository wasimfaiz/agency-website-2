"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto w-full max-w-6xl px-4 pb-10 pt-4 sm:px-8 lg:px-10"
    >
      <div className="overflow-hidden rounded-[32px] border border-[#0A2540]/10 bg-white text-[#0A2540] shadow-sm">
        <div className="grid gap-8 border-b border-[#0A2540]/10 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-[#0A2540]/10 bg-white/80 px-3 py-2 shadow-sm">
              <div className="relative h-9 w-9 overflow-hidden rounded-full bg-white p-1 ring-1 ring-[#0A2540]/8">
                <Image
                  src="/setzet-logo.png"
                  alt="Setzet logo"
                  fill
                  className="object-contain"
                  sizes="36px"
                />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#007BFF]">
                Setzet
              </p>
            </div>
            <h3 className="mt-4 text-[clamp(2rem,6vw,4.6rem)] font-extrabold font-heading leading-[0.9] tracking-tight text-[#0A2540]">
              A DIGITAL
              <br />
              MANIFESTO
            </h3>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#0A2540]/70 sm:text-base font-medium">
              We design and build expressive digital systems for brands that
              choose clarity over noise.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#0A2540]/50">
                Navigate
              </p>
              <div className="mt-3 flex flex-col gap-2 text-sm text-[#0A2540]/80 font-medium">
                <Link className="transition hover:text-[#007BFF]" href="/">
                  Home
                </Link>
                <Link className="transition hover:text-[#007BFF]" href="/about">
                  About
                </Link>
                <Link className="transition hover:text-[#007BFF]" href="/services">
                  Services
                </Link>
                <Link className="transition hover:text-[#007BFF]" href="/work">
                  Work
                </Link>
                <Link className="transition hover:text-[#007BFF]" href="/product">
                  Product
                </Link>
                <Link className="transition hover:text-[#007BFF]" href="/blogs">
                  Blogs
                </Link>
                <Link className="transition hover:text-[#007BFF]" href="/#contact">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#0A2540]/50">
                Reach
              </p>
              <div className="mt-3 flex flex-col gap-2 text-sm text-[#0A2540]/80 font-medium">
                <a
                  className="transition hover:text-[#007BFF]"
                  href="mailto:info@setzet.com"
                >
                  info@setzet.com
                </a>
                <a
                  className="transition hover:text-[#007BFF]"
                  href="tel:+919128376231"
                >
                  +91-9128376231
                </a>
                <p>Noida, India</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4 border-t border-[#0A2540]/10 px-6 py-5 sm:px-8 md:grid-cols-[1fr_auto_auto] md:items-center">
          <p className="text-[10px] uppercase font-bold tracking-[0.24em] text-[#0A2540]/50">
            (c) 2026 Setzet
          </p>

          <div className="flex items-center gap-2">
            <a
              aria-label="Instagram"
              href="https://www.instagram.com/setzet.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#0A2540]/20 text-[#0A2540]/70 transition hover:border-[#007BFF] hover:text-[#007BFF] hover:bg-[#007BFF]/5"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-none stroke-current"
                strokeWidth="1.8"
              >
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/company/setzet/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#0A2540]/20 text-[#0A2540]/70 transition hover:border-[#007BFF] hover:text-[#007BFF] hover:bg-[#007BFF]/5"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M6.8 8.9h3.1V20H6.8zM8.3 3.9a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6zM12.3 8.9h3v1.5h.1c.4-.8 1.4-1.8 3-1.8 3.2 0 3.8 2.1 3.8 4.9V20h-3.1v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V20h-3.1z" />
              </svg>
            </a>
            <a
              aria-label="X"
              href="https://x.com/setzetin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#0A2540]/20 text-[#0A2540]/70 transition hover:border-[#007BFF] hover:text-[#007BFF] hover:bg-[#007BFF]/5"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M18.2 3h2.9l-6.4 7.3L22 21h-5.7l-4.5-5.9L6.6 21H3.7l6.8-7.8L2 3h5.8l4 5.3zM17.2 19.3h1.6L5.9 4.6H4.2z" />
              </svg>
            </a>
            <a
              aria-label="Dribbble"
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#0A2540]/20 text-[#0A2540]/70 transition hover:border-[#007BFF] hover:text-[#007BFF] hover:bg-[#007BFF]/5"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-none stroke-current"
                strokeWidth="1.8"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M6 7.6c2.6 1.5 7.8 2 11.9 1.1" />
                <path d="M8.2 18.7c1.4-2.5 4-6 8.8-7.8" />
                <path d="M10.2 4.1c2 2.7 4.6 7.7 5.7 13.6" />
              </svg>
            </a>
          </div>

          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[#0A2540]/50">
            <Link className="transition hover:text-[#007BFF]" href="/privacy">
              Privacy
            </Link>
            <Link className="transition hover:text-[#007BFF]" href="/terms">
              Terms
            </Link>
            <a className="transition hover:text-[#007BFF]" href="#top">
              Top
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
