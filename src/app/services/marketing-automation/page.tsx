"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../../components/Footer";
import { 
  FiMail, FiDatabase, FiSettings, FiActivity,
  FiArrowRight, FiCpu, FiMessageCircle, FiTrendingUp, FiCheckCircle, FiGitMerge
} from "react-icons/fi";
import { FaHubspot, FaMailchimp, FaSalesforce } from "react-icons/fa";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } } } satisfies Variants;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } } } satisfies Variants;

const services = [
  {
    title: "Email & SMS Sequencing",
    description: "Multi-channel drip sequences that automatically nurture leads, recover abandoned carts, and re-engage lapsed customers without lifting a finger.",
    icon: FiMail },
  {
    title: "CRM Architecture",
    description: "Flawless implementation of HubSpot, Salesforce, or ActiveCampaign to unify your sales pipelines and eliminate disorganized lead management.",
    icon: FiDatabase },
  {
    title: "Lead Scoring & Routing",
    description: "Algorithmic logic that tracks user engagement to automatically score leads and instantly route hot prospects directly to your sales team.",
    icon: FiActivity },
  {
    title: "Dynamic Segmentation",
    description: "Segmenting arrays based on behavioral triggers—ensuring your audience only receives hyper-relevant, personalized messaging.",
    icon: FiGitMerge },
  {
    title: "API & Zapier Blueprints",
    description: "Connecting disparate marketing software via intricate webhooks and APIs to eliminate manual data entry and human error.",
    icon: FiSettings },
  {
    title: "Cross-Channel Journeys",
    description: "Building complex if/then logic trees that seamlessly hand off users between email, SMS, retargeting ads, and direct mail.",
    icon: FiMessageCircle },
];

const processSteps = [
  {
    title: "System Discovery",
    text: "We audit your entire tech stack and map out the manual bottlenecks currently throttling your sales velocity or causing lead drop-off." },
  {
    title: "Logic Tree Engineering",
    text: "Architecting the exact behavioral triggers, wait steps, and if/then conditional statements required to automate your customer journey." },
  {
    title: "Integration & Development",
    text: "Wiring the APIs, connecting the CRM pipelines, and writing the direct-response copy for every automated email and SMS touchpoint." },
  {
    title: "Optimization & Scaling",
    text: "Monitoring the live automated logic to eliminate friction points, boost open rates, and maximize the closing velocity of the funnel." },
];

const featuredProjects = [
  {
    title: "B2B Lead Nurture Automation",
    category: "CRM & HubSpot Routing",
    image: "/images/project1.png", // Reuse existing provided paths
    summary:
      "Engineered an automated lead scoring logic that reduced the sales team's time spent on unqualified calls by 74%, immediately boosting close rates." },
  {
    title: "E-Commerce Cart Recovery",
    category: "Klaviyo & SMS Logic",
    image: "/images/zenfora-food.png",
    summary:
      "Designed an aggressive 4-step dynamic email and SMS cart abandonment workflow that recovered $1.2M in annualized revenue." },
];

const NavLink = ({
  href,
  children,
  isScrolled }: {
  href: string;
  children: string;
  isScrolled: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`group relative overflow-hidden inline-block h-[1.2em] font-semibold transition-colors duration-300 ${
        "text-[#0A2540]/80 hover:text-[#F59E0B]"
      }`}
    >
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
        {children}
      </span>
      <span
        className={`absolute left-0 top-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0 text-[#F59E0B] font-bold`}
      >
        {children}
      </span>
    </Link>
  );
};

