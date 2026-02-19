"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import AboutSection from "../components/AboutSection";
import Image from "next/image";
import FeaturedProjects from "../components/FeaturedProjects";
import Testimonials from "../components/Testimonials";
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
        isScrolled ? "text-black/70" : "text-white/80"
      }`}
    >
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
        {children}
      </span>
      <span
        className={`absolute left-0 top-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0 ${
          isScrolled ? "text-black font-bold" : "text-white font-bold"
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
    <main id="top" className="noise-bg min-h-screen bg-white text-black">
      {/* NAVIGATION BAR */}
      <header
        className={`fixed top-0 z-30 w-full text-[10px] uppercase tracking-[0.35em] transition-all duration-300 sm:text-xs ${
          isScrolled
            ? "bg-white/90 text-black/60 shadow-sm backdrop-blur py-3"
            : "bg-transparent text-white py-6"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-5 sm:px-10">
          <span className={`font-bold transition-colors duration-300 ${isScrolled ? "text-black" : "text-white"}`}>
            SetZet
          </span>
          <nav
            className={`hidden items-center gap-8 text-[11px] font-semibold transition-colors duration-300 md:flex ${
              isScrolled ? "text-black/70" : "text-white/80"
            }`}
          >
            <NavLink href="/about" isScrolled={isScrolled}>
              About
            </NavLink>
            <NavLink href="#services" isScrolled={isScrolled}>
              Services
            </NavLink>
            <NavLink href="#work" isScrolled={isScrolled}>
              Work
            </NavLink>
            <NavLink href="#testimonials" isScrolled={isScrolled}>
              Testimonials
            </NavLink>
            <NavLink href="#contact" isScrolled={isScrolled}>
              Contact
            </NavLink>
          </nav>
          <div className="flex items-center gap-3">
            <a
              className={`hidden rounded-full border px-5 py-2.5 text-[11px] font-semibold transition-all duration-300 md:inline-flex ${
                isScrolled
                  ? "border-black/20 text-black hover:bg-black hover:text-white"
                  : "border-white/30 text-white hover:bg-white hover:text-black"
              }`}
              href="#contact"
            >
              Start a Project
            </a>
            <button
              className={`inline-flex h-10 items-center justify-center rounded-full border px-4 text-[11px] font-semibold transition md:hidden ${
                isScrolled
                  ? "border-black/20 text-black hover:border-black"
                  : "border-white/30 text-white hover:border-white"
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
                  } ${isScrolled ? "bg-black" : "bg-white"}`}
                />
                <span
                  className={`absolute left-0 top-[5px] h-[2px] w-full transition-opacity duration-300 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  } ${isScrolled ? "bg-black" : "bg-white"}`}
                />
                <span
                  className={`absolute left-0 top-[10px] h-[2px] w-full transition-transform duration-300 ${
                    menuOpen ? "-translate-y-[5px] -rotate-45" : ""
                  } ${isScrolled ? "bg-black" : "bg-white"}`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU PANEL (SLIDE FROM CORNER) */}
      <div
        id="mobile-menu"
        className={`fixed right-4 top-16 z-40 w-[min(240px,calc(100vw-2rem))] origin-top-right rounded-2xl border border-black/10 bg-white p-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-black/70 shadow-lg transition-all duration-300 md:hidden ${
          menuOpen
            ? "scale-100 translate-y-0 opacity-100"
            : "pointer-events-none scale-95 -translate-y-2 opacity-0"
        }`}
      >
        <a className="block py-2 transition hover:text-black" href="/about">
          About
        </a>
        <a className="block py-2 transition hover:text-black" href="#services">
          Services
        </a>
        <a className="block py-2 transition hover:text-black" href="#work">
          Work
        </a>
        <a
          className="block py-2 transition hover:text-black"
          href="#testimonials"
        >
          Testimonials
        </a>
        <a className="block py-2 transition hover:text-black" href="#contact">
          Contact
        </a>
      </div>

      <div className="relative z-10 min-h-screen">
        {/* HERO SECTION */}
        <section className="relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0 h-full w-full">
            {/* Video Background */}
            <div className="absolute inset-0 z-0 bg-black">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="/videos/hero/hero1.mp4?v=20260218" type="video/mp4" />
              </video>
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/85" />
            </div>

            {/* HERO CONTENT */}
            <div className="relative z-10 mx-auto flex h-full w-full max-w-[90%] flex-col items-center justify-center text-white">
              <div className="w-full text-center">
                <motion.h1
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="text-center text-[clamp(2.5rem,7vw,6.5rem)] font-extrabold leading-[1.1] tracking-tight drop-shadow-md"
                >
                  <span className="block">Helping our partners</span>
                  <span className="block mt-4">
                    build{" "}
                    <span className="relative inline-block px-4 mx-2">
                       <svg
                        className="absolute left-0 top-0 -z-10 h-[130%] w-[120%] -translate-x-[10%] -translate-y-[15%] text-red-600 opacity-90"
                        viewBox="0 0 355 135"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                         <path 
                           d="M15 65C15 65 35 25 105 20C175 15 295 15 325 55C355 95 315 115 195 120C75 125 35 115 15 85C-5 55 55 35 95 30" 
                           stroke="currentColor" 
                           strokeWidth="8" 
                           strokeLinecap="round" 
                           strokeLinejoin="round"
                         />
                      </svg>
                      <span className="relative z-10 font-serif italic text-white">
                        original
                      </span>
                    </span>{" "}
                    brands
                  </span>
                  <span className="block">that shine.</span>
                </motion.h1>

                <motion.div
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="mx-auto mt-6 max-w-xl text-center text-base leading-7 text-white/80 sm:text-lg"
                >
                  <p>
                    A strategy-led design studio specializing in laying down the
                    awesome sauce for{" "}
                    <span
                      key={industries[industryIndex]}
                      className="rotate-word font-semibold text-white"
                    >
                      {industries[industryIndex]}
                    </span>{" "}
                    brands.
                  </p>
                </motion.div>

                <motion.div
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-medium"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="rounded-full bg-white px-8 py-4 text-black font-medium shadow-lg hover:shadow-xl hover:bg-white/90 transition-all duration-300"
                  >
                    Start a Project
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <AboutSection />

        {/* SERVICES SECTION */}
        <section
          id="services"
          className="mx-auto w-full max-w-6xl px-4 pb-24 pt-8 sm:px-8 sm:pb-28 lg:px-10 lg:pb-32"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p
                className="text-xs uppercase tracking-[0.35em] text-black/60"
                data-animate="services"
              >
                Services
              </p>
              <h2
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
                data-animate="services"
              >
                A lean stack for
                <br />
                modern brands.
              </h2>
            </div>
            <p
              className="max-w-xl text-base leading-7 text-black/70 sm:text-lg"
              data-animate="services"
            >
              We build distinctive digital identities that feel effortless to
              use and hard to forget. Strategy, design, and engineering in one
              tight loop.
            </p>
          </div>

          <div className="mt-10 divide-y divide-black/10 border-y border-black/10">
            <div
              className="group relative grid gap-6 py-8 md:grid-cols-[0.2fr_0.4fr_1fr] md:items-center"
              data-animate="services"
            >
              <div className="pointer-events-none absolute right-6 top-1/2 hidden w-56 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 lg:block">
                <div className="relative aspect-[4/3] w-full rounded-2xl border border-black/10 bg-white p-2">
                  <Image
                    src="/ui-design.png"
                    alt="UI UX visual"
                    fill
                    sizes="224px"
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                01
              </p>
              <h3 className="text-2xl font-semibold">UI/UX</h3>
              <div className="flex flex-col gap-3 text-base leading-7 text-black/70">
                <p>
                  User journeys, wireframes, and interfaces that feel effortless
                  and convert with clarity.
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                  Research - Flows - Prototypes
                </p>
              </div>
            </div>

            <div
              className="group relative grid gap-6 py-8 md:grid-cols-[0.2fr_0.4fr_1fr] md:items-center"
              data-animate="services"
            >
              <div className="pointer-events-none absolute right-6 top-1/2 hidden w-56 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 lg:block">
                <div className="relative aspect-[4/3] w-full rounded-2xl border border-black/10 bg-white p-2">
                  <Image
                    src="/web-design.png"
                    alt="Web design visual"
                    fill
                    sizes="224px"
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                02
              </p>
              <h3 className="text-2xl font-semibold">Web Design</h3>
              <div className="flex flex-col gap-3 text-base leading-7 text-black/70">
                <p>
                  High-end layouts, typography, and motion that communicate
                  brand and build trust.
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                  Art Direction - UI - Motion
                </p>
              </div>
            </div>

            <div
              className="group relative grid gap-6 py-8 md:grid-cols-[0.2fr_0.4fr_1fr] md:items-center"
              data-animate="services"
            >
              <div className="pointer-events-none absolute right-6 top-1/2 hidden w-56 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 lg:block">
                <div className="relative aspect-[4/3] w-full rounded-2xl border border-black/10 bg-white p-2">
                  <Image
                    src="/web-development.jpg"
                    alt="Web development visual"
                    fill
                    sizes="224px"
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                03
              </p>
              <h3 className="text-2xl font-semibold">Web Development</h3>
              <div className="flex flex-col gap-3 text-base leading-7 text-black/70">
                <p>
                  Fast, modern builds with clean code, SEO, and performance
                  baked in.
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                  Next.js - SEO - CMS
                </p>
              </div>
            </div>

            <div
              className="group relative grid gap-6 py-8 md:grid-cols-[0.2fr_0.4fr_1fr] md:items-center"
              data-animate="services"
            >
              <div className="pointer-events-none absolute right-6 top-1/2 hidden w-56 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 lg:block">
                <div className="relative aspect-[4/3] w-full rounded-2xl border border-black/10 bg-white p-2">
                  <Image
                    src="/mobile-app-development.png"
                    alt="App development visual"
                    fill
                    sizes="224px"
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                04
              </p>
              <h3 className="text-2xl font-semibold">App Development</h3>
              <div className="flex flex-col gap-3 text-base leading-7 text-black/70">
                <p>
                  Cross-platform apps built for speed, reliability, and a
                  polished user experience.
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                  iOS - Android - QA
                </p>
              </div>
            </div>

            <div
              className="group relative grid gap-6 py-8 md:grid-cols-[0.2fr_0.4fr_1fr] md:items-center"
              data-animate="services"
            >
              <div className="pointer-events-none absolute right-6 top-1/2 hidden w-56 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 lg:block">
                <div className="relative aspect-[4/3] w-full rounded-2xl border border-black/10 bg-white p-2">
                  <Image
                    src="/crm.png"
                    alt="CRM ERP visual"
                    fill
                    sizes="224px"
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                05
              </p>
              <h3 className="text-2xl font-semibold">CRM/ERP</h3>
              <div className="flex flex-col gap-3 text-base leading-7 text-black/70">
                <p>
                  Custom systems that connect teams, automate workflows, and
                  keep data organized.
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                  Dashboards - Automation - Integrations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <FeaturedProjects />

        {/* TESTIMONIALS SECTION */}
        <Testimonials />

        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="mx-auto w-full max-w-6xl px-4 pb-20 pt-6 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28"
        >
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div
              className="relative overflow-hidden rounded-[30px] border border-black/10 bg-white/85 p-7 sm:p-9"
              data-animate="contact"
            >
              <div className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full border border-black/10" />
              <p className="text-xs uppercase tracking-[0.35em] text-black/60">
                Contact Us
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Let&apos;s build
                <br />
                your next
                <br />
                signature launch.
              </h2>
              <p className="mt-6 max-w-md text-base leading-7 text-black/70">
                Share your vision, timeline, and goals. We&apos;ll map a focused
                strategy and ship a brand experience that feels unmistakably
                yours.
              </p>

              <div className="mt-10 space-y-4 text-sm">
                <p className="border-t border-black/10 pt-4 text-black/75">
                  hello@setzet.studio
                </p>
                <p className="border-t border-black/10 pt-4 text-black/75">
                  +91-9128376231
                </p>
                <p className="border-t border-black/10 pt-4 text-black/75">
                  Noida, India.
                </p>
              </div>
            </div>

            <form
              className="relative overflow-hidden rounded-[30px] border border-black/10 bg-white/80 p-6 sm:p-8"
              data-animate="contact"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-black/55">
                    Name
                  </span>
                  <input
                    className="h-12 rounded-xl border border-black/15 bg-white px-4 text-sm text-black outline-none transition focus:border-black/35"
                    placeholder="Your full name"
                    type="text"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-black/55">
                    Email
                  </span>
                  <input
                    className="h-12 rounded-xl border border-black/15 bg-white px-4 text-sm text-black outline-none transition focus:border-black/35"
                    placeholder="you@company.com"
                    type="email"
                  />
                </label>
              </div>

              <label className="mt-4 flex flex-col gap-2">
                <span className="text-[11px] uppercase tracking-[0.25em] text-black/55">
                  Project Type
                </span>
                <input
                  className="h-12 rounded-xl border border-black/15 bg-white px-4 text-sm text-black outline-none transition focus:border-black/35"
                  placeholder="Brand site, app, redesign..."
                  type="text"
                />
              </label>

              <label className="mt-4 flex flex-col gap-2">
                <span className="text-[11px] uppercase tracking-[0.25em] text-black/55">
                  Project Brief
                </span>
                <textarea
                  className="min-h-[150px] rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-black/35"
                  placeholder="Tell us about your goals, timeline, and expectations."
                />
              </label>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-black/50">
                  Response within 24 hours
                </p>
                <button
                  className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/85"
                  type="submit"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </div>
    </main>
  );
}
