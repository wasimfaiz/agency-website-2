"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  // Prevent scrolling when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center pt-10 sm:pt-0 pb-10">
          {/* Backdrop Layer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0A2540]/60 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Overlay Layer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-[90%] max-w-lg md:max-w-2xl bg-white rounded-3xl shadow-2xl overflow-y-auto max-h-[90vh] z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#F4F6F8] text-[#0A2540] transition-colors hover:bg-[#007BFF] hover:text-white"
              aria-label="Close modal"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 1L13 13M1 13L13 1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="p-8 sm:p-12">
              <div className="mb-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0A2540]/40 mb-3">
                  Let&apos;s Build Together
                </p>
                <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0A2540] tracking-tight">
                  Start your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#0ea5e9]">Project.</span>
                </h3>
              </div>

              {/* Form */}
              <form className="flex flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    className="h-12 w-full rounded-xl border border-[#0A2540]/10 bg-[#F4F6F8] px-4 text-sm font-medium text-[#0A2540] outline-none transition focus:border-[#007BFF] focus:bg-white focus:ring-2 focus:ring-[#007BFF]/20"
                    placeholder="Your Full Name"
                    required
                  />
                  <input
                    type="email"
                    className="h-12 w-full rounded-xl border border-[#0A2540]/10 bg-[#F4F6F8] px-4 text-sm font-medium text-[#0A2540] outline-none transition focus:border-[#007BFF] focus:bg-white focus:ring-2 focus:ring-[#007BFF]/20"
                    placeholder="Work Email"
                    required
                  />
                </div>
                
                <input
                  className="h-12 w-full rounded-xl border border-[#0A2540]/10 bg-[#F4F6F8] px-4 text-sm font-medium text-[#0A2540] outline-none transition focus:border-[#007BFF] focus:bg-white focus:ring-2 focus:ring-[#007BFF]/20"
                  placeholder="Company Name (Optional)"
                />

                <div className="relative group">
                  <select 
                    id="service" 
                    required 
                    defaultValue=""
                    className="h-12 w-full appearance-none rounded-xl border border-[#0A2540]/10 bg-[#F4F6F8] px-4 text-sm font-medium text-[#0A2540]/80 outline-none transition focus:border-[#007BFF] focus:bg-white focus:ring-2 focus:ring-[#007BFF]/20 cursor-pointer"
                  >
                    <option value="" disabled className="text-[#0A2540]/50">Select Your Objective...</option>
                    <option value="web" className="text-[#0A2540]">Custom Website / Web App</option>
                    <option value="marketing" className="text-[#0A2540]">Digital Marketing & SEO</option>
                    <option value="saas" className="text-[#0A2540]">SaaS Product Development</option>
                    <option value="other" className="text-[#0A2540]">Other Inquiry</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                    <svg className="h-4 w-4 text-[#0A2540]/60 group-focus-within:text-[#007BFF] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <textarea
                  className="min-h-[120px] w-full resize-none rounded-xl border border-[#0A2540]/10 bg-[#F4F6F8] p-4 text-sm font-medium text-[#0A2540] outline-none transition focus:border-[#007BFF] focus:bg-white focus:ring-2 focus:ring-[#007BFF]/20"
                  placeholder="Tell us about your goals or challenges..."
                  required
                ></textarea>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-xl bg-[#007BFF] px-6 py-4 text-sm font-bold tracking-wide text-white transition-all duration-300 hover:bg-[#0056b3] hover:shadow-[0_8px_20px_rgba(0,123,255,0.3)] hover:-translate-y-0.5 mt-2"
                >
                  Submit Inquiry
                </button>
                <p className="mt-2 text-center text-xs font-medium text-[#0A2540]/50">
                   We respect your privacy. All information is kept strictly confidential.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
