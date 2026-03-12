"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

// ─── Static post data (mirrors what's in the blogs listing page) ─────────────
const ALL_POSTS = [
  {
    id: "1",
    title: "The Future of Automation in CRM",
    category: "Technology",
    date: "Feb 22, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Mastering Client Communication",
    category: "Strategy",
    date: "Feb 23, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Scaling Your Agency: The First 100 Days",
    category: "Business",
    date: "Feb 24, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Why Minimalist Design Converts Better",
    category: "Design",
    date: "Feb 26, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
  },
];

// ─── Share Buttons ────────────────────────────────────────────────────────────
function ShareButtons({ postId }: { postId: string }) {
  const [copied, setCopied] = useState(false);
  const post = ALL_POSTS.find((p) => p.id === postId);
  const url = `https://setzet.com/blogs/${postId}`;
  const text = encodeURIComponent(post?.title ?? "");
  const encodedUrl = encodeURIComponent(url);

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // fallback for older browsers
      const el = document.createElement("input");
      el.value = url;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [url]);

  return (
    <div className="flex flex-wrap items-center gap-3 py-8 border-t border-[#0A2540]/10">
      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0A2540]/40 mr-1">
        Share
      </span>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${text}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-[11px] font-bold bg-[#0A2540] text-white px-4 py-2 rounded-full hover:bg-[#007BFF] transition-colors duration-300"
      >
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.258 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
        </svg>
        Share on X
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-[11px] font-bold bg-[#0077B5] text-white px-4 py-2 rounded-full hover:opacity-85 transition-opacity duration-300"
      >
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        LinkedIn
      </a>
      <button
        onClick={copyLink}
        className="inline-flex items-center gap-1.5 text-[11px] font-bold border border-[#0A2540]/15 text-[#0A2540] px-4 py-2 rounded-full hover:border-[#007BFF] hover:text-[#007BFF] transition-all duration-300"
      >
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>
        {copied ? "Copied!" : "Copy Link"}
      </button>
    </div>
  );
}

// ─── Related Posts ────────────────────────────────────────────────────────────
function RelatedPosts({ currentId }: { currentId: string }) {
  const related = ALL_POSTS.filter((p) => p.id !== currentId);

  return (
    <section className="mt-16 pt-16 border-t border-[#0A2540]/10">
      <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#007BFF] mb-8">
        More from the Journal
      </p>
      <div className="grid gap-4">
        {related.map((post) => (
          <Link
            key={post.id}
            href={`/blogs/${post.id}`}
            className="group flex items-start justify-between gap-6 p-5 rounded-2xl border border-[#0A2540]/8 bg-white hover:border-[#007BFF]/30 hover:shadow-md transition-all duration-300"
          >
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#007BFF] mb-2">
                {post.category} · {post.readTime}
              </p>
              <p className="font-heading font-extrabold text-[#0A2540] text-base leading-snug group-hover:text-[#007BFF] transition-colors duration-300 truncate">
                {post.title}
              </p>
            </div>
            <span className="text-[#007BFF]/50 group-hover:text-[#007BFF] group-hover:translate-x-1 transition-all duration-300 text-xl mt-0.5 flex-shrink-0">
              →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

// ─── Combined Blog Post Footer (share + related) ──────────────────────────────
export default function BlogPostFooter({ postId }: { postId: string }) {
  return (
    <>
      <ShareButtons postId={postId} />
      <RelatedPosts currentId={postId} />
    </>
  );
}
