"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../../components/Footer";
import { 
  FiShoppingCart, FiCreditCard, FiTrendingUp, FiBox,
  FiArrowRight, FiShield, FiSmartphone, FiCheckCircle, FiHeart, FiLock
} from "react-icons/fi";
import { FaShopify, FaStripe, FaWordpress, FaMagento } from "react-icons/fa";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } } } satisfies Variants;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } } } satisfies Variants;

const services = [
  {
    title: "Headless Commerce Architecture",
    description: "Decoupling the frontend from the backend to deliver blazing-fast, sub-second page loads that dramatically decrease cart abandonment.",
    icon: FiBox },
  {
    title: "Shopify Plus & Magento",
    description: "Enterprise-grade storefront engineering. We completely manipulate core platforms to handle extreme transaction volumes without crashing.",
    icon: FiShoppingCart },
  {
    title: "Frictionless Checkout Flows",
    description: "Designing hyper-optimized payment and cart experiences mathematically proven to maximize Average Order Value (AOV) and conversion rates.",
    icon: FiCreditCard },
  {
    title: "Subscriptions & Memberships",
    description: "Architecting custom recurring revenue models, loyalty point systems, and VIP tiers directly into your product buying lifecycle.",
    icon: FiHeart },
  {
    title: "ERP & Inventory Syncing",
    description: "Building custom API bridges that perfectly sync your live storefront inventory with complex backend warehouses and fulfillment centers.",
    icon: FiShield },
  {
    title: "Omnichannel Integrations",
    description: "Connecting your central inventory grid natively to TikTok Shop, Instagram Checkout, and Amazon to capture sales wherever the user resides.",
    icon: FiSmartphone },
];

const processSteps = [
  {
    title: "Conversion Blueprinting",
    text: "Before writing code, we map the exact user flow—from the moment they hit the product page to the final seamless checkout click." },
  {
    title: "Backend Data Structuring",
    text: "Configuring the product taxonomy, variants, ERP integrations, and payment gateways so the store can handle massive operational scale." },
  {
    title: "Frontend Engineering",
    text: "Building the custom UI components, micro-animations, and responsive cart behaviors that make the storefront feel undeniably premium." },
  {
    title: "Load Testing & Launch",
    text: "Subjecting the architecture to simulated traffic spikes to ensure zero downtime during Black Friday, product drops, or viral media hits." },
];

const featuredProjects = [
  {
    title: "Luxury Apparel D2C Store",
    category: "Shopify Plus Headless",
    image: "/images/project1.png", // Reuse existing provided paths
    summary:
      "Transitioned a high-fashion label to a custom headless Shopify architecture, reducing page load by 3.2s and boosting conversion rate by 18%." },
  {
    title: "B2B Wholesale Distributer",
    category: "Magento & ERP Sync",
    image: "/images/zenfora-food.png",
    summary:
      "Engineered a massive B2B portal syncing 500k+ SKUs in real-time with internal warehouse software, fully automating legacy manual ordering." },
];

const NavLink = ({
  href,
  children,
  isScrolled }: {
  href: string;
  children: string;
  isScrolled: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`group relative overflow-hidden inline-block h-[1.2em] font-semibold transition-colors duration-300 ${
        "text-[#0A2540]/80 hover:text-[#10B981]"
      }`}
    >
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
        {children}
      </span>
      <span
        className={`absolute left-0 top-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0 text-[#10B981] font-bold`}
      >
        {children}
      </span>
    </Link>
  );
};

