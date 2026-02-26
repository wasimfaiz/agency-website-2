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
  "/images/mobile-app-development.png",
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
    <div ref={containerRef} className="bg-[#FCFCFC] text-black selection:bg-black/20">
      <Navbar forceDarkAtTop={true} />
      
      {/* 1. HERO - Parallax & Depth */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0 opacity-20">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#ccc_0%,_transparent_50%)]" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
            <motion.h1 
                style={{ y: y1 }}
                className="font-heading text-4xl font-bold uppercase leading-[0.9] tracking-tighter md:text-7xl lg:text-[9vw] xl:text-[10rem] text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 will-change-transform"
            >
                Unconventional
            </motion.h1>
            <motion.p
                style={{ y: y2 }}
                className="font-heading text-4xl font-bold uppercase leading-[0.9] tracking-tighter text-black md:text-7xl lg:text-[9vw] xl:text-[10rem] will-change-transform"
            >
                Reality
            </motion.p>
        </div>

        {/* Floating Abstract Element */}
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute right-[10%] top-[20%] h-64 w-64 rounded-full border border-black/10 opacity-30 blur-xl md:h-96 md:w-96"
        />
      </section>

      {/* 2. THE VISION - Sticky Scroll Split */}
      <section className="relative mx-auto flex max-w-7xl flex-col gap-20 px-6 py-20 md:flex-row md:py-40">
        <div className="w-full md:w-1/2">
            <div className="sticky top-32">
                <h2 className="mb-8 font-heading text-4xl font-bold md:text-6xl">We don't just build websites.</h2>
                <p className="text-xl text-black/50">We engineer premium digital experiences.</p>
                <div className="mt-12 h-px w-24 bg-black/20" />
            </div>
        </div>
        <div className="flex w-full flex-col gap-20 md:w-1/2 md:pt-40">
            <p className="text-2xl leading-relaxed text-black/80 md:text-3xl">
                SetZet was born from a simple belief: <span className="text-black font-bold">The internet is noisy.</span> As a leading creative digital agency, we know that to stand out, you don't need to shout. You need to resonate.
            </p>
            <p className="text-2xl leading-relaxed text-black/80 md:text-3xl">
                We blend high-end UI/UX design with rock-solid custom web development. Our process is a precise mix of brand psychology, strategic marketing, and modern frontend coding, distilled into powerful digital products.
            </p>
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-[4/5] w-full flex-shrink-0 overflow-hidden rounded-2xl grayscale transition-all duration-500 hover:grayscale-0">
                <Image src="/images/about_photo.png" alt="SetZet Creative Agency Team" fill className="object-cover object-top" />
            </div>
        </div>
      </section>

      {/* 2.5. THE PROCESS - Interactive List */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-32">
        <h2 className="mb-20 font-heading text-sm uppercase tracking-[0.5em] text-black/40">The Blueprint</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
                <div key={i} className="group relative border-l border-black/10 p-6 transition-colors hover:bg-black/5 hover:border-black/40">
                    <span className="block font-mono text-xs text-black/30 mb-4">{step.step}</span>
                    <h3 className="mb-4 text-2xl font-bold uppercase text-black group-hover:text-black transition-colors">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-black/50 group-hover:text-black/80 transition-colors">
                        {step.desc}
                    </p>
                </div>
            ))}
        </div>
      </section>

      {/* 2.6. IMPACT BY NUMBERS */}
      <section className="border-y border-black/10 bg-black/5 py-20 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-12 px-6 md:grid-cols-4">
            {stats.map((stat, i) => (
                <div key={i} className="text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        className="font-heading text-4xl font-bold md:text-6xl"
                    >
                        {stat.value}
                    </motion.div>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-black/40">{stat.label}</p>
                </div>
            ))}
        </div>
      </section>

      {/* 3. INFINITE SCROLL STRIP - Visual Impact */}
      <section className="py-20 overflow-hidden bg-black/5">
        <div className="mb-12 px-6 text-center">
             <span className="text-xs uppercase tracking-[0.4em] text-black/40">Our Aesthetic</span>
        </div>
        <div className="flex w-full -rotate-2 scale-110 overflow-hidden mix-blend-darken">
             <motion.div 
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                className="flex gap-8"
             >
                {[...galleryImages, ...galleryImages].map((src, i) => (
                    <div key={`${i}-${src}`} className="relative h-[40vh] w-[70vw] sm:w-[45vw] shrink-0 overflow-hidden rounded-lg md:h-[60vh] md:w-[25vw]">
                        <Image src={src} fill alt="Gallery" className="object-cover" />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
                ))}
             </motion.div>
        </div>
      </section>

      {/* 4. VALUES - Hover Accordion Interaction */}
      <section className="mx-auto max-w-7xl px-6 py-40">
        <h2 className="mb-20 font-heading text-sm uppercase tracking-[0.5em] text-black/40">Our Core DNA</h2>
        <div className="flex flex-col border-t border-black/10">
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
        <div className="group relative flex cursor-pointer flex-col justify-between border-b border-black/10 py-12 transition-all hover:bg-black/5 md:flex-row md:items-center md:px-10">
            <span className="mb-4 font-mono text-xs text-black/20 md:mb-0">0{index + 1}</span>
            <h3 className="text-4xl font-bold uppercase transition-all group-hover:pl-4 md:text-6xl">{title}</h3>
            <p className="mt-4 max-w-md text-black/40 transition-colors group-hover:text-black md:mt-0 md:text-right">
                {desc}
            </p>
        </div>
    );
}
