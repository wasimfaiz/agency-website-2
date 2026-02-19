"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

// --- ANIMATION VARIANTS ---
const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1 } 
  }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// --- DATA ---
const services = [
  {
    title: "Strategy",
    description: "The Blueprint",
    detail: "We don't start with design. We start with truth. Market analysis, user psychology, and brand positioning that defines your digital existence.",
    meta: ["Brand Strategy", "User Research", "Content Architecture"],
    outcomes: [
      "Sharper positioning and message clarity across channels",
      "Higher-quality inbound leads from aligned audiences",
      "Faster decision-making with a clear digital roadmap",
    ],
    deliverables: [
      "Brand and market audit",
      "Audience and competitor analysis",
      "Positioning statement and messaging pillars",
      "Content and page architecture plan",
    ],
  },
  {
    title: "Design",
    description: "The Interface",
    detail: "Visuals that communicate before text is read. We craft systems that are intuitive, accessible, and impossibly sharp.",
    meta: ["UI/UX Design", "Design Systems", "Art Direction"],
    outcomes: [
      "Improved conversion flow and reduced user friction",
      "Stronger perceived brand value and trust",
      "Consistent experience across all key screens",
    ],
    deliverables: [
      "Wireframes and interaction flows",
      "High-fidelity UI design",
      "Design system foundations",
      "Responsive layout specifications",
    ],
  },
  {
    title: "Development",
    description: "The Engine",
    detail: "Code that feels weightless. Scalable architectures, headless CMS integrations, and performance-first engineering.",
    meta: ["Full Stack", "WebGL / 3D", "Technical SEO"],
    outcomes: [
      "Faster load times and stronger Core Web Vitals",
      "Reliable, scalable platform for growth",
      "Higher discoverability through technical SEO readiness",
    ],
    deliverables: [
      "Production-ready frontend and backend setup",
      "CMS and content workflows",
      "Performance optimization pass",
      "QA and cross-device testing",
    ],
  },
  {
    title: "Motion",
    description: "The Soul",
    detail: "Movement that guides, informs, and delights. From micro-interactions to full-screen cinematic storytelling.",
    meta: ["Interaction Design", "Lottie / Rive", "GSAP Animation"],
    outcomes: [
      "Better engagement and session depth",
      "Clearer user guidance through interaction cues",
      "A more memorable and premium brand experience",
    ],
    deliverables: [
      "Motion direction and interaction principles",
      "Micro-interactions for key touchpoints",
      "Scroll and transition choreography",
      "Animation performance tuning",
    ],
  }
];

// --- COMPONENTS ---

type Service = {
  title: string;
  description: string;
  detail: string;
  meta: string[];
  outcomes: string[];
  deliverables: string[];
};

