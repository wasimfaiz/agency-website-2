"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../../../components/Footer";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const stats = [
  { value: "18+", label: "Mobile products shipped" },
  { value: "4.8", label: "Average app store rating" },
  { value: "35%", label: "Retention lift after redesigns" },
];

const painPoints = [
  "Users churn before they reach the aha moment.",
  "The UX feels heavy, slow, or inconsistent across screens.",
  "Shipping new features is painful because the codebase is fragile.",
];

const services = [
  {
    title: "Product strategy + roadmap",
    description:
      "Define the core user journey, monetize the right moments, and prioritize the right build.",
  },
  {
    title: "UX/UI design systems",
    description:
      "Design systems and flows that feel premium and are consistent across every screen.",
  },
  {
    title: "iOS development",
    description:
      "Native Swift builds for performance-first, Apple-grade experiences.",
  },
  {
    title: "Android development",
    description:
      "Kotlin builds optimized for speed, stability, and device scale.",
  },
  {
    title: "Cross-platform builds",
    description:
      "React Native or Flutter when you need velocity without compromise.",
  },
  {
    title: "Backend + API engineering",
    description:
      "Secure infrastructure, auth, and scalable APIs that keep the app fast.",
  },
  {
    title: "QA + launch readiness",
    description:
      "Device testing, performance tuning, and release management.",
  },
  {
    title: "ASO + growth analytics",
    description:
      "App store optimization, analytics setup, and retention tracking.",
  },
];

const outcomes = [
  "Clear onboarding flow that gets users to value in minutes",
  "Higher activation and retention with measurable product loops",
  "Performance-optimized builds that load fast and feel smooth",
  "Scalable architecture that supports new features without rewrites",
];

