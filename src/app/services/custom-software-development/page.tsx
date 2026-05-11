"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../../components/Footer";
import { 
  FiCode, FiServer, FiDatabase, FiLayers,
  FiArrowRight, FiCpu, FiMonitor, FiSettings, FiCheckCircle, FiCloud
} from "react-icons/fi";
import { FaReact, FaNodeJs, FaAws, FaDocker } from "react-icons/fa";

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
    title: "Enterprise Web Applications",
    description: "Complex, scalable web solutions engineered from the ground up to solve intricate business requirements and handle massive concurrent traffic.",
    icon: FiMonitor,
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description: "Architecting zero-downtime AWS/GCP server environments with automated CI/CD pipelines, containerization, and advanced load balancing.",
    icon: FiCloud,
  },
  {
    title: "API Development & Integration",
    description: "Building secure, high-performance REST and GraphQL APIs to seamlessly connect disparate systems, CRMs, and payment gateways.",
    icon: FiServer,
  },
  {
    title: "Legacy Modernization",
    description: "Refactoring and migrating outdated, monolithic codebases into modern microservices without disrupting ongoing daily operations.",
    icon: FiLayers,
  },
  {
    title: "Data Pipelines & Architecture",
    description: "Designing robust database schemas and high-throughput data pipelines capable of processing millions of rows for real-time analytics.",
    icon: FiDatabase,
  },
  {
    title: "Internal Business Tools",
    description: "Replacing extremely inefficient manual spreadsheets with fully bespoke internal software that drastically reduces operational overhead.",
    icon: FiSettings,
  },
];

const processSteps = [
  {
    title: "System Architecture Design",
    text: "Before writing a single line of code, we blueprint the entire tech stack, database schema, and server node relationships for infinite scalability.",
  },
  {
    title: "Agile Sprint Engineering",
    text: "Executing rapid, iterative development cycles. We ship production-ready modules every two weeks, ensuring continuous stakeholder alignment.",
  },
  {
    title: "Automated QA & Security",
    text: "Deploying ruthless unit testing, penetration testing, and QA scripts to guarantee the software is fundamentally unbreakable upon launch.",
  },
  {
    title: "CI/CD Deployment Pipeline",
    text: "We utilize automated Docker and Kubernetes pipelines to push staging code directly into live production with zero server downtime.",
  },
];

const featuredProjects = [
  {
    title: "Global Logistics SaaS Platform",
    category: "Cloud Migration & Architecture",
    image: "/images/project1.png", // Reuse existing provided paths
    summary:
      "Modernized a 10-year-old monolithic legacy application into a high-speed React/Node microservice architecture, reducing server response times by 82%.",
  },
  {
    title: "Healthcare Data Infrastructure",
    category: "Secure API Engineering",
    image: "/images/zenfora-food.png",
    summary:
      "Architected a HIPAA-compliant real-time data pipeline processing over 5M daily API events with absolute zero data loss or downtime.",
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
        "text-[#0A2540]/80 hover:text-[#2563EB]"
      }`}
    >
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
        {children}
      </span>
      <span
        className={`absolute left-0 top-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0 text-[#2563EB] font-bold`}
      >
        {children}
      </span>
    </Link>
  );
};

