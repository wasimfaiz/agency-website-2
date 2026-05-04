"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../../components/Footer";
import { 
  FiLayout, FiMousePointer, FiPenTool, FiBox,
  FiArrowRight, FiZap, FiTarget, FiCommand, FiCrosshair
} from "react-icons/fi";
import { FaStar, FaFigma, FaReact, FaPaintBrush } from "react-icons/fa";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } } } satisfies Variants;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } } } satisfies Variants;

const services = [
  {
    title: "User Experience (UX) Strategy",
    description: "Deep user research, persona maping, and wireframing to ensure the core product solves real problems without friction.",
    icon: FiCrosshair },
  {
    title: "High-Fidelity UI Design",
    description: "Creating stunning, luxury-grade interfaces that command authority, build instant trust, and outclass competitors.",
    icon: FiLayout },
  {
    title: "Interactive Prototyping",
    description: "Clickable, high-fidelity prototypes that mimic the final product so you can secure stakeholder buy-in before coding.",
    icon: FiMousePointer },
  {
    title: "Design Systems",
    description: "Comprehensive token libraries, component sets, and documentation to ensure consistency as your platform scales.",
    icon: FiBox },
];

const processSteps = [
  {
    title: "Discovery & Analysis",
    text: "We audit competitors, map out user personas, and define the absolute shortest path to conversion or product adoption." },
  {
    title: "Information Architecture",
    text: "Organizing complex data and features into an intuitive hierarchy so users never feel lost or overwhelmed." },
  {
    title: "Low-Fidelity Wireframing",
    text: "Rapid, structural layouts focused entirely on functionality, screen flow, and CTA placement—before visuals distract." },
  {
    title: "Visual Identity & System",
    text: "Defining typography, spacing grids, and bespoke color palettes that align perfectly with your brand's psychological goals." },
  {
    title: "Polished UI Execution",
    text: "Applying the design system to wireframes, crafting modern glassmorphic, neomorphic, or flat visual masterpieces." },
  {
    title: "Developer Handoff",
    text: "Delivering annotated design files, exportable assets, and comprehensive styling tokens directly to the engineering team." },
];

