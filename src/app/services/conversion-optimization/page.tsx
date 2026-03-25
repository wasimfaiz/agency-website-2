"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import { FiActivity, FiBarChart2, FiCompass, FiEdit3, FiHelpCircle, FiLayers, FiMousePointer, FiSearch, FiTrendingUp, FiZap } from "react-icons/fi";
import Footer from "../../../components/Footer";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
} satisfies Variants;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
} satisfies Variants;

const trustStats = [
  { value: "25%+", label: "Average lift in conversion rate", icon: FiTrendingUp },
  { value: "Faster", label: "Lead capture with cleaner journeys", icon: FiMousePointer },
  { value: "Ongoing", label: "Testing and optimization cycles", icon: FiActivity },
];

const anxieties = [
  "Traffic is coming in, but too few visitors are turning into qualified leads.",
  "Your pages look polished, but users still hesitate before taking action.",
  "There is no clear testing system to learn what improves conversion.",
];

const services = [
  {
    title: "Conversion Funnel Audit",
    description:
      "We identify friction across messaging, page structure, CTA hierarchy, forms, and user flow to locate what is suppressing conversion.",
    icon: FiSearch,
  },
  {
    title: "Landing Page Optimization",
    description:
      "We improve page clarity, offer positioning, and decision flow so visitors understand what to do and why it matters.",
    icon: FiLayers,
  },
  {
    title: "CTA & Messaging Refinement",
    description:
      "We tighten the language, visual emphasis, and sequencing around calls to action so the path to conversion feels more obvious.",
    icon: FiEdit3,
  },
  {
    title: "Form and UX Improvements",
    description:
      "We simplify interactions, remove hesitation points, and streamline the user experience around high-intent actions.",
    icon: FiMousePointer,
  },
  {
    title: "Experiment Design",
    description:
      "We structure tests around hypotheses, page elements, and decision points that can produce measurable conversion gains.",
    icon: FiZap,
  },
  {
    title: "Performance Analysis",
    description:
      "We study behavior, drop-off, and conversion patterns so optimization decisions stay grounded in user evidence.",
    icon: FiBarChart2,
  },
];

const outcomes = [
  "Higher conversion rates from the traffic you already acquire",
  "Clearer page experiences that reduce hesitation and drop-off",
  "A stronger testing discipline across offers, pages, and CTAs",
  "More qualified leads entering the pipeline without extra ad spend",
];

const processSteps = [
  {
    title: "Map the Friction Points",
    text: "We review key pages, user journeys, CTAs, and drop-off patterns to understand where conversion momentum is breaking.",
    icon: FiCompass,
  },
  {
    title: "Prioritize the Highest Leverage Fixes",
    text: "We identify the page and messaging changes most likely to improve conversion before expanding into broader testing.",
    icon: FiLayers,
  },
  {
    title: "Test and Iterate",
    text: "We run structured experiments across offers, layouts, copy, and flows to isolate what actually increases action.",
    icon: FiActivity,
  },
  {
    title: "Scale the Learnings",
    text: "We apply winning patterns across the funnel so conversion improvements do not stay limited to one page or campaign.",
    icon: FiTrendingUp,
  },
];

