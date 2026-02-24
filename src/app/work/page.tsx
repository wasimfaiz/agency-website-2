"use client";

import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
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
    image: "/images/work-yastudy.jpg",
    color: "#fbbf24"
  },
  {
    chapter: "02",
    title: "Zenfora Foods",
    tagline: "The Superfood Revolution",
    description: "Healthy snacking shouldn't be boring. Zenfora turns foxnuts (makhana) into a lifestyle brand for the modern, health-conscious consumer.",
    narrative: "From protein powders to gourmet chocolates, Zenfora's product line is diverse. We crafted a vibrant, appetite-inducing digital storefront that highlights the nutritional power of foxnuts. With a seamless D2C checkout and subscription model, we turned casual snackers into loyal subscribers.",
    tags: ["FMCG", "E-Commerce", "Brand Strategy"],
    image: "/images/work-zenfora.jpg",
    color: "#f97316"
  },
  {
    chapter: "03",
    title: "Nova Estate",
    tagline: "Architecture You Can Feel",
    description: "Luxury real estate isn't bought; it's experienced. We crafted a digital environment that rivals the physical spaces it sells.",
    narrative: "Static images were not enough. We implemented cinematic 3D walkthroughs and ambient soundscapes to transport potential buyers into the property before they ever stepped foot inside. This emotional connection drove conversion rates up by 40%.",
    tags: ["Immersive Web", "3D Motion", "Brand"],
    image: "/images/work-nova.jpg",
    color: "#c084fc"
  },
  {
    chapter: "04",
    title: "Oria Finance",
    tagline: "Banking Without Friction",
    description: "Money moves fast. Your banking app should too. We stripped away the noise to focus on speed, security, and simplicity.",
    narrative: "Complexity is the enemy of trust. For Oria, we redesigned the entire banking flow from first principles, reducing user actions by 60%. Every interaction is micro-animated to provide instant, reassuring feedback. Banking has never felt this fluid.",
    tags: ["Fintech", "App Design", "System Architecture"],
    image: "/images/work-oria.jpg",
    color: "#2dd4bf"
  },
  {
    chapter: "05",
    title: "Nebula Stream",
    tagline: "Ownership for Creators",
    description: "The creator economy was broken. We helped fix it with decentralized protocols giving power back to the artist.",
    narrative: "We built a platform where the interface is as transparent as the blockchain beneath it. Smart contracts handle the complexity, while the user enjoys a seamless, captivating streaming experience. This is Web3, humanized.",
    tags: ["Web3", "Blockchain", "Community"],
    image: "/images/work-nebula.jpg",
    color: "#8b5cf6"
  }
];

const concepts = [
    { title: "Fluidity", desc: "WebGL fluid simulation for interactive backgrounds." },
    { title: "Sonic UI", desc: "Spatial audio interface navigation experiments." },
    { title: "Gen-Art", desc: "Generative artwork created from user mouse patterns." }
];

// --- COMPONENTS ---

// 1. STORY ITEM (Parallax & Sticky)
const StoryItem = ({ project, i }: { project: typeof workStories[0], i: number }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scrollY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
    
    const yText = useTransform(scrollY, [0, 1], [50, -50]);
    const scaleImg = useTransform(scrollY, [0, 0.5, 1], [1.1, 1, 1.1]);
    const opacityOverlay = useTransform(scrollY, [0.2, 0.5, 0.8], [0.6, 0, 0.6]);

    return (
        <section ref={containerRef} className="min-h-screen py-20 flex items-center relative z-10">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                
                {/* Text Side - Sticky-ish Feel thanks to Parallax */}
                <motion.div style={{ y: yText }} className="space-y-10 order-2 md:order-1 relative z-20">
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
                            <span key={idx} className="px-4 py-2 rounded-full border border-black/10 text-xs uppercase tracking-widest text-black/40 hover:bg-black hover:text-white transition-colors cursor-default">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="pt-10">
                         <div className="group flex items-center gap-4 cursor-pointer">
                             <div className="h-[1px] w-20 bg-black group-hover:w-32 transition-all duration-500" />
                             <span className="uppercase tracking-[0.2em] text-sm text-black">Read Case Study</span>
                         </div>
                    </div>
                </motion.div>

                {/* Image Side - Cinematic Parallax */}
                <div className="order-1 md:order-2 relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
                    <motion.div style={{ scale: scaleImg }} className="absolute inset-0 bg-white">
                         {/* Placeholder Image Div */}
                         <div 
                           className="w-full h-full opacity-60" 
                           style={{ 
                             background: `radial-gradient(circle at center, ${project.color}, #FCFCFC 80%)`
                           }} 
                         />
                         {/* Grid Pattern Overlay */}
                         <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                    </motion.div>
                    
                    {/* Darken edges slightly as it enters/leaves viewport */}
                    <motion.div style={{ opacity: opacityOverlay }} className="absolute inset-0 bg-[#FCFCFC] pointer-events-none" />
                    
                    {/* Big Letter Watermark */}
                    <div className="absolute bottom-[-10%] right-[-10%] text-[20rem] font-bold text-black/5 font-heading pointer-events-none select-none leading-none">
                        {project.chapter}
                    </div>
                </div>
            </div>
        </section>
    );
};

