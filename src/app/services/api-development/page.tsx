"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../../components/Footer";
import FAQSection from "../../../components/FAQSection";
import { 
  FiServer, FiLock, FiDatabase, FiCloudLightning,
  FiArrowRight, FiCpu, FiGlobe, FiCode, FiLayers, FiShield
} from "react-icons/fi";
import { FaNodeJs, FaAws, FaPython, FaDocker } from "react-icons/fa";

const apiDevFaqs = [
  {
    question: "What types of APIs do you build?",
    answer: "We engineer high-performance RESTful APIs, modern GraphQL architectures, and real-time WebSocket connections. Whether you need a secure microservice or a unified backend gateway, we build for scale."
  },
  {
    question: "How do you ensure API security?",
    answer: "We deploy military-grade security standards, including OAuth 2.0, stateless JWTs, IP allow-listing, rate limiting, and encrypted payloads to guarantee absolute protection against external vulnerabilities."
  },
  {
    question: "Do you integrate with third-party software?",
    answer: "Yes, we build custom middleware to seamlessly bridge your application with external SaaS products (like Stripe, Salesforce, or Twilio) or to modernize legacy databases with accessible modern wrappers."
  },
  {
    question: "Can your APIs handle high concurrency?",
    answer: "Absolutely. We utilize advanced load balancing, Redis caching layers, and database query optimization to ensure sub-50ms latency, even when processing millions of concurrent requests."
  },
  {
    question: "Do you provide developer documentation?",
    answer: "Every API we engineer comes with meticulously generated, interactive OpenAPI/Swagger documentation, ensuring a world-class Developer Experience (DX) for your internal or external consumers."
  }
];

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
    title: "Custom REST Architecture",
    description: "Designing hyper-efficient, stateless RESTful APIs following strict OpenAPI standards for fast, predictable, and fully-documented integrations.",
    icon: FiServer },
  {
    title: "GraphQL Engineering",
    description: "Building powerful GraphQL endpoints that eliminate over-fetching, allowing your frontend to request the exact data relationships needed in a single query.",
    icon: FiGlobe },
  {
    title: "Military-Grade Authenication",
    description: "Securing your data pipes using OAuth 2.0, JWT stateless tokens, and IP allow-listing to ensure absolute fortification against external threats.",
    icon: FiLock },
  {
    title: "Third-Party Abstraction",
    description: "Bridging the gap between disparate SaaS systems (Stripe, Twilio, Salesforce) by building custom middleware that unifies all external endpoints.",
    icon: FiLayers },
  {
    title: "High-Concurrency Tuning",
    description: "Optimizing database queries and deploying Redis caching layers so your API can process millions of concurrent requests with sub-50ms latency.",
    icon: FiCloudLightning },
  {
    title: "Legacy System Bridging",
    description: "Wrapping outdated, inaccessible monolithic systems in modern API wrappers, allowing modern web and mobile apps to seamlessly communicate with legacy data.",
    icon: FiDatabase },
];

const processSteps = [
  {
    title: "Data Payload Strategy",
    text: "Before writing endpoints, we define the exact JSON payload structures, query parameters, and error-handling status codes to construct a developer-friendly DX." },
  {
    title: "Security Fortification",
    text: "Integrating API gateways, rate-limiting algorithms, and bearer-token authentication layers to ensure public and private endpoints remain sterile from abuse." },
  {
    title: "Microservice Engineering",
    text: "Decoupling complex monolithic logic to write discrete, highly specific microservices executing isolated database transactions for maximum speed." },
  {
    title: "Stress Testing & Docs",
    text: "Bombarding the endpoints with synthetic load vectors to ensure stability, followed by generating beautiful, interactive Swagger documentation." },
];

