"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../../components/Footer";
import FAQSection from "../../../components/FAQSection";
import { 
  FiSmartphone, FiLayers, FiCode, FiCpu,
  FiArrowRight, FiZap, FiBarChart2, FiActivity, FiTrendingUp
} from "react-icons/fi";
import { FaStar, FaReact, FaApple, FaAndroid } from "react-icons/fa";

const mobileAppFaqs = [
  {
    question: "Do you develop for both iOS and Android?",
    answer: "Yes, we develop for both platforms. Depending on your project requirements, we can build using native technologies (Swift for iOS, Kotlin for Android) or cross-platform frameworks like React Native or Flutter to optimize development time and costs."
  },
  {
    question: "How long does it take to build a mobile app?",
    answer: "The timeline varies significantly based on complexity. A simple MVP (Minimum Viable Product) might take 8-12 weeks, while a feature-rich, scalable enterprise application can take 4-6 months or more. We establish clear milestones during our initial strategy phase."
  },
  {
    question: "Do you handle the App Store and Google Play submission process?",
    answer: "Absolutely. We manage the entire deployment process, ensuring your app meets all strict App Store guidelines and Google Play policies. We handle the technical compliance so you can focus on the launch."
  },
  {
    question: "Will my app be secure and scalable?",
    answer: "Security and scalability are foundational to our architecture. We implement robust encryption, secure authentication, and build cloud-based backends that easily handle traffic spikes."
  },
  {
    question: "What happens after the app is launched?",
    answer: "We offer dedicated maintenance and growth retainers. This includes continuous monitoring, OS compatibility updates, performance tuning, and rolling out new features based on user feedback and analytics."
  }
];

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
    title: "iOS Development",
    description: "Native Swift applications built for performance-first, Apple-grade experiences and fluid animations.",
    icon: FaApple,
  },
  {
    title: "Android Development",
    description: "Kotlin applications perfectly optimized for speed, stability, and massive device scale.",
    icon: FaAndroid,
  },
  {
    title: "Cross-Platform Builds",
    description: "React Native and Flutter architectures when you need maximum velocity across platforms without compromise.",
    icon: FaReact,
  },
  {
    title: "Backend & API Engineering",
    description: "Secure infrastructure, complex auth, and highly scalable APIs that keep your mobile app lightning fast.",
    icon: FiCpu,
  },
];

const processSteps = [
  {
    title: "App Idea & Strategy",
    text: "We clarify the core value, define success metrics, and map the fastest path to a market-ready MVP.",
  },
  {
    title: "UX/UI Design Systems",
    text: "We design premium, consistent interface flows that guarantee a frictionless user journey.",
  },
  {
    title: "Core Engineering",
    text: "We develop the application using scalable architecture, native integrations, and smooth transitions.",
  },
  {
    title: "QA & Testing",
    text: "We rigorously validate device compatibility, edge cases, and performance tuning.",
  },
  {
    title: "App Store Launch",
    text: "We handle submission, ASO guidelines, and ensure a flawless rollout to actual users.",
  },
  {
    title: "Growth & Iteration",
    text: "We track retention, trace product loops, and iterate rapidly on high-impact insights.",
  },
];

