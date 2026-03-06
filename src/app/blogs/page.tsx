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
    date: "Feb 22, 2026",
    readTime: "5 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Mastering Client Communication",
    excerpt: "A deep dive into the strategies that keep clients engaged and satisfied, turning one-time buyers into lifelong advocates for your brand.",
    date: "Feb 23, 2026",
    readTime: "7 min read",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Scaling Your Agency: The First 100 Days",
    excerpt: "What to focus on when you are just starting out. Moving from freelance hustle to a structured agency model requires a shift in mindset.",
    date: "Feb 24, 2026",
    readTime: "8 min read",
    category: "Business",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Why Minimalist Design Converts Better",
    excerpt: "Less is more. Learn how reducing cognitive load on your landing pages can significantly improve user experience and boost conversion rates.",
    date: "Feb 26, 2026",
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
    <main className="min-h-screen bg-[#F4F6F8] selection:bg-[#007BFF]/20 selection:text-[#0A2540] pb-20 font-sans relative">
      <Navbar forceDarkAtTop={true} />

      {/* Decorative Background Blob */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-[#007BFF]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Header Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#007BFF] mb-6 inline-block bg-[#007BFF]/10 px-3 py-1 rounded-md">Our Journal</p>
          <h1 className="text-[clamp(3rem,6vw,5rem)] font-extrabold leading-[1.1] tracking-tighter text-[#0A2540] w-full md:w-[80%] font-heading">
             Insights, stories, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#0A2540]">strategies</span> from our team.
          </h1>
        </motion.div>
      </section>

      {/* Featured / Separator */}
      <div className="w-full h-px bg-[#0A2540]/10 max-w-7xl mx-auto mb-20" />

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
                 <div className="w-full md:w-5/12 aspect-[4/3] rounded-3xl overflow-hidden relative bg-[#0A2540]/5 flex-shrink-0 cursor-pointer shadow-lg border border-[#0A2540]/5 group-hover:shadow-2xl group-hover:border-[#007BFF]/30 transition-all duration-500">
                    <Link href={`/blogs/${blog.id}`}>
                      <Image 
                        src={blog.image} 
                        alt={blog.title} 
                        fill 
                        className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 filter contrast-[1.05]" 
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-[#0A2540]/0 group-hover:bg-[#007BFF]/10 transition-colors duration-700 pointer-events-none mix-blend-overlay" />
                    </Link>
                 </div>

                 {/* Content */}
                 <div className="flex flex-col justify-center h-full pt-2 md:pt-6 lg:pt-10 w-full md:w-7/12 relative">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-[11px] font-bold tracking-widest uppercase text-[#0A2540]/50 mb-4 md:mb-6 group-hover:text-[#007BFF] transition-colors">
                       <span>{blog.category}</span>
                       <span className="w-1 h-1 rounded-full bg-[#0A2540]/20" />
                       <span>{blog.date}</span>
                    </div>

                    {/* Title */}
                    <Link href={`/blogs/${blog.id}`}>
                      <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight text-[#0A2540] mb-4 md:mb-6 leading-[1.15] group-hover:text-[#007BFF] transition-colors duration-500">
                         {blog.title}
                      </h2>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-base md:text-lg text-[#0A2540]/70 leading-relaxed max-w-xl mb-8 md:mb-10 font-medium">
                       {blog.excerpt}
                    </p>

                    {/* Read More Link */}
                    <Link href={`/blogs/${blog.id}`} className="inline-flex items-center gap-3 text-sm font-bold text-[#0A2540] hover:text-[#007BFF] uppercase tracking-wider overflow-hidden group/link self-start transition-colors">
                       <span className="relative pb-1">
                         Read Article
                         <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#0A2540] origin-left scale-x-100 group-hover/link:bg-[#007BFF] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                       </span>
                       <span className="w-8 h-8 rounded-full bg-[#007BFF]/10 text-[#007BFF] flex items-center justify-center transform group-hover/link:-translate-y-1 transition-transform duration-500 text-sm font-bold">
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
