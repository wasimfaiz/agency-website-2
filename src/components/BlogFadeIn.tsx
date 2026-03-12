"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

/** Thin client wrapper — only used to animate the blog hero & content on mount.
 *  Keeps the heavy blog post page a Server Component for full Google indexability. */

export function BlogHeroFade({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function BlogContentFade({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="text-[#0A2540]/80 font-medium"
    >
      {children}
    </motion.div>
  );
}
