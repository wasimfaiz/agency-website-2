"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ fullName: "", email: "", projectType: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full pb-12 pt-8 sm:pb-16 lg:pb-20 px-6 sm:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto rounded-[24px] border border-[#0A2540]/10 bg-white p-6 sm:p-10 shadow-sm flex flex-col lg:flex-row gap-10 items-center justify-between" data-animate="contact">
          {/* TEXT SIDE */}
          <div className="lg:w-[45%] text-center lg:text-left">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#007BFF]">
              Contact Us
            </p>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl text-[#0A2540]">
              Ready to Design and Build Something That Performs?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#0A2540]/70 font-medium max-w-md mx-auto lg:mx-0">
              Tell us about your goals and timeline. We partner with ambitious teams to design, develop, and launch scalable digital products that drive measurable growth.
            </p>
          </div>

          {/* FORM SIDE */}
          <form className="lg:w-[55%] w-full flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                className="h-11 rounded-xl border border-[#0A2540]/10 bg-[#F4F6F8] px-4 text-xs font-medium text-[#0A2540] outline-none transition focus:border-[#007BFF] focus:bg-white focus:ring-2 focus:ring-[#007BFF]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Your full name"
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                disabled={isSubmitting}
              />
              <input
                className="h-11 rounded-xl border border-[#0A2540]/10 bg-[#F4F6F8] px-4 text-xs font-medium text-[#0A2540] outline-none transition focus:border-[#007BFF] focus:bg-white focus:ring-2 focus:ring-[#007BFF]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="you@company.com"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={isSubmitting}
              />
            </div>

            <input
              className="h-11 rounded-xl border border-[#0A2540]/10 bg-[#F4F6F8] px-4 text-xs font-medium text-[#0A2540] outline-none transition focus:border-[#007BFF] focus:bg-white focus:ring-2 focus:ring-[#007BFF]/20 disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Project Type (Brand site, app, redesign...)"
              type="text"
              required
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              disabled={isSubmitting}
            />

            <textarea
              className="min-h-[80px] rounded-xl border border-[#0A2540]/10 bg-[#F4F6F8] px-4 py-3 text-xs font-medium text-[#0A2540] outline-none transition focus:border-[#007BFF] focus:bg-white focus:ring-2 focus:ring-[#007BFF]/20 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Tell us about your goals, timeline, and expectations."
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              disabled={isSubmitting}
            />

            {submitStatus === "success" && (
              <div className="rounded-xl border border-[#10B981]/20 bg-[#10B981]/10 px-4 py-3 text-xs font-medium text-[#10B981]">
                Thanks for reaching out! We'll get back to you within 24 hours.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="rounded-xl border border-[#EF4444]/20 bg-[#EF4444]/10 px-4 py-3 text-xs font-medium text-[#EF4444]">
                Oops! Something went wrong. Please try again or email us directly.
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#0A2540]/50 text-center sm:text-left">
                Response within 24 hours
              </p>
              <button
                className="w-full sm:w-auto rounded-full bg-[#007BFF] px-8 py-3 text-xs font-bold text-white transition-all shadow-[0_8px_30px_rgba(0,123,255,0.3)] hover:bg-[#0056b3] hover:shadow-[0_8px_30px_rgba(0,123,255,0.5)] transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-[0_8px_30px_rgba(0,123,255,0.3)]"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
