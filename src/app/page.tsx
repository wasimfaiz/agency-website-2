"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import AboutSection from "../components/AboutSection";
import Image from "next/image";
import FeaturedProjects from "../components/FeaturedProjects";
import ServicesSection from "../components/ServicesSection";
import ProcessSection from "../components/ProcessSection";
import TestimonialSection from "../components/TestimonialSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

const industries = ["D2C", "SaaS", "AI-focused", "Technology"];

const NavLink = ({
  href,
  children,
  isScrolled,
}: {
  href: string;
  children: string;
  isScrolled: boolean;
}) => {
  return (
    <a
      href={href}
      className={`group relative overflow-hidden inline-block h-[1.2em] font-semibold transition-colors duration-300 ${
        isScrolled ? "text-[#0A2540]/70 hover:text-[#007BFF]" : "text-[#0A2540]/70 hover:text-[#007BFF]"
      }`}
    >
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
        {children}
      </span>
      <span
        className={`absolute left-0 top-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0 ${
          isScrolled ? "text-[#007BFF] font-bold" : "text-[#007BFF] font-bold"
        }`}
      >
        {children}
      </span>
    </a>
  );
};

export default function Home() {
  // Standard reveal animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number],
        delay: custom * 0.2,
      },
    }),
  };

  const [industryIndex, setIndustryIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndustryIndex((prev) => (prev + 1) % industries.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const animatedElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-animate]"),
    );
    const groupedElements = new Map<string, HTMLElement[]>();

    animatedElements.forEach((element, index) => {
      const groupKey = element.dataset.animate?.trim() || `group-${index}`;
      const existing = groupedElements.get(groupKey) ?? [];
      existing.push(element);
      groupedElements.set(groupKey, existing);
    });

    if (prefersReducedMotion) {
      animatedElements.forEach((element) =>
        element.classList.add("is-visible"),
      );
      return;
    }

    const timeoutIds: number[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          const groupKey = element.dataset.animate?.trim();
          if (!groupKey) return;

          const group = groupedElements.get(groupKey);
          if (!group) return;

          group.forEach((groupElement, itemIndex) => {
            const delay = groupElement.dataset.animateDelay
              ? Number(groupElement.dataset.animateDelay)
              : itemIndex * 130;

            const timeoutId = window.setTimeout(() => {
              groupElement.classList.add("is-visible");
            }, delay);

            timeoutIds.push(timeoutId);
          });

          observer.unobserve(element);
          groupedElements.delete(groupKey);
        });
      },
      {
        threshold: 0.24,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    groupedElements.forEach((group) => {
      if (group[0]) observer.observe(group[0]);
    });

    return () => {
      observer.disconnect();
      timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, []);

  return (
    <main id="top" className="noise-bg min-h-screen bg-[#F4F6F8] text-[#0A2540] selection:bg-[#007BFF]/20 selection:text-[#0A2540]">
      {/* NAVIGATION BAR */}
      <header
        className={`fixed top-0 z-30 w-full text-[10px] uppercase tracking-[0.35em] transition-all duration-300 sm:text-xs ${
          isScrolled
            ? "bg-[#F4F6F8]/90 text-[#0A2540]/60 shadow-[0_4px_30px_rgba(10,37,64,0.05)] backdrop-blur-md py-3"
            : "bg-[#F4F6F8]/80 text-[#0A2540]/70 shadow-[0_4px_20px_rgba(10,37,64,0.04)] backdrop-blur-md py-5"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-5 sm:px-10">
          <span className={`font-bold transition-colors duration-300 ${isScrolled ? "text-[#0A2540]" : "text-[#0A2540]"}`}>
            Setzet
          </span>
          <nav
            className={`hidden items-center gap-8 text-[11px] font-semibold transition-colors duration-300 md:flex`}
          >
            <NavLink href="/" isScrolled={isScrolled}>
              Home
            </NavLink>
            <NavLink href="/about" isScrolled={isScrolled}>
              About
            </NavLink>
            <NavLink href="/services" isScrolled={isScrolled}>
              Services
            </NavLink>
            <NavLink href="/work" isScrolled={isScrolled}>
              Work
            </NavLink>
            <NavLink href="/product" isScrolled={isScrolled}>
              Product
            </NavLink>
            <NavLink href="/blogs" isScrolled={isScrolled}>
              Blogs
            </NavLink>
          </nav>
          <div className="flex items-center gap-3">
            <a
              className={`hidden rounded-full border px-5 py-2.5 text-[11px] font-bold transition-all duration-300 md:inline-flex ${
                isScrolled
                  ? "border-[#007BFF] bg-[#007BFF]/10 text-[#007BFF] hover:bg-[#007BFF] hover:text-white"
                  : "border-[#007BFF] bg-[#007BFF]/10 text-[#007BFF] hover:bg-[#007BFF] hover:text-white"
              }`}
              href="#contact"
            >
              Start a Project
            </a>
            <button
              className={`inline-flex h-10 items-center justify-center rounded-full border px-4 text-[11px] font-semibold transition md:hidden ${
                isScrolled
                  ? "border-[#0A2540]/20 text-[#0A2540] hover:border-[#007BFF]"
                  : "border-[#0A2540]/20 text-[#0A2540] hover:border-[#007BFF]"
              }`}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span className="mr-2">{menuOpen ? "Close" : "Menu"}</span>
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-full transition-transform duration-300 ${
                    menuOpen ? "translate-y-[5px] rotate-45" : ""
                  } bg-[#0A2540]`}
                />
                <span
                  className={`absolute left-0 top-[5px] h-[2px] w-full transition-opacity duration-300 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  } bg-[#0A2540]`}
                />
                <span
                  className={`absolute left-0 top-[10px] h-[2px] w-full transition-transform duration-300 ${
                    menuOpen ? "-translate-y-[5px] -rotate-45" : ""
                  } bg-[#0A2540]`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU PANEL (SLIDE FROM CORNER) */}
      <div
        id="mobile-menu"
        className={`fixed right-4 top-16 z-40 w-[min(240px,calc(100vw-2rem))] origin-top-right rounded-2xl border border-[#0A2540]/10 bg-white p-4 text-[11px] font-bold uppercase tracking-[0.3em] text-[#0A2540]/70 shadow-lg transition-all duration-300 md:hidden ${
          menuOpen
            ? "scale-100 translate-y-0 opacity-100"
            : "pointer-events-none scale-95 -translate-y-2 opacity-0"
        }`}
      >
        <a className="block py-2 transition hover:text-[#007BFF]" href="/">
          Home
        </a>
        <a className="block py-2 transition hover:text-[#007BFF]" href="/about">
          About
        </a>
        <a className="block py-2 transition hover:text-[#007BFF]" href="/services">
          Services
        </a>
        <a className="block py-2 transition hover:text-[#007BFF]" href="/work">
          Work
        </a>
        <a className="block py-2 transition hover:text-[#007BFF]" href="/product">
          Product
        </a>
        <a className="block py-2 transition hover:text-[#007BFF]" href="/blogs">
          Blogs
        </a>
      </div>

      <div className="relative z-10 min-h-screen">
        {/* HERO SECTION */}
        <section className="relative h-[75vh] w-full overflow-hidden sm:h-screen">
          <div className="absolute inset-0 h-full w-full">
            {/* Video Background */}
            <div className="absolute inset-0 z-0 bg-[#F4F6F8]">
              <video
                className="h-full w-full object-cover opacity-20 saturate-75"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="/videos/hero/hero1.mp4?v=20260218" type="video/mp4" />
              </video>
              {/* Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(0,123,255,0.10),transparent_50%),linear-gradient(to_bottom,rgba(244,246,248,0.75),rgba(244,246,248,0.95))]" />
            </div>

            {/* HERO CONTENT */}
            <div className="relative z-10 mx-auto flex h-full w-full max-w-[90%] flex-col items-center justify-center text-[#0A2540]">
              <div className="w-full text-center">
                <motion.h1
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="text-center font-heading font-extrabold tracking-tight"
                >
                  {/* Mobile layout: compact 2-line heading */}
                  <span className="block text-[clamp(1.9rem,8vw,3rem)] leading-[1.1] sm:hidden">
                    Web Development Agency —{" "}
                    Building{" "}
                    <em className="not-italic font-serif italic text-[#007BFF]">
                      High-Converting
                    </em>{" "}
                    Websites.
                  </span>

                  {/* Desktop layout: large 3-line heading */}
                  <span className="hidden sm:block text-[clamp(2.8rem,7vw,6.3rem)] leading-[1.08]">
                    <span className="block">Web Development Agency</span>
                    <span className="block mt-3">
                      Building{" "}
                      <span className="inline-block rounded-xl bg-[#007BFF]/10 px-4 py-1 mx-1">
                        <span className="font-serif italic text-[#007BFF]">High-Converting</span>
                      </span>
                    </span>
                    <span className="block">Websites.</span>
                  </span>
                </motion.h1>

                <motion.div
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="mx-auto mt-6 max-w-xl text-center text-base leading-7 text-[#0A2540]/75 sm:text-lg font-medium"
                >
                  <p>
                    A strategy-driven agency building scalable websites and
                    digital platforms for SaaS, B2B, and modern brands.
                  </p>
                </motion.div>

                <motion.div
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-bold"
                >
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="rounded-full bg-[#007BFF] px-8 py-4 text-white font-bold shadow-[0_8px_30px_rgba(0,123,255,0.3)] hover:bg-[#0056b3] hover:shadow-[0_8px_30px_rgba(0,123,255,0.5)] transition-all duration-300"
                    href="#contact"
                  >
                    Start a Project
                  </motion.a>
                  <a
                    href="/work"
                    className="inline-flex items-center rounded-full border border-[#0A2540]/15 bg-white/80 px-8 py-4 font-bold text-[#0A2540] transition hover:border-[#007BFF]/30 hover:text-[#007BFF]"
                  >
                    See Work
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <ServicesSection />

        {/* PROJECTS SECTION */}
        <FeaturedProjects />

        {/* PROCESS SECTION */}
        <ProcessSection />

        {/* TESTIMONIAL SECTION */}
        <TestimonialSection />

        {/* ABOUT SECTION */}
        <AboutSection />

        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="mx-auto w-full max-w-5xl px-4 pb-12 pt-8 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20"
        >
          <div className="mx-auto rounded-[24px] border border-[#0A2540]/10 bg-white p-6 sm:p-10 shadow-sm flex flex-col lg:flex-row gap-10 items-center justify-between" data-animate="contact">
            {/* TEXT SIDE */}
            <div className="lg:w-[45%] text-center lg:text-left">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#007BFF]">
                Contact Us
              </p>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl text-[#0A2540]">
                Ready to Design and Build Something That Performs?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#0A2540]/70 font-medium max-w-md mx-auto lg:mx-0">
                Tell us about your goals and timeline. We partner with ambitious teams to design, develop, and launch scalable digital products that drive measurable growth.
              </p>
            </div>

            {/* FORM SIDE */}
            <form className="lg:w-[55%] w-full flex flex-col gap-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  className="h-11 rounded-xl border border-[#0A2540]/10 bg-[#F4F6F8] px-4 text-xs font-medium text-[#0A2540] outline-none transition focus:border-[#007BFF] focus:bg-white focus:ring-2 focus:ring-[#007BFF]/20"
                  placeholder="Your full name"
                  type="text"
                  required
                />
                <input
                  className="h-11 rounded-xl border border-[#0A2540]/10 bg-[#F4F6F8] px-4 text-xs font-medium text-[#0A2540] outline-none transition focus:border-[#007BFF] focus:bg-white focus:ring-2 focus:ring-[#007BFF]/20"
                  placeholder="you@company.com"
                  type="email"
                  required
                />
              </div>

              <input
                className="h-11 rounded-xl border border-[#0A2540]/10 bg-[#F4F6F8] px-4 text-xs font-medium text-[#0A2540] outline-none transition focus:border-[#007BFF] focus:bg-white focus:ring-2 focus:ring-[#007BFF]/20"
                placeholder="Project Type (Brand site, app, redesign...)"
                type="text"
                required
              />

              <textarea
                className="min-h-[80px] rounded-xl border border-[#0A2540]/10 bg-[#F4F6F8] px-4 py-3 text-xs font-medium text-[#0A2540] outline-none transition focus:border-[#007BFF] focus:bg-white focus:ring-2 focus:ring-[#007BFF]/20 resize-none"
                placeholder="Tell us about your goals, timeline, and expectations."
                required
              />

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#0A2540]/50 text-center sm:text-left">
                  Response within 24 hours
                </p>
                <button
                  className="w-full sm:w-auto rounded-full bg-[#007BFF] px-8 py-3 text-xs font-bold text-white transition-all shadow-[0_8px_30px_rgba(0,123,255,0.3)] hover:bg-[#0056b3] hover:shadow-[0_8px_30px_rgba(0,123,255,0.5)] transform hover:-translate-y-0.5"
                  type="submit"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* FAQ SECTION */}
        <FAQSection />

        {/* FOOTER */}
        <Footer />
      </div>
    </main>
  );
}
