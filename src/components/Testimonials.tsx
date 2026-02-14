"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        quote:
            "SetZet brought clarity to our product story and translated it into a design system that felt premium from day one.",
        name: "Aastha Sharma",
        role: "Head of Marketing, Yastudy",
    },
    {
        quote:
            "The team thinks in systems, not screens. Every interaction felt intentional and directly improved how users navigate.",
        name: "Rajdeep Singh",
        role: "Founder, Zenfora Pvt Ltd.",
    },
    {
        quote:
            "Fast, sharp, and deeply collaborative. The new site finally matches the quality of our product and sales narrative.",
        name: "Mikael Ross",
        role: "VP Growth, Atlas",
    },
    {
        quote: "An absolute game-changer for our brand identity. The attention to detail is unmatched.",
        name: "Sarah Jenkins",
        role: "CEO, BrightPath",
    },
    {
        quote: "They didn't just build a website; they built a digital experience that converts.",
        name: "David Chen",
        role: "CTO, TechFlow",
    },
    {
        quote: "Professional, creative, and incredibly easy to work with. Highly recommended.",
        name: "Emily Carter",
        role: "Director, Creative Solutions",
    },
    {
        quote: "Our engagement metrics skyrocketed after the redesign. Pure magic.",
        name: "James Wilson",
        role: "Product Manager, SaaSy",
    },
];

// Duplicate for seamless loop
const marqueeTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="mx-auto w-full max-w-7xl px-4 pb-20 pt-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28 overflow-hidden"
        >
            <div
                className="mb-16 flex flex-wrap items-end justify-between gap-6"
                data-animate="testimonials"
            >
                <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-black/60">
                        Testimonials
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                        Partner feedback,
                        <br />
                        framed with clarity.
                    </h2>
                </div>
                <p className="max-w-md text-sm leading-7 text-black/65 sm:text-base">
                    A spotlight composition with one flagship quote and supporting
                    voices placed as side notes.
                </p>
            </div>

            {/* FEATURED VIDEO TESTIMONIAL */}
            <div className="mb-20 grid gap-6 lg:grid-cols-12" data-animate="testimonials">
                <article className="relative overflow-hidden rounded-[30px] border border-black/10 bg-white/85 px-6 py-8 sm:px-8 sm:py-10 lg:col-span-12">
                    <span className="pointer-events-none absolute -left-3 -top-6 text-[8rem] leading-none text-black/[0.06] sm:text-[10rem]">
                        &ldquo;
                    </span>
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/25 to-transparent" />

                    <div className="relative mb-6 overflow-hidden rounded-2xl border border-black/10 bg-black">
                        <div className="aspect-video w-full">
                            <video
                                className="h-full w-full object-cover"
                                controls
                                playsInline
                                preload="metadata"
                                poster="/testimonial-video-photo.png"
                            >
                                <source src="/testimonial-video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    <p className="relative max-w-3xl text-lg leading-9 text-black/80 sm:text-[1.45rem] sm:leading-10">
                        {testimonials[0].quote}
                    </p>

                    <div className="relative mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-5">
                        <div>
                            <p className="text-base font-semibold text-black">
                                {testimonials[0].name}
                            </p>
                            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-black/50">
                                {testimonials[0].role}
                            </p>
                        </div>
                        <span className="rounded-full border border-black/15 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-black/55">
                            Featured Voice
                        </span>
                    </div>
                </article>
            </div>

            {/* INFINITE MARQUEE */}
            <div className="relative w-full overflow-hidden mask-linear-fade">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

                <motion.div
                    className="flex w-max gap-8"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...marqueeTestimonials, ...marqueeTestimonials].map((item, idx) => (
                        <div
                            key={`${item.name}-${idx}`}
                            className="relative w-[350px] shrink-0 overflow-hidden rounded-2xl border border-black/10 bg-white/75 p-6 transition-colors hover:border-black/30 hover:bg-white"
                        >
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />
                            <p className="text-sm leading-7 text-black/75">"{item.quote}"</p>
                            <div className="mt-5 border-t border-black/10 pt-3">
                                <p className="text-sm font-semibold text-black">{item.name}</p>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-black/50">
                                    {item.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
