"use client";

import { useState, useEffect, useCallback } from "react";
import { portfolio } from "@/data/portfolio";
import { Menu, X, FileDown } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      setIsMobileOpen(false);
    },
    []
  );

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--color-ivory)]/95 backdrop-blur-sm shadow-[0_1px_0_var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Primary navigation"
      >
        {/* Logo / Name */}
        <a
          href="#about"
          onClick={(e) => handleNavClick(e, "#about")}
          className="flex items-center gap-2 group"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-bronze)] transition-transform group-hover:scale-125" />
          <span className="font-editorial text-lg tracking-wide text-[var(--color-charcoal)]">
            <span className="font-normal">{portfolio.personal.name.split(" ")[0]}</span>{" "}
            <span className="italic font-light">
              {portfolio.personal.name.split(" ").slice(1).join(" ")}
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {portfolio.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`font-mono-technical text-[11px] tracking-[0.15em] uppercase px-3 py-2 transition-colors duration-200 ${
                activeSection === item.href
                  ? "text-[var(--color-charcoal)]"
                  : "text-[var(--color-muted-gray)] hover:text-[var(--color-charcoal)]"
              }`}
            >
              {item.label}
            </a>
          ))}

          {/* Theme Toggle Button */}
          <ThemeToggle className="ml-1" />

          {/* CV Button */}
          <a
            href={portfolio.personal.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 rounded-full border border-[var(--color-button-secondary-border)] px-4 py-1.5 font-mono-technical text-[11px] tracking-[0.15em] uppercase text-[var(--color-button-secondary-text)] transition-colors hover:bg-[var(--color-charcoal)] hover:text-[var(--color-ivory)]"
          >
            CV
          </a>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex items-center gap-1.5 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-2 -mr-2 text-[var(--color-charcoal)]"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-0 bg-[var(--color-ivory)] z-40 lg:hidden transition-opacity duration-300 ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-8">
          {portfolio.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`font-mono-technical text-sm tracking-[0.2em] uppercase transition-colors duration-200 py-2 ${
                activeSection === item.href
                  ? "text-[var(--color-charcoal)]"
                  : "text-[var(--color-muted-gray)] hover:text-[var(--color-charcoal)]"
              }`}
            >
              {item.label}
            </a>
          ))}

          <a
            href={portfolio.personal.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-button-secondary-border)] px-6 py-2.5 font-mono-technical text-sm tracking-[0.15em] uppercase text-[var(--color-button-secondary-text)] transition-colors hover:bg-[var(--color-charcoal)] hover:text-[var(--color-ivory)]"
          >
            <FileDown size={16} />
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
