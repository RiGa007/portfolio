"use client";

import { portfolio } from "@/data/portfolio";
import Image from "next/image";
import { ArrowDown, FileDown } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-fade-in min-h-screen flex items-center pt-20"
      aria-label="About"
    >
      <div className="mx-auto max-w-7xl w-full px-6 lg:px-8 py-16 lg:py-24">
        {/* Hero card container */}
        <div className="bg-[var(--color-cream)] rounded-3xl p-8 md:p-12 lg:p-16 xl:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Editorial Content */}
            <div className="order-2 lg:order-1 space-y-8">
              {/* Large editorial heading */}
              <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight text-[var(--color-charcoal)]">
                {portfolio.personal.title.split(" ").map((word, i) => (
                  <span key={i} className="block">
                    {i === 0 ? (
                      <span className="italic font-light">{word}</span>
                    ) : (
                      word
                    )}
                    {i < portfolio.personal.title.split(" ").length - 1 && i === 0
                      ? " "
                      : ""}
                  </span>
                ))}
              </h1>

              {/* Subtitle with left border accent */}
              <div className="border-l-2 border-[var(--color-bronze)] pl-5 space-y-3">
                <p className="font-mono-technical text-sm md:text-base text-[var(--color-dark-gray)] leading-relaxed">
                  {portfolio.personal.subtitle}
                </p>
                <p className="font-mono-technical text-sm md:text-base text-[var(--color-muted-gray)] leading-relaxed">
                  {portfolio.personal.bio.split("AI").map((part, i) =>
                    i === 0 ? (
                      part
                    ) : (
                      <span key={i}>
                        <span className="italic font-editorial text-[var(--color-bronze)]">
                          AI
                        </span>
                        {part}
                      </span>
                    )
                  )}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#projects")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 bg-[var(--color-charcoal)] text-[var(--color-ivory)] px-6 py-3 rounded-full font-mono-technical text-xs tracking-[0.15em] uppercase transition-all hover:bg-[var(--color-dark-gray)] hover:shadow-lg"
                >
                  View Projects
                  <ArrowDown size={14} className="-rotate-90" />
                </a>

                <a
                  href={portfolio.personal.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[var(--color-charcoal)] text-[var(--color-charcoal)] px-6 py-3 rounded-full font-mono-technical text-xs tracking-[0.15em] uppercase transition-all hover:bg-[var(--color-charcoal)] hover:text-[var(--color-ivory)]"
                >
                  <FileDown size={14} />
                  Download CV
                </a>
              </div>
            </div>

            {/* Right: Portrait */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Image container */}
                <div className="group relative w-72 h-96 sm:w-80 sm:h-[28rem] md:w-96 md:h-[32rem] lg:w-[22rem] lg:h-[30rem] xl:w-[26rem] xl:h-[34rem] rounded-2xl overflow-hidden bg-[var(--color-card-bg)] shadow-xl border border-[var(--color-border)] cursor-pointer">
                  <Image
                    src={portfolio.personal.image}
                    alt={`Portrait of ${portfolio.personal.name}`}
                    fill
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    priority
                    sizes="(max-width: 768px) 288px, (max-width: 1024px) 384px, 416px"
                  />

                  {/* Overlay name and badge */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none">
                    <p className="font-editorial text-2xl text-[var(--color-bronze-light)] italic drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                      {portfolio.personal.name}
                    </p>
                    {portfolio.personal.badge && (
                      <div className="mt-1.5 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-bronze)] shadow-sm flex-shrink-0" />
                        <p className="font-mono-technical text-[10px] tracking-[0.18em] uppercase text-[var(--color-cream)] font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                          {portfolio.personal.badge}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
