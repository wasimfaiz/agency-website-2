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

      <div className="relative z-30 flex flex-col items-center justify-center px-4 text-center pb-[25vh] sm:pb-[30vh]">
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
        animate={{ opacity: 1, scale: 1, rotateX: 5 }}
        transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -bottom-[20vh] z-20 w-[95vw] max-w-6xl overflow-hidden rounded-t-[32px] border border-black/10 bg-[#FAF9F6] shadow-[0_-30px_100px_rgba(0,0,0,0.1)] transform-gpu ring-1 ring-black/5"
      >
        <motion.div 
           animate={{ y: [-15, 15, -15] }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
           className="h-[60vh] w-full p-3 md:p-4"
        >
           {/* macOS-style Header Bar */}
           <div className="h-14 w-full border-b border-black/5 flex items-center justify-between px-6 bg-white/60 backdrop-blur-md rounded-t-3xl shadow-sm relative z-10">
              <div className="flex items-center gap-2">
                 <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] shadow-sm"/>
                 <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-sm"/>
                 <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-sm"/>
              </div>
              
              {/* Fake Search Bar */}
              <div className="flex-1 max-w-lg mx-6">
                <div className="h-8 w-full rounded-full bg-black/5 border border-black/5 flex items-center px-4 transition-all hover:bg-black/10">
                  <svg className="w-3 h-3 text-black/40 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  <div className="text-[11px] font-medium text-black/30">Search leads, contacts, or campaigns...</div>
                </div>
              </div>

              {/* Header Profile Actions */}
              <div className="flex items-center gap-4">
                 <div className="relative">
                   <svg className="w-5 h-5 text-black/60 hover:text-black cursor-pointer transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                   <div className="absolute top-0 right-0.5 w-2 h-2 rounded-full bg-red-500 ring-2 ring-white"></div>
                 </div>
                 <div className="flex items-center gap-2 pl-4 border-l border-black/10">
                   <div className="text-right hidden sm:block">
                     <div className="text-[11px] font-bold text-black leading-tight">Sarah Jenkins</div>
                     <div className="text-[9px] font-medium text-black/50">Admin</div>
                   </div>
                   <div className="relative h-8 w-8 rounded-full overflow-hidden border border-black/10 shadow-sm cursor-pointer">
                     <Image src="https://i.pravatar.cc/150?img=47" alt="Profile" fill className="object-cover" />
                   </div>
                 </div>
              </div>
           </div>

           <div className="flex h-[calc(100%-3.5rem)] bg-gradient-to-br from-white to-[#F8FAFC] overflow-hidden rounded-b-3xl relative">
              
              {/* Elegant Sidebar */}
              <div className="w-56 border-r border-black/5 bg-white/80 backdrop-blur-sm p-5 flex flex-col gap-6 relative z-10 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
                 <div className="flex items-center gap-2 mb-2 px-1">
                   <div className="w-6 h-6 rounded-lg bg-black flex items-center justify-center text-white font-bold text-[10px]">SZ</div>
                   <div className="font-bold text-xs tracking-wide">SetZet CRM</div>
                 </div>
                 
                 <div className="flex flex-col gap-1.5">
                   <p className="text-[9px] font-bold text-black/30 uppercase tracking-widest px-2 mb-1">Menu</p>
                   <div className="flex items-center gap-3 px-3 py-2.5 bg-black/5 rounded-xl border border-black/5 shadow-sm">
                     <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                     <div className="text-[12px] font-semibold text-black">Dashboard</div>
                   </div>
                   <div className="group flex items-center justify-between px-3 py-2.5 hover:bg-black/5 rounded-xl transition-colors cursor-pointer">
                     <div className="flex items-center gap-3">
                       <svg className="w-4 h-4 text-black/40 group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                       <div className="text-[12px] font-medium text-black/60 group-hover:text-black transition-colors">Leads</div>
                     </div>
                     <div className="bg-blue-100 text-blue-600 text-[9px] font-bold px-1.5 py-0.5 rounded-full">12</div>
                   </div>
                   <div className="group flex items-center gap-3 px-3 py-2.5 hover:bg-black/5 rounded-xl transition-colors cursor-pointer">
                     <svg className="w-4 h-4 text-black/40 group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                     <div className="text-[12px] font-medium text-black/60 group-hover:text-black transition-colors">Campaigns</div>
                   </div>
                   <div className="group flex items-center gap-3 px-3 py-2.5 hover:bg-black/5 rounded-xl transition-colors cursor-pointer">
                     <svg className="w-4 h-4 text-black/40 group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                     <div className="text-[12px] font-medium text-black/60 group-hover:text-black transition-colors">Analytics</div>
                   </div>
                 </div>

                 {/* Storage Used Indicator */}
                 <div className="mt-auto bg-gradient-to-b from-white to-gray-50 border border-black/5 p-4 rounded-2xl shadow-sm">
                    <p className="text-[10px] font-bold text-black mb-1">Storage Usage</p>
                    <p className="text-[9px] text-black/50 mb-3">75.2 GB of 100 GB</p>
                    <div className="h-1.5 w-full bg-black/10 rounded-full overflow-hidden">
                       <motion.div initial={{ width: 0 }} animate={{ width: "75%" }} transition={{ duration: 1.5, delay: 1.5 }} className="h-full bg-black rounded-full" />
                    </div>
                 </div>
              </div>
              
              {/* Main Content Area */}
              <div className="flex-1 flex flex-col p-6 overflow-hidden gap-6">
                 
                 {/* Top KPI Cards (Glassmorphic) */}
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {[
                      { title: "Total Revenue", value: "$124,590.00", icon: "💰", trend: "+14.2%", positive: true, chartPoints: [30, 40, 35, 50, 49, 60, 70, 90, 100] },
                      { title: "Active Projects", value: "32", icon: "🚀", trend: "+5.4%", positive: true, chartPoints: [40, 30, 50, 40, 60, 45, 75, 60, 80] },
                      { title: "Churn Rate", value: "1.2%", icon: "📉", trend: "-0.8%", positive: true, chartPoints: [80, 75, 60, 70, 50, 45, 30, 20, 10] },
                    ].map((kpi, index) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                        key={index} 
                        className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/50 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-5 group hover:bg-white/70 transition-colors cursor-pointer"
                      >
                         <div className="flex justify-between items-start mb-6 z-10 relative">
                            <div>
                               <div className="text-[10px] font-bold text-black/50 uppercase tracking-widest">{kpi.title}</div>
                               <div className="text-2xl font-bold text-black mt-1 tracking-tight">{kpi.value}</div>
                            </div>
                            <div className="text-xl bg-white p-2 rounded-xl shadow-sm border border-black/5">{kpi.icon}</div>
                         </div>
                         <div className="flex items-center justify-between z-10 relative">
                            <div className={`text-[11px] font-bold px-2 py-1 rounded-md ${kpi.positive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                              {kpi.trend} <span className="text-black/40 font-medium ml-1">vs last month</span>
                            </div>
                         </div>
                         {/* Mini Sparkline Background */}
                         <div className="absolute -bottom-2 left-0 right-0 h-16 opacity-20 flex items-end px-2 gap-1 pointer-events-none">
                            {kpi.chartPoints.map((h, i) => (
                               <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 1, delay: 1.5 + i * 0.05 }} className="flex-1 bg-black rounded-t-sm" />
                            ))}
                         </div>
                      </motion.div>
                    ))}
                 </div>
                 
                 {/* Lower Dashboard Section */}
                 <div className="flex-1 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 overflow-hidden">
                    
                    {/* Main Chart Area */}
                    <motion.div 
                       initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.3 }}
                       className="rounded-2xl border border-black/5 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-6 flex flex-col relative overflow-hidden"
                    >
                       <div className="flex justify-between items-center mb-8">
                         <div>
                           <h2 className="text-sm font-bold text-black">Revenue Analytics</h2>
                           <p className="text-[11px] text-black/50 mt-1">Monthly recurring revenue (MRR) tracking</p>
                         </div>
                         <div className="flex bg-gray-100 p-1 rounded-lg">
                            <button className="px-3 py-1 bg-white shadow-sm rounded-md text-[10px] font-bold text-black">Yearly</button>
                            <button className="px-3 py-1 text-[10px] font-semibold text-black/50 hover:text-black transition">Monthly</button>
                         </div>
                       </div>
                       
                       {/* Beautiful Aesthetic Chart */}
                       <div className="flex-1 relative flex items-end gap-3 px-2 pt-10">
                          {/* Y-axis Lines */}
                          <div className="absolute inset-0 flex flex-col justify-between pt-10 pb-6 pointer-events-none">
                            {[1,2,3,4,5].map(i => <div key={i} className="w-full h-px bg-black-[0.03] border-t border-dashed border-black/5" />)}
                          </div>
                          
                          {/* Bar Chart Data */}
                          {[
                            { month: 'Jan', val1: 40, val2: 25 }, { month: 'Feb', val1: 45, val2: 30 },
                            { month: 'Mar', val1: 55, val2: 35 }, { month: 'Apr', val1: 40, val2: 50 },
                            { month: 'May', val1: 70, val2: 45 }, { month: 'Jun', val1: 85, val2: 60 },
                            { month: 'Jul', val1: 65, val2: 55 }, { month: 'Aug', val1: 95, val2: 70 }
                          ].map((data, i) => (
                            <div key={i} className="w-full relative group h-full flex items-end justify-center gap-1 z-10">
                               <motion.div initial={{ height: 0 }} animate={{ height: `${data.val1}%` }} transition={{ duration: 1.2, delay: i * 0.05 + 1.4, type: "spring", bounce: 0.4 }} className="w-full max-w-[12px] bg-black rounded-t-full relative group-hover:bg-black/80 transition-colors">
                                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[9px] font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">${data.val1}k</div>
                               </motion.div>
                               <motion.div initial={{ height: 0 }} animate={{ height: `${data.val2}%` }} transition={{ duration: 1.2, delay: i * 0.05 + 1.6, type: "spring", bounce: 0.4 }} className="w-full max-w-[12px] bg-[#E2E8F0] rounded-t-full group-hover:bg-[#CBD5E1] transition-colors" />
                               <div className="absolute -bottom-6 text-[10px] font-bold text-black/40">{data.month}</div>
                            </div>
                          ))}
                       </div>
                    </motion.div>
                    
                    {/* Right Side Feed */}
                    <motion.div 
                       initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.4 }}
                       className="rounded-2xl border border-black/5 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-6 flex flex-col"
                    >
                       <div className="flex justify-between items-center mb-5">
                          <h2 className="text-sm font-bold text-black">Recent Activity</h2>
                          <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center cursor-pointer hover:bg-black/10 transition">
                            <span className="text-[12px]">...</span>
                          </div>
                       </div>
                       
                       <div className="flex flex-col gap-0 overflow-y-auto pr-2 custom-scrollbar flex-1 relative">
                          <div className="absolute left-[11px] top-4 bottom-4 w-px bg-black/5 z-0" />
                          {[
                            { title: "New Deal Signed", msg: "Spotify completely onboarded.", time: "10m ago", icon: "🎉", img: "4" },
                            { title: "Invoice Paid", msg: "Invoice #4029 paid perfectly.", time: "1h ago", icon: "💳", img: "33" },
                            { title: "Meeting Scheduled", msg: "Kickoff call with Acme team.", time: "3h ago", icon: "📅", img: "11" },
                            { title: "Project Launched", msg: "Website pushed to production.", time: "5h ago", icon: "🚀", img: "64" },
                            { title: "New Lead Added", msg: "From incoming website form.", time: "1d ago", icon: "✨", img: "21" },
                          ].map((item, i) => (
                            <motion.div 
                               initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.1 + 1.6 }}
                               key={i} 
                               className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors relative z-10 group cursor-pointer"
                            >
                               <div className="relative">
                                  <div className="w-6 h-6 rounded-full bg-white shadow-sm border border-black/10 flex items-center justify-center text-[10px] ring-4 ring-white relative z-10">
                                    {item.icon}
                                  </div>
                               </div>
                               <div className="flex-1 mt-0.5">
                                  <div className="flex justify-between items-start">
                                     <div className="text-[11px] font-bold text-black group-hover:text-blue-600 transition-colors">{item.title}</div>
                                     <div className="text-[9px] font-semibold text-black/40">{item.time}</div>
                                  </div>
                                  <div className="text-[10px] text-black/60 mt-0.5">{item.msg}</div>
                                  <div className="flex items-center gap-1.5 mt-2">
                                     <Image src={`https://i.pravatar.cc/150?img=${item.img}`} width={14} height={14} alt="User" className="rounded-full" />
                                     <div className="text-[8px] font-bold text-black/40 uppercase">Assigned</div>
                                  </div>
                               </div>
                            </motion.div>
                          ))}
                       </div>
                    </motion.div>
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
      <div className="w-full h-full flex flex-col p-5 gap-5 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] rounded-2xl shadow-inner overflow-hidden relative border border-white/50">
        <div className="absolute inset-0 bg-noise opacity-[0.03]"></div>
        <div className="flex gap-4 relative z-10">
           <div className="h-20 flex-1 bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white p-4 flex flex-col justify-center">
             <div className="flex justify-between items-center mb-1">
               <div className="text-[9px] text-black/40 font-bold tracking-widest uppercase">Revenue</div>
               <div className="w-5 h-5 rounded bg-green-50 text-green-600 flex items-center justify-center text-[10px]">↗</div>
             </div>
             <div className="text-xl font-bold tracking-tight">$12,450<span className="text-[11px] text-black/30 font-medium ml-1">.00</span></div>
           </div>
           <div className="h-20 flex-1 bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white p-4 flex flex-col justify-center">
             <div className="flex justify-between items-center mb-1">
               <div className="text-[9px] text-black/40 font-bold tracking-widest uppercase">New Leads</div>
               <div className="w-5 h-5 rounded bg-blue-50 text-blue-600 flex items-center justify-center text-[10px]">+</div>
             </div>
             <div className="text-xl font-bold tracking-tight">48<span className="text-[11px] text-black/30 font-medium ml-1">this week</span></div>
           </div>
           <div className="h-20 flex-1 bg-black text-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-black/80 p-4 flex flex-col justify-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full blur-xl -mr-4 -mt-4"></div>
             <div className="flex justify-between items-center mb-1 relative z-10">
               <div className="text-[9px] text-white/50 font-bold tracking-widest uppercase">Conversion</div>
             </div>
             <div className="text-xl font-bold tracking-tight relative z-10">24.5%</div>
           </div>
        </div>
        <div className="flex-1 bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white p-6 flex flex-col relative z-10">
           <div className="flex justify-between items-center mb-4">
             <div className="text-sm font-bold text-black">Growth Analytics</div>
             <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-black"></div>
                <div className="w-2 h-2 rounded-full bg-black/20"></div>
             </div>
           </div>
           <div className="flex-1 flex items-end gap-3 px-2 pb-2">
             {[30, 50, 40, 70, 60, 90, 80, 65, 85, 100].map((h, i) => (
               <div key={i} className="flex-1 relative group h-full flex items-end">
                 <div className="w-full bg-black/5 absolute inset-0 rounded-t-sm" />
                 <motion.div 
                   initial={{ height: 0 }}
                   whileInView={{ height: `${h}%` }}
                   viewport={{ once: true }}
                   transition={{ duration: 1, delay: i * 0.05, type: "spring" }}
                   className={`w-full rounded-t-sm z-10 ${i === 9 ? 'bg-blue-600' : 'bg-black/80 group-hover:bg-black transition-colors'}`} 
                 />
                 {i === 9 && (
                   <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-bold py-1 px-2 rounded-md whitespace-nowrap shadow-lg">Target</div>
                 )}
               </div>
             ))}
           </div>
        </div>
      </div>
    );
  }
  
  if (index === 1) {
    // Lead Pipeline (Kanban board)
    return (
      <div className="w-full h-full flex flex-col bg-[#F3F4F6] rounded-2xl p-5 border border-white/60 shadow-inner relative overflow-hidden">
         <div className="flex justify-between items-center mb-6">
           <div className="text-sm font-bold text-black flex items-center gap-2">
             <svg className="w-4 h-4 text-black/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>
             Sales Pipeline
           </div>
           <div className="flex gap-2">
             <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-[12px] font-bold shadow-sm">+</div>
           </div>
         </div>
         <div className="flex-1 flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
           {[
             { name: 'Lead In', count: 12, color: 'bg-blue-500' },
             { name: 'Contact Made', count: 8, color: 'bg-yellow-500' },
             { name: 'Proposal', count: 4, color: 'bg-orange-500' },
             { name: 'Won', count: 24, color: 'bg-green-500' }
           ].map((stage, i) => (
             <div key={i} className="flex-1 min-w-[200px] bg-black/[0.02] rounded-xl p-3 flex flex-col gap-3 border border-black/[0.03]">
               <div className="flex justify-between items-center">
                 <div className="text-[10px] font-bold text-black/70 uppercase tracking-widest flex items-center gap-1.5">
                   <div className={`w-1.5 h-1.5 rounded-full ${stage.color}`}></div>
                   {stage.name}
                 </div>
                 <div className="text-[10px] bg-black/5 px-1.5 py-0.5 rounded text-black/50 font-bold">{stage.count}</div>
               </div>
               
               <motion.div 
                 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 }}
                 className="bg-white p-3 rounded-xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-black/5 cursor-pointer hover:shadow-md transition-shadow group"
               >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-1">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold ${i===3 ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                        {['A', 'J', 'S', 'W'][i]}
                      </div>
                      <div className="text-[11px] font-bold text-black ml-1 group-hover:text-blue-600 transition-colors">
                        {['Acme Corp', 'Jenkins LLC', 'Stark Ind', 'Wayne Ent'][i]}
                      </div>
                    </div>
                    <div className="text-[10px] font-bold text-black/40">${(i*12 + 5).toFixed(1)}k</div>
                  </div>
                  <div className="text-[9px] text-black/40 font-medium mb-3">Website redesign and SEO optimization.</div>
                  <div className="flex gap-1 justify-end">
                    <div className="text-[8px] px-1.5 py-0.5 rounded bg-black/5 text-black/50 font-bold">{['High', 'Med', 'High', 'Low'][i]} Priority</div>
                  </div>
               </motion.div>
               
               {i % 2 === 0 && (
                 <motion.div 
                   initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 + 0.1 }}
                   className="bg-white p-3 rounded-xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-black/5 cursor-pointer hover:shadow-md transition-shadow group"
                 >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-1">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold bg-purple-100 text-purple-600`}>
                          {['Q', 'B', 'X', 'D'][i]}
                        </div>
                        <div className="text-[11px] font-bold text-black ml-1 group-hover:text-purple-600 transition-colors">
                          {['Quantum', 'Beta PLC', 'Xavier', 'Delta'][i]}
                        </div>
                      </div>
                      <div className="text-[10px] font-bold text-black/40">${(i*5 + 2).toFixed(1)}k</div>
                    </div>
                    <div className="text-[9px] text-black/40 font-medium mb-3">Mobile app development phase 1.</div>
                    <div className="flex gap-1 justify-end">
                      <div className="text-[8px] px-1.5 py-0.5 rounded bg-black/5 text-black/50 font-bold">Med Priority</div>
                    </div>
                 </motion.div>
               )}
             </div>
           ))}
         </div>
      </div>
    );
  }

  if (index === 2) {
    // Automation Builder
    return (
      <div className="w-full h-full flex flex-col p-6 relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl overflow-hidden border border-white/10 shadow-inner">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:24px_24px] z-0" />
         
         <div className="flex justify-between items-center mb-8 relative z-10">
           <div className="text-sm font-bold text-white flex items-center gap-2">
             <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
             Workflow Automation
           </div>
           <div className="px-3 py-1 bg-blue-500/20 text-blue-400 text-[10px] font-bold rounded-full border border-blue-500/30">Active</div>
         </div>
         
         {/* Animated Lines SVG */}
         <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.1))' }}>
           <motion.path 
             d="M 120 120 L 250 120 L 250 180" 
             fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="4 4" 
             animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
           />
           <motion.path 
             d="M 250 200 L 250 260 L 320 260" 
             fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="4 4" 
             animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
           />
           <motion.path 
             d="M 250 200 L 250 260 L 180 260" 
             fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="4 4" 
             animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
           />
         </svg>
         
         <div className="flex-1 w-full relative z-10 mt-6 md:mt-0 flex justify-center items-center">
            {/* Trigger */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="absolute -translate-y-20 -translate-x-32 md:-translate-x-40 w-48 bg-black/60 backdrop-blur-md rounded-xl shadow-xl border border-white/10 p-4">
               <div className="flex items-center gap-3 mb-2">
                 <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400">⚡</div>
                 <div className="text-[11px] font-bold text-white">Trigger Event</div>
               </div>
               <div className="text-[10px] text-white/50">When a new inquiry is submitted via the primary website form.</div>
            </motion.div>
            
            {/* Condition */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="absolute w-44 bg-black/60 backdrop-blur-md rounded-xl shadow-xl border border-white/10 p-3 ml-12">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">IF</div>
                 <div className="text-[10px] font-bold text-white leading-tight">Budget &ge; $5k<br/><span className="text-white/40 font-normal">Check condition</span></div>
               </div>
            </motion.div>
            
            {/* True Path */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="absolute translate-y-24 translate-x-32 md:translate-x-48 w-44 bg-black/60 backdrop-blur-md rounded-xl shadow-xl border border-white/10 p-3 flex flex-col items-center">
               <div className="absolute -top-3 bg-green-500 text-white text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">True</div>
               <div className="w-8 h-8 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 mb-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
               </div>
               <div className="text-[11px] font-bold text-white text-center">Assign to Sales</div>
            </motion.div>
            
            {/* False Path */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="absolute translate-y-24 -translate-x-20 md:-translate-x-16 w-44 bg-black/60 backdrop-blur-md rounded-xl shadow-xl border border-white/10 p-3 flex flex-col items-center">
               <div className="absolute -top-3 bg-red-500 text-white text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">False</div>
               <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-2">
                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
               </div>
               <div className="text-[11px] font-bold text-white text-center">Add to Newsletter</div>
            </motion.div>
         </div>
      </div>
    );
  }
  
  if (index === 3) {
    // Client Management
    return (
      <div className="w-full h-full flex p-5 gap-5 bg-[#FAF9F6] rounded-2xl border border-black/5 shadow-inner">
         <div className="w-[35%] bg-white rounded-xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-black/5 p-4 flex flex-col">
            <div className="relative mb-5">
              <input readOnly className="h-9 w-full rounded-lg bg-black/5 border-none px-4 pl-9 text-[10px] text-black/50 outline-none" placeholder="Search contacts..." />
              <svg className="absolute left-3 top-2.5 w-4 h-4 text-black/30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <div className="flex flex-col gap-2 overflow-y-auto custom-scrollbar flex-1 pr-1">
              {[
                { name: 'John Doe', comp: 'Global Tech', img: '11' },
                { name: 'Sarah Connor', comp: 'Cyberdyne', img: '44' },
                { name: 'Bruce Wayne', comp: 'Wayne Ent', img: '55' },
                { name: 'Tony Stark', comp: 'Stark Ind', img: '68' },
                { name: 'Peter Parker', comp: 'Daily Bugle', img: '12' }
              ].map((user, i) => (
                <div key={i} className={`flex items-center gap-3 p-2.5 rounded-xl cursor-pointer transition-colors ${i === 0 ? 'bg-blue-50 border border-blue-100 shadow-sm' : 'hover:bg-black/5 border border-transparent'}`}>
                   <Image src={`https://i.pravatar.cc/150?img=${user.img}`} alt={user.name} width={32} height={32} className="rounded-full shadow-sm" />
                   <div>
                     <div className={`text-[11px] font-bold ${i === 0 ? 'text-blue-900' : 'text-black'}`}>{user.name}</div>
                     <div className={`text-[9px] font-semibold ${i === 0 ? 'text-blue-500' : 'text-black/40'}`}>{user.comp}</div>
                   </div>
                </div>
              ))}
            </div>
         </div>
         <div className="flex-1 bg-white rounded-xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-black/5 p-6 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-blue-50 to-purple-50 z-0" />
            
            <div className="flex items-center justify-between mb-8 pb-6 relative z-10 border-b border-black/5">
              <div className="flex items-end gap-4">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-md ring-4 ring-white border border-black/10">
                  <Image src="https://i.pravatar.cc/150?img=11" alt="John Doe" fill className="object-cover" />
                </div>
                <div className="pb-1">
                  <div className="text-xl font-bold text-black tracking-tight leading-none mb-1">John Doe</div>
                  <div className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full inline-block">CEO @ Global Tech</div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col">
               <div className="text-[10px] font-bold text-black/40 tracking-widest uppercase mb-4">Activity Timeline</div>
               <div className="flex flex-col gap-5 relative z-10">
                  
                  <div className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center text-xs shadow-sm ring-4 ring-white z-10 relative">✉️</div>
                      <div className="w-px h-12 bg-black/10 -mt-2 group-hover:bg-blue-200 transition-colors" />
                    </div>
                    <div className="flex-1 bg-[#F8FAFC] rounded-xl p-3 border border-black/5 group-hover:border-blue-100 transition-colors shadow-sm relative top-1">
                      <div className="flex justify-between items-center mb-1">
                         <div className="text-[11px] font-bold text-black">Proposal Sent</div>
                         <div className="text-[9px] text-black/40 font-semibold">Today, 2:40 PM</div>
                      </div>
                      <div className="text-[10px] text-black/60 font-medium">Attached PDF document for Q3 retainer scope.</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-7 h-7 rounded-full bg-green-50 text-green-500 flex items-center justify-center text-xs shadow-sm ring-4 ring-white z-10 relative">📞</div>
                      <div className="w-px h-12 bg-black/10 -mt-2 group-hover:bg-green-200 transition-colors" />
                    </div>
                    <div className="flex-1 bg-[#F8FAFC] rounded-xl p-3 border border-black/5 group-hover:border-green-100 transition-colors shadow-sm relative top-1">
                      <div className="flex justify-between items-center mb-1">
                         <div className="text-[11px] font-bold text-black">Discovery Call</div>
                         <div className="text-[9px] text-black/40 font-semibold">Yesterday, 10:00 AM</div>
                      </div>
                      <div className="text-[10px] text-black/60 font-medium">Discussed main pain points regarding their scattered lead tracking.</div>
                    </div>
                  </div>
                  
               </div>
            </div>
         </div>
      </div>
    );
  }

  // Analytics Panel
  return (
    <div className="w-full h-full p-5 flex flex-col gap-5 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl border border-white/10 shadow-inner overflow-hidden relative">
      <div className="absolute inset-0 bg-noise opacity-[0.05]"></div>
      <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
      
      <div className="flex justify-between items-center mb-2 relative z-10 px-2">
        <div className="text-sm font-bold text-white flex items-center gap-2">
          <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          Advanced Analytics
        </div>
        <div className="flex gap-2">
          <div className="px-3 py-1 bg-white/10 border border-white/10 text-white/80 text-[10px] font-bold rounded-lg cursor-pointer hover:bg-white/20 transition-colors">Export CSV</div>
        </div>
      </div>

      <div className="flex gap-5 h-[40%] relative z-10">
        <div className="flex-[2] bg-white/5 backdrop-blur-md rounded-xl shadow-lg border border-white/10 p-5 flex flex-col relative overflow-hidden group">
           <div className="text-[10px] font-bold text-white/50 mb-1 tracking-widest uppercase">Traffic Overview</div>
           <div className="text-2xl font-bold text-white mb-4">42.8k <span className="text-[12px] text-green-400 ml-2">↑ 14.5%</span></div>
           <div className="flex-1 flex items-end gap-2 relative overflow-hidden rounded-md">
             <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0,80 Q10,60 25,70 T50,40 T75,50 T100,10 L100,100 L0,100 Z" fill="url(#gradientChart)" />
               <path d="M0,80 Q10,60 25,70 T50,40 T75,50 T100,10" fill="none" stroke="#60A5FA" strokeWidth="2" className="group-hover:stroke-blue-400 transition-colors" />
               <defs>
                 <linearGradient id="gradientChart" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="0%" stopColor="rgba(96,165,250,0.4)" />
                   <stop offset="100%" stopColor="rgba(96,165,250,0)" />
                 </linearGradient>
               </defs>
             </svg>
           </div>
        </div>
        
        <div className="flex-1 bg-white/5 backdrop-blur-md rounded-xl shadow-lg border border-white/10 p-5 flex flex-col items-center justify-center text-center relative group overflow-hidden">
           <div className="text-[10px] font-bold text-white/50 mb-4 tracking-widest uppercase absolute top-5 left-5">Device Split</div>
           <div className="relative w-28 h-28 mt-4 group-hover:scale-105 transition-transform duration-500">
             <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
               <circle cx="50" cy="50" r="40" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="12" />
               <motion.circle initial={{ strokeDashoffset: 251.2 }} whileInView={{ strokeDashoffset: 62.8 }} viewport={{ once:true }} transition={{ duration: 1.5, ease: "easeOut" }} cx="50" cy="50" r="40" fill="transparent" stroke="#A78BFA" strokeWidth="12" strokeDasharray="251.2" strokeLinecap="round" />
             </svg>
             <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-white tracking-tighter">75%</span>
                <span className="text-[8px] font-bold text-white/40">MOBILE</span>
             </div>
           </div>
        </div>
      </div>
      
      <div className="flex gap-5 h-[40%] relative z-10">
         {[
           { label: 'Avg Session', value: '04:12', trend: '+12s', arr: [30, 40, 35, 60, 50, 80, 70, 90] },
           { label: 'Bounce Rate', value: '32.4%', trend: '-2.1%', arr: [90, 80, 75, 60, 65, 50, 45, 30] },
           { label: 'Convers', value: '8.2%', trend: '+1.4%', arr: [10, 20, 15, 30, 40, 55, 65, 80] }
         ].map((metric, i) => (
           <div key={i} className="flex-1 bg-white/5 backdrop-blur-md rounded-xl shadow-lg border border-white/10 p-5 flex flex-col relative overflow-hidden group">
             <div className="text-[9px] font-bold text-white/50 tracking-widest uppercase relative z-10">{metric.label}</div>
             <div className="flex items-end gap-2 mt-1 relative z-10">
               <div className="text-2xl font-bold text-white">{metric.value}</div>
               <div className={`text-[10px] font-bold pb-1 ${i === 1 ? 'text-green-400' : 'text-green-400'}`}>{metric.trend}</div>
             </div>
             <div className="h-16 w-full flex items-end gap-1 px-1 mt-auto relative z-10">
               {metric.arr.map((h, j) => (
                 <motion.div initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once:true }} transition={{ delay: i*0.1 + j*0.05 }} key={j} className="flex-1 bg-white/20 rounded-t-[2px] group-hover:bg-white/40 transition-colors" />
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
              className="group relative col-span-1 md:col-span-2 row-span-2 overflow-hidden rounded-[32px] border border-black/10 bg-[#f8f9fa] p-10 hover:border-black/20"
            >
               <div className="absolute top-0 right-0 w-96 h-96 bg-black/5 blur-[100px] opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none" />
               <div className="relative z-10">
                  <h3 className="text-4xl font-bold text-black mb-4">Automate Everything</h3>
                  <p className="text-xl text-black/50 max-w-md">Eliminate repetitive tasks with intuitive, rule-based logic that works while you sleep.</p>
               </div>
               
               {/* Visual */}
               <div className="absolute -bottom-4 -right-4 w-[110%] md:w-[85%] h-[60%] bg-white rounded-tl-[32px] border border-black/10 shadow-2xl p-6 flex flex-col gap-6 transform-gpu group-hover:-translate-y-4 group-hover:-translate-x-4 transition-transform duration-700 ease-out">
                  {/* Workflow Nodes */}
                  <div className="flex gap-4 items-center mt-2">
                    <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-black/5">⚡</div>
                    <div className="h-2 w-16 bg-black/5 rounded-full relative overflow-hidden">
                       <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-black/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                    </div>
                    <div className="w-14 h-14 bg-white text-black rounded-2xl border border-black/10 shadow-sm flex items-center justify-center text-sm font-bold">1d</div>
                    <div className="h-2 w-16 bg-black/5 rounded-full relative overflow-hidden">
                       <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-black/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite_0.5s]" />
                    </div>
                    <div className="w-14 h-14 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-black/5">✉️</div>
                  </div>

                  {/* Activity Lines */}
                  <div className="mt-4 flex flex-col gap-3">
                    <div className="h-20 w-full bg-[#fcfcfc] rounded-xl border border-black/5 p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                         <Image src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User" width={40} height={40} className="rounded-full object-cover" />
                         <div>
                           <div className="text-sm font-bold text-black mb-0.5">John Doe added a new lead</div>
                           <div className="text-[10px] text-black/50">Via Zapier Integration • 2 mins ago</div>
                         </div>
                      </div>
                      <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-bold flex items-center gap-1.5 whitespace-nowrap">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Active
                      </div>
                    </div>
                    <div className="h-20 w-full bg-[#fcfcfc] rounded-xl border border-black/5 p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl text-blue-500">📄</div>
                         <div>
                           <div className="text-sm font-bold text-black mb-0.5">Invoice #1024 Generated</div>
                           <div className="text-[10px] text-black/50">Sent to Acme Corp • 15 mins ago</div>
                         </div>
                      </div>
                      <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold flex items-center gap-1.5 whitespace-nowrap">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-[spin_3s_linear_infinite]" />
                        Processing
                      </div>
                    </div>
                  </div>
               </div>
            </motion.div>

            {/* Cell 2: Visual Pipeline */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="group relative col-span-1 row-span-1 overflow-hidden rounded-[32px] border border-black/10 bg-[#f8f9fa] p-8 flex flex-col hover:border-black/20"
            >
               <div className="relative z-10 mb-6">
                  <h3 className="text-2xl font-bold text-black mb-2">Visual Pipeline</h3>
                  <p className="text-sm text-black/50">Drag, drop, and close deals effortlessly.</p>
               </div>
               {/* Visual */}
               <div className="flex-1 w-full relative">
                  <div className="absolute inset-x-0 bottom-[-30%] h-[140%] bg-white rounded-t-xl border border-black/10 shadow-xl p-3 flex gap-2 transform-gpu group-hover:-translate-y-2 transition-transform duration-500 overflow-hidden">
                     {/* Column 1: Leads */}
                     <div className="flex-1 bg-gray-50 rounded-lg p-2 flex flex-col gap-2">
                        <div className="flex justify-between items-center px-1 mb-1">
                          <div className="text-[10px] font-bold text-black/70">New Leads</div>
                          <div className="text-[9px] bg-black/10 px-1.5 rounded-full font-bold">3</div>
                        </div>
                        <div className="bg-white p-2 rounded-md shadow-sm border border-black/5 hover:border-blue-500 cursor-pointer transition-colors">
                           <div className="flex justify-between items-start mb-2">
                             <div className="text-[11px] font-bold text-black leading-tight">Spotify Redesign</div>
                             <Image src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Avatar" width={16} height={16} className="rounded-full" />
                           </div>
                           <div className="text-[9px] text-black/50 mb-2">Tech Startup</div>
                           <div className="flex justify-between items-center">
                              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 rounded">High Priority</span>
                              <span className="text-[10px] font-mono text-black/40">$12k</span>
                           </div>
                        </div>
                        <div className="bg-white p-2 rounded-md shadow-sm border border-black/5 hover:border-blue-500 cursor-pointer transition-colors">
                           <div className="flex justify-between items-start mb-2">
                             <div className="text-[11px] font-bold text-black leading-tight">Nike Campaign</div>
                             <Image src="https://i.pravatar.cc/150?u=a04258114e29026702d" alt="Avatar" width={16} height={16} className="rounded-full" />
                           </div>
                           <div className="text-[9px] text-black/50 mb-2">Retail Enterprise</div>
                           <div className="flex justify-between items-center">
                              <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-1.5 rounded">Medium</span>
                              <span className="text-[10px] font-mono text-black/40">$45k</span>
                           </div>
                        </div>
                     </div>
                     {/* Column 2: In Progress */}
                     <div className="flex-1 bg-gray-50 rounded-lg p-2 flex flex-col gap-2 border-dashed border-2 border-transparent hover:border-blue-300 transition-colors">
                        <div className="flex justify-between items-center px-1 mb-1">
                          <div className="text-[10px] font-bold text-black/70 decoration-blue-500 decoration-2 underline underline-offset-4">In Progress</div>
                          <div className="text-[9px] bg-black/10 px-1.5 rounded-full font-bold">1</div>
                        </div>
                        <div className="bg-white p-2 rounded-md shadow-sm border border-black/5 hover:border-blue-500 cursor-pointer transition-colors transform rotate-1">
                           <div className="flex justify-between items-start mb-2">
                             <div className="text-[11px] font-bold text-black leading-tight">Apple AR App</div>
                             <div className="flex -space-x-1">
                                <Image src="https://i.pravatar.cc/150?u=a048581f4e29026701d" alt="Avatar" width={16} height={16} className="rounded-full border border-white" />
                                <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center text-[7px] text-white border border-white">+2</div>
                             </div>
                           </div>
                           <div className="text-[9px] text-black/50 mb-2">Internal Tooling</div>
                           <div className="w-full bg-gray-200 rounded-full h-1 mt-1 mb-1">
                             <div className="bg-blue-600 h-1 rounded-full" style={{ width: '45%' }}></div>
                           </div>
                           <div className="flex justify-between items-center mt-2">
                              <span className="text-[10px] font-bold text-black bg-gray-100 px-1.5 rounded">Design Phase</span>
                              <span className="text-[10px] font-mono text-black/40">$120k</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>

            {/* Cell 3: Smart Reporting */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="group relative col-span-1 row-span-1 overflow-hidden rounded-[32px] border border-black/10 bg-[#f8f9fa] p-8 flex flex-col hover:border-black/20"
            >
               <div className="relative z-10 mb-6">
                  <h3 className="text-2xl font-bold text-black mb-2">Smart Reporting</h3>
                  <p className="text-sm text-black/50">Data converted into actionable insights.</p>
               </div>
               {/* Visual */}
               <div className="flex-1 w-full relative">
                  <div className="absolute inset-x-0 bottom-[-20%] h-[130%] bg-white rounded-t-xl border border-black/10 shadow-xl p-4 flex flex-col transform-gpu group-hover:-translate-y-2 transition-transform duration-500">
                     <div className="flex justify-between items-end mb-4">
                        <div className="text-xl font-bold">$42K</div>
                        <div className="text-[10px] text-green-500 font-bold">+12%</div>
                     </div>
                     <div className="flex-1 flex items-end gap-1.5 relative">
                        {[30, 45, 25, 60, 40, 75, 55, 80].map((h, i) => (
                          <div key={i} className="flex-1 bg-black/10 rounded-t-sm group-hover:bg-black/80 transition-colors duration-500 delay-[i*50]" style={{ height: `${h}%` }} />
                        ))}
                     </div>
                  </div>
               </div>
            </motion.div>

            {/* Cell 4: Secure Access */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="group relative col-span-1 md:col-span-3 row-span-1 overflow-hidden rounded-[32px] border border-black/10 bg-[#f8f9fa] p-10 flex flex-col md:flex-row items-center justify-between hover:border-black/20"
            >
               <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-black/5 blur-[80px] opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none" />
               <div className="relative z-10 md:w-1/2 mb-8 md:mb-0">
                  <h3 className="text-3xl font-bold text-black mb-2">Secure Role-Based Access</h3>
                  <p className="text-lg text-black/50">Granular permissions to keep your data protected at all times.</p>
               </div>
               
               {/* Visual */}
               <div className="relative z-10 md:w-1/2 flex justify-end">
                  <div className="w-[120%] md:w-[80%] bg-white rounded-2xl border border-black/10 shadow-xl p-5 flex flex-col gap-4 transform-gpu group-hover:scale-105 transition-transform duration-500 origin-right">
                     {/* Admin User */}
                     <div className="flex items-center justify-between pb-4 border-b border-black/5">
                        <div className="flex items-center gap-3">
                           <Image src="https://i.pravatar.cc/150?img=11" alt="Admin" width={40} height={40} className="rounded-full shadow-sm" />
                           <div>
                              <div className="text-sm font-bold text-black leading-none mb-1">Sarah Jenkins</div>
                              <div className="text-xs text-black/50">sarah@company.com</div>
                           </div>
                        </div>
                        <div className="px-3 py-1 bg-black text-white text-[10px] font-bold rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.1)]">Admin</div>
                     </div>
                     {/* Editor User */}
                     <div className="flex items-center justify-between pb-4 border-b border-black/5">
                        <div className="flex items-center gap-3">
                           <Image src="https://i.pravatar.cc/150?img=12" alt="Editor" width={40} height={40} className="rounded-full shadow-sm" />
                           <div>
                              <div className="text-sm font-bold text-black leading-none mb-1">Michael Chang</div>
                              <div className="text-xs text-black/50">michael@company.com</div>
                           </div>
                        </div>
                        <div className="px-3 py-1 bg-blue-50 text-blue-600 border border-blue-100 text-[10px] font-bold rounded-full">Editor</div>
                     </div>
                     {/* Viewer User */}
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                           <Image src="https://i.pravatar.cc/150?img=9" alt="Viewer" width={40} height={40} className="rounded-full opacity-70" />
                           <div>
                              <div className="text-sm font-bold text-black leading-none mb-1 opacity-70">Emily Davis</div>
                              <div className="text-xs text-black/40">emily@freelance.org</div>
                           </div>
                        </div>
                        <div className="px-3 py-1 bg-gray-100 text-gray-500 border border-gray-200 text-[10px] font-bold rounded-full">Viewer</div>
                     </div>
                     <div className="mt-2 text-center">
                        <button className="text-[10px] font-bold text-black/40 hover:text-black transition-colors w-full py-1 border border-dashed border-black/10 rounded-md bg-gray-50 hover:bg-gray-100">+ Add New Member</button>
                     </div>
                  </div>
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