const faqs = [
  {
    question: "What is conversion optimization?",
    answer:
      "It is the process of improving page experience, messaging, and user flow so more visitors take meaningful actions like submitting a form, booking a call, or starting a purchase.",
  },
  {
    question: "Do you need high traffic for CRO to matter?",
    answer:
      "Higher traffic helps testing move faster, but even moderate traffic can benefit from stronger messaging, clearer flows, and a more intentional page structure.",
  },
  {
    question: "What do you optimize first?",
    answer:
      "We usually start with the highest-impact decision points: offer clarity, CTA hierarchy, landing-page structure, and the moments where users are dropping off.",
  },
  {
    question: "How do you measure CRO success?",
    answer:
      "We track conversion rate, lead quality, drop-off changes, CTA interaction, and the downstream impact on qualified pipeline.",
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

export default function ConversionOptimizationPage() {
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
      <title>Conversion Optimization | Setzet Digital</title>
      <meta
        name="description"
        content="Conversion optimization systems built to improve landing pages, user journeys, CTA clarity, and lead generation performance."
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
        <section className="relative overflow-hidden px-6 pb-24 pt-36">
          <div className="absolute inset-0">
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -right-24 top-0 h-[500px] w-[500px] rounded-full bg-[#007BFF]/10 blur-[120px]"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-[#0A2540]/10 blur-[120px]"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(10,37,64,0.06),_transparent_70%)]" />
          </div>

          <div className="relative mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={reveal}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#0A2540]/10 bg-white/80 backdrop-blur px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.35em] text-[#007BFF] shadow-sm"
            >
              Conversion Optimization
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={reveal}
              className="max-w-4xl text-[clamp(2.6rem,6vw,5.6rem)] font-extrabold leading-[0.95] tracking-tight font-heading text-[#0A2540]"
            >
              Get more value from the traffic you already <span className="text-[#007BFF] italic">earn</span>.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={reveal}
              className="mt-8 max-w-2xl text-[1.1rem] leading-relaxed text-[#0A2540]/70"
            >
              We improve conversion by tightening messaging, page flow, CTA clarity, and user experience so more visitors become qualified leads without increasing acquisition costs.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={reveal}
              className="mt-12 flex flex-wrap gap-5"
            >
              <Link
                href="/#contact"
                className="group relative overflow-hidden rounded-full bg-[#007BFF] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:shadow-[0_8px_25px_rgba(0,123,255,0.4)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
                <span className="relative z-10">Request CRO Audit</span>
              </Link>
              <Link
                href="/work"
                className="group rounded-full border border-[#0A2540]/20 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#0A2540]/70 transition hover:border-[#007BFF] hover:text-[#007BFF] hover:bg-[#007BFF]/5"
              >
                Explore case studies
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={stagger}
            className="mx-auto grid max-w-6xl gap-0 overflow-hidden rounded-[32px] border border-[#0A2540]/10 bg-white/60 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.02)] md:grid-cols-3"
          >
            {trustStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={reveal}
                className={`relative p-10 ${i !== trustStats.length - 1 ? "border-b md:border-b-0 md:border-r border-[#0A2540]/5" : ""}`}
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#007BFF]/10 text-[#007BFF]">
                  <stat.icon className="h-5 w-5" />
                </div>
                <p className="text-5xl font-extrabold text-[#007BFF] tracking-tighter drop-shadow-sm font-heading">
                  {stat.value}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#0A2540]/50">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="px-6 pb-24 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={stagger}
            className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.1fr_1fr] items-center"
          >
            <motion.div variants={reveal}>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#007BFF]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-[#007BFF] mb-6">
                <span className="h-2 w-2 rounded-full bg-[#007BFF] animate-pulse" /> The Core Issue
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl font-heading text-[#0A2540] leading-[1.1]">
                More traffic does not fix a weak conversion journey.
              </h2>
              <p className="mt-6 text-[1.1rem] leading-relaxed text-[#0A2540]/70">
                If users are confused, distracted, or unconvinced, even strong traffic will underperform. Conversion optimization is about removing friction where decisions are actually made.
              </p>
            </motion.div>
            <motion.ul variants={reveal} className="space-y-4">
              {anxieties.map((anxiety) => (
                <motion.li
                  key={anxiety}
                  whileHover={{ scale: 1.02, translateX: 5 }}
                  className="flex items-center gap-4 rounded-2xl border border-[#0A2540]/5 bg-white p-6 text-sm md:text-base font-medium text-[#0A2540]/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all cursor-default"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-red-50 text-red-500">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </div>
                  {anxiety}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </section>

        <section className="px-6 pb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={stagger}
            className="mx-auto max-w-6xl"
          >
            <motion.div variants={reveal} className="mb-14 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#007BFF]">
                Our Expertise
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl font-heading text-[#0A2540]">
                A structured system for converting more of existing demand.
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  variants={reveal}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-[28px] border border-[#0A2540]/10 bg-white p-8 transition-all hover:border-[#007BFF]/30 hover:shadow-[0_20px_40px_rgba(0,123,255,0.08)]"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5 font-heading text-8xl font-bold italic tracking-tighter transform translate-x-4 -translate-y-4 group-hover:scale-110 group-hover:opacity-10 transition-all duration-500 text-[#0A2540]">
                    0{idx + 1}
                  </div>
                  <div className="relative z-10 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#007BFF]/10 text-[#007BFF] shadow-[0_10px_24px_rgba(0,123,255,0.12)]">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="relative z-10 text-xl font-bold text-[#0A2540] font-heading pr-8">
                    {service.title}
                  </h3>
                  <p className="relative z-10 mt-4 text-[0.95rem] leading-relaxed text-[#0A2540]/65">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="px-6 pb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={stagger}
            className="mx-auto grid max-w-6xl gap-16 rounded-[40px] border border-[#007BFF]/20 bg-gradient-to-br from-[#ffffff] to-[#f4f9ff] p-10 md:p-16 md:grid-cols-[1.1fr_1fr] relative overflow-hidden"
          >
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#007BFF]/10 rounded-full blur-[100px] pointer-events-none" />

            <motion.div variants={reveal} className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#007BFF]">
                The Payoff
              </p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl font-heading text-[#0A2540] leading-[1.1]">
                Better conversion without blindly chasing more traffic.
              </h2>
              <p className="mt-6 text-[1.1rem] leading-relaxed text-[#0A2540]/70">
                Conversion optimization helps the rest of your acquisition efforts work harder by making the decision path simpler, sharper, and more persuasive.
              </p>
            </motion.div>
            <motion.ul variants={reveal} className="space-y-4 relative z-10">
              {outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="group flex flex-col md:flex-row items-start gap-4 rounded-3xl border border-white bg-white/50 backdrop-blur-md p-5 text-[0.95rem] font-medium text-[#0A2540]/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:bg-white transition-colors"
                >
                  <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center h-8 w-8 rounded-full bg-[#007BFF]/10 text-[#007BFF] group-hover:scale-110 transition-transform">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </span>
                  <span className="pt-1">{outcome}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </section>

        <section className="px-6 pb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={stagger}
            className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1fr_1.2fr]"
          >
            <motion.div variants={reveal} className="md:sticky md:top-32 self-start">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#007BFF]">
                The Blueprint
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl font-heading text-[#0A2540]">
                A practical framework for conversion improvement.
              </h2>
              <p className="mt-6 text-base md:text-lg text-[#0A2540]/70">
                Conversion gains come from testing the right things in the right order and carrying those learnings across the funnel.
              </p>
            </motion.div>
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={reveal}
                  className="relative rounded-[32px] border border-[#0A2540]/10 bg-white p-8 md:p-10 hover:shadow-[0_15px_30px_rgba(0,0,0,0.04)] transition-shadow"
                >
                  <div className="absolute top-8 right-8 w-12 h-12 bg-[#F4F6F8] rounded-full flex items-center justify-center text-[#007BFF]">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#007BFF]">
                    Phase
                  </p>
                  <h3 className="mt-3 text-2xl font-bold font-heading text-[#0A2540] pr-12">{step.title}</h3>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-[#0A2540]/70">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="px-6 pb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={stagger}
            className="mx-auto max-w-6xl"
          >
            <motion.div variants={reveal} className="mb-14 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl font-heading text-[#0A2540]">
                Common Questions, Answered Honestly.
              </h2>
            </motion.div>
            <div className="grid gap-4 md:grid-cols-2">
              {faqs.map((faq) => (
                <motion.div
                  key={faq.question}
                  variants={reveal}
                  className="rounded-[24px] border border-[#0A2540]/10 bg-white p-8"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-[#007BFF]/10 text-[#007BFF]">
                      <FiHelpCircle className="h-4 w-4" />
                    </div>
                    <p className="text-lg font-bold text-[#0A2540] font-heading leading-tight">
                      {faq.question}
                    </p>
                  </div>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-[#0A2540]/65">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="px-6 pb-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={reveal}
            className="mx-auto flex max-w-6xl flex-col items-center rounded-[40px] border border-[#0A2540]/10 bg-[#0A2540] px-10 py-20 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,123,255,0.15),_transparent_50%)]" />

            <div className="relative z-10 w-full flex flex-col items-center">
              <p className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#007BFF] mb-6 backdrop-blur">
                Conversion Optimization
              </p>
              <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl font-heading text-white max-w-3xl">
                Ready to turn more visitors into real opportunities?
              </h2>
              <p className="mt-6 max-w-2xl text-[1.1rem] leading-relaxed text-white/70">
                If your funnel needs stronger page clarity, sharper CTAs, and a cleaner conversion path, we can build the optimization system around that.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
                <Link
                  href="/#contact"
                  className="group relative overflow-hidden rounded-full bg-[#007BFF] px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:shadow-[0_8px_30px_rgba(0,123,255,0.5)]"
                >
                  <div className="absolute inset-0 bg-black/10 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
                  <span className="relative z-10">Request CRO Audit</span>
                </Link>
                <Link
                  href="/work"
                  className="rounded-full border border-white/20 px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:border-white hover:bg-white/5"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
