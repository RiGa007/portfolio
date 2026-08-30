import { portfolio } from "@/data/portfolio";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Name and title */}
          <div className="text-center md:text-left">
            <p className="font-editorial text-lg text-[var(--color-charcoal)]">
              {portfolio.personal.name}
            </p>
            <p className="font-mono-technical text-[11px] tracking-[0.15em] uppercase text-[var(--color-muted-gray)]">
              {portfolio.personal.title}
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {portfolio.contact.github && (
              <a
                href={portfolio.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-muted-gray)] hover:text-[var(--color-charcoal)] transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
            )}
            {portfolio.contact.linkedin && (
              <a
                href={portfolio.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-muted-gray)] hover:text-[var(--color-charcoal)] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
            )}
            {portfolio.contact.email && (
              <a
                href={`mailto:${portfolio.contact.email}`}
                className="text-[var(--color-muted-gray)] hover:text-[var(--color-charcoal)] transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            )}
          </div>

          {/* Copyright */}
          <p className="font-mono-technical text-[11px] tracking-wider text-[var(--color-muted-gray)] text-center md:text-right">
            &copy; {currentYear} {portfolio.personal.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
