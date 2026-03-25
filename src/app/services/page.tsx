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
    title: "Development",
    description: "Scalable, High-Performance Architectures",
    detail: "We engineer robust web, mobile, and custom software solutions designed for scale. From pixel-perfect UI/UX to secure backend APIs and e-commerce platforms, we build digital products that perform flawlessly.",
    meta: ["Web & Mobile Apps", "Custom Software", "API & E-commerce"],
    outcomes: [
      "Lightning-fast digital experiences",
      "Scalable and secure architectures",
      "Seamless cross-platform functionality",
    ],
    deliverables: [
      "Full-stack web & mobile apps",
      "Custom API development",
      "E-commerce platforms",
      "UI/UX systems",
    ],
  },
  {
    title: "ERP Solutions",
    description: "Streamlined Enterprise Operations",
    detail: "We specialize in developing, implementing, and integrating robust Enterprise Resource Planning (ERP) systems. We automate business processes and connect third-party tools to give you total control over your operations.",
    meta: ["Custom ERP Development", "Implementation", "Process Automation"],
    outcomes: [
      "Centralized operational data",
      "Automated repetitive business processes",
      "Enhanced team productivity and reporting",
    ],
    deliverables: [
      "Custom ERP development",
      "System integration & migration",
      "Strategic enterprise consulting",
      "Workflow automation setups",
    ],
  },
  {
    title: "Digital Marketing",
    description: "Focused Acquisition and Conversion Systems",
    detail: "We structure digital marketing into five clear growth pillars: SEO and content, performance marketing, social media, conversion optimization, and marketing automation. That gives you dedicated services that are easier to scale, measure, and turn into focused landing pages.",
    meta: ["SEO & Content", "Performance Marketing", "Automation"],
    outcomes: [
      "Clearer service positioning across the funnel",
      "Better conversion from organic, paid, and social traffic",
      "A scalable lead generation engine with less overlap",
    ],
    deliverables: [
      "SEO and content growth programs",
      "Paid media campaign systems",
      "Social media growth frameworks",
      "CRO and marketing automation workflows",
    ],
  },
  {
    title: "SaaS",
    description: "Next-Generation Software Platforms",
    detail: "We build, scale, and maintain sophisticated SaaS applications. From rapid MVP development to scaling architecture for growing user bases, we deliver multi-tenant solutions that retain users.",
    meta: ["SaaS Product Dev", "MVP Prototyping", "Product Scaling"],
    outcomes: [
      "Accelerated time-to-market for MVPs",
      "High user retention and engagement",
      "Resilient infrastructure for rapid growth",
    ],
    deliverables: [
      "Multi-tenant SaaS architectures",
      "Rapid MVP prototypes",
      "SaaS UI/UX interfaces",
      "Ongoing maintenance & scaling",
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
      className="group relative border-t border-[#0A2540]/10 py-12 md:py-24 transition-all hover:bg-white hover:shadow-[0_8px_30px_rgba(10,37,64,0.04)]"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-[1fr_2fr_1fr] gap-8 items-start">
        {/* Column 1: Title */}
        <div>
           <span className="font-mono text-xs font-bold text-[#007BFF] mb-4 bg-[#007BFF]/10 inline-block px-2 py-1 rounded-md tracking-wider">0{index + 1}</span>
           <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#0A2540] transition-colors group-hover:text-[#007BFF]">{item.title}</h2>
        </div>

        {/* Column 2: Description + Detail */}
        <div className="md:pl-10 relative">
           <h4 className="text-xl md:text-2xl text-[#0A2540]/50 font-medium mb-6 transition-colors group-hover:text-[#0A2540]">
             {item.description}
           </h4>
           <p className="text-lg text-[#0A2540]/70 leading-relaxed max-w-xl font-medium">
             {item.detail}
           </p>
           <div className="mt-8 grid gap-8 md:grid-cols-2">
             <div>
               <p className="mb-3 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#0A2540]/40">
                 Outcome Highlights
               </p>
               <ul className="space-y-2 text-sm text-[#0A2540]/70 font-medium">
                 {item.outcomes.map((outcome, i) => (
                   <li key={i} className="leading-relaxed flex gap-2">
                     <span className="text-[#007BFF]">✓</span> {outcome}
                   </li>
                 ))}
               </ul>
             </div>
             <div>
               <p className="mb-3 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#0A2540]/40">
                 Key Deliverables
               </p>
               <ul className="space-y-2 text-sm text-[#0A2540]/70 font-medium">
                 {item.deliverables.map((deliverable, i) => (
                   <li key={i} className="leading-relaxed flex gap-2">
                     <span className="text-[#007BFF]">✓</span> {deliverable}
                   </li>
                 ))}
               </ul>
             </div>
           </div>
        </div>

        {/* Column 3: Tags */}
        <div className="flex flex-col items-start gap-3 md:items-end">
           {item.meta.map((tag: string, i: number) => (
             <span key={i} className="text-xs font-mono font-bold uppercase tracking-widest text-[#0A2540]/50 border border-[#0A2540]/10 px-3 py-1 rounded-full group-hover:border-[#007BFF]/30 group-hover:bg-[#007BFF]/5 transition-colors">
               {tag}
             </span>
           ))}
           <div className={`mt-4 transition-transform duration-500 ${hovered ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}>
              <span className="text-[#007BFF] text-2xl font-bold">&rarr;</span>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProcessStep = ({ number, title, text, index }: { number: string, title: string, text: string, index: number }) => {
    return (
        <div className="static md:sticky mb-10 md:mb-0 md:min-h-[40vh] flex flex-col justify-start w-full z-10" style={{ top: `calc(130px + ${index * 24}px)` }}>
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-10%" }}
               transition={{ duration: 0.5 }}
               className="relative bg-white border border-[#0A2540]/10 hover:border-[#007BFF]/30 p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgba(10,37,64,0.06)] hover:shadow-[0_20px_40px_rgba(10,37,64,0.12)] transition-all duration-500 overflow-hidden group w-full origin-top"
            >
                {/* Decorative Gradient Blob */}
                <div className="absolute -right-20 -top-20 w-60 h-60 bg-[#007BFF]/5 rounded-full blur-[80px] group-hover:bg-[#007BFF]/15 transition-colors duration-500 pointer-events-none" />
                
                <span className="font-mono text-xs font-bold text-[#007BFF] mb-4 inline-block bg-[#007BFF]/10 px-3 py-1.5 rounded-md tracking-widest">{number}</span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold text-[#0A2540] mb-4 md:mb-6">{title}</h3>
                <p className="text-base md:text-lg text-[#0A2540]/70 font-medium leading-relaxed relative z-10">{text}</p>
            </motion.div>
        </div>
    );
}

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className="bg-[#F4F6F8] text-[#0A2540] selection:bg-[#007BFF]/20 selection:text-[#0A2540] font-sans min-h-screen">
      <title>Web Development & SaaS Services | Setzet Agency</title>
      <meta
        name="description"
        content="Setzet is a web development and digital marketing agency delivering SaaS platforms, ERP solutions, and high-performance websites with conversion-focused strategy."
      />
      <Navbar forceDarkAtTop={true} />
      


      {/* 1. HERO SECTION - Conversion & Sales Focused */}
      <section className="relative min-h-[95vh] flex flex-col justify-center px-6 pt-32 pb-20 overflow-hidden">
         <div className="absolute inset-0 z-0 bg-[#F4F6F8]">
             {/* Dynamic background elements */}
             <div className="absolute -top-20 right-0 w-[60vw] h-[60vh] bg-[#007BFF]/10 rounded-full blur-[140px]" />
             <div className="absolute bottom-10 -left-20 w-[50vw] h-[50vh] bg-[#0A2540]/5 rounded-full blur-[100px]" />
         </div>

         <div className="container mx-auto relative z-10">
             <div className="max-w-5xl">
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6, ease: "easeOut" }}
                   className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#0A2540]/10 bg-white px-5 py-2.5 shadow-sm"
                 >
                   <span className="relative flex h-2.5 w-2.5">
                     <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#007BFF] opacity-75"></span>
                     <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#007BFF]"></span>
                   </span>
                   <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A2540]">Revenue-Driven Web Design</span>
                 </motion.div>

                 <motion.h1 
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                   className="text-[clamp(3rem,6.5vw,7.5rem)] font-heading font-extrabold leading-[0.95] tracking-tight mb-10 text-[#0A2540]"
                 >
                    A beautiful website is useless if <br className="hidden lg:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E1521] via-[#0A2540] to-[#007BFF] pr-4 italic">nobody buys.</span>
                 </motion.h1>
             </div>

             <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 lg:gap-24 mt-16 md:mt-24 items-end">
                 <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                 >
                     <p className="text-xl md:text-2xl text-[#0A2540]/70 font-medium leading-relaxed border-l-4 border-[#007BFF] pl-6 lg:pl-8 py-2">
                        We don't build generic digital brochures. We engineer high-converting digital assets that build authority, capture attention, and turn cold traffic into paying customers. Stop losing leads to slow, unoptimized websites.
                     </p>
                 </motion.div>
                 
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                 >
                    <div className="flex flex-col gap-6 p-8 lg:p-10 rounded-3xl bg-white border border-[#0A2540]/10 shadow-[0_8px_40px_rgba(10,37,64,0.06)] backdrop-blur-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#007BFF]/5 rounded-bl-[100px] pointer-events-none" />
                        <div>
                            <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A2540]/40 mb-2">The Objective</div>
                            <div className="text-4xl lg:text-5xl font-extrabold text-[#007BFF] font-heading mb-1">Conversion First.</div>
                        </div>
                        <div className="h-px w-full bg-[#0A2540]/10 my-2" />
                        <div>
                            <p className="text-base text-[#0A2540]/80 font-medium leading-relaxed">
                              Our systems are strategically structured to guide users aggressively toward your primary CTA—without ever sacrificing premium luxury aesthetics.
                            </p>
                        </div>
                    </div>
                 </motion.div>
             </div>
         </div>
       </section>

      {/* 2. SERVICES LIST - Clean Grid Layout */}
      <section className="py-20 bg-white border-y border-[#0A2540]/5 relative z-10">
         {services.map((service, index) => (
            <ServiceItem key={index} item={service} index={index} />
         ))}
         <div className="border-t border-[#0A2540]/10" />
      </section>

      {/* 3. APPROACH / PROCESS */}
      <section className="py-20 md:py-32 px-6 bg-[#F4F6F8]">
         <div className="container mx-auto grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-start">
             <div className="static md:sticky md:top-32 h-fit z-10">
                 <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold mb-6 md:mb-8 text-[#0A2540] tracking-tight">
                    The Growth <br className="hidden lg:block"/> Sequence
                 </h2>
                 <p className="text-base md:text-lg text-[#0A2540]/60 max-w-sm font-medium">
                    We don't just build and disappear. This is a battle-tested system designed entirely around scaling your revenue.
                 </p>
             </div>
             
             <div className="relative w-full">
                 {[
                    { num: "01", title: "Conversion Audit", text: "We strip away the fluff. We analyze exactly where your current site is bleeding money and dropping leads." },
                    { num: "02", title: "Funnel Architecture", text: "Structure dictates sales. We map out the exact psychological journey needed to turn a cold click into a closed deal." },
                    { num: "03", title: "Premium Visuals", text: "We wrap our logic in an impossibly sharp, high-authority UI that makes your competitors look painfully outdated." },
                    { num: "04", title: "Performance Build", text: "Development sprints focused on zero-latency. Because every second of loading time costs you conversions." },
                    { num: "05", title: "Launch & Scale", text: "We push live, monitor the analytics, and optimize the funnel to ensure your ROI compounds over time." }
                 ].map((step, i) => (
                     <ProcessStep key={i} index={i} number={step.num} title={step.title} text={step.text} />
                 ))}
             </div>
         </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-white text-[#0A2540] relative overflow-hidden border-t border-[#0A2540]/5">
          <div className="relative z-10 max-w-4xl">
              <h2 className="text-[clamp(3rem,8vw,8rem)] font-heading font-extrabold leading-none tracking-tighter mb-10">
                 Scale Your Revenue.
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <Link 
                    href="/#contact"
                    className="px-10 py-4 bg-[#0A2540] text-white rounded-full font-bold uppercase tracking-widest hover:scale-105 hover:bg-[#007BFF] transition-all shadow-[0_8px_30px_rgba(10,37,64,0.12)]"
                 >
                    Start Project
                 </Link>
                  <Link 
                    href="mailto:info@setzet.com"
                    className="px-10 py-4 border border-[#0A2540]/20 rounded-full font-bold uppercase tracking-widest hover:bg-[#F4F6F8] hover:border-[#007BFF]/30 transition-colors"
                  >
                    info@setzet.com
                  </Link>
              </div>
          </div>
          
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#0A2540_1px,transparent_1px),linear-gradient(to_bottom,#0A2540_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </section>

      <Footer />
    </div>
  );
}
