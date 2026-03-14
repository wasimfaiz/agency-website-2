"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery",
    description: "We map goals, users, and success metrics to define a focused scope.",
  },
  {
    title: "Strategy",
    description: "Information architecture, SEO planning, and conversion flow are locked.",
  },
  {
    title: "Design",
    description: "Elegant UI with clear hierarchy, accessibility, and premium polish.",
  },
  {
    title: "Build & Launch",
    description: "Performance-first development, QA, and a smooth go-live.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="bg-[#F4F6F8] text-[#0A2540]" aria-label="Process">
      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-bold uppercase tracking-[0.35em] text-[#007BFF] bg-[#007BFF]/10 inline-block px-3 py-1 rounded-md"
            >
              Process
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 max-w-2xl text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl"
            >
              A clear, modern process built for speed and focus.
            </motion.h2>
            <p className="mt-3 text-sm font-medium text-[#0A2540]/60 sm:text-base">
              Strategy → Design → Development → Launch. No noise, just results.
            </p>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-lg text-sm leading-6 text-[#0A2540]/70 sm:text-base font-medium border-l-4 border-[#007BFF] pl-4"
          >
            From discovery to launch, every step is designed to reduce risk,
            improve SEO performance, and deliver a premium user experience.
          </motion.p>
        </div>

        <div className="mt-10 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative h-full overflow-hidden rounded-[22px] border border-[#0A2540]/10 bg-white p-5 shadow-[0_10px_24px_rgba(10,37,64,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-[#007BFF]/35 hover:shadow-[0_18px_36px_rgba(0,123,255,0.12)]"
            >
              <div className="absolute right-0 top-0 h-12 w-12 rounded-bl-2xl bg-gradient-to-br from-[#007BFF]/20 to-transparent" />
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#007BFF]/15 to-[#00C2FF]/5 text-[#007BFF] font-bold">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-extrabold">{step.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#0A2540]/70 font-medium">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
