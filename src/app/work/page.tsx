"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// --- DATA: Story-Driven Projects ---
const workStories = [
  {
    chapter: "01",
    title: "Yastudy",
    tagline: "Bridging Borders Through Education",
    description: "Language is the key to opportunity. Yastudy unlocks global education with a streamlined, digital-first learning platform.",
    narrative: "Navigating international admissions and language barriers is daunting. We built a unified ecosystem for Yastudy that combines immersive German language modules, IELTS prep, and automated consultancy workflows. The result? A 300% increase in successful university placements.",
    tags: ["EdTech", "E-Learning", "Platform"],
    image: "/images/project1.png",
    color: "#fbbf24"
  },
  {
    chapter: "02",
    title: "Zenfora Foods",
    tagline: "The Superfood Revolution",
    description: "Healthy snacking shouldn't be boring. Zenfora turns foxnuts (makhana) into a lifestyle brand for the modern, health-conscious consumer.",
    narrative: "From protein powders to gourmet chocolates, Zenfora's product line is diverse. We crafted a vibrant, appetite-inducing digital storefront that highlights the nutritional power of foxnuts. With a seamless D2C checkout and subscription model, we turned casual snackers into loyal subscribers — and helped drive 3x organic traffic in 90 days.",
    tags: ["FMCG", "E-Commerce", "Brand Strategy"],
    image: "/images/zenfora-food.png",
    color: "#f97316"
  },
  {
    chapter: "03",
    title: "Pure Makhana",
    tagline: "The Zenith of Purity",
    description: "A premium, luxury, and ultra-clean website for a high-end makhana brand, designed to communicate purity and modern elegance.",
    narrative: "We designed a spacious layout with ample white space, elegant typography, and subtle micro-animations to elevate the brand. The soft, neutral color palette with gold accents communicates a high-class, luxury wellness experience compared to typical local snack brands, delivering a +18–25% conversion lift.",
    tags: ["Brand Website", "Luxury", "UI/UX"],
    image: "/images/pure-makhana.png",
    color: "#d4af37"
  },
  {
    chapter: "04",
    title: "Uncle Makhana",
    tagline: "Crunchy, Healthy, Irresistible",
    description: "Snacking doesn't have to be a guilty pleasure. Uncle Makhana brings traditional, nutrient-packed foxnuts to the modern consumer with a punch of incredible flavors.",
    narrative: "We designed a vibrant and appetizing digital experience that perfectly captures the playful essence of the Uncle Makhana brand. From dynamic packaging layouts to a seamless e-commerce journey, we built a storefront that turns every craving into an effortless purchase — launched in 6 weeks.",
    tags: ["D2C", "E-Commerce", "Branding"],
    image: "/images/aesthetic-img2.png",
    color: "#f43f5e"
  },
  {
    chapter: "05",
    title: "Nebula Stream",
    tagline: "Ownership for Creators",
    description: "The creator economy was broken. We helped fix it with decentralized protocols giving power back to the artist.",
    narrative: "We built a platform where the interface is as transparent as the blockchain beneath it. Smart contracts handle the complexity, while the user enjoys a seamless, captivating streaming experience. This is Web3, humanized.",
    tags: ["Web3", "Blockchain", "Community"],
    image: "/images/aesthetic_ui_mockup.png",
    color: "#8b5cf6"
  }
];

const impactStats = [
    { value: "30+", label: "Projects Delivered", desc: "Websites and digital products shipped end-to-end." },
    { value: "5+", label: "Years Building", desc: "Hands-on experience across modern stacks." },
    { value: "8+", label: "Industries Served", desc: "From SaaS to D2C and B2B." },
    { value: "24h", label: "Avg. Response Time", desc: "Fast, reliable communication from day one." }
];

// --- COMPONENTS ---

