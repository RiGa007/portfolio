"use client";

import { portfolio } from "@/data/portfolio";
import { useEffect, useRef } from "react";

export default function Skills() {
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

  // Separate professional skills from technical skills
  const technicalCategories = Object.entries(portfolio.skills).filter(
    ([key]) => key !== "professional"
  ) as [string, string[]][];

  const professionalSkills = portfolio.skills.professional || [];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-fade-in py-24 lg:py-32"
      aria-label="Skills"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 lg:mb-20">
          <p className="font-mono-technical text-[11px] tracking-[0.2em] uppercase text-[var(--color-muted-gray)] mb-3">
            02 / Skills
          </p>
          <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[var(--color-charcoal)]">
            Technical Arsenal
          </h2>
        </div>

        {/* Technical skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {technicalCategories.map(([key, skills]) => (
            <div key={key} className="group">
              {/* Category label */}
              <h3 className="font-mono-technical text-[11px] tracking-[0.2em] uppercase text-[var(--color-bronze)] mb-5 pb-3 border-b border-[var(--color-border)]">
                {portfolio.skillLabels[key] || key}
              </h3>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-3.5 py-1.5 bg-[var(--color-card-bg)] text-[var(--color-dark-gray)] text-sm font-medium rounded-lg transition-colors hover:bg-[var(--color-cream)] hover:text-[var(--color-charcoal)] border border-transparent hover:border-[var(--color-border)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Skills subsection */}
        {professionalSkills.length > 0 && (
          <div className="mt-12 lg:mt-16 pt-10 lg:pt-12 border-t border-[var(--color-border)]">
            <h3 className="font-mono-technical text-[11px] tracking-[0.2em] uppercase text-[var(--color-bronze)] mb-6 lg:mb-8">
              Professional Skills
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-3.5">
              {professionalSkills.map((skill) => (
                <div
                  key={skill}
                  className="group/item flex items-center gap-3 py-1.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-bronze)] opacity-60 group-hover/item:opacity-100 transition-opacity flex-shrink-0" />
                  <span className="text-[var(--color-dark-gray)] group-hover/item:text-[var(--color-charcoal)] transition-colors text-sm md:text-[15px]">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
