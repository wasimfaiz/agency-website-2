"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

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
  const [openIndex, setOpenIndex] = useState<number | 0>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
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
    <section className="relative w-full overflow-hidden bg-[#F4F6F8] border-t border-[#0A2540]/5 py-24 sm:py-32 px-6 sm:px-12 lg:px-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#007BFF]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-[1400px] flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        
        {/* Left Column: Heading & CTA */}
        <div className="lg:w-1/3 flex flex-col items-start lg:sticky lg:top-32 self-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-[#0A2540]/10 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#007BFF] shadow-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#007BFF]" />
              Expert Answers
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading leading-[1.05] tracking-tight text-[#0A2540] mb-6">
              Frequently <br className="hidden lg:block" />
              Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#0ea5e9]">Questions.</span>
            </h2>
            <p className="text-base sm:text-lg font-medium leading-relaxed text-[#0A2540]/70 mb-10 max-w-sm">
              Everything you need to know about our web design process, digital product services, and how we build platforms optimized to rank on Google.
            </p>
            
            <Link 
              href="/#contact"
              className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#0A2540] hover:text-[#007BFF] transition-colors"
            >
              Have more questions?
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-[0_4px_14px_rgba(10,37,64,0.08)] group-hover:shadow-[0_6px_20px_rgba(0,123,255,0.2)] transition-shadow">
                <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Premium Accordion Cards */}
        <div className="lg:w-2/3 flex flex-col gap-4 sm:gap-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`overflow-hidden rounded-[24px] transition-all duration-500 border ${
                  isOpen 
                  ? "bg-white border-[#007BFF]/20 shadow-[0_20px_40px_rgba(10,37,64,0.06)] ring-1 ring-[#007BFF]/5" 
                  : "bg-white/60 border-[#0A2540]/5 hover:bg-white hover:border-[#0A2540]/15"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between text-left p-6 sm:p-8 focus:outline-none group"
                >
                  <h3 className={`text-lg sm:text-xl font-bold pr-8 transition-colors duration-300 ${
                    isOpen ? "text-[#007BFF]" : "text-[#0A2540] group-hover:text-[#007BFF]"
                  }`}>
                    {faq.question}
                  </h3>
                  
                  {/* Plus/Minus Indicator */}
                  <div className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                    isOpen ? "bg-[#007BFF] text-white shadow-md shadow-[#007BFF]/20" : "bg-[#F4F6F8] text-[#0A2540]/50 group-hover:bg-[#007BFF]/10 group-hover:text-[#007BFF]"
                  }`}>
                    <span className={`absolute h-[2px] w-4 bg-current transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    <span className={`absolute h-4 w-[2px] bg-current transition-transform duration-300 ${isOpen ? "rotate-90 opacity-0" : ""}`} />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                    >
                      <div className="px-6 pb-8 sm:px-8 sm:pb-10 pt-0">
                        <div className="h-px w-12 bg-[#007BFF]/30 mb-6" />
                        <p className="text-base sm:text-lg text-[#0A2540]/70 font-medium leading-relaxed pr-4 sm:pr-12">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