export default function EcommerceDevelopmentPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F6F8] text-[#0A2540] font-sans selection:bg-[#10B981] selection:text-white">
      <title>Premium E-commerce Development | Setzet</title>
      <meta
        name="description"
        content="We build luxury-grade digital storefronts. Headless commerce, Shopify Plus, and friction-less checkouts designed purely for revenue velocity."
      />

      {/* Header - Light Mode */}
      <header
        className={`fixed top-0 z-50 w-full text-[10px] uppercase tracking-[0.35em] transition-all duration-300 sm:text-xs ${
          isScrolled
            ? "bg-[#F4F6F8]/90 text-[#0A2540]/80 shadow-[0_4px_30px_rgba(10,37,64,0.05)] backdrop-blur-md py-4"
            : "bg-transparent text-[#0A2540]/90 py-6"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-5 sm:px-10">
          <Link href="/" className="block transition-opacity duration-300 hover:opacity-80">
            <img src="/setzet-nav-logoo.png" alt="Setzet Logo" className="h-8 sm:h-10 xl:h-12 w-auto object-contain" />
          </Link>
          <nav className="hidden items-center gap-8 text-[11px] font-semibold transition-colors duration-300 md:flex">
            <NavLink href="/" isScrolled={isScrolled}>Home</NavLink>
            <NavLink href="/about" isScrolled={isScrolled}>About</NavLink>
            <NavLink href="/services" isScrolled={isScrolled}>Services</NavLink>
            <NavLink href="/work" isScrolled={isScrolled}>Work</NavLink>
            <NavLink href="/blogs" isScrolled={isScrolled}>Blogs</NavLink>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              className="hidden rounded-full border border-[#0A2540]/10 bg-white/50 backdrop-blur-md px-6 py-2.5 text-[11px] font-bold transition-all duration-300 hover:bg-[#10B981] hover:border-[#10B981] hover:text-white md:inline-flex text-[#0A2540]"
              href="/#contact"
            >
              Start a Project
            </Link>
            <button
              className="inline-flex h-10 items-center justify-center rounded-full border border-[#0A2540]/20 px-4 text-[11px] font-semibold transition md:hidden text-[#0A2540] hover:border-[#10B981]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="mr-2">{menuOpen ? "Close" : "Menu"}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-0 relative overflow-hidden">
        
        {/* =========================================
            HERO SECTION - THE STOREFRONT DASHBOARD
            ========================================= */}
        <section className="relative min-h-[100vh] flex items-center pt-32 pb-20 px-6">
          {/* Animated Background Ambience */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Emerald Green & Amber Gradients */}
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
              transition={{ duration: 10, ease: "easeInOut" }}
              className="absolute top-[-5%] right-[0%] w-[50vw] h-[50vw] rounded-full bg-[#10B981]/15 blur-[160px]" 
            />
            <motion.div 
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
              transition={{ duration: 12, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[-10%] left-[0%] w-[45vw] h-[45vw] rounded-full bg-[#F59E0B]/15 blur-[150px]" 
            />
            {/* Soft grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(10,37,64,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,37,64,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)]" />
          </div>

          <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-8 items-center relative z-10">
            
            {/* Left: Copy & Actions */}
            <div className="max-w-xl lg:pr-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0A2540]/10 bg-white/70 backdrop-blur-md px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#10B981] shadow-sm"
              >
                <FiShoppingCart className="text-sm" /> High-Performance Commerce
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight font-heading text-[#0A2540]"
              >
                Stores built to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#F59E0B]">print revenue.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-lg md:text-xl text-[#0A2540]/70 leading-relaxed font-light"
              >
                We do not use cheap templates. We engineer luxury-grade digital storefronts, sub-second headless architectures, and frictionless checkout flows obsessed with maximizing cart value.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-10 flex flex-wrap gap-5 items-center"
              >
                <Link
                  href="/#contact"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#0A2540] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all shadow-[0_10px_30px_rgba(10,37,64,0.3)] hover:scale-[1.02] hover:bg-[#1a365d]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Architect Front <FiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                
                <div className="flex items-center gap-3 px-4 py-3 bg-white/50 backdrop-blur-sm border border-[#0A2540]/10 rounded-full shadow-sm">
                  <FiLock className="text-xl text-[#F59E0B]" />
                  <div className="text-[10px] font-bold text-[#0A2540]/80 uppercase tracking-widest">
                    Checkout Optimization
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Floating E-Commerce UI  */}
            <div className="relative h-[650px] w-full hidden md:block perspective-[1400px]">
              
              {/* Main Node: The Product Card UX */}
              <motion.div 
                animate={{ y: [-10, 10, -10], rotateX: [10, 15, 10], rotateZ: [-4, -2, -4], rotateY: [-10, -5, -10] }}
                transition={{ duration: 8, ease: "easeInOut" }}
                className="absolute top-[10%] left-[10%] w-[340px] rounded-[24px] border border-[#0A2540]/10 bg-white/95 backdrop-blur-xl shadow-[0_40px_80px_rgba(10,37,64,0.1)] p-6 z-10 overflow-hidden"
              >
                 {/* Product Image Mock */}
                 <div className="w-full h-48 bg-[#F4F6F8] rounded-xl flex items-center justify-center mb-6 relative">
                    <Image src="/images/zenfora-food.png" alt="product mock" fill className="object-cover rounded-xl" sizes="340px" />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-[9px] font-bold uppercase tracking-widest text-[#0A2540]">New Arrival</div>
                 </div>
                 
                 <h3 className="text-xl font-black font-heading text-[#0A2540] mb-1">Noir Signature Jacket</h3>
                 <div className="text-[#10B981] font-bold text-lg mb-4">$420.00</div>

                 <div className="flex gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full border-2 border-[#10B981] p-0.5"><div className="w-full h-full bg-[#0A2540] rounded-full" /></div>
                    <div className="w-8 h-8 rounded-full border border-gray-200 p-0.5"><div className="w-full h-full bg-[#E5E7EB] rounded-full" /></div>
                 </div>

                 <button className="w-full bg-[#0A2540] text-white font-bold py-4 rounded-xl text-xs uppercase tracking-widest mb-3 flex items-center justify-center gap-2 hover:bg-[#10B981] transition-colors">
                    <FiShoppingCart /> Add to Cart
                 </button>
                 <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest text-center flex items-center justify-center gap-1">
                    <FiLock /> Secure encrypted checkout
                 </div>
              </motion.div>
              
              {/* Floating Layer 2: Revenue Velocity Dashboard */}
              <motion.div 
                animate={{ y: [-5, 15, -5], rotateX: [15, 20, 15], rotateZ: [2, 4, 2], rotateY: [-5, 0, -5] }}
                transition={{ duration: 9, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[20%] right-[5%] w-[260px] rounded-[20px] border border-[#10B981]/20 bg-white shadow-[0_30px_60px_rgba(16,185,129,0.15)] p-5 z-20"
              >
                 <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#10B981]/10 flex items-center justify-center text-[#10B981]">
                       <FiTrendingUp className="text-xl" />
                    </div>
                    <div>
                       <div className="text-[9px] uppercase tracking-widest font-bold text-gray-400">Total Revenue (24h)</div>
                       <div className="text-lg font-black text-[#0A2540]">$142,940.00</div>
                    </div>
                 </div>
                 {/* Faux graph */}
                 <div className="w-full h-12 flex items-end gap-1 opacity-80">
                    {[3, 5, 4, 7, 5, 8, 12, 10, 15].map((h, i) => (
                       <div key={i} className="flex-1 bg-gradient-to-t from-[#10B981] to-[#34D399] rounded-t-sm" style={{ height: `${h * 8}%` }} />
                    ))}
                 </div>
                 <div className="mt-3 flex justify-between text-[10px] font-bold text-green-500 bg-green-50 rounded-lg py-2 px-3">
                    <span>AOV</span> <span>+ 24%</span>
                 </div>
              </motion.div>

              {/* Mobile Stripe Notification */}
              <motion.div 
                animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 7, ease: "easeInOut", delay: 2.5 }}
                className="absolute top-[5%] right-[0%] w-[250px] rounded-2xl border border-white/50 bg-gradient-to-br from-white to-[#F0FDF4] shadow-[0_20px_40px_rgba(16,185,129,0.1)] p-4 pr-6 z-30 flex items-center gap-3"
              >
                 <div className="w-10 h-10 rounded-full bg-[#10B981] flex items-center justify-center text-white shadow-inner">
                    <FaStripe className="text-2xl" />
                 </div>
                 <div className="flex flex-col flex-1">
                    <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Payment Captured</div>
                    <div className="text-sm font-black text-[#0A2540]">$850.00 USD</div>
                 </div>
              </motion.div>

            </div>
          </div>
        </section>


        {/* =========================================
            SECTION 2: TECH STACK 
            ========================================= */}
        <section className="px-6 py-12 border-y border-[#0A2540]/5 bg-white">
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-[10px] uppercase tracking-[0.3em] font-bold text-[#0A2540]/40 mb-8">
              The Architecture Powering Global Sales
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaShopify className="text-[#95BF47] text-3xl" /> Shopify Plus</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaStripe className="text-[#635BFF] text-3xl" /> Stripe</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FiBox className="text-[#0A2540] text-3xl" /> Headless Commerce</div>
              <div className="flex items-center gap-2 text-xl font-bold font-heading text-[#0A2540]"><FaWordpress className="text-[#21759B] text-3xl" /> WooCommerce</div>
            </div>
          </div>
        </section>


        {/* =========================================
            SECTION 3: CORE CAPABILITIES (SERVICES GRID)
            ========================================= */}
        <section className="px-6 py-32 relative bg-[#F4F6F8]">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={stagger}
            className="mx-auto max-w-6xl"
          >
            <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
              <motion.div variants={reveal} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                <FiShoppingCart className="w-3 h-3" /> Core Infrastructure
              </motion.div>
              <motion.h2 variants={reveal} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-[#0A2540] max-w-3xl">
                We engineer frictionless consumption.
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  variants={reveal}
                  className="group relative rounded-[32px] border border-[#0A2540]/10 bg-white p-8 overflow-hidden transition-all duration-500 shadow-[0_8px_30px_rgba(10,37,64,0.03)] hover:shadow-[0_40px_60px_rgba(16,185,129,0.08)] hover:-translate-y-2 hover:border-[#10B981]/30"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#10B981] rounded-full blur-[100px] opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="absolute top-8 right-8 text-8xl font-black font-heading text-[#0A2540]/5 italic transform rotate-12 transition-transform duration-500 group-hover:scale-110">
                    {idx + 1}
                  </div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-[#F4F6F8] flex items-center justify-center text-[#10B981] mb-8 transition-colors duration-500 group-hover:bg-[#10B981] group-hover:text-white">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading mb-4 text-[#0A2540] pr-4">
                      {service.title}
                    </h3>
                    <p className="text-[0.95rem] text-[#0A2540]/70 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>


        {/* =========================================
            SECTION 4: PORTFOLIO TEASER
            ========================================= */}
        <section className="px-6 pb-32 bg-[#F4F6F8]">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                  <FiTrendingUp className="w-3 h-3" /> Tangible Outcomes
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#0A2540]">
                  Architectures that scale<br/>transaction volume.
                </h2>
              </motion.div>
              <Link href="/work" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#0A2540] hover:text-[#10B981] transition-colors">
                View E-commerce Case Studies <FiArrowRight className="transition-transform group-hover:translate-x-2" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group overflow-hidden rounded-[32px] bg-white border border-[#0A2540]/10 shadow-[0_10px_40px_rgba(10,37,64,0.03)] relative hover:shadow-[0_20px_60px_rgba(16,185,129,0.08)] transition-all duration-500"
                >
                  <div className="relative h-[340px] w-full overflow-hidden bg-[#EAF1F7] p-8 flex flex-col justify-end">
                    <div className="absolute inset-0 z-0">
                       <Image
                         src={project.image}
                         alt={project.title}
                         fill
                         className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-multiply"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/60 to-transparent" />
                    </div>
                    
                    <div className="relative z-10 w-full mb-2">
                       <div className="inline-flex items-center gap-2 rounded-md bg-white/20 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-[#D1FAE5]">
                        {project.category}
                      </div>
                      <h3 className="text-3xl font-extrabold font-heading text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-lg leading-relaxed text-[#0A2540]/70 font-light">
                      {project.summary}
                    </p>
                    <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-sm font-bold uppercase text-[#10B981]">
                       <span className="tracking-widest">Read Study</span>
                       <FiArrowRight />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* =========================================
            SECTION 5: THE PROCESS (STOREFRONT ENGINE)
            ========================================= */}
        <section className="px-6 py-32 border-y border-[#0A2540]/5 bg-white relative overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-24 relative z-20">
              <span className="inline-block rounded-full bg-[#10B981]/10 border border-[#10B981]/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.35em] text-[#10B981] mb-6 shadow-sm">
                The Storefront Engine
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight text-[#0A2540]">
                Engineering the Checkout
              </h2>
              <p className="mt-6 text-lg text-[#0A2540]/70 font-light max-w-2xl mx-auto">
                E-commerce development requires absolute precision. We handle every step from UX blueprinting to ERP warehouse syncing to ensure your store is an impenetrable sales engine.
              </p>
            </div>

            {/* Desktop Graphical Blocks */}
            <div className="hidden lg:grid grid-cols-4 gap-4 max-w-6xl mx-auto relative group pt-8 pb-12">
               
               {/* Arrow Connections */}
               <div className="absolute top-1/2 left-[12%] right-[12%] h-1 bg-gradient-to-r from-[#10B981]/20 via-[#F59E0B]/20 to-[#10B981]/20 -translate-y-1/2 z-0" />

               {processSteps.map((step, index) => (
                  <motion.div 
                     key={index} 
                     initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ delay: index * 0.15 }}
                     className="bg-white border-2 border-[#0A2540]/5 rounded-[32px] p-8 text-center shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[#10B981]/30 z-10 flex flex-col items-center"
                  >
                     
                     <div className="w-16 h-16 bg-[#F4F6F8] rounded-full flex items-center justify-center mb-6 text-xl font-black text-[#10B981] shadow-inner font-heading">
                        {index+1}
                     </div>
                     
                     <h3 className="text-lg font-bold font-heading text-[#0A2540] mb-3">{step.title}</h3>
                     <p className="text-[13px] text-[#0A2540]/70 font-light leading-relaxed">{step.text}</p>
                     
                  </motion.div>
               ))}

            </div>

            {/* Mobile Vertical Blocks */}
            <div className="lg:hidden space-y-4 max-w-xl mx-auto relative px-4">
               {processSteps.map((step, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative bg-[#F4F6F8] p-6 rounded-[24px] border border-[#0A2540]/5 flex gap-5">
                     <div className="w-12 h-12 shrink-0 bg-white border border-[#10B981]/20 rounded-[12px] flex items-center justify-center font-black text-lg text-[#10B981] shadow-sm font-heading">
                        {index+1}
                     </div>
                     <div>
                        <h3 className="text-lg font-bold font-heading text-[#0A2540] mb-1">{step.title}</h3>
                        <p className="text-sm text-[#0A2540]/70 font-light">{step.text}</p>
                     </div>
                  </motion.div>
               ))}
            </div>

          </div>
        </section>


        {/* =========================================
            SECTION 6: FINAL CTA 
            ========================================= */}
        <section className="px-6 pb-24 relative bg-[#F4F6F8] py-16">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
            className="mx-auto max-w-6xl relative overflow-hidden rounded-[40px] bg-[#0A2540] px-10 py-24 text-center shadow-[0_20px_60px_rgba(10,37,64,0.3)]"
          >
            {/* Background dynamic E-com lighting */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(16,185,129,0.35)_0%,_transparent_70%)] blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(245,158,11,0.3)_0%,_transparent_70%)] blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
            
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

            <div className="relative z-10 flex flex-col items-center">
              <span className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.35em] text-[#D1FAE5] mb-8 backdrop-blur-md">
                Launch Your Storefront
              </span>
              <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight font-heading max-w-4xl mx-auto leading-[1.05] text-white">
                Ready to engineer your brand's highest converting quarter?
              </h2>
              <p className="mt-8 max-w-2xl text-lg text-white/70 mx-auto font-light">
                Map out your backend requirements today. We will architect a storefront that handles massive bandwidth and forces frictionless checkouts.
              </p>
              
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
                <Link
                  href="/#contact"
                  className="group rounded-full bg-[#10B981] px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all shadow-[0_10px_30px_rgba(16,185,129,0.4)] hover:scale-105 hover:bg-[#059669] flex items-center gap-3"
                >
                  Architect My Storefront <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/work"
                  className="rounded-full border border-white/20 px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-white/10 backdrop-blur-sm"
                >
                  View High-AOV Case Studies
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
