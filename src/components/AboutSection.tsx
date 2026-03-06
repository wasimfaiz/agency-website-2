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
        description: "We start with in-depth research to understand your business model, target audience, and growth objectives. Our web development strategy ensures your website has a clear positioning, strong messaging, and a foundation built for long-term success.",
        icon: <BsStars className="text-2xl mb-4 text-[#007BFF] relative z-20 group-hover:text-[#007BFF] transition-colors duration-500" />,
        image: "/ui-design.png",
    },
    {
        id: "02",
        title: "Conversion-Focused UI/UX & Website Design",
        description: "Our team designs modern, user-centric interfaces with strong visual hierarchy and seamless user experience. Every design decision is focused on building trust, improving engagement, and increasing conversions.",
        icon: <BsLayers className="text-2xl mb-4 text-[#007BFF] relative z-20 group-hover:text-[#007BFF] transition-colors duration-500" />,
        image: "/web-design.png",
    },
    {
        id: "03",
        title: "High-Performance & Scalable Web Development",
        description: "We develop fast, secure, and SEO-optimized websites and SaaS platforms using modern technologies. Our websites are built for performance, scalability, and easy updates — ensuring sustainable business growth.",
        icon: <BsLightningCharge className="text-2xl mb-4 text-[#007BFF] relative z-20 group-hover:text-[#007BFF] transition-colors duration-500" />,
        image: "/web-development.jpg",
    },
    {
        id: "04",
        title: "Continuous Optimization & Growth Scaling",
        description: "After launch, we measure performance, analyze user behavior, and continuously optimize your website. Through performance tuning, SEO improvements, and feature upgrades, we help your digital product evolve as your business grows.",
        icon: <BsGraphUpArrow className="text-2xl mb-4 text-[#007BFF] relative z-20 group-hover:text-[#007BFF] transition-colors duration-500" />,
        image: "/crm.png",
    },
];

export default function AboutSection() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Transform scroll progress to horizontal movement
    // Adjust "-65%" based on the number of items and their width to ensure full scroll
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

    return (
        <section
            ref={targetRef}
            id="about"
            className="relative h-[300vh] bg-[#F4F6F8] text-[#0A2540]"
        >
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* Animated Horizontal Container */}
                <motion.div
                    style={{ x }}
                    className="flex gap-10 pl-4 sm:pl-16 lg:pl-24 will-change-transform"
                >
                    {/* INTRO CARD - Fixed width */}
                    <div
                        className="group relative h-[70vh] w-[85vw] shrink-0 overflow-hidden rounded-[40px] border border-[#0A2540]/10 bg-[#0A2540] p-8 sm:w-[600px] sm:p-12 md:w-[800px] lg:w-[900px] shadow-lg"
                        data-animate="about"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
                            <Image
                                src="/about_photo.png"
                                alt="Setzet team"
                                fill
                                className="object-cover object-top opacity-100"
                            />
                        </div>

                        {/* Dark Overlay (Always visible for readability) */}
                        <div className="absolute inset-0 z-10 bg-black/60 transition-opacity duration-500 group-hover:opacity-50" />

                        {/* Glassmorphism Hover Effect (Appears on hover) */}
                        <div className="absolute inset-0 z-20 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:backdrop-blur-[6px] group-hover:bg-white/5" />

                        {/* Content */}
                        <div className="relative z-30 flex h-full flex-col justify-between text-white">
                            <div>
                                <p className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/70">
                                    <span className="h-px w-8 bg-white/40"></span>
                                    About Setzet
                                </p>
                                <h2 className="mt-8 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl drop-shadow-sm">
                                    Building Digital Products <br />
                                    <span className="text-white/60">for Modern Brands.</span>
                                </h2>
                                <div className="mt-8 max-w-md flex flex-col gap-4">
                                    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/80 drop-shadow-sm">
                                        Setzet is a global web development agency building high-performance websites and scalable digital platforms for ambitious brands.
                                    </p>
                                    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/80 drop-shadow-sm">
                                        From custom website development to SaaS and CRM solutions, we help startups and enterprises create fast, secure, and growth-focused digital experiences that perform worldwide.
                                    </p>
                                </div>
                            </div>

                            {/* Optional Decorative Line or Tag at bottom */}
                            <div className="flex items-center gap-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                <div className="h-px w-full bg-gradient-to-r from-white/50 to-transparent" />
                                <span className="text-[10px] uppercase tracking-widest text-white/50 whitespace-nowrap">Read our story</span>
                            </div>
                        </div>
                    </div>

                    {/* CHAPTER CARDS - Loop through data */}
                    {chapters.map((chapter) => (
                        <div
                            key={chapter.id}
                            className="group relative h-[70vh] w-[85vw] shrink-0 sm:w-[400px]"
                            data-animate="about"
                        >
                            {/* Inner Container for Content (Clipped) */}
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
                                    <div className="mb-8 h-px w-full bg-[#0A2540]/10 group-hover:bg-[#007BFF]/20 transition-colors duration-500" />
                                    <p className="text-base leading-7 text-[#0A2540]/70 font-medium transition-colors duration-500">
                                        {chapter.description}
                                    </p>
                                </div>
                            </div>

                            {/* Large ID Number (Floating Outside) */}
                            <span className="absolute -right-8 -top-10 z-30 font-heading text-[10rem] font-bold leading-none text-[#0A2540]/[0.03] select-none transition-colors duration-500 group-hover:text-[#007BFF]/10 sm:text-[12rem]">
                                {chapter.id}
                            </span>
                        </div>
                    ))}

                    {/* END CARD / CTA */}
                    <div
                        className="flex h-[70vh] w-[85vw] shrink-0 flex-col items-start justify-center rounded-[40px] bg-[#0A2540] p-8 text-white sm:w-[400px] sm:p-12 relative overflow-hidden"
                        data-animate="about"
                    >
                        <div className="absolute inset-0 bg-[#007BFF]/10 blur-[80px] rounded-full top-[-50%] right-[-50%] pointer-events-none" />
                        <h3 className="text-4xl font-extrabold leading-tight font-heading relative z-10">
                            Ready to write <br /> your chapter?
                        </h3>
                        <p className="mt-4 text-white/70 font-medium relative z-10">
                            Let&apos;s build something that matters.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className="group relative z-10 mt-10 inline-flex items-center gap-3 rounded-full bg-[#007BFF] px-8 py-4 text-sm font-bold text-white shadow-[0_8px_30px_rgba(0,123,255,0.3)] transition-all hover:bg-[#0056b3]"
                        >
                            Start a Project
                            <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                        </motion.button>
                    </div>

                    {/* Spacer to ensure last card is fully visible */}
                    <div className="w-10 shrink-0 sm:w-20" />

                </motion.div>
            </div>
        </section>
    );
}
