"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiMonitor, FiSmartphone, FiCode, FiPenTool, FiServer, FiShoppingCart,
  FiBriefcase, FiCheckCircle, FiLink, FiUsers, FiCpu,
  FiSearch, FiTarget, FiShare2, FiFileText, FiMousePointer, FiRepeat,
  FiCloud, FiZap, FiEye, FiMaximize, FiTool
} from "react-icons/fi";

const categories = [
  {
    id: "development",
    title: "Development",
    services: [
      { name: "Web Development", description: "Scalable, high-performance websites and web apps.", icon: FiMonitor },
      { name: "Mobile App Development", description: "Native and cross-platform mobile experiences.", icon: FiSmartphone },
      { name: "Custom Software Development", description: "Tailored solutions for complex business needs.", icon: FiCode },
      { name: "UI/UX Development", description: "Pixel-perfect, accessible, and interactive interfaces.", icon: FiPenTool },
      { name: "API Development", description: "Robust and secure backend API architectures.", icon: FiServer },
      { name: "E-commerce Development", description: "High-converting online stores and platforms.", icon: FiShoppingCart },
    ],
  },
  {
    id: "erp",
    title: "ERP Solutions",
    services: [
      { name: "Custom ERP Development", description: "Tailored enterprise resource planning systems.", icon: FiBriefcase },
      { name: "ERP Implementation", description: "Seamless deployment of enterprise scalable solutions.", icon: FiCheckCircle },
      { name: "ERP Integration", description: "Connecting your ERP with existing third-party tools.", icon: FiLink },
      { name: "ERP Consulting", description: "Strategic guidance for enterprise digital transformation.", icon: FiUsers },
      { name: "Business Process Automation", description: "Streamlining operations to boost efficiency.", icon: FiCpu },
    ],
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    services: [
      { name: "SEO Optimization", description: "Data-driven strategies to improve organic rankings.", icon: FiSearch },
      { name: "Performance Marketing", description: "High-ROI advertising campaigns across channels.", icon: FiTarget },
      { name: "Social Media Marketing", description: "Engaging content to build brand awareness.", icon: FiShare2 },
      { name: "Content Marketing", description: "Compelling storytelling that drives action.", icon: FiFileText },
      { name: "Conversion Rate Optimization", description: "Maximizing the percentage of users who convert.", icon: FiMousePointer },
      { name: "Marketing Automation", description: "Automated workflows to scale your marketing efforts.", icon: FiRepeat },
    ],
  },
  {
    id: "saas",
    title: "SaaS",
    services: [
      { name: "SaaS Product Development", description: "Building scalable, multi-tenant software-as-a-service.", icon: FiCloud },
      { name: "SaaS MVP Development", description: "Rapid prototyping to validate your product idea.", icon: FiZap },
      { name: "SaaS UI/UX Design", description: "Intuitive and engaging user interfaces for web platforms.", icon: FiEye },
      { name: "SaaS Product Scaling", description: "Enhancing architecture to support growing user bases.", icon: FiMaximize },
      { name: "SaaS Maintenance", description: "Ongoing support, proactive monitoring, and updates.", icon: FiTool },
    ],
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="services"
      className="mx-auto w-full max-w-6xl px-4 pb-24 pt-8 sm:px-8 sm:pb-28 lg:px-10 lg:pb-32"
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between mb-12">
        <div>
          <p
            className="text-xs font-bold uppercase tracking-[0.35em] text-[#007BFF] bg-[#007BFF]/10 inline-block px-3 py-1 rounded-md"
            data-animate="services"
          >
            Capabilities
          </p>
          <h2
            className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl text-[#0A2540]"
            data-animate="services"
          >
            Digital Product Services
          </h2>
        </div>
        <p
          className="max-w-xl text-base leading-7 text-[#0A2540]/70 sm:text-lg font-medium border-l-4 border-[#007BFF] pl-4"
          data-animate="services"
        >
          We build scalable, high-performance digital products for modern brands.
          From strategy and design to engineering, we deliver solutions that
          drive real business growth.
        </p>
      </div>

      {/* CATEGORY TABS */}
      <div 
        className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10"
        data-animate="services"
      >
        {categories.map((category, index) => {
          const isActive = activeTab === index;
          return (
            <button
              key={category.id}
              onClick={() => setActiveTab(index)}
              className={`relative px-6 py-4 text-sm sm:text-base font-bold transition-all duration-300 rounded-xl border flex-1 sm:flex-none text-center sm:text-left min-w-[140px] ${
                isActive
                  ? "border-[#007BFF] bg-[#007BFF] text-white shadow-[0_8px_25px_rgba(0,123,255,0.35)] -translate-y-0.5"
                  : "border-[#0A2540]/10 bg-transparent text-[#0A2540]/60 hover:bg-white hover:border-[#0A2540]/20 hover:text-[#0A2540]"
              }`}
            >
              {category.title}
            </button>
          );
        })}
      </div>

      {/* SERVICES GRID */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {categories[activeTab].services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: [0.2, 0.65, 0.3, 0.9] }}
                className="group relative flex flex-col justify-between rounded-[20px] border border-[#0A2540]/10 bg-white p-6 sm:p-8 transition-all duration-400 hover:-translate-y-2 hover:border-[#007BFF]/30 hover:shadow-[0_20px_40px_rgba(0,123,255,0.08)] cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#007BFF]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                
                <div className="relative z-10 block">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#007BFF]/10 text-[#007BFF] transition-all duration-400 group-hover:bg-[#007BFF] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(0,123,255,0.35)] group-hover:-translate-y-1">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0A2540] group-hover:text-[#007BFF] transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#0A2540]/60 font-medium h-[3.5rem]">
                    {service.description}
                  </p>
                </div>

                <div className="relative z-10 mt-8 flex items-center justify-between">
                  {/* Underline expanding effect */}
                  <div className="h-[2px] w-0 bg-[#007BFF]/20 group-hover:w-12 transition-all duration-400 ease-out"></div>
                  
                  {/* Arrow Icon */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F4F6F8] text-[#0A2540] transition-all duration-300 group-hover:bg-[#007BFF] group-hover:text-white group-hover:shadow-[0_4px_15px_rgba(0,123,255,0.3)]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CTA SECTION */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mt-16 sm:mt-20 flex flex-col items-center justify-center rounded-[24px] border border-[#0A2540]/10 bg-white px-6 py-12 text-center shadow-sm sm:px-12 sm:py-16 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#007BFF]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#007BFF]/5 to-transparent rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
            Need a custom solution?
          </h3>
          <p className="mt-4 max-w-md mx-auto text-sm sm:text-base font-medium leading-relaxed text-[#0A2540]/70">
            We help companies design, build, and scale digital products.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#007BFF] px-8 py-3.5 text-sm font-bold text-white shadow-[0_8px_30px_rgba(0,123,255,0.3)] transition-all duration-300 hover:bg-[#0056b3] hover:shadow-[0_8px_30px_rgba(0,123,255,0.5)] transform hover:-translate-y-0.5"
            >
              Talk to our experts
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
