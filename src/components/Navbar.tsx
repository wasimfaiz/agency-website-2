"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({
  href,
  children,
  isScrolled,
  isActive = false,
}: {
  href: string;
  children: string;
  isScrolled: boolean;
  isActive?: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`group relative overflow-hidden inline-block h-[1.2em] font-semibold transition-colors duration-300 ${
        isScrolled ? "text-[#0A2540]/70 hover:text-[#007BFF]" : "text-white/80 hover:text-white"
      }`}
    >
      <span className={`block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${isActive ? '-translate-y-full' : 'group-hover:-translate-y-full'}`}>
        {children}
      </span>
      <span
        className={`absolute left-0 top-0 block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${isActive ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'} ${
          isScrolled ? "text-[#007BFF] font-bold" : "text-white font-bold"
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
  const pathname = usePathname();

  const isHomeActive = pathname === "/";
  const isAboutActive = pathname.startsWith("/about");
  const isServicesActive = pathname.startsWith("/services");
  const isWorkActive = pathname.startsWith("/work");
  const isProductActive = pathname.startsWith("/product");
  const isBlogsActive = pathname.startsWith("/blogs");

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
            ? "bg-[#F4F6F8]/90 text-[#0A2540]/60 shadow-[0_4px_30px_rgba(10,37,64,0.05)] backdrop-blur-md py-3"
            : "bg-transparent text-white py-6"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-5 sm:px-10">
          <Link href="/" className={`font-bold transition-colors duration-300 ${useDarkTheme ? "text-[#0A2540]" : "text-white"}`}>
            Setzet
          </Link>
          <nav
            className={`hidden items-center gap-8 text-[11px] font-semibold transition-colors duration-300 md:flex ${
              useDarkTheme ? "text-[#0A2540]/70" : "text-white/80"
            }`}
          >
            <NavLink href="/" isScrolled={useDarkTheme} isActive={isHomeActive}>
              Home
            </NavLink>
            <NavLink href="/about" isScrolled={useDarkTheme} isActive={isAboutActive}>
              About
            </NavLink>
            <NavLink href="/services" isScrolled={useDarkTheme} isActive={isServicesActive}>
              Services
            </NavLink>
            <NavLink href="/work" isScrolled={useDarkTheme} isActive={isWorkActive}>
              Work
            </NavLink>
            <NavLink href="/product" isScrolled={useDarkTheme} isActive={isProductActive}>
              Product
            </NavLink>
            <NavLink href="/blogs" isScrolled={useDarkTheme} isActive={isBlogsActive}>
              Blogs
            </NavLink>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              className={`hidden rounded-full border px-5 py-2.5 text-[11px] font-bold transition-all duration-300 md:inline-flex ${
                useDarkTheme
                  ? "border-[#007BFF] bg-[#007BFF]/10 text-[#007BFF] hover:bg-[#007BFF] hover:text-white"
                  : "border-white/30 text-white hover:bg-white hover:text-[#0A2540]"
              }`}
              href="/#contact"
            >
              Start a Project
            </Link>
            <button
              className={`inline-flex h-10 items-center justify-center rounded-full border px-4 text-[11px] font-semibold transition md:hidden ${
                useDarkTheme
                  ? "border-[#0A2540]/20 text-[#0A2540] hover:border-[#007BFF]"
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
                  } ${useDarkTheme ? "bg-[#0A2540]" : "bg-white"}`}
                />
                <span
                  className={`absolute left-0 top-[5px] h-[2px] w-full transition-opacity duration-300 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  } ${useDarkTheme ? "bg-[#0A2540]" : "bg-white"}`}
                />
                <span
                  className={`absolute left-0 top-[10px] h-[2px] w-full transition-transform duration-300 ${
                    menuOpen ? "-translate-y-[5px] -rotate-45" : ""
                  } ${useDarkTheme ? "bg-[#0A2540]" : "bg-white"}`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU PANEL */}
      <div
        id="mobile-menu"
        className={`fixed right-4 top-16 z-50 w-[min(240px,calc(100vw-2rem))] origin-top-right rounded-2xl border border-[#0A2540]/10 bg-white p-4 text-[11px] font-bold uppercase tracking-[0.3em] text-[#0A2540]/70 shadow-lg transition-all duration-300 md:hidden ${
          menuOpen
            ? "scale-100 translate-y-0 opacity-100"
            : "pointer-events-none scale-95 -translate-y-2 opacity-0"
        }`}
      >
        <Link className={`block py-2 transition hover:text-[#007BFF] ${isHomeActive ? "text-[#007BFF] font-bold" : ""}`} href="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link className={`block py-2 transition hover:text-[#007BFF] ${isAboutActive ? "text-[#007BFF] font-bold" : ""}`} href="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link className={`block py-2 transition hover:text-[#007BFF] ${isServicesActive ? "text-[#007BFF] font-bold" : ""}`} href="/services" onClick={() => setMenuOpen(false)}>
          Services
        </Link>
        <Link className={`block py-2 transition hover:text-[#007BFF] ${isWorkActive ? "text-[#007BFF] font-bold" : ""}`} href="/work" onClick={() => setMenuOpen(false)}>
          Work
        </Link>
        <Link className={`block py-2 transition hover:text-[#007BFF] ${isProductActive ? "text-[#007BFF] font-bold" : ""}`} href="/product" onClick={() => setMenuOpen(false)}>
          Product
        </Link>
        <Link className={`block py-2 transition hover:text-[#007BFF] ${isBlogsActive ? "text-[#007BFF] font-bold" : ""}`} href="/blogs" onClick={() => setMenuOpen(false)}>
          Blogs
        </Link>
      </div>
    </>
  );
}
