"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../../components/Footer";
import FAQSection from "../../../components/FAQSection";
import { 
  FiHeart, FiMessageCircle, FiShare2, FiVideo,
  FiArrowRight, FiUsers, FiTrendingUp, FiSmartphone, FiEdit3
} from "react-icons/fi";
import { FaInstagram, FaTiktok, FaLinkedin, FaYoutube } from "react-icons/fa";

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
    title: "Short-Form Video Production",
    description: "High-retention TikToks, Reels, and Shorts. We script, shoot, and edit vertical content designed specifically for the algorithm.",
    icon: FiVideo,
  },
  {
    title: "Community Management",
    description: "Turning passive followers into loyal advocates through active engagement, authentic replies, and conversation building.",
    icon: FiMessageCircle,
  },
  {
    title: "Creator Partnerships",
    description: "We source, negotiate, and manage micro and macro-influencers that possess the exact demographic trust you need to tap into.",
    icon: FiUsers,
  },
  {
    title: "Brand Voice & Copywriting",
    description: "Thumb-stopping captions and thread hooks. We establish a distinct, unignorable personality for your organic profiles.",
    icon: FiEdit3,
  },
  {
    title: "Algorithmic Strategy",
    description: "We constantly reverse-engineer platform updates to ensure your organic content actually reaches the explore page or 'For You' feed.",
    icon: FiSmartphone,
  },
  {
    title: "Social Analytics & Listening",
    description: "Deep tracking of share velocity, saves, audience sentiment, and demographic shifts to double down on what genuinely works.",
    icon: FiTrendingUp,
  },
];

const processSteps = [
  {
    title: "Audience & Cultural Blueprint",
    text: "We map your exact target personas and align your brand with the micro-trends and communities they actively engage with.",
  },
  {
    title: "High-Volume Content Engine",
    text: "Producing a relentless stream of high-quality, platform-native assets—balancing education, entertainment, and conversion.",
  },
  {
    title: "Algorithmic Ignition",
    text: "Deploying content at peak engagement windows with aggressive early-action strategies to signal high value to platform algorithms.",
  },
  {
    title: "Community Cultivation",
    text: "Reacting to comments, sparking DMs, and fostering user-generated content to turn a sheer volume metric into a loyal community.",
  },
];

const featuredProjects = [
  {
    title: "Consumer Tech Launch",
    category: "TikTok & Reels Growth",
    image: "/images/project1.png", // Reuse existing provided paths
    summary:
      "Generated 12.4M organic views and 45k new followers in 30 days through a strategic short-form educational video sprint.",
  },
  {
    title: "B2B Executive Positioning",
    category: "LinkedIn Thought Leadership",
    image: "/images/zenfora-food.png",
    summary:
      "Established founder authority through daily textual and video insights, driving a 200% increase in inbound enterprise deals.",
  },
];

const socialFaqs = [
  {
    question: "Do you focus on specific social platforms?",
    answer: "We dominate the core digital platforms: Instagram, TikTok, LinkedIn, and YouTube Shorts. Our strategy dictates the platform; we place your brand exactly where your specific target audience's attention currently lives."
  },
  {
    question: "What is the 'Hyper-Reach Loop'?",
    answer: "It's our proprietary methodology for engineering virality. Instead of posting randomly, we test various hooks, analyze the algorithmic response, double down on the winning formats, and actively farm community engagement to artificially boost organic reach."
  },
  {
    question: "Do you create the video content?",
    answer: "Absolutely. Short-form vertical video is the current language of the internet. We script, shoot, and edit high-retention content specifically designed to appease the algorithms of TikTok and Instagram Reels."
  },
  {
    question: "How do you measure success on organic social media?",
    answer: "While we track reach and follower velocity, we are ultimately focused on conversion. We measure success by how well we turn passive scrollers into active community members, tracking link clicks, profile visits, and inbound inquiries."
  },
  {
    question: "Can you manage our community interactions?",
    answer: "Yes. A brand's voice lives in the comments section. We provide dedicated community management, actively responding to comments, sparking conversations, and fostering a fiercely loyal digital community around your brand."
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
        "text-[#0A2540]/80 hover:text-[#D946EF]"
      }`}
    >
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
        {children}
      </span>
      <span
        className={`absolute left-0 top-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0 text-[#D946EF] font-bold`}
      >
        {children}
      </span>
    </Link>
  );
};

