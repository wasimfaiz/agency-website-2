"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowRight, BsStars, BsLayers, BsLightningCharge, BsGraphUpArrow } from "react-icons/bs";

const chapters = [
    {
        id: "01",
        title: "Strategic Planning",
        description: "We start with research into your business, audience, and growth goals. This gives your website sharp positioning, clear messaging, and a strong foundation for long-term results.",
        icon: <BsStars className="mb-4 text-2xl text-[#007BFF]" />,
    },
    {
        id: "02",
        title: "UI/UX Design",
        description: "We design user-centric interfaces with clear hierarchy and seamless flows. Each design decision is made to build trust, improve engagement, and increase conversions.",
        icon: <BsLayers className="mb-4 text-2xl text-[#007BFF]" />,
    },
    {
        id: "03",
        title: "Web Development",
        description: "We build fast, secure, and SEO-ready websites and SaaS platforms on modern stacks. Everything is engineered for performance, scale, and easy iteration.",
        icon: <BsLightningCharge className="mb-4 text-2xl text-[#007BFF]" />,
    },
    {
        id: "04",
        title: "Growth Scaling",
        description: "After launch, we monitor behavior and performance, then optimize continuously. Through tuning, SEO improvements, and feature updates, your product keeps improving as you grow.",
        icon: <BsGraphUpArrow className="mb-4 text-2xl text-[#007BFF]" />,
    },
];



export default function AboutSection() {
    return (
        <section id="about" className="bg-[#F4F6F8] text-[#0A2540]">
            {/* ── Section Header ── */}
            <div className="mx-auto w-full max-w-6xl px-4 pt-20 pb-6 sm:px-8 lg:px-10">
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
            <div className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-8 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="group relative h-[420px] w-full overflow-hidden rounded-[32px] bg-[#0A2540] shadow-xl md:h-[520px]"
                >
                    <Image
                        src="/about_photo.png"
                        alt="Setzet team"
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
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

            {/* ── Chapter Cards Grid ── */}
            <div className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-8 lg:px-10">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {chapters.map((chapter, i) => (
                        <motion.div
                            key={chapter.id}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                            className="group relative overflow-hidden rounded-[28px] border border-[#0A2540]/10 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#007BFF]/30 hover:shadow-[0_8px_30px_rgba(10,37,64,0.08)]"
                        >
                            {chapter.icon}
                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#007BFF]">
                                Chapter {chapter.id}
                            </p>
                            <h3 className="mt-3 font-heading text-xl font-extrabold leading-snug text-[#0A2540] transition-colors duration-300 group-hover:text-[#007BFF]">
                                {chapter.title}
                            </h3>
                            <div className="my-4 h-px w-full bg-[#0A2540]/10 transition-colors duration-300 group-hover:bg-[#007BFF]/20" />
                            <p className="text-sm font-medium leading-6 text-[#0A2540]/70">
                                {chapter.description}
                            </p>
                            <span className="pointer-events-none absolute -right-3 -top-3 select-none font-heading text-7xl font-extrabold text-[#007BFF]/[0.07]">
                                {chapter.id}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* CTA strip */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-8 flex flex-col items-center justify-between gap-4 rounded-[24px] bg-[#0A2540] px-8 py-8 text-white sm:flex-row sm:px-10"
                >
                    <div>
                        <h3 className="font-heading text-2xl font-extrabold sm:text-3xl">
                            Ready to write your chapter?
                        </h3>
                        <p className="mt-1 text-sm font-medium text-white/70">
                            Let&apos;s build something that matters.
                        </p>
                    </div>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        href="#contact"
                        className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#007BFF] px-8 py-4 text-sm font-bold text-white shadow-[0_8px_30px_rgba(0,123,255,0.3)] transition-all hover:bg-[#0056b3]"
                    >
                        Start a Project
                        <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
