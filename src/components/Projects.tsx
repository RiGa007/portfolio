"use client";

import { portfolio } from "@/data/portfolio";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { useEffect, useRef } from "react";

export default function Projects() {
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
    return () => { if (el) observer.unobserve(el); };
  }, []);

  const featuredProjects = portfolio.projects.filter((p) => p.featured);
  const otherProjects = portfolio.projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-fade-in py-24 lg:py-32 bg-[var(--color-cream)]"
      aria-label="Projects"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 lg:mb-20">
          <p className="font-mono-technical text-[11px] tracking-[0.2em] uppercase text-[var(--color-muted-gray)] mb-3">
            03 / Projects
          </p>
          <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[var(--color-charcoal)]">
            Selected Work
          </h2>
        </div>

        {/* Featured projects */}
        <div className={`space-y-12 ${otherProjects.length > 0 ? "mb-16" : ""}`}>
          {featuredProjects.map((project, index) => {
            const hasLinks = Boolean(project.github && project.github !== "") || Boolean(project.demo && project.demo !== "");

            if (project.image) {
              return (
                <div
                  key={project.title}
                  className="group bg-[var(--color-ivory)] rounded-2xl overflow-hidden border border-[var(--color-border)] transition-shadow hover:shadow-lg"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image */}
                    <div className={`relative aspect-[4/3] lg:aspect-auto min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] overflow-hidden bg-[var(--color-card-bg)] ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-8">
                          <p className="font-mono-technical text-[11px] tracking-[0.2em] uppercase text-[var(--color-muted-gray)] mb-2">
                            Project {String(index + 1).padStart(2, "0")}
                          </p>
                          <p className="font-editorial text-2xl text-[var(--color-dark-gray)] italic">
                            {project.category || "Featured"}
                          </p>
                        </div>
                      </div>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        loading="lazy"
                      />
                    </div>

                    {/* Content */}
                    <div className={`p-8 md:p-10 lg:p-12 flex flex-col justify-center ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                      <p className="font-mono-technical text-[11px] tracking-[0.2em] uppercase text-[var(--color-bronze)] mb-3">
                        Featured Project
                      </p>
                      <h3 className="font-editorial text-2xl md:text-3xl text-[var(--color-charcoal)] mb-4">
                        {project.title}
                      </h3>
                      <p className="text-[var(--color-dark-gray)] leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {project.metrics && (
                        <p className="font-mono-technical text-xs text-[var(--color-bronze)] mb-6">
                          ● {project.metrics}
                        </p>
                      )}

                      {/* Tech stack */}
                      <div className={`flex flex-wrap gap-2 ${hasLinks ? "mb-8" : ""}`}>
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-[var(--color-cream)] text-[var(--color-muted-gray)] text-xs font-mono-technical rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      {hasLinks && (
                        <div className="flex items-center gap-4">
                          {project.github && project.github !== "" && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 font-mono-technical text-xs tracking-[0.1em] uppercase text-[var(--color-charcoal)] hover:text-[var(--color-bronze)] transition-colors"
                              aria-label={`View ${project.title} source code on GitHub`}
                            >
                              <GithubIcon size={16} />
                              Source
                            </a>
                          )}
                          {project.demo && project.demo !== "" && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 font-mono-technical text-xs tracking-[0.1em] uppercase text-[var(--color-charcoal)] hover:text-[var(--color-bronze)] transition-colors"
                              aria-label={`View ${project.title} live demo`}
                            >
                              <ExternalLink size={16} />
                              Live Demo
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            }

            // Clean layout for projects without an image (e.g. Smart Buoy)
            return (
              <div
                key={project.title}
                className="group bg-[var(--color-ivory)] rounded-2xl overflow-hidden border border-[var(--color-border)] transition-shadow hover:shadow-lg p-8 md:p-10 lg:p-12 min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <p className="font-mono-technical text-[11px] tracking-[0.2em] uppercase text-[var(--color-bronze)]">
                      Featured Project
                    </p>
                    <p className="font-mono-technical text-[11px] tracking-[0.2em] uppercase text-[var(--color-muted-gray)]">
                      Project {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>

                  <div className="mb-3">
                    <h3 className="font-editorial text-2xl md:text-3xl text-[var(--color-charcoal)] mb-1">
                      {project.title}
                    </h3>
                    {project.category && (
                      <p className="font-editorial text-lg text-[var(--color-bronze)] italic">
                        {project.category}
                      </p>
                    )}
                  </div>

                  <p className="text-[var(--color-dark-gray)] leading-relaxed max-w-4xl mb-6">
                    {project.description}
                  </p>

                  {project.metrics && (
                    <p className="font-mono-technical text-xs text-[var(--color-bronze)] mb-6">
                      ● {project.metrics}
                    </p>
                  )}
                </div>

                <div>
                  {/* Tech stack */}
                  <div className={`flex flex-wrap gap-2 ${hasLinks ? "mb-8" : ""}`}>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-[var(--color-cream)] text-[var(--color-muted-gray)] text-xs font-mono-technical rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {hasLinks && (
                    <div className="flex items-center gap-4">
                      {project.github && project.github !== "" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono-technical text-xs tracking-[0.1em] uppercase text-[var(--color-charcoal)] hover:text-[var(--color-bronze)] transition-colors"
                          aria-label={`View ${project.title} source code on GitHub`}
                        >
                          <GithubIcon size={16} />
                          Source
                        </a>
                      )}
                      {project.demo && project.demo !== "" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono-technical text-xs tracking-[0.1em] uppercase text-[var(--color-charcoal)] hover:text-[var(--color-bronze)] transition-colors"
                          aria-label={`View ${project.title} live demo`}
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Other projects grid */}
        {otherProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-[var(--color-ivory)] rounded-xl border border-[var(--color-border)] overflow-hidden transition-all hover:shadow-md hover:-translate-y-1"
              >
                {/* Image */}
                {project.image && (
                  <div className="relative aspect-video overflow-hidden bg-[var(--color-warm-gray)]/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="font-mono-technical text-[11px] tracking-[0.2em] uppercase text-[var(--color-muted-gray)]">
                        Project {String(featuredProjects.length + index + 1).padStart(2, "0")}
                      </p>
                    </div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {project.category && (
                    <p className="font-mono-technical text-[10px] tracking-[0.2em] uppercase text-[var(--color-bronze)] mb-2">
                      {project.category}
                    </p>
                  )}
                  <h3 className="font-editorial text-xl text-[var(--color-charcoal)] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--color-dark-gray)] leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-[var(--color-cream)] text-[var(--color-muted-gray)] text-[11px] font-mono-technical rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 text-[var(--color-muted-gray)] text-[11px] font-mono-technical">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  {(Boolean(project.github && project.github !== "") || Boolean(project.demo && project.demo !== "")) && (
                    <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
                      {project.github && project.github !== "" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--color-muted-gray)] hover:text-[var(--color-charcoal)] transition-colors"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <GithubIcon size={16} />
                        </a>
                      )}
                      {project.demo && project.demo !== "" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--color-muted-gray)] hover:text-[var(--color-charcoal)] transition-colors"
                          aria-label={`View ${project.title} live demo`}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
