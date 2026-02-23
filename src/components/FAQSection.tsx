"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services does your web development agency offer?",
    answer: "We specialize in custom web design, SaaS website development, UI/UX design, and full-stack digital product services. Our core focus is building high-converting websites and scalable applications that rank well on Google and drive measurable business growth."
  },
  {
    question: "Do you build SEO-optimized websites that rank on Google?",
    answer: "Yes, absolutely. Every website we develop is built from the ground up with technical SEO best practices. By utilizing fast-loading Next.js architecture, mobile-first responsive design, and proper core web vitals optimization, we ensure your site is built to capture search engine traffic."
  },
  {
    question: "How long does it take to design and develop a custom website?",
    answer: "A standard highly-optimized B2B or SaaS website typically takes 4 to 8 weeks, while complex web applications or CRM/ERP integrations can take 3 to 6 months. We prioritize strategic UI/UX design to reduce cognitive load before moving into high-performance development."
  },
  {
    question: "How much does a custom web design and development project cost?",
    answer: "Project costs vary based on scope—ranging from a focused, high-converting landing page up to a comprehensive ecosystem redesign. We build premium, enterprise-grade digital experiences using modern tech stacks that deliver long-term ROI."
  },
  {
    question: "What technology stack do you use for web development?",
    answer: "We focus on modern, scalable, and secure technologies primarily including Next.js, React, TypeScript, Tailwind CSS, and various headless CMS platforms. This stack guarantees blazing-fast page load speeds, which is a critical ranking factor for Google SEO."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-20 border-t border-black/5 sm:px-8 sm:py-28 lg:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-[0.35em] text-black/60 mb-4" data-animate="faq">
          Common Questions
        </p>
        <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl text-black" data-animate="faq">
          SEO &amp; Web Development FAQs
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-base leading-7 text-black/70" data-animate="faq">
          Everything you need to know about our web design process, SaaS digital product services, and how we build platforms optimized to rank on Google.
        </p>
      </div>

      <div className="space-y-4" data-animate="faq">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-black/10 pb-4 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex w-full items-center justify-between text-left py-4 focus:outline-none group"
            >
              <h3 className="text-lg font-medium text-black group-hover:text-black/70 transition-colors pr-8">
                {faq.question}
              </h3>
              <span className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black/5 text-black transition-transform duration-300">
                <span className={`absolute h-[2px] w-3 bg-black transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
                <span className={`absolute h-3 w-[2px] bg-black transition-transform duration-300 ${openIndex === index ? "rotate-90 opacity-0" : ""}`} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="pb-6 text-black/70 leading-relaxed pr-8 md:pr-12">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
