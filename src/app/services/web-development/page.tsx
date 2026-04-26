"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../../components/Footer";
import { 
  FiLayout, FiTrendingUp, FiTarget, 
  FiArrowRight, FiCode, FiZap, FiBarChart2
} from "react-icons/fi";
import { FaStar, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
} satisfies Variants;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
} satisfies Variants;

const services = [
  {
    title: "E-Commerce Platforms",
    description: "High-conversion storefronts designed to minimize friction and maximize average order value.",
    icon: FiTrendingUp,
  },
  {
    title: "Corporate Websites",
    description: "Premium, trust-building digital headquarters that position you as an industry leader.",
    icon: FiLayout,
  },
  {
    title: "Web Applications",
    description: "Complex, data-driven web apps built on fast, scalable modern frameworks.",
    icon: FiCode,
  },
  {
    title: "Landing Pages & CRO",
    description: "Laser-focused funnels engineered specifically for paid ad traffic conversion.",
    icon: FiTarget,
  },
];

const processSteps = [
  {
    title: "Requirements Gathering",
    text: "We collaborate with you to gather and understand your business needs and objectives.",
  },
  {
    title: "Iterative Planning",
    text: "We conduct iterative planning sessions to adapt to emerging requirements and feedback.",
  },
  {
    title: "Design & Prototyping",
    text: "We design interactive mockups and prototypes to validate functionality.",
  },
  {
    title: "Incremental Development",
    text: "Our team builds in short cycles using the latest technologies, adjusting to feedback.",
  },
  {
    title: "Continuous Testing",
    text: "Testing is an integral part of every sprint. Every increment undergoes rigorous testing.",
  },
  {
    title: "Regular Releases",
    text: "We frequently release updates, delivering new features and improvements to users regularly.",
  },
];

