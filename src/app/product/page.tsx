"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import Image from "next/image";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

// ----------------------------------------------------------------------
// 0. SHARED COMPONENTS & EFFECTS
// ----------------------------------------------------------------------

function GrainTracker() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03] mix-blend-difference">
      <svg className="absolute h-full w-full">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === "a" || target.tagName.toLowerCase() === "button" || target.closest("a") || target.closest("button")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference rounded-full bg-white transition-transform duration-100 ease-out"
      animate={{
        x: mousePosition.x - (isHovering ? 40 : 10),
        y: mousePosition.y - (isHovering ? 40 : 10),
        width: isHovering ? 80 : 20,
        height: isHovering ? 80 : 20,
      }}
    />
  );
}


// ----------------------------------------------------------------------
// 1. HERO SECTION
// ----------------------------------------------------------------------

function HeroSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 800]);

  return (
    <section className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden bg-[#FCFCFC] perspective-1000">
      {/* Animated Radial Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="h-[80vw] w-[80vw] rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.08)_0%,transparent_70%)] blur-[80px]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center mt-[-10vh] sm:mt-[-15vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-[clamp(3.5rem,8vw,8rem)] font-extrabold leading-[1.05] tracking-tighter text-black">
            Your Business. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-black/40">
              Systemized.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-2xl text-lg font-medium text-black/80 md:text-xl"
        >
          A powerful CRM designed to automate workflows, manage clients, and scale operations effortlessly.
        </motion.p>
      </div>

      {/* Floating CRM Dashboard Mockup */}
      <motion.div
        style={{ y }}
        initial={{ opacity: 0, scale: 0.9, rotateX: 30 }}
        animate={{ opacity: 1, scale: 1, rotateX: 10 }}
        transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -bottom-[20vh] z-20 w-[90vw] max-w-5xl overflow-hidden rounded-t-[32px] border border-black/10 bg-white shadow-[0_-20px_80px_rgba(0,0,0,0.05)] transform-gpu"
      >
        <motion.div 
           animate={{ y: [-10, 10, -10] }}
           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
           className="h-[50vh] w-full p-2"
        >
           {/* Realistic Dashboard UI */}
           <div className="h-12 w-full border-b border-black/5 flex items-center justify-between px-4 bg-[#fcfcfc] rounded-t-2xl">
              <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-[#ff5f56]"/>
                 <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"/>
                 <div className="w-3 h-3 rounded-full bg-[#27c93f]"/>
              </div>
              <div className="flex items-center gap-3">
                 <div className="h-5 w-48 rounded-md bg-black/5 border border-black/5 flex items-center px-2">
                    <div className="w-2 h-2 rounded-full bg-black/20 mr-2" />
                    <div className="h-1.5 w-16 bg-black/20 rounded-full" />
                 </div>
                 <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
              </div>
           </div>
           <div className="flex h-[calc(100%-3rem)] bg-[#f8f9fa] overflow-hidden rounded-b-2xl">
              {/* Sidebar */}
              <div className="w-48 border-r border-black/5 bg-white p-4 flex flex-col gap-3">
                 <div className="h-6 w-24 rounded font-bold text-xs flex items-center mb-2">Setzet CRM</div>
                 
                 <div className="flex items-center gap-2 px-2 py-1.5 bg-black/5 rounded-md">
                   <div className="w-3 h-3 border border-black/40 rounded-sm" />
                   <div className="text-[10px] font-semibold text-black/80">Dashboard</div>
                 </div>
                 <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-black/5 rounded-md transition-colors">
                   <div className="w-3 h-3 border border-black/30 rounded-sm" />
                   <div className="text-[10px] font-semibold text-black/50">Pipeline</div>
                 </div>
                 <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-black/5 rounded-md transition-colors">
                   <div className="w-3 h-3 border border-black/30 rounded-sm" />
                   <div className="text-[10px] font-semibold text-black/50">Contacts</div>
                 </div>
                 <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-black/5 rounded-md transition-colors">
                   <div className="w-3 h-3 border border-black/30 rounded-sm" />
                   <div className="text-[10px] font-semibold text-black/50">Campaigns</div>
                 </div>
                 <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-black/5 rounded-md transition-colors">
                   <div className="w-3 h-3 border border-black/30 rounded-sm" />
                   <div className="text-[10px] font-semibold text-black/50">Reports</div>
                 </div>
              </div>
              
              {/* Main Content */}
              <div className="flex-1 flex flex-col gap-4 p-5 overflow-hidden">
                 {/* Top Stats */}
                 <div className="flex gap-4">
                    <div className="flex-1 h-20 rounded-xl border border-black/10 bg-white shadow-sm flex flex-col justify-center px-4">
                       <div className="text-[9px] font-semibold text-black/40 uppercase mb-1">Total Revenue</div>
                       <div className="flex items-end justify-between">
                         <div className="text-xl font-bold text-black">$84,590.00</div>
                         <div className="text-[10px] font-bold text-green-500 mb-1">+12.5%</div>
                       </div>
                    </div>
                    <div className="flex-1 h-20 rounded-xl border border-black/10 bg-white shadow-sm flex flex-col justify-center px-4">
                       <div className="text-[9px] font-semibold text-black/40 uppercase mb-1">Active Deals</div>
                       <div className="flex items-end justify-between">
                         <div className="text-xl font-bold text-black">124</div>
                         <div className="text-[10px] font-bold text-green-500 mb-1">+4.2%</div>
                       </div>
                    </div>
                    <div className="flex-1 h-20 rounded-xl border border-black/10 bg-white shadow-sm flex flex-col justify-center px-4">
                       <div className="text-[9px] font-semibold text-black/40 uppercase mb-1">Conversion Rate</div>
                       <div className="flex items-end justify-between">
                         <div className="text-xl font-bold text-black">24.8%</div>
                         <div className="text-[10px] font-bold text-green-500 mb-1">+2.1%</div>
                       </div>
                    </div>
                 </div>
                 
                 {/* Main Area */}
                 <div className="flex flex-1 gap-4 overflow-hidden">
                    {/* Chart Area */}
                    <div className="flex-[2] rounded-xl border border-black/10 bg-white shadow-sm p-4 flex flex-col">
                       <div className="flex justify-between items-center mb-4">
                         <div className="text-[11px] font-bold text-black">Revenue Overview</div>
                         <div className="text-[9px] px-2 py-1 rounded bg-black/5 font-semibold text-black/60">This Year</div>
                       </div>
                       <div className="flex-1 relative border-b border-l border-black/10 flex items-end gap-2 pt-4 px-2">
                          {/* Bars */}
                          {[40, 60, 45, 80, 70, 90, 50, 75, 65, 85].map((height, i) => (
                            <div key={i} className="w-full relative group h-full flex items-end">
                               <motion.div 
                                 initial={{ height: 0 }}
                                 animate={{ height: `${height}%` }}
                                 transition={{ duration: 1, delay: i * 0.05 + 1.2, ease: "easeOut" }}
                                 className="w-full bg-black/80 rounded-t-[2px] hover:bg-black transition-colors"
                               />
                            </div>
                          ))}
                       </div>
                    </div>
                    
                    {/* Recent Activities */}
                    <div className="flex-1 rounded-xl border border-black/10 bg-white shadow-sm p-4 flex flex-col">
                       <div className="text-[11px] font-bold text-black mb-3">Recent Closed Deals</div>
                       <div className="flex flex-col gap-3 flex-1 overflow-hidden">
                          {[
                            { name: "Acme Corp", amount: "$12,400", time: "2h ago" },
                            { name: "Global Tech", amount: "$8,500", time: "4h ago" },
                            { name: "Stark Ind", amount: "$24,000", time: "1d ago" },
                            { name: "Wayne Ent", amount: "$15,200", time: "2d ago" },
                          ].map((deal, i) => (
                            <motion.div 
                               initial={{ opacity: 0, x: 20 }}
                               animate={{ opacity: 1, x: 0 }}
                               transition={{ duration: 0.5, delay: i * 0.1 + 1.5 }}
                               key={i} 
                               className="flex items-center justify-between p-2 rounded-lg hover:bg-black/5 transition-colors border border-transparent hover:border-black/5"
                            >
                               <div className="flex items-center gap-2">
                                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-black/10 to-black/5 flex items-center justify-center text-[8px] font-bold text-black/60">
                                    {deal.name.charAt(0)}
                                  </div>
                                  <div>
                                     <div className="text-[10px] font-bold text-black">{deal.name}</div>
                                     <div className="text-[8px] font-semibold text-black/40">{deal.time}</div>
                                  </div>
                               </div>
                               <div className="text-[10px] font-bold text-green-600">+{deal.amount}</div>
                            </motion.div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 2. PROBLEM -> SOLUTION NARRATIVE
// ----------------------------------------------------------------------

function NarrativeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Apply a butter-smooth spring to eliminate trackpad/mousewheel steps
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Timing:
  // p1: 0.00 - 0.25
  // p2: 0.20 - 0.45
  // p3: 0.40 - 0.65
  // p4: 0.60 - 0.85
  // sol: 0.80 - 1.00

  // P1
  const p1Op = useTransform(smoothProgress, [0, 0.05, 0.18, 0.25], [0, 1, 1, 0]);
  const p1Y  = useTransform(smoothProgress, [0, 0.05, 0.18, 0.25], [80, 0, 0, -80]);
  const p1S  = useTransform(smoothProgress, [0, 0.05, 0.18, 0.25], [0.9, 1, 1, 1.1]);

  // P2
  const p2Op = useTransform(smoothProgress, [0.2, 0.25, 0.38, 0.45], [0, 1, 1, 0]);
  const p2Y  = useTransform(smoothProgress, [0.2, 0.25, 0.38, 0.45], [80, 0, 0, -80]);
  const p2S  = useTransform(smoothProgress, [0.2, 0.25, 0.38, 0.45], [0.9, 1, 1, 1.1]);

  // P3
  const p3Op = useTransform(smoothProgress, [0.4, 0.45, 0.58, 0.65], [0, 1, 1, 0]);
  const p3Y  = useTransform(smoothProgress, [0.4, 0.45, 0.58, 0.65], [80, 0, 0, -80]);
  const p3S  = useTransform(smoothProgress, [0.4, 0.45, 0.58, 0.65], [0.9, 1, 1, 1.1]);

  // P4
  const p4Op = useTransform(smoothProgress, [0.6, 0.65, 0.78, 0.85], [0, 1, 1, 0]);
  const p4Y  = useTransform(smoothProgress, [0.6, 0.65, 0.78, 0.85], [80, 0, 0, -80]);
  const p4S  = useTransform(smoothProgress, [0.6, 0.65, 0.78, 0.85], [0.9, 1, 1, 1.1]);

  // Solution
  const solOp = useTransform(smoothProgress, [0.8, 0.85, 1], [0, 1, 1]);
  const solY  = useTransform(smoothProgress, [0.8, 0.85, 1], [80, 0, 0]);
  const solS  = useTransform(smoothProgress, [0.8, 0.9, 1], [0.8, 1, 1]);
  const solB  = useTransform(smoothProgress, [0.8, 0.85], ["blur(30px)", "blur(0px)"]);

  // Global background shift to make it feel like an evolution
  const bgOpacity = useTransform(smoothProgress, [0, 0.5, 0.9], [0, 0, 1]);

  return (
    <section ref={containerRef} className="relative h-[500vh] w-full bg-[#FCFCFC] text-black">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        
        {/* Progress indicator */}
        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-20">
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40 rotate-180" style={{ writingMode: 'vertical-rl' }}>The Evolution</div>
          <div className="h-40 w-[2px] bg-black/10 relative overflow-hidden rounded-full">
             <motion.div style={{ scaleY: smoothProgress, originY: 0 }} className="absolute top-0 left-0 w-full h-full bg-black shadow-[0_0_10px_black]" />
          </div>
        </div>

        {/* Dynamic Background */}
        <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[radial-gradient(circle,rgba(0,0,0,0.05)_0%,transparent_60%)] blur-[80px]" />
        </motion.div>

        <div className="relative w-full max-w-5xl px-4 md:px-12 flex justify-center items-center text-center z-10 h-full">
            
            {/* Stage 1 */}
            <motion.div style={{ opacity: p1Op, y: p1Y, scale: p1S }} className="absolute w-full flex flex-col items-center">
               <div className="w-16 h-16 border border-black/10 rounded-full flex items-center justify-center mb-8 bg-black/5 backdrop-blur-md">
                 <span className="text-black/40 font-mono text-sm">01</span>
               </div>
               <h2 className="text-[clamp(3.5rem,8vw,7rem)] font-bold tracking-tighter leading-none whitespace-nowrap"><span className="text-black/30">Scattered </span><span className="text-black">data.</span></h2>
            </motion.div>

            {/* Stage 2 */}
            <motion.div style={{ opacity: p2Op, y: p2Y, scale: p2S }} className="absolute w-full flex flex-col items-center">
               <div className="w-16 h-16 border border-black/10 rounded-full flex items-center justify-center mb-8 bg-black/5 backdrop-blur-md">
                 <span className="text-black/40 font-mono text-sm">02</span>
               </div>
               <h2 className="text-[clamp(3.5rem,8vw,7rem)] font-bold tracking-tighter leading-none whitespace-nowrap"><span className="text-black/30">Missed </span><span className="text-black">follow-ups.</span></h2>
            </motion.div>

            {/* Stage 3 */}
            <motion.div style={{ opacity: p3Op, y: p3Y, scale: p3S }} className="absolute w-full flex flex-col items-center">
               <div className="w-16 h-16 border border-black/10 rounded-full flex items-center justify-center mb-8 bg-black/5 backdrop-blur-md">
                 <span className="text-black/40 font-mono text-sm">03</span>
               </div>
               <h2 className="text-[clamp(3.5rem,8vw,7rem)] font-bold tracking-tighter leading-none whitespace-nowrap"><span className="text-black/30">Manual </span><span className="text-black">processes.</span></h2>
            </motion.div>

            {/* Stage 4 */}
            <motion.div style={{ opacity: p4Op, y: p4Y, scale: p4S }} className="absolute w-full flex flex-col items-center">
               <div className="w-16 h-16 border border-black/10 rounded-full flex items-center justify-center mb-8 bg-black/5 backdrop-blur-md">
                 <span className="text-black/40 font-mono text-sm">04</span>
               </div>
               <h2 className="text-[clamp(3.5rem,8vw,7rem)] font-bold tracking-tighter leading-none whitespace-nowrap"><span className="text-black/30">No real </span><span className="text-black">analytics.</span></h2>
            </motion.div>

            {/* Stage 5: Solution */}
            <motion.div style={{ opacity: solOp, y: solY, scale: solS, filter: solB }} className="absolute w-full flex flex-col items-center pointer-events-none">
               <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] font-bold text-black/50 mb-6 drop-shadow-md">The Solution</p>
               <h3 className="text-[clamp(3rem,8vw,8.5rem)] font-extrabold leading-[1.0] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-black to-black/40 drop-shadow-2xl">
                  Meet the CRM <br/>of the future.
               </h3>
               <div className="mt-12 h-px w-32 bg-gradient-to-r from-transparent via-black/40 to-transparent" />
            </motion.div>

        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 3. HORIZONTAL SCROLL SHOWCASE
// ----------------------------------------------------------------------

const showcaseItems = [
  { title: "Dashboard", desc: "A unified view of your entire operation." },
  { title: "Lead Pipeline", desc: "Drag, drop, and close. Visual pipeline control." },
  { title: "Automation Builder", desc: "If this, then that. Powerful no-code automations." },
  { title: "Client Management", desc: "Every interaction, logged and accessible." },
  { title: "Analytics Panel", desc: "Real-time insights that drive decisions." },
];

const ShowcaseMockup = ({ index }: { index: number }) => {
  if (index === 0) {
    // Dashboard
    return (
      <div className="w-full h-full flex flex-col p-4 gap-4 bg-[#f8f9fa] rounded-2xl">
        <div className="flex gap-4">
           <div className="h-16 flex-1 bg-white rounded-xl shadow-sm border border-black/5 p-3 flex flex-col justify-center">
             <div className="text-[8px] text-black/40 font-bold mb-1 tracking-wider">REVENUE</div>
             <div className="text-sm font-bold">$12,450</div>
           </div>
           <div className="h-16 flex-1 bg-white rounded-xl shadow-sm border border-black/5 p-3 flex flex-col justify-center">
             <div className="text-[8px] text-black/40 font-bold mb-1 tracking-wider">NEW LEADS</div>
             <div className="text-sm font-bold">48</div>
           </div>
           <div className="h-16 flex-1 bg-white rounded-xl shadow-sm border border-black/5 p-3 flex flex-col justify-center">
             <div className="text-[8px] text-black/40 font-bold mb-1 tracking-wider">CONVERSION</div>
             <div className="text-sm font-bold text-green-600">24.5%</div>
           </div>
        </div>
        <div className="flex-1 bg-white rounded-xl shadow-sm border border-black/5 p-4 flex items-end gap-2 px-6">
           {[30, 50, 40, 70, 60, 90, 80, 65, 85, 95].map((h, i) => (
             <div key={i} className="flex-1 bg-black/90 rounded-t-sm" style={{ height: `${h}%` }} />
           ))}
        </div>
      </div>
    );
  }
  
  if (index === 1) {
    // Lead Pipeline (Kanban board)
    return (
      <div className="w-full h-full flex gap-3 p-4 bg-[#f8f9fa] rounded-2xl">
         {['Lead In', 'Contact Made', 'Proposal', 'Won'].map((stage, i) => (
           <div key={i} className="flex-1 bg-black/[0.03] rounded-xl p-3 flex flex-col gap-3">
             <div className="text-[10px] font-bold text-black/60 uppercase tracking-wide">{stage}</div>
             <div className="bg-white p-3 rounded-lg shadow-sm border border-black/5">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold mb-2 ${i===3 ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>A</div>
                <div className="h-2 w-16 bg-black/20 rounded-full mb-1.5" />
                <div className="h-1.5 w-10 bg-black/10 rounded-full" />
             </div>
             {i % 2 === 0 && (
               <div className="bg-white p-3 rounded-lg shadow-sm border border-black/5">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold mb-2 ${i===3 ? 'bg-green-100 text-green-600' : 'bg-purple-100 text-purple-600'}`}>B</div>
                  <div className="h-2 w-12 bg-black/20 rounded-full mb-1.5" />
                  <div className="h-1.5 w-14 bg-black/10 rounded-full" />
               </div>
             )}
           </div>
         ))}
      </div>
    );
  }

  if (index === 2) {
    // Automation Builder
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-4 relative bg-[#f8f9fa] rounded-2xl">
         {/* Lines */}
         <div className="absolute top-1/2 left-1/4 right-[35%] h-[2px] bg-black/10 -translate-y-1/2 z-0" />
         <div className="absolute top-[35%] bottom-1/2 right-[35%] w-[2px] bg-black/10 z-0" />
         <div className="absolute top-1/2 bottom-[35%] right-[35%] w-[2px] bg-black/10 z-0" />
         <div className="absolute top-[35%] right-[15%] left-[65%] h-[2px] bg-black/10 z-0" />
         <div className="absolute bottom-[35%] right-[15%] left-[65%] h-[2px] bg-black/10 z-0" />
         
         <div className="flex w-full items-center justify-between z-10 px-8">
            <div className="w-24 bg-white rounded-xl shadow-md border border-black/5 p-4 flex flex-col items-center gap-2">
               <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 text-lg">⚡</div>
               <div className="text-[9px] font-bold text-center">New Lead</div>
            </div>
            
            <div className="w-24 bg-white rounded-xl shadow-md border border-black/5 p-4 flex flex-col items-center gap-2">
               <div className="w-8 h-8 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-500 text-lg">⏳</div>
               <div className="text-[9px] font-bold text-center">Wait 1 Day</div>
            </div>
            
            <div className="flex flex-col gap-10">
               <div className="w-24 bg-white rounded-xl shadow-md border border-black/5 p-4 flex flex-col items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 text-lg">✉️</div>
                  <div className="text-[9px] font-bold text-center">Send Email</div>
               </div>
               <div className="w-24 bg-white rounded-xl shadow-md border border-black/5 p-4 flex flex-col items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-500 text-[12px] font-bold">SMS</div>
                  <div className="text-[9px] font-bold text-center">Send Text</div>
               </div>
            </div>
         </div>
      </div>
    );
  }
  
  if (index === 3) {
    // Client Management
    return (
      <div className="w-full h-full flex p-4 gap-4 bg-[#f8f9fa] rounded-2xl">
         <div className="w-1/3 bg-white rounded-xl shadow-sm border border-black/5 p-3 flex flex-col gap-2">
            <div className="h-8 bg-black/5 rounded-md flex border border-black/5 items-center px-3 mb-2">
              <div className="w-3 h-3 border border-black/30 rounded-full mr-2" />
              <div className="h-1.5 w-16 bg-black/20 rounded-full" />
            </div>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={`flex items-center gap-3 p-2 rounded-lg ${i === 2 ? 'bg-black/5' : ''}`}>
                 <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-black/10 to-black/5 flex items-center justify-center text-[10px] font-bold text-black/40">U{i}</div>
                 <div>
                   <div className="h-2 w-20 bg-black/30 rounded-full mb-1.5" />
                   <div className="h-1.5 w-12 bg-black/20 rounded-full" />
                 </div>
              </div>
            ))}
         </div>
         <div className="flex-1 bg-white rounded-xl shadow-sm border border-black/5 p-6 flex flex-col">
            <div className="flex items-center gap-4 mb-6 border-b border-black/5 pb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-100 to-purple-100 flex items-center justify-center font-bold text-xl text-blue-600">JD</div>
              <div>
                <div className="text-base font-bold text-black">John Doe</div>
                <div className="text-[11px] font-bold text-black/40 uppercase tracking-wider mt-1">CEO at Global Tech</div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-4">
               <div className="text-[10px] font-bold text-black/40 tracking-wider">ACTIVITY LOG</div>
               <div className="flex gap-4">
                 <div className="w-2 h-full rounded-full flex flex-col items-center py-2 relative">
                   <div className="w-2 h-2 rounded-full bg-blue-500 z-10" />
                   <div className="w-px h-16 bg-black/10 absolute top-4" />
                 </div>
                 <div className="flex-1 bg-black/[0.03] rounded-lg p-3 border border-black/5">
                   <div className="text-xs font-bold mb-1">Email Sent</div>
                   <div className="text-[10px] font-semibold text-black/50">Proposal attached. Waiting for reply.</div>
                 </div>
               </div>
               <div className="flex gap-4">
                 <div className="w-2 h-full rounded-full flex flex-col items-center py-2 relative">
                   <div className="w-2 h-2 rounded-full bg-green-500 z-10" />
                   <div className="w-px h-16 bg-black/10 absolute top-4" />
                 </div>
                 <div className="flex-1 bg-black/[0.03] rounded-lg p-3 border border-black/5">
                   <div className="text-xs font-bold mb-1">Call Completed</div>
                   <div className="text-[10px] font-semibold text-black/50">Discussed Q3 targets and budget.</div>
                 </div>
               </div>
            </div>
         </div>
      </div>
    );
  }

  // Analytics Panel
  return (
    <div className="w-full h-full p-4 flex flex-col gap-4 bg-[#f8f9fa] rounded-2xl">
      <div className="flex gap-4 h-1/2">
        <div className="flex-[2] bg-white rounded-xl shadow-sm border border-black/5 p-5 flex flex-col">
           <div className="text-[10px] font-bold text-black/40 mb-4 tracking-wider">TRAFFIC SOURCES</div>
           <div className="flex-1 flex items-end gap-2 relative overflow-hidden rounded-md">
             <svg className="absolute inset-0 w-full h-full preserve-3d overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0,80 Q25,30 50,60 T100,20 L100,100 L0,100 Z" fill="rgba(0,0,0,0.05)" />
               <path d="M0,80 Q25,30 50,60 T100,20" fill="none" stroke="black" strokeWidth="2" />
             </svg>
           </div>
        </div>
        <div className="flex-1 bg-white rounded-xl shadow-sm border border-black/5 p-5 flex flex-col items-center justify-center text-center">
           <div className="text-[10px] font-bold text-black/40 mb-4 tracking-wider self-start">USER SPLIT</div>
           <div className="relative w-28 h-28">
             <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
               <circle cx="50" cy="50" r="40" fill="transparent" stroke="rgba(0,0,0,0.05)" strokeWidth="16" />
               <circle cx="50" cy="50" r="40" fill="transparent" stroke="black" strokeWidth="16" strokeDasharray="251.2" strokeDashoffset="62.8" strokeLinecap="round" />
             </svg>
             <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-sm font-bold">75%</span>
                <span className="text-[8px] font-bold text-black/40">MOBILE</span>
             </div>
           </div>
        </div>
      </div>
      <div className="flex gap-4 h-1/2">
         {[1, 2, 3].map((i) => (
           <div key={i} className="flex-1 bg-white rounded-xl shadow-sm border border-black/5 p-4 flex flex-col justify-end relative overflow-hidden">
             <div className="absolute top-4 left-4 text-[9px] font-bold text-black/40 tracking-wider uppercase">METRIC 0{i}</div>
             <div className="text-2xl font-bold mb-2">{(Math.random() * 5 + 2).toFixed(1)}k</div>
             <div className="h-10 w-full flex items-end gap-1 px-1">
               {[...Array(12)].map((_, j) => (
                 <div key={j} className="flex-1 bg-black/10 rounded-t-[2px] transition-all duration-500 hover:bg-black/30" style={{ height: `${20 + Math.random() * 80}%` }} />
               ))}
             </div>
           </div>
         ))}
      </div>
    </div>
  );
};

function HorizontalShowcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#FCFCFC]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-16 px-[10vw]">
          {showcaseItems.map((item, index) => (
            <div 
              key={index} 
              className="group relative flex h-[70vh] w-[80vw] max-w-[1000px] shrink-0 flex-col justify-between overflow-hidden rounded-[40px] border border-black/10 bg-white p-10 shadow-[0_0_50px_rgba(0,0,0,0.02)] transition-colors hover:border-black/20"
            >
               {/* Context Header */}
               <div className="relative z-10 w-full max-w-sm mb-8">
                  <h3 className="text-[clamp(2rem,4vw,3rem)] font-bold text-black tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-lg text-black/50">{item.desc}</p>
               </div>

               {/* Realistic Mockup Window */}
               <div className="relative z-0 h-[65%] w-[90%] self-end rounded-2xl border border-black/10 bg-white shadow-2xl transition-transform duration-700 ease-out group-hover:-translate-y-8 group-hover:-translate-x-8">
                  {/* MacOS Window Controls */}
                  <div className="flex h-8 w-full items-center px-4 gap-1.5 border-b border-black/5 bg-gray-50 rounded-t-2xl">
                     <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                     <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                     <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  {/* Dynamic Mockup Content */}
                  <div className="h-[calc(100%-2rem)] w-full overflow-hidden rounded-b-2xl">
                     <ShowcaseMockup index={index} />
                  </div>
               </div>
               
               {/* Decorative Gradient Glow below mockup */}
               <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-black/[0.03] rounded-tl-full blur-[80px] pointer-events-none" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 4. FEATURE BREAKDOWN (NON-UNIFORM GRID)
// ----------------------------------------------------------------------

function FeaturesGrid() {
  return (
    <section className="bg-[#FCFCFC] px-6 py-32">
       <div className="mx-auto max-w-7xl">
         <div className="mb-20 text-center">
            <h2 className="text-[clamp(3rem,6vw,5rem)] font-extrabold tracking-tight text-black">
               The Architecture of <br/> <span className="text-black/40">Advantage.</span>
            </h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Cell 1: Automate Everything */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="group relative col-span-1 md:col-span-2 row-span-2 overflow-hidden rounded-[32px] border border-black/10 bg-gradient-to-br from-black/[0.02] to-transparent p-10 hover:border-black/20"
            >
               <div className="absolute top-0 right-0 w-96 h-96 bg-black/10 blur-[100px] opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none" />
               <h3 className="text-4xl font-bold text-black mb-4">Automate Everything</h3>
               <p className="text-xl text-black/50 max-w-md">Eliminate repetitive tasks with intuitive, rule-based logic that works while you sleep.</p>
               
               <div className="absolute bottom-10 right-10 w-48 h-48 border border-black/5 rounded-full flex items-center justify-center group-hover:scale-110 transition duration-700">
                  <div className="w-24 h-24 border border-black/10 rounded-full flex items-center justify-center">
                     <div className="w-12 h-12 bg-black/10 rounded-full" />
                  </div>
               </div>
            </motion.div>

            {/* Cell 2: Visual Pipeline */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="group relative col-span-1 row-span-1 overflow-hidden rounded-[32px] border border-black/10 bg-gradient-to-br from-black/[0.02] to-transparent p-10 hover:border-black/20"
            >
               <h3 className="text-2xl font-bold text-black mb-2">Visual Pipeline Control</h3>
               <p className="text-black/50">Drag, drop, and close deals effortlessly.</p>
            </motion.div>

            {/* Cell 3: Smart Reporting */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="group relative col-span-1 row-span-1 overflow-hidden rounded-[32px] border border-black/10 bg-gradient-to-br from-black/[0.02] to-transparent p-10 hover:border-black/20"
            >
               <h3 className="text-2xl font-bold text-black mb-2">Smart Reporting</h3>
               <p className="text-black/50">Data converted into actionable insights.</p>
            </motion.div>

            {/* Cell 4: Secure Access */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="group relative col-span-1 md:col-span-3 row-span-1 overflow-hidden rounded-[32px] border border-black/10 bg-gradient-to-r from-black/[0.02] to-transparent p-10 flex items-center justify-between hover:border-black/20"
            >
               <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-black/5 blur-[80px] opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none" />
               <div>
                  <h3 className="text-3xl font-bold text-black mb-2">Secure Role-Based Access</h3>
                  <p className="text-lg text-black/50">Granular permissions to keep your data protected at all times.</p>
               </div>
            </motion.div>
         </div>
       </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 5. TECH + ARCHITECTURE
// ----------------------------------------------------------------------

function TechSection() {
  const cards = [
    { title: "Next.js Architecture", text: "Built for speed and SEO." },
    { title: "Secure Node Backend", text: "Enterprise-grade security." },
    { title: "Database Optimized", text: "Sub-50ms query responses." },
    { title: "Scalable Infra", text: "Grows intuitively with your needs." },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FCFCFC] py-32 px-6">
      <div className="mx-auto max-w-7xl flex flex-col items-center text-center">
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold text-black mb-20 tracking-tighter">
           Engineered for Performance.
        </h2>
        
        <div className="relative w-full max-w-4xl h-[400px]">
           {cards.map((card, i) => (
             <motion.div
               key={i}
               animate={{ 
                 y: [0, -15, 0],
                 rotate: [0, i % 2 === 0 ? 2 : -2, 0]
               }}
               transition={{
                 duration: 6 + i,
                 repeat: Infinity,
                 ease: "easeInOut"
               }}
               className={`absolute w-64 p-6 rounded-2xl border border-black/10 bg-black/[0.03] backdrop-blur-md shadow-2xl
                 ${i === 0 ? "top-0 left-0" : ""}
                 ${i === 1 ? "bottom-0 right-0" : ""}
                 ${i === 2 ? "top-10 right-20" : ""}
                 ${i === 3 ? "bottom-20 left-20" : ""}
               `}
               style={{ zIndex: 10 - i }}
             >
                <h4 className="font-bold text-black mb-2">{card.title}</h4>
                <p className="text-sm text-black/50">{card.text}</p>
             </motion.div>
           ))}
           
           {/* Center glowing element */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-black/10 blur-[60px] rounded-full" />
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 6. STATS / IMPACT SECTION
// ----------------------------------------------------------------------

function Counter({ from, to, suffix = "", duration = 2 }: { from: number, to: number, suffix?: string, duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (!inView) return;
    const node = nodeRef.current;
    if (!node) return;
    
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const current = Math.floor(progress * (to - from) + from);
      
      // format numbers like 99.9 cleanly or whole numbers
      if (to % 1 !== 0) {
        node.textContent = (progress * (to - from) + from).toFixed(1) + suffix;
      } else {
        node.textContent = current + suffix;
      }
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        node.textContent = to + suffix;
      }
    };
    window.requestAnimationFrame(step);
  }, [inView, from, to, duration, suffix]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
}

function StatsSection() {
  return (
    <section className="bg-[#FCFCFC] py-32 px-6 border-y border-black/10">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-16">
         <div className="text-center w-full">
            <h3 className="text-[clamp(4rem,8vw,6rem)] font-light text-black tracking-tighter">
               <Counter from={0} to={40} suffix="%" />
            </h3>
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-black/40 mt-4">Faster Team Operations</p>
         </div>
         <div className="hidden md:block w-px h-32 bg-black/10" />
         <div className="text-center w-full">
            <h3 className="text-[clamp(4rem,8vw,6rem)] font-light text-black tracking-tighter">
               <Counter from={0} to={3} suffix="x" />
            </h3>
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-black/40 mt-4">Productivity</p>
         </div>
         <div className="hidden md:block w-px h-32 bg-black/10" />
         <div className="text-center w-full">
            <h3 className="text-[clamp(4rem,8vw,6rem)] font-light text-black tracking-tighter">
               <Counter from={90.0} to={99.9} suffix="%" duration={2.5} />
            </h3>
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-black/40 mt-4">Uptime Architecture</p>
         </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 7. PREMIUM CTA SECTION
// ----------------------------------------------------------------------

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="group relative overflow-hidden rounded-full bg-black px-10 py-5 font-bold uppercase tracking-[0.2em] text-[12px] text-white shadow-[0_0_40px_rgba(0,0,0,0.1)] transition-colors hover:bg-black/90"
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"/>
    </motion.button>
  );
}

function CtaSection() {
  return (
    <section className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#FCFCFC] to-[#f4f4f4] px-4 py-32">
       {/* Subtle background moving light beam */}
       <motion.div 
         animate={{ 
           rotate: [0, 360],
           scale: [1, 1.2, 1]
         }}
         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[20vh] bg-gradient-to-r from-transparent via-black/[0.03] to-transparent blur-[50px] pointer-events-none"
       />

       <motion.div 
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 1 }}
         className="relative z-10 text-center flex flex-col items-center"
       >
          <h2 className="text-[clamp(3rem,6vw,5.5rem)] font-extrabold tracking-tighter text-black leading-[1.1] mb-12 max-w-4xl">
             Ready to Run Your Business <br/>
             <span className="text-black/40">Like a System?</span>
          </h2>
          
          <MagneticButton>
             Request Instance
          </MagneticButton>
       </motion.div>
    </section>
  );
}

// ----------------------------------------------------------------------
// MAIN EXPORT
// ----------------------------------------------------------------------

export default function ProductShowcase() {
  return (
    <main className="bg-[#FCFCFC] min-h-screen text-black selection:bg-black/20">
      <GrainTracker />
      <CustomCursor />
      <Navbar forceDarkAtTop />
      
      <HeroSection />
      <NarrativeSection />
      <HorizontalShowcase />
      <FeaturesGrid />
      <TechSection />
      <StatsSection />
      <CtaSection />
      
      <div className="bg-[#FCFCFC] relative z-10 pt-10">
        <Footer />
      </div>
    </main>
  );
}
