"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../../components/Footer";
import { 
  FiActivity, FiBarChart2, FiCompass, FiFileText, FiFlag, FiLayers, 
  FiSearch, FiSettings, FiTrendingUp, FiArrowRight, FiTarget,
  FiMonitor
} from "react-icons/fi";
import { FaGoogle, FaSearchDollar } from "react-icons/fa";

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

const services = [
  {
    title: "SEO Audit & Strategy",
    description: "Deep diagnostics across technical health, visibility gaps, and competitor moats to build an irrefutable roadmap.",
    icon: FiCompass,
  },
  {
    title: "High-Intent Keyword Logic",
    description: "We abandon vanity metrics. We target keyword clusters that actively drive enterprise pipeline and revenue generation.",
    icon: FaSearchDollar,
  },
  {
    title: "Technical SEO Execution",
    description: "Eliminating crawl friction, mastering Core Web Vitals, and repairing site architecture to unlock maximum indexing.",
    icon: FiSettings,
  },
  {
    title: "On-Page Semantic Optimization",
    description: "Structuring entity relationships, meta logic, and internal linking to align perfectly with complex algorithm logic.",
    icon: FiLayers,
  },
  {
    title: "Authority Content Production",
    description: "Publishing deep-dive, subject-matter-expert content that satisfies search intent and effortlessly converts traffic.",
    icon: FiFileText,
  },
  {
    title: "Digital PR & Link Acquisition",
    description: "Earning trust signals and high-authority backlinks that act as an undeniable endorsement to search engines.",
    icon: FiFlag,
  },
];

const processSteps = [
  {
    title: "Diagnostic & Alignment",
    text: "We identify exactly what is holding back your domain—whether it's technical decay, weak content, or poor backlink profile.",
  },
  {
    title: "Keyword Intelligence",
    text: "Mapping out a precise content matrix focusing strictly on terms that your buyers search when they are ready to transact.",
  },
  {
    title: "Technical Foundation",
    text: "We resolve all indexation issues, optimize site speed, and establish a flawless architectural hierarchy for crawlers to navigate.",
  },
  {
    title: "Content & Authority Engine",
    text: "We launch monthly sprints of high-value content production combined with strategic outreach to compound organic authority.",
  },
];

