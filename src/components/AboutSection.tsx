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
        title: "Strategy First",
        description: "We clarify your positioning, audience, and goals so the website has a sharp point of view.",
        icon: <BsStars className="text-2xl mb-4 text-black/60" />,
    },
    {
        id: "02",
        title: "Design With Intent",
        description: "Visual language, hierarchy, and interaction are crafted to earn trust and keep attention.",
        icon: <BsLayers className="text-2xl mb-4 text-black/60" />,
    },
    {
        id: "03",
        title: "Build for Momentum",
        description: "We ship fast, optimize performance, and set you up for easy updates and growth.",
        icon: <BsLightningCharge className="text-2xl mb-4 text-black/60" />,
    },
    {
        id: "04",
        title: "Refine and Evolve",
        description: "We measure, iterate, and improve so your site keeps getting sharper as your product grows.",
        icon: <BsGraphUpArrow className="text-2xl mb-4 text-black/60" />,
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
            className="relative h-[300vh] bg-white text-black"
        >
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* Animated Horizontal Container */}
                <motion.div
                    style={{ x }}
                    className="flex gap-10 pl-4 sm:pl-16 lg:pl-24"
                >
                    {/* INTRO CARD - Fixed width */}
                    <div
                        className="group relative h-[70vh] w-[85vw] shrink-0 overflow-hidden rounded-[40px] border border-black/5 bg-[#0a0a0a] p-8 sm:w-[600px] sm:p-12 md:w-[700px]"
                        data-animate="about"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
                            <Image
                                src="/about_photo.png"
                                alt="SetZet team"
                                fill
                                className="object-cover object-center opacity-80"
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
                                    About SetZet
                                </p>
                                <h2 className="mt-8 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl drop-shadow-sm">
                                    A story-first <br />
                                    <span className="text-white/60">studio.</span>
                                </h2>
                                <div className="mt-8 max-w-md">
                                    <p className="text-lg leading-relaxed text-white/80 drop-shadow-sm">
                                        We don&apos;t chase trends. We craft the narrative, then design the
                                        interface that makes it feel inevitable.
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
                            className="relative flex h-[70vh] w-[85vw] shrink-0 flex-col justify-between rounded-[40px] border border-black/5 bg-white p-8 shadow-sm transition-colors duration-500 hover:border-black/20 sm:w-[400px] sm:p-10"
                            data-animate="about"
                        >
                            {/* Large ID Number */}
                            <span className="absolute -right-4 -top-8 font-heading text-[12rem] font-bold leading-none text-black/[0.03] select-none">
                                {chapter.id}
                            </span>

                            <div className="relative z-10">
                                {chapter.icon}
                                <p className="text-xs uppercase tracking-[0.3em] text-black/40">
                                    Chapter {chapter.id}
                                </p>
                                <h3 className="mt-4 text-3xl font-semibold leading-tight">
                                    {chapter.title}
                                </h3>
                            </div>

                            <div className="relative z-10">
                                <div className="mb-8 h-px w-full bg-black/10" />
                                <p className="text-base leading-7 text-black/70">
                                    {chapter.description}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* END CARD / CTA */}
                    <div
                        className="flex h-[70vh] w-[85vw] shrink-0 flex-col items-start justify-center rounded-[40px] bg-black p-8 text-white sm:w-[400px] sm:p-12"
                        data-animate="about"
                    >
                        <h3 className="text-3xl font-semibold leading-tight">
                            Ready to write <br /> your chapter?
                        </h3>
                        <p className="mt-4 text-white/60">
                            Let&apos;s build something that matters.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black shadow-lg transition-shadow hover:shadow-xl"
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
