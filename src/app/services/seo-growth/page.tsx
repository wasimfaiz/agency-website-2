"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
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
  { value: "300%+", label: "Average search visibility growth" },
  { value: "Page 1", label: "Rankings achieved for priority terms" },
  { value: "10x", label: "ROI from SEO and content systems" },
];

const anxieties = [
  "Your website exists, but it is not earning compounding visibility.",
  "Competitors are publishing better content and capturing demand first.",
  "You are stuck paying for traffic because organic growth is inconsistent.",
];

const services = [
  {
    title: "SEO Audit & Opportunity Mapping",
    description:
      "A full diagnostic across technical SEO, search visibility, content gaps, and conversion friction so the roadmap starts with facts.",
  },
  {
    title: "Keyword & Search Intent Strategy",
    description:
      "We prioritize revenue-driving keyword clusters that attract the right buyers instead of vanity traffic.",
  },
  {
    title: "On-Page SEO Optimization",
    description:
      "We refine structure, metadata, internal linking, and page relevance so every key URL has a stronger chance to rank.",
  },
  {
    title: "Technical SEO Excellence",
    description:
      "We strengthen crawlability, Core Web Vitals, site architecture, and indexing health to support sustainable growth.",
  },
  {
    title: "Content Strategy & Production",
    description:
      "We plan and produce search-led content that expands topical authority and supports every stage of the buyer journey.",
  },
  {
    title: "Authority Building",
    description:
      "We grow domain trust with high-quality content ecosystems, strategic distribution, and credible authority signals.",
  },
];

const outcomes = [
  "Compounding search visibility supported by a real content engine",
  "Higher rankings for the keywords that influence pipeline and sales",
  "Stronger topical authority that separates you from competitors",
  "Lower customer acquisition pressure by reducing paid dependency",
];

const processSteps = [
  {
    title: "Audit the Search Position",
    text: "We review technical health, keyword footprint, content coverage, and competitor momentum to locate the most valuable gaps.",
  },
  {
    title: "Build the Content Roadmap",
    text: "We turn those gaps into a practical strategy covering target clusters, priority pages, supporting content, and internal linking.",
  },
  {
    title: "Execute in Growth Sprints",
    text: "We ship technical fixes, optimize key pages, and publish search-led content in measured, transparent monthly sprints.",
  },
  {
    title: "Measure and Expand",
    text: "We track rankings, content performance, qualified traffic, and conversions, then expand into the next growth opportunities.",
  },
];

