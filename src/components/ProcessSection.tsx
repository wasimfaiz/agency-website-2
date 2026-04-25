"use client";
import {
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaSearch, FaPenNib, FaCode, FaRocket } from "react-icons/fa";

const steps = [
  {
    title: "Discovery & Strategy",
    description:
      "We start by deeply understanding your business goals, target audience, and challenges. This phase involves collaborative workshops, market research, and competitive analysis to define a clear roadmap for success.",
    icon: FaSearch,
    accent: "from-indigo-500 to-sky-500",
  },
  {
    title: "UI/UX Design",
    description:
      "Our design team crafts intuitive and visually stunning interfaces that captivate users. We focus on seamless experiences through wireframes, prototypes, and user validation.",
    icon: FaPenNib,
    accent: "from-emerald-500 to-teal-500",
  },
  {
    title: "Development & Integration",
    description:
      "We bring designs to life with clean, scalable code. From frontend to backend and API integrations, we build a reliable foundation that grows with your business.",
    icon: FaCode,
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Launch & Optimization",
    description:
      "After launch we keep improving: monitoring performance, gathering feedback, and optimizing to ensure long-term growth and impact.",
    icon: FaRocket,
    accent: "from-amber-500 to-orange-500",
  },
];

const AnimatedNumber = ({ value }: { value: number }) => {
  const spring = useSpring(0, { stiffness: 120, damping: 24 });
  
  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  const rounded = useTransform(spring, (v) => Math.round(v));
  return <motion.span>{rounded}</motion.span>;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.14 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

export default function ProcessSection() {
  const targetRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="process"
      ref={targetRef}
      className="relative scroll-mt-28 overflow-hidden bg-[#F8F7F3] text-slate-900"
      aria-labelledby="process-title"
      aria-describedby="process-summary"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.06),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(255,255,255,0.65),_rgba(248,250,252,0.9))]" />
        <div
          aria-hidden="true"
          className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-rose-200/70 to-amber-200/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-gradient-to-br from-indigo-200/60 to-sky-200/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute left-24 bottom-12 h-64 w-64 rounded-full bg-gradient-to-br from-emerald-200/60 to-lime-200/40 blur-3xl"
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 sm:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <header className="lg:sticky lg:top-24">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm"
            >
              How We Work
            </motion.p>
            <motion.h2
              id="process-title"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: shouldReduceMotion ? 0 : 0.1,
              }}
              className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              A clean, collaborative process that keeps momentum high.
            </motion.h2>
            <motion.p
              id="process-summary"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.7,
                delay: shouldReduceMotion ? 0 : 0.2,
              }}
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              We keep the flow simple: align early, design with clarity, build with
              precision, then launch and refine. You always know what is next, why it
              matters, and how it moves your product forward.
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-slate-600">
              <span className="rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 shadow-sm">
                Transparent updates
              </span>
              <span className="rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 shadow-sm">
                Collaborative milestones
              </span>
              <span className="rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 shadow-sm">
                Outcome-driven delivery
              </span>
            </div>
            <p className="mt-8 text-sm text-slate-500">
              Tap a step to see what we deliver at each stage.
            </p>
          </header>

          <div className="relative">
            <motion.ol
              role="list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-4"
              aria-label="Project process steps"
            >
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isOpen = activeIndex === index;

                return (
                  <motion.li
                    key={step.title}
                    variants={cardVariants}
                    layout="position"
                    className={`group rounded-3xl border border-slate-200/70 bg-white/85 p-5 shadow-[0_18px_40px_-26px_rgba(15,23,42,0.4)] backdrop-blur ${
                      isOpen ? "ring-1 ring-slate-900/10" : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveIndex((prev) => (prev === index ? -1 : index))
                      }
                      className="flex w-full items-center justify-between gap-4 text-left"
                      aria-expanded={isOpen}
                      aria-controls={`process-panel-${index}`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${step.accent} text-white shadow-lg shadow-slate-900/10`}
                        >
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                            Step {String(index + 1).padStart(2, "0")}
                          </p>
                          <h3 className="text-xl font-semibold text-slate-900">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <motion.div
                        layout="position"
                        className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400"
                      >
                        {isOpen ? "Close" : "Open"}
                      </motion.div>
                    </button>

                    <motion.div
                      id={`process-panel-${index}`}
                      initial={false}
                      animate={
                        isOpen
                          ? { height: "auto", opacity: 1, marginTop: 16 }
                          : { height: 0, opacity: 0, marginTop: 0 }
                      }
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <p className="text-base leading-relaxed text-slate-600">
                        {step.description}
                      </p>
                      <div className="mt-5 flex items-center gap-3 text-sm font-semibold text-slate-700">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 bg-white text-slate-900">
                          <AnimatedNumber value={index + 1} />
                        </span>
                        <span className="opacity-70">
                          Step {index + 1} of {steps.length}
                        </span>
                      </div>
                    </motion.div>

                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute -left-10 -top-12 h-24 w-24 rounded-full bg-indigo-200/30 blur-2xl" />
                      <div className="absolute -right-12 -bottom-14 h-28 w-28 rounded-full bg-amber-200/30 blur-2xl" />
                    </div>
                  </motion.li>
                );
              })}
            </motion.ol>
          </div>
        </div>
      </div>
    </section>
  );
}
