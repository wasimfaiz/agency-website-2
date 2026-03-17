"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../../../components/Footer";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const trustStats = [
  { value: "40+", label: "High-converting sites shipped" },
  { value: "40%", label: "Average conversion lift" },
  { value: "2.3s", label: "Median post-launch load time" },
];

const anxieties = [
  "Traffic lands but doesn’t trust you fast enough.",
  "Great design, weak funnel — conversions stall.",
  "Slow load time quietly kills revenue.",
];

const services = [
  {
    title: "Conversion-first web design",
    description:
      "Layouts that earn trust fast and guide users toward your primary CTA.",
  },
  {
    title: "UX + messaging strategy",
    description:
      "Positioning, copy hierarchy, and flow that aligns with buyer intent.",
  },
  {
    title: "Next.js development",
    description:
      "Fast, scalable builds with clean architecture and modern performance.",
  },
  {
    title: "Landing pages + CRO",
    description:
      "Offer-specific pages optimized for paid and organic traffic.",
  },
  {
    title: "Technical SEO",
    description:
      "Semantic structure, metadata, and speed to rank and convert.",
  },
  {
    title: "Ongoing optimization",
    description:
      "Post-launch testing, iteration, and conversion improvements.",
  },
];

const outcomes = [
  "Clear value proposition in the first 5 seconds",
  "Frictionless path to your primary CTA",
  "A performance-first build that feels premium",
  "A scalable system your team can grow with",
];

const processSteps = [
  {
    title: "Audit + strategy",
    text: "We diagnose friction, map the buyer journey, and define your conversion strategy.",
  },
  {
    title: "UX + design",
    text: "We design an experience that looks premium and sells without pressure.",
  },
  {
    title: "Build + launch",
    text: "We engineer a fast, scalable site and launch with performance tracking.",
  },
  {
    title: "Optimize + grow",
    text: "We monitor, test, and iterate for compounding conversion gains.",
  },
];

const faqs = [
  {
    question: "How much does a web development project cost?",
    answer:
      "Most projects fall between $8,000 and $45,000 depending on scope, pages, and integrations. Larger builds can exceed $60,000.",
  },
  {
    question: "How long does it take to launch?",
    answer:
      "Most marketing sites ship in 4 to 8 weeks. Larger platforms take 10 to 14 weeks.",
  },
  {
    question: "Can you work with our existing brand?",
    answer:
      "Yes. We can refresh, rebuild, or simply optimize around your current visual identity.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. We offer monthly optimization sprints focused on performance and conversion.",
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

export default function WebDevelopmentPage() {
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
      <title>Web Development Services | Setzet</title>
      <meta
        name="description"
        content="Conversion-focused web development for modern brands. Strategy, design, and engineering built for growth."
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
              Web Development
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={reveal}
              className="max-w-4xl text-[clamp(2.6rem,6vw,5.6rem)] font-extrabold leading-[0.95] tracking-tight font-heading"
            >
              Turn traffic into customers with a website built to convert.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={reveal}
              className="mt-6 max-w-2xl text-lg text-[#0A2540]/70"
            >
              We design and build high-performance websites that earn trust quickly,
              guide buyers confidently, and make your next step obvious.
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

        {/* Trust */}
        <section className="px-6 pb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={stagger}
            className="mx-auto grid max-w-6xl gap-6 rounded-[28px] border border-[#0A2540]/10 bg-white p-8 md:grid-cols-3"
          >
            {trustStats.map((stat) => (
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

        {/* Psychology */}
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
                Why conversions stall
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl font-heading">
                Buyers decide in seconds — your site must earn trust fast.
              </h2>
              <p className="mt-4 text-base text-[#0A2540]/70">
                We fix the moments where visitors hesitate, lose confidence, or feel
                unsure about taking action.
              </p>
            </motion.div>
            <motion.ul variants={reveal} className="space-y-4">
              {anxieties.map((anxiety) => (
                <li
                  key={anxiety}
                  className="rounded-2xl border border-[#0A2540]/10 bg-white p-5 text-sm text-[#0A2540]/70"
                >
                  {anxiety}
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
                Everything your website needs to convert.
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                Built to improve trust, speed, and revenue.
              </h2>
              <p className="mt-4 text-base text-[#0A2540]/70">
                Every section earns attention and guides the next action.
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
            className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1.1fr]"
          >
            <motion.div variants={reveal}>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#007BFF]">
                Our process
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl font-heading">
                A simple system that keeps projects moving.
              </h2>
              <p className="mt-4 text-base text-[#0A2540]/70">
                Clear milestones, fast feedback, and transparent delivery.
              </p>
            </motion.div>
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={reveal}
                  className="rounded-[22px] border border-[#0A2540]/10 bg-white p-6"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#007BFF]">
                    Step 0{index + 1}
                  </p>
                  <h3 className="mt-3 text-xl font-bold font-heading">{step.title}</h3>
                  <p className="mt-3 text-sm text-[#0A2540]/65">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FAQ */}
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
                FAQ
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl font-heading">
                Pricing and delivery, clearly answered.
              </h2>
            </motion.div>
            <div className="grid gap-5">
              {faqs.map((faq) => (
                <motion.div
                  key={faq.question}
                  variants={reveal}
                  className="rounded-[22px] border border-[#0A2540]/10 bg-white p-6"
                >
                  <p className="text-base font-semibold text-[#0A2540]">
                    {faq.question}
                  </p>
                  <p className="mt-3 text-sm text-[#0A2540]/65">{faq.answer}</p>
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
            className="mx-auto flex max-w-6xl flex-col items-center rounded-[32px] border border-[#0A2540]/10 bg-white px-10 py-16 text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#007BFF]">
              Ready to grow?
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl font-heading">
              Get a free quote for your website.
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-[#0A2540]/65">
              Tell us your goals and timeline. We will respond with a clear scope,
              estimate, and next steps.
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
