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
import { FiStar, FiArrowRight, FiCheck, FiLock } from "react-icons/fi";

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
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ fullName: "", email: "", projectType: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <a href="/" className="block transition-opacity duration-300 hover:opacity-80">
            <img src="/setzet-nav-logoo.png" alt="Setzet Logo" className="h-8 sm:h-10 xl:h-12 w-auto object-contain" />
          </a>
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
        {/* =========================================
            HERO SECTION - SEO & TRUST OPTIMIZED
            ========================================= */}
        <section className="relative min-h-[90vh] lg:min-h-[100vh] w-full flex items-center justify-center pt-24 lg:pt-32 pb-16 px-6 sm:px-12 overflow-hidden bg-white">
          {/* Subtle Dynamic Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] z-0" />
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#007BFF] opacity-[0.08] blur-[100px]" />
          
          <div className="relative z-10 mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-10 lg:pt-0">
            
            {/* Left Column: Copy & CTR Elements */}
            <div className="flex flex-col items-start text-left w-full max-w-2xl mx-auto lg:mx-0">
              
              {/* Trust Badge / Eyebrow */}
              <motion.div
                custom={0} initial="hidden" animate="visible" variants={fadeInUp}
                className="mb-8 flex items-center gap-3 rounded-full border border-[#0A2540]/10 bg-[#F8FAFC] px-4 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#0A2540] shadow-sm transform transition hover:scale-105"
              >
                <div className="flex gap-0.5 text-[#F59E0B]">
                  <FiStar className="fill-current w-3.5 h-3.5" />
                  <FiStar className="fill-current w-3.5 h-3.5" />
                  <FiStar className="fill-current w-3.5 h-3.5" />
                  <FiStar className="fill-current w-3.5 h-3.5" />
                  <FiStar className="fill-current w-3.5 h-3.5" />
                </div>
                <span className="border-l border-[#0A2540]/20 pl-3">Rated 4.9/5 by 100+ Brands</span>
              </motion.div>

              {/* SEO-Optimized H1 */}
              <motion.h1
                custom={1} initial="hidden" animate="visible" variants={fadeInUp}
                className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.08] tracking-tight font-heading text-[#0A2540]"
              >
                We build scalable <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#0ea5e9]">digital products</span>
                <br className="hidden lg:block" /> that drive revenue.
              </motion.h1>

              {/* High-Converting Subheading */}
              <motion.p
                custom={2} initial="hidden" animate="visible" variants={fadeInUp}
                className="mt-6 text-base sm:text-lg text-[#0A2540]/70 leading-relaxed font-medium max-w-xl"
              >
                Setzet is a premium technology agency. We engineer blazing-fast websites, scalable custom software, and digital experiences that turn traffic into fiercely loyal customers.
              </motion.p>
              
              {/* Dual CTA for High CTR */}
              <motion.div
                custom={3} initial="hidden" animate="visible" variants={fadeInUp}
                className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
              >
                <a
                  href="#contact"
                  className="group w-full sm:w-auto overflow-hidden rounded-full bg-[#0A2540] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all shadow-[0_10px_30px_rgba(10,37,64,0.3)] hover:scale-[1.02] hover:bg-[#007BFF] hover:shadow-[0_10px_40px_rgba(0,123,255,0.4)] flex items-center justify-center gap-3"
                >
                  Start Your Project <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                
                <a
                  href="/work"
                  className="group w-full sm:w-auto rounded-full border border-[#0A2540]/15 bg-transparent px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0A2540] transition-all hover:bg-[#F8FAFC] hover:border-[#007BFF]/30 hover:text-[#007BFF] shadow-sm flex items-center justify-center gap-3"
                >
                  View Case Studies
                </a>
              </motion.div>

              {/* Social Proof Integration */}
              <motion.div
                custom={4} initial="hidden" animate="visible" variants={fadeInUp}
                className="mt-14 pt-8 border-t border-[#0A2540]/10 w-full hidden sm:block"
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#0A2540]/40 mb-5">Trusted by ambitious engineering teams</p>
                <div className="flex flex-wrap items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-opacity duration-300">
                   {/* Clean Typography-Based Logos */}
                   <div className="font-heading font-black text-2xl italic tracking-tighter">Velocity</div>
                   <div className="font-heading font-bold text-xl tracking-tight">AcmeCorp</div>
                   <div className="font-heading font-black text-xl tracking-widest uppercase">Nexus</div>
                   <div className="font-heading font-bold text-xl flex items-center gap-1"><FiStar className="fill-current text-[#007BFF] w-4 h-4"/> Stella</div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Visual Trust & Video Embed */}
            <motion.div
              custom={2} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
              className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0"
            >
               {/* Decorative Element Behind Video */}
               <div className="absolute inset-0 bg-gradient-to-tr from-[#007BFF]/20 to-transparent rounded-[32px] sm:rounded-[40px] rotate-3 scale-105 z-0" />
               <div className="absolute inset-0 bg-gradient-to-bl from-[#10B981]/20 to-transparent rounded-[32px] sm:rounded-[40px] -rotate-3 scale-105 z-0" />
               
               {/* Main Video Container / Mockup */}
               <div className="relative z-10 w-full h-full sm:max-h-[500px] rounded-[24px] sm:rounded-[32px] bg-white border border-[#0A2540]/10 shadow-[0_20px_50px_rgba(10,37,64,0.1)] overflow-hidden flex flex-col group transition-transform duration-700 hover:-translate-y-2">
                  {/* Browser/OS Header */}
                  <div className="w-full h-10 sm:h-12 bg-[#F8FAFC] border-b border-[#0A2540]/5 flex items-center px-4 gap-2 shrink-0">
                     <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#EF4444]" />
                     <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#F59E0B]" />
                     <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#10B981]" />
                     <div className="ml-4 flex-1 h-6 sm:h-7 bg-white rounded-md border border-[#0A2540]/5 flex items-center px-3 justify-center">
                        <span className="text-[9px] sm:text-[10px] font-mono text-[#0A2540]/40 flex items-center gap-2"><FiLock className="w-3 h-3"/> setztupd.com</span>
                     </div>
                  </div>
                  {/* Video Player */}
                  <div className="relative flex-1 bg-[#F4F6F8]">
                     <video
                       className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                       autoPlay
                       muted
                       loop
                       playsInline
                       preload="auto"
                     >
                       <source src="/videos/hero/hero1.mp4?v=20260218" type="video/mp4" />
                     </video>
                     {/* Play button overlay for aesthetics */}
                     <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md border border-white/50 flex items-center justify-center pl-1 shadow-xl transition-transform duration-500 group-hover:scale-110">
                           <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"/></svg>
                        </div>
                     </div>
                  </div>
               </div>
               
               {/* Floating Performance Card */}
               <div className="absolute -left-4 sm:-left-10 bottom-6 sm:bottom-10 z-20 bg-white p-3 sm:p-5 rounded-2xl shadow-2xl border border-[#0A2540]/5 animate-bounce-slow flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#007BFF]/10 flex items-center justify-center text-[#007BFF]">
                     <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                  </div>
                  <div>
                     <p className="text-[9px] sm:text-[10px] font-bold text-[#0A2540]/50 uppercase tracking-widest leading-none mb-1">Conversion Lift</p>
                     <p className="text-lg sm:text-xl font-black text-[#0A2540] leading-none">+ 214%</p>
                  </div>
               </div>
            </motion.div>
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
            <form className="lg:w-[55%] w-full flex flex-col gap-3" onSubmit={handleSubmit}>
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  className="h-11 rounded-xl border border-[#0A2540]/10 bg-[#F4F6F8] px-4 text-xs font-medium text-[#0A2540] outline-none transition focus:border-[#007BFF] focus:bg-white focus:ring-2 focus:ring-[#007BFF]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your full name"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  disabled={isSubmitting}
                />
                <input
                  className="h-11 rounded-xl border border-[#0A2540]/10 bg-[#F4F6F8] px-4 text-xs font-medium text-[#0A2540] outline-none transition focus:border-[#007BFF] focus:bg-white focus:ring-2 focus:ring-[#007BFF]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="you@company.com"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={isSubmitting}
                />
              </div>

              <input
                className="h-11 rounded-xl border border-[#0A2540]/10 bg-[#F4F6F8] px-4 text-xs font-medium text-[#0A2540] outline-none transition focus:border-[#007BFF] focus:bg-white focus:ring-2 focus:ring-[#007BFF]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Project Type (Brand site, app, redesign...)"
                type="text"
                required
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                disabled={isSubmitting}
              />

              <textarea
                className="min-h-[80px] rounded-xl border border-[#0A2540]/10 bg-[#F4F6F8] px-4 py-3 text-xs font-medium text-[#0A2540] outline-none transition focus:border-[#007BFF] focus:bg-white focus:ring-2 focus:ring-[#007BFF]/20 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Tell us about your goals, timeline, and expectations."
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                disabled={isSubmitting}
              />

              {submitStatus === "success" && (
                <div className="rounded-xl border border-[#10B981]/20 bg-[#10B981]/10 px-4 py-3 text-xs font-medium text-[#10B981]">
                  Thanks for reaching out! We'll get back to you within 24 hours.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="rounded-xl border border-[#EF4444]/20 bg-[#EF4444]/10 px-4 py-3 text-xs font-medium text-[#EF4444]">
                  Oops! Something went wrong. Please try again or email us directly.
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#0A2540]/50 text-center sm:text-left">
                  Response within 24 hours
                </p>
                <button
                  className="w-full sm:w-auto rounded-full bg-[#007BFF] px-8 py-3 text-xs font-bold text-white transition-all shadow-[0_8px_30px_rgba(0,123,255,0.3)] hover:bg-[#0056b3] hover:shadow-[0_8px_30px_rgba(0,123,255,0.5)] transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-[0_8px_30px_rgba(0,123,255,0.3)]"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
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