const faqs = [
  {
    question: "How long does SEO and content marketing take to work?",
    answer:
      "Search is a long-term strategy. You’ll typically see initial ranking movement within 2 to 3 months, with significant traffic and lead growth compounding between months 6 to 12.",
  },
  {
    question: "Do you guarantee Page 1 rankings?",
    answer:
      "No agency can honestly guarantee a #1 spot due to evolving search algorithms. However, we have a proven track record of consistently moving our clients to Page 1 for highly competitive keywords.",
  },
  {
    question: "Is this just SEO, or content marketing too?",
    answer:
      "It is both. SEO gives the structure, technical health, and search direction, while content marketing expands authority, supports keyword coverage, and gives your site more chances to rank and convert.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We track beyond rankings alone. We look at search visibility, organic traffic quality, content performance, engagement, and most importantly the conversions and pipeline generated.",
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

export default function SeoGrowthPage() {
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
      <title>SEO & Content Marketing | Setzet Digital</title>
      <meta
        name="description"
        content="SEO and content marketing systems that build authority, capture high-intent traffic, and turn search visibility into qualified pipeline."
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
        <section className="relative overflow-hidden px-6 pb-24 pt-36">
          <div className="absolute inset-0">
            {/* Animated Background Blur Blobs */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 90, 0]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -right-24 top-0 h-[500px] w-[500px] rounded-full bg-[#007BFF]/10 blur-[120px]" 
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, -90, 0]
              }}
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
              SEO & Content Marketing
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={reveal}
              className="max-w-4xl text-[clamp(2.6rem,6vw,5.6rem)] font-extrabold leading-[0.95] tracking-tight font-heading text-[#0A2540]"
            >
              Build a search presence your audience keeps <span className="text-[#007BFF] italic">finding</span> and trusting.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={reveal}
              className="mt-8 max-w-2xl text-[1.1rem] leading-relaxed text-[#0A2540]/70"
            >
              We combine technical SEO, search strategy, and authority content to help your brand rank for the right topics, attract qualified traffic, and turn attention into pipeline.
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
                <span className="relative z-10">Get your free audit</span>
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

        {/* Trust Stats */}
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
                className={`relative p-10 ${i !== trustStats.length - 1 ? 'border-b md:border-b-0 md:border-r border-[#0A2540]/5' : ''}`}
              >
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

        {/* The Problem / Psychology */}
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
                Weak search visibility and weak content both cost you demand.
              </h2>
              <p className="mt-6 text-[1.1rem] leading-relaxed text-[#0A2540]/70">
                If your site is not ranking and your content is not answering buyer intent, competitors will keep owning discovery. That means lost clicks, weaker trust, and fewer qualified leads entering your funnel.
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

        {/* Services / What We Do */}
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
                A full-stack system for SEO and content growth.
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

        {/* Outcomes */}
        <section className="px-6 pb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={stagger}
            className="mx-auto grid max-w-6xl gap-16 rounded-[40px] border border-[#007BFF]/20 bg-gradient-to-br from-[#ffffff] to-[#f4f9ff] p-10 md:p-16 md:grid-cols-[1.1fr_1fr] relative overflow-hidden"
          >
            {/* Background glowing orb */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#007BFF]/10 rounded-full blur-[100px] pointer-events-none" />
            
            <motion.div variants={reveal} className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#007BFF]">
                The Payoff
              </p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl font-heading text-[#0A2540] leading-[1.1]">
                Visibility that turns into qualified pipeline.
              </h2>
              <p className="mt-6 text-[1.1rem] leading-relaxed text-[#0A2540]/70">
                Rankings alone are not the goal. We focus on the combination of search visibility, useful content, and conversion intent that drives real revenue outcomes.
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

        {/* Process */}
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
                A practical framework for search-led growth.
              </h2>
              <p className="mt-6 text-base md:text-lg text-[#0A2540]/70">
                SEO and content marketing work when strategy, execution, and measurement stay aligned. Our process is built to keep that engine moving every month.
              </p>
            </motion.div>
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={reveal}
                  className="relative rounded-[32px] border border-[#0A2540]/10 bg-white p-8 md:p-10 hover:shadow-[0_15px_30px_rgba(0,0,0,0.04)] transition-shadow"
                >
                  <div className="absolute top-8 right-8 w-12 h-12 bg-[#F4F6F8] rounded-full flex items-center justify-center text-[#0A2540] font-bold font-heading text-xl">
                    {index + 1}
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

        {/* FAQ */}
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
                  <p className="text-lg font-bold text-[#0A2540] font-heading leading-tight">
                    {faq.question}
                  </p>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-[#0A2540]/65">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={reveal}
            className="mx-auto flex max-w-6xl flex-col items-center rounded-[40px] border border-[#0A2540]/10 bg-[#0A2540] px-10 py-20 text-center relative overflow-hidden"
          >
            {/* Dark background subtle glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,123,255,0.15),_transparent_50%)]" />

            <div className="relative z-10 w-full flex flex-col items-center">
              <p className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#007BFF] mb-6 backdrop-blur">
                SEO & Content Marketing
              </p>
              <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl font-heading text-white max-w-3xl">
                Ready to turn search demand into pipeline?
              </h2>
              <p className="mt-6 max-w-2xl text-[1.1rem] leading-relaxed text-white/70">
                If you want SEO and content to work as one growth system, we can map the gaps, prioritize the right topics, and build a plan around qualified demand.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
                <Link
                  href="/#contact"
                  className="group relative overflow-hidden rounded-full bg-[#007BFF] px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:shadow-[0_8px_30px_rgba(0,123,255,0.5)]"
                >
                  <div className="absolute inset-0 bg-black/10 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
                  <span className="relative z-10">Request Strategy Audit</span>
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
