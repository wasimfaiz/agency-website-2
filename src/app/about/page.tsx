"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Reusing existing assets
const galleryImages = [
  "/images/aesthetic-img3.png",
  "/images/aesthetic_ui_mockup.png", 
  "/mobile-app-development.png",
  "/images/aesthetic-img2.png",
  "/images/aesthetic-img4.png",
];

const values = [
  { title: "Innovation", desc: "We pioneer modern web design and development. We don't just follow industry standards—we set them." },
  { title: "Precision", desc: "From UI/UX design to custom web development, every pixel and line of code is meticulously crafted." },
  { title: "Empathy", desc: "We create user-centric digital experiences that connect with audiences on a profound, human level." },
  { title: "Impact", desc: "Delivering high-performance digital products that drive growth and leave a lasting impression." },
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "Comprehensive brand analysis and UX research. We uncover your core objectives before writing a single line of code." },
  { step: "02", title: "Strategy", desc: "Data-driven digital strategy. We chart a calculated roadmap to ensure your brand dominates its online niche." },
  { step: "03", title: "Creation", desc: "The forge of custom web development. Where award-winning frontend design meets robust backend engineering." },
  { step: "04", title: "Launch", desc: "Seamless deployment and SEO optimization. We ensure your digital debut is flawless, fast, and built to scale." },
];

