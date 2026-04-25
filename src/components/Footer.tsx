"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ClientTime = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="inline-block min-w-[100px] sm:min-w-[140px]">{time || "—:—"}</span>;
};

const Marquee = () => {
  return (
    <div className="relative flex overflow-x-hidden border-b border-t border-[#0A2540]/10 bg-[#FAFAFA] py-4 sm:py-6 mt-12 sm:mt-16">
      <style>{`
        @keyframes custom-marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-custom-marquee {
          animation: custom-marquee 25s linear infinite;
          will-change: transform;
        }
      `}</style>
      <div className="flex w-max shrink-0 items-center animate-custom-marquee hover:[animation-play-state:paused]">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="flex w-max shrink-0 items-center justify-around gap-8 sm:gap-12 pr-8 sm:pr-12 text-[clamp(1.5rem,3vw,2.5rem)] font-light uppercase tracking-tight text-[#0A2540]"
          >
            <span className="italic text-[#0A2540]/50">Let&apos;s talk</span>
            <span className="text-[#007BFF]">✦</span>
            <span className="font-medium text-[#0A2540]">Setzet Agency</span>
            <span className="text-[#007BFF]">✦</span>
            <span className="italic text-[#0A2540]/50">Let&apos;s build</span>
            <span className="text-[#007BFF]">✦</span>
            <span className="font-medium text-[#0A2540]">Digital Studio</span>
            <span className="text-[#007BFF]">✦</span>
            <span className="italic text-[#0A2540]/50">Creative</span>
            <span className="text-[#007BFF]">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAFAFA] text-[#0A2540] overflow-hidden flex flex-col">
      <Marquee />

      {/* Grid Layout Container (Swiss/Brutalist Agency Style) */}
      <div className="mx-auto w-full max-w-[1600px] bg-[#0A2540]/10 flex flex-col xl:grid xl:grid-cols-12 gap-y-[1px] xl:gap-[1px] border-b border-[#0A2540]/10 xl:border-x">
        
        {/* Left Col - Huge Contact Box */}
        <div className="xl:col-span-7 bg-white p-6 sm:p-10 xl:p-12 flex flex-col justify-center gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 sm:mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-[#0A2540]/40">
              Start a project
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-heading leading-[1.1] tracking-tight text-[#0A2540] max-w-2xl">
              Ready to create something <br className="hidden sm:block" />
              <span className="italic font-light text-[#007BFF]">extraordinary</span> together?
            </h2>
            <p className="mt-6 text-sm sm:text-base text-[#0A2540]/70 max-w-md font-medium leading-relaxed">
              We partner with ambitious brands to design, engineer, and scale high-performance digital products. Leave the technical heavy-lifting to us.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-col items-start gap-4 sm:gap-6">
              <a
                href="mailto:wasim@setzet.com"
                className="group inline-flex items-center gap-4 sm:gap-6"
              >
                <span className="relative pb-1 text-[clamp(1.5rem,3vw,2.5rem)] font-light tracking-tight text-[#0A2540]">
                  wasim@setzet.com
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#0A2540]/10"></span>
                  <span className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-[#007BFF] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100"></span>
                </span>
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-[#0A2540]/20 bg-white text-[#0A2540] transition-colors duration-500 group-hover:border-[#007BFF] group-hover:bg-[#007BFF] group-hover:text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-500 group-hover:-rotate-45"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Col Container - Links and Time */}
        <div className="xl:col-span-5 bg-[#0A2540]/10 flex flex-col gap-[1px]">
          
          {/* Top Half Split: Sitemap and Social */}
          <div className="flex flex-col sm:flex-row gap-[1px]">
            {/* Sitemap Box */}
            <div className="flex-1 bg-white p-6 lg:p-8 flex flex-col">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#0A2540]/40">
                Sitemap
              </p>
              <div className="flex flex-col">
                {[
                  { name: "Home", href: "/" },
                  { name: "About", href: "/about" },
                  { name: "Services", href: "/services" },
                  { name: "Work", href: "/work" },
                  { name: "Product", href: "/product" },
                  { name: "Blogs", href: "/blogs" },
                  { name: "Contact", href: "/#contact" },
                ].map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="group/link flex items-center justify-between border-b border-[#0A2540]/5 py-2 transition-colors hover:border-[#0A2540]/20"
                  >
                    <span className="text-sm font-medium text-[#0A2540]/80 transition-colors group-hover/link:text-[#007BFF]">
                      {link.name}
                    </span>
                    <span className="text-[#007BFF] opacity-0 -translate-x-4 transition-all duration-300 group-hover/link:translate-x-0 group-hover/link:opacity-100">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Socials Box */}
            <div className="flex-1 bg-white p-6 lg:p-8 flex flex-col">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#0A2540]/40">
                Connect
              </p>
              <div className="flex flex-col">
                {[
                  { name: "LinkedIn", href: "https://www.linkedin.com/company/setzet/" },
                  { name: "Instagram", href: "https://www.instagram.com/setzet.in/" },
                  { name: "X / Twitter", href: "https://x.com/setzetin" },
                  { name: "Dribbble", href: "#" },
                ].map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link flex items-center justify-between border-b border-[#0A2540]/5 py-2 transition-colors hover:border-[#0A2540]/20"
                  >
                    <span className="text-sm font-medium text-[#0A2540]/80 transition-colors group-hover/link:text-[#007BFF]">
                      {link.name}
                    </span>
                    <span className="text-[#007BFF] opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover/link:translate-x-0 group-hover/link:translate-y-0 group-hover/link:opacity-100">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Half: Address and Time */}
          <div className="bg-white p-6 lg:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6 h-full">
             <div>
               <Link href="/" className="mb-6 inline-block opacity-80 transition-opacity hover:opacity-100">
                 <img src="/setzet-nav-logoo.png" alt="Setzet Logo" className="h-8 sm:h-10 xl:h-12 w-auto object-contain" />
               </Link>

               <div>
                  <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.25em] text-[#0A2540]/40">
                     Local Time HQ
                  </p>
                  <div className="flex items-center gap-3">
                     <p className="text-2xl sm:text-3xl font-light tracking-tight text-[#0A2540]">
                        <ClientTime />
                     </p>
                     <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                     </span>
                  </div>
                  <p className="mt-1 text-xs font-medium text-[#0A2540]/60">
                     Noida, India
                  </p>
               </div>
             </div>
             
             <div className="hidden lg:block text-right pb-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#0A2540]/30 mb-2">Build Better.</p>
                <p className="text-sm font-medium text-[#0A2540]/50 max-w-[140px] leading-relaxed">
                   Delivering premium experiences globally.
                </p>
             </div>
          </div>
        </div>
      </div>

      {/* Thin Bottom Bar */}
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center justify-between gap-4 py-6 px-6 sm:flex-row lg:px-12 xl:px-0 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-[#0A2540]/50">
        <p>© {new Date().getFullYear()} Setzet Agency.</p>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="transition-colors hover:text-[#0A2540]">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-[#0A2540]">
            Terms & Conditions
          </Link>
          <a href="#top" className="transition-colors hover:text-[#0A2540]">
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
