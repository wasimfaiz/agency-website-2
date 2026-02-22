"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NavLink = ({
  href,
  children,
  isScrolled,
}: {
  href: string;
  children: string;
  isScrolled: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`group relative overflow-hidden inline-block h-[1.2em] font-semibold transition-colors duration-300 ${
        isScrolled ? "text-black/70" : "text-white/80"
      }`}
    >
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
        {children}
      </span>
      <span
        className={`absolute left-0 top-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0 ${
          isScrolled ? "text-black font-bold" : "text-white font-bold"
        }`}
      >
        {children}
      </span>
    </Link>
  );
};

export default function Navbar({ forceDarkAtTop = false }: { forceDarkAtTop?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const useDarkTheme = isScrolled || forceDarkAtTop;

  useEffect(() => {
    const handleScroll = () => {
      // Change header style when scrolled past 50px
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full text-[10px] uppercase tracking-[0.35em] transition-all duration-300 sm:text-xs ${
          useDarkTheme
            ? "bg-white/90 text-black/60 shadow-sm backdrop-blur py-3"
            : "bg-transparent text-white py-6"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-5 sm:px-10">
          <Link href="/" className={`font-bold transition-colors duration-300 ${useDarkTheme ? "text-black" : "text-white"}`}>
            SetZet
          </Link>
          <nav
            className={`hidden items-center gap-8 text-[11px] font-semibold transition-colors duration-300 md:flex ${
              useDarkTheme ? "text-black/70" : "text-white/80"
            }`}
          >
            <NavLink href="/" isScrolled={useDarkTheme}>
              Home
            </NavLink>
            <NavLink href="/about" isScrolled={useDarkTheme}>
              About
            </NavLink>
            <NavLink href="/services" isScrolled={useDarkTheme}>
              Services
            </NavLink>
            <NavLink href="/work" isScrolled={useDarkTheme}>
              Work
            </NavLink>
            <NavLink href="/product" isScrolled={useDarkTheme}>
              Product
            </NavLink>
            <NavLink href="/blogs" isScrolled={useDarkTheme}>
              Blogs
            </NavLink>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              className={`hidden rounded-full border px-5 py-2.5 text-[11px] font-semibold transition-all duration-300 md:inline-flex ${
                useDarkTheme
                  ? "border-black/20 text-black hover:bg-black hover:text-white"
                  : "border-white/30 text-white hover:bg-white hover:text-black"
              }`}
              href="/#contact"
            >
              Start a Project
            </Link>
            <button
              className={`inline-flex h-10 items-center justify-center rounded-full border px-4 text-[11px] font-semibold transition md:hidden ${
                useDarkTheme
                  ? "border-black/20 text-black hover:border-black"
                  : "border-white/30 text-white hover:border-white"
              }`}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span className="mr-2">{menuOpen ? "Close" : "Menu"}</span>
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-full transition-transform duration-300 ${
                    menuOpen ? "translate-y-[5px] rotate-45" : ""
                  } ${useDarkTheme ? "bg-black" : "bg-white"}`}
                />
                <span
                  className={`absolute left-0 top-[5px] h-[2px] w-full transition-opacity duration-300 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  } ${useDarkTheme ? "bg-black" : "bg-white"}`}
                />
                <span
                  className={`absolute left-0 top-[10px] h-[2px] w-full transition-transform duration-300 ${
                    menuOpen ? "-translate-y-[5px] -rotate-45" : ""
                  } ${useDarkTheme ? "bg-black" : "bg-white"}`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU PANEL */}
      <div
        id="mobile-menu"
        className={`fixed right-4 top-16 z-50 w-[min(240px,calc(100vw-2rem))] origin-top-right rounded-2xl border border-black/10 bg-white p-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-black/70 shadow-lg transition-all duration-300 md:hidden ${
          menuOpen
            ? "scale-100 translate-y-0 opacity-100"
            : "pointer-events-none scale-95 -translate-y-2 opacity-0"
        }`}
      >
        <Link className="block py-2 transition hover:text-black" href="/">
          Home
        </Link>
        <Link className="block py-2 transition hover:text-black" href="/about">
          About
        </Link>
        <Link className="block py-2 transition hover:text-black" href="/services">
          Services
        </Link>
        <Link className="block py-2 transition hover:text-black" href="/work">
          Work
        </Link>
        <Link className="block py-2 transition hover:text-black" href="/product">
          Product
        </Link>
        <Link className="block py-2 transition hover:text-black" href="/blogs">
          Blogs
        </Link>
      </div>
    </>
  );
}
