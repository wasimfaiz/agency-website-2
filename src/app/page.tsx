"use client";

import { useEffect } from "react";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FeaturedProjects from "../components/FeaturedProjects";
import ServicesSection from "../components/ServicesSection";
import ProcessSection from "../components/ProcessSection";
import TestimonialSection from "../components/TestimonialSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const animatedElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-animate]"),
    );
    const groupedElements = new Map<string, HTMLElement[]>();

    animatedElements.forEach((element, index) => {
      const groupKey = element.dataset.animate?.trim() || `group-${index}`;
      const existing = groupedElements.get(groupKey) ?? [];
      existing.push(element);
      groupedElements.set(groupKey, existing);
    });

    if (prefersReducedMotion) {
      animatedElements.forEach((element) =>
        element.classList.add("is-visible"),
      );
      return;
    }

    const timeoutIds: number[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          const groupKey = element.dataset.animate?.trim();
          if (!groupKey) return;

          const group = groupedElements.get(groupKey);
          if (!group) return;

          group.forEach((groupElement, itemIndex) => {
            const delay = groupElement.dataset.animateDelay
              ? Number(groupElement.dataset.animateDelay)
              : itemIndex * 130;

            const timeoutId = window.setTimeout(() => {
              groupElement.classList.add("is-visible");
            }, delay);

            timeoutIds.push(timeoutId);
          });

          observer.unobserve(element);
          groupedElements.delete(groupKey);
        });
      },
      {
        threshold: 0.24,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    groupedElements.forEach((group) => {
      if (group[0]) observer.observe(group[0]);
    });

    return () => {
      observer.disconnect();
      timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, []);

  return (
    <main id="top" className="noise-bg min-h-screen bg-[#F4F6F8] text-[#0A2540] selection:bg-[#007BFF]/20 selection:text-[#0A2540]">
      <Navbar forceDarkAtTop={true} />

      <div className="relative z-10 min-h-screen">
        {/* HERO SECTION */}
        <HeroSection />


        {/* SERVICES SECTION */}
        <ServicesSection />

        {/* PROJECTS SECTION */}
        <FeaturedProjects />

        {/* PROCESS SECTION */}
        <ProcessSection />

        {/* TESTIMONIAL SECTION */}
        <TestimonialSection />

        {/* ABOUT SECTION */}
        <AboutSection />

        {/* CONTACT SECTION */}
        <ContactSection />

        {/* FAQ SECTION */}
        <FAQSection />

        {/* FOOTER */}
        <Footer />
      </div>
    </main>
  );
}
