"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function AboutPage() {
  return (
    <div className="noise-bg bg-[#F4F6F8] text-[#0A2540] selection:bg-[#007BFF]/20 selection:text-[#0A2540] font-sans min-h-screen">
      <title>About | SetZet Digital Agency</title>
      <meta name="description" content="A premium web development agency building the next generation of high-performance digital experiences." />

      <Navbar forceDarkAtTop={true} />

      {/* 1. HERO SECTION (Reference-inspired layout) */}
      <section className="relative pt-24 lg:pt-32 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 w-full text-center lg:text-left pt-6 lg:pt-0">
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.8rem] font-extrabold font-heading text-[#0A2540] tracking-tight leading-[1.15] lg:leading-[1.05] mb-6 lg:mb-8 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
              About Setzet <br className="hidden lg:block" /> with Engineering <br className="hidden lg:block" /> & Aesthetics
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#0A2540]/70 text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 lg:mb-10">
              Wherever you are should not be a factor in what you do. Brilliant engineering and flawless design combined will change the way the digital world works.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/#contact" className="inline-flex h-12 md:h-14 items-center justify-center rounded-full bg-[#007BFF] px-8 text-sm md:text-base font-bold text-white transition-all shadow-[0_8px_30px_rgba(0,123,255,0.3)] hover:bg-[#0056b3] hover:-translate-y-1">
                Start a Project
              </Link>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-[320px] sm:max-w-md md:max-w-xl lg:max-w-none mx-auto lg:mx-0 mt-6 lg:mt-0">
             {/* Connecting SVG lines and dots */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                {/* Lines mimicking the network/collage aesthetic */}
                <line x1="25%" y1="20%" x2="75%" y2="40%" stroke="#0A2540" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 4" />
                <line x1="75%" y1="40%" x2="45%" y2="80%" stroke="#0A2540" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 4" />
                <line x1="25%" y1="20%" x2="45%" y2="80%" stroke="#0A2540" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 4" />
                <line x1="5%" y1="50%" x2="25%" y2="20%" stroke="#007BFF" strokeWidth="1" strokeOpacity="0.5" />
                
                {/* Dots at intersection points */}
                <circle cx="25%" cy="20%" r="4" fill="#0A2540" fillOpacity="0.8" />
                <circle cx="75%" cy="40%" r="4" fill="#0A2540" fillOpacity="0.8" />
                <circle cx="45%" cy="80%" r="4" fill="#0A2540" fillOpacity="0.8" />
                <circle cx="5%" cy="50%" r="4" fill="#007BFF" />
             </svg>

             {/* Image 1: Top Left */}
             <div className="absolute top-[5%] lg:top-[10%] left-[5%] w-[45%] lg:w-[45%] aspect-[4/3] rounded-2xl overflow-hidden border border-[#0A2540]/10 bg-[#e2e6eb] shadow-xl z-20">
                <Image src="/about_photo.png" fill alt="Engineering" className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700" />
             </div>
             {/* Image 2: Middle Right */}
             <div className="absolute top-[25%] lg:top-[25%] right-[0%] lg:right-[5%] w-[45%] aspect-square rounded-2xl overflow-hidden border border-[#0A2540]/10 bg-[#e2e6eb] shadow-[0_20px_40px_rgba(10,37,64,0.1)] z-30">
                <Image src="/images/aesthetic-img2.png" fill alt="Aesthetics" className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" />
             </div>
             {/* Image 3: Bottom Left, overlapping slightly */}
             <div className="absolute bottom-[5%] lg:bottom-[5%] left-[15%] lg:left-[25%] w-[35%] aspect-[3/4] rounded-2xl overflow-hidden border border-[#0A2540]/10 bg-[#e2e6eb] shadow-lg z-10">
                <Image src="/images/aesthetic-img3.png" fill alt="Productivity" className="object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700" />
             </div>
          </motion.div>
        </div>
      </section>
      {/* TRUSTED BY — BRAND LOGOS STRIP */}
      <section className="py-12 md:py-16 px-6 border-y border-[#0A2540]/5 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-[10px] md:text-xs font-bold tracking-[0.35em] uppercase text-[#0A2540]/40 mb-8 md:mb-10"
          >
            Trusted by forward-thinking brands
          </motion.p>

          {/* Scrolling marquee row */}
          <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <ul className="flex shrink-0 items-center gap-12 md:gap-16 lg:gap-20 animate-[marquee_28s_linear_infinite]">
              {[
                { name: "PureMakhana", tag: "D2C Brand" },
                { name: "Yastudy", tag: "Education" },
                { name: "Zenfora", tag: "FMGC" },
                { name: "Narayana Agri Solution", tag: "Agriculture" },
                { name: "UrbanNest", tag: "Real Estate" },
                { name: "ZenFlow", tag: "Wellness App" },
                { name: "StackPilot", tag: "DevTools" },
                { name: "UncleMakhana", tag: "B2B Brand" },
                
              ].map((brand, i) => (
                <li key={i} className="flex flex-col items-center gap-1 shrink-0 group">
                  <span className="text-lg md:text-2xl font-extrabold font-heading text-[#0A2540]/25 group-hover:text-[#0A2540]/70 tracking-tight transition-colors duration-300 whitespace-nowrap select-none">
                    {brand.name}
                  </span>
                  <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-[#007BFF]/0 group-hover:text-[#007BFF]/60 transition-colors duration-300">
                    {brand.tag}
                  </span>
                </li>
              ))}
            </ul>
            {/* Duplicate for seamless loop */}
            <ul className="flex shrink-0 items-center gap-12 md:gap-16 lg:gap-20 animate-[marquee_28s_linear_infinite] ml-12 md:ml-16 lg:ml-20" aria-hidden>
              {[
                { name: "PureMakhana", tag: "D2C Brand" },
                { name: "NovaTech", tag: "SaaS" },
                { name: "UrbanNest", tag: "Real Estate" },
                { name: "ZenFlow", tag: "Wellness App" },
                { name: "StackPilot", tag: "DevTools" },
                { name: "LumiAI", tag: "AI Platform" },
                { name: "ClearPath", tag: "Fintech" },
                { name: "BoltStore", tag: "E-Commerce" },
              ].map((brand, i) => (
                <li key={i} className="flex flex-col items-center gap-1 shrink-0 group">
                  <span className="text-lg md:text-2xl font-extrabold font-heading text-[#0A2540]/25 group-hover:text-[#0A2540]/70 tracking-tight transition-colors duration-300 whitespace-nowrap select-none">
                    {brand.name}
                  </span>
                  <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-[#007BFF]/0 group-hover:text-[#007BFF]/60 transition-colors duration-300">
                    {brand.tag}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 2. MISSION & VALUE BOX SECTION (Reference block) */}
      <section className="px-4 lg:px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerContainer}
            className="bg-[#ffffff] rounded-[2rem] p-6 md:p-12 lg:p-20 border border-[#0A2540]/5 shadow-[0_8px_40px_rgba(10,37,64,0.03)]"
          >
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">
               <motion.div variants={fadeUp} className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] rounded-[1.5rem] overflow-hidden shadow-sm border border-[#0A2540]/5 w-full order-2 lg:order-1 mt-6 lg:mt-0">
                  <Image src="/images/aesthetic-img4.png" fill alt="Our Mission" className="object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/10 to-transparent pointer-events-none" />
               </motion.div>
               
               <motion.div variants={staggerContainer} className="order-1 lg:order-2 text-center lg:text-left">
                  <motion.h3 variants={fadeUp} className="text-[#0A2540] text-3xl md:text-4xl font-heading font-extrabold mb-4 md:mb-5 tracking-tight">Our Mission</motion.h3>
                  <motion.p variants={fadeUp} className="text-[#0A2540]/70 text-base md:text-lg lg:text-[1.1rem] font-medium leading-[1.7] mb-10 lg:mb-16">
                     At Setzet, we provide tailored digital engineering and aesthetic perfection to boost operational efficiency, drive innovation, and support immense scale. We help individuals and ambitious businesses optimize their digital presence for lasting authority.
                  </motion.p>
                  
                  <motion.h3 variants={fadeUp} className="text-[#0A2540] text-3xl md:text-4xl font-heading font-extrabold mb-4 md:mb-5 tracking-tight">Our Value</motion.h3>
                  <motion.p variants={fadeUp} className="text-[#0A2540]/70 text-base md:text-lg lg:text-[1.1rem] font-medium leading-[1.7]">
                     Setzet sets the global standard in high-performance digital products, empowering global organizations through uncompromising design and flawless execution strategies. Join us to elevate your brand to the next paradigm.
                  </motion.p>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. ROSTER / CORE TEAM (Reference Grid Concept) */}
      <section className="px-4 lg:px-6 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={fadeUp}
            className="mb-12 md:mb-16 text-center space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-[#0A2540] tracking-tight">Meet the Architects.</h2>
            <p className="text-[#0A2540]/60 font-medium text-lg max-w-xl mx-auto">The brilliant minds driving our digital excellence forward.</p>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-3xl lg:max-w-none mx-auto">
            {[
              { name: "Wasim Faiz", role: "Team Lead", image: "/images/wasim-faiz.png" },
              { name: "Sagar Singh", role: "Head of Engineering", image: "/images/sagar-singh.jpg" },
              { name: "R.K Singh", role: "Creative Director", image: "/images/r.k-singh.jpeg" },
              { name: "Sakshi Singh", role: "VP of Growth", image: "/images/sakshi-singh.jpg" }
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group flex flex-col bg-white rounded-2xl border border-[#0A2540]/10 p-3 pb-6 shadow-[0_4px_20px_rgba(10,37,64,0.03)] hover:shadow-[0_20px_40px_rgba(10,37,64,0.08)] hover:-translate-y-2 transition-all duration-300 cursor-default"
              >
                <div className="relative aspect-[4/5] rounded-[14px] overflow-hidden mb-5 bg-[#e2e6eb] border border-[#0A2540]/5">
                   <Image src={member.image} fill alt={member.name} className="object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                </div>
                <div className="text-center px-1">
                   <h4 className="font-heading font-extrabold text-lg lg:text-xl text-[#0A2540] tracking-tight truncate">{member.name}</h4>
                   <p className="text-xs lg:text-sm font-bold text-[#0A2540]/40 mt-1 uppercase tracking-widest">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SUCCESS BANNER & STATS (Reference Bottom) */}
      <section className="px-6 py-24 lg:py-32 bg-white border-y border-[#0A2540]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-10%" }}
               transition={{ duration: 0.8 }}
               className="text-3xl sm:text-4xl md:text-6xl lg:text-[5.5rem] font-extrabold font-heading tracking-tight text-[#0A2540] leading-[1.1] md:leading-[1.05]"
            >
               Our success depends on <br className="hidden lg:block"/> <span className="text-[#007BFF]">your success.</span>
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 text-center divide-x-0 lg:divide-x divide-[#0A2540]/10 mb-10 md:mb-20 max-w-5xl mx-auto">
            {[
              { val: "$150M+", label: "Client Revenue" },
              { val: "0ms", label: "Latency Tolerated" },
              { val: "24+", label: "Industry Awards" },
              { val: "99%", label: "Satisfaction" }
            ].map((stat, i) => (
              <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex flex-col items-center justify-center p-4"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold font-heading text-[#007BFF] tracking-tighter mb-2 md:mb-4">{stat.val}</div>
                <div className="text-[#0A2540]/50 text-[10px] md:text-sm font-bold font-mono tracking-[0.1em] md:tracking-[0.2em] uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
