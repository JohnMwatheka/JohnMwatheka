// app/about/page.tsx

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-primary">
      <section className="mx-auto max-w-2xl px-8 pb-32 pt-16 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="mb-16 text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.1] tracking-tight text-primary">
            About
          </h1>

          {/* Bio */}
          <div className="mb-20">
            <h2 className="mb-6 text-[13px] tracking-wide text-secondary">
              BIO
            </h2>
            <div className="space-y-6 text-[15px] leading-relaxed tracking-wide text-secondary">
              <p>
                I’m a full-stack software engineer based in Nairobi. I design
                and build production systems across web and mobile — from
                database architecture and backend logic to high-performance
                client interfaces.
              </p>
              <p>
                My work spans healthcare platforms, travel systems, mobility
                services, and event infrastructure. I focus on clean
                architecture, type safety, secure authentication, and reliable
                integrations (including M-Pesa payment flows).
              </p>
              <p>
                I ship independently and care about systems that remain
                maintainable under real operational load.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-20">
            <h2 className="mb-6 text-[13px] tracking-wide text-secondary">
              SKILLS
            </h2>
            <div className="space-y-5 text-[14px] tracking-wide text-primary">
              <div>
                <p className="mb-1 text-[12px] text-secondary">
                  Frameworks & Web
                </p>
                <p>Next.js · React · Node.js · Laravel · TypeScript</p>
              </div>
              <div>
                <p className="mb-1 text-[12px] text-secondary">Mobile</p>
                <p>React Native</p>
              </div>
              <div>
                <p className="mb-1 text-[12px] text-secondary">Database</p>
                <p>PostgreSQL · MySQL · Prisma</p>
              </div>
              <div>
                <p className="mb-1 text-[12px] text-secondary">Systems & Auth</p>
                <p>REST APIs · JWT · HTTP-only sessions · CORS</p>
              </div>
              <div>
                <p className="mb-1 text-[12px] text-secondary">Integrations</p>
                <p>M-Pesa · Payment gateways · Third-party APIs</p>
              </div>
              <div>
                <p className="mb-1 text-[12px] text-secondary">
                  Infrastructure
                </p>
                <p>Vercel · Git · CI/CD · Cypress · Postman</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-20">
            <h2 className="mb-6 text-[13px] tracking-wide text-secondary">
              EDUCATION
            </h2>
            <div className="text-[14px] tracking-wide">
              <p className="text-primary">
                Bachelor of Science in Computer Science
              </p>
              <p className="mt-1 text-secondary">
                University of Embu · 2021 – 2025
              </p>
              <p className="mt-1 text-secondary">
                Second Class Honors, Upper Division
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-block text-[13px] tracking-wide text-secondary transition-all duration-200 hover:-translate-y-px hover:text-primary"
          >
            Get in touch →
          </Link>
        </motion.div>
      </section>
    </main>
  );
}