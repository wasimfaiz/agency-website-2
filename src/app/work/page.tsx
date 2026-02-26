"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
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
    narrative: "From protein powders to gourmet chocolates, Zenfora's product line is diverse. We crafted a vibrant, appetite-inducing digital storefront that highlights the nutritional power of foxnuts. With a seamless D2C checkout and subscription model, we turned casual snackers into loyal subscribers.",
    tags: ["FMCG", "E-Commerce", "Brand Strategy"],
    image: "/images/aesthetic-img4.png",
    color: "#f97316"
  },
  {
    chapter: "03",
    title: "Nova Estate",
    tagline: "Architecture You Can Feel",
    description: "Luxury real estate isn't bought; it's experienced. We crafted a digital environment that rivals the physical spaces it sells.",
    narrative: "Static images were not enough. We implemented cinematic 3D walkthroughs and ambient soundscapes to transport potential buyers into the property before they ever stepped foot inside. This emotional connection drove conversion rates up by 40%.",
    tags: ["Immersive Web", "3D Motion", "Brand"],
    image: "/images/aesthetic-img3.png",
    color: "#c084fc"
  },
  {
    chapter: "04",
    title: "Oria Finance",
    tagline: "Banking Without Friction",
    description: "Money moves fast. Your banking app should too. We stripped away the noise to focus on speed, security, and simplicity.",
    narrative: "Complexity is the enemy of trust. For Oria, we redesigned the entire banking flow from first principles, reducing user actions by 60%. Every interaction is micro-animated to provide instant, reassuring feedback. Banking has never felt this fluid.",
    tags: ["Fintech", "App Design", "System Architecture"],
    image: "/images/mobile-app-development.png",
    color: "#2dd4bf"
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
    { value: "250+", label: "Digital Products", desc: "Successfully engineered and launched globally." },
    { value: "5M+", label: "Active Users", desc: "Interacting with interfaces we've crafted." },
    { value: "10x", label: "Average ROI", desc: "Driven by conversion-focused digital strategies." },
    { value: "12+", label: "Industry Awards", desc: "Recognized for both design and technical excellence." }
];

// --- COMPONENTS ---

