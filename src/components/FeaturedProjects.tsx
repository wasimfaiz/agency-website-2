"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const projects = [
    {
        title: "Yastudy",
        category: "EdTech Platform",
        year: "2025",
        image: "/images/project1.png",
        href: "https://www.yastudy.com",
        summary:
            "Designed an intuitive, comprehensive educational platform that streamlines learning and dramatically boosts student engagement.",
    },
    {
        title: "Uncle Makhana",
        category: "Brand Experience",
        year: "2025",
        image: "/images/aesthetic-img2.png",
        href: "#",
        summary:
            "Designed a vibrant and appetizing digital experience that perfectly captures the playful essence of the Uncle Makhana brand.",
    },
    {
        title: "Pure Makhana",
        category: "Brand Website",
        year: "2026",
        image: "/images/pure-makhana.png",
        href: "#",
        summary:
            "A premium, luxury, and ultra-clean website for a high-end makhana brand, designed to communicate purity and modern elegance.",
    },
    {
        title: "Zenfora Food",
        category: "E-Commerce / Brand Strategy",
        year: "2026",
        image: "/images/zenfora-food.png",
        href: "#",
        summary:
            "Crafted a vibrant, appetite-inducing digital storefront that highlights the nutritional power of foxnuts with a seamless D2C checkout experience.",
    },
];

export default function FeaturedProjects() {
    return (
        <section
            id="work"
            className="bg-[#F4F6F8]"
        >
            <div className="mx-auto w-full max-w-6xl px-4 pt-10 sm:px-8 lg:px-10">
                <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#007BFF]">
                            SELECTED CASE STUDIES
                        </p>
                        <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight font-heading sm:text-4xl text-[#0A2540]">
                            Experimental Digital Builds
                            <br />
                            with Strategic Intent.
                        </h2>
                    </div>
                    <p className="max-w-md text-sm leading-7 font-medium text-[#0A2540]/80 sm:text-base">
                        A curated selection of web design, SaaS platforms, B2B systems, and custom development projects — where every case study is driven by business goals, scalable architecture, and refined user experience.
                    </p>
                </div>
            </div>

            <div className="w-full">
                {projects.map((project, index) => {
                    return (
                        <Card
                            key={index}
                            i={index}
                            project={project}
                        />
                    );
                })}
            </div>
        </section>
    );
}

function Card({ i, project }: any) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    // One-shot reveal: fires once when card first enters viewport
    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
            <div
                ref={cardRef}
                className="relative flex h-[70vh] w-full max-w-6xl origin-top flex-col justify-between overflow-hidden rounded-3xl border border-[#0A2540]/10 bg-white p-6 shadow-[0_8px_30px_rgba(10,37,64,0.08)] sm:h-[80vh] sm:p-12 transform-gpu will-change-transform"
                style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translate3d(0, 0px, 0)" : "translate3d(0, 40px, 0)",
                    transition: "opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)",
                }}
            >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-3xl font-extrabold font-heading leading-[0.9] tracking-tight sm:text-4xl text-[#0A2540] text-center sm:text-left">
                        {project.title}
                    </h3>
                    <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-[#007BFF] text-center sm:text-right">
                        {project.category}
                    </p>
                </div>

                <div className="relative mt-8 h-full w-full overflow-hidden rounded-xl bg-[#F4F6F8] group">
                    <div className="h-full w-full transform-gpu transition-transform duration-1000 ease-out group-hover:scale-105">
                        <Image
                            fill
                            src={project.image}
                            alt={project.title}
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="max-w-md text-sm leading-relaxed font-medium text-[#0A2540]/80">
                        {project.summary}
                    </p>
                    <a
                        href={project.href}
                        className="inline-flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[#0A2540] transition hover:text-[#007BFF]"
                    >
                        View Project
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
            </div>
        </div>
    );
}
