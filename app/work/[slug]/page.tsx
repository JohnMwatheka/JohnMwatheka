// app/work/[slug]/page.tsx

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getProjectBySlug } from "@/data/projects";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background text-primary">
        <div className="text-center">
          <p className="text-[15px] tracking-wide">Project not found</p>
          <Link
            href="/work"
            className="mt-6 inline-block text-[13px] tracking-wide text-secondary transition-colors hover:text-primary"
          >
            ← Back to work
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-primary">
      <section className="mx-auto max-w-4xl px-8 pb-32 pt-16 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-4 text-[13px] tracking-wide text-secondary">
            {project.year} · {project.role}
          </p>

          <h1 className="mb-6 text-[clamp(2.5rem,6vw,4.5rem)] font-normal leading-[1.05] tracking-tight text-primary">
            {project.name}
          </h1>

          <p className="mb-10 max-w-2xl text-[15px] leading-relaxed tracking-wide text-secondary">
            {project.description}
          </p>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-16 inline-block text-[13px] tracking-wide text-primary transition-all duration-200 hover:-translate-y-px"
            >
              Visit live site →
            </a>
          )}

          {/* Project Visual */}
          {project.image && (
            <div className="raised relative mb-16 aspect-16/10 w-full overflow-hidden border border-[rgba(0,0,0,0.04)] p-3 dark:border-[rgba(255,255,255,0.06)] md:rounded-32px md:p-4">
              <div className="relative h-full w-full overflow-hidden rounded-12px md:rounded-[22px]">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 768px) 100vw, 900px"
                  priority
                />
              </div>
            </div>
          )}

          {/* Highlights */}
          {project.highlights.length > 0 && (
            <div className="mb-16">
              <h2 className="mb-6 text-[13px] tracking-wide text-secondary">
                HIGHLIGHTS
              </h2>
              <ul className="space-y-3">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="text-[15px] tracking-wide text-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Stack */}
          {project.stack.length > 0 && (
            <div className="mb-16">
              <h2 className="mb-6 text-[13px] tracking-wide text-secondary">
                STACK
              </h2>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[14px] tracking-wide text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Back link */}
          <Link
            href="/work"
            className="inline-block text-[13px] tracking-wide text-secondary transition-all duration-200 hover:-translate-y-px hover:text-primary"
          >
            ← Back to work
          </Link>
        </motion.div>
      </section>
    </main>
  );
}