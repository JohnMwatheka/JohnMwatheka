// components/Hero.tsx

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] flex-col px-6 md:px-0">
      {/* Hero Card */}
      <div className="flex flex-1 items-center justify-center py-12 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="raised w-full max-w-4xl overflow-hidden rounded-[28px] border border-[rgba(0,0,0,0.04)] dark:border-[rgba(255,255,255,0.06)] sm:rounded-32px md:rounded-[40px]"
        >
          <div className="flex flex-col items-center gap-8 p-8 sm:p-10 md:flex-row md:gap-14 md:p-14">
            {/* Image + Caption */}
            <div className="relative flex w-full flex-col items-center md:w-auto">
              {/* Mobile layout: image pushed left + lower */}
              <div className="relative flex w-full justify-start pt-10 md:justify-center md:pt-0">
                <div className="relative ml-2 h-36 w-36 shrink-0 overflow-hidden rounded-full border border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.08)] md:ml-0 md:h-52 md:w-52">
                  <Image
                    src="/abraham.png"
                    alt="Abraham Mwatheka"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 144px, 208px"
                    priority
                  />
                </div>

                {/* Mobile speech bubble — top right */}
                <div className="absolute right-0 top-0 block md:hidden">
                  <div className="relative rounded-[14px] bg-primary px-3.5 py-2 text-background dark:bg-background dark:text-primary">
                    <p className="text-[11px] tracking-wide">Mwatheka John</p>
                    <p className="text-[10px] tracking-wide opacity-70">
                      4yrs of experience
                    </p>

                    {/* Tail */}
                    <div
                      className="absolute -bottom-1.5 left-4 h-0 w-0"
                      style={{
                        borderLeft: "7px solid transparent",
                        borderRight: "7px solid transparent",
                        borderTop: "7px solid var(--primary)",
                      }}
                    />
                    <div
                      className="absolute -bottom-1.5 left-4 hidden h-0 w-0 dark:block"
                      style={{
                        borderLeft: "7px solid transparent",
                        borderRight: "7px solid transparent",
                        borderTop: "7px solid var(--background)",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Desktop caption */}
              <div className="mt-4 hidden text-center md:block">
                <p className="text-[13px] tracking-wide text-primary">
                  John Abraham Mwatheka
                </p>
                <p className="mt-1 text-[12px] tracking-wide text-secondary">
                  4 years of experience
                </p>
              </div>
            </div>

            {/* Text Block */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <h1 className="text-[clamp(2.75rem,7vw,5.5rem)] font-normal leading-[0.95] tracking-tight text-primary">
                <span className="block">Software</span>
                <span className="block">Engineer</span>
              </h1>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}