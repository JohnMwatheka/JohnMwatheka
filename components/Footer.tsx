// components/Footer.tsx

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(0,0,0,0.06)] px-8 py-16 dark:border-[rgba(255,255,255,0.06)] md:px-16">
      <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-[13px] tracking-wide text-primary">
            ABRAHAM MWATHEKA
          </p>
        </div>

        <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
          <div className="flex flex-col gap-3">
            <Link
              href="/work"
              className="text-[13px] tracking-wide text-secondary transition-colors duration-200 hover:text-primary"
            >
              WORK
            </Link>
            <Link
              href="/about"
              className="text-[13px] tracking-wide text-secondary transition-colors duration-200 hover:text-primary"
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              className="text-[13px] tracking-wide text-secondary transition-colors duration-200 hover:text-primary"
            >
              CONTACT
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://github.com/Johnmwatheka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] tracking-wide text-secondary transition-colors duration-200 hover:text-primary"
            >
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/abraham-mwatheka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] tracking-wide text-secondary transition-colors duration-200 hover:text-primary"
            >
              LINKEDIN
            </a>
            <a
              href="mailto:abrahammwatheka@gmail.com"
              className="text-[13px] tracking-wide text-secondary transition-colors duration-200 hover:text-primary"
            >
              EMAIL
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}