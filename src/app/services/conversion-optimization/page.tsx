"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../../components/Footer";
import { 
  FiMousePointer, FiEye, FiSliders, FiUsers,
  FiArrowRight, FiTarget, FiTrendingUp, FiCheckCircle
} from "react-icons/fi";
import { FaGoogle, FaHotjar, FaVial, FaChartLine } from "react-icons/fa";

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
  visible: { transition: { staggerChildren: 0.12 } },
} satisfies Variants;

const staggerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
} satisfies Variants;

const services = [
  {
    title: "A/B & Multivariate Testing",
    description: "We eliminate guesswork. We rigorously split-test headlines, layouts, and CTAs to find the mathematically highest converting combination.",
    icon: FiSliders,
  },
  {
    title: "Heatmap & Session Analysis",
    description: "Watching exact user behaviors. We deploy scroll maps, click tracking, and session recordings to uncover precise friction points.",
    icon: FiEye,
  },
  {
    title: "Checkout Flow Optimization",
    description: "Cart abandonment is revenue left on the table. We streamline checkout processes, reduce anxiety, and inject strategic trust signals.",
    icon: FiTarget,
  },
  {
    title: "Cognitive Copy Updates",
    description: "Words sell. We apply behavioral psychology to re-write landing page copy, focusing on eliminating objections and escalating desire.",
    icon: FiSliders,
  },
  {
    title: "UX Friction Diagnostics",
    description: "If an element slows the user down, we remove it. Deep technical audits of mobile responsiveness, site speed, and navigation architecture.",
    icon: FiMousePointer,
  },
  {
    title: "Personalization Engines",
    description: "Dynamic routing. Showing different offers, messaging, and structures based on the exact traffic source or audience demographic.",
    icon: FiUsers,
  },
];

const processSteps = [
  {
    title: "Data Auditing & Hypothesis",
    text: "We mine Google Analytics and session recordings to find severe leaks in your funnel, formulating a strict, data-backed hypothesis.",
  },
  {
    title: "UI/UX Variant Design",
    text: "Our design team creates Challenger variants (Variant B, Variant C) utilizing behavioral psychology principles to beat your control page.",
  },
  {
    title: "Split Test Engineering",
    text: "We deploy the test via VWO or Optimizely, ensuring exact traffic splits, zero flicker, and absolute statistical significance.",
  },
  {
    title: "Analysis & Implementation",
    text: "Upon reaching 95%+ confidence, we declare the winner, hardcode the winning architecture to your site, and start the next experiment.",
  },
];

const featuredProjects = [
  {
    title: "Direct-to-Consumer Checkout",
    category: "E-Commerce CRO",
    image: "/images/project1.png", // Reuse existing provided paths
    summary:
      "Increased the cart-to-purchase completion rate by 24% by simplifying the mobile checkout flow and introducing dynamic trust badges.",
  },
  {
    title: "SaaS Free Trial Escalation",
    category: "B2B Optimization",
    image: "/images/zenfora-food.png",
    summary:
      "A complete landing page copy and hierarchy overhaul lifted organic free-trial signups by 38% without a single dollar of additional ad spend.",
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
        "text-[#0A2540]/80 hover:text-[#06B6D4]"
      }`}
    >
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
        {children}
      </span>
      <span
        className={`absolute left-0 top-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0 text-[#06B6D4] font-bold`}
      >
        {children}
      </span>
    </Link>
  );
};