// 2. CONCEPT LAB (Horizontal Scroll Story)
const ConceptLab = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-[#FCFCFC]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-20 left-6 z-20 md:left-20">
                    <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-black/40 mb-2">R&D Department</h2>
                    <h3 className="text-5xl font-heading font-bold text-black">Concept Lab</h3>
                </div>

                <motion.div style={{ x }} className="flex gap-20 pl-[50vw] pr-20">
                    {concepts.map((concept, i) => (
                        <div key={i} className="w-[80vw] md:w-[60vw] h-[60vh] md:h-[70vh] shrink-0 bg-white border border-black/5 rounded-3xl relative overflow-hidden group flex flex-col justify-end p-10 md:p-20 hover:border-black/20 shadow-xl transition-colors">
                             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FCFCFC]/90" />
                             <div className="absolute top-10 right-10 opacity-20 group-hover:opacity-100 transition-opacity">
                                 <span className="text-xs font-mono border border-black text-black rounded-full px-3 py-1">Experiment 00{i+1}</span>
                             </div>
                             
                             <div className="relative z-10 space-y-4">
                                 <h4 className="text-4xl md:text-6xl font-heading font-bold text-black">{concept.title}</h4>
                                 <p className="text-xl text-black/60 max-w-lg">{concept.desc}</p>
                             </div>
                             
                             <div className="absolute inset-0 -z-10 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                                  {/* Abstract Visual Placeholder */}
                                  <div className={`w-full h-full bg-gradient-to-tr from-gray-100 via-gray-50 to-white`} /> 
                             </div>
                        </div>
                    ))}
                    
                    {/* Final CTA Card in the scroll */}
                    <div className="w-[50vw] md:w-[30vw] h-[60vh] md:h-[70vh] shrink-0 flex items-center justify-center">
                         <div className="text-center space-y-6">
                             <h4 className="text-4xl font-heading font-bold text-black">What's Next?</h4>
                             <Link href="/#contact" className="inline-block border-b border-black text-black pb-1 text-xl hover:opacity-50 transition-opacity">
                                 Let's build it together &rarr;
                             </Link>
                         </div>
                    </div>
                </motion.div>
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
      <section className="min-h-[100dvh] flex flex-col items-center justify-center relative px-6 pt-40">
          <div className="text-center space-y-10 max-w-5xl z-10 relative">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-mono text-sm uppercase tracking-[0.5em] text-black/40"
              >
                  Our Philosophy
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(3rem,8vw,8rem)] font-heading font-bold leading-[1.1] tracking-tighter"
              >
                  We don't just build websites. <br/>
                  <span className="text-black/30 italic font-serif">We craft legacies.</span>
              </motion.h1>
              
              <motion.p
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.8 }}
                 className="text-xl text-black/60 max-w-2xl mx-auto leading-relaxed"
              >
                  Every project is a story waiting to be told. A narrative of problem-solving, aesthetic precision, and technical mastery.
                  <span className="block mt-10 text-xs uppercase tracking-widest opacity-50 animate-bounce text-black">Scroll to Begin</span>
              </motion.p>
          </div>
          
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-[-20%] left-[20%] w-[60vw] h-[60vw] bg-purple-900/5 blur-[150px] rounded-full" />
              <div className="absolute bottom-[-20%] right-[20%] w-[60vw] h-[60vw] bg-blue-900/5 blur-[150px] rounded-full" />
          </div>
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

      {/* --- R&D: Concept Lab Scroll --- */}
      <ConceptLab />

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
