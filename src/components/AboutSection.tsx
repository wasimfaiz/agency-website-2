"use client";

import Image from "next/image";
import { motion } from "framer-motion";


export default function AboutSection() {
    return (
        <section id="about" className="bg-[#F4F6F8] text-[#0A2540] px-6 sm:px-12">
            {/* ── Section Header ── */}
            <div className="mx-auto w-full max-w-7xl pt-20 pb-6">
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-xs font-bold uppercase tracking-[0.35em] text-[#007BFF] bg-[#007BFF]/10 inline-block px-3 py-1 rounded-md"
                >
                    About Us
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0A2540] sm:text-4xl"
                >
                    We Design for Trust.{" "}
                    <span className="text-[#007BFF]">We Build for Growth.</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-4 max-w-xl text-base font-medium leading-7 text-[#0A2540]/70 border-l-4 border-[#007BFF] pl-4"
                >
                    Setzet is a strategy-led web agency building high-performance websites
                    and scalable digital products for ambitious brands worldwide.
                </motion.p>
            </div>

            {/* ── Intro / Photo Card ── */}
            <div className="mx-auto w-full max-w-7xl pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="group relative h-[420px] w-full overflow-hidden rounded-[32px] bg-[#0A2540] shadow-xl md:h-[520px]"
                >
                    <Image
                        src="/images/company-image1.png"
                        alt="Setzet team"
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-[#0A2540]/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 sm:p-12">
                        <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-[0.18em]">
                            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-white/90">SEO-ready architecture</span>
                            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-white/90">Conversion-focused UI</span>
                            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-white/90">Fast launch cycles</span>
                        </div>
                        <p className="mt-4 max-w-lg text-sm font-medium leading-relaxed text-white/80 sm:text-base">
                            From custom websites to SaaS and CRM systems, we help teams launch
                            faster, convert better, and scale with confidence.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
