// components/Work.tsx

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "ResQ247",
    description: "Healthcare platform",
    href: "/work/resq247",
    image: "/resq247.png",
  },
  {
    name: "Sopa Trails Africa",
    description: "Travel platform",
    href: "/work/sopa-trails",
    image: "/sopa.png",
  },
  {
    name: "Yamismart",
    description: "Rides & food delivery",
    href: "/work/yamismart",
    image: "/yamismart.png",
  },
];

export default function Work() {
  return (
    <section id="work" className="px-8 pb-32 pt-8 md:px-16">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16 text-[13px] tracking-wide text-secondary"
      >
        SELECTED WORK
      </motion.h2>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
          >
            <Link href={project.href} className="group block">
              {/* Project Visual — raised container with padding */}
              <div className="raised relative mb-5 aspect-4/3 w-full overflow-hidden border border-[rgba(0,0,0,0.04)] p-3 transition-all duration-300 group-hover:-translate-y-1 dark:border-[rgba(255,255,255,0.06)] md:rounded-32px md:p-3.5">
                {/* Image with smooth corners */}
                <div className="relative h-full w-full overflow-hidden rounded-12px md:rounded-[22px]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover grayscale transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />

                  {/* Centered title with overlay only behind text */}
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

              {/* Project Info */}
              <div>
                <p className="text-[13px] tracking-wide text-secondary">
                  {project.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}