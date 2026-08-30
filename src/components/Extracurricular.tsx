"use client";

import { portfolio } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Extracurricular() {
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

  // Group by year for editorial timeline
  const groupedByYear = portfolio.extracurricular.reduce(
    (acc, item) => {
      if (!acc[item.year]) acc[item.year] = [];
      acc[item.year].push(item);
      return acc;
    },
    {} as Record<string, typeof portfolio.extracurricular>
  );

  const sortedYears = Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <section
      id="extracurricular"
      ref={sectionRef}
      className="section-fade-in py-24 lg:py-32"
      aria-label="Extra Curricular Activities"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 lg:mb-20">
          <p className="font-mono-technical text-[11px] tracking-[0.2em] uppercase text-[var(--color-muted-gray)] mb-3">
            06 / Extra Curricular
          </p>
          <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[var(--color-charcoal)]">
            Beyond the Code
          </h2>
        </div>

        {/* Editorial timeline */}
        <div className="space-y-12">
          {sortedYears.map((year) => (
            <div key={year} className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-4 lg:gap-12">
              {/* Year label */}
              <div>
                <span className="font-editorial text-3xl lg:text-4xl text-[var(--color-bronze)] italic">
                  {year}
                </span>
              </div>

              {/* Activities for this year */}
              <div className="space-y-6">
                {groupedByYear[year].map((item, idx) => (
                  <div
                    key={`${item.title}-${idx}`}
                    className={`pb-6 ${
                      idx !== groupedByYear[year].length - 1
                        ? "border-b border-[var(--color-border)]"
                        : ""
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-bronze)] flex-shrink-0" />
                      <div>
                        <h3 className="font-editorial text-xl text-[var(--color-charcoal)]">
                          {item.title}
                        </h3>
                        <span className="font-mono-technical text-[10px] tracking-[0.15em] uppercase text-[var(--color-muted-gray)]">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-[var(--color-dark-gray)] leading-relaxed ml-5 pl-3">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Badges & Credentials */}
        {portfolio.badges && portfolio.badges.length > 0 && (
          <div className="mt-16 lg:mt-20 pt-12 border-t border-[var(--color-border)]">
            <h3 className="font-mono-technical text-[11px] tracking-[0.2em] uppercase text-[var(--color-bronze)] mb-8">
              Badges & Credentials
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {portfolio.badges.map((badge) => (
                <a
                  key={badge.title}
                  href={badge.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 md:p-5 rounded-xl bg-[var(--color-card-bg)] border border-[var(--color-border)] hover:border-[var(--color-bronze)] hover:bg-[var(--color-cream)] transition-all hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="h-2 w-2 rounded-full bg-[var(--color-bronze)] flex-shrink-0" />
                    <div>
                      <h4 className="font-editorial text-base text-[var(--color-charcoal)] group-hover:text-[var(--color-bronze)] transition-colors">
                        {badge.title}
                      </h4>
                      {badge.issuer && (
                        <p className="font-mono-technical text-[10px] tracking-wider uppercase text-[var(--color-muted-gray)] mt-0.5">
                          {badge.issuer}
                        </p>
                      )}
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-[var(--color-muted-gray)] group-hover:text-[var(--color-bronze)] flex-shrink-0 transition-colors ml-3" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
