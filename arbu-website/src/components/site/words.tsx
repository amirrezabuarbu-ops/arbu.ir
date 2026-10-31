"use client";

import { motion } from "framer-motion";
import { Heart, PenLine } from "lucide-react";
import { Reveal, SectionShell } from "./reveal";

export function Words() {
  return (
    <SectionShell
      id="words"
      index="۰۴"
      label="حرف آخر"
      title="آربو فقط یک برند نیست"
    >
      <Reveal>
        <motion.figure
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="glass relative mx-auto max-w-3xl overflow-hidden rounded-[2.5rem] p-8 text-center md:p-14"
        >
          {/* decorative purple top bar */}
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-l from-[#7200ff] via-[#a855f7] to-[#7200ff]" />
          <div className="blob start-1/2 top-0 size-56 -translate-x-1/2 bg-[#7200ff]/15" />

          <blockquote className="relative">
            <span aria-hidden className="mx-auto mb-6 block text-5xl font-black leading-none text-gradient-purple">”</span>
            <p className="text-xl font-extrabold leading-[2] text-[#111111] md:text-2xl md:leading-[2.1]">
              من هنوز در حال یادگیری‌ام و باور دارم که هر پروژه، یک قدم تازه در این مسیر است.
              آربو فقط یک برند نیست؛ خلاصه‌ای از{" "}
              <span className="text-gradient-purple">سال‌ها تلاش، اشتباه، یادگیری و ساختن</span> است.
            </p>
          </blockquote>

          <figcaption className="relative mt-8">
            <p className="text-sm font-bold text-[#454545]">ممنون که این مسیر را همراهی می‌کنید. 🙏</p>
            <div className="mx-auto mt-6 flex w-fit items-center gap-3 rounded-full bg-[#111111] py-2 pe-5 ps-2">
              <span className="flex size-10 items-center justify-center overflow-hidden rounded-full bg-white">
                <img src="/images/logo-t.png" alt="" className="size-7 object-contain p-0.5" />
              </span>
              <span className="leading-tight text-start">
                <span className="block text-sm font-extrabold text-white">امیررضا بابالو</span>
                <span className="mt-0.5 flex items-center gap-1.5 whitespace-nowrap text-[10px] font-semibold text-[#a855f7]">
                  <PenLine className="size-3" />
                  <span>بنیان‌گذار</span>
                  <span dir="ltr" className="font-extrabold tracking-wide">Arbu</span>
                </span>
              </span>
            </div>
          </figcaption>
        </motion.figure>
      </Reveal>
    </SectionShell>
  );
}
