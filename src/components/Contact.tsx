"use client";

import { portfolio } from "@/data/portfolio";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
import { useEffect, useRef } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.05 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const socialLinks = [
    {
      label: "Email",
      href: `mailto:${portfolio.contact.email}`,
      icon: Mail,
      value: portfolio.contact.email,
      show: !!portfolio.contact.email,
    },
    {
      label: "GitHub",
      href: portfolio.contact.github,
      icon: GithubIcon,
      value: "GitHub",
      show: !!portfolio.contact.github,
    },
    {
      label: "LinkedIn",
      href: portfolio.contact.linkedin,
      icon: LinkedinIcon,
      value: "LinkedIn",
      show: !!portfolio.contact.linkedin,
    },
    {
      label: "Twitter",
      href: portfolio.contact.twitter,
      icon: TwitterIcon,
      value: "Twitter",
      show: !!portfolio.contact.twitter,
    },
  ].filter((link) => link.show);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-fade-in py-32 sm:py-40 lg:py-48"
      aria-label="Contact"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section number */}
          <p className="font-mono-technical text-[11px] tracking-[0.2em] uppercase text-[var(--color-muted-gray)] mb-8 lg:mb-10">
            08 / Contact
          </p>

          {/* Large editorial heading */}
          <h2 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[var(--color-charcoal)] mb-8 lg:mb-10 leading-[0.95] tracking-tight">
            {portfolio.contact.heading}
          </h2>

          {/* Supporting paragraph */}
          <p className="text-lg md:text-xl text-[var(--color-dark-gray)] leading-relaxed mb-14 lg:mb-16 max-w-2xl mx-auto">
            {portfolio.contact.subtext}
          </p>

          {/* Primary CTA — large and prominent */}
          <a
            href={`mailto:${portfolio.contact.email}`}
            className="group inline-flex items-center gap-3 bg-[var(--color-button-primary-bg)] text-[var(--color-button-primary-text)] border border-[var(--color-button-primary-border)] px-10 py-5 rounded-full font-mono-technical text-sm md:text-base tracking-[0.15em] uppercase transition-all hover:bg-[var(--color-dark-gray)] hover:text-[var(--color-ivory)] hover:shadow-xl hover:gap-4 mb-20 lg:mb-24"
          >
            Get in Touch
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

          {/* Divider */}
          <div className="w-16 h-px bg-[var(--color-border)] mx-auto mb-12 lg:mb-14" />

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-[var(--color-muted-gray)] mb-10">
            <MapPin size={15} />
            <span className="font-mono-technical text-sm tracking-wider">
              {portfolio.personal.location}
            </span>
          </div>

          {/* Social links row */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={
                  link.label !== "Email" ? "noopener noreferrer" : undefined
                }
                className="group flex items-center gap-2.5 text-[var(--color-muted-gray)] hover:text-[var(--color-charcoal)] transition-colors"
                aria-label={link.label}
              >
                <link.icon size={18} />
                <span className="font-mono-technical text-xs tracking-wider hidden sm:inline">
                  {link.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