const stats = [
  { label: "Years of Excellence", value: "4+" },
  { label: "Projects Delivered", value: "50+" },
  { label: "Industry Awards", value: "12" },
  { label: "Client Satisfaction", value: "100%" },
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax for Hero
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <div ref={containerRef} className="bg-[#F4F6F8] text-[#0A2540] selection:bg-[#007BFF]/20 selection:text-[#0A2540]">
      <Navbar forceDarkAtTop={true} />
      
      {/* 1. HERO - Parallax & Depth */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] bg-[#007BFF]/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
            <motion.h1 
                style={{ y: y1 }}
                className="font-heading text-4xl font-extrabold uppercase leading-[0.9] tracking-tighter md:text-7xl lg:text-[9vw] xl:text-[10rem] text-transparent bg-clip-text bg-gradient-to-b from-[#007BFF] to-[#0A2540] will-change-transform drop-shadow-sm"
            >
                Unconventional
            </motion.h1>
            <motion.p
                style={{ y: y2 }}
                className="font-heading text-4xl font-extrabold uppercase leading-[0.9] tracking-tighter text-[#0A2540] md:text-7xl lg:text-[9vw] xl:text-[10rem] will-change-transform"
            >
                Reality
            </motion.p>
        </div>

        {/* Floating Abstract Element */}
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute right-[10%] top-[20%] h-64 w-64 rounded-full border border-[#0A2540]/10 opacity-30 blur-xl md:h-96 md:w-96"
        />
      </section>

      {/* 2. THE VISION - Sticky Scroll Split */}
      <section className="relative mx-auto flex max-w-7xl flex-col gap-20 px-6 py-20 md:flex-row md:py-40">
        <div className="w-full md:w-1/2">
            <div className="sticky top-32">
                <h2 className="mb-8 font-heading text-4xl font-extrabold md:text-6xl text-[#0A2540]">We don't just build websites.</h2>
                <p className="text-xl text-[#0A2540]/60 font-medium">We engineer premium digital experiences.</p>
                <div className="mt-12 h-px w-24 bg-[#0A2540]/20" />
            </div>
        </div>
        <div className="flex w-full flex-col gap-20 md:w-1/2 md:pt-40">
            <p className="text-2xl leading-relaxed text-[#0A2540]/80 md:text-3xl font-medium">
                Setzet was born from a simple belief: <span className="text-[#007BFF] font-extrabold">The internet is noisy.</span> As a leading enterprise digital agency, we know that to stand out, you don't need to shout. You need to resonate.
            </p>
            <p className="text-2xl leading-relaxed text-[#0A2540]/80 md:text-3xl font-medium">
                We blend high-end UI/UX design with rock-solid custom web development. Our process is a precise mix of brand psychology, strategic marketing, and modern frontend coding, distilled into powerful digital products.
            </p>
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-[4/5] w-full flex-shrink-0 overflow-hidden rounded-3xl border border-[#0A2540]/10 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-[#007BFF]/30 group">
                <Image src="/about_photo.png" alt="Setzet Digital Agency Team" fill className="object-cover object-top grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
        </div>
      </section>

      {/* 2.5. THE PROCESS - Interactive List */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-32">
        <h2 className="mb-20 font-heading text-sm uppercase tracking-[0.5em] text-[#0A2540]/40 font-bold">The Blueprint</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
                <div key={i} className="group relative border-l-2 border-[#0A2540]/10 p-6 transition-all hover:bg-white hover:border-[#007BFF] hover:shadow-sm hover:-translate-y-1 rounded-r-2xl">
                    <span className="block font-mono text-xs font-bold text-[#007BFF] mb-4 bg-[#007BFF]/10 inline-block px-2 py-1 rounded-md">{step.step}</span>
                    <h3 className="mb-4 text-2xl font-extrabold uppercase text-[#0A2540]">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-[#0A2540]/70 font-medium">
                        {step.desc}
                    </p>
                </div>
            ))}
        </div>
      </section>

      {/* 2.6. IMPACT BY NUMBERS */}
      <section className="border-y border-[#0A2540]/10 bg-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,123,255,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-12 px-6 md:grid-cols-4 relative z-10">
            {stats.map((stat, i) => (
                <div key={i} className="text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        className="font-heading text-4xl font-extrabold md:text-6xl text-[#007BFF]"
                    >
                        {stat.value}
                    </motion.div>
                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0A2540]/60">{stat.label}</p>
                </div>
            ))}
        </div>
      </section>

      {/* 3. INFINITE SCROLL STRIP - Visual Impact */}
      <section className="py-20 overflow-hidden bg-[#0A2540]">
        <div className="mb-12 px-6 text-center">
             <span className="text-xs font-bold uppercase tracking-[0.4em] text-white/50">Our Aesthetic</span>
        </div>
        <div className="flex w-full -rotate-2 scale-110 overflow-hidden opacity-90">
             <motion.div 
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                className="flex gap-8"
             >
                {[...galleryImages, ...galleryImages].map((src, i) => (
                    <div key={`${i}-${src}`} className="relative h-[40vh] w-[70vw] sm:w-[45vw] shrink-0 overflow-hidden rounded-2xl md:h-[60vh] md:w-[25vw] border border-white/10 shadow-xl">
                        <Image src={src} fill alt="Gallery" className="object-cover" />
                        <div className="absolute inset-0 bg-[#007BFF]/20 mix-blend-overlay" />
                    </div>
                ))}
             </motion.div>
        </div>
      </section>

      {/* 4. VALUES - Hover Accordion Interaction */}
      <section className="mx-auto max-w-7xl px-6 py-40">
        <h2 className="mb-20 font-heading text-sm font-bold uppercase tracking-[0.5em] text-[#0A2540]/40">Our Core DNA</h2>
        <div className="flex flex-col border-t border-[#0A2540]/10">
            {values.map((val, i) => (
                <ValueItem key={i} title={val.title} desc={val.desc} index={i} />
            ))}
        </div>
      </section>

      {/* 5. FOOTER */}
      <Footer />
    </div>
  );
}

function ValueItem({ title, desc, index }: { title: string, desc: string, index: number }) {
    return (
        <div className="group relative flex cursor-pointer flex-col justify-between border-b border-[#0A2540]/10 py-12 transition-all hover:bg-white hover:shadow-sm md:flex-row md:items-center md:px-10 rounded-xl hover:-translate-y-1 my-1">
            <span className="mb-4 font-mono text-xs font-bold text-[#007BFF] md:mb-0 bg-[#007BFF]/10 px-2 py-1 rounded">0{index + 1}</span>
            <h3 className="text-4xl font-extrabold uppercase transition-all group-hover:pl-4 md:text-6xl text-[#0A2540] group-hover:text-[#007BFF]">{title}</h3>
            <p className="mt-4 max-w-md text-[#0A2540]/60 transition-colors group-hover:text-[#0A2540] md:mt-0 md:text-right font-medium">
                {desc}
            </p>
        </div>
    );
}