const featuredProjects = [
  {
    title: "FinTech Payment Gateway",
    category: "High-Volume REST API",
    image: "/images/project1.png", // Reuse existing provided paths
    summary:
      "Engineered an ultra-secure transaction API capable of clearing 10,000+ complex ledger entries per second with guaranteed atomic integrity." },
  {
    title: "E-commerce Sync Middleware",
    category: "GraphQL & Caching",
    image: "/images/zenfora-food.png",
    summary:
      "Replaced a bloated REST architecture with a streamlined GraphQL schema, reducing mobile app data consumption by 74% and completely eliminating latency." },
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
        "text-[#0A2540]/80 hover:text-[#4F46E5]"
      }`}
    >
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
        {children}
      </span>
      <span
        className={`absolute left-0 top-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0 text-[#4F46E5] font-bold`}
      >
        {children}
      </span>
    </Link>
  );
};

export default function ApiDevelopmentPage() {
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
    <div className="min-h-screen bg-[#F4F6F8] text-[#0A2540] font-sans selection:bg-[#4F46E5] selection:text-white">
      <title>Premium API Development | Setzet</title>
      <meta
        name="description"
        content="We engineer the backbone of the web. Scalable GraphQL architectures, secure REST APIs, and microservices built for absolute high-concurrency."
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
              className="hidden rounded-full border border-[#0A2540]/10 bg-white/50 backdrop-blur-md px-6 py-2.5 text-[11px] font-bold transition-all duration-300 hover:bg-[#4F46E5] hover:border-[#4F46E5] hover:text-white md:inline-flex text-[#0A2540]"
              href="/#contact"
            >
              Start a Project
            </Link>
            <button
              className="inline-flex h-10 items-center justify-center rounded-full border border-[#0A2540]/20 px-4 text-[11px] font-semibold transition md:hidden text-[#0A2540] hover:border-[#4F46E5]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="mr-2">{menuOpen ? "Close" : "Menu"}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-0 relative overflow-hidden">
        
        {/* =========================================
            HERO SECTION - THE API TERMINAL DASHBOARD
            ========================================= */}
        <section className="relative min-h-[100vh] flex items-center pt-32 pb-20 px-6 sm:px-12">
          {/* Animated Background Ambience */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Indigo & Cyan Gradients */}
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
              transition={{ duration: 10, ease: "easeInOut" }}
              className="absolute top-[-5%] right-[0%] w-[50vw] h-[50vw] rounded-full bg-[#4F46E5]/15 blur-[160px]" 
            />
            <motion.div 
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
              transition={{ duration: 12, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[-10%] left-[0%] w-[45vw] h-[45vw] rounded-full bg-[#22D3EE]/15 blur-[150px]" 
            />
            {/* Tech Wireframe grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(10,37,64,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,37,64,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)]" />
          </div>

          <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-8 items-center relative z-10">
            
            {/* Left: Copy & Actions */}
            <div className="max-w-xl lg:pr-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0A2540]/10 bg-white/70 backdrop-blur-md px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#4F46E5] shadow-sm"
              >
                <FiGlobe className="text-sm" /> Infrastructure Backbone
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight font-heading text-[#0A2540]"
              >
                Data engineered for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#22D3EE]">massive scale.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-lg md:text-xl text-[#0A2540]/70 leading-relaxed font-light"
              >
                We build bulletproof APIs. Whether you need an impenetrable RESTful gateway, hyper-efficient GraphQL queries, or custom middleware, we engineer the arteries of the modern web.
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
                    Architect Your API <FiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                
                <div className="flex items-center gap-3 px-4 py-3 bg-white/50 backdrop-blur-sm border border-[#0A2540]/10 rounded-full shadow-sm">
                  <FiLock className="text-xl text-[#22D3EE]" />
                  <div className="text-[10px] font-bold text-[#0A2540]/80 uppercase tracking-widest">
                    Stateless & Secure
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Floating API Terminal UI  */}
            <div className="relative h-[650px] w-full hidden md:block perspective-[1400px]">
              
              {/* Back Node: Endpoint Routing Window */}
              <motion.div 
                animate={{ y: [-10, 10, -10], rotateX: [10, 15, 10], rotateZ: [-4, -2, -4], rotateY: [-10, -5, -10] }}
                transition={{ duration: 8, ease: "easeInOut" }}
                className="absolute top-[15%] left-[5%] w-[380px] rounded-[16px] border border-[#0A1929] bg-[#0A1929] shadow-2xl p-6 z-10 overflow-hidden"
              >
                 <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-4">
                    <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest flex items-center gap-2">
                       <FiCloudLightning className="text-[#22D3EE]" /> Active Request
                    </div>
                    <div className="flex items-center gap-1.5 bg-[#4F46E5]/20 text-[#818CF8] px-2 py-1 rounded text-[10px] font-mono font-bold">
                       POST /api/v1/auth
                    </div>
                 </div>
                 
                 <div className="space-y-4 font-mono text-xs text-gray-400">
                    <div className="flex">
                       <span className="w-24 text-gray-500">Authorization:</span>
                       <span className="text-yellow-400 break-all">Bearer eyJhbGciOiJIUzI...</span>
                    </div>
                    <div className="flex">
                       <span className="w-24 text-gray-500">Content-Type:</span>
                       <span className="text-green-400">application/json</span>
                    </div>
                    <div className="flex">
                       <span className="w-24 text-gray-500">User-Agent:</span>
                       <span className="text-green-400">Secure Client v2.4</span>
                    </div>
                 </div>
              </motion.div>
              
              {/* Middle Layer: Live JSON Response View */}
              <motion.div 
                animate={{ y: [-5, 15, -5], rotateX: [15, 20, 15], rotateZ: [2, 4, 2], rotateY: [-5, 0, -5] }}
                transition={{ duration: 9, ease: "easeInOut", delay: 1 }}
                className="absolute top-[40%] right-[5%] w-[340px] rounded-[16px] border border-[#0A1929] bg-[#0F172A] shadow-[0_30px_60px_rgba(79,70,229,0.25)] overflow-hidden z-20"
              >
                 {/* Window Header */}
                 <div className="w-full h-10 bg-[#1E293B] flex items-center px-4 gap-2 border-b border-[#334155]">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <div className="ml-auto text-[10px] font-mono font-bold flex items-center gap-2">
                       <span className="text-green-400">200 OK</span> <span className="text-gray-500">14ms</span>
                    </div>
                 </div>
                 {/* Raw JSON Code Editor */}
                 <div className="p-5 font-mono text-[11px] leading-[1.8] text-gray-300">
                    <div>{'{'}</div>
                    <div className="pl-4"><span className="text-purple-400">"status"</span>: <span className="text-green-400">"success"</span>,</div>
                    <div className="pl-4"><span className="text-purple-400">"data"</span>: {'{'}</div>
                    <div className="pl-8"><span className="text-purple-400">"userId"</span>: <span className="text-orange-400">"usr_94f82a1"</span>,</div>
                    <div className="pl-8"><span className="text-purple-400">"token"</span>: <span className="text-green-400">"sec_28fja..."</span>,</div>
                    <div className="pl-8"><span className="text-purple-400">"permissions"</span>: [</div>
                    <div className="pl-12 text-yellow-300">"read:data",</div>
                    <div className="pl-12 text-yellow-300">"write:ledger"</div>
                    <div className="pl-8">]</div>
                    <div className="pl-4">{'}'}</div>
                    <div>{'}'}</div>
                 </div>
              </motion.div>

              {/* Front Top Layer: Database Connection Status */}
              <motion.div 
                animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 7, ease: "easeInOut", delay: 2.5 }}
                className="absolute bottom-[2%] left-[10%] w-[280px] rounded-full border border-white/50 bg-gradient-to-r from-white to-[#F8FAFC] shadow-[0_40px_80px_rgba(79,70,229,0.15)] p-3 pr-6 z-30 flex items-center gap-4"
              >
                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4F46E5] to-[#22D3EE] flex items-center justify-center text-white shadow-[0_10px_20px_rgba(79,70,229,0.3)]">
                    <FiDatabase className="text-xl" />
                 </div>
                 <div className="flex flex-col flex-1">
                    <div className="text-[9px] font-bold text-[#0A2540]/50 uppercase tracking-widest mb-0.5">Database Sync</div>
                    <div className="text-xs font-black text-[#0A2540]">PostgreSQL Cluster Active</div>
                 </div>
                 <FiShield className="text-2xl text-[#4F46E5]/20 absolute right-6" />
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
              Engineered With Modern Enterprise Data Stacks
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FiGlobe className="text-[#E535AB] text-3xl" /> GraphQL</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaNodeJs className="text-[#8CC84B] text-3xl" /> Fastify & Node</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaAws className="text-[#FF9900] text-3xl" /> API Gateway</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaPython className="text-[#3776AB] text-3xl" /> Python & Django</div>
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
              <motion.div variants={reveal} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4F46E5]/10 border border-[#4F46E5]/20 text-[#4F46E5] text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                <FiCode className="w-3 h-3" /> Core Capabilities
              </motion.div>
              <motion.h2 variants={reveal} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-[#0A2540] max-w-3xl">
                We handle hyper-complex data routing.
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  variants={reveal}
                  className="group relative rounded-[32px] border border-[#0A2540]/10 bg-white p-8 overflow-hidden transition-all duration-500 shadow-[0_8px_30px_rgba(10,37,64,0.03)] hover:shadow-[0_40px_60px_rgba(79,70,229,0.08)] hover:-translate-y-2 hover:border-[#4F46E5]/30"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F46E5] rounded-full blur-[100px] opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="absolute top-8 right-8 text-8xl font-black font-heading text-[#0A2540]/5 italic transform rotate-12 transition-transform duration-500 group-hover:scale-110">
                    {idx + 1}
                  </div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-[#F4F6F8] flex items-center justify-center text-[#4F46E5] mb-8 transition-colors duration-500 group-hover:bg-[#4F46E5] group-hover:text-white">
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22D3EE]/10 border border-[#22D3EE]/20 text-[#22D3EE] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                  <FiServer className="w-3 h-3" /> Tangible Outcomes
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#0A2540]">
                  Architectures that move<br/>massive server loads.
                </h2>
              </motion.div>
              <Link href="/work" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#0A2540] hover:text-[#4F46E5] transition-colors">
                View Load Test Case Studies <FiArrowRight className="transition-transform group-hover:translate-x-2" />
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
                  className="group overflow-hidden rounded-[32px] bg-white border border-[#0A2540]/10 shadow-[0_10px_40px_rgba(10,37,64,0.03)] relative hover:shadow-[0_20px_60px_rgba(79,70,229,0.08)] transition-all duration-500"
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
                       <div className="inline-flex items-center gap-2 rounded-md bg-white/20 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-[#A5B4FC]">
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
                    <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-sm font-bold uppercase text-[#4F46E5]">
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
            SECTION 5: THE PROCESS (THE DATA BRIDGE)
            ========================================= */}
        <section className="px-6 sm:px-12 py-32 border-y border-[#0A2540]/5 bg-white relative overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-24 relative z-20">
              <span className="inline-block rounded-full bg-[#4F46E5]/10 border border-[#4F46E5]/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.35em] text-[#4F46E5] mb-6 shadow-sm">
                The Data Bridge
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight text-[#0A2540]">
                Mapping The Payload.
              </h2>
              <p className="mt-6 text-lg text-[#0A2540]/70 font-light max-w-2xl mx-auto">
                No messy endpoints. We maintain draconian standards for endpoint structuring, payload optimization, and automated OpenAPI documentation to ensure your developer experience is world-class.
              </p>
            </div>

            {/* Desktop Graphical Timeline Blocks */}
            <div className="hidden lg:flex justify-between items-center max-w-7xl mx-auto relative group pt-8 pb-12">
               
               {/* Central Cybernetic Connecting Line */}
               <div className="absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-[#0A2540]/10 -translate-y-1/2 z-0" />
               <div className="absolute top-1/2 left-[10%] w-[80%] h-[3px] bg-gradient-to-r from-[#4F46E5] to-[#22D3EE] -translate-y-1/2 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

               {processSteps.map((step, index) => (
                  <motion.div 
                     key={index} 
                     initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ delay: index * 0.15 }}
                     className="w-[23%] relative z-10 flex flex-col items-center"
                  >
                     <div className="w-16 h-16 rounded-full bg-white border-4 border-[#F4F6F8] shadow-md flex items-center justify-center mb-6 relative z-10 font-black text-xl text-[#0A2540] font-heading group-hover:border-[#4F46E5]/30 transition-colors duration-300">
                        0{index+1}
                        
                        {/* Ping animation behind the node */}
                        <div className="absolute inset-0 rounded-full border border-[#4F46E5] opacity-0 group-hover:animate-ping" />
                     </div>
                     
                     <div className="bg-[#F4F6F8] rounded-[24px] p-6 text-center shadow-sm border border-[#0A2540]/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-white hover:border-[#4F46E5]/30">
                        <h3 className="text-lg font-bold font-heading text-[#0A2540] mb-3">{step.title}</h3>
                        <p className="text-[13px] text-[#0A2540]/70 font-light leading-relaxed">{step.text}</p>
                     </div>
                  </motion.div>
               ))}

            </div>

            {/* Mobile Vertical Blocks */}
            <div className="lg:hidden space-y-4 max-w-xl mx-auto relative px-4">
               {/* Vertical Connector Line */}
               <div className="absolute top-0 bottom-0 left-10 w-0.5 bg-[#4F46E5]/20 z-0" />
               
               {processSteps.map((step, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative bg-white p-6 rounded-[24px] border border-[#0A2540]/10 shadow-sm flex gap-5 z-10 ml-6">
                     <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 shrink-0 bg-[#F4F6F8] border border-[#4F46E5]/30 rounded-full flex items-center justify-center font-bold text-sm text-[#4F46E5] shadow-sm">
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
            SECTION: FAQ
            ========================================= */}
        <FAQSection faqs={apiDevFaqs} />

        {/* =========================================
            SECTION 6: FINAL CTA 
            ========================================= */}
        <section className="px-6 sm:px-12 pb-24 relative bg-[#F4F6F8] py-16">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
            className="mx-auto max-w-7xl relative overflow-hidden rounded-[40px] bg-[#0A2540] px-10 py-24 text-center shadow-[0_20px_60px_rgba(10,37,64,0.3)]"
          >
            {/* Background dynamic Server lighting */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(79,70,229,0.35)_0%,_transparent_70%)] blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(34,211,238,0.3)_0%,_transparent_70%)] blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
            
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

            <div className="relative z-10 flex flex-col items-center">
              <span className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.35em] text-[#A5B4FC] mb-8 backdrop-blur-md">
                Build Your Server Backbone
              </span>
              <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight font-heading max-w-4xl mx-auto leading-[1.05] text-white">
                Ready to engineer endpoints that scale infinitely?
              </h2>
              <p className="mt-8 max-w-2xl text-lg text-white/70 mx-auto font-light">
                Secure your data layer. We will map your entire payload routing architecture and outline a hyper-scalable path to execution.
              </p>
              
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
                <Link
                  href="/#contact"
                  className="group rounded-full bg-[#4F46E5] px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all shadow-[0_10px_30px_rgba(79,70,229,0.4)] hover:scale-105 hover:bg-[#4338ca] flex items-center gap-3"
                >
                  Architect My API <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/work"
                  className="rounded-full border border-white/20 px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-white/10 backdrop-blur-sm"
                >
                  View Server Load Audits
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
