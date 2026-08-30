"use client";

import { portfolio } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Education() {
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
      id="education"
      ref={sectionRef}
      className="section-fade-in py-24 lg:py-32 bg-[var(--color-cream)]"
      aria-label="Education"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 lg:mb-20">
          <p className="font-mono-technical text-[11px] tracking-[0.2em] uppercase text-[var(--color-muted-gray)] mb-3">
            07 / Education
          </p>
          <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[var(--color-charcoal)]">
            Academic Foundation
          </h2>
        </div>

        {/* Education entries */}
        <div className="space-y-10">
          {portfolio.education.map((edu) => (
            <div
              key={`${edu.institution}-${edu.degree}`}
              className="bg-[var(--color-ivory)] rounded-2xl border border-[var(--color-border)] p-8 md:p-10 lg:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
                {/* Main content */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap size={24} className="text-[var(--color-bronze)]" />
                    <p className="font-mono-technical text-xs tracking-[0.15em] uppercase text-[var(--color-muted-gray)]">
                      {edu.duration}
                    </p>
                  </div>

                  <h3 className="font-editorial text-2xl md:text-3xl text-[var(--color-charcoal)] mb-2">
                    {edu.institution}
                  </h3>
                  <p className="text-lg text-[var(--color-dark-gray)] mb-1">
                    {edu.degree}
                  </p>
                  {edu.specialization && (
                    <p className="text-[var(--color-bronze)] italic font-editorial mb-4">
                      {edu.specialization}
                    </p>
                  )}

                  {edu.grade && (
                    <p className="font-mono-technical text-sm text-[var(--color-muted-gray)] mb-6">
                      {edu.grade}
                    </p>
                  )}

                  {/* Achievements */}
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="mb-6">
                      <p className="font-mono-technical text-[11px] tracking-[0.15em] uppercase text-[var(--color-bronze)] mb-3">
                        Achievements
                      </p>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-[var(--color-dark-gray)]"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-bronze)] flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Coursework sidebar */}
                {edu.coursework.length > 0 && (
                  <div className="lg:border-l lg:border-[var(--color-border)] lg:pl-8">
                    <p className="font-mono-technical text-[11px] tracking-[0.15em] uppercase text-[var(--color-bronze)] mb-4">
                      Relevant Coursework
                    </p>
                    <ul className="space-y-2">
                      {edu.coursework.map((course) => (
                        <li
                          key={course}
                          className="text-sm text-[var(--color-dark-gray)]"
                        >
                          {course}
                        </li>
                      ))}
                    </ul>
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
