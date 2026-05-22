"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../../components/Footer";
import FAQSection from "../../../components/FAQSection";
import { 
  FiCrosshair, FiTrendingUp, FiTarget, FiFilter,
  FiArrowRight, FiPieChart, FiMonitor, FiRepeat, FiDollarSign
} from "react-icons/fi";
import { FaFacebookSquare, FaGoogle, FaTiktok, FaInstagram } from "react-icons/fa";

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
    title: "Paid Search (PPC)",
    description: "Intercept high-intent search queries. We manage bids, exact-match logic, and conversion tracking to ensure zero wasted ad spend.",
    icon: FaGoogle,
  },
  {
    title: "Paid Social Media",
    description: "Scroll-stopping creative paired with ruthless algorithmic targeting across Meta, TikTok, and LinkedIn ad networks.",
    icon: FiMonitor,
  },
  {
    title: "Conversion Rate Optimization",
    description: "Traffic means nothing without action. We run aggressive A/B tests on landing pages to drastically lower your Cost Per Acquisition.",
    icon: FiPieChart,
  },
  {
    title: "Retargeting Architectures",
    description: "Complex, dynamic multi-channel funnels that stalk abandoned carts and unconverted leads until they finally buy.",
    icon: FiRepeat,
  },
  {
    title: "Ad Copy & Creative",
    description: "We don't just buy media; we engineer the hooks. Direct-response copywriting and high-converting visual assets.",
    icon: FiCrosshair,
  },
  {
    title: "Growth Modeling / ROAS",
    description: "Deep attribution tracking to ensure every single dollar you input yields a mathematically predictable return on ad spend.",
    icon: FiDollarSign,
  },
];

const processSteps = [
  {
    title: "Top of Funnel: Acquisition",
    text: "Casting a laser-targeted net to drive cheap, relevant clicks using broad creative hooks and algorithmic audience prospecting.",
  },
  {
    title: "Middle of Funnel: Engagement",
    text: "Qualifying traffic through education and trust building. Segmenting visitors based on their exact interactions with your brand.",
  },
  {
    title: "Bottom of Funnel: Conversion",
    text: "Aggressive direct-response tactics. Hard offers, scarcity, and dynamic retargeting to force a definitive action.",
  },
  {
    title: "Post-Click: LTV Expansion",
    text: "Maximizing the lifetime value of acquired customers through upsells, cross-sells, and loyalty marketing loops.",
  },
];

const featuredProjects = [
  {
    title: "D2C Skincare Scaling",
    category: "Paid Social & CRO",
    image: "/images/project1.png", // Reuse existing provided paths
    summary:
      "Scaled ad spend from $5k to $50k/mo while maintaining an irrefutable 4.2x ROAS by hyper-optimizing TikTok video hooks.",
  },
  {
    title: "B2B SaaS Lead Generation",
    category: "Paid Search & LinkedIn",
    image: "/images/zenfora-food.png",
    summary:
      "Slashed Cost-Per-Lead (CPL) by 64% within 90 days completely restructuring Google Ads broad match into single keyword ad groups.",
  },
];

const performanceFaqs = [
  {
    question: "What exactly is Performance Marketing?",
    answer: "Unlike traditional advertising focused on 'brand awareness', performance marketing is entirely data-driven and ROI-obsessed. You only pay for measurable results—like clicks, leads, or sales. We focus strictly on lowering your Cost Per Acquisition (CPA) and maximizing Return on Ad Spend (ROAS)."
  },
  {
    question: "Which ad platforms are best for my business?",
    answer: "It depends on your model. B2B SaaS typically thrives on LinkedIn and Google Search (capturing intent). E-commerce and D2C brands often see massive scale on Meta (Facebook/Instagram) and TikTok (creating demand). We audit your funnel to deploy budget where it mathematically makes the most sense."
  },
  {
    question: "How long does it take to see a positive ROAS?",
    answer: "While we often see quick wins within the first few weeks by fixing glaring account errors, a true algorithmic scaling phase takes 60-90 days. This allows the pixel data to season and our rigorous creative A/B testing to identify the most profitable angles."
  },
  {
    question: "Do you handle the ad creative as well as the media buying?",
    answer: "Yes. Ad performance is heavily dictated by creative. Our team produces the high-converting visual assets and writes the direct-response copy, ensuring the media buying strategy and the creative hook are perfectly aligned."
  },
  {
    question: "What happens when iOS updates or algorithm changes occur?",
    answer: "We build resilient, server-side tracking architectures (like Meta's Conversions API) to bypass browser restrictions. By focusing on first-party data and robust retargeting funnels, we insulate your campaigns from unpredictable algorithmic shifts."
  }
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
        "text-[#0A2540]/80 hover:text-[#FF4A3F]"
      }`}
    >
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
        {children}
      </span>
      <span
        className={`absolute left-0 top-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0 text-[#FF4A3F] font-bold`}
      >
        {children}
      </span>
    </Link>
  );
};

