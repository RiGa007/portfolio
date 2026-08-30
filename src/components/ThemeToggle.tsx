"use client";

import { useSyncExternalStore, useCallback } from "react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): "dark" | "light" {
  if (typeof window === "undefined") return "dark";
  const saved = localStorage.getItem("portfolio-theme");
  if (saved === "light" || saved === "dark") return saved;
  const currentAttr = document.documentElement.getAttribute("data-theme");
  return currentAttr === "light" ? "light" : "dark";
}

function getServerSnapshot(): "dark" | "light" {
  return "dark";
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    // Apply smooth theme transition
    document.documentElement.classList.add("theme-transition");

    document.documentElement.setAttribute("data-theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    try {
      localStorage.setItem("portfolio-theme", nextTheme);
      // Dispatch storage event so all instances (desktop & mobile) update immediately
      window.dispatchEvent(new Event("storage"));
    } catch {
      // Ignore localStorage restrictions if any
    }

    setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 350);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`p-2 rounded-full text-[var(--color-muted-gray)] hover:text-[var(--color-charcoal)] hover:bg-[var(--color-card-bg)] transition-colors focus-visible:outline-none ${className}`}
    >
      {isDark ? (
        <Sun
          size={17}
          className="text-[var(--color-bronze)] hover:text-[var(--color-bronze-light)] transition-colors"
        />
      ) : (
        <Moon
          size={17}
          className="text-[var(--color-charcoal)] transition-colors"
        />
      )}
    </button>
  );
}
