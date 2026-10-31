"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

/** iOS-style soft spring reveal on scroll */
export function Reveal({ children, delay = 0, y = 32, className, once = true }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Section wrapper with big Persian index number (Swiss-style) */
export function SectionShell({
  id,
  index,
  label,
  title,
  description,
  dark = false,
  children,
}: {
  id: string;
  index: string;
  label: string;
  title: string;
  description?: string;
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative scroll-mt-28 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div className="space-y-4">
              <span
                className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold ${
                  dark
                    ? "bg-white/10 text-[#d8b4fe] ring-1 ring-white/15"
                    : "bg-[#7200ff]/[0.07] text-[#7200ff] ring-1 ring-[#7200ff]/15"
                }`}
              >
                <span className="size-1.5 rounded-full bg-current" />
                {label}
              </span>
              <h2
                className={`text-3xl font-black leading-[1.25] tracking-tight md:text-5xl md:leading-[1.2] ${
                  dark ? "text-[#f2f1ee]" : "text-[#111111]"
                }`}
              >
                {title}
              </h2>
              {description ? (
                <p
                  className={`max-w-2xl text-base leading-8 md:text-lg md:leading-9 ${
                    dark ? "text-white/60" : "text-[#454545]"
                  }`}
                >
                  {description}
                </p>
              ) : null}
            </div>
            <span
              aria-hidden
              className={`hidden select-none text-6xl font-black tabular-nums md:block ${
                dark ? "text-white/[0.07]" : "text-[#111111]/[0.06]"
              }`}
            >
              {index}
            </span>
          </div>
        </Reveal>
        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
