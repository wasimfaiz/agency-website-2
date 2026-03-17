"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  spring.set(value);
  const rounded = useTransform(spring, (v) => Math.round(v));
  return <motion.span>{rounded}</motion.span>;
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ProcessSection() {
  const targetRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0.05, 0.75], [0, 1]);

  const scrollToStep = (index: number) => {
    const el = stepRefs.current[index];
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = stepRefs.current.findIndex((el) => el === entry.target);
          if (idx !== -1) setActiveStep(idx);
        });
      },
      { root: null, threshold: 0.55 }
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      ref={targetRef}
      className="relative overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-white text-slate-900"
      aria-label="Our Process"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-gradient-to-br from-indigo-300/60 to-sky-200/40 blur-3xl" />
        <div className="absolute right-10 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-gradient-to-br from-amber-200/60 to-rose-200/40 blur-3xl" />
        <div className="absolute left-16 bottom-10 h-[280px] w-[280px] rounded-full bg-gradient-to-br from-emerald-200/60 to-lime-200/40 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 sm:py-24">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-widest text-indigo-600"
          >
            How We Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
          >
            A Thoughtful Process, Built for Growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-lg text-slate-600"
          >
            Every project is unique, but our process keeps things aligned, efficient, and delightful. Slide through the timeline to see how we turn ideas into products that perform.
          </motion.p>
        </div>

        {/* Desktop timeline */}
        <div className="relative mt-16 hidden lg:block">
          <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 flex flex-col items-center gap-3 lg:flex">
            {steps.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToStep(idx)}
                className="h-3 w-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label={`Go to step ${idx + 1}`}
              >
                <span
                  className={`block h-full w-full rounded-full transition-colors ${
                    activeStep === idx
                      ? "bg-indigo-600 shadow-lg shadow-indigo-600/30"
                      : "bg-white border border-slate-300"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="absolute left-1/2 top-0 -ml-px h-full w-0.5">
            <svg
              width="2"
              height="100%"
              viewBox="0 0 2 1000"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full"
              aria-hidden="true"
            >
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="1000"
                stroke="url(#line-gradient)"
                strokeWidth="2"
              />
              <motion.line
                x1="1"
                y1="0"
                x2="1"
                y2="1000"
                stroke="url(#line-gradient-active)"
                strokeWidth="2"
                style={{ pathLength }}
              />
              <defs>
                <linearGradient
                  id="line-gradient"
                  x1="0.5"
                  y1="0"
                  x2="0.5"
                  y2="1000"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C7D2FE" stopOpacity="0.55" />
                  <stop offset="1" stopColor="#E0E7FF" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="line-gradient-active"
                  x1="0.5"
                  y1="0"
                  x2="0.5"
                  y2="1000"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6366F1" />
                  <stop offset="1" stopColor="#38BDF8" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.16 }}
            className="space-y-16"
          >
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;

              return (
                <motion.div
                  ref={(el) => (stepRefs.current[index] = el)}
                  key={step.title}
                  variants={cardVariants}
                  className={`relative flex items-start gap-10 ${isEven ? "flex-row-reverse" : ""}`}
                >
                  <div className={`flex-1 ${isEven ? "pl-10 lg:pl-16" : "pr-10 lg:pr-16"}`}>
                    <motion.div
                      whileHover={{ scale: 1.03, y: -2 }}
                      transition={{ type: "spring", stiffness: 260, damping: 24 }}
                      className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 p-7 shadow-[0_18px_45px_-22px_rgba(15,23,42,0.35)] backdrop-blur"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${step.accent} text-white shadow-lg shadow-indigo-500/20`}
                        >
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900">
                          {step.title}
                        </h3>
                      </div>

                      <p className="mt-4 text-base leading-relaxed text-slate-600">
                        {step.description}
                      </p>

                      <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-indigo-600">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-700">
                          <AnimatedNumber value={index + 1} />
                        </span>
                        <span className="opacity-80">Step {index + 1}</span>
                      </div>

                      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <div className="absolute -left-10 -top-12 h-24 w-24 rounded-full bg-indigo-200/30 blur-2xl" />
                        <div className="absolute -right-12 -bottom-14 h-28 w-28 rounded-full bg-sky-200/30 blur-2xl" />
                      </div>
                    </motion.div>
                  </div>

                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.45, delay: 0.2 }}
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-xl"
                    >
                      <span className="h-3 w-3 rounded-full bg-indigo-600" />
                    </motion.div>
                  </div>

                  <div className="w-1/2" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.14 }}
          className="mt-12 space-y-10 lg:hidden"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                variants={cardVariants}
                className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 px-6 py-7 shadow-[0_18px_45px_-22px_rgba(15,23,42,0.35)] backdrop-blur"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${step.accent} text-white shadow-lg shadow-indigo-500/20`}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                      <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        <AnimatedNumber value={index + 1} />
                        <span className="opacity-75">/ 4</span>
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100">
                  <div className="absolute -left-10 -top-12 h-24 w-24 rounded-full bg-indigo-200/30 blur-2xl" />
                  <div className="absolute -right-12 -bottom-14 h-28 w-28 rounded-full bg-sky-200/30 blur-2xl" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-8 flex items-center justify-center gap-3 lg:hidden">
          {steps.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToStep(idx)}
              className="h-3 w-3 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label={`Go to step ${idx + 1}`}
            >
              <span
                className={`block h-full w-full rounded-full transition-colors ${
                  activeStep === idx
                    ? "bg-indigo-600 shadow-lg shadow-indigo-600/30"
                    : "bg-white border border-slate-300"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