const featuredProjects = [
  {
    title: "B2B SaaS Organic Expansion",
    category: "Search Strategy",
    image: "/images/project1.png", // Reuse existing provided paths
    summary:
      "A comprehensive technical overhaul and content sprint that drove a 410% increase in qualified organic signups within 8 months.",
  },
  {
    title: "E-Commerce Category Dominance",
    category: "Technical SEO",
    image: "/images/zenfora-food.png",
    summary:
      "Secured #1 positions for hyper-competitive product categories, completely eliminating the client's dependency on paid search.",
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
        "text-[#0A2540]/80 hover:text-[#00B873]"
      }`}
    >
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
        {children}
      </span>
      <span
        className={`absolute left-0 top-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0 text-[#00B873] font-bold`}
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
    <div className="min-h-screen bg-[#F4F6F8] text-[#0A2540] font-sans selection:bg-[#00B873] selection:text-white">

      {/* Header - Light Mode */}
      <header
        className={`fixed top-0 z-50 w-full text-[10px] uppercase tracking-[0.35em] transition-all duration-300 sm:text-xs ${
          isScrolled
            ? "bg-[#F4F6F8]/90 text-[#0A2540]/80 shadow-[0_4px_30px_rgba(10,37,64,0.05)] backdrop-blur-md py-4"
            : "bg-transparent text-[#0A2540]/90 py-6"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-5 sm:px-10">
          <Link href="/" className="block transition-opacity duration-300 hover:opacity-80">
            <img src="/setzet-nav-logoo.png" alt="Setzet Logo" className="h-8 sm:h-10 xl:h-12 w-auto object-contain" />
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
              className="hidden rounded-full border border-[#0A2540]/10 bg-white/50 backdrop-blur-md px-6 py-2.5 text-[11px] font-bold transition-all duration-300 hover:bg-[#00B873] hover:border-[#00B873] hover:text-white md:inline-flex text-[#0A2540]"
              href="/#contact"
            >
              Start a Project
            </Link>
            <button
              className="inline-flex h-10 items-center justify-center rounded-full border border-[#0A2540]/20 px-4 text-[11px] font-semibold transition md:hidden text-[#0A2540] hover:border-[#00B873]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="mr-2">{menuOpen ? "Close" : "Menu"}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-0 relative overflow-hidden">
        
        {/* =========================================
            HERO SECTION - THE GROWTH DASHBOARD
            ========================================= */}
        <section className="relative min-h-[100vh] flex items-center pt-32 pb-20 px-6">
          {/* Animated Background Ambience */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Emerald/Green & Blue Growth Gradients */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1.5 }}
              className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#00B873]/15 blur-[140px]" 
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute bottom-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#0A2540]/10 blur-[150px]" 
            />
            {/* Minimal Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(10,37,64,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,37,64,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)]" />
          </div>

          <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-8 items-center relative z-10">
            
            {/* Left: Copy & Actions */}
            <div className="max-w-xl lg:pr-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0A2540]/10 bg-white/70 backdrop-blur-md px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#00B873] shadow-sm"
              >
                <FiMonitor className="text-sm" /> Organic Growth & SEO
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight font-heading text-[#0A2540]"
              >
                Capture demand. <br />
                Dominate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A86B] to-[#007BFF]">Search.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-lg md:text-xl text-[#0A2540]/70 leading-relaxed font-light"
              >
                We build compounding search assets that intercept high-intent buyers, eliminate reliance on paid ads, and aggressively expand your domain authority.
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
                    Audit Your Funnel <FiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                
                <div className="flex items-center gap-3 px-4 py-3 bg-white/50 backdrop-blur-sm border border-[#0A2540]/10 rounded-full shadow-sm">
                  <FaGoogle className="text-xl text-[#EA4335]" />
                  <div className="text-[10px] font-bold text-[#0A2540]/80 uppercase tracking-widest">
                    Google Algorithmic Mastery
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Floating SEO Dashboard Graphic */}
            <div className="relative h-[600px] w-full hidden md:block perspective-[1400px]">
              
              {/* Back Layer: Rankings UI */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, rotateX: 10, rotateZ: -2, rotateY: -5 }}
                transition={{ duration: 0.8 }}
                className="absolute top-[20%] right-[10%] w-[380px] rounded-[24px] border border-[#0A2540]/10 bg-white backdrop-blur-xl shadow-2xl p-6 z-10 hover:-translate-y-2 transition-transform duration-300"
              >
                 <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                    <div className="font-bold text-[11px] uppercase tracking-widest text-gray-500">Target Keywords</div>
                    <div className="bg-[#00B873]/10 text-[#00B873] px-2 py-1 rounded-md text-[10px] font-bold uppercase">+14% MoM</div>
                 </div>
                 {[
                   { kw: "enterprise saas software", pos: 1, diff: "+3", diffColor: "text-[#00B873]" },
                   { kw: "b2b payment gateway", pos: 2, diff: "+1", diffColor: "text-[#00B873]" },
                   { kw: "cloud security platform", pos: 5, diff: "+4", diffColor: "text-[#00B873]" },
                   { kw: "healthcare compliance api", pos: 3, diff: "-", diffColor: "text-gray-400" },
                 ].map((item, i) => (
                   <div key={i} className="flex items-center justify-between py-2.5 group">
                      <div className="flex items-center gap-3">
                         <div className="w-6 h-6 rounded-md bg-gray-50 flex items-center justify-center text-xs font-bold text-gray-500">#{item.pos}</div>
                         <div className="text-sm font-semibold text-[#0A2540] group-hover:text-[#007BFF] transition-colors">{item.kw}</div>
                      </div>
                      <div className={`text-xs font-bold ${item.diffColor}`}>{item.diff}</div>
                   </div>
                 ))}
              </motion.div>
              
              {/* Middle Layer: Search Bar & Intent UI */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, rotateX: 5, rotateY: -2 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-[40%] left-[5%] w-[420px] rounded-full border border-gray-200 bg-white shadow-[0_20px_40px_rgba(10,37,64,0.1)] p-4 flex items-center gap-4 z-20 hover:-translate-y-2 transition-transform duration-300"
              >
                 <FiSearch className="text-gray-400 text-2xl ml-2" />
                 <div className="flex-1 text-[#0A2540] font-semibold text-lg overflow-hidden border-r-2 border-[#00B873] whitespace-nowrap animate-[typing_4s_steps(40,end)_infinite]">
                    how to scale organic traffic
                 </div>
                 <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0A2540] to-[#1a365d] flex items-center justify-center text-white shrink-0">
                    <FiArrowRight />
                 </div>
              </motion.div>

              {/* Front Top Layer: Growth Chart */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, rotateZ: 2 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-[10%] left-[20%] w-[460px] rounded-[32px] border border-white/50 bg-white/90 backdrop-blur-md shadow-[0_40px_80px_rgba(0,184,115,0.15)] p-6 z-30 hover:-translate-y-2 transition-transform duration-300"
              >
                  <div className="flex justify-between items-end mb-8">
                     <div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Organic Traffic</div>
                        <div className="text-4xl font-black font-heading text-[#0A2540]">4,293,105</div>
                     </div>
                     <div className="flex bg-[#00B873]/10 text-[#00B873] px-3 py-1.5 rounded-lg items-center gap-2">
                        <FiTrendingUp className="text-sm font-bold" /> <span className="text-xs font-black uppercase">+312% YoY</span>
                     </div>
                  </div>
                  
                  {/* Decorative chart */}
                  <div className="mt-4 h-32 w-full flex items-end gap-3 relative">
                     {/* Line chart overlay */}
                     <svg className="absolute inset-0 w-full h-full preserve-3d pointer-events-none" viewBox="0 0 400 120" fill="none" preserveAspectRatio="none">
                        <path d="M0,100 C50,90 100,110 150,70 C200,30 250,50 300,20 C350,-10 400,0 400,0 L400,120 L0,120 Z" fill="url(#gradient)" opacity="0.2" />
                        <path d="M0,100 C50,90 100,110 150,70 C200,30 250,50 300,20 C350,-10 400,0 400,0" stroke="#00B873" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                           <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="120" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#00B873" stopOpacity="1"/>
                              <stop offset="1" stopColor="#00B873" stopOpacity="0"/>
                           </linearGradient>
                        </defs>
                     </svg>
                     {/* Bars */}
                     {[20, 30, 25, 45, 60, 50, 80, 75, 95, 110, 105, 120].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-gray-200 to-gray-300 opacity-50 transition-all duration-700 hover:opacity-100 hover:from-[#00B873]/50 hover:to-[#00B873]" style={{ height: `${(h/120)*100}%` }} />
                     ))}
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
              Industry-Standard SEO & Analytics Architecture
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><span className="text-3xl font-black italic border-b-4 border-orange-500 bg-white px-1 rounded-sm">a</span> Ahrefs</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FiActivity className="text-orange-500 text-3xl" /> SEMrush</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaGoogle className="text-blue-500 text-3xl" /> GSC & GA4</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FiSearch className="text-green-500 text-3xl" /> Screaming Frog</div>
            </div>
          </div>
        </section>


        {/* =========================================
            SECTION 3: CORE CAPABILITIES (SERVICES GRID)
            ========================================= */}
        <section className="px-6 py-32 relative bg-[#F4F6F8]">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={stagger}
            className="mx-auto max-w-6xl"
          >
            <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
              <motion.div variants={reveal} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00B873]/10 border border-[#00B873]/20 text-[#00B873] text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                <FiCompass className="w-3 h-3" /> Technical & Content Core
              </motion.div>
              <motion.h2 variants={reveal} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-[#0A2540] max-w-3xl">
                A full-stack system for organic growth.
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  variants={reveal}
                  className="group relative rounded-[32px] border border-[#0A2540]/10 bg-white p-8 overflow-hidden transition-all duration-500 shadow-[0_8px_30px_rgba(10,37,64,0.03)] hover:shadow-[0_40px_60px_rgba(0,184,115,0.06)] hover:-translate-y-2 hover:border-[#00B873]/30"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#00B873] rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="absolute top-8 right-8 text-8xl font-black font-heading text-[#0A2540]/5 italic transform rotate-12 transition-transform duration-500 group-hover:scale-110">
                    {idx + 1}
                  </div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-[#F4F6F8] flex items-center justify-center text-[#00B873] mb-8 transition-colors duration-500 group-hover:bg-[#00B873] group-hover:text-white">
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#007BFF]/10 border border-[#007BFF]/20 text-[#007BFF] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                  <FiTarget className="w-3 h-3" /> Tangible Outcomes
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#0A2540]">
                  Visibility that turns into<br/>qualified pipeline.
                </h2>
              </motion.div>
              <Link href="/work" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#0A2540] hover:text-[#00B873] transition-colors">
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
                  className="group overflow-hidden rounded-[32px] bg-white border border-[#0A2540]/10 shadow-[0_10px_40px_rgba(10,37,64,0.03)] relative"
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
                      <div className="inline-flex items-center gap-2 rounded-md bg-white/20 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-white">
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
                    <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-sm font-bold uppercase text-[#00B873]">
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
            SECTION 5: THE PROCESS (THE SEO FLYWHEEL)
            ========================================= */}
        <section className="px-6 py-32 border-y border-[#0A2540]/5 bg-white relative overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-24 relative z-20">
              <span className="inline-block rounded-full bg-[#00B873]/10 border border-[#00B873]/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.35em] text-[#00B873] mb-6 shadow-sm">
                The SEO Flywheel
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight text-[#0A2540]">
                Momentum that compounds.
              </h2>
              <p className="mt-6 text-lg text-[#0A2540]/70 font-light max-w-2xl mx-auto">
                Organic visibility is not an event, it is an engine. We engineer a compounding system of technical precision and authoritative content that scales indefinitely.
              </p>
            </div>

            {/* Unique Flywheel / Continuous Loop Infographic */}
            <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-8">
               
               {/* Center Graphic */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
                 className="w-80 h-80 shrink-0 relative flex items-center justify-center order-1 md:order-2"
               >
                  {/* Static Outer Rings */}
                  <motion.div 
                     initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }}
                     className="absolute inset-0 rounded-full border border-dashed border-[#00B873]/40" 
                  />
                  <motion.div 
                     initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.2 }}
                     className="absolute inset-4 rounded-full border-[3px] border-[#0A2540]/5" 
                  />
                  
                  {/* Orbiting Nodes */}
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.4 }} className="absolute inset-0">
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#0A2540] rounded-full shadow-lg" />
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-[#007BFF] rounded-full shadow-lg" />
                     <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-[#00B873] rounded-full shadow-lg flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                     </div>
                  </motion.div>

                  {/* Core Hub */}
                  <div className="w-40 h-40 bg-white rounded-full shadow-[0_20px_50px_rgba(10,37,64,0.1)] border-[8px] border-[#F4F6F8] flex flex-col items-center justify-center z-10">
                     <FiTrendingUp className="text-4xl text-[#00B873] mb-2" />
                     <span className="font-heading font-extrabold text-[#0A2540] tracking-tight">GROWTH</span>
                  </div>
               </motion.div>

               {/* Left Steps */}
               <div className="space-y-8 flex-1 order-2 md:order-1 text-center md:text-right">
                  {[processSteps[0], processSteps[1]].map((step, idx) => (
                     <motion.div key={idx} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#F4F6F8] p-6 rounded-[24px]">
                        <div className="text-[10px] font-bold text-[#00B873] tracking-widest uppercase mb-2">Phase 0{idx+1}</div>
                        <h3 className="text-xl font-bold font-heading text-[#0A2540] mb-2">{step.title}</h3>
                        <p className="text-sm text-[#0A2540]/70 leading-relaxed font-light">{step.text}</p>
                     </motion.div>
                  ))}
               </div>

               {/* Right Steps */}
               <div className="space-y-8 flex-1 order-3 text-center md:text-left">
                  {[processSteps[2], processSteps[3]].map((step, idx) => (
                     <motion.div key={idx} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#F4F6F8] p-6 rounded-[24px]">
                        <div className="text-[10px] font-bold text-[#00B873] tracking-widest uppercase mb-2">Phase 0{idx+3}</div>
                        <h3 className="text-xl font-bold font-heading text-[#0A2540] mb-2">{step.title}</h3>
                        <p className="text-sm text-[#0A2540]/70 leading-relaxed font-light">{step.text}</p>
                     </motion.div>
                  ))}
               </div>
               
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
            {/* Background dynamic mesh lighting */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(0,184,115,0.4)_0%,_transparent_70%)] blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(0,123,255,0.4)_0%,_transparent_70%)] blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
            
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

            <div className="relative z-10 flex flex-col items-center">
              <span className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.35em] text-[#A7F3D0] mb-8 backdrop-blur-md">
                Claim Your Market Share
              </span>
              <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight font-heading max-w-4xl mx-auto leading-[1.05] text-white">
                Ready to turn organic search demand into active pipeline?
              </h2>
              <p className="mt-8 max-w-2xl text-lg text-white/70 mx-auto font-light">
                Secure your audit today. We'll map the exact gaps in your keyword footprint and outline the content required to intercept your biggest competitors.
              </p>
              
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
                <Link
                  href="/#contact"
                  className="group rounded-full bg-[#00B873] px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all shadow-[0_10px_30px_rgba(0,184,115,0.4)] hover:scale-105 hover:bg-[#009e62] flex items-center gap-3"
                >
                  Request Strategy Audit <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/work"
                  className="rounded-full border border-white/20 px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-white/10 backdrop-blur-sm"
                >
                  View Client Growth
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
