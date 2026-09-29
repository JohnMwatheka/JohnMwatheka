// app/work/page.tsx

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects, getOtherProjects } from "@/data/projects";

export default function WorkPage() {
  const featured = getFeaturedProjects();
  const others = getOtherProjects();

  return (
    <main className="min-h-screen bg-background text-primary">
      <section className="mx-auto max-w-5xl px-8 pb-32 pt-16 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="mb-6 text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.1] tracking-tight text-primary">
            Work
          </h1>

          <p className="mb-20 max-w-xl text-[15px] leading-relaxed tracking-wide text-secondary">
            A selection of platforms and products I’ve engineered — from
            healthcare systems to mobility and commerce.
          </p>

          {/* Featured Projects */}
          <div className="mb-24">
            <h2 className="mb-10 text-[13px] tracking-wide text-secondary">
              FEATURED
            </h2>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
              {featured.map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group block"
                >
                  <div className="raised relative mb-5 aspect-4/3 w-full overflow-hidden border border-[rgba(0,0,0,0.04)] p-3 transition-all duration-300 group-hover:-translate-y-1 dark:border-[rgba(255,255,255,0.06)] md:rounded-32px md:p-3.5">
                    <div className="relative h-full w-full overflow-hidden rounded-12px md:rounded-[22px]">
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover grayscale transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 100vw, 30vw"
                        />
                      )}

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative px-4 py-2.5">
                          <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" />
                          <h3 className="relative text-center text-[13px] tracking-wide text-white md:text-[14px]">
                            {project.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-[13px] tracking-wide text-secondary">
                    {project.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* More Work — Checklist style */}
          <div className="mb-20">
            <h2 className="mb-10 text-[13px] tracking-wide text-secondary">
              MORE WORK
            </h2>

            <div className="space-y-5">
              {others.map((project) => (
                <a
                  key={project.slug}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 transition-all duration-200 hover:-translate-y-px"
                >
                  {/* Filled square checkbox */}
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] bg-primary">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--background)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>

                  <div className="flex flex-1 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <span className="text-[15px] tracking-wide text-primary">
                      {project.name}
                    </span>
                    <span className="text-[13px] tracking-wide text-secondary">
                      {project.shortDescription}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Back to home */}
          <Link
            href="/"
            className="inline-block text-[13px] tracking-wide text-secondary transition-all duration-200 hover:-translate-y-px hover:text-primary"
          >
            ← Back home
          </Link>
        </motion.div>
      </section>
    </main>
  );
}