// 1. STORY ITEM (Modern Expansive Aesthetic)
const StoryItem = ({ project, i }: { project: typeof workStories[0], i: number }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const isEven = i % 2 === 0;

    // Subtler parallax for the larger image
    const scaleImg = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
    
    // Content card floats smoothly
    const yContent = useTransform(scrollYProgress, [0, 1], [60, -60]);

    return (
        <section ref={containerRef} className="py-24 relative z-10 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative flex items-center justify-center min-h-[80vh]">
                
                {/* Massive Typography Behind Everything */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 hidden lg:block opacity-[0.02]">
                    <span className="text-[25vw] font-bold tracking-tighter leading-none select-none whitespace-nowrap">
                        {project.chapter}
                    </span>
                </div>

                {/* Main Content Layout - Overlapping Grid */}
                <div className={`w-full flex flex-col md:flex-row items-center relative z-10 gap-8 md:gap-0 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                    
                    {/* Expansive Image Card */}
                    <div className={`w-full md:w-[70%] lg:w-[65%] relative z-10 ${isEven ? 'md:mr-[-15%]' : 'md:ml-[-15%] md:order-2'}`}>
                        <div className="w-full aspect-[4/3] md:aspect-[16/10] bg-[#111116] rounded-[32px] overflow-hidden relative group shadow-2xl p-2 md:p-4 border border-black/5">
                            
                            {/* Inner framing */}
                            <div className="w-full h-full rounded-[24px] overflow-hidden relative">
                                <motion.div style={{ scale: scaleImg }} className="absolute inset-0 will-change-transform">
                                    <Image 
                                         src={project.image}
                                         alt={project.title}
                                         fill
                                         className="object-cover object-center filter contrast-[1.05] group-hover:scale-105 transition-transform duration-[2s] ease-[0.16,1,0.3,1]"
                                         onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                     />
                                     {/* Dark overlay that fades on hover */}
                                     <div className="absolute inset-0 bg-[#0A2540]/20 transition-opacity duration-1000 group-hover:opacity-0" />
                                </motion.div>
                            </div>

                            {/* Floating Action Button inside image */}
                            <div className={`absolute bottom-8 z-20 ${isEven ? 'right-8' : 'left-8'}`}>
                                <button className="w-14 h-14 rounded-full bg-white text-[#0A2540] shadow-xl flex items-center justify-center hover:scale-110 hover:bg-[#007BFF] hover:text-white transition-all duration-300">
                                    <FiArrowUpRight className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Content Card */}
                    <motion.div 
                        style={{ y: yContent }}
                        className={`w-full md:w-[45%] lg:w-[40%] relative z-20 ${isEven ? 'md:order-2' : 'md:order-1'}`}
                    >
                        <div className="bg-[#F4F6F8]/95 backdrop-blur-xl p-10 lg:p-14 rounded-[32px] shadow-[0_30px_60px_rgba(10,37,64,0.06)] border border-[#0A2540]/5 group-hover:border-[#007BFF]/30 transition-colors">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-[1px] w-8 bg-[#007BFF]/50" />
                                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#007BFF]">
                                    Selected Work // {project.chapter}
                                </span>
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-sans font-extrabold tracking-tight text-[#0A2540] leading-[1.1] mb-3">
                                {project.title}
                            </h2>
                            
                            <p className="text-lg font-medium text-[#0A2540]/50 mb-8 italic">
                                {project.tagline}
                            </p>

                            <div className="space-y-6 text-[#0A2540]/70 leading-relaxed font-medium text-[15px] mb-10">
                                <p>{project.description}</p>
                                <p className="opacity-80 hidden md:block">{project.narrative}</p>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-6 border-t border-[#0A2540]/10">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className="font-sans text-[11px] font-bold text-[#0A2540] px-4 py-1.5 bg-white border border-[#0A2540]/10 shadow-sm rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

// 2. IMPACT SECTION (Replaces ConceptLab)
const ImpactSection = () => {
    return (
        <section className="py-32 px-6 bg-[#F4F6F8] relative z-10 border-t border-[#0A2540]/5">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-20 mb-20 items-end">
                    <div>
                        <span className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-[#0A2540]/40 block mb-6">Our Impact</span>
                        <h2 className="text-5xl md:text-7xl font-heading font-extrabold leading-tight text-[#0A2540]">
                            Metrics that <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#0A2540] italic font-serif font-light">actually matter.</span>
                        </h2>
                    </div>
                    <div className="text-xl text-[#0A2540]/60 max-w-md pb-4 leading-relaxed font-medium">
                        We don't just deliver beautiful pixels; we deliver measurable business impact. Our work is designed to scale, convert, and dominate markets.
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {impactStats.map((stat, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white rounded-[2rem] p-10 border border-[#0A2540]/5 flex flex-col justify-between h-[320px] group hover:border-[#007BFF]/30 hover:shadow-[0_8px_30px_rgba(10,37,64,0.08)] transition-all duration-500 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#007BFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="relative z-10">
                                <h3 className="text-5xl md:text-7xl font-heading font-extrabold text-[#007BFF] group-hover:scale-105 origin-left transition-transform duration-500">{stat.value}</h3>
                                <div className="h-px w-12 bg-[#0A2540]/10 my-6 group-hover:w-24 group-hover:bg-[#007BFF]/50 transition-all duration-500" />
                            </div>
                            
                            <div className="relative z-10">
                                <h4 className="text-xl font-bold text-[#0A2540] mb-2">{stat.label}</h4>
                                <p className="text-sm text-[#0A2540]/60 leading-relaxed font-medium">{stat.desc}</p>
                            </div>
                            
                            {/* Decorative element */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#007BFF]/5 group-hover:scale-[2.5] group-hover:bg-[#0A2540]/5 transition-all duration-700 ease-in-out z-0" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default function WorkPage() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="bg-[#F4F6F8] text-[#0A2540] selection:bg-[#007BFF]/20 selection:text-[#0A2540] font-sans min-h-screen relative overflow-clip">
      <Navbar forceDarkAtTop={true} />

      {/* --- HERO: Setting the Scene --- */}
      <section className="min-h-[100dvh] flex flex-col items-center justify-center relative px-6 pt-32 pb-32">
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              <motion.div 
                  animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 90, 0]
                  }}
                  transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                  className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#007BFF]/10 blur-[100px] rounded-full will-change-transform" 
              />
              <motion.div 
                  animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, -90, 0]
                  }}
                  transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                  className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[1000px] max-h-[1000px] bg-[#007BFF]/5 blur-[120px] rounded-full will-change-transform" 
              />
              <div className="absolute inset-0 bg-[#F4F6F8]/60" />
          </div>

          <div className="text-center space-y-8 max-w-5xl z-10 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="inline-block px-5 py-2 rounded-full border border-[#0A2540]/10 bg-white/50 backdrop-blur-md mb-4 shadow-sm"
              >
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#007BFF]">
                      Our Philosophy
                  </p>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-[clamp(3.5rem,8vw,8.5rem)] font-heading font-extrabold leading-[0.9] tracking-tighter text-[#0A2540] will-change-transform"
              >
                  We don't just build websites. <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#0A2540] italic font-serif font-light">We craft legacies.</span>
              </motion.h1>
              
              <motion.p
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.8, duration: 0.8 }}
                 className="text-lg md:text-2xl text-[#0A2540]/70 max-w-2xl mx-auto leading-relaxed font-medium mt-8"
              >
                  Every project is a story waiting to be told. A narrative of problem-solving, aesthetic precision, and technical mastery.
              </motion.p>
          </div>
          
          {/* Circular Scrolling Text */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1.5, duration: 1 }}
             className="relative mt-16 flex items-center justify-center z-20 cursor-default"
          >
              <motion.div 
                  animate={{ rotate: 360 }} 
                  transition={{ duration: 12, ease: "linear", repeat: Infinity }}
                  className="w-32 h-32 md:w-36 md:h-36 flex items-center justify-center"
              >
                  <svg viewBox="0 0 100 100" className="w-full h-full opacity-60 overflow-visible">
                      <path id="textPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                      <text className="text-[10.5px] font-mono uppercase tracking-[0.2em] font-bold fill-[#007BFF]">
                          <textPath href="#textPath" startOffset="0%">
                              Scroll to begin • Scroll to begin • 
                          </textPath>
                      </text>
                  </svg>
              </motion.div>
              <div className="absolute flex items-center justify-center">
                  <FiArrowDown className="text-[#007BFF]/60 w-6 h-6" />
              </div>
          </motion.div>
      </section>

      {/* --- CHAPTERS: The Work --- */}
      <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-[#0A2540]/10 -translate-x-1/2 z-0 hidden md:block" />
          
          {workStories.map((story, i) => (
              <StoryItem key={i} project={story} i={i} />
          ))}
      </div>

      {/* --- INTERLUDE: Text Section --- */}
      <section className="py-40 px-6 bg-white border-y border-[#0A2540]/10 text-center">
          <div className="container mx-auto max-w-4xl space-y-10">
              <h2 className="text-4xl md:text-6xl font-heading font-extrabold leading-tight text-[#0A2540]">
                  "The details are not the details. <br/> They make the design."
              </h2>
              <p className="font-mono text-sm font-bold flex justify-center uppercase tracking-widest text-[#007BFF]">- Charles Eames</p>
          </div>
      </section>

      {/* --- IMPACT SECTION --- */}
      <ImpactSection />

      {/* --- FOOTER CTA --- */}
      <section className="h-[80vh] flex flex-col items-center justify-center bg-white relative border-t border-[#0A2540]/5 overflow-hidden">
          <div className="text-center z-10 space-y-8">
              <h2 className="text-[clamp(3rem,8vw,7rem)] font-heading font-extrabold leading-none text-[#0A2540]">
                  Your Story <br/> Starts Here.
              </h2>
              <Link href="/#contact" className="inline-block bg-[#007BFF] text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-105 hover:bg-[#0056b3] transition-all shadow-[0_8px_30px_rgba(0,123,255,0.3)]">
                  Begin The Journey
              </Link>
          </div>
           {/* Grid Pattern Overlay */}
           <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#0A2540_1px,transparent_1px),linear-gradient(to_bottom,#0A2540_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </section>

      <Footer />
    </div>
  );
}