// 1. STORY ITEM (Parallax & Sticky)
const StoryItem = ({ project, i }: { project: typeof workStories[0], i: number }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const scaleImg = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
    const opacityOverlay = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.6, 0, 0.6]);

    return (
        <section ref={containerRef} className="min-h-screen py-20 flex items-center relative z-10">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                
                {/* Text Side - Sticky-ish Feel thanks to Parallax */}
                <motion.div style={{ y: yText }} className="space-y-10 order-2 md:order-1 relative z-20 will-change-transform">
                    <span className="font-mono text-sm uppercase tracking-[0.3em] text-black/40 block">
                        Chapter {project.chapter}
                    </span>
                    
                    <h2 className="text-6xl md:text-8xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-b from-black to-black/40 leading-tight">
                        {project.title}
                    </h2>
                    
                    <h3 className="text-2xl md:text-3xl text-black font-light italic border-l-2 border-black/20 pl-6">
                        "{project.tagline}"
                    </h3>
                    
                    <div className="space-y-6 text-lg text-black/70 leading-loose max-w-md">
                        <p>{project.description}</p>
                        <p className="text-black/50 text-base">{project.narrative}</p>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-6">
                        {project.tags.map((tag, idx) => (
                            <span key={idx} className="px-5 py-2.5 rounded-full border border-black/5 bg-black/[0.02] text-xs font-semibold uppercase tracking-[0.1em] text-black/60 hover:bg-black hover:text-white transition-colors cursor-default backdrop-blur-sm">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="pt-10">
                         <div className="group flex items-center gap-4 cursor-pointer">
                             <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                                 <svg className="w-5 h-5 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                 </svg>
                             </div>
                             <span className="uppercase tracking-[0.15em] text-sm text-black font-medium group-hover:translate-x-2 transition-transform duration-300">Read Case Study</span>
                         </div>
                    </div>
                </motion.div>

                {/* Image Side - Cinematic Parallax */}
                <div className="order-1 md:order-2 relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] group">
                    <motion.div style={{ scale: scaleImg }} className="absolute inset-0 bg-[#F5F5F7] transition-transform duration-700 group-hover:scale-105 will-change-transform">
                         {/* Dynamic Abstract Background */}
                         <div className="absolute inset-0">
                             <div className="absolute -top-40 -left-40 w-[150%] h-[150%] opacity-40 blur-3xl mix-blend-multiply transition-colors duration-1000" style={{ background: `radial-gradient(circle at 40% 40%, ${project.color}, transparent 60%)` }} />
                             <div className="absolute bottom-0 right-0 w-[100%] h-[100%] opacity-30 blur-2xl mix-blend-multiply transition-colors duration-1000" style={{ background: `radial-gradient(circle at 80% 80%, ${project.color}, transparent 60%)` }} />
                         </div>
                         
                         {/* Centered Floating Element mapping to project */}
                         <div className="absolute inset-0 flex items-center justify-center p-10">
                             <motion.div 
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="w-full max-w-sm aspect-square bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-white overflow-hidden relative flex flex-col group-hover:-translate-y-2 transition-transform duration-500"
                             >
                                 {/* Fake Toolbar/Header */}
                                 <div className="h-10 border-b border-white/40 flex items-center px-5 gap-2 bg-white/50">
                                     <div className="w-3 h-3 rounded-full bg-red-400" />
                                     <div className="w-3 h-3 rounded-full bg-amber-400" />
                                     <div className="w-3 h-3 rounded-full bg-green-400" />
                                 </div>
                                 {/* Project Image Area with Fallback Fake UI */}
                                 <div className="flex-1 w-full relative bg-white overflow-hidden">
                                     {/* Fake UI fallback for projects without images */}
                                     <div className="absolute inset-0 p-8 flex flex-col gap-6 justify-center bg-[#fdfdfd] z-0">
                                         <div className="w-3/4 h-6 rounded-lg bg-black/5" />
                                         <div className="w-1/2 h-3 rounded-md bg-black/5" />
                                         <div className="w-5/6 h-3 rounded-md bg-black/5" />
                                         <div className="mt-8 flex gap-4">
                                             <div className="w-12 h-12 rounded-full bg-black/5" />
                                             <div className="w-12 h-12 rounded-full bg-black/5" />
                                         </div>
                                     </div>
                                     {/* Optional: The Actual Image */}
                                     <div className="absolute inset-0 z-10 transition-transform duration-700 ease-out group-hover:scale-105">
                                         <Image 
                                             src={project.image}
                                             alt={project.title}
                                             fill
                                             className="object-cover object-top hover:object-center transition-all duration-1000"
                                             onError={(e) => {
                                                 e.currentTarget.style.display = 'none';
                                             }}
                                         />
                                     </div>
                                 </div>
                                 <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-30 transition-colors duration-1000" style={{ backgroundColor: project.color }} />
                             </motion.div>
                         </div>
                         
                         {/* Grid Pattern Overlay */}
                         <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                         <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
                    </motion.div>
                    
                    {/* Darken edges slightly as it enters/leaves viewport */}
                    <motion.div style={{ opacity: opacityOverlay }} className="absolute inset-0 bg-[#FCFCFC] pointer-events-none" />
                    
                    {/* Big Letter Watermark */}
                    <div className="absolute -bottom-12 -right-4 md:-right-10 text-[12rem] md:text-[18rem] font-bold text-black/[0.04] font-heading pointer-events-none select-none leading-none tracking-tighter">
                        {project.chapter}
                    </div>
                </div>
            </div>
        </section>
    );
};

// 2. IMPACT SECTION (Replaces ConceptLab)
const ImpactSection = () => {
    return (
        <section className="py-32 px-6 bg-[#FCFCFC] relative z-10">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-20 mb-20 items-end">
                    <div>
                        <span className="font-mono text-sm uppercase tracking-[0.3em] text-black/40 block mb-6">Our Impact</span>
                        <h2 className="text-5xl md:text-7xl font-heading font-bold leading-tight text-black">
                            Metrics that <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-black/40 to-black/80 italic font-serif font-light">actually matter.</span>
                        </h2>
                    </div>
                    <div className="text-xl text-black/60 max-w-md pb-4 leading-relaxed font-light">
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
                            className="bg-white rounded-[2rem] p-10 border border-black/5 flex flex-col justify-between h-[320px] group hover:border-black/10 hover:shadow-2xl hover:shadow-black/[0.03] transition-all duration-500 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="relative z-10">
                                <h3 className="text-5xl md:text-7xl font-heading font-bold text-black group-hover:scale-105 origin-left transition-transform duration-500">{stat.value}</h3>
                                <div className="h-px w-12 bg-black/10 my-6 group-hover:w-24 group-hover:bg-black/30 transition-all duration-500" />
                            </div>
                            
                            <div className="relative z-10">
                                <h4 className="text-xl font-bold text-black mb-2">{stat.label}</h4>
                                <p className="text-sm text-black/50 leading-relaxed font-medium">{stat.desc}</p>
                            </div>
                            
                            {/* Decorative element */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-black/[0.02] group-hover:scale-[2.5] group-hover:bg-black/[0.04] transition-all duration-700 ease-in-out z-0" />
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
    <div ref={containerRef} className="bg-[#FCFCFC] text-black selection:bg-black/20 font-sans min-h-screen relative overflow-clip">
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
                  className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-tr from-purple-200/40 to-indigo-100/40 blur-[80px] rounded-full will-change-transform" 
              />
              <motion.div 
                  animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, -90, 0]
                  }}
                  transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                  className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[1000px] max-h-[1000px] bg-gradient-to-bl from-orange-100/40 to-rose-100/40 blur-[100px] rounded-full will-change-transform" 
              />
              <div className="absolute inset-0 bg-[#FCFCFC]/60" />
          </div>

          <div className="text-center space-y-8 max-w-5xl z-10 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="inline-block px-5 py-2 rounded-full border border-black/10 bg-white/50 backdrop-blur-md mb-4 shadow-sm"
              >
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-black/60">
                      Our Philosophy
                  </p>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-[clamp(3.5rem,8vw,8.5rem)] font-heading font-extrabold leading-[0.9] tracking-tighter text-black will-change-transform"
              >
                  We don't just build websites. <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-black/30 to-black/70 italic font-serif font-light">We craft legacies.</span>
              </motion.h1>
              
              <motion.p
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.8, duration: 0.8 }}
                 className="text-lg md:text-2xl text-black/50 max-w-2xl mx-auto leading-relaxed font-light mt-8"
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
                  <svg viewBox="0 0 100 100" className="w-full h-full opacity-50 overflow-visible">
                      <path id="textPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                      <text className="text-[10.5px] font-mono uppercase tracking-[0.2em] font-bold fill-black">
                          <textPath href="#textPath" startOffset="0%">
                              Scroll to begin • Scroll to begin • 
                          </textPath>
                      </text>
                  </svg>
              </motion.div>
              <div className="absolute text-black/40 text-2xl font-light">↓</div>
          </motion.div>
      </section>

      {/* --- CHAPTERS: The Work --- */}
      <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-black/5 -translate-x-1/2 z-0 hidden md:block" />
          
          {workStories.map((story, i) => (
              <StoryItem key={i} project={story} i={i} />
          ))}
      </div>

      {/* --- INTERLUDE: Text Section --- */}
      <section className="py-40 px-6 bg-[#f3f4f6] text-black text-center">
          <div className="container mx-auto max-w-4xl space-y-10">
              <h2 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
                  "The details are not the details. <br/> They make the design."
              </h2>
              <p className="font-mono text-sm uppercase tracking-widest opacity-60">- Charles Eames</p>
          </div>
      </section>

      {/* --- IMPACT SECTION --- */}
      <ImpactSection />

      {/* --- FOOTER CTA --- */}
      <section className="h-[80vh] flex flex-col items-center justify-center bg-[#FCFCFC] relative border-t border-black/5">
          <div className="text-center z-10 space-y-8">
              <h2 className="text-[clamp(3rem,8vw,7rem)] font-heading font-bold leading-none text-black">
                  Your Story <br/> Starts Here.
              </h2>
              <Link href="/#contact" className="inline-block bg-black text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform">
                  Begin The Journey
              </Link>
          </div>
           {/* Grid Pattern Overlay */}
           <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </section>

      <Footer />
    </div>
  );
}
