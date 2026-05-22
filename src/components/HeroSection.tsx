"use client";

import { motion } from "framer-motion";
import { FiStar, FiArrowRight, FiLock } from "react-icons/fi";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number],
      delay: custom * 0.2,
    },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[100vh] w-full flex items-center justify-center pt-24 lg:pt-32 pb-16 px-6 sm:px-12 overflow-hidden bg-white">
      {/* Subtle Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] z-0" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#007BFF] opacity-[0.08] blur-[100px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-10 lg:pt-0">

        {/* Left Column: Copy & CTR Elements */}
        <div className="flex flex-col items-start text-left w-full max-w-2xl mx-auto lg:mx-0">

          {/* Trust Badge / Eyebrow */}
          <motion.div
            custom={0} initial="hidden" animate="visible" variants={fadeInUp}
            className="mb-8 flex items-center gap-3 rounded-full border border-[#0A2540]/10 bg-[#F8FAFC] px-4 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#0A2540] shadow-sm transform transition hover:scale-105"
          >
            <div className="flex gap-0.5 text-[#F59E0B]">
              <FiStar className="fill-current w-3.5 h-3.5" />
              <FiStar className="fill-current w-3.5 h-3.5" />
              <FiStar className="fill-current w-3.5 h-3.5" />
              <FiStar className="fill-current w-3.5 h-3.5" />
              <FiStar className="fill-current w-3.5 h-3.5" />
            </div>
            <span className="border-l border-[#0A2540]/20 pl-3">Rated 4.9/5 by 100+ Brands</span>
          </motion.div>

          {/* SEO-Optimized H1 */}
          <motion.h1
            custom={1} initial="hidden" animate="visible" variants={fadeInUp}
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.08] tracking-tight font-heading text-[#0A2540]"
          >
            We build scalable <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#0ea5e9]">digital products</span>
            <br className="hidden lg:block" /> that drive revenue.
          </motion.h1>

          {/* High-Converting Subheading */}
          <motion.p
            custom={2} initial="hidden" animate="visible" variants={fadeInUp}
            className="mt-6 text-base sm:text-lg text-[#0A2540]/70 leading-relaxed font-medium max-w-xl"
          >
            Setzet is a premium technology agency. We engineer blazing-fast websites, scalable custom software, and digital experiences that turn traffic into fiercely loyal customers.
          </motion.p>

          {/* Dual CTA for High CTR */}
          <motion.div
            custom={3} initial="hidden" animate="visible" variants={fadeInUp}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="group w-full sm:w-auto overflow-hidden rounded-full bg-[#0A2540] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all shadow-[0_10px_30px_rgba(10,37,64,0.3)] hover:scale-[1.02] hover:bg-[#007BFF] hover:shadow-[0_10px_40px_rgba(0,123,255,0.4)] flex items-center justify-center gap-3"
            >
              Start Your Project <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="/work"
              className="group w-full sm:w-auto rounded-full border border-[#0A2540]/15 bg-transparent px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0A2540] transition-all hover:bg-[#F8FAFC] hover:border-[#007BFF]/30 hover:text-[#007BFF] shadow-sm flex items-center justify-center gap-3"
            >
              View Case Studies
            </a>
          </motion.div>

          {/* Social Proof Integration */}
          <motion.div
            custom={4} initial="hidden" animate="visible" variants={fadeInUp}
            className="mt-14 pt-8 border-t border-[#0A2540]/10 w-full hidden sm:block"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#0A2540]/40 mb-5">Trusted by forward-thinking brands</p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              {[
                { name: "Narayana Agri", tag: "Agriculture" },
                { name: "Uncle Makhana", tag: "B2B Brand" },
                { name: "Yastudy", tag: "Education" },
                { name: "Zenfora", tag: "FMCG" },
                { name: "Pure Makhana", tag: "D2C Brand" },
              ].map((brand) => (
                <div key={brand.name} className="flex flex-col items-start shrink-0 group cursor-default">
                  <span className="text-lg md:text-xl font-extrabold font-heading text-[#0A2540]/40 group-hover:text-[#0A2540]/80 tracking-tight transition-colors duration-300 whitespace-nowrap select-none">
                    {brand.name}
                  </span>
                  <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#007BFF]/0 group-hover:text-[#007BFF]/70 transition-colors duration-300 -mt-0.5">
                    {brand.tag}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual Trust & Video Embed */}
        <motion.div
          custom={2} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
          className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0"
        >
          {/* Decorative Element Behind Video */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#007BFF]/20 to-transparent rounded-[32px] sm:rounded-[40px] rotate-3 scale-105 z-0" />
          <div className="absolute inset-0 bg-gradient-to-bl from-[#10B981]/20 to-transparent rounded-[32px] sm:rounded-[40px] -rotate-3 scale-105 z-0" />

          {/* Main Video Container / Mockup */}
          <div className="relative z-10 w-full h-full sm:max-h-[500px] rounded-[24px] sm:rounded-[32px] bg-white border border-[#0A2540]/10 shadow-[0_20px_50px_rgba(10,37,64,0.1)] overflow-hidden flex flex-col group transition-transform duration-700 hover:-translate-y-2">
            {/* Browser/OS Header */}
            <div className="w-full h-10 sm:h-12 bg-[#F8FAFC] border-b border-[#0A2540]/5 flex items-center px-4 gap-2 shrink-0">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#EF4444]" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#F59E0B]" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#10B981]" />
              <div className="ml-4 flex-1 h-6 sm:h-7 bg-white rounded-md border border-[#0A2540]/5 flex items-center px-3 justify-center">
                <span className="text-[9px] sm:text-[10px] font-mono text-[#0A2540]/40 flex items-center gap-2"><FiLock className="w-3 h-3" /> setzet.com</span>
              </div>
            </div>
            {/* Video Player */}
            <div className="relative flex-1 bg-[#F4F6F8]">
              <video
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="/videos/hero/hero1.mp4?v=20260218" type="video/mp4" />
              </video>
              {/* Play button overlay for aesthetics */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md border border-white/50 flex items-center justify-center pl-1 shadow-xl transition-transform duration-500 group-hover:scale-110">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z" /></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Performance Card */}
          <div className="absolute -left-4 sm:-left-10 bottom-6 sm:bottom-10 z-20 bg-white p-3 sm:p-5 rounded-2xl shadow-2xl border border-[#0A2540]/5 animate-bounce-slow flex items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#007BFF]/10 flex items-center justify-center text-[#007BFF]">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </div>
            <div>
              <p className="text-[9px] sm:text-[10px] font-bold text-[#0A2540]/50 uppercase tracking-widest leading-none mb-1">Conversion Lift</p>
              <p className="text-lg sm:text-xl font-black text-[#0A2540] leading-none">+ 214%</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
