"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Real blog data (aligned with what we have in the individual post layout)
const BLOGS = [
  {
    id: "1",
    title: "The Future of Automation in CRM",
    excerpt: "Discover how AI-driven workflows are transforming customer relationship management, saving hours of manual data entry while increasing conversion rates.",
    date: "Feb 22, 2026",
    readTime: "5 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Mastering Client Communication",
    excerpt: "A deep dive into the strategies that keep clients engaged and satisfied, turning one-time buyers into lifelong advocates for your brand.",
    date: "Feb 23, 2026",
    readTime: "7 min read",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "Scaling Your Agency: The First 100 Days",
    excerpt: "What to focus on when you are just starting out. Moving from freelance hustle to a structured agency model requires a shift in mindset.",
    date: "Feb 24, 2026",
    readTime: "8 min read",
    category: "Business",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "4",
    title: "Why Minimalist Design Converts Better",
    excerpt: "Less is more. Learn how reducing cognitive load on your landing pages can significantly improve user experience and boost conversion rates.",
    date: "Feb 26, 2026",
    readTime: "4 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
  },
];

const CATEGORIES = ["All", "Technology", "Strategy", "Business", "Design"];

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs = useMemo(() => {
    if (activeCategory === "All") return BLOGS;
    return BLOGS.filter((blog) => blog.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-[#F4F6F8] selection:bg-[#007BFF]/20 selection:text-[#0A2540] pb-20 font-sans relative overflow-x-hidden">
      <Navbar forceDarkAtTop={true} />

      {/* Decorative Background Blobs */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-[#007BFF]/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[40vh] left-[-10vw] w-[40vw] h-[40vh] bg-[#0A2540]/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="pt-48 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[10px] uppercase tracking-[0.4em] font-extrabold text-[#007BFF] mb-6 inline-block bg-[#007BFF]/10 px-3 py-1 rounded-md">The Journal</p>
          <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-heading font-extrabold leading-[1.05] tracking-tight text-[#0A2540]">
             Insights for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#0A2540]">modern</span> agency.
          </h1>
        </motion.div>
      </section>

      {/* Category Filter */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-16">
        <div className="w-full h-px bg-[#0A2540]/10 mb-10" />
        <div className="flex flex-wrap items-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[11px] font-bold uppercase tracking-[0.2em] px-6 py-2.5 rounded-full border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                activeCategory === cat
                  ? "bg-[#0A2540] border-[#0A2540] text-white shadow-xl translate-y-[-2px]"
                  : "bg-white border-[#0A2540]/10 text-[#0A2540]/60 hover:border-[#007BFF]/40 hover:text-[#007BFF] hover:translate-y-[-1px]"
              }`}
            >
              {cat}
            </button>
          ))}
          <motion.span 
            key={activeCategory}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:inline-block ml-4 text-[10px] font-bold text-[#0A2540]/30 uppercase tracking-widest"
          >
            {filteredBlogs.length} Article{filteredBlogs.length !== 1 ? 's' : ''} Found
          </motion.span>
        </div>
      </div>

      {/* Blog Listing */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto min-h-[40vh]">
        <div className="flex flex-col gap-24">
          <AnimatePresence mode="wait">
            {filteredBlogs.length > 0 ? (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-20 md:gap-32"
              >
                {filteredBlogs.map((blog, index) => (
                  <motion.article 
                    key={blog.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative flex flex-col lg:flex-row gap-8 lg:gap-20 items-start"
                  >
                    {/* Image Column */}
                    <div className="w-full lg:w-[45%] aspect-video lg:aspect-[4/3] rounded-[2rem] overflow-hidden relative bg-[#0A2540]/5 flex-shrink-0 cursor-pointer shadow-2xl border border-[#0A2540]/5 overflow-hidden">
                      <Link href={`/blogs/${blog.id}`} className="block w-full h-full">
                        <Image 
                          src={blog.image} 
                          alt={blog.title} 
                          fill 
                          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110" 
                          sizes="(max-width: 1024px) 100vw, 45vw"
                        />
                        <div className="absolute inset-0 bg-[#0A2540]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />
                      </Link>
                    </div>

                    {/* Content Column */}
                    <div className="flex flex-col justify-center flex-1 pt-4 lg:pt-10">
                      <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] uppercase text-[#007BFF] mb-6">
                        <span>{blog.category}</span>
                        <span className="w-1 h-1 rounded-full bg-[#007BFF]/30" />
                        <span className="text-[#0A2540]/40">{blog.date}</span>
                        <span className="w-1 h-1 rounded-full bg-[#007BFF]/30" />
                        <span className="text-[#0A2540]/40">{blog.readTime}</span>
                      </div>

                      <Link href={`/blogs/${blog.id}`}>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-[#0A2540] mb-6 leading-[1.1] transition-all duration-500 group-hover:text-[#007BFF] group-hover:translate-x-2">
                           {blog.title}
                        </h2>
                      </Link>

                      <p className="text-lg md:text-xl text-[#0A2540]/60 leading-relaxed max-w-2xl mb-10 font-medium">
                         {blog.excerpt}
                      </p>

                      <Link 
                        href={`/blogs/${blog.id}`} 
                        className="inline-flex items-center gap-4 group/link"
                      >
                         <span className="text-xs font-black uppercase tracking-[0.3em] text-[#0A2540] relative overflow-hidden">
                           <span className="inline-block transition-transform duration-500 group-hover/link:translate-y-[-120%]">Read Story</span>
                           <span className="absolute left-0 top-0 inline-block transition-transform duration-500 translate-y-[120%] group-hover/link:translate-y-0 text-[#007BFF]">Read Story</span>
                         </span>
                         <div className="w-10 h-10 rounded-full border border-[#0A2540]/10 flex items-center justify-center transition-all duration-500 group-hover/link:bg-[#007BFF] group-hover/link:border-[#007BFF] group-hover/link:translate-x-2">
                           <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[3] text-[#0A2540] group-hover/link:text-white transition-colors" aria-hidden>
                             <path d="M5 12h14m-7-7l7 7-7 7" />
                           </svg>
                         </div>
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-40 text-center"
              >
                <p className="text-2xl font-heading font-bold text-[#0A2540]/20">No articles found in this category.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}