const processSteps = [
  {
    title: "App idea workshop",
    text: "We clarify the core value, target users, and the primary outcome the app must deliver.",
  },
  {
    title: "Product strategy",
    text: "We define the roadmap, success metrics, and the fastest path to a strong MVP.",
  },
  {
    title: "UX + UI system",
    text: "We design the flows and interface system so every screen feels premium and consistent.",
  },
  {
    title: "Engineering build",
    text: "We develop iOS/Android or cross‑platform builds with scalable architecture.",
  },
  {
    title: "Testing + QA",
    text: "We validate performance, edge cases, and device compatibility before release.",
  },
  {
    title: "Launch + growth",
    text: "We publish, track retention, and iterate on the highest‑impact improvements.",
  },
];

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
    <Link
      href={href}
      className={`group relative overflow-hidden inline-block h-[1.2em] font-semibold transition-colors duration-300 ${
        isScrolled
          ? "text-[#0A2540]/70 hover:text-[#007BFF]"
          : "text-[#0A2540]/70 hover:text-[#007BFF]"
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
    </Link>
  );
};

export default function MobileAppDevelopmentPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F6F8] text-[#0A2540] font-sans">
      <title>Mobile App Development Services | Setzet</title>
      <meta
        name="description"
        content="Premium mobile app development for iOS and Android. Strategy, UX, and engineering tailored for retention and growth."
      />

      <header
        className={`fixed top-0 z-30 w-full text-[10px] uppercase tracking-[0.35em] transition-all duration-300 sm:text-xs ${
          isScrolled
            ? "bg-[#F4F6F8]/90 text-[#0A2540]/60 shadow-[0_4px_30px_rgba(10,37,64,0.05)] backdrop-blur-md py-3"
            : "bg-[#F4F6F8]/80 text-[#0A2540]/70 shadow-[0_4px_20px_rgba(10,37,64,0.04)] backdrop-blur-md py-5"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-5 sm:px-10">
          <Link
            href="/"
            className={`font-bold transition-colors duration-300 ${isScrolled ? "text-[#0A2540]" : "text-[#0A2540]"}`}
          >
            Setzet
          </Link>
          <nav className="hidden items-center gap-8 text-[11px] font-semibold transition-colors duration-300 md:flex">
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
            <Link
              className={`hidden rounded-full border px-5 py-2.5 text-[11px] font-bold transition-all duration-300 md:inline-flex ${
                isScrolled
                  ? "border-[#007BFF] bg-[#007BFF]/10 text-[#007BFF] hover:bg-[#007BFF] hover:text-white"
                  : "border-[#007BFF] bg-[#007BFF]/10 text-[#007BFF] hover:bg-[#007BFF] hover:text-white"
              }`}
              href="/#contact"
            >
              Start a Project
            </Link>
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

      <div
        id="mobile-menu"
        className={`fixed right-4 top-16 z-40 w-[min(240px,calc(100vw-2rem))] origin-top-right rounded-2xl border border-[#0A2540]/10 bg-white p-4 text-[11px] font-bold uppercase tracking-[0.3em] text-[#0A2540]/70 shadow-lg transition-all duration-300 md:hidden ${
          menuOpen
            ? "scale-100 translate-y-0 opacity-100"
            : "pointer-events-none scale-95 -translate-y-2 opacity-0"
        }`}
      >
        <Link className="block py-2 transition hover:text-[#007BFF]" href="/">
          Home
        </Link>
        <Link className="block py-2 transition hover:text-[#007BFF]" href="/about">
          About
        </Link>
        <Link className="block py-2 transition hover:text-[#007BFF]" href="/services">
          Services
        </Link>
        <Link className="block py-2 transition hover:text-[#007BFF]" href="/work">
          Work
        </Link>
        <Link className="block py-2 transition hover:text-[#007BFF]" href="/product">
          Product
        </Link>
        <Link className="block py-2 transition hover:text-[#007BFF]" href="/blogs">
          Blogs
        </Link>
      </div>

      <main className="pt-0">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pb-24 pt-28">
          <div className="absolute inset-0">
            <div className="absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-[#007BFF]/10 blur-[120px]" />
            <div className="absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-[#0A2540]/10 blur-[120px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(10,37,64,0.08),_transparent_60%)]" />
          </div>

          <div className="relative mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={reveal}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#0A2540]/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#007BFF]"
            >
              Mobile App Development
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={reveal}
              className="max-w-4xl text-[clamp(2.6rem,6vw,5.6rem)] font-extrabold leading-[0.95] tracking-tight font-heading"
            >
              Build a mobile app that users return to every day.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={reveal}
              className="mt-6 max-w-2xl text-lg text-[#0A2540]/70"
            >
              We combine strategy, UX, and engineering to ship mobile products that
              activate fast, retain users, and scale cleanly.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={reveal}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/#contact"
                className="rounded-full bg-[#007BFF] px-7 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:translate-y-[-1px] hover:bg-[#0056b3]"
              >
                Get a free quote
              </Link>
              <Link
                href="/work"
                className="rounded-full border border-[#0A2540]/20 px-7 py-3 text-sm font-bold uppercase tracking-[0.2em] text-[#0A2540]/70 transition hover:border-[#007BFF] hover:text-[#007BFF]"
              >
                See work
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Trust stats */}
        <section className="px-6 pb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={stagger}
            className="mx-auto grid max-w-6xl gap-6 rounded-[28px] border border-[#0A2540]/10 bg-white p-8 md:grid-cols-3"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={reveal} className="space-y-2">
                <p className="text-4xl font-extrabold text-[#007BFF] font-heading">
                  {stat.value}
                </p>
                <p className="text-sm uppercase tracking-[0.25em] text-[#0A2540]/50">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Pain points */}
        <section className="px-6 pb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={stagger}
            className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_1fr]"
          >
            <motion.div variants={reveal}>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#007BFF]">
                Where apps go wrong
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl font-heading">
                Most apps lose users before value is delivered.
              </h2>
              <p className="mt-4 text-base text-[#0A2540]/70">
                We fix the experience that drives activation, retention, and growth.
              </p>
            </motion.div>
            <motion.ul variants={reveal} className="space-y-4">
              {painPoints.map((problem) => (
                <li
                  key={problem}
                  className="rounded-2xl border border-[#0A2540]/10 bg-white p-5 text-sm text-[#0A2540]/70"
                >
                  {problem}
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </section>

        {/* Services */}
        <section className="px-6 pb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={stagger}
            className="mx-auto max-w-6xl"
          >
            <motion.div variants={reveal} className="mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#007BFF]">
                Services included
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl font-heading">
                What you get with mobile app development.
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={reveal}
                  className="group rounded-[22px] border border-[#0A2540]/10 bg-white p-6 transition hover:border-[#007BFF]/40 hover:shadow-[0_18px_40px_rgba(0,123,255,0.12)]"
                >
                  <h3 className="text-xl font-bold text-[#0A2540] font-heading">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#0A2540]/65">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Outcomes */}
        <section className="px-6 pb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={stagger}
            className="mx-auto grid max-w-6xl gap-10 rounded-[28px] border border-[#0A2540]/10 bg-white p-10 md:grid-cols-[1.1fr_1fr]"
          >
            <motion.div variants={reveal}>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#007BFF]">
                Outcomes
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl font-heading">
                Built to improve activation, retention, and revenue.
              </h2>
              <p className="mt-4 text-base text-[#0A2540]/70">
                Every decision maps to user value and long-term product growth.
              </p>
            </motion.div>
            <motion.ul variants={reveal} className="space-y-4">
              {outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-3 rounded-2xl border border-[#0A2540]/10 bg-[#F4F6F8] p-4 text-sm text-[#0A2540]/70"
                >
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#007BFF]" />
                  {outcome}
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </section>

        {/* Process */}
        <section className="px-6 pb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={stagger}
            className="mx-auto max-w-6xl"
          >
            <motion.div variants={reveal} className="mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#007BFF]">
                Our process
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl font-heading">
                Aesthetic, structured, and built for momentum.
              </h2>
              <p className="mt-4 max-w-2xl text-base text-[#0A2540]/70">
                Six clear steps that turn your idea into a polished, high‑performing app.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={reveal}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="group relative overflow-hidden rounded-[26px] border border-[#0A2540]/10 bg-white p-6 shadow-[0_8px_24px_rgba(10,37,64,0.06)]"
                >
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#007BFF]/10 blur-2xl transition-opacity duration-500 group-hover:opacity-80" />
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#007BFF]/70 to-transparent opacity-70" />

                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-[#007BFF]/30 bg-[#007BFF]/10 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.3em] text-[#007BFF]">
                      Step {index + 1}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F6F8] text-[#007BFF] shadow-[0_8px_20px_rgba(0,123,255,0.15)]">
                      <span className="text-lg font-extrabold">{index + 1}</span>
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl font-bold font-heading text-[#0A2540]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#0A2540]/65">{step.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={reveal}
            className="mx-auto flex max-w-6xl flex-col items-center rounded-[32px] border border-[#0A2540]/10 bg-white px-10 py-16 text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#007BFF]">
              Ready to build?
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl font-heading">
              Get a free quote for your mobile app.
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-[#0A2540]/65">
              Tell us your goals and timeline. We will respond with a clear scope,
              estimate, and the best path forward.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="rounded-full bg-[#007BFF] px-8 py-3.5 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:translate-y-[-1px] hover:bg-[#0056b3]"
              >
                Get a free quote
              </Link>
              <Link
                href="mailto:info@setzet.com"
                className="rounded-full border border-[#0A2540]/20 px-8 py-3.5 text-sm font-bold uppercase tracking-[0.2em] text-[#0A2540]/70 transition hover:border-[#007BFF] hover:text-[#007BFF]"
              >
                info@setzet.com
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
