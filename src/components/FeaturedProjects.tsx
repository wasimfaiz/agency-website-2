"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const projects = [
    {
        title: "Northline Commerce",
        category: "E-commerce Rebrand",
        year: "2025",
        image: "/web-design.png",
        href: "#",
        summary:
            "Reframed a crowded catalog into a sharp storytelling storefront with a 41% uplift in product discovery.",
    },
    {
        title: "Pulseboard SaaS",
        category: "Product Experience",
        year: "2025",
        image: "/ui-design.png",
        href: "#",
        summary:
            "Designed a dashboard system that reduced onboarding friction and turned complex workflows into clear moments.",
    },
    {
        title: "Atlas Launch Site",
        category: "Web Development",
        year: "2024",
        image: "/web-development.jpg",
        href: "#",
        summary:
            "Built a fast, motion-led marketing site with CMS flexibility and production-grade performance from day one.",
    },
    {
        title: "Orbit Mobile Suite",
        category: "App Product Design",
        year: "2024",
        image: "/mobile-app-development.png",
        href: "#",
        summary:
            "Designed and shipped a modular mobile experience with clearer navigation and significantly faster task completion.",
    },
];

export default function FeaturedProjects() {
    return (
        <section
            id="work"
            className="bg-gray-100"
        >
            <div className="mx-auto w-full max-w-6xl px-4 pt-10 sm:px-8 lg:px-10">
                <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
                    <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-black/60">
                            Selected Projects
                        </p>
                        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl text-black">
                            Experimental builds
                            <br />
                            with editorial rhythm.
                        </h2>
                    </div>
                    <p className="max-w-md text-sm leading-7 text-black/65 sm:text-base">
                        A staggered portfolio layout where each case study has its own
                        composition, pacing, and visual weight.
                    </p>
                </div>
            </div>

            <div className="w-full">
                {projects.map((project, index) => {
                    // Calculate the target scale based on how many cards are in the stack
                    const targetScale = 1 - (projects.length - index) * 0.05;
                    return (
                        <Card
                            key={index}
                            i={index}
                            project={project}
                            targetScale={targetScale}
                        />
                    );
                })}
                {/* Dummy spacer to allow scrolling past the last card if needed? No, sticky works in flow. */}
            </div>
        </section>
    );
}

function Card({ i, project, targetScale }: any) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

    // To make it sticky and stack:
    // Top needs to be offset slightly if we want a visible stack, or 0 for full cover.
    // User said "second one come top of the first", implying full cover.
    return (
        <div
            ref={container}
            className="sticky top-0 flex h-screen items-center justify-center overflow-hidden"
            style={{ top: i * 0 }} // Stacking at exactly top:0
        >
            <motion.div
                className="relative flex h-[70vh] w-full max-w-6xl origin-top flex-col justify-between overflow-hidden rounded-3xl border border-black/10 bg-white p-6 shadow-2xl sm:h-[80vh] sm:p-12"
                style={{
                    // Add a subtle scale effect as it comes up?
                    // Actually, for a pure "stack", the card itself usually doesn't scale DOWN. The *previous* one might.
                    // But sticky CSS makes the *current* one stay. The *next* one covers.
                    // If we want the one *behind* to scale down, we need to know when the *next* one is arriving.
                    // That is hard with just 'useScroll(target: self)'.
                    // Simpler "cool effect": Just animate content entry?
                    // User asked for "cool effect... smooth and perfect".
                    // Let's do a Parallax on the Image.
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-3xl font-semibold leading-[0.9] tracking-tight sm:text-4xl text-black text-center sm:text-left">
                        {project.title}
                    </h3>
                    <p className="text-[11px] uppercase tracking-[0.34em] text-black/50 text-center sm:text-right">
                        {project.category}
                    </p>
                </div>

                <div className="relative mt-8 h-full w-full overflow-hidden rounded-xl bg-gray-100">
                    <motion.div className="h-full w-full" style={{ scale: imageScale }}>
                        <Image
                            fill
                            src={project.image}
                            alt={project.title}
                            className="object-cover"
                        />
                    </motion.div>
                </div>

                <div className="mt-8 flex items-center justify-between">
                    <p className="max-w-md text-sm leading-relaxed text-black/70">
                        {project.summary}
                    </p>
                    <a
                        href={project.href}
                        className="hidden items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-black transition hover:text-black/60 sm:flex"
                    >
                        View Case
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 11L11 1M11 1H3M11 1V9"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </div>
            </motion.div>
        </div>
    );
}
