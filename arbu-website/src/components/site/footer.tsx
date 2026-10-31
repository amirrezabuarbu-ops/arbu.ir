"use client";

import { Heart } from "lucide-react";

const LINKS = [
  { href: "#home", label: "خانه" },
  { href: "#brand", label: "برند آربو" },
  { href: "#journey", label: "مسیر من" },
  { href: "#projects", label: "پروژه‌ها" },
  { href: "#words", label: "حرف آخر" },
];

export function Footer() {
  return (
    <footer className="mt-auto px-3 md:px-6 pb-[max(0.85rem,env(safe-area-inset-bottom))] md:pb-[max(1.5rem,env(safe-area-inset-bottom))]">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#111111] px-6 py-10 md:px-12 md:py-14">
        <div className="dot-grid-light pointer-events-none absolute inset-0 opacity-40" />
        <div className="blob -start-20 -bottom-24 size-72 bg-[#7200ff]/25" />
        <div className="blob -end-16 -top-20 size-64 bg-[#a855f7]/15" />

        <div className="relative flex flex-col items-center gap-8 text-center">
          <a href="#home" aria-label="بازگشت به بالای صفحه" className="flex flex-col items-center gap-3">
            <img
              src="/images/logo-white.png"
              alt="لوگوی آربو"
              className="h-20 w-20 object-contain opacity-95 transition-transform duration-500 hover:scale-105"
            />
            <span className="text-lg font-black text-white">آربو — Arbu</span>
          </a>

          <p className="max-w-md text-sm leading-7 text-white/55">
            وبلاگ شخصی امیررضا بابالو، بنیان‌گذار برند آربو —{" "}
            <span dir="ltr" className="font-bold text-[#a855f7]">ArbuiD</span> گرافیک و طراحی،{" "}
            <span dir="ltr" className="font-bold text-[#a855f7]">ArbuAX</span> تکنولوژی و نرم‌افزار.
          </p>

          <nav aria-label="فوتر">
            <ul className="flex flex-wrap items-center justify-center gap-2">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="rounded-full bg-white/[0.06] px-4 py-2 text-xs font-bold text-white/70 ring-1 ring-white/10 transition-all duration-300 hover:bg-[#7200ff] hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex w-full flex-col items-center gap-3 border-t border-white/[0.08] pt-6 text-xs text-white/40 sm:flex-row sm:justify-between">
            <p>© ۱۴۰۴ امیررضا بابالو — تمامی حقوق محفوظ است.</p>
            <p className="flex items-center gap-1.5">
              ساخته‌شده با
              <Heart className="size-3.5 fill-[#7200ff] text-[#7200ff]" />
              و کد فراوان
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
