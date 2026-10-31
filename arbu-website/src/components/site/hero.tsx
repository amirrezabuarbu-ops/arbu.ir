"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, Braces, Palette, Sparkles } from "lucide-react";
import { TiltCard } from "./tilt-card";

const HeroScene = dynamic(() => import("@/components/three/hero-scene"), { ssr: false });

const STATS = [
  { n: "۱۳", label: "شروع برنامه‌نویسی" },
  { n: "۱۶", label: "ورود به دنیای گرافیک" },
  { n: "۲۰", label: "تولد برند آربو" },
  { n: "۲", label: "زیربرند تخصصی" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};
const item = {
  hidden: { opacity: 0, y: 34, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-32 md:pt-36">
      {/* backdrop texture + ambient blobs */}
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]" />
      <div className="blob -start-32 top-24 size-[26rem] bg-[#7200ff]/[0.13]" />
      <div className="blob -end-24 bottom-10 size-[22rem] bg-[#a855f7]/[0.16]" />
      <div className="blob start-1/3 -top-20 size-[18rem] bg-white/80" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* ---- copy ---- */}
        <motion.div variants={container} initial="hidden" animate="show" className="text-center lg:text-start">
          <motion.div variants={item} className="mb-6 flex justify-center lg:justify-start">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-[#111111]">
              <Sparkles className="size-4 text-[#7200ff]" />
              وبلاگ شخصی امیررضا بابالو
              <span className="size-1.5 animate-pulse rounded-full bg-[#7200ff]" />
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-[2.6rem] font-black leading-[1.15] tracking-tight text-[#111111] sm:text-6xl lg:text-[4.2rem] lg:leading-[1.1]"
          >
            سلام! من
            <br />
            <span className="text-gradient-purple">امیررضا بابالو</span>
            <br />
            هستم.
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#454545] md:text-lg md:leading-9 lg:mx-0"
          >
            بنیان‌گذار و مالک برند{" "}
            <strong className="font-extrabold text-[#111111]">آربو (Arbu)</strong> — جایی که کد و
            خلاقیت به هم می‌رسند. داستان من از سیزده‌سالگی شروع شد؛ وقتی برای اولین بار پا به دنیای
            برنامه‌نویسی گذاشتم. امروز حاصل این مسیر، برندی است که عشق به طراحی و تکنولوژی را کنار
            هم جمع می‌کند.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="#brand"
              className="group inline-flex items-center gap-2 rounded-full bg-[#7200ff] px-7 py-3.5 text-sm font-bold text-white shadow-[0_18px_40px_-12px_rgba(114,0,255,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5f00d6] hover:shadow-[0_24px_50px_-12px_rgba(114,0,255,0.75)]"
            >
              با آربو آشنا شو
              <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#journey"
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/80"
            >
              مسیر من
            </a>
          </motion.div>

          {/* stats — iOS segmented look */}
          <motion.dl
            variants={item}
            className="glass mx-auto mt-10 grid max-w-lg grid-cols-4 divide-x divide-[#111111]/[0.06] rounded-[1.75rem] py-5 lg:mx-0 [direction:rtl]"
          >
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1 px-1 text-center">
                <dt className="order-2 text-[10px] font-semibold leading-4 text-[#454545] md:text-xs">
                  {s.label}
                </dt>
                <dd className="order-1 text-2xl font-black text-[#111111] md:text-3xl">
                  <span className="text-gradient-purple">{s.n}</span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* ---- 3D visual ---- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="relative mx-auto h-[420px] w-full max-w-[480px] sm:h-[500px] lg:h-[560px]"
        >
          {/* orbiting 3D shapes */}
          <HeroScene />

          {/* glass logo card — 3D tilt */}
          <div className="group absolute inset-0 flex items-center justify-center" style={{ perspective: "1200px" }}>
            <TiltCard intensity={12} className="w-[68%] max-w-[300px]">
              <div className="glass relative overflow-hidden rounded-[2.2rem] p-8">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-[#7200ff]/[0.06]" />
                <img
                  src="/images/logo-t.png"
                  alt="لوگوی برند آربو — تایپوگرافی ARBU"
                  className="relative w-full rounded-2xl object-contain drop-shadow-[0_18px_30px_rgba(17,17,17,0.18)]"
                  style={{ transform: "translateZ(40px)" }}
                />
                <div
                  className="relative mt-5 flex items-center justify-between rounded-2xl bg-[#111111] px-4 py-3"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <span className="text-xs font-bold text-white">امیررضا بابالو</span>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#a855f7]" dir="ltr">
                    FOUNDER
                  </span>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* floating sub-brand chips */}
          <div className="glass animate-float absolute end-1 top-8 flex items-center gap-2.5 rounded-2xl px-4 py-3" style={{ transform: "translateZ(70px)" }}>
            <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#7200ff] to-[#a855f7] text-white">
              <Palette className="size-4" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-extrabold text-[#111111]" dir="ltr">ArbuiD</span>
              <span className="block text-[10px] font-semibold text-[#454545]">گرافیک و طراحی</span>
            </span>
          </div>

          <div className="glass animate-float-delayed absolute bottom-10 start-0 flex items-center gap-2.5 rounded-2xl px-4 py-3" style={{ transform: "translateZ(80px)" }}>
            <span className="flex size-9 items-center justify-center rounded-xl bg-[#111111] text-white">
              <Braces className="size-4" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-extrabold text-[#111111]" dir="ltr">ArbuAX</span>
              <span className="block text-[10px] font-semibold text-[#454545]">تکنولوژی و نرم‌افزار</span>
            </span>
          </div>
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.a
        href="#brand"
        aria-label="اسکرول به پایین"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#454545]/70 transition-colors hover:text-[#7200ff] md:flex"
      >
        <span className="text-[10px] font-bold tracking-[0.25em]">اسکرول</span>
        <span className="glass flex size-9 items-center justify-center rounded-full">
          <ArrowDown className="size-4 animate-bounce" />
        </span>
      </motion.a>
    </section>
  );
}