const ServiceItem = ({ item, index }: { item: Service; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={reveal}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative border-t border-white/10 py-12 md:py-24 transition-colors hover:bg-white/5"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-[1fr_2fr_1fr] gap-8 items-start">
        {/* Column 1: Title */}
        <div>
           <span className="font-mono text-xs text-white/40 mb-2 block">0{index + 1}</span>
           <h3 className="text-4xl md:text-5xl font-heading font-medium text-white">{item.title}</h3>
        </div>

        {/* Column 2: Description + Detail */}
        <div className="md:pl-10 relative">
           <h4 className="text-xl md:text-2xl text-white/50 font-light mb-6 transition-colors group-hover:text-white">
             {item.description}
           </h4>
           <p className="text-lg text-white/70 leading-relaxed max-w-xl">
             {item.detail}
           </p>
           <div className="mt-8 grid gap-8 md:grid-cols-2">
             <div>
               <p className="mb-3 text-[11px] font-mono uppercase tracking-[0.18em] text-white/40">
                 Outcome Highlights
               </p>
               <ul className="space-y-2 text-sm text-white/65">
                 {item.outcomes.map((outcome, i) => (
                   <li key={i} className="leading-relaxed">
                     {outcome}
                   </li>
                 ))}
               </ul>
             </div>
             <div>
               <p className="mb-3 text-[11px] font-mono uppercase tracking-[0.18em] text-white/40">
                 Key Deliverables
               </p>
               <ul className="space-y-2 text-sm text-white/65">
                 {item.deliverables.map((deliverable, i) => (
                   <li key={i} className="leading-relaxed">
                     {deliverable}
                   </li>
                 ))}
               </ul>
             </div>
           </div>
        </div>

        {/* Column 3: Tags */}
        <div className="flex flex-col items-start gap-3 md:items-end">
           {item.meta.map((tag: string, i: number) => (
             <span key={i} className="text-xs font-mono uppercase tracking-widest text-white/30 border border-white/10 px-3 py-1 rounded-full">
               {tag}
             </span>
           ))}
           <div className={`mt-4 transition-transform duration-500 ${hovered ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}>
              <span className="text-white text-2xl">→</span>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProcessStep = ({ number, title, text, index }: { number: string, title: string, text: string, index: number }) => {
    return (
        <div className="sticky mb-10 min-h-[40vh] flex flex-col justify-start pt-10" style={{ top: `calc(350px + ${index * 20}px)` }}>
            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className="relative bg-[#111] border border-white/10 p-10 rounded-3xl shadow-2xl overflow-hidden group"
            >
                {/* Decorative Gradient Blob */}
                <div className="absolute -right-20 -top-20 w-60 h-60 bg-white/5 rounded-full blur-[80px] group-hover:bg-white/10 transition-colors duration-500" />
                
                <span className="font-mono text-xs text-white/40 mb-4 block tracking-widest">{number}</span>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">{title}</h3>
                <p className="text-lg text-white/60 leading-relaxed">{text}</p>
            </motion.div>
        </div>
    );
}

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className="bg-[#080808] text-[#e1e1e1] selection:bg-white/20 font-sans min-h-screen">
      <Navbar />
      


      {/* 1. HERO SECTION - Minimal & Clean */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-32">
         <div className="container mx-auto">
             <motion.h1 
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
               className="text-[clamp(3.5rem,8vw,9.5rem)] font-heading font-medium leading-[0.95] tracking-tighter mb-10"
             >
                Digital Systems <br/> 
                <span className="text-white/30">For The Future.</span>
             </motion.h1>

             <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="max-w-xl md:ml-auto md:mr-20"
             >
                 <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed">
                    We bridge the gap between aesthetic and function. A full-service studio engineering brands that command attention.
                 </p>
             </motion.div>
         </div>
      </section>

      {/* 2. SERVICES LIST - Clean Grid Layout */}
      <section className="py-20">
         {services.map((service, index) => (
            <ServiceItem key={index} item={service} index={index} />
         ))}
         <div className="border-t border-white/10" />
      </section>

      {/* 3. APPROACH / PROCESS */}
      <section className="py-32 px-6 bg-[#0c0c0c]">
         <div className="container mx-auto grid md:grid-cols-2 gap-20">
             <div className="sticky top-32 h-fit bg-[#0c0c0c] z-10">
                 <h2 className="text-5xl md:text-7xl font-heading font-medium mb-8">
                    How We <br/> Work
                 </h2>
                 <p className="text-lg text-white/50 max-w-sm">
                    Refined over years of shipping products. A linear process for non-linear impact.
                 </p>
                 <Link href="/#contact" className="mt-10 inline-block text-white border-b border-white pb-1 hover:opacity-50 transition-opacity">
                    Start a Conversation
                 </Link>
             </div>
             
             <div>
                 {[
                    { num: "01", title: "Discovery & Audit", text: "We strip away the noise. We analyze your current state, your competitors, and your goals to find the path of least resistance." },
                    { num: "02", title: "Architecture", text: "Structure precedes design. We map out user flows, content hierarchies, and technical requirements." },
                    { num: "03", title: "Visual System", text: "We create a design language unique to you. Typography, color, and motion that speaks your brand's truth." },
                    { num: "04", title: "Production", text: "Development sprints. Pixel-perfect implementation. Testing across devices. We build for the real world." },
                    { num: "05", title: "Launch & Scale", text: "Deployment is just a milestone. We optimize, iterate, and help you grow." }
                 ].map((step, i) => (
                     <ProcessStep key={i} index={i} number={step.num} title={step.title} text={step.text} />
                 ))}
             </div>
         </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-white text-black relative overflow-hidden">
          <div className="relative z-10 max-w-4xl">
              <h2 className="text-[clamp(3rem,8vw,8rem)] font-heading font-bold leading-none tracking-tighter mb-10">
                 Let's Build It.
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <Link 
                    href="/#contact"
                    className="px-10 py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform"
                 >
                    Start Project
                 </Link>
                 <Link 
                    href="mailto:hello@setzet.studio"
                    className="px-10 py-4 border border-black/20 rounded-full font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
                 >
                    hello@setzet.studio
                 </Link>
              </div>
          </div>
          
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </section>

      <Footer />
    </div>
  );
}