export default function SocialMediaMarketingPage() {
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
    <div className="min-h-screen bg-[#F4F6F8] text-[#0A2540] font-sans selection:bg-[#D946EF] selection:text-white">
      <title>Premium Social Media Marketing | Setzet</title>
      <meta
        name="description"
        content="We engineer virality and build fiercely loyal communities. Platform-native content strategies designed to dominate the timeline."
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
              className="hidden rounded-full border border-[#0A2540]/10 bg-white/50 backdrop-blur-md px-6 py-2.5 text-[11px] font-bold transition-all duration-300 hover:bg-[#D946EF] hover:border-[#D946EF] hover:text-white md:inline-flex text-[#0A2540]"
              href="/#contact"
            >
              Start a Project
            </Link>
            <button
              className="inline-flex h-10 items-center justify-center rounded-full border border-[#0A2540]/20 px-4 text-[11px] font-semibold transition md:hidden text-[#0A2540] hover:border-[#D946EF]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="mr-2">{menuOpen ? "Close" : "Menu"}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-0 relative overflow-hidden">
        
        {/* =========================================
            HERO SECTION - THE VIRALITY FEED
            ========================================= */}
        <section className="relative min-h-[100vh] flex items-center pt-32 pb-20 px-6 sm:px-12">
          {/* Animated Background Ambience */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Fuchsia/Violet Social Gradients */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.5, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-[-5%] right-[0%] w-[45vw] h-[45vw] rounded-full bg-[#D946EF]/15 blur-[160px]" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              className="absolute bottom-[-10%] left-[-5%] w-[50vw] h-[50vw] rounded-full bg-[#8B5CF6]/15 blur-[150px]" 
            />
            {/* Minimal Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(10,37,64,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,37,64,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)]" />
          </div>

          <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-8 items-center relative z-10">
            
            {/* Left: Copy & Actions */}
            <div className="max-w-xl lg:pr-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0A2540]/10 bg-white/70 backdrop-blur-md px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#D946EF] shadow-sm"
              >
                <FiHeart className="text-sm fill-current" /> Organic Reach & Community
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight font-heading text-[#0A2540]"
              >
                Stop posting. <br />
                Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] to-[#8B5CF6]">trending.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-lg md:text-xl text-[#0A2540]/70 leading-relaxed font-light"
              >
                We engineer algorithmic attention. From short-form video hooks to community mastery, we transform silent brand accounts into absolute cultural forces.
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
                    Grow Your Audience <FiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                
                <div className="flex items-center gap-3 px-4 py-3 bg-white/50 backdrop-blur-sm border border-[#0A2540]/10 rounded-full shadow-sm">
                  <FiShare2 className="text-xl text-[#8B5CF6]" />
                  <div className="text-[10px] font-bold text-[#0A2540]/80 uppercase tracking-widest">
                    Virality as a Science
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Floating Social Feed Graphic  */}
            <div className="relative h-[600px] w-full hidden md:block perspective-[1400px]">
              
              {/* Back Layer: The Content Phone UI */}
              <motion.div 
                initial={{ opacity: 0, y: 30, rotateX: 15, rotateZ: -2, rotateY: -10 }}
                animate={{ opacity: 1, y: 0, rotateX: 15, rotateZ: -2, rotateY: -10 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-[5%] left-[10%] w-[320px] h-[520px] rounded-[40px] border-[10px] border-[#0A2540] bg-[#121212] overflow-hidden shadow-[0_30px_60px_rgba(10,37,64,0.2)] z-10"
              >
                 <div className="w-full h-full relative p-4 flex flex-col justify-between overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/20 to-[#D946EF]/20" />
                    {/* Fake short-form video overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                       <FiVideo className="text-7xl text-white" />
                    </div>
                    {/* Header bar */}
                    <div className="relative z-10 flex justify-center mt-2">
                       <div className="w-20 h-5 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center gap-2">
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                          <span className="text-[8px] font-bold text-white uppercase tracking-wider">LIVE</span>
                       </div>
                    </div>
                    {/* Bottom engagement area */}
                    <div className="relative z-10 grid grid-cols-[1fr_auto] items-end pb-2">
                       <div>
                          <div className="font-bold text-base text-white mb-1">@your.premium.brand</div>
                          <p className="text-xs text-white/80 line-clamp-2 pr-4">How we completely scaled our D2C brand using just three short form content tricks 📈🔥 #marketing #growth</p>
                          <div className="flex items-center gap-2 mt-3 text-[10px] bg-black/40 backdrop-blur w-fit px-3 py-1.5 rounded-full text-white">
                             <FiTrendingUp /> Original Audio - Viral Trends
                          </div>
                       </div>
                       <div className="flex flex-col gap-5 items-center mr-1">
                          <div className="flex flex-col items-center gap-1 group">
                             <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white text-xl transition-transform group-hover:scale-110">
                                <FiHeart className="fill-current text-[#EC4899]" />
                             </div>
                             <span className="text-[10px] font-bold text-white">24.5K</span>
                          </div>
                          <div className="flex flex-col items-center gap-1">
                             <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white text-xl">
                                <FiMessageCircle className="fill-current text-white/90" />
                             </div>
                             <span className="text-[10px] font-bold text-white">1,204</span>
                          </div>
                          <div className="flex flex-col items-center gap-1">
                             <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white text-xl">
                                <FiShare2 />
                             </div>
                             <span className="text-[10px] font-bold text-white">Share</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </motion.div>
              
              {/* Middle Layer: Interaction Alerts */}
              <motion.div 
                initial={{ opacity: 0, y: 30, rotateX: 5, rotateZ: 4, rotateY: -10 }}
                animate={{ opacity: 1, y: 0, rotateX: 5, rotateZ: 4, rotateY: -10 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="absolute top-[20%] right-[-5%] w-[240px] rounded-[24px] border border-white bg-white/95 backdrop-blur-xl shadow-[0_20px_40px_rgba(217,70,239,0.15)] p-4 flex flex-col gap-3 z-20"
              >
                  {[
                     { user: "jessica_m", action: "shared your video", time: "2m", color: "text-[#D946EF]", bg: "bg-[#D946EF]/10" },
                     { user: "alex.growth", action: "mentioned you", time: "5m", color: "text-[#8B5CF6]", bg: "bg-[#8B5CF6]/10" },
                     { user: "marketing_daily", action: "started following", time: "12m", color: "text-[#00B873]", bg: "bg-[#00B873]/10" },
                  ].map((notif, i) => (
                     <div key={i} className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full ${notif.bg} ${notif.color} flex items-center justify-center text-xs font-bold`}>
                           {notif.user.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-1">
                           <div className="text-[10px] font-bold text-[#0A2540]">{notif.user}</div>
                           <div className="text-[9px] text-[#0A2540]/60">{notif.action}</div>
                        </div>
                        <div className="text-[8px] font-bold text-gray-300">{notif.time}</div>
                     </div>
                  ))}
              </motion.div>

              {/* Front Top Layer: Profile Growth Chart */}
              <motion.div 
                initial={{ opacity: 0, y: 30, rotateX: 5, rotateZ: -2, rotateY: -5 }}
                animate={{ opacity: 1, y: 0, rotateX: 5, rotateZ: -2, rotateY: -5 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="absolute bottom-[5%] left-[45%] w-[320px] rounded-[32px] border border-white/50 bg-white shadow-[0_40px_80px_rgba(10,37,64,0.15)] p-6 z-30"
              >
                 <div className="flex justify-between items-center mb-6">
                    <div>
                       <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Weekly Reach</div>
                       <div className="text-3xl font-black font-heading text-[#0A2540]">3.2M</div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-[#D946EF] to-[#8B5CF6] rounded-full flex items-center justify-center shadow-lg transform -rotate-12">
                       <FiTrendingUp className="text-white text-2xl" />
                    </div>
                 </div>
                 
                 <div className="text-[10px] font-bold uppercase tracking-wider text-[#0A2540] mb-2">Audience Expansion Rate</div>
                 <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-6">
                    <motion.div 
                      initial={{ width: 0 }} animate={{ width: "85%" }} transition={{ duration: 2, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-[#D946EF] to-[#8B5CF6]"
                    />
                 </div>

                 <div className="flex items-center justify-between text-[10px] uppercase font-bold text-[#0A2540]/50 tracking-wider">
                    <span>Mentions</span>
                    <span className="text-[#8B5CF6]">+ 425%</span>
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
              Dominating Core Digital Platforms
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 text-lg md:text-xl font-bold font-heading text-[#0A2540]"><FaInstagram className="text-[#E1306C] text-2xl md:text-3xl" /> Instagram</div>
              <div className="flex items-center gap-2 text-lg md:text-xl font-bold font-heading text-[#0A2540]"><FaTiktok className="text-black text-2xl md:text-3xl" /> TikTok</div>
              <div className="flex items-center gap-2 text-lg md:text-xl font-bold font-heading text-[#0A2540]"><FaLinkedin className="text-[#0A66C2] text-2xl md:text-3xl" /> LinkedIn</div>
              <div className="flex items-center gap-2 text-lg md:text-xl font-bold font-heading text-[#0A2540]"><FaYoutube className="text-[#FF0000] text-2xl md:text-3xl" /> YouTube Shorts</div>
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
              <motion.div variants={reveal} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D946EF]/10 border border-[#D946EF]/20 text-[#D946EF] text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                <FiUsers className="w-3 h-3" /> Organic Domination
              </motion.div>
              <motion.h2 variants={reveal} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-[#0A2540] max-w-3xl">
                We design cultural capital for brands.
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  variants={reveal}
                  className="group relative rounded-[32px] border border-[#0A2540]/10 bg-white p-8 overflow-hidden transition-all duration-500 shadow-[0_8px_30px_rgba(10,37,64,0.03)] hover:shadow-[0_40px_60px_rgba(217,70,239,0.08)] hover:-translate-y-2 hover:border-[#D946EF]/30"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#D946EF] rounded-full blur-[100px] opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="absolute top-8 right-8 text-8xl font-black font-heading text-[#0A2540]/5 italic transform rotate-12 transition-transform duration-500 group-hover:scale-110">
                    {idx + 1}
                  </div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-[#F4F6F8] flex items-center justify-center text-[#D946EF] mb-8 transition-colors duration-500 group-hover:bg-[#D946EF] group-hover:text-white">
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#8B5CF6] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                  <FiHeart className="w-3 h-3" /> Tangible Outcomes
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#0A2540]">
                  Engagement that drives<br/>measurable bottom-line.
                </h2>
              </motion.div>
              <Link href="/work" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#0A2540] hover:text-[#D946EF] transition-colors">
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
                  className="group overflow-hidden rounded-[32px] bg-white border border-[#0A2540]/10 shadow-[0_10px_40px_rgba(10,37,64,0.03)] relative hover:shadow-[0_20px_60px_rgba(217,70,239,0.08)] transition-all duration-500"
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
                      <div className="inline-flex items-center gap-2 rounded-md bg-white/20 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-[#F3E8FF]">
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
                    <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-sm font-bold uppercase text-[#D946EF]">
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
            SECTION 5: THE PROCESS (THE HYPER-REACH LOOP)
            ========================================= */}
        <section className="px-6 sm:px-12 py-32 border-y border-[#0A2540]/5 bg-white relative overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-24 relative z-20">
              <span className="inline-block rounded-full bg-[#D946EF]/10 border border-[#D946EF]/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.35em] text-[#D946EF] mb-6 shadow-sm">
                The Hyper-Reach Loop
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight text-[#0A2540]">
                Predictable viral mechanics.
              </h2>
              <p className="mt-6 text-lg text-[#0A2540]/70 font-light max-w-2xl mx-auto">
                We do not post and pray. We utilize an infinite loop of testing, hook-optimization, community farming, and scaling the exact formats the algorithm demands.
              </p>
            </div>

            {/* Desktop Graphical Hyper-Reach Loop (Infinity sign / 8 shape graphic) */}
            <div className="hidden lg:flex flex-col items-center max-w-7xl mx-auto relative group py-8">
               {/* Background abstract infinity shape using borders */}
               <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <div className="w-[400px] h-[400px] rounded-full border-[20px] border-[#D946EF] blur-2xl -translate-x-[150px]" />
                  <div className="w-[400px] h-[400px] rounded-full border-[20px] border-[#8B5CF6] blur-2xl translate-x-[150px]" />
               </div>

               <div className="grid grid-cols-2 gap-16 w-full relative z-10 px-12">
                  {processSteps.map((step, index) => {
                     const isLeft = index % 2 === 0;
                     // Stagger vertical positioning to create an alternating wave flow
                     const translateY = index === 0 ? "translate-y-0" : index === 1 ? "translate-y-20" : index === 2 ? "translate-y-8" : "translate-y-28";
                     return (
                        <motion.div 
                           key={index}
                           initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ delay: index * 0.15 }}
                           className={`relative bg-[#F4F6F8] border border-[#0A2540]/5 shadow-sm p-10 rounded-[32px] hover:shadow-[0_20px_40px_rgba(217,70,239,0.06)] hover:border-[#D946EF]/20 transition-all duration-300 ${translateY}`}
                        >
                           <div className="absolute -top-6 -left-6 text-[100px] font-black font-heading text-[#0A2540]/5 italic leading-none select-none">0{index+1}</div>
                           <h3 className="text-2xl font-bold font-heading text-[#0A2540] mb-4 relative z-10">{step.title}</h3>
                           <p className="text-base text-[#0A2540]/70 leading-relaxed font-light relative z-10">{step.text}</p>
                           
                           {/* Decorative connector dots */}
                           <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-gradient-to-r from-[#D946EF] to-[#8B5CF6] opacity-20" />
                        </motion.div>
                     );
                  })}
               </div>
               
               {/* Center Node indicating continuous loop */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-dashed border-[#8B5CF6]/30 flex items-center justify-center -z-0"
               >
                  <div className="w-16 h-16 bg-white shadow-xl rounded-full flex items-center justify-center">
                     <FiTrendingUp className="text-2xl text-[#8B5CF6]" />
                  </div>
               </motion.div>
            </div>

            {/* Mobile Vertical Blocks */}
            <div className="lg:hidden space-y-6 max-w-xl mx-auto relative px-4">
               <div className="absolute left-10 top-10 bottom-10 w-1 bg-gradient-to-b from-[#D946EF] to-[#8B5CF6] opacity-20 rounded-full" />
               {processSteps.map((step, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative bg-[#F4F6F8] p-8 rounded-[24px] border border-[#0A2540]/5 ml-14">
                     <div className="absolute -left-16 top-6 w-10 h-10 bg-white rounded-full border-4 border-[#D946EF] flex items-center justify-center font-bold text-[#D946EF] text-sm">
                        0{index+1}
                     </div>
                     <h3 className="text-xl font-bold font-heading text-[#0A2540] mb-2">{step.title}</h3>
                     <p className="text-sm text-[#0A2540]/70 font-light">{step.text}</p>
                  </motion.div>
               ))}
            </div>

          </div>
        </section>


        {/* =========================================
            FAQ SECTION
            ========================================= */}
        <FAQSection faqs={socialFaqs} />

        {/* =========================================
            SECTION 6: FINAL CTA 
            ========================================= */}
        <section className="px-6 sm:px-12 pb-24 relative bg-[#F4F6F8] py-16">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
            className="mx-auto max-w-7xl relative overflow-hidden rounded-[40px] bg-[#0A2540] px-10 py-24 text-center shadow-[0_20px_60px_rgba(10,37,64,0.3)]"
          >
            {/* Background dynamic social lighting */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(217,70,239,0.35)_0%,_transparent_70%)] blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(139,92,246,0.35)_0%,_transparent_70%)] blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
            
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

            <div className="relative z-10 flex flex-col items-center">
              <span className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.35em] text-[#F3E8FF] mb-8 backdrop-blur-md">
                Command The Feed
              </span>
              <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight font-heading max-w-4xl mx-auto leading-[1.05] text-white">
                Ready to become impossible to ignore?
              </h2>
              <p className="mt-8 max-w-2xl text-lg text-white/70 mx-auto font-light">
                Secure your social momentum. We'll audit your current organic approach and deliver a complete blueprint for generating cult-like digital engagement.
              </p>
              
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
                <Link
                  href="/#contact"
                  className="group rounded-full bg-[#D946EF] px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all shadow-[0_10px_30px_rgba(217,70,239,0.4)] hover:scale-105 hover:bg-[#c026d3] flex items-center gap-3"
                >
                  Initiate Social Strategy <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/work"
                  className="rounded-full border border-white/20 px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-white/10 backdrop-blur-sm"
                >
                  View Viral Case Studies
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