export default function PerformanceMarketingPage() {
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
    <div className="min-h-screen bg-[#F4F6F8] text-[#0A2540] font-sans selection:bg-[#FF4A3F] selection:text-white">
      <title>Premium Performance Marketing | Setzet</title>
      <meta
        name="description"
        content="We buy attention profitably. Direct-response media buying, algorithmic targeting, and merciless CRO to maximize your return on ad spend."
      />

      {/* Header - Light Mode */}
      <header
        className={`fixed top-0 z-50 w-full text-[10px] uppercase tracking-[0.35em] transition-all duration-300 sm:text-xs px-6 sm:px-12 ${
          isScrolled
            ? "bg-[#F4F6F8]/90 text-[#0A2540]/80 shadow-[0_4px_30px_rgba(10,37,64,0.05)] backdrop-blur-md py-3"
            : "bg-transparent text-[#0A2540]/90 py-6"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4">
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
              className="hidden rounded-full border border-[#0A2540]/10 bg-white/50 backdrop-blur-md px-6 py-2.5 text-[11px] font-bold transition-all duration-300 hover:bg-[#FF4A3F] hover:border-[#FF4A3F] hover:text-white md:inline-flex text-[#0A2540]"
              href="/#contact"
            >
              Start a Project
            </Link>
            <button
              className="inline-flex h-10 items-center justify-center rounded-full border border-[#0A2540]/20 px-4 text-[11px] font-semibold transition md:hidden text-[#0A2540] hover:border-[#FF4A3F]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="mr-2">{menuOpen ? "Close" : "Menu"}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-0 relative overflow-hidden">
        
        {/* =========================================
            HERO SECTION - THE PERFORMANCE DASHBOARD
            ========================================= */}
        <section className="relative min-h-[100vh] flex items-center pt-32 pb-20 px-6 sm:px-12">
          {/* Animated Background Ambience */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Fiery Sunset Ad Gradients */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.5, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-[-5%] right-[5%] w-[45vw] h-[45vw] rounded-full bg-[#FF4A3F]/15 blur-[160px]" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              className="absolute bottom-[-10%] left-[-5%] w-[50vw] h-[50vw] rounded-full bg-[#FFB01A]/10 blur-[150px]" 
            />
            {/* Target Reticle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(10,37,64,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,37,64,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)]" />
          </div>

          <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-8 items-center relative z-10">
            
            {/* Left: Copy & Actions */}
            <div className="max-w-xl lg:pr-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0A2540]/10 bg-white/70 backdrop-blur-md px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF4A3F] shadow-sm"
              >
                <FiTarget className="text-sm" /> Paid Media & Acquisition
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight font-heading text-[#0A2540]"
              >
                Buy attention. <br />
                Scale <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4A3F] to-[#FFB01A]">Profitably.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-lg md:text-xl text-[#0A2540]/70 leading-relaxed font-light"
              >
                We stop bleeding ad budgets. Our direct-response media buyers execute aggressive cross-channel campaigns built strictly to mathematically scale your Return on Ad Spend.
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
                    Audit My Ad Account <FiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                
                <div className="flex items-center gap-3 px-4 py-3 bg-white/50 backdrop-blur-sm border border-[#0A2540]/10 rounded-full shadow-sm">
                  <FiDollarSign className="text-xl text-[#FFB01A]" />
                  <div className="text-[10px] font-bold text-[#0A2540]/80 uppercase tracking-widest">
                    Ruthlessly ROI Obsessed
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Floating Campaign ROI Graphic */}
            <div className="relative h-[600px] w-full hidden md:block perspective-[1400px]">
              
              {/* Back Layer: Ad Manager Campaign List */}
              <motion.div 
                initial={{ opacity: 0, y: 30, rotateX: 15, rotateZ: -6, rotateY: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 15, rotateZ: -6, rotateY: -15 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-[10%] left-[5%] w-[400px] rounded-[24px] border border-[#0A2540]/10 bg-white/90 backdrop-blur-md shadow-2xl p-6 z-10"
              >
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                     <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-[4px] bg-blue-500 flex items-center justify-center text-[10px] text-white font-bold">M</div>
                        <div className="font-bold text-[11px] uppercase tracking-widest text-gray-500">Live Campaigns</div>
                     </div>
                     <div className="bg-[#27C93F]/10 text-[#27C93F] px-2 py-1 rounded-md text-[10px] font-bold uppercase">Active</div>
                  </div>
                  {[
                    { name: "RETARGETING_Q4_OFFER", spend: "$4.1k", roas: "6.2x", cpa: "$14.10" },
                    { name: "COLD_PROSPECTING_VIDS", spend: "$12.8k", roas: "3.4x", cpa: "$32.40" },
                    { name: "SEARCH_BRAND_DEFENSE", spend: "$1.2k", roas: "14.1x", cpa: "$8.50" },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-1 py-3 group border-b border-gray-50 last:border-0">
                       <div className="text-[10px] font-bold text-[#0A2540] font-mono opacity-60 group-hover:text-[#FF4A3F]">{item.name}</div>
                       <div className="flex justify-between items-center w-full">
                          <div className="text-[10px] text-gray-400">Spend: <span className="font-bold text-[#0A2540]">{item.spend}</span></div>
                          <div className="text-[10px] text-gray-400">CPA: <span className="font-bold text-[#0A2540]">{item.cpa}</span></div>
                          <div className="text-xs font-bold text-[#27C93F] tracking-wide">ROAS {item.roas}</div>
                       </div>
                    </div>
                  ))}
              </motion.div>
              
              {/* Middle Layer: Direct Response Ad Creative Block */}
              <motion.div 
                initial={{ opacity: 0, y: 30, rotateX: 12, rotateZ: -2, rotateY: -10 }}
                animate={{ opacity: 1, y: 0, rotateX: 12, rotateZ: -2, rotateY: -10 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="absolute top-[45%] right-[0%] w-[280px] rounded-[24px] border border-white bg-white shadow-[0_30px_60px_rgba(10,37,64,0.1)] p-4 z-20"
              >
                  <div className="flex items-center gap-3 mb-3">
                     <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF4A3F] to-[#FFB01A]" />
                     <div>
                        <div className="text-xs font-bold text-[#0A2540]">Premium Brand</div>
                        <div className="text-[9px] text-gray-400">Sponsored</div>
                     </div>
                  </div>
                  <div className="text-xs text-[#0A2540]/80 mb-3 leading-tight">Stop wasting media budget on agencies that don't scale. Get your free ad account audit today. 👇</div>
                  <div className="w-full h-32 bg-[#F4F6F8] rounded-xl flex items-center justify-center border border-gray-100 overflow-hidden relative">
                     <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-200 to-transparent opacity-50" />
                     <FiTarget className="text-4xl text-[#FF4A3F] opacity-30" />
                     <div className="absolute bottom-2 left-3 bg-[#FF4A3F] text-white text-[8px] px-2 py-0.5 rounded font-bold uppercase tracking-widest leading-none">Limited Time</div>
                  </div>
                  <div className="flex items-center justify-between mt-3 px-1">
                     <div className="text-[10px] font-bold text-[#0A2540] uppercase tracking-wide">Claim Your Audit</div>
                     <div className="px-4 py-1.5 bg-[#F4F6F8] rounded-md text-[10px] font-bold text-[#007BFF]">Apply Now</div>
                  </div>
              </motion.div>

              {/* Front Top Layer: Total Revenue ROAS Gauge */}
              <motion.div 
                initial={{ opacity: 0, y: 30, rotateX: 5, rotateZ: 2, rotateY: -5 }}
                animate={{ opacity: 1, y: 0, rotateX: 5, rotateZ: 2, rotateY: -5 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="absolute bottom-[0%] left-[20%] w-[340px] rounded-[32px] border border-white/50 bg-white shadow-[0_40px_80px_rgba(255,74,63,0.15)] p-6 z-30 flex items-center gap-6"
              >
                 {/* Circle ROAS graph */}
                 <div className="relative w-24 h-24 shrink-0">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                       <circle cx="50" cy="50" r="45" fill="none" stroke="#F4F6F8" strokeWidth="10" />
                       <circle cx="50" cy="50" r="45" fill="none" stroke="#FF4A3F" strokeWidth="10" strokeLinecap="round" strokeDasharray="283" strokeDashoffset="50" className="drop-shadow-sm" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                       <div className="text-2xl font-black text-[#0A2540]">4.8x</div>
                       <div className="text-[7px] uppercase font-bold text-gray-400 tracking-widest">Global ROAS</div>
                    </div>
                 </div>
                 
                 <div className="flex flex-col gap-3 w-full">
                    <div>
                       <div className="text-[9px] uppercase tracking-widest font-bold text-gray-400 mb-0.5">Total Attributed Revenue</div>
                       <div className="text-2xl font-black font-heading text-[#0A2540]">$642,800.00</div>
                    </div>
                    <div className="w-full h-8 bg-gradient-to-r from-[#27C93F]/10 to-[#27C93F]/5 rounded-lg border border-[#27C93F]/20 flex items-center px-3 justify-between">
                       <span className="text-[9px] font-bold text-[#27C93F] uppercase tracking-wider">Target Exceeded</span>
                       <FiTrendingUp className="text-[#27C93F]" />
                    </div>
                 </div>
              </motion.div>

            </div>
          </div>
        </section>


        {/* =========================================
            SECTION 2: TECH STACK 
            ========================================= */}
        <section className="px-6 sm:px-12 py-12 border-y border-[#0A2540]/5 bg-white">
          <div className="mx-auto max-w-7xl">
            <p className="text-center text-[10px] uppercase tracking-[0.3em] font-bold text-[#0A2540]/40 mb-8">
              Industry-Standard Acquisition Platforms
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaFacebookSquare className="text-blue-600 text-3xl" /> Meta Ads</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaGoogle className="text-red-500 text-3xl" /> Google Ads</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaTiktok className="text-black text-3xl" /> TikTok Ads</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaInstagram className="text-pink-500 text-3xl" /> Instagram</div>
            </div>
          </div>
        </section>


        {/* =========================================
            SECTION 3: CORE CAPABILITIES (SERVICES GRID)
            ========================================= */}
        <section className="px-6 sm:px-12 py-32 relative bg-[#F4F6F8]">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={stagger}
            className="mx-auto max-w-7xl"
          >
            <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
              <motion.div variants={reveal} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF4A3F]/10 border border-[#FF4A3F]/20 text-[#FF4A3F] text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                <FiCrosshair className="w-3 h-3" /> Growth Vectors
              </motion.div>
              <motion.h2 variants={reveal} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-[#0A2540] max-w-3xl">
                We engineer scalable media campaigns.
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  variants={reveal}
                  className="group relative rounded-[32px] border border-[#0A2540]/10 bg-white p-8 overflow-hidden transition-all duration-500 shadow-[0_8px_30px_rgba(10,37,64,0.03)] hover:shadow-[0_40px_60px_rgba(255,74,63,0.08)] hover:-translate-y-2 hover:border-[#FF4A3F]/30"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4A3F] rounded-full blur-[100px] opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="absolute top-8 right-8 text-8xl font-black font-heading text-[#0A2540]/5 italic transform rotate-12 transition-transform duration-500 group-hover:scale-110">
                    {idx + 1}
                  </div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-[#F4F6F8] flex items-center justify-center text-[#FF4A3F] mb-8 transition-colors duration-500 group-hover:bg-[#FF4A3F] group-hover:text-white">
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
        <section className="px-6 sm:px-12 pb-32 bg-[#F4F6F8]">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB01A]/10 border border-[#FFB01A]/20 text-[#FFB01A] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                  <FiDollarSign className="w-3 h-3" /> Tangible Outcomes
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#0A2540]">
                  Media buying that<br/>directly scales companies.
                </h2>
              </motion.div>
              <Link href="/work" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#0A2540] hover:text-[#FF4A3F] transition-colors">
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
                  className="group overflow-hidden rounded-[32px] bg-white border border-[#0A2540]/10 shadow-[0_10px_40px_rgba(10,37,64,0.03)] relative hover:shadow-[0_20px_60px_rgba(255,74,63,0.08)] transition-all duration-500"
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
                      <div className="inline-flex items-center gap-2 rounded-md bg-white/20 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-[#FFD4A3]">
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
                    <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-sm font-bold uppercase text-[#FF4A3F]">
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
            SECTION 5: THE PROCESS (THE OPTIMIZATION FUNNEL)
            ========================================= */}
        <section className="px-6 sm:px-12 py-32 border-y border-[#0A2540]/5 bg-white relative overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-24 relative z-20">
              <span className="inline-block rounded-full bg-[#FF4A3F]/10 border border-[#FF4A3F]/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.35em] text-[#FF4A3F] mb-6 shadow-sm">
                The Mathematics of Scaling
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight text-[#0A2540]">
                The Optimization Funnel.
              </h2>
              <p className="mt-6 text-lg text-[#0A2540]/70 font-light max-w-2xl mx-auto">
                Hope is not a strategy. We map exact user journeys and layer ad logic per stage—ensuring you don't overpay for traffic or lose potential conversions.
              </p>
            </div>

            {/* Desktop Graphical Funnel Chart */}
            <div className="hidden lg:flex flex-col items-center max-w-5xl mx-auto relative group">
               {/* Background glowing triangle/funnel shape */}
               <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 border-[120px] border-solid border-t-[#FF4A3F]/5 border-x-transparent border-b-transparent w-[800px] h-[800px] -z-10 blur-xl transition-all duration-700 group-hover:border-t-[#FF4A3F]/10" />

               {processSteps.map((step, index) => {
                  const widthMap = ["w-[900px]", "w-[750px]", "w-[600px]", "w-[450px]"];
                  const width = widthMap[index];
                  
                  return (
                     <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ delay: index * 0.1 }}
                        className={`mb-6 relative h-28 ${width} transition-all duration-500 hover:scale-105 z-10`}
                     >
                        {/* The trapezoid/layered block structure */}
                        <div className="absolute inset-0 bg-[#F4F6F8] border border-[#0A2540]/5 shadow-sm overflow-hidden flex items-center px-12 rounded-[24px]">
                           {/* Small gradient overlay on left for aesthetics */}
                           <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#FF4A3F] to-[#FFB01A] opacity-80" />
                           
                           <div className="grid grid-cols-[auto_1fr] items-center gap-12 w-full">
                              <div className="font-heading font-black text-[#0A2540]/10 text-6xl italic">0{index + 1}</div>
                              <div>
                                 <h3 className="text-xl font-bold font-heading text-[#0A2540]">{step.title}</h3>
                                 <p className="text-sm text-[#0A2540]/70 mt-1 max-w-2xl font-light">{step.text}</p>
                              </div>
                           </div>
                        </div>
                     </motion.div>
                  );
               })}
               
               {/* Bottom Output Spout (Money logic) */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-10%" }} transition={{ delay: 0.5 }}
                  className="w-20 h-20 bg-gradient-to-br from-[#FF4A3F] to-[#FFB01A] rounded-full mt-4 flex items-center justify-center shadow-[0_10px_30px_rgba(255,74,63,0.3)] z-20"
               >
                  <FiDollarSign className="text-white text-3xl font-bold" />
               </motion.div>
            </div>

            {/* Mobile Vertical Blocks */}
            <div className="lg:hidden space-y-6 max-w-xl mx-auto">
               {processSteps.map((step, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#F4F6F8] p-8 rounded-[24px] border border-[#0A2540]/5 border-l-4 border-l-[#FF4A3F]">
                     <div className="font-heading font-black text-[#0A2540]/10 text-4xl italic absolute right-8">0{index+1}</div>
                     <h3 className="text-xl font-bold font-heading text-[#0A2540] mb-2">{step.title}</h3>
                     <p className="text-sm text-[#0A2540]/70">{step.text}</p>
                  </motion.div>
               ))}
               <div className="w-16 h-16 bg-[#FF4A3F] rounded-full mx-auto mt-8 flex items-center justify-center shadow-lg">
                  <FiDollarSign className="text-white text-2xl" />
               </div>
            </div>

          </div>
        </section>


        {/* =========================================
            FAQ SECTION
            ========================================= */}
        <FAQSection faqs={performanceFaqs} />

        {/* =========================================
            SECTION 6: FINAL CTA 
            ========================================= */}
        <section className="px-6 sm:px-12 pb-24 relative bg-[#F4F6F8] py-16">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
            className="mx-auto max-w-7xl relative overflow-hidden rounded-[40px] bg-[#0A2540] px-10 py-24 text-center shadow-[0_20px_60px_rgba(10,37,64,0.3)]"
          >
            {/* Background dynamic ad lighting */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(255,74,63,0.4)_0%,_transparent_70%)] blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(255,176,26,0.25)_0%,_transparent_70%)] blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
            
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

            <div className="relative z-10 flex flex-col items-center">
              <span className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.35em] text-[#FFB01A] mb-8 backdrop-blur-md">
                Stop Bleeding Spend
              </span>
              <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight font-heading max-w-4xl mx-auto leading-[1.05] text-white">
                Ready to predictably scale your customer acquisition?
              </h2>
              <p className="mt-8 max-w-2xl text-lg text-white/70 mx-auto font-light">
                Submit your current ad metrics. We'll audit your funnel, identify exactly where your budget is being wasted, and mathematically map your path to higher scaling.
              </p>
              
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
                <Link
                  href="/#contact"
                  className="group rounded-full bg-[#FF4A3F] px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all shadow-[0_10px_30px_rgba(255,74,63,0.4)] hover:scale-105 hover:bg-[#d63f35] flex items-center gap-3"
                >
                  Audit My Account <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/work"
                  className="rounded-full border border-white/20 px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-white/10 backdrop-blur-sm"
                >
                  View ROAS Case Studies
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