const featuredProjects = [
  {
    title: "Finance Dashboard UI",
    category: "SaaS Application",
    image: "/images/project1.png", // Reuse existing provided paths
    summary:
      "A complete redesign of a complex fintech application, turning massive data tables into an intuitive, elegant dashboard experience." },
  {
    title: "Luxury E-Commerce",
    category: "Web Interface",
    image: "/images/zenfora-food.png",
    summary:
      "A conversion-optimized, premium digital storefront featuring fluid micro-interactions and dramatic typography." },
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

export default function UiUxDevelopmentPage() {
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
      <title>Premium UI/UX Design & Development | Setzet</title>
      <meta
        name="description"
        content="We design flawless, high-converting digital interfaces and comprehensive design systems for modern brands and SaaS products."
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
            HERO SECTION - THE DESIGN CANVAS
            ========================================= */}
        <section className="relative min-h-[100vh] flex items-center pt-32 pb-20 px-6">
          {/* Animated Background Ambience */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
             {/* Large soft color gradients representing a design palette */}
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
              transition={{ duration: 10, ease: "easeInOut" }}
              className="absolute top-[-5%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-[#007BFF]/10 blur-[130px]" 
            />
            <motion.div 
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
              transition={{ duration: 12, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[0%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#FF2E93]/10 blur-[150px]" 
            />
            {/* Design Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(10,37,64,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,37,64,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)]" />
          </div>

          <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-8 items-center relative z-10">
            
            {/* Left: Copy & Actions */}
            <div className="max-w-xl lg:pr-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0A2540]/10 bg-white/70 backdrop-blur-md px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF2E93] shadow-sm"
              >
                <FiPenTool className="text-sm" /> Product Design & UI/UX
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight font-heading text-[#0A2540]"
              >
                Design that commands <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E93] to-[#FF8A00]">authority.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-lg md:text-xl text-[#0A2540]/70 leading-relaxed font-light"
              >
                We strip away friction. We construct beautiful, intuitive interfaces that guide user psychology and drive extreme conversion rates for your product.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-10 flex flex-wrap gap-5 items-center"
              >
                <Link
                  href="/#contact"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#0A2540] to-[#1a365d] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all shadow-[0_10px_30px_rgba(10,37,64,0.3)] hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(10,37,64,0.4)]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Start Designing <FiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                
                <div className="flex items-center gap-3 px-4 py-3 bg-white/50 backdrop-blur-sm border border-[#0A2540]/10 rounded-full shadow-sm">
                  <FaFigma className="text-xl text-[#F24E1E]" />
                  <div className="text-[10px] font-bold text-[#0A2540]/80 uppercase tracking-widest">
                    Pixel Perfect Precision
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Floating Canvas Graphic */}
            <div className="relative h-[600px] w-full hidden md:block perspective-[1400px]">
              
              {/* Back Layer: Wireframe */}
              <motion.div 
                animate={{ y: [-10, 10, -10], rotateX: [15, 20, 15], rotateZ: [-6, -4, -6], rotateY: [-15, -10, -15] }}
                transition={{ duration: 8, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-[60%] w-[400px] h-[280px] rounded-[24px] border-2 border-[#0A2540]/20 bg-white/40 backdrop-blur-md shadow-lg p-6 opacity-60 z-10"
              >
                 <div className="w-1/3 h-6 bg-gray-200 rounded-md mb-6" />
                 <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="h-24 border-2 border-dashed border-gray-300 rounded-xl" />
                    <div className="h-24 border-2 border-dashed border-gray-300 rounded-xl" />
                 </div>
                 <div className="w-full h-8 bg-gray-100 rounded-md" />
              </motion.div>
              
              {/* Middle Layer: Component System */}
              <motion.div 
                animate={{ y: [-5, 15, -5], rotateX: [12, 17, 12], rotateZ: [-2, 0, -2], rotateY: [-10, -5, -10] }}
                transition={{ duration: 9, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-[420px] h-[300px] rounded-[24px] border border-white bg-white/80 backdrop-blur-xl shadow-2xl p-6 z-20"
              >
                  <div className="flex gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#FF2E93] shadow-sm" />
                    <div className="w-8 h-8 rounded-full bg-[#007BFF] shadow-sm" />
                    <div className="w-8 h-8 rounded-full bg-[#0A2540] shadow-sm" />
                    <div className="w-8 h-8 rounded-full bg-[#00C6FF] shadow-sm" />
                  </div>
                  <div className="space-y-4">
                     <div className="font-heading text-4xl font-extrabold text-[#0A2540]">Aa</div>
                     <div className="text-[10px] font-bold text-[#0A2540]/40 uppercase tracking-widest border-b pb-2">Inter / Semi-Bold / 36px</div>
                     <div className="flex gap-4 pt-2">
                        <div className="px-6 py-2 bg-[#007BFF] text-white rounded-lg text-sm font-medium">Primary</div>
                        <div className="px-6 py-2 border border-gray-200 text-gray-500 rounded-lg text-sm font-medium">Secondary</div>
                     </div>
                  </div>
              </motion.div>

              {/* Front Top Layer: Polished UI */}
              <motion.div 
                animate={{ y: [0, 20, 0], rotateX: [5, 10, 5], rotateZ: [2, 4, 2], rotateY: [-5, 0, -5] }}
                transition={{ duration: 7, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 left-1/2 -translate-x-[60%] -translate-y-[40%] w-[440px] h-[320px] rounded-[32px] border border-white/50 bg-white shadow-[0_40px_80px_rgba(10,37,64,0.15)] p-2 z-30"
              >
                  <div className="w-full h-full bg-[#F4F6F8] rounded-[24px] overflow-hidden p-6 relative">
                     <div className="flex justify-between items-center mb-8">
                        <div className="flex gap-2 items-center">
                           <div className="w-6 h-6 rounded-md bg-[#FF2E93]" />
                           <div className="font-bold text-[#0A2540]">Dashboard</div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">
                           <div className="w-2 h-2 rounded-full bg-green-400" />
                        </div>
                     </div>
                     
                     <div className="bg-white rounded-2xl p-5 shadow-[0_10px_30px_rgba(10,37,64,0.05)] mb-4">
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Total Revenue</div>
                        <div className="text-3xl font-black text-[#0A2540]">$128,450</div>
                        <div className="mt-4 h-12 w-full flex items-end gap-2">
                           {/* Decorative fake chart */}
                           {[40, 70, 45, 90, 60, 100, 80].map((h, i) => (
                              <div key={i} className="w-full rounded-t-sm bg-gradient-to-t from-[#007BFF]/20 to-[#007BFF]" style={{ height: `${h}%` }} />
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* Floating Cursor interaction */}
                  <motion.div 
                    animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
                    transition={{ duration: 4, ease: "easeInOut" }}
                    className="absolute bottom-[30%] right-[30%] z-40 text-black text-3xl drop-shadow-xl"
                  >
                    <FiMousePointer className="fill-black" />
                    <div className="absolute top-6 left-4 bg-black text-white text-[10px] px-2 py-1 rounded-md font-bold shadow-lg">Component</div>
                  </motion.div>
              </motion.div>

            </div>
          </div>
        </section>


        {/* =========================================
            SECTION 2: DESIGN TECH & TOOLS
            ========================================= */}
        <section className="px-6 py-12 border-y border-[#0A2540]/5 bg-white">
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-[10px] uppercase tracking-[0.3em] font-bold text-[#0A2540]/40 mb-8">
              Industry-Standard Design Architecture
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaFigma className="text-[#F24E1E] text-3xl" /> Figma</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FiCommand className="text-[#0A2540] text-3xl" /> Framer</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaPaintBrush className="text-[#FF2E93] text-2xl" /> Spline 3D</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaReact className="text-[#61DAFB] text-3xl" /> React UI</div>
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
              <motion.div variants={reveal} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF2E93]/10 border border-[#FF2E93]/20 text-[#FF2E93] text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                <FiLayout className="w-3 h-3" /> Core Offerings
              </motion.div>
              <motion.h2 variants={reveal} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-[#0A2540] max-w-3xl">
                Comprehensive UI/UX Product Design.
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-6">
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={reveal}
                  className="group relative rounded-[32px] border border-[#0A2540]/10 bg-white p-8 md:p-12 overflow-hidden transition-all duration-500 shadow-[0_8px_30px_rgba(10,37,64,0.03)] hover:shadow-[0_40px_60px_rgba(255,46,147,0.08)] hover:-translate-y-2 hover:border-[#FF2E93]/30"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF2E93] rounded-full blur-[140px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-[#FF2E93]/10 flex items-center justify-center text-[#FF2E93] mb-8 border border-[#FF2E93]/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
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
            SECTION 4: PORTFOLIO TEASER
            ========================================= */}
        <section className="px-6 pb-32 bg-[#F4F6F8]">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#007BFF]/10 border border-[#007BFF]/20 text-[#007BFF] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                  <FiTarget className="w-3 h-3" /> Visual Masterpieces
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#0A2540]">
                  Interfaces that<br/>turn heads and convert.
                </h2>
              </motion.div>
              <Link href="/work" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#FF2E93] hover:text-[#d41c73] transition-colors">
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
                  className="group overflow-hidden rounded-[32px] bg-white border border-[#0A2540]/10 shadow-sm relative hover:shadow-[0_20px_40px_rgba(10,37,64,0.08)] transition-shadow duration-500"
                >
                  <div className="relative h-[400px] w-full overflow-hidden bg-[#EAF1F7]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/70 via-[#0A2540]/0 to-transparent opacity-80" />
                    <div className="absolute bottom-0 w-full p-8">
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-[#FFb8d2]">
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
            SECTION 5: THE PROCESS (THE FIDELITY CASCADE)
            ========================================= */}
        <section className="px-6 py-28 border-y border-[#0A2540]/5 bg-white relative overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-24 relative z-20">
              <span className="inline-block rounded-full bg-[#0A2540] border border-[#0A2540]/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.35em] text-white mb-6 shadow-sm">
                The Fidelity Cascade
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading leading-tight text-[#0A2540]">
                From Wireframe to Reality.
              </h2>
              <p className="mt-4 text-lg text-[#0A2540]/70 font-light max-w-2xl mx-auto">
                We design with extreme intent. Layer by layer, we transition raw strategy into an unignorable, pixel-perfect digital product.
              </p>
            </div>

            {/* Desktop Visual Infographic - Distinct to Design */}
            <div className="hidden lg:flex flex-col items-center max-w-6xl mx-auto relative px-8">
              
              {/* Central Abstract Staircase/Cascade Line */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-gray-200 via-[#FF2E93] to-gray-200 z-0 opacity-50" />

              {processSteps.map((step, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6 }}
                    className={`w-full flex ${isLeft ? 'justify-start' : 'justify-end'} relative mb-16`}
                  >
                     {/* The Content Card */}
                     <div className={`w-[45%] relative z-10 ${isLeft ? 'text-right pr-16' : 'text-left pl-16'}`}>
                        {/* Connecting Line to Center */}
                        <div className={`absolute top-1/2 -translate-y-1/2 w-16 h-px bg-[#FF2E93]/40 ${isLeft ? 'right-0' : 'left-0'}`} />
                        
                        <div className={`flex items-center gap-4 mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                           {isLeft ? (
                             <>
                               <h3 className="text-2xl font-bold font-heading text-[#0A2540]">{step.title}</h3>
                               <span className="text-3xl font-black text-[#FF2E93]/20">0{index+1}</span>
                             </>
                           ) : (
                             <>
                               <span className="text-3xl font-black text-[#FF2E93]/20">0{index+1}</span>
                               <h3 className="text-2xl font-bold font-heading text-[#0A2540]">{step.title}</h3>
                             </>
                           )}
                        </div>
                        <p className="text-base text-[#0A2540]/60 leading-relaxed font-light">{step.text}</p>
                     </div>

                     {/* The Central Node Anchor */}
                     <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-white bg-[#FF2E93] shadow-lg z-20" />
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile / Tablet Vertical Steps */}
            <div className="lg:hidden relative space-y-6 max-w-2xl mx-auto mt-8">
              <div className="absolute left-8 top-8 bottom-8 w-[2px] bg-[#FF2E93]/20" />
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }}
                  className="relative grid grid-cols-[auto_1fr] gap-6 items-start"
                >
                  <div className="relative z-10 w-16 h-16 rounded-full bg-white border-[3px] border-[#FF2E93] shadow-md flex items-center justify-center font-bold text-[#FF2E93] font-heading text-xl">
                    0{index + 1}
                  </div>
                  <div className="rounded-[22px] border border-[#0A2540]/10 bg-white p-6 shadow-[0_8px_30px_rgba(10,37,64,0.03)] hover:border-[#FF2E93]/30 transition-colors">
                    <h3 className="text-xl font-bold font-heading mb-3 text-[#0A2540]">{step.title}</h3>
                    <p className="text-sm text-[#0A2540]/70 leading-relaxed font-light">{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* =========================================
            SECTION 6: FINAL CTA 
            ========================================= */}
        <section className="px-6 pb-24 relative bg-white py-16">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
            className="mx-auto max-w-6xl relative overflow-hidden rounded-[40px] bg-[#0A2540] px-10 py-24 text-center shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#FF2E93]/30 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#007BFF]/30 to-transparent rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center">
              <span className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.35em] text-[#FFB8d2] mb-8 backdrop-blur-md">
                Upgrade Your Experience
              </span>
              <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight font-heading max-w-3xl mx-auto leading-tight text-white">
                Ready to design a product people actually love using?
              </h2>
              <p className="mt-8 max-w-xl text-lg text-white/70 mx-auto font-light">
                Schedule a UX audit. We'll identify exactly where your current interface is bleeding users, and show you exactly how we will fix it.
              </p>
              
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
                <Link
                  href="/#contact"
                  className="group rounded-full bg-[#FF2E93] px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all shadow-[0_10px_30px_rgba(255,46,147,0.4)] hover:scale-105 hover:bg-[#d41c73] flex items-center gap-3"
                >
                  Book A Consultation <FiArrowRight className="transition-transform group-hover:translate-x-1" />
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
