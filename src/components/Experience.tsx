"use client";

import { portfolio } from "@/data/portfolio";
import { MapPin, Calendar, ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-fade-in py-24 lg:py-32"
      aria-label="Experience"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 lg:mb-20">
          <p className="font-mono-technical text-[11px] tracking-[0.2em] uppercase text-[var(--color-muted-gray)] mb-3">
            04 / Experience
          </p>
          <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[var(--color-charcoal)]">
            Professional Journey
          </h2>
        </div>

        {/* Experience timeline */}
        <div className="space-y-0">
          {portfolio.experience.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className={`relative grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-12 py-10 ${
                index !== portfolio.experience.length - 1
                  ? "border-b border-[var(--color-border)]"
                  : ""
              }`}
            >
              {/* Left: metadata */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[var(--color-muted-gray)]">
                  <Calendar size={14} />
                  <p className="font-mono-technical text-xs tracking-wider">
                    {exp.duration}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[var(--color-muted-gray)]">
                  <MapPin size={14} />
                  <p className="font-mono-technical text-xs tracking-wider">
                    {exp.location}
                  </p>
                </div>
                {exp.type && (
                  <p className="font-mono-technical text-[10px] tracking-[0.15em] uppercase text-[var(--color-muted-gray)] pt-1">
                    {exp.type}
                  </p>
                )}
              </div>

              {/* Right: content */}
              <div>
                <p className="font-mono-technical text-[11px] tracking-[0.15em] uppercase text-[var(--color-bronze)] mb-2">
                  {exp.company}
                </p>
                <h3 className="font-editorial text-2xl text-[var(--color-charcoal)] mb-4">
                  {exp.role}
                </h3>
                <p className="text-[var(--color-dark-gray)] leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Badge if present */}
                {exp.badge && (
                  <div className="mt-3">
                    {exp.badgeUrl ? (
                      <a
                        href={exp.badgeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-card-bg)] text-[var(--color-charcoal)] font-mono-technical text-xs hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze)] transition-colors group/badge"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-bronze)]" />
                        <span>{exp.badge}</span>
                        <ExternalLink size={12} className="opacity-70 group-hover/badge:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-card-bg)] text-[var(--color-dark-gray)] font-mono-technical text-xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-bronze)]" />
                        <span>{exp.badge}</span>
                      </span>
                    )}
                  </div>
                )}

                {/* Achievements */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="space-y-2 mb-6 mt-4">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-[var(--color-dark-gray)]"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-bronze)] flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Technologies */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-[var(--color-card-bg)] text-[var(--color-muted-gray)] text-xs font-mono-technical rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