export default function CROPage() {
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
    <div className="min-h-screen bg-[#F4F6F8] text-[#0A2540] font-sans selection:bg-[#06B6D4] selection:text-white">
      <title>Premium Conversion Optimization (CRO) | Setzet</title>
      <meta
        name="description"
        content="We turn cold traffic into hyper-converting revenue. Data-driven UX auditing, A/B testing, and behavioral psychology."
      />

      {/* Header - Light Mode */}
      <header
        className={`fixed top-0 z-50 w-full text-[10px] uppercase tracking-[0.35em] transition-all duration-300 sm:text-xs ${
          isScrolled
            ? "bg-[#F4F6F8]/90 text-[#0A2540]/80 shadow-[0_4px_30px_rgba(10,37,64,0.05)] backdrop-blur-md py-4"
            : "bg-transparent text-[#0A2540]/90 py-6"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-5 sm:px-10">
          <Link
            href="/"
            className="font-bold text-[#0A2540] transition-colors duration-300 hover:text-[#06B6D4]"
          >
            Setzet
          </Link>
          <nav className="hidden items-center gap-8 text-[11px] font-semibold transition-colors duration-300 md:flex">
            <NavLink href="/" isScrolled={isScrolled}>Home</NavLink>
            <NavLink href="/about" isScrolled={isScrolled}>About</NavLink>
            <NavLink href="/services" isScrolled={isScrolled}>Services</NavLink>
            <NavLink href="/work" isScrolled={isScrolled}>Work</NavLink>
            <NavLink href="/blogs" isScrolled={isScrolled}>Blogs</NavLink>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              className="hidden rounded-full border border-[#0A2540]/10 bg-white/50 backdrop-blur-md px-6 py-2.5 text-[11px] font-bold transition-all duration-300 hover:bg-[#06B6D4] hover:border-[#06B6D4] hover:text-white md:inline-flex text-[#0A2540]"
              href="/#contact"
            >
              Start a Project
            </Link>
            <button
              className="inline-flex h-10 items-center justify-center rounded-full border border-[#0A2540]/20 px-4 text-[11px] font-semibold transition md:hidden text-[#0A2540] hover:border-[#06B6D4]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="mr-2">{menuOpen ? "Close" : "Menu"}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-0 relative overflow-hidden">
        
        {/* =========================================
            HERO SECTION - THE A/B TEST DASHBOARD
            ========================================= */}
        <section className="relative min-h-[100vh] flex items-center pt-32 pb-20 px-6">
          {/* Animated Background Ambience */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Cyan/Coral CRO Gradients */}
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[0%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-[#06B6D4]/15 blur-[160px]" 
            />
            <motion.div 
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-[#F43F5E]/10 blur-[150px]" 
            />
            {/* Minimal Grid Data Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(10,37,64,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,37,64,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)]" />
          </div>

          <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-8 items-center relative z-10">
            
            {/* Left: Copy & Actions */}
            <div className="max-w-xl lg:pr-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0A2540]/10 bg-white/70 backdrop-blur-md px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#06B6D4] shadow-sm"
              >
                <FiSliders className="text-sm" /> Conversion Optimization
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight font-heading text-[#0A2540]"
              >
                Stop losing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#F43F5E]">paying customers.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-lg md:text-xl text-[#0A2540]/70 leading-relaxed font-light"
              >
                Traffic is expensive. We deploy rigorous A/B testing, heatmap analysis, and behavioral psychology to ruthlessly patch the leaks in your digital funnel and multiply your revenue.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-10 flex flex-wrap gap-5 items-center"
              >
                <Link
                  href="/#contact"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#0A2540] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all shadow-[0_10px_30px_rgba(10,37,64,0.3)] hover:scale-[1.02] hover:bg-[#1a365d]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Audit My Funnel <FiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                
                <div className="flex items-center gap-3 px-4 py-3 bg-white/50 backdrop-blur-sm border border-[#0A2540]/10 rounded-full shadow-sm">
                  <FiTrendingUp className="text-xl text-[#06B6D4]" />
                  <div className="text-[10px] font-bold text-[#0A2540]/80 uppercase tracking-widest">
                    Mathematically Proven
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Floating Scientific Testing Graphic  */}
            <div className="relative h-[600px] w-full hidden md:block perspective-[1400px]">
              
              {/* Back Layer: Variant A (Control) */}
              <motion.div 
                animate={{ y: [-10, 10, -10], rotateX: [15, 20, 15], rotateZ: [-6, -4, -6], rotateY: [-15, -10, -15] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] left-[5%] w-[320px] rounded-[16px] border border-[#0A2540]/10 bg-white/80 backdrop-blur-sm shadow-xl p-0 overflow-hidden z-10 opacity-70 grayscale"
              >
                 <div className="w-full h-8 bg-gray-100 flex items-center px-4 gap-1.5 border-b border-gray-200">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <div className="ml-auto text-[8px] font-bold text-gray-400 uppercase tracking-widest">Control | Var A</div>
                 </div>
                 <div className="p-6">
                    <div className="w-1/2 h-4 bg-gray-300 rounded mb-4" />
                    <div className="w-3/4 h-3 bg-gray-200 rounded mb-2" />
                    <div className="w-2/3 h-3 bg-gray-200 rounded mb-8" />
                    <div className="w-32 h-10 bg-[#0A2540]/90 rounded-full flex items-center justify-center text-[10px] text-white font-bold opacity-60">Buy Now</div>
                 </div>
                 <div className="absolute inset-0 bg-red-500/5 mix-blend-multiply" />
              </motion.div>
              
              {/* Middle Layer: Variant B (Challenger) with Fake Heatmap */}
              <motion.div 
                animate={{ y: [-5, 15, -5], rotateX: [10, 15, 10], rotateZ: [-2, 0, -2], rotateY: [-5, 0, -5] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[20%] right-[5%] w-[360px] rounded-[16px] border border-[#06B6D4]/30 bg-white shadow-[0_30px_60px_rgba(6,182,212,0.15)] p-0 overflow-hidden z-20"
              >
                 <div className="w-full h-8 bg-white flex items-center px-4 gap-1.5 border-b border-gray-100">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <div className="ml-auto flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
                       <span className="text-[8px] font-bold text-[#06B6D4] uppercase tracking-widest">Winner | Var B</span>
                    </div>
                 </div>
                 <div className="p-8 relative">
                    {/* Simulated Heatmap Glow */}
                    <div className="absolute top-[60%] left-[30%] w-32 h-32 bg-[radial-gradient(circle,_rgba(244,63,94,0.6)_0%,_transparent_70%)] blur-xl pointer-events-none mix-blend-multiply" />
                    <div className="absolute top-[20%] left-[10%] w-24 h-24 bg-[radial-gradient(circle,_rgba(245,158,11,0.5)_0%,_transparent_70%)] blur-lg pointer-events-none mix-blend-multiply" />
                    
                    <div className="w-2/3 h-6 bg-[#0A2540] rounded mb-4" />
                    <div className="w-full h-3 bg-gray-100 rounded mb-2" />
                    <div className="w-5/6 h-3 bg-gray-100 rounded mb-8" />
                    <div className="flex gap-4 items-center relative z-10">
                       <div className="w-40 h-12 bg-gradient-to-r from-[#06B6D4] to-[#14B8A6] rounded-full flex items-center justify-center text-xs text-white font-bold shadow-lg shadow-[#06B6D4]/30 cursor-pointer hover:scale-105 transition-transform">Get Started Free</div>
                       <div className="text-[10px] font-bold text-gray-400 border-b border-gray-300">View Demo</div>
                    </div>
                 </div>
              </motion.div>

              {/* Front Top Layer: Test Results Confidence Chart */}
              <motion.div 
                animate={{ y: [0, 20, 0], rotateX: [5, 10, 5], rotateZ: [2, 4, 2], rotateY: [-5, 0, -5] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[5%] left-[15%] w-[420px] rounded-[32px] border border-white/50 bg-white shadow-[0_40px_80px_rgba(244,63,94,0.1)] p-6 z-30 flex items-center gap-6"
              >
                 <div className="flex-1">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Conversion Uplift</div>
                    <div className="text-4xl font-black font-heading text-[#0A2540] mb-4">+38.4%</div>
                    
                    <div className="space-y-3">
                       <div className="flex items-center gap-3">
                          <div className="text-[10px] font-bold text-gray-400 w-12">VAR A</div>
                          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                             <div className="w-[45%] h-full bg-gray-300" />
                          </div>
                          <div className="text-[10px] font-bold text-[#0A2540]">2.1%</div>
                       </div>
                       <div className="flex items-center gap-3">
                          <div className="text-[10px] font-bold text-[#06B6D4] w-12 flex items-center gap-1">
                             <FiCheckCircle /> VAR B
                          </div>
                          <div className="w-full h-2 bg-[#06B6D4]/10 rounded-full overflow-hidden">
                             <motion.div initial={{ width: "45%" }} animate={{ width: "83%" }} transition={{ duration: 1.5, delay: 0.5 }} className="h-full bg-gradient-to-r from-[#06B6D4] to-[#14B8A6]" />
                          </div>
                          <div className="text-[10px] font-bold text-[#0A2540]">3.9%</div>
                       </div>
                    </div>
                 </div>
                 
                 <div className="w-24 h-24 rounded-full border-8 border-[#F4F6F8] border-t-[#F43F5E] flex items-center justify-center shrink-0 shadow-inner relative">
                    <div className="absolute inset-2 border-[6px] border-[#F4F6F8] border-r-[#F43F5E]/50 rounded-full" />
                    <div className="flex flex-col items-center">
                       <span className="text-xl font-black text-[#0A2540]">99%</span>
                       <span className="text-[6px] font-bold uppercase text-gray-400 text-center leading-tight">Statistical<br/>Significance</span>
                    </div>
                 </div>
              </motion.div>

            </div>
          </div>
        </section>


        {/* =========================================
            SECTION 2: TECH STACK 
            ========================================= */}
        <section className="px-6 py-12 border-y border-[#0A2540]/5 bg-white">
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-[10px] uppercase tracking-[0.3em] font-bold text-[#0A2540]/40 mb-8">
              Powered by Industry-Leading Diagnostic Testing
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaVial className="text-[#06B6D4] text-3xl" /> VWO Testing</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaHotjar className="text-[#F43F5E] text-3xl" /> Hotjar</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaGoogle className="text-blue-500 text-3xl" /> Analytics 4</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaChartLine className="text-[#10B981] text-3xl" /> Amplitude</div>
            </div>
          </div>
        </section>


        {/* =========================================
            SECTION 3: CORE CAPABILITIES (SERVICES GRID)
            ========================================= */}
        <section className="px-6 py-32 relative bg-[#F4F6F8]">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerVariant}
            className="mx-auto max-w-6xl"
          >
            <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
              <motion.div variants={reveal} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 text-[#06B6D4] text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                <FiSliders className="w-3 h-3" /> Diagnostics & Implementation
              </motion.div>
              <motion.h2 variants={reveal} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-[#0A2540] max-w-3xl">
                We design scientifically proven funnels.
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  variants={reveal}
                  className="group relative rounded-[32px] border border-[#0A2540]/10 bg-white p-8 overflow-hidden transition-all duration-500 shadow-[0_8px_30px_rgba(10,37,64,0.03)] hover:shadow-[0_40px_60px_rgba(6,182,212,0.08)] hover:-translate-y-2 hover:border-[#06B6D4]/30"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#06B6D4] rounded-full blur-[100px] opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="absolute top-8 right-8 text-8xl font-black font-heading text-[#0A2540]/5 italic transform rotate-12 transition-transform duration-500 group-hover:scale-110">
                    {idx + 1}
                  </div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-[#F4F6F8] flex items-center justify-center text-[#06B6D4] mb-8 transition-colors duration-500 group-hover:bg-[#06B6D4] group-hover:text-white">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading mb-4 text-[#0A2540] pr-4">
                      {service.title}
                    </h3>
                    <p className="text-[0.95rem] text-[#0A2540]/70 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>


        {/* =========================================
            SECTION 4: PORTFOLIO TEASER
            ========================================= */}
        <section className="px-6 pb-32 bg-[#F4F6F8]">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F43F5E]/10 border border-[#F43F5E]/20 text-[#F43F5E] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                  <FiCheckCircle className="w-3 h-3" /> Statistical Winners
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#0A2540]">
                  Split tests that<br/>skyrocket profit margins.
                </h2>
              </motion.div>
              <Link href="/work" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#0A2540] hover:text-[#06B6D4] transition-colors">
                View All Case Studies <FiArrowRight className="transition-transform group-hover:translate-x-2" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group overflow-hidden rounded-[32px] bg-white border border-[#0A2540]/10 shadow-[0_10px_40px_rgba(10,37,64,0.03)] relative hover:shadow-[0_20px_60px_rgba(6,182,212,0.08)] transition-all duration-500"
                >
                  <div className="relative h-[340px] w-full overflow-hidden bg-[#EAF1F7] p-8 flex flex-col justify-end">
                    <div className="absolute inset-0 z-0">
                       <Image
                         src={project.image}
                         alt={project.title}
                         fill
                         className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-multiply"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/60 to-transparent" />
                    </div>
                    
                    <div className="relative z-10 w-full mb-2">
                      <div className="inline-flex items-center gap-2 rounded-md bg-white/20 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-[#A5F3FC]">
                        {project.category}
                      </div>
                      <h3 className="text-3xl font-extrabold font-heading text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-lg leading-relaxed text-[#0A2540]/70 font-light">
                      {project.summary}
                    </p>
                    <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-sm font-bold uppercase text-[#06B6D4]">
                       <span className="tracking-widest">Read Study</span>
                       <FiArrowRight />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* =========================================
            SECTION 5: THE PROCESS (THE SCIENTIFIC METHOD)
            ========================================= */}
        <section className="px-6 py-32 border-y border-[#0A2540]/5 bg-white relative overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-24 relative z-20">
              <span className="inline-block rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.35em] text-[#06B6D4] mb-6 shadow-sm">
                The Scientific Method
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight text-[#0A2540]">
                A/B Testing Infrastructure.
              </h2>
              <p className="mt-6 text-lg text-[#0A2540]/70 font-light max-w-2xl mx-auto">
                We remove all emotion from design. Every change we make is formulated as a strict hypothesis and proven via real-time user traffic before it goes live.
              </p>
            </div>

            {/* Desktop Graphical Split Test Flowchart */}
            <div className="hidden lg:flex flex-col items-center max-w-5xl mx-auto relative group pt-8 pb-12">
               
               {/* 1. Start Node */}
               <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative z-10 w-full mb-12 flex justify-center">
                  <div className="w-[500px] bg-[#F4F6F8] border border-[#0A2540]/5 rounded-2xl p-6 text-center shadow-sm relative z-10">
                     <span className="text-[10px] font-bold text-[#06B6D4] tracking-widest uppercase block mb-1">Phase 1</span>
                     <h3 className="text-lg font-bold font-heading text-[#0A2540]">{processSteps[0].title}</h3>
                     <p className="text-sm text-[#0A2540]/70 mt-2 font-light">{processSteps[0].text}</p>
                  </div>
                  {/* Split Path lines downwards */}
                  <div className="absolute top-[100%] left-[30%] w-[1px] h-12 bg-gradient-to-b from-[#0A2540]/20 to-transparent" />
                  <div className="absolute top-[100%] right-[30%] w-[1px] h-12 bg-gradient-to-b from-[#06B6D4]/50 to-[#06B6D4]" />
               </motion.div>

               {/* 2. The Split (A/B) */}
               <div className="w-full flex justify-between gap-8 mb-12 relative z-10 px-12">
                  {/* Variant A Control */}
                  <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10%" }} className="w-1/2 bg-white border border-gray-200 rounded-[24px] p-8 shadow-sm opacity-60 grayscale filter">
                     <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-2">
                        <h3 className="text-lg font-bold font-heading text-gray-500">Control (Current)</h3>
                        <span className="font-mono text-xs font-bold text-gray-400">VAR A</span>
                     </div>
                     <p className="text-sm text-gray-500 font-light">The existing design, baseline functionality, and copy structure currently deployed on the live URL.</p>
                  </motion.div>

                  {/* Central "VS" badge */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center font-bold text-[#0A2540] z-20 font-heading">VS</div>

                  {/* Variant B Challenger */}
                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10%" }} className="w-1/2 bg-[#06B6D4]/5 border-2 border-[#06B6D4]/30 rounded-[24px] p-8 shadow-[0_10px_30px_rgba(6,182,212,0.1)] relative overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/10 to-transparent pointer-events-none" />
                     <div className="flex items-center justify-between mb-4 border-b border-[#06B6D4]/20 pb-2">
                        <h3 className="text-lg font-bold font-heading text-[#0A2540]">{processSteps[1].title}</h3>
                        <span className="font-mono text-xs font-bold text-[#06B6D4]">VAR B</span>
                     </div>
                     <p className="text-sm text-[#0A2540]/80 font-light relative z-10">{processSteps[1].text}</p>
                  </motion.div>
               </div>

               {/* 3. The Test Running */}
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} className="w-full max-w-[500px] text-center mb-12 relative">
                  {/* Reverse lines merging */}
                  <div className="absolute bottom-[100%] left-[10%] w-[40%] h-[1px] bg-gradient-to-r from-transparent to-[#0A2540]/20" />
                  <div className="absolute bottom-[100%] right-[10%] w-[40%] h-[1px] bg-gradient-to-l from-[#06B6D4]/50 to-[#06B6D4]" />
                  
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A2540] text-white rounded-full text-sm font-bold shadow-xl mx-auto z-10 relative">
                     <FiTarget className="text-[#06B6D4]" /> {processSteps[2].title}
                  </div>
                  <p className="text-[12px] text-[#0A2540]/60 mt-4 px-8 leading-relaxed font-light">{processSteps[2].text}</p>
               </motion.div>

               {/* 4. The Winner */}
               <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-10%" }} className="w-full flex justify-center relative">
                  <div className="w-[500px] border border-[#06B6D4]/30 bg-gradient-to-br from-white to-[#06B6D4]/5 rounded-[32px] p-8 text-center shadow-[0_20px_50px_rgba(6,182,212,0.15)] relative">
                     <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#06B6D4] to-[#14B8A6] text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md flex items-center gap-1">
                        <FiCheckCircle /> Statistical Winner
                     </div>
                     <h3 className="text-xl font-bold font-heading text-[#0A2540] mt-4 mb-2">{processSteps[3].title}</h3>
                     <p className="text-sm text-[#0A2540]/70 font-light max-w-sm mx-auto">{processSteps[3].text}</p>
                  </div>
               </motion.div>

            </div>

            {/* Mobile Vertical Blocks */}
            <div className="lg:hidden space-y-4 max-w-xl mx-auto relative px-4">
               {processSteps.map((step, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative bg-[#F4F6F8] p-6 rounded-[24px] border border-[#0A2540]/5">
                     <div className="text-[10px] uppercase font-bold text-[#06B6D4] tracking-widest mb-1">Phase 0{index+1}</div>
                     <h3 className="text-lg font-bold font-heading text-[#0A2540] mb-2">{step.title}</h3>
                     <p className="text-sm text-[#0A2540]/70 font-light">{step.text}</p>
                  </motion.div>
               ))}
            </div>

          </div>
        </section>


        {/* =========================================
            SECTION 6: FINAL CTA 
            ========================================= */}
        <section className="px-6 pb-24 relative bg-[#F4F6F8] py-16">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
            className="mx-auto max-w-6xl relative overflow-hidden rounded-[40px] bg-[#0A2540] px-10 py-24 text-center shadow-[0_20px_60px_rgba(10,37,64,0.3)]"
          >
            {/* Background dynamic CRO lighting */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(6,182,212,0.35)_0%,_transparent_70%)] blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(244,63,94,0.3)_0%,_transparent_70%)] blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
            
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

            <div className="relative z-10 flex flex-col items-center">
              <span className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.35em] text-[#A5F3FC] mb-8 backdrop-blur-md">
                Fix Your Funnel Leaks
              </span>
              <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight font-heading max-w-4xl mx-auto leading-[1.05] text-white">
                Ready to instantly multiply the revenue you get from existing traffic?
              </h2>
              <p className="mt-8 max-w-2xl text-lg text-white/70 mx-auto font-light">
                Submit your URL today. We will run a preliminary friction audit and point out the exact elements that are actively costing you sales.
              </p>
              
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
                <Link
                  href="/#contact"
                  className="group rounded-full bg-[#06B6D4] px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all shadow-[0_10px_30px_rgba(6,182,212,0.4)] hover:scale-105 hover:bg-[#0891b2] flex items-center gap-3"
                >
                  Request UX/CRO Audit <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/work"
                  className="rounded-full border border-white/20 px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-white/10 backdrop-blur-sm"
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
