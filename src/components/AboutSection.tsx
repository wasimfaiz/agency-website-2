"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
    BsArrowRight,
    BsStars,
    BsLayers,
    BsLightningCharge,
    BsGraphUpArrow
} from "react-icons/bs";

const chapters = [
    {
        id: "01",
        title: "Strategic Website Planning & Brand Positioning",
        description: "We start with research into your business, audience, and growth goals. This gives your website sharp positioning, clear messaging, and a strong foundation for long-term results.",
        icon: <BsStars className="relative z-20 mb-4 text-2xl text-[#007BFF] transition-colors duration-500 group-hover:text-[#007BFF]" />,
    },
    {
        id: "02",
        title: "Conversion-Focused UI/UX & Website Design",
        description: "We design user-centric interfaces with clear hierarchy and seamless flows. Each design decision is made to build trust, improve engagement, and increase conversions.",
        icon: <BsLayers className="relative z-20 mb-4 text-2xl text-[#007BFF] transition-colors duration-500 group-hover:text-[#007BFF]" />,
    },
    {
        id: "03",
        title: "High-Performance & Scalable Web Development",
        description: "We build fast, secure, and SEO-ready websites and SaaS platforms on modern stacks. Everything is engineered for performance, scale, and easy iteration.",
        icon: <BsLightningCharge className="relative z-20 mb-4 text-2xl text-[#007BFF] transition-colors duration-500 group-hover:text-[#007BFF]" />,
    },
    {
        id: "04",
        title: "Continuous Optimization & Growth Scaling",
        description: "After launch, we monitor behavior and performance, then optimize continuously. Through tuning, SEO improvements, and feature updates, your product keeps improving as you grow.",
        icon: <BsGraphUpArrow className="relative z-20 mb-4 text-2xl text-[#007BFF] transition-colors duration-500 group-hover:text-[#007BFF]" />,
    },
];

export default function AboutSection() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

    return (
        <section
            ref={targetRef}
            id="about"
            className="relative h-[260vh] bg-[#F4F6F8] text-[#0A2540]"
        >
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                <motion.div
                    style={{ x }}
                    className="flex gap-10 pl-4 will-change-transform sm:pl-16 lg:pl-24"
                >
                    <div
                        className="group relative h-[70vh] w-[85vw] shrink-0 overflow-hidden rounded-[40px] border border-[#0A2540]/10 bg-[#0A2540] p-8 shadow-lg sm:w-[600px] sm:p-12 md:w-[800px] lg:w-[900px]"
                        data-animate="about"
                    >
                        <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
                            <Image
                                src="/about_photo.png"
                                alt="Setzet team"
                                fill
                                className="object-cover object-top opacity-100"
                                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 800px, 900px"
                            />
                        </div>

                        <div className="absolute inset-0 z-10 bg-black/60 transition-opacity duration-500 group-hover:opacity-50" />

                        <div className="absolute inset-0 z-20 opacity-0 transition-all duration-500 group-hover:bg-white/5 group-hover:opacity-100 group-hover:backdrop-blur-[6px]" />

                        <div className="relative z-30 flex h-full flex-col justify-between text-white">
                            <div>
                                <p className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/70">
                                    <span className="h-px w-8 bg-white/40"></span>
                                    About Setzet
                                </p>
                                <h2 className="mt-8 text-4xl font-semibold leading-[1.1] tracking-tight drop-shadow-sm sm:text-5xl md:text-6xl">
                                    We Design for Trust. <br />
                                    <span className="text-white/75">We Build for Growth.</span>
                                </h2>
                                <div className="mt-8 flex max-w-md flex-col gap-4">
                                    <p className="text-sm leading-relaxed text-white/80 drop-shadow-sm sm:text-base md:text-lg">
                                        Setzet is a strategy-led web agency building high-performance websites and scalable digital products.
                                    </p>
                                    <p className="text-sm leading-relaxed text-white/80 drop-shadow-sm sm:text-base md:text-lg">
                                        From custom websites to SaaS and CRM systems, we help teams launch faster, convert better, and scale with confidence.
                                    </p>
                                </div>
                                <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
                                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white/85">SEO-ready architecture</span>
                                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white/85">Conversion-focused UI</span>
                                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white/85">Fast launch cycles</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 opacity-80 transition-opacity duration-500 group-hover:opacity-100">
                                <div className="h-px w-full bg-gradient-to-r from-white/50 to-transparent" />
                                <span className="whitespace-nowrap text-[10px] uppercase tracking-widest text-white/60">Built for measurable outcomes</span>
                            </div>
                        </div>
                    </div>

                    {chapters.map((chapter) => (
                        <div
                            key={chapter.id}
                            className="group relative h-[70vh] w-[85vw] shrink-0 sm:w-[400px]"
                            data-animate="about"
                        >
                            <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[40px] border border-[#0A2540]/10 bg-white p-8 shadow-sm transition-all duration-500 hover:border-[#007BFF]/30 hover:shadow-[0_8px_30px_rgba(10,37,64,0.08)] sm:p-10">

                                <div className="relative z-20">
                                    {chapter.icon}
                                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#007BFF] transition-colors duration-500">
                                        Chapter {chapter.id}
                                    </p>
                                    <h3 className="mt-4 text-3xl font-extrabold leading-tight text-[#0A2540] transition-colors duration-500 group-hover:text-[#007BFF]">
                                        {chapter.title}
                                    </h3>
                                </div>

                                <div className="relative z-20">
                                    <div className="mb-8 h-px w-full bg-[#0A2540]/10 transition-colors duration-500 group-hover:bg-[#007BFF]/20" />
                                    <p className="text-base font-medium leading-7 text-[#0A2540]/70 transition-colors duration-500">
                                        {chapter.description}
                                    </p>
                                </div>
                            </div>

                            <span className="absolute -right-8 -top-10 z-30 select-none font-heading text-[10rem] font-bold leading-none text-[#0A2540]/[0.03] transition-colors duration-500 group-hover:text-[#007BFF]/10 sm:text-[12rem]">
                                {chapter.id}
                            </span>
                        </div>
                    ))}

                    <div
                        className="relative flex h-[70vh] w-[85vw] shrink-0 flex-col items-start justify-center overflow-hidden rounded-[40px] bg-[#0A2540] p-8 text-white sm:w-[400px] sm:p-12"
                        data-animate="about"
                    >
                        <div className="pointer-events-none absolute right-[-50%] top-[-50%] inset-0 rounded-full bg-[#007BFF]/10 blur-[80px]" />
                        <h3 className="relative z-10 font-heading text-4xl font-extrabold leading-tight">
                            Ready to write <br /> your chapter?
                        </h3>
                        <p className="relative z-10 mt-4 font-medium text-white/70">
                            Let&apos;s build something that matters.
                        </p>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className="group relative z-10 mt-10 inline-flex items-center gap-3 rounded-full bg-[#007BFF] px-8 py-4 text-sm font-bold text-white shadow-[0_8px_30px_rgba(0,123,255,0.3)] transition-all hover:bg-[#0056b3]"
                            href="#contact"
                        >
                            Start a Project
                            <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                        </motion.a>
                    </div>

                    <div className="w-10 shrink-0 sm:w-20" />

                </motion.div>
            </div>
        </section>
    );
}
