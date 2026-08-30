"use client";

import { portfolio } from "@/data/portfolio";
import { ExternalLink, Award } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Certificates() {
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
      id="certificates"
      ref={sectionRef}
      className="section-fade-in py-24 lg:py-32 bg-[var(--color-cream)]"
      aria-label="Certificates"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 lg:mb-20">
          <p className="font-mono-technical text-[11px] tracking-[0.2em] uppercase text-[var(--color-muted-gray)] mb-3">
            05 / Certificates
          </p>
          <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[var(--color-charcoal)]">
            Credentials
          </h2>
        </div>

        {/* Certificates grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolio.certificates.map((cert) => (
            <a
              key={cert.title}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[var(--color-ivory)] rounded-xl border border-[var(--color-border)] p-6 md:p-8 transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-[var(--color-bronze)]"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-cream)] flex items-center justify-center text-[var(--color-bronze)] group-hover:bg-[var(--color-card-bg)] transition-colors">
                  <Award size={20} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-editorial text-lg text-[var(--color-charcoal)] group-hover:text-[var(--color-bronze)] transition-colors leading-snug mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-[var(--color-dark-gray)] mb-4">
                    {cert.issuer}
                  </p>

                  <div className="flex items-center justify-between text-xs text-[var(--color-muted-gray)] font-mono-technical pt-2 border-t border-[var(--color-border)]">
                    <span>{cert.date}</span>
                    <span className="inline-flex items-center gap-1.5 text-[var(--color-bronze)] tracking-[0.05em] uppercase font-medium">
                      View Credential
                      <ExternalLink size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
