"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import HeroOrb from "../components/HeroOrb";
import AboutSection from "../components/AboutSection";
import Image from "next/image";
import FeaturedProjects from "../components/FeaturedProjects";
import Testimonials from "../components/Testimonials";

const industries = ["D2C", "SaaS", "AI-focused", "Technology"];
const heroLines = [
  "Helping our partners",
  "build original brands",
  "that shine.",
];



export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  const smoothHeroProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 28,
    mass: 0.5,
  });

  // Ordered reveal: heading -> tagline -> button, then hold while section stays pinned.
  const headingOpacity = useTransform(smoothHeroProgress, [0.03, 0.18], [0, 1]);
  const headingY = useTransform(smoothHeroProgress, [0.03, 0.18], [45, 0]);

  const descOpacity = useTransform(smoothHeroProgress, [0.2, 0.36], [0, 1]);
  const descY = useTransform(smoothHeroProgress, [0.2, 0.36], [30, 0]);

  const btnOpacity = useTransform(smoothHeroProgress, [0.38, 0.52], [0, 1]);
  const btnY = useTransform(smoothHeroProgress, [0.38, 0.52], [30, 0]);

  const [industryIndex, setIndustryIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndustryIndex((prev) => (prev + 1) % industries.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const animatedElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-animate]")
    );
    const groupedElements = new Map<string, HTMLElement[]>();

    animatedElements.forEach((element, index) => {
      const groupKey = element.dataset.animate?.trim() || `group-${index}`;
      const existing = groupedElements.get(groupKey) ?? [];
      existing.push(element);
      groupedElements.set(groupKey, existing);
    });

    if (prefersReducedMotion) {
      animatedElements.forEach((element) => element.classList.add("is-visible"));
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
      }
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
      <header className="fixed top-0 z-30 w-full border-b border-black/5 bg-white/90 text-[10px] uppercase tracking-[0.35em] text-black/60 backdrop-blur sm:text-xs">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-10">
          <span className="text-black">SetZet</span>
          <nav className="hidden items-center gap-8 text-[11px] font-semibold text-black/70 md:flex">
            <a className="transition hover:text-black" href="#about">
              About
            </a>
            <a className="transition hover:text-black" href="#services">
              Services
            </a>
            <a className="transition hover:text-black" href="#work">
              Work
            </a>
            <a className="transition hover:text-black" href="#testimonials">
              Testimonials
            </a>
            <a className="transition hover:text-black" href="#contact">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              className="hidden rounded-full border border-black/20 px-5 py-2.5 text-[11px] font-semibold text-black transition-all duration-300 hover:border-black hover:bg-black hover:text-white md:inline-flex"
              href="#contact"
            >
              Start a Project
            </a>
            <button
              className="inline-flex h-10 items-center justify-center rounded-full border border-black/20 px-4 text-[11px] font-semibold text-black transition hover:border-black md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span className="mr-2">{menuOpen ? "Close" : "Menu"}</span>
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-full bg-black transition-transform duration-300 ${menuOpen ? "translate-y-[5px] rotate-45" : ""
                    }`}
                />
                <span
                  className={`absolute left-0 top-[5px] h-[2px] w-full bg-black transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"
                    }`}
                />
                <span
                  className={`absolute left-0 top-[10px] h-[2px] w-full bg-black transition-transform duration-300 ${menuOpen ? "-translate-y-[5px] -rotate-45" : ""
                    }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU PANEL (SLIDE FROM CORNER) */}
      <div
        id="mobile-menu"
        className={`fixed right-4 top-16 z-40 w-[min(240px,calc(100vw-2rem))] origin-top-right rounded-2xl border border-black/10 bg-white p-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-black/70 shadow-lg transition-all duration-300 md:hidden ${menuOpen
          ? "scale-100 translate-y-0 opacity-100"
          : "pointer-events-none scale-95 -translate-y-2 opacity-0"
          }`}
      >
        <a className="block py-2 transition hover:text-black" href="#about">
          About
        </a>
        <a className="block py-2 transition hover:text-black" href="#services">
          Services
        </a>
        <a className="block py-2 transition hover:text-black" href="#work">
          Work
        </a>
        <a className="block py-2 transition hover:text-black" href="#testimonials">
          Testimonials
        </a>
        <a className="block py-2 transition hover:text-black" href="#contact">
          Contact
        </a>
      </div>

      <div className="relative z-10 min-h-screen">
        {/* HERO SECTION */}
        <section
          ref={heroRef}
          className="relative min-h-[320vh]"
        >
          <div className="sticky top-0 h-screen w-full overflow-hidden">
            <div className="absolute inset-0 -z-10 flex items-center justify-center" aria-hidden="true">
              <div className="aspect-square w-[min(74vw,620px)] opacity-[0.2] sm:w-[min(58vw,620px)]">
                <HeroOrb scrollYProgress={scrollYProgress} />
              </div>
            </div>

            {/* HERO CONTENT */}
            <div className="mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-center px-4 sm:px-8 lg:px-10">
              <div className="w-full max-w-4xl text-center">
                <motion.h1
                  style={{ opacity: headingOpacity, y: headingY }}
                  className="text-center text-5xl font-bold leading-[0.9] tracking-tighter sm:text-7xl lg:text-8xl"
                >
                  {heroLines.map((line) => (
                    <span key={line} className="block overflow-hidden">
                      <span className="block">
                        {line}
                      </span>
                    </span>
                  ))}
                </motion.h1>

                <motion.div
                  style={{ opacity: descOpacity, y: descY }}
                  className="mx-auto mt-6 max-w-xl text-center text-base leading-7 text-black/70 sm:text-lg"
                >
                  <p>
                    A strategy-led design studio specializing in laying down the
                    awesome sauce for{" "}
                    <span
                      key={industries[industryIndex]}
                      className="rotate-word font-semibold text-black"
                    >
                      {industries[industryIndex]}
                    </span>{" "}
                    brands.
                  </p>
                </motion.div>

                <motion.div
                  style={{ opacity: btnOpacity, y: btnY }}
                  className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-medium"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="rounded-full bg-black px-8 py-4 text-white font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
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
              We build distinctive digital identities that feel effortless to use
              and hard to forget. Strategy, design, and engineering in one tight
              loop.
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
                  High-end layouts, typography, and motion that communicate brand
                  and build trust.
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
                  Fast, modern builds with clean code, SEO, and performance baked
                  in.
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
                  Cross-platform apps built for speed, reliability, and a polished
                  user experience.
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
                  Custom systems that connect teams, automate workflows, and keep
                  data organized.
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
                strategy and ship a brand experience that feels unmistakably yours.
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
        <footer className="mx-auto w-full max-w-6xl px-4 pb-10 pt-4 sm:px-8 lg:px-10">
          <div className="overflow-hidden rounded-[32px] border border-black/10 bg-white/95">
            <div
              className="grid gap-8 border-b border-black/10 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.1fr_0.9fr]"
              data-animate="footer"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-black/45">
                  SetZet Studio
                </p>
                <h3 className="mt-4 text-[clamp(2rem,6vw,4.6rem)] font-semibold leading-[0.9] tracking-tight">
                  A DIGITAL
                  <br />
                  MANIFESTO
                </h3>
                <p className="mt-5 max-w-xl text-sm leading-7 text-black/70 sm:text-base">
                  We design and build expressive digital systems for brands that
                  choose clarity over noise.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.26em] text-black/45">Navigate</p>
                  <div className="mt-3 flex flex-col gap-2 text-sm text-black/75">
                    <a className="transition hover:text-black" href="#about">About</a>
                    <a className="transition hover:text-black" href="#services">Services</a>
                    <a className="transition hover:text-black" href="#work">Work</a>
                    <a className="transition hover:text-black" href="#testimonials">Testimonials</a>
                    <a className="transition hover:text-black" href="#contact">Contact</a>
                  </div>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.26em] text-black/45">Reach</p>
                  <div className="mt-3 flex flex-col gap-2 text-sm text-black/75">
                    <a className="transition hover:text-black" href="mailto:hello@setzet.studio">hello@setzet.studio</a>
                    <a className="transition hover:text-black" href="tel:+14155550128">+91-9128376231</a>
                    <p>Noida, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="grid gap-4 px-6 py-5 sm:px-8 md:grid-cols-[1fr_auto_auto] md:items-center"
              data-animate="footer"
            >
              <p className="text-[10px] uppercase tracking-[0.24em] text-black/45">(c) 2026 SetZet Studio</p>

              <div className="flex items-center gap-2">
                <a aria-label="Instagram" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/15 text-black/70 transition hover:border-black/35 hover:text-black">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
                </a>
                <a aria-label="LinkedIn" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/15 text-black/70 transition hover:border-black/35 hover:text-black">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M6.8 8.9h3.1V20H6.8zM8.3 3.9a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6zM12.3 8.9h3v1.5h.1c.4-.8 1.4-1.8 3-1.8 3.2 0 3.8 2.1 3.8 4.9V20h-3.1v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V20h-3.1z" /></svg>
                </a>
                <a aria-label="X" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/15 text-black/70 transition hover:border-black/35 hover:text-black">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M18.2 3h2.9l-6.4 7.3L22 21h-5.7l-4.5-5.9L6.6 21H3.7l6.8-7.8L2 3h5.8l4 5.3zM17.2 19.3h1.6L5.9 4.6H4.2z" /></svg>
                </a>
                <a aria-label="Dribbble" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/15 text-black/70 transition hover:border-black/35 hover:text-black">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M6 7.6c2.6 1.5 7.8 2 11.9 1.1" /><path d="M8.2 18.7c1.4-2.5 4-6 8.8-7.8" /><path d="M10.2 4.1c2 2.7 4.6 7.7 5.7 13.6" /></svg>
                </a>
              </div>

              <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.24em] text-black/45">
                <a className="transition hover:text-black" href="#">Privacy</a>
                <a className="transition hover:text-black" href="#">Terms</a>
                <a className="transition hover:text-black" href="#top">Top</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
