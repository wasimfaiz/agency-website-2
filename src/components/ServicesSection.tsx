"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiMonitor, FiSmartphone, FiCode, FiPenTool, FiServer, FiShoppingCart,
  FiBriefcase, FiCheckCircle, FiLink, FiUsers, FiCpu,
  FiSearch, FiTarget, FiShare2, FiMousePointer, FiRepeat,
  FiCloud, FiZap, FiEye, FiMaximize, FiTool, FiStar
} from "react-icons/fi";

const categories = [
  {
    id: "development",
    title: "Development",
    services: [
      { name: "Web Development", description: "Executive-grade websites engineered for speed, trust, and conversion.", icon: FiMonitor },
      { name: "Mobile App Development", description: "Premium iOS and Android experiences built for retention.", icon: FiSmartphone },
      { name: "Custom Software Development", description: "Bespoke platforms that streamline operations and elevate teams.", icon: FiCode },
      { name: "UI/UX Development", description: "Refined interfaces that feel effortless and unmistakably premium.", icon: FiPenTool },
      { name: "API Development", description: "Secure, scalable APIs that keep complex systems in sync.", icon: FiServer },
      { name: "E-commerce Development", description: "Luxury-grade storefronts optimized for trust and higher AOV.", icon: FiShoppingCart },
    ],
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    services: [
      { name: "SEO & Content Marketing", description: "Capture high-intent demand with search strategy, technical SEO, and authority content.", icon: FiSearch },
      { name: "Performance Marketing", description: "Scale paid acquisition with disciplined media buying, testing, and landing-page alignment.", icon: FiTarget },
      { name: "Social Media Marketing", description: "Build consistent brand attention through platform strategy, content, and community growth.", icon: FiShare2 },
      { name: "Conversion Optimization", description: "Turn more visitors into qualified leads with sharper funnels, UX decisions, and experimentation.", icon: FiMousePointer },
      { name: "Marketing Automation", description: "Automate follow-ups, lead nurturing, and CRM workflows so revenue compounds without manual drag.", icon: FiRepeat },
      { name: "Influencer Marketing", description: "Weaponize the creator economy with authentic UGC, celebrity partnerships, and creator whitelisting.", icon: FiStar },
    ],
  },
  {
    id: "erp",
    title: "ERP Solution",
    services: [
      { name: "Custom ERP", description: "White-glove ERP tailored to your exact workflows and approvals.", icon: FiBriefcase },
      { name: "ERP Rollout", description: "Precision rollout with migration, training, and adoption support.", icon: FiCheckCircle },
      { name: "ERP Integrations", description: "Real-time links across CRM, finance, and inventory stacks.", icon: FiLink },
      { name: "ERP Strategy", description: "Strategic guidance to modernize operations without disruption.", icon: FiUsers },
      { name: "Workflow Automation", description: "Automate critical workflows to reduce errors and cycle time.", icon: FiCpu },
    ],
  },
  {
    id: "saas",
    title: "SaaS",
    services: [
      { name: "SaaS Build", description: "Enterprise-grade SaaS engineered for scale and security.", icon: FiCloud },
      { name: "SaaS MVP", description: "Launch a premium MVP that investors and users respect.", icon: FiZap },
      { name: "Product UX", description: "Elegant product flows that reduce churn and support load.", icon: FiEye },
      { name: "Scale & Grow", description: "Architecture built to handle growth without compromise.", icon: FiMaximize },
      { name: "Care & Support", description: "Proactive monitoring, upgrades, and performance care.", icon: FiTool },
    ],
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="services"
      className="w-full pb-24 pt-8 sm:pb-28 lg:pb-32 px-6 sm:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">
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
              (() => {
                const href =
                  service.name === "Web Development"
                    ? "/services/web-development"
                    : service.name === "Mobile App Development"
                      ? "/services/mobile-app-development"
                      : service.name === "Custom Software Development"
                        ? "/services/custom-software-development"
                      : service.name === "API Development"
                        ? "/services/api-development"
                      : service.name === "E-commerce Development"
                        ? "/services/e-commerce-development"
                      : service.name === "UI/UX Development"
                        ? "/services/ui-ux-design"
                        : service.name === "SEO & Content Marketing"
                          ? "/services/seo-growth"
                          : service.name === "Performance Marketing"
                            ? "/services/performance-marketing"
                            : service.name === "Social Media Marketing"
                              ? "/services/social-media-marketing"
                              : service.name === "Conversion Optimization"
                                ? "/services/conversion-optimization"
                                : service.name === "Marketing Automation"
                                  ? "/services/marketing-automation"
                                  : service.name === "Influencer Marketing"
                                    ? "/services/influencer-marketing"
                      : null;
                const card = (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                      ease: [0.2, 0.65, 0.3, 0.9],
                    }}
                    className="group relative flex flex-col justify-between rounded-[22px] border border-[#0A2540]/10 bg-white/95 p-3.5 sm:p-5 shadow-[0_10px_30px_rgba(10,37,64,0.06)] ring-1 ring-inset ring-[#007BFF]/5 backdrop-blur-[2px] transition-all duration-500 hover:-translate-y-2 hover:border-[#007BFF]/40 hover:shadow-[0_24px_60px_rgba(0,123,255,0.14)] hover:ring-[#007BFF]/20 cursor-pointer overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,123,255,0.10),_transparent_55%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#007BFF]/10 blur-2xl transition-all duration-500 group-hover:bg-[#007BFF]/20" />
                    <div className="absolute left-6 top-0 h-1 w-12 rounded-b-full bg-gradient-to-r from-[#007BFF] to-[#00C2FF] opacity-70 transition-all duration-500 group-hover:w-16" />

                    <div className="relative z-10 block">
                      <div className="mb-3.5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#007BFF]/15 to-[#00C2FF]/5 text-[#007BFF] shadow-[0_8px_18px_rgba(0,123,255,0.12)] transition-all duration-500 group-hover:bg-[#007BFF] group-hover:text-white group-hover:shadow-[0_12px_28px_rgba(0,123,255,0.35)] group-hover:-translate-y-1">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-extrabold text-[#0A2540] group-hover:text-[#007BFF] transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#0A2540]/65 font-medium h-[2.75rem]">
                        {service.description}
                      </p>
                    </div>

                    <div className="relative z-10 mt-5 flex items-center justify-between">
                      <div className="h-[2px] w-0 bg-gradient-to-r from-[#007BFF]/50 to-transparent group-hover:w-14 transition-all duration-500 ease-out"></div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0A2540] shadow-[0_6px_18px_rgba(10,37,64,0.10)] transition-all duration-500 group-hover:bg-[#007BFF] group-hover:text-white group-hover:shadow-[0_10px_24px_rgba(0,123,255,0.35)]">
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
                );

                if (!href) {
                  return card;
                }

                return (
                  <Link
                    key={service.name}
                    href={href}
                    className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007BFF] rounded-[22px]"
                  >
                    {card}
                  </Link>
                );
              })()
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
      </div>
    </section>
  );
}