const featuredProjects = [
  {
    title: "Yastudy",
    category: "EdTech Platform",
    image: "/images/project1.png",
    summary:
      "A digital-first learning platform built to simplify language training, exam prep, and international admissions workflows.",
  },
  {
    title: "Zenfora Foods",
    category: "E-Commerce",
    image: "/images/zenfora-food.png",
    summary:
      "A vibrant D2C storefront designed to showcase product range, support repeat purchases, and improve the online buying experience.",
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
          ? "text-[#0A2540]/80 hover:text-[#007BFF]"
          : "text-[#0A2540]/80 hover:text-[#007BFF]"
      }`}
    >
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
        {children}
      </span>
      <span
        className={`absolute left-0 top-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0 text-[#007BFF] font-bold`}
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
    <div className="min-h-screen bg-[#F4F6F8] text-[#0A2540] font-sans selection:bg-[#007BFF] selection:text-white">

      {/* Header - Light Mode Optimized */}
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
            className="font-bold text-[#0A2540] transition-colors duration-300 hover:text-[#007BFF]"
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
              className="hidden rounded-full border border-[#0A2540]/10 bg-white/50 backdrop-blur-md px-6 py-2.5 text-[11px] font-bold transition-all duration-300 hover:bg-[#007BFF] hover:border-[#007BFF] hover:text-white md:inline-flex text-[#0A2540]"
              href="/#contact"
            >
              Start a Project
            </Link>
            <button
              className="inline-flex h-10 items-center justify-center rounded-full border border-[#0A2540]/20 px-4 text-[11px] font-semibold transition md:hidden text-[#0A2540] hover:border-[#007BFF]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="mr-2">{menuOpen ? "Close" : "Menu"}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-0 relative overflow-hidden">
        
        {/* =========================================
            HERO SECTION - LIGHT, VISUAL & FLOATING
            ========================================= */}
        <section className="relative min-h-[100vh] flex items-center pt-32 pb-20 px-6">
          {/* Animated Background Ambience */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1.5 }}
              className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#007BFF]/10 blur-[150px]" 
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#00C6FF]/10 blur-[150px]" 
            />
            {/* Grid grid dots overlay (Light mode) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(10,37,64,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(10,37,64,0.04)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)]" />
          </div>

          <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center relative z-10">
            
            {/* Left: Copy & Actions */}
            <div className="max-w-2xl lg:pr-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0A2540]/10 bg-white/70 backdrop-blur-md px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#007BFF] shadow-sm"
              >
                <div className="h-2 w-2 rounded-full bg-[#007BFF] shadow-[0_0_10px_rgba(0,123,255,0.5)] animate-pulse" />
                Next-Gen Web Development
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight font-heading text-[#0A2540]"
              >
                We build websites that <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#00C6FF]">dominate</span> your market.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-lg md:text-xl text-[#0A2540]/70 leading-relaxed font-light max-w-xl"
              >
                Stop losing customers to slow, outdated designs. We engineer premium, lightning-fast digital experiences that capture attention and drive revenue.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-10 flex flex-wrap gap-5 items-center"
              >
                <Link
                  href="/#contact"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#007BFF] to-[#0052FF] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all shadow-[0_10px_30px_rgba(0,123,255,0.3)] hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(0,123,255,0.4)]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Start Building <FiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                
                <div className="flex items-center gap-3 px-4 py-2 bg-white/50 backdrop-blur-sm border border-[#0A2540]/10 rounded-full shadow-sm">
                  <div className="flex -space-x-3">
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-gray-200 to-gray-400" />
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-blue-200 to-blue-400" />
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-purple-200 to-purple-400" />
                  </div>
                  <div className="text-[10px] font-bold text-[#0A2540]/80 flex flex-col uppercase tracking-wider">
                    <div className="flex text-[#FFB800] text-[10px] mb-0.5">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <span>Trusted by 50+ Brands</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Floating Visual Composition (Light Theme) */}
            <div className="relative h-[500px] lg:h-[600px] w-full hidden md:block perspective-[1200px] perspective-origin-center scale-90 lg:scale-100">
              
              {/* Main Center UI Card (Dashboard Mockup) */}
              <motion.div 
                initial={{ opacity: 0, y: "-40%", x: "-50%" }}
                animate={{ opacity: 1, y: "-50%", x: "-50%" }}
                transition={{ duration: 0.8 }}
                className="absolute top-1/2 left-1/2 w-[480px] h-[340px] rounded-[24px] border border-[#0A2540]/10 bg-white/95 backdrop-blur-xl shadow-[0_30px_100px_rgba(10,37,64,0.15)] overflow-hidden z-20"
              >
                {/* Mac Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[#0A2540]/5 bg-[#F4F6F8]">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  <div className="mx-auto bg-white border border-[#0A2540]/5 px-3 py-1 rounded-md text-[10px] text-[#0A2540]/40 font-mono shadow-sm">dashboard.app</div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <div className="text-[#0A2540]/40 text-[10px] uppercase font-bold tracking-widest mb-1">Total Revenue</div>
                      <div className="text-3xl font-extrabold text-[#0A2540]">$1,240,490 <span className="text-sm text-[#27C93F] font-bold">+14.2%</span></div>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#007BFF] to-[#00C6FF] shadow-[0_10px_20px_rgba(0,123,255,0.3)] flex items-center justify-center">
                      <FiBarChart2 className="text-white text-xl" />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="w-full h-2 bg-[#F4F6F8] rounded-full overflow-hidden">
                        <motion.div initial={{ width: "0%" }} animate={{ width: "85%" }} transition={{ duration: 2, delay: 1 }} className="h-full bg-[#007BFF]" />
                      </div>
                      <div className="w-full h-2 bg-[#F4F6F8] rounded-full overflow-hidden">
                        <motion.div initial={{ width: "0%" }} animate={{ width: "65%" }} transition={{ duration: 2, delay: 1.2 }} className="h-full bg-[#00C6FF]" />
                      </div>
                      <div className="w-full h-2 bg-[#F4F6F8] rounded-full overflow-hidden">
                        <motion.div initial={{ width: "0%" }} animate={{ width: "92%" }} transition={{ duration: 2, delay: 1.4 }} className="h-full bg-indigo-500" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 grid grid-cols-3 gap-3">
                     <div className="h-16 rounded-xl border border-[#0A2540]/5 bg-[#F4F6F8]" />
                     <div className="h-16 rounded-xl border border-[#0A2540]/5 bg-[#F4F6F8]" />
                     <div className="h-16 rounded-xl border border-[#0A2540]/5 bg-[#F4F6F8]" />
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 1: Performance Badge (Top Right) */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-10 right-4 w-[200px] rounded-2xl border border-[#0A2540]/10 bg-white/95 backdrop-blur-xl p-4 shadow-[0_20px_50px_rgba(10,37,64,0.1)] z-30 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-4 border-[#27C93F] bg-green-50 flex items-center justify-center">
                    <span className="text-lg font-extrabold text-[#27C93F]">99</span>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#0A2540]/40 tracking-wider">Performance</div>
                    <div className="text-xs font-bold text-[#0A2540]">Lighthouse</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 2: Code Window (Bottom Left) */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-16 left-0 w-[260px] rounded-2xl border border-[#0A2540]/10 bg-white/95 backdrop-blur-xl p-5 shadow-[0_30px_60px_rgba(10,37,64,0.1)] z-30 font-mono text-xs hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex gap-1.5 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0A2540]/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0A2540]/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0A2540]/20" />
                </div>
                <div className="text-[#FF5F56]">&lt;<span className="text-purple-600">motion.div</span></div>
                <div className="pl-4 text-[#FFBD2E]">initial=<span className="text-indigo-500">&#123;</span><span className="text-[#0A2540]">...</span><span className="text-indigo-500">&#125;</span></div>
                <div className="pl-4 text-[#FFBD2E]">animate=<span className="text-indigo-500">&#123;</span><span className="text-[#0A2540]">...</span><span className="text-indigo-500">&#125;</span></div>
                <div className="pl-4 text-[#FFBD2E]">className=<span className="text-green-600">"magical"</span></div>
                <div className="text-[#FF5F56]">&gt;</div>
                <div className="pl-4 text-[#0A2540]/70 font-sans">Building the future.</div>
                <div className="text-[#FF5F56]">&lt;/<span className="text-purple-600">motion.div</span>&gt;</div>
              </motion.div>
              
              {/* Floating Element 3: Speed Icon */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute top-[40%] text-[#00C6FF] left-4 text-4xl blur-[2px] z-10 hover:scale-110 hover:opacity-100 transition-all duration-300"
              >
                <FiZap />
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
              Powered by industry-leading technology
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaReact className="text-[#61DAFB] text-3xl" /> React</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><span className="text-3xl font-black italic border-b-4 border-[#0A2540] bg-white px-1 rounded-sm">N</span> Next.js</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><span className="text-[#38B2AC] text-3xl font-black">~</span> Tailwind</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaFigma className="text-[#F24E1E] text-3xl" /> Figma</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaNodeJs className="text-[#339933] text-3xl" /> Node.js</div>
            </div>
          </div>
        </section>


        {/* =========================================
            SECTION 3: WHAT WE BUILD (SERVICES GRID)
            ========================================= */}
        <section className="px-6 py-32 relative bg-[#F4F6F8]">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={stagger}
            className="mx-auto max-w-6xl"
          >
            <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
              <motion.div variants={reveal} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#007BFF]/10 border border-[#007BFF]/20 text-[#007BFF] text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                <FiLayout className="w-3 h-3" /> Digital Solutions
              </motion.div>
              <motion.h2 variants={reveal} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-[#0A2540] max-w-3xl">
                We engineer scalable digital products.
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={reveal}
                  className="group relative rounded-[32px] border border-[#0A2540]/10 bg-white p-8 md:p-12 overflow-hidden transition-all duration-500 shadow-[0_8px_30px_rgba(10,37,64,0.03)] hover:shadow-[0_20px_40px_rgba(0,123,255,0.1)] hover:-translate-y-2 hover:border-[#007BFF]/30"
                >
                  {/* Glowing background on hover */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#007BFF] rounded-full blur-[120px] opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-[#007BFF]/10 flex items-center justify-center text-[#007BFF] mb-8 border border-[#007BFF]/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-extrabold font-heading mb-4 text-[#0A2540]">
                      {service.title}
                    </h3>
                    <p className="text-lg text-[#0A2540]/70 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>


        {/* =========================================
            SECTION 4: PREMIUM PORTFOLIO TEASER
            ========================================= */}
        <section className="px-6 pb-32">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                  <FiCode className="w-3 h-3" /> Recent Work
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#0A2540]">
                  Visual excellence,<br/>engineered to perform.
                </h2>
              </motion.div>
              <Link href="/work" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#007BFF] hover:text-[#0052FF] transition-colors">
                View All Projects <FiArrowRight className="transition-transform group-hover:translate-x-2" />
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
                  className="group overflow-hidden rounded-[32px] bg-white border border-[#0A2540]/10 shadow-sm relative hover:shadow-[0_20px_40px_rgba(10,37,64,0.08)] transition-shadow duration-500"
                >
                  <div className="relative h-[400px] w-full overflow-hidden bg-[#EAF1F7]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/70 via-[#0A2540]/10 to-transparent" />
                    <div className="absolute bottom-0 w-full p-8">
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-[#8FD0FF]">
                        {project.category}
                      </div>
                      <h3 className="text-2xl font-extrabold font-heading text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-base leading-relaxed text-[#0A2540]/70 font-light">
                      {project.summary}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* =========================================
            SECTION 5: THE PROCESS (AGILE LOOP)
            ========================================= */}
        <section className="px-6 py-28 border-t border-[#0A2540]/5 bg-white relative overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-24">
              <span className="inline-block rounded-full bg-[#4aab56]/10 border border-[#4aab56]/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.35em] text-[#4aab56] mb-6 shadow-sm">
                Agile Methodology
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading leading-tight text-[#0A2540]">
                Continuous Delivery Loop.
              </h2>
              <p className="mt-4 text-lg text-[#0A2540]/70 font-light max-w-2xl mx-auto">
                We build in short cycles, adapting to feedback and delivering working software rapidly through a verified agile process.
              </p>
            </div>

            {/* Desktop Graphical Agile Loop */}
            <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-x-8 items-center max-w-6xl mx-auto">
              
              {/* Left Column Text Nodes */}
              <div className="flex flex-col gap-16 text-right relative z-10 p-4">
                {/* 04 */}
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <div className="flex items-center justify-end gap-3 mb-2">
                    <div className="w-12 h-px bg-[#4aab56] opacity-50 block" />
                    <span className="text-4xl font-extrabold text-[#4aab56]">04</span>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0A2540] mb-2">{processSteps[3].title}</h3>
                  <p className="text-sm text-[#0A2540]/70 pl-16 leading-relaxed">{processSteps[3].text}</p>
                </motion.div>
                {/* 05 */}
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10%" }}>
                  <div className="flex items-center justify-end gap-3 mb-2">
                    <div className="w-12 h-px bg-[#4aab56] opacity-50 block" />
                    <span className="text-4xl font-extrabold text-[#4aab56]">05</span>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0A2540] mb-2">{processSteps[4].title}</h3>
                  <p className="text-sm text-[#0A2540]/70 pl-16 leading-relaxed">{processSteps[4].text}</p>
                </motion.div>
                {/* 01 */}
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10%" }} className="mt-8 relative">
                  <div className="flex items-center justify-end gap-3 mb-2">
                    <div className="absolute right-[50px] w-6 h-[2px] bg-[#0A2540] -top-8 rotate-90 hidden" />
                    <span className="text-4xl font-extrabold text-[#4aab56]">01</span>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0A2540] mb-2">{processSteps[0].title}</h3>
                  <p className="text-sm text-[#0A2540]/70 pl-16 leading-relaxed">{processSteps[0].text}</p>
                </motion.div>
              </div>

              {/* Central Abstract SVG Loop Graphic */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                className="relative w-[450px] h-[450px] flex items-center justify-center z-0"
              >
                <svg viewBox="0 0 500 500" className="w-[130%] h-[130%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl" style={{ overflow: "visible" }}>
                  {/* Central Globe Frame */}
                  <circle cx="250" cy="250" r="85" fill="none" stroke="#216ac6" strokeWidth="3" />
                  <ellipse cx="250" cy="250" rx="35" ry="85" fill="none" stroke="#216ac6" strokeWidth="3" />
                  <ellipse cx="250" cy="250" rx="85" ry="35" fill="none" stroke="#216ac6" strokeWidth="3" />
                  
                  {/* Left Green Continuous Arc */}
                  <path d="M 250 60 A 190 190 0 0 0 250 440" fill="none" stroke="#4aab56" strokeWidth="65" />
                  {/* Right Blue Continuous Arc */}
                  <path d="M 250 440 A 190 190 0 0 0 250 60" fill="none" stroke="#216ac6" strokeWidth="65" />
                  
                  {/* Top Left Blue Arrow Head overlaying the green */}
                  <polygon points="250, -15 250, 135 140, 60" fill="#216ac6" />
                  
                  {/* Bottom Right Green Arrow Head overlaying the blue */}
                  <polygon points="250, 365 250, 515 360, 440" fill="#4aab56" />

                  {/* Left Green Entry Flow Arrow (Bottom Left) connecting to Loop */}
                  <polygon points="-50,390 110,390 110,350 180,415 110,480 110,440 -50,440" fill="#58c465" />
                  
                  {/* Right Green Exit Flow Arrow (Bottom Right) exiting Loop */}
                  <polygon points="320,390 550,390 550,350 620,415 550,480 550,440 320,440" fill="#58c465" />
                </svg>
              </motion.div>

              {/* Right Column Text Nodes */}
              <div className="flex flex-col gap-16 text-left relative z-10 p-4">
                {/* 03 */}
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <div className="flex items-center justify-start gap-3 mb-2">
                    <span className="text-4xl font-extrabold text-[#4aab56]">03</span>
                    <div className="w-12 h-px bg-[#4aab56] opacity-50 block" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0A2540] mb-2">{processSteps[2].title}</h3>
                  <p className="text-sm text-[#0A2540]/70 pr-16 leading-relaxed">{processSteps[2].text}</p>
                </motion.div>
                {/* 02 */}
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10%" }}>
                  <div className="flex items-center justify-start gap-3 mb-2">
                    <span className="text-4xl font-extrabold text-[#4aab56]">02</span>
                    <div className="w-12 h-px bg-[#4aab56] opacity-50 block" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0A2540] mb-2">{processSteps[1].title}</h3>
                  <p className="text-sm text-[#0A2540]/70 pr-16 leading-relaxed">{processSteps[1].text}</p>
                </motion.div>
                {/* 06 */}
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10%" }} className="mt-8 relative">
                  <div className="flex items-center justify-start gap-3 mb-2">
                    <span className="text-4xl font-extrabold text-[#4aab56]">06</span>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0A2540] mb-2">{processSteps[5].title}</h3>
                  <p className="text-sm text-[#0A2540]/70 pr-16 leading-relaxed">{processSteps[5].text}</p>
                </motion.div>
              </div>

            </div>

            {/* Mobile / Tablet Vertical Steps */}
            <div className="lg:hidden relative space-y-6 max-w-2xl mx-auto">
              {/* Vertical connecting line */}
              <div className="absolute left-8 top-8 bottom-8 w-[2px] bg-[#4aab56]/20" />
              
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }}
                  className="relative grid grid-cols-[auto_1fr] gap-6 items-start"
                >
                  <div className="relative z-10 w-16 h-16 rounded-full bg-white border-[3px] border-[#4aab56] shadow-md flex items-center justify-center font-bold text-[#4aab56] font-heading text-xl">
                    0{index + 1}
                  </div>
                  <div className="rounded-[22px] border border-[#0A2540]/10 bg-white p-6 md:p-8 shadow-[0_8px_30px_rgba(10,37,64,0.03)] hover:border-[#4aab56]/40 transition-colors">
                    <h3 className="text-2xl font-bold font-heading mb-3 text-[#0A2540]">{step.title}</h3>
                    <p className="text-base text-[#0A2540]/70 leading-relaxed font-light">{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* =========================================
            SECTION 6: FINAL CTA (Light, Vibrant)
            ========================================= */}
        <section className="px-6 pb-24 relative bg-[#F4F6F8]">
          <div className="h-32 bg-white" /> {/* White spacing bridge from prev section */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
            className="mx-auto max-w-6xl relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#0A2540] to-[#1a365d] px-10 py-24 text-center shadow-2xl mt-[-8rem]"
          >
            {/* Visual background elements within CTA */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#007BFF]/30 to-transparent rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#00C6FF]/20 to-transparent rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center">
              <span className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.35em] text-[#A5C8FF] mb-8 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                Ready to dominate?
              </span>
              <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight font-heading max-w-3xl mx-auto leading-tight text-white">
                Let's build your next big competitive advantage.
              </h2>
              <p className="mt-8 max-w-xl text-lg text-white/70 mx-auto font-light">
                Schedule a discovery call with our technical directors. We'll outline a roadmap tailored to your specific goals and timeline.
              </p>
              
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
                <Link
                  href="/#contact"
                  className="group rounded-full bg-[#007BFF] px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all shadow-[0_10px_30px_rgba(0,123,255,0.4)] hover:scale-105 hover:bg-[#006DE6] flex items-center gap-3"
                >
                  Start The Conversation <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/work"
                  className="rounded-full border border-white/20 px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-white/10 backdrop-blur-sm"
                >
                  See Portfolio
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