export default function MarketingAutomationPage() {
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
    <div className="min-h-screen bg-[#F4F6F8] text-[#0A2540] font-sans selection:bg-[#F59E0B] selection:text-white">
      <title>Premium Marketing Automation | Setzet</title>
      <meta
        name="description"
        content="We build ruthless operational efficiency. Complex CRM architectures, dynamic email sequencing, and API workflows to scale without overhead."
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
            className="font-bold text-[#0A2540] transition-colors duration-300 hover:text-[#F59E0B]"
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
              className="hidden rounded-full border border-[#0A2540]/10 bg-white/50 backdrop-blur-md px-6 py-2.5 text-[11px] font-bold transition-all duration-300 hover:bg-[#F59E0B] hover:border-[#F59E0B] hover:text-white md:inline-flex text-[#0A2540]"
              href="/#contact"
            >
              Start a Project
            </Link>
            <button
              className="inline-flex h-10 items-center justify-center rounded-full border border-[#0A2540]/20 px-4 text-[11px] font-semibold transition md:hidden text-[#0A2540] hover:border-[#F59E0B]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="mr-2">{menuOpen ? "Close" : "Menu"}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-0 relative overflow-hidden">
        
        {/* =========================================
            HERO SECTION - THE LOGIC BUILDER UI
            ========================================= */}
        <section className="relative min-h-[100vh] flex items-center pt-32 pb-20 px-6">
          {/* Animated Background Ambience */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Amber/Violet Gradients */}
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
              transition={{ duration: 10, ease: "easeInOut" }}
              className="absolute top-[-10%] right-[0%] w-[50vw] h-[50vw] rounded-full bg-[#F59E0B]/15 blur-[160px]" 
            />
            <motion.div 
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
              transition={{ duration: 12, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[-10%] left-[0%] w-[45vw] h-[45vw] rounded-full bg-[#8B5CF6]/15 blur-[150px]" 
            />
            {/* Workflow Grid Line Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(10,37,64,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,37,64,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)]" />
          </div>

          <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-8 items-center relative z-10">
            
            {/* Left: Copy & Actions */}
            <div className="max-w-xl lg:pr-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0A2540]/10 bg-white/70 backdrop-blur-md px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#F59E0B] shadow-sm"
              >
                <FiCpu className="text-sm" /> CRM & Workflow Engineering
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight font-heading text-[#0A2540]"
              >
                Scale revenue. <br />
                Eliminate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#D946EF]">friction.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-lg md:text-xl text-[#0A2540]/70 leading-relaxed font-light"
              >
                We build intelligent logic architectures. From automated behavioral emails to complex CRM pipelines, we replace manual marketing with relentless, mathematically perfect robots.
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
                    Automate My Funnel <FiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                
                <div className="flex items-center gap-3 px-4 py-3 bg-white/50 backdrop-blur-sm border border-[#0A2540]/10 rounded-full shadow-sm">
                  <FiGitMerge className="text-xl text-[#8B5CF6]" />
                  <div className="text-[10px] font-bold text-[#0A2540]/80 uppercase tracking-widest">
                    Complex Logic Architectures
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Floating Logic Builder Flowchart  */}
            <div className="relative h-[650px] w-full hidden md:block perspective-[1400px]">
              
              {/* Connection Lines (SVGs) */}
              <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{ filter: 'drop-shadow(0 4px 6px rgba(10,37,64,0.05))'}}>
                 {/* Line from Trigger to Condition */}
                 <path d="M 280 140 L 280 250" fill="none" stroke="#F59E0B" strokeWidth="3" strokeDasharray="6,6" className="animate-[dash_1s_linear_infinite]" />
                 {/* Lines branching from Condition */}
                 <path d="M 280 340 L 280 380 L 150 380 L 150 450" fill="none" stroke="#27C93F" strokeWidth="3" />
                 <path d="M 280 340 L 280 380 L 410 380 L 410 450" fill="none" stroke="#F43F5E" strokeWidth="3" />
                 <style>{`@keyframes dash { to { stroke-dashoffset: -12; } }`}</style>
              </svg>

              {/* Node 1: Audience Trigger */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }} transition={{ duration: 6, ease: "easeInOut" }}
                className="absolute top-[5%] left-[50%] -translate-x-1/2 w-[280px] rounded-[20px] border border-[#F59E0B]/30 bg-white/90 backdrop-blur-xl shadow-[0_20px_40px_rgba(245,158,11,0.15)] p-4 z-10"
              >
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#FCA5A5] flex items-center justify-center shadow-inner">
                       <FiActivity className="text-white text-lg" />
                    </div>
                    <div>
                        <div className="text-[9px] uppercase tracking-widest font-bold text-gray-400">Trigger Node</div>
                        <div className="text-sm font-bold text-[#0A2540]">Enterprise Lead Captured</div>
                    </div>
                 </div>
                 <div className="mt-4 px-3 py-2 bg-[#F4F6F8] rounded-lg border border-gray-100 flex items-center justify-between">
                    <span className="text-[10px] text-[#0A2540]/60 font-bold">Source: Enterprise Pricing Form</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                 </div>
              </motion.div>

              {/* Node 2: Logic/Condition */}
              <motion.div 
                animate={{ y: [0, 8, 0] }} transition={{ duration: 6, ease: "easeInOut", delay: 1 }}
                className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[220px] rounded-[16px] border border-[#8B5CF6]/30 bg-white/95 backdrop-blur-xl shadow-[0_20px_40px_rgba(139,92,246,0.15)] p-4 z-10"
              >
                 <div className="flex flex-col items-center text-center">
                    <div className="w-8 h-8 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center mb-2">
                       <FiGitMerge />
                    </div>
                    <div className="text-[9px] uppercase tracking-widest font-bold text-[#8B5CF6] mb-1">If / Then Logic</div>
                    <div className="text-xs font-bold text-[#0A2540]">Company Size &gt; 50?</div>
                 </div>
              </motion.div>

              {/* Node 3: True Branch (High Value) */}
              <motion.div 
                animate={{ y: [-4, 4, -4] }} transition={{ duration: 6, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[10%] left-[10%] w-[260px] rounded-[24px] border border-green-500/30 bg-white shadow-[0_30px_60px_rgba(39,201,63,0.1)] p-5 z-10"
              >
                 <div className="border border-green-500/20 bg-green-500/10 text-green-600 text-[8px] uppercase tracking-widest font-bold px-2 py-0.5 rounded absolute -top-2 left-6 bg-white">Yes Branch</div>
                 <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                       <FiMessageCircle />
                    </div>
                    <div className="text-xs font-bold text-[#0A2540]">Route to Sales Rep</div>
                 </div>
                 <div className="w-full bg-[#F4F6F8] rounded-md p-2 mt-2 border border-gray-100">
                    <div className="text-[9px] text-gray-500 font-bold mb-1">Slack Notification</div>
                    <div className="text-[10px] text-[#0A2540] break-words leading-tight">"Hot Enterprise Lead: ACME Corp. Score: 98/100."</div>
                 </div>
              </motion.div>

              {/* Node 4: False Branch (Nurture) */}
              <motion.div 
                animate={{ y: [-4, 4, -4] }} transition={{ duration: 6, ease: "easeInOut", delay: 2.5 }}
                className="absolute bottom-[10%] right-[5%] w-[260px] rounded-[24px] border border-red-500/30 bg-white shadow-[0_30px_60px_rgba(244,63,94,0.1)] p-5 z-10"
              >
                 <div className="border border-red-500/20 bg-red-500/10 text-red-600 text-[8px] uppercase tracking-widest font-bold px-2 py-0.5 rounded absolute -top-2 left-6 bg-white">No Branch</div>
                 <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                       <FiMail />
                    </div>
                    <div className="text-xs font-bold text-[#0A2540]">14-Day Drip Sequence</div>
                 </div>
                 <div className="w-full bg-[#F4F6F8] rounded-md p-2 mt-2 border border-gray-100">
                    <div className="text-[9px] text-gray-500 font-bold mb-1">Email 1/4</div>
                    <div className="text-[10px] text-[#0A2540] font-mono opacity-80 break-words leading-tight">Subject: [FirstName], quick question.</div>
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
              Certified Implementation Partners
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaHubspot className="text-[#FF7A59] text-3xl" /> HubSpot</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaSalesforce className="text-[#00A1E0] text-3xl" /> Salesforce</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaMailchimp className="text-[#FFE01B] text-3xl stroke-black" /> Mailchimp</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FiSettings className="text-[#FF4A00] text-3xl" /> Zapier API</div>
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
              <motion.div variants={reveal} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                <FiDatabase className="w-3 h-3" /> Core Infrastructure
              </motion.div>
              <motion.h2 variants={reveal} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-[#0A2540] max-w-3xl">
                We engineer scalable logic.
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  variants={reveal}
                  className="group relative rounded-[32px] border border-[#0A2540]/10 bg-white p-8 overflow-hidden transition-all duration-500 shadow-[0_8px_30px_rgba(10,37,64,0.03)] hover:shadow-[0_40px_60px_rgba(245,158,11,0.08)] hover:-translate-y-2 hover:border-[#F59E0B]/30"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#F59E0B] rounded-full blur-[100px] opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="absolute top-8 right-8 text-8xl font-black font-heading text-[#0A2540]/5 italic transform rotate-12 transition-transform duration-500 group-hover:scale-110">
                    {idx + 1}
                  </div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-[#F4F6F8] flex items-center justify-center text-[#F59E0B] mb-8 transition-colors duration-500 group-hover:bg-[#F59E0B] group-hover:text-white">
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#8B5CF6] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                  <FiTrendingUp className="w-3 h-3" /> Tangible Outcomes
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#0A2540]">
                  Automations that save time<br/>and print revenue.
                </h2>
              </motion.div>
              <Link href="/work" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#0A2540] hover:text-[#F59E0B] transition-colors">
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
                  className="group overflow-hidden rounded-[32px] bg-white border border-[#0A2540]/10 shadow-[0_10px_40px_rgba(10,37,64,0.03)] relative hover:shadow-[0_20px_60px_rgba(245,158,11,0.08)] transition-all duration-500"
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
                       <div className="inline-flex items-center gap-2 rounded-md bg-white/20 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-[#FDE68A]">
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
                    <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-sm font-bold uppercase text-[#F59E0B]">
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
            SECTION 5: THE PROCESS (THE LOGIC SEQUENCE)
            ========================================= */}
        <section className="px-6 py-32 border-y border-[#0A2540]/5 bg-white relative overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-24 relative z-20">
              <span className="inline-block rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.35em] text-[#F59E0B] mb-6 shadow-sm">
                The Logic Sequence
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight text-[#0A2540]">
                Mapping the Architecture.
              </h2>
              <p className="mt-6 text-lg text-[#0A2540]/70 font-light max-w-2xl mx-auto">
                We do not just connect APIs blind. We draft exact logic sequences that govern every possible behavioral path your prospect could take within your brand's ecosystem.
              </p>
            </div>

            {/* Desktop Graphical Decision Tree */}
            <div className="hidden lg:flex flex-col items-center max-w-5xl mx-auto relative group pt-8 pb-12">
               
               {/* Center Timeline Spine */}
               <div className="absolute top-0 bottom-0 left-1/2 w-1.5 bg-gradient-to-b from-[#F59E0B] via-[#8B5CF6] to-[#0A2540]/10 rounded-full" />

               {processSteps.map((step, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                     <div key={index} className={`w-full flex ${isLeft ? 'justify-start' : 'justify-end'} mb-16 relative`}>
                        {/* The Node dot linking to timeline */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white border-4 border-[#0A2540] rounded-full z-20" />
                        
                        {/* The connecting horizontal branch */}
                        <div className={`absolute top-1/2 ${isLeft ? 'right-1/2 left-auto' : 'left-1/2 right-auto'} w-1/4 h-1 border-t-2 border-dashed border-[#0A2540]/20`} />

                        <motion.div 
                           initial={{ opacity: 0, x: isLeft ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.6 }}
                           className={`w-[45%] bg-[#F4F6F8] border border-[#0A2540]/5 rounded-[32px] p-8 relative z-10 shadow-sm hover:shadow-xl hover:border-[#F59E0B]/30 transition-all duration-300 ${isLeft ? 'mr-[5%]' : 'ml-[5%]'}`}
                        >
                           <div className={`absolute -top-5 ${isLeft ? 'right-8' : 'left-8'} bg-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-[#F59E0B] shadow-sm uppercase`}>Step 0{index+1}</div>
                           <h3 className="text-xl font-bold font-heading text-[#0A2540] mb-2">{step.title}</h3>
                           <p className="text-sm text-[#0A2540]/70 font-light leading-relaxed">{step.text}</p>
                           
                           {/* Decorative Tech logic icons faintly in background */}
                           <FiGitMerge className="absolute bottom-6 right-6 text-7xl text-[#0A2540]/5 pointer-events-none" />
                        </motion.div>
                     </div>
                  );
               })}

            </div>

            {/* Mobile Vertical Blocks */}
            <div className="lg:hidden space-y-4 max-w-xl mx-auto relative px-4">
               {processSteps.map((step, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative bg-[#F4F6F8] p-6 rounded-[24px] border border-[#0A2540]/5">
                     <div className="text-[10px] uppercase font-bold text-[#F59E0B] tracking-widest mb-1">Step 0{index+1}</div>
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
            {/* Background dynamic Automation lighting */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(245,158,11,0.35)_0%,_transparent_70%)] blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(139,92,246,0.3)_0%,_transparent_70%)] blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
            
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

            <div className="relative z-10 flex flex-col items-center">
              <span className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.35em] text-[#FDE68A] mb-8 backdrop-blur-md">
                Deploy Your Digital Workforce
              </span>
              <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight font-heading max-w-4xl mx-auto leading-[1.05] text-white">
                Ready to replace manual labor with absolute scale?
              </h2>
              <p className="mt-8 max-w-2xl text-lg text-white/70 mx-auto font-light">
                Map out your logic today. We'll audit your sales process and identify the exact API connections and funnel logic needed to double your efficiency.
              </p>
              
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
                <Link
                  href="/#contact"
                  className="group rounded-full bg-[#F59E0B] px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all shadow-[0_10px_30px_rgba(245,158,11,0.4)] hover:scale-105 hover:bg-[#d97706] flex items-center gap-3"
                >
                  Automate My Pipeline <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/work"
                  className="rounded-full border border-white/20 px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-white/10 backdrop-blur-sm"
                >
                  View Efficiency Case Studies
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
