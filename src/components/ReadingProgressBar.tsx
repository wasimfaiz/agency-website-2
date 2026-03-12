"use client";

import { useEffect, useState } from "react";

/** Thin reading progress bar fixed at the very top of the viewport. */
export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 h-[3px] w-full bg-transparent pointer-events-none">
      <div
        className="h-full bg-[#007BFF] transition-[width] duration-75 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
