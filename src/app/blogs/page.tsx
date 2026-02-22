"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Dummy data for blogs
const DUMMY_BLOGS = [
  {
    id: 1,
    title: "The Future of Automation in CRM",
    excerpt: "Discover how AI-driven workflows are transforming customer relationship management, saving hours of manual data entry while increasing conversion rates.",
    date: "Oct 24, 2025",
    readTime: "5 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Mastering Client Communication",
    excerpt: "A deep dive into the strategies that keep clients engaged and satisfied, turning one-time buyers into lifelong advocates for your brand.",
    date: "Oct 18, 2025",
    readTime: "7 min read",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Scaling Your Agency: The First 100 Days",
    excerpt: "What to focus on when you are just starting out. Moving from freelance hustle to a structured agency model requires a shift in mindset.",
    date: "Oct 12, 2025",
    readTime: "8 min read",
    category: "Business",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Why Minimalist Design Converts Better",
    excerpt: "Less is more. Learn how reducing cognitive load on your landing pages can significantly improve user experience and boost conversion rates.",
    date: "Oct 05, 2025",
    readTime: "4 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
  },
];

export default function BlogsPage() {
  const [hoveredBlog, setHoveredBlog] = useState<number | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#FCFCFC] selection:bg-black selection:text-white pb-20">
      <Navbar forceDarkAtTop={true} />

      {/* Header Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40 mb-6">Our Journal</p>
          <h1 className="text-[clamp(3rem,6vw,5rem)] font-light leading-[1.1] tracking-tighter text-black w-full md:w-[80%]">
             Insights, stories, and <span className="font-medium text-black/40 italic">strategies</span> from our team.
          </h1>
        </motion.div>
      </section>

      {/* Featured / Separator */}
      <div className="w-full h-px bg-black/10 max-w-7xl mx-auto mb-20" />

      {/* Blog List Section */}
      <section className="px-6 md:px-12 pb-20 max-w-7xl mx-auto">
         <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-12 md:gap-24"
         >
            {DUMMY_BLOGS.map((blog, index) => (
              <motion.article 
                 key={blog.id}
                 variants={itemVariants}
                 onMouseEnter={() => setHoveredBlog(blog.id)}
                 onMouseLeave={() => setHoveredBlog(null)}
                 className="group relative flex flex-col md:flex-row gap-8 md:gap-16 items-start"
              >
                 {/* Image */}
                 <div className="w-full md:w-5/12 aspect-[4/3] rounded-2xl overflow-hidden relative bg-black/5 flex-shrink-0 cursor-pointer">
                    <Link href={`#`}>
                      <Image 
                        src={blog.image} 
                        alt={blog.title} 
                        fill 
                        className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" 
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700 pointer-events-none" />
                    </Link>
                 </div>

                 {/* Content */}
                 <div className="flex flex-col justify-center h-full pt-2 md:pt-6 lg:pt-10 w-full md:w-7/12 relative">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-[11px] font-bold tracking-widest uppercase text-black/40 mb-4 md:mb-6">
                       <span>{blog.category}</span>
                       <span className="w-1 h-1 rounded-full bg-black/20" />
                       <span>{blog.date}</span>
                    </div>

                    {/* Title */}
                    <Link href={`#`}>
                      <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black mb-4 md:mb-6 leading-[1.15] group-hover:text-black/70 transition-colors duration-500">
                         {blog.title}
                      </h2>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-base md:text-lg text-black/60 leading-relaxed max-w-xl mb-8 md:mb-10">
                       {blog.excerpt}
                    </p>

                    {/* Read More Link */}
                    <Link href={`#`} className="inline-flex items-center gap-3 text-sm font-bold text-black uppercase tracking-wider overflow-hidden group/link self-start">
                       <span className="relative pb-1">
                         Read Article
                         <span className="absolute left-0 bottom-0 w-full h-[1px] bg-black origin-left scale-x-100 group-hover/link:scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                         <span className="absolute left-0 bottom-0 w-full h-[1px] bg-black origin-right scale-x-0 group-hover/link:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[50ms]" />
                       </span>
                       <span className="w-6 h-6 rounded-full border border-black/10 flex items-center justify-center transform group-hover/link:-translate-y-1 transition-transform duration-500 text-xs">
                         &rarr;
                       </span>
                    </Link>
                 </div>
              </motion.article>
            ))}
         </motion.div>
      </section>

      <Footer />
    </main>
  );
}