export default function CustomSoftwareDevelopmentPage() {
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
    <div className="min-h-screen bg-[#F4F6F8] text-[#0A2540] font-sans selection:bg-[#2563EB] selection:text-white">

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
              className="hidden rounded-full border border-[#0A2540]/10 bg-white/50 backdrop-blur-md px-6 py-2.5 text-[11px] font-bold transition-all duration-300 hover:bg-[#2563EB] hover:border-[#2563EB] hover:text-white md:inline-flex text-[#0A2540]"
              href="/#contact"
            >
              Start a Project
            </Link>
            <button
              className="inline-flex h-10 items-center justify-center rounded-full border border-[#0A2540]/20 px-4 text-[11px] font-semibold transition md:hidden text-[#0A2540] hover:border-[#2563EB]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="mr-2">{menuOpen ? "Close" : "Menu"}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-0 relative overflow-hidden">
        
        {/* =========================================
            HERO SECTION - THE SOFTWARE ARCHITECTURE
            ========================================= */}
        <section className="relative min-h-[100vh] flex items-center pt-32 pb-20 px-6">
          {/* Animated Background Ambience */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Cobalt Blue & Cyan Gradients */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1.5 }}
              className="absolute top-[-5%] right-[0%] w-[50vw] h-[50vw] rounded-full bg-[#2563EB]/15 blur-[160px]" 
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute bottom-[-10%] left-[0%] w-[45vw] h-[45vw] rounded-full bg-[#06B6D4]/15 blur-[150px]" 
            />
            {/* Tech Server Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(10,37,64,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(10,37,64,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)]" />
          </div>

          <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-8 items-center relative z-10">
            
            {/* Left: Copy & Actions */}
            <div className="max-w-xl lg:pr-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0A2540]/10 bg-white/70 backdrop-blur-md px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#2563EB] shadow-sm"
              >
                <FiCode className="text-sm" /> Deep Technical Engineering
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight font-heading text-[#0A2540]"
              >
                Build systems that <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">never break.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-lg md:text-xl text-[#0A2540]/70 leading-relaxed font-light"
              >
                We do not build simple templates. We architect, engineer, and deploy massive, highly-scalable software solutions capable of handling enterprise operational complexity.
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
                    Architect Your Build <FiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                
                <div className="flex items-center gap-3 px-4 py-3 bg-white/50 backdrop-blur-sm border border-[#0A2540]/10 rounded-full shadow-sm">
                  <FiCpu className="text-xl text-[#06B6D4]" />
                  <div className="text-[10px] font-bold text-[#0A2540]/80 uppercase tracking-widest">
                    Enterprise Grade Code
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Floating Software Architecture UI  */}
            <div className="relative h-[650px] w-full hidden md:block perspective-[1400px]">
              
              {/* Back Node: Server Node Status */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, rotateX: 10, rotateZ: -2, rotateY: -5 }}
                transition={{ duration: 0.8 }}
                className="absolute top-[10%] left-[20%] w-[320px] rounded-[16px] border border-[#0A2540]/10 bg-white/95 backdrop-blur-md shadow-2xl p-6 z-10 hover:-translate-y-2 transition-transform duration-300"
              >
                 <div className="flex justify-between items-center mb-6">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                       <FiServer /> Production Node API
                    </div>
                    <div className="flex items-center gap-1.5 bg-green-50 text-green-600 px-2 py-1 rounded text-[8px] uppercase tracking-widest font-bold">
                       <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Healthy
                    </div>
                 </div>
                 
                 <div className="space-y-4">
                    <div>
                       <div className="flex justify-between text-[10px] uppercase font-bold text-[#0A2540]/70 mb-1">
                          <span>CPU Usage</span> <span>14%</span>
                       </div>
                       <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="w-[14%] h-full bg-[#06B6D4]" />
                       </div>
                    </div>
                    <div>
                       <div className="flex justify-between text-[10px] uppercase font-bold text-[#0A2540]/70 mb-1">
                          <span>Memory Allocation</span> <span>4.2 GB</span>
                       </div>
                       <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="w-[45%] h-full bg-[#2563EB]" />
                       </div>
                    </div>
                 </div>
              </motion.div>
              
              {/* Middle Layer: VS Code / Terminal Mockup */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, rotateX: 15, rotateZ: 2, rotateY: -2 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-[30%] right-[0%] w-[380px] rounded-[16px] border border-gray-800 bg-[#0A1929] shadow-[0_30px_60px_rgba(37,99,235,0.2)] overflow-hidden z-20 hover:-translate-y-2 transition-transform duration-300"
              >
                 {/* Window Controls */}
                 <div className="w-full h-8 bg-black/40 flex items-center px-4 gap-1.5 border-b border-white/10">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <div className="ml-auto text-[8px] font-mono text-gray-500">server.ts — backend/api</div>
                 </div>
                 {/* Code Editor */}
                 <div className="p-5 font-mono text-[10px] text-gray-300 leading-relaxed overflow-hidden h-48 opacity-90">
                    <div className="flex gap-4"><span className="text-gray-600 select-none">1</span><span><span className="text-purple-400">import</span> { '{' } <span className="text-blue-300">FastifyInstance</span> { '}' } <span className="text-purple-400">from</span> <span className="text-green-300">'fastify'</span>;</span></div>
                    <div className="flex gap-4"><span className="text-gray-600 select-none">2</span><span><span className="text-purple-400">import</span> { '{' } db { '}' } <span className="text-purple-400">from</span> <span className="text-green-300">'../database/pool'</span>;</span></div>
                    <div className="flex gap-4"><span className="text-gray-600 select-none">3</span><br/></div>
                    <div className="flex gap-4"><span className="text-gray-600 select-none">4</span><span><span className="text-purple-400">export default async function</span> <span className="text-yellow-200">PaymentRoute</span>(app: <span className="text-blue-300">FastifyInstance</span>) { '{' }</span></div>
                    <div className="flex gap-4"><span className="text-gray-600 select-none">5</span><span className="pl-4">app.<span className="text-yellow-200">post</span>(<span className="text-green-300">'/v1/charge'</span>, <span className="text-purple-400">async</span> (req, res) <span className="text-blue-400">=&gt;</span> { '{' }</span></div>
                    <div className="flex gap-4"><span className="text-gray-600 select-none">6</span><span className="pl-8 text-gray-500 italic">// Initialize secure transaction block</span></div>
                    <div className="flex gap-4"><span className="text-gray-600 select-none">7</span><span className="pl-8"><span className="text-purple-400">const</span> client = <span className="text-purple-400">await</span> db.<span className="text-yellow-200">connect</span>();</span></div>
                    <div className="flex gap-4"><span className="text-gray-600 select-none">8</span><span className="pl-8"><span className="text-purple-400">await</span> client.<span className="text-yellow-200">query</span>(<span className="text-green-300">'BEGIN'</span>);</span></div>
                    <div className="flex gap-4"><span className="text-gray-600 select-none">9</span><span className="pl-4">{ '}' });</span></div>
                    <div className="flex gap-4"><span className="text-gray-600 select-none">10</span><span>{ '}' }</span></div>
                 </div>
              </motion.div>

              {/* Front Top Layer: Docker / Deployment Success Alert */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-[10%] left-[10%] w-[300px] rounded-full border border-white/50 bg-gradient-to-r from-white to-[#EFF6FF] shadow-[0_40px_80px_rgba(37,99,235,0.15)] p-3 pr-6 z-30 flex items-center gap-4 hover:-translate-y-2 transition-transform duration-300"
              >
                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center text-white shadow-[0_10px_20px_rgba(37,99,235,0.3)]">
                    <FiCheckCircle className="text-xl" />
                 </div>
                 <div className="flex flex-col flex-1">
                    <div className="text-[9px] font-bold text-[#0A2540]/50 uppercase tracking-widest mb-0.5">Deployment Action</div>
                    <div className="text-xs font-black text-[#0A2540]">Build successfully pushed.</div>
                 </div>
                 <FaDocker className="text-2xl text-[#2563EB]/40 absolute right-6" />
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
              Engineered Using The Modern Enterprise Stack
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaReact className="text-[#00D8FF] text-3xl" /> React & Next.js</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaNodeJs className="text-[#8CC84B] text-3xl" /> Node Infrastructure</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaAws className="text-[#FF9900] text-3xl" /> AWS Cloud</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaDocker className="text-[#0DB7ED] text-3xl" /> Containerization</div>
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
              <motion.div variants={reveal} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                <FiCode className="w-3 h-3" /> Core Capabilities
              </motion.div>
              <motion.h2 variants={reveal} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-[#0A2540] max-w-3xl">
                We handle the heaviest architectures.
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  variants={reveal}
                  className="group relative rounded-[32px] border border-[#0A2540]/10 bg-white p-8 overflow-hidden transition-all duration-500 shadow-[0_8px_30px_rgba(10,37,64,0.03)] hover:shadow-[0_40px_60px_rgba(37,99,235,0.08)] hover:-translate-y-2 hover:border-[#2563EB]/30"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB] rounded-full blur-[100px] opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="absolute top-8 right-8 text-8xl font-black font-heading text-[#0A2540]/5 italic transform rotate-12 transition-transform duration-500 group-hover:scale-110">
                    {idx + 1}
                  </div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-[#F4F6F8] flex items-center justify-center text-[#2563EB] mb-8 transition-colors duration-500 group-hover:bg-[#2563EB] group-hover:text-white">
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 text-[#06B6D4] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                  <FiServer className="w-3 h-3" /> Tangible Outcomes
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#0A2540]">
                  Software built for<br/>institutional scale.
                </h2>
              </motion.div>
              <Link href="/work" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#0A2540] hover:text-[#2563EB] transition-colors">
                View DevOps Case Studies <FiArrowRight className="transition-transform group-hover:translate-x-2" />
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
                  className="group overflow-hidden rounded-[32px] bg-white border border-[#0A2540]/10 shadow-[0_10px_40px_rgba(10,37,64,0.03)] relative hover:shadow-[0_20px_60px_rgba(37,99,235,0.08)] transition-all duration-500"
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
                       <div className="inline-flex items-center gap-2 rounded-md bg-white/20 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-[#BFDBFE]">
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
                    <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-sm font-bold uppercase text-[#2563EB]">
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
            SECTION 5: THE PROCESS (AGILE ENGINEERING)
            ========================================= */}
        <section className="px-6 py-32 border-y border-[#0A2540]/5 bg-white relative overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-24 relative z-20">
              <span className="inline-block rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.35em] text-[#2563EB] mb-6 shadow-sm">
                The Deployment Cycle
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight text-[#0A2540]">
                Agile Engineering.
              </h2>
              <p className="mt-6 text-lg text-[#0A2540]/70 font-light max-w-2xl mx-auto">
                No black boxes. We write clean, rigorously tested code through transparent two-week sprints, deploying modular architecture updates directly to your servers.
              </p>
            </div>

            {/* Desktop Graphical Nested Deployment Blocks */}
            <div className="hidden lg:flex justify-between items-center max-w-6xl mx-auto relative group pt-8 pb-12">
               
               {/* Arrow Connectors mapping the iteration flow */}
               <div className="absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent -translate-y-1/2 z-0" />
               <svg className="absolute top-1/2 right-[5%] -translate-y-[calc(100%+30px)] w-full h-10 pointer-events-none z-0" style={{ transform: 'rotateX(180deg)' }}>
                  {/* Loop back arrow line */}
                  <path d="M 850 10 L 150 10" stroke="#06B6D4" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="5,5" fill="none" />
               </svg>

               {processSteps.map((step, index) => (
                  <motion.div 
                     key={index} 
                     initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-10%" }} transition={{ delay: index * 0.15 }}
                     className="w-[22%] relative z-10"
                  >
                     <div className="w-full h-full bg-[#F4F6F8] border border-[#0A2540]/10 rounded-[28px] p-6 text-left shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[#2563EB]/30 group">
                        
                        {/* Fake Code Block bg inside card */}
                        <div className="absolute top-0 right-0 w-32 h-20 bg-gradient-to-bl from-[#2563EB]/5 to-transparent pointer-events-none" />

                        <div className="w-10 h-10 bg-white border border-[#2563EB]/20 rounded-[12px] flex items-center justify-center font-bold text-[#2563EB] text-sm shadow-sm mb-6">
                           0{index+1}
                        </div>
                        
                        <h3 className="text-lg font-bold font-heading text-[#0A2540] mb-2">{step.title}</h3>
                        <p className="text-[13px] text-[#0A2540]/70 font-light leading-relaxed">{step.text}</p>
                        
                        {/* Terminal decorative loading bar effect on hover */}
                        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] w-0 group-hover:w-full transition-all duration-500" />
                     </div>
                  </motion.div>
               ))}

            </div>

            {/* Mobile Vertical Blocks */}
            <div className="lg:hidden space-y-4 max-w-xl mx-auto relative px-4">
               {processSteps.map((step, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative bg-[#F4F6F8] p-6 rounded-[24px] border border-[#0A2540]/5 flex gap-5">
                     <div className="w-12 h-12 shrink-0 bg-white border border-[#2563EB]/20 rounded-[12px] flex items-center justify-center font-bold text-lg text-[#2563EB] shadow-sm">
                        0{index+1}
                     </div>
                     <div>
                        <h3 className="text-lg font-bold font-heading text-[#0A2540] mb-1">{step.title}</h3>
                        <p className="text-sm text-[#0A2540]/70 font-light">{step.text}</p>
                     </div>
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
            {/* Background dynamic Code/Server lighting */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(37,99,235,0.35)_0%,_transparent_70%)] blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(6,182,212,0.3)_0%,_transparent_70%)] blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
            
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

            <div className="relative z-10 flex flex-col items-center">
              <span className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.35em] text-[#BFDBFE] mb-8 backdrop-blur-md">
                Deploy Superior Infrastructure
              </span>
              <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight font-heading max-w-4xl mx-auto leading-[1.05] text-white">
                Ready to build an entirely new operational advantage?
              </h2>
              <p className="mt-8 max-w-2xl text-lg text-white/70 mx-auto font-light">
                Consult with our engineering directors. We will map your entire cloud architecture, outline technical debt, and define an exact agile timeline for your custom application build.
              </p>
              
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
                <Link
                  href="/#contact"
                  className="group rounded-full bg-[#2563EB] px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all shadow-[0_10px_30px_rgba(37,99,235,0.4)] hover:scale-105 hover:bg-[#1d4ed8] flex items-center gap-3"
                >
                  Consult An Engineer <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/work"
                  className="rounded-full border border-white/20 px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-white/10 backdrop-blur-sm"
                >
                  Review Server Architectures
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