const featuredProjects = [
  {
    title: "Fitness & Health Pro",
    category: "HealthTech Application",
    image: "/images/project1.png", // Reusing image paths provided by the user previously
    summary:
      "A globally scalable fitness application integrating wearable health data to drive daily user retention.",
  },
  {
    title: "ZenWallet Crypto",
    category: "FinTech App",
    image: "/images/zenfora-food.png",
    summary:
      "A highly secure, beautifully responsive mobile wallet interface focused on radically simplifying transactions.",
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

export default function MobileAppDevelopmentPage() {
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
            {/* Grid grid dots overlay */}
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
                iOS & Android Experiences
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight font-heading text-[#0A2540]"
              >
                Build a mobile app users <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#00C6FF]">return to</span> daily.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-lg md:text-xl text-[#0A2540]/70 leading-relaxed font-light max-w-xl"
              >
                We combine product strategy, intuitive UX, and bulletproof engineering to ship mobile products that activate fast, retain users, and scale cleanly.
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
                    <span>4.8/5 App Store Avg</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Floating Visual Composition (Mobile Phone Layout) */}
            <div className="relative h-[600px] w-full hidden md:block perspective-[1200px] perspective-origin-center scale-90 lg:scale-100">
              
              {/* Main Center UI Card (Mobile Phone Mockup) */}
              <motion.div 
                initial={{ opacity: 0, y: "-40%", x: "-50%" }}
                animate={{ opacity: 1, y: "-50%", x: "-50%" }}
                transition={{ duration: 0.8 }}
                className="absolute top-1/2 left-1/2 w-[280px] h-[580px] rounded-[40px] border-[10px] border-[#0A2540] bg-white shadow-[0_30px_100px_rgba(10,37,64,0.15)] overflow-hidden z-20"
              >
                {/* Dynamic Island / Notch */}
                <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-30">
                  <div className="w-24 h-5 bg-[#0A2540] rounded-b-xl" />
                </div>
                
                {/* App Content */}
                <div className="p-6 pt-12 h-full bg-[#F4F6F8]">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <div className="text-[#0A2540] font-extrabold text-xl font-heading">Good morning,</div>
                      <div className="text-[#0A2540]/50 text-xs font-bold">Your weekly activity</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#007BFF] to-[#00C6FF] p-0.5">
                       <div className="w-full h-full rounded-full bg-white border-2 border-transparent" />
                    </div>
                  </div>

                  {/* Activity Widgets */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <FiActivity className="text-xl text-[#27C93F] mb-2" />
                      <div className="text-2xl font-black text-[#0A2540]">8,240</div>
                      <div className="text-[10px] text-[#0A2540]/50 font-bold uppercase">Active</div>
                    </div>
                    <div className="rounded-2xl bg-[#007BFF] p-4 shadow-md text-white">
                      <FiTrendingUp className="text-xl mb-2" />
                      <div className="text-2xl font-black">+34%</div>
                      <div className="text-[10px] text-white/80 font-bold uppercase">Growth</div>
                    </div>
                  </div>

                  {/* Interactive List items inside app */}
                  <div className="space-y-3">
                    <div className="w-full h-16 bg-white rounded-xl shadow-sm flex items-center px-4 gap-4">
                      <div className="w-10 h-10 rounded-lg bg-indigo-50" />
                      <div className="flex-1 space-y-2">
                        <div className="w-1/2 h-2 bg-gray-200 rounded-full" />
                        <div className="w-1/3 h-2 bg-gray-100 rounded-full" />
                      </div>
                    </div>
                    <div className="w-full h-16 bg-white rounded-xl shadow-sm flex items-center px-4 gap-4 opacity-70">
                      <div className="w-10 h-10 rounded-lg bg-pink-50" />
                      <div className="flex-1 space-y-2">
                        <div className="w-2/3 h-2 bg-gray-200 rounded-full" />
                        <div className="w-1/4 h-2 bg-gray-100 rounded-full" />
                      </div>
                    </div>
                    <div className="w-full h-16 bg-white rounded-xl shadow-sm flex items-center px-4 gap-4 opacity-40">
                      <div className="w-10 h-10 rounded-lg bg-orange-50" />
                      <div className="flex-1 space-y-2">
                        <div className="w-1/3 h-2 bg-gray-200 rounded-full" />
                        <div className="w-1/2 h-2 bg-gray-100 rounded-full" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom nav bar */}
                  <div className="absolute bottom-4 inset-x-6 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-around px-2">
                     <div className="w-8 h-8 rounded-full bg-[#007BFF]/10 flex items-center justify-center">
                       <span className="w-1.5 h-1.5 rounded-full bg-[#007BFF]" />
                     </div>
                     <div className="w-5 h-5 rounded-full bg-gray-200" />
                     <div className="w-5 h-5 rounded-full bg-gray-200" />
                     <div className="w-5 h-5 rounded-full bg-gray-200" />
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 1: Store Rank Badge */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-20 right-0 w-[190px] rounded-2xl border border-[#0A2540]/10 bg-white/95 backdrop-blur-xl p-4 shadow-[0_20px_50px_rgba(10,37,64,0.1)] z-30 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-4 border-[#FFB800] bg-yellow-50 flex items-center justify-center text-[#FFB800] text-xl">
                    <FaStar />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#0A2540]/40 tracking-wider">Top 100 App</div>
                    <div className="text-xs font-bold text-[#0A2540]">#1 Category</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 2: Tech Notification */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-32 left-0 w-[240px] rounded-2xl border border-[#0A2540]/10 bg-white/95 backdrop-blur-xl p-4 shadow-[0_30px_60px_rgba(10,37,64,0.1)] z-30 flex items-center gap-4 hover:-translate-y-2 transition-transform duration-300"
              >
                 <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                    <FiSmartphone className="text-2xl" />
                 </div>
                 <div>
                    <div className="text-[#0A2540] font-bold text-sm">60fps Smooth</div>
                    <div className="text-[10px] font-bold text-[#0A2540]/50 uppercase">Native Performance</div>
                 </div>
              </motion.div>
              
              {/* Floating Element 3: Speed Icon */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute top-[30%] text-[#00C6FF] left-10 text-4xl blur-[2px] z-10 hover:scale-110 hover:opacity-100 transition-all duration-300"
              >
                <FiZap />
              </motion.div>

            </div>
          </div>
        </section>


        {/* =========================================
            SECTION 2: MOBILE TECH STACK 
            ========================================= */}
        <section className="px-6 py-12 border-y border-[#0A2540]/5 bg-white">
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-[10px] uppercase tracking-[0.3em] font-bold text-[#0A2540]/40 mb-8">
              Powered by native and cross-platform architecture
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaApple className="text-[#000000] text-3xl" /> iOS Swift</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaAndroid className="text-[#3DDC84] text-3xl" /> Android</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaReact className="text-[#61DAFB] text-3xl" /> React Native</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><span className="text-[#02569B] text-3xl font-black italic">F</span> Flutter</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><span className="text-[#FFCA28] text-3xl font-black">~</span> Firebase</div>
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
                <FiLayers className="w-3 h-3" /> App Architecture
              </motion.div>
              <motion.h2 variants={reveal} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-[#0A2540] max-w-3xl">
                What you get with mobile app development.
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-6">
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={reveal}
                  className="group relative rounded-[32px] border border-[#0A2540]/10 bg-white p-8 md:p-12 overflow-hidden transition-all duration-500 shadow-[0_8px_30px_rgba(10,37,64,0.03)] hover:shadow-[0_20px_40px_rgba(0,123,255,0.1)] hover:-translate-y-2 hover:border-[#007BFF]/30"
                >
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
                  <FiSmartphone className="w-3 h-3" /> Recent App Projects
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#0A2540]">
                  Beautiful apps,<br/>engineered to convert.
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
            SECTION 5: THE PROCESS (APP DELIVERY PIPELINE)
            ========================================= */}
        <section className="px-6 py-28 border-t border-[#0A2540]/5 bg-white relative overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-24">
              <span className="inline-block rounded-full bg-[#007BFF]/10 border border-[#007BFF]/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.35em] text-[#007BFF] mb-6 shadow-sm">
                Delivery Pipeline
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading leading-tight text-[#0A2540]">
                Built for momentum and scale.
              </h2>
              <p className="mt-4 text-lg text-[#0A2540]/70 font-light max-w-2xl mx-auto">
                We use a linear, highly structured pipeline designed explicitly for mobile app development to get your product to the App Store flawlessly.
              </p>
            </div>

            {/* Desktop Graphical App Pipeline */}
            <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-x-8 items-center max-w-6xl mx-auto h-[650px]">
              
              {/* Left Column Text Nodes (01, 03, 05) */}
              <div className="flex flex-col justify-between py-8 h-full text-right relative z-10 w-full max-w-[320px] ml-auto">
                {/* 01 */}
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <div className="flex items-center justify-end gap-3 mb-2">
                    <div className="w-12 h-px bg-[#007BFF] opacity-30 block" />
                    <span className="text-4xl font-extrabold text-[#007BFF]">01</span>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0A2540] mb-2">{processSteps[0].title}</h3>
                  <p className="text-sm text-[#0A2540]/70 pl-8 leading-relaxed">{processSteps[0].text}</p>
                </motion.div>
                {/* 03 */}
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10%" }}>
                  <div className="flex items-center justify-end gap-3 mb-2">
                    <div className="w-12 h-px bg-[#007BFF] opacity-30 block" />
                    <span className="text-4xl font-extrabold text-[#007BFF]">03</span>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0A2540] mb-2">{processSteps[2].title}</h3>
                  <p className="text-sm text-[#0A2540]/70 pl-8 leading-relaxed">{processSteps[2].text}</p>
                </motion.div>
                {/* 05 */}
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10%" }}>
                  <div className="flex items-center justify-end gap-3 mb-2">
                    <div className="w-12 h-px bg-[#007BFF] opacity-30 block" />
                    <span className="text-4xl font-extrabold text-[#007BFF]">05</span>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0A2540] mb-2">{processSteps[4].title}</h3>
                  <p className="text-sm text-[#0A2540]/70 pl-8 leading-relaxed">{processSteps[4].text}</p>
                </motion.div>
              </div>

              {/* Central Abstract Mobile Pipeline Graphic */}
              <div className="relative w-[340px] flex items-center justify-center">
                 
                 {/* Visual Connectors projecting left/right */}
                 <div className="absolute left-0 top-[10%] w-[100px] h-px bg-[#007BFF]/20 z-0" />
                 <div className="absolute left-0 top-[50%] w-[100px] h-px bg-[#007BFF]/20 z-0" />
                 <div className="absolute left-0 bottom-[10%] w-[100px] h-px bg-[#007BFF]/20 z-0" />

                 <div className="absolute right-0 top-[30%] w-[100px] h-px bg-[#007BFF]/20 z-0" />
                 <div className="absolute right-0 top-[70%] w-[100px] h-px bg-[#007BFF]/20 z-0" />

                 {/* The Phone Container */}
                 <motion.div 
                   initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                   className="w-[280px] h-[580px] rounded-[48px] border-[12px] border-[#0A2540] bg-[#F4F6F8] shadow-[0_30px_60px_rgba(10,37,64,0.15)] relative overflow-hidden flex flex-col items-center z-10"
                 >
                    <div className="w-32 h-6 bg-[#0A2540] rounded-b-2xl absolute top-0 z-20" /> {/* Notch */}
                    
                    {/* Interior Pipeline Timeline */}
                    <div className="absolute inset-0 p-8 flex flex-col items-center pt-16 h-full pb-16">
                      <div className="w-full flex-1 relative">
                        {/* Static vertical background line */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-1.5 bg-[#0A2540]/10 rounded-full" />
                        
                        {/* Animated fill line */}
                        <motion.div 
                          initial={{ height: "0%" }} whileInView={{ height: "100%" }} viewport={{ once: true }} transition={{ duration: 2.5, ease: "easeInOut" }}
                          className="absolute left-1/2 -translate-x-1/2 top-2 w-1.5 bg-gradient-to-b from-[#00C6FF] to-[#007BFF] rounded-full" 
                        />
                         
                        {/* Internal Nodes */}
                        <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-[4px] border-[#F4F6F8] bg-[#007BFF] shadow-sm z-10" />
                        <div className="absolute top-[28%] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-[4px] border-[#F4F6F8] bg-[#007BFF] shadow-sm z-10" />
                        <div className="absolute top-[48%] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-[4px] border-[#F4F6F8] bg-[#007BFF] shadow-sm z-10" />
                        <div className="absolute top-[68%] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-[4px] border-[#F4F6F8] bg-[#007BFF] shadow-sm z-10" />
                        <div className="absolute top-[88%] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-[4px] border-[#F4F6F8] bg-[#007BFF] shadow-sm z-10" />
                        
                        {/* Horizontal dashes inside phone connecting to outside lines */}
                        <div className="absolute top-[8%] right-1/2 w-12 h-px bg-[#007BFF]/30" />
                        <div className="absolute top-[28%] left-1/2 w-12 h-px bg-[#007BFF]/30" />
                        <div className="absolute top-[48%] right-1/2 w-12 h-px bg-[#007BFF]/30" />
                        <div className="absolute top-[68%] left-1/2 w-12 h-px bg-[#007BFF]/30" />
                        <div className="absolute top-[88%] right-1/2 w-12 h-px bg-[#007BFF]/30" />
                      </div>
                    </div>
                 </motion.div>
              </div>

              {/* Right Column Text Nodes (02, 04, 06) */}
              <div className="flex flex-col justify-between py-8 h-full text-left relative z-10 w-full max-w-[320px] pt-40 pb-0">
                {/* 02 */}
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <div className="flex items-center justify-start gap-3 mb-2">
                    <span className="text-4xl font-extrabold text-[#007BFF]">02</span>
                    <div className="w-12 h-px bg-[#007BFF] opacity-30 block" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0A2540] mb-2">{processSteps[1].title}</h3>
                  <p className="text-sm text-[#0A2540]/70 pr-8 leading-relaxed">{processSteps[1].text}</p>
                </motion.div>
                {/* 04 */}
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10%" }}>
                  <div className="flex items-center justify-start gap-3 mb-2">
                    <span className="text-4xl font-extrabold text-[#007BFF]">04</span>
                    <div className="w-12 h-px bg-[#007BFF] opacity-30 block" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0A2540] mb-2">{processSteps[3].title}</h3>
                  <p className="text-sm text-[#0A2540]/70 pr-8 leading-relaxed">{processSteps[3].text}</p>
                </motion.div>
                {/* 06 */}
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10%" }}>
                  <div className="flex items-center justify-start gap-3 mb-2">
                    <span className="text-4xl font-extrabold text-[#007BFF]">06</span>
                    <div className="w-12 h-px bg-[#007BFF] opacity-30 block" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0A2540] mb-2">{processSteps[5].title}</h3>
                  <p className="text-sm text-[#0A2540]/70 pr-8 leading-relaxed">{processSteps[5].text}</p>
                </motion.div>
              </div>

            </div>

            {/* Mobile / Tablet Vertical Steps */}
            <div className="lg:hidden relative space-y-6 max-w-2xl mx-auto mt-16">
              <div className="absolute left-8 top-8 bottom-8 w-[2px] bg-[#007BFF]/20" />
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }}
                  className="relative grid grid-cols-[auto_1fr] gap-6 items-start"
                >
                  <div className="relative z-10 w-16 h-16 rounded-full bg-white border-[3px] border-[#007BFF] shadow-md flex items-center justify-center font-bold text-[#007BFF] font-heading text-xl">
                    0{index + 1}
                  </div>
                  <div className="rounded-[22px] border border-[#0A2540]/10 bg-white p-6 md:p-8 shadow-[0_8px_30px_rgba(10,37,64,0.03)] hover:border-[#007BFF]/30 transition-colors">
                    <h3 className="text-2xl font-bold font-heading mb-3 text-[#0A2540]">{step.title}</h3>
                    <p className="text-base text-[#0A2540]/70 leading-relaxed font-light">{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* =========================================
            SECTION: FAQ
            ========================================= */}
        <FAQSection faqs={mobileAppFaqs} />

        {/* =========================================
            SECTION 6: FINAL CTA (Light, Vibrant)
            ========================================= */}
        <section className="px-6 pb-24 relative bg-[#F4F6F8]">
          <div className="h-32 bg-[#F4F6F8]" />
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
            className="mx-auto max-w-6xl relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#0A2540] to-[#1a365d] px-10 py-24 text-center shadow-2xl mt-[-8rem]"
          >
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#007BFF]/30 to-transparent rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#00C6FF]/20 to-transparent rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center">
              <span className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.35em] text-[#A5C8FF] mb-8 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                Ready to build?
              </span>
              <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight font-heading max-w-3xl mx-auto leading-tight text-white">
                Launch your mobile app and scale your growth.
              </h2>
              <p className="mt-8 max-w-xl text-lg text-white/70 mx-auto font-light">
                Schedule a discovery call. We'll outline your app's core mechanics, design strategy, and the most efficient technical path to market.
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
                  See App Portfolio
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
