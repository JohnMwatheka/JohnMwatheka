/* eslint-disable react-hooks/set-state-in-effect */
// components/Nav.tsx

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);

    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-background/80 px-8 py-5 backdrop-blur-md md:px-16">
      <Link
        href="/"
        className="text-[13px] tracking-wide text-primary transition-all duration-200 hover:-translate-y-px"
      >
        ABRAHAM
      </Link>

      <div className="flex items-center gap-6 text-[13px] tracking-wide text-secondary">
        <Link
          href="/work"
          className="transition-all duration-200 hover:-translate-y-px hover:text-primary"
        >
          WORK
        </Link>
        <Link
          href="/about"
          className="transition-all duration-200 hover:-translate-y-px hover:text-primary"
        >
          ABOUT
        </Link>
        <Link
          href="/contact"
          className="transition-all duration-200 hover:-translate-y-px hover:text-primary"
        >
          CONTACT
        </Link>

        <button
          onClick={toggleTheme}
          className="ml-1 flex items-center justify-center text-primary transition-all duration-200 hover:-translate-y-px"
          aria-label="Toggle light/dark mode"
        >
          {isDark ? (
            // Sun icon
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          ) : (
            // Moon icon
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}