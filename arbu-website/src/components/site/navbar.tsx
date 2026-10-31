"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Sparkles } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#home", label: "خانه" },
  { href: "#brand", label: "برند آربو" },
  { href: "#journey", label: "مسیر من" },
  { href: "#projects", label: "پروژه‌ها" },
  { href: "#words", label: "حرف آخر" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4"
    >
      <nav
        aria-label="ناوبری اصلی"
        className={cn(
          "mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full py-2.5 pe-2.5 ps-3 transition-all duration-500",
          scrolled ? "glass shadow-none" : "glass-soft"
        )}
      >
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2.5" aria-label="آربو — صفحه اصلی">
          <span className="flex size-10 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-[#111111]/10">
            <img src="/images/logo-t.png" alt="لوگوی آربو" className="size-7 object-contain" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-base font-extrabold text-[#111111]">آربو</span>
            <span className="mt-0.5 text-[10px] font-medium tracking-widest text-[#454545]/70" dir="ltr">
              ARBU™
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-[#454545] transition-colors duration-300 hover:bg-[#111111]/[0.06] hover:text-[#111111]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + mobile trigger */}
        <div className="flex items-center gap-2">
          <a
            href="#projects"
            className="group hidden items-center gap-2 rounded-full bg-[#111111] px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_30px_-10px_rgba(114,0,255,0.55)] transition-all duration-300 hover:bg-[#7200ff] md:inline-flex"
          >
            <Sparkles className="size-4 transition-transform duration-500 group-hover:rotate-180" />
            پروژه‌های من
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="باز کردن منو"
              className="flex size-10 items-center justify-center rounded-full bg-[#111111]/[0.06] text-[#111111] transition-colors hover:bg-[#111111]/[0.1] md:hidden"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="top"
              aria-describedby={undefined}
              className="rounded-b-[2rem] border-none bg-[#f2f1ee]/90 backdrop-blur-2xl"
            >
              <SheetTitle className="flex items-center gap-2 text-lg font-extrabold text-[#111111]">
                <span className="flex size-9 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-[#111111]/10">
                  <img src="/images/logo-t.png" alt="" className="size-6 object-contain" />
                </span>
                منوی آربو
              </SheetTitle>
              <nav aria-label="ناوبری موبایل" className="mt-6">
                <ul className="grid gap-2">
                  {LINKS.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between rounded-2xl bg-white/70 px-5 py-4 text-base font-bold text-[#111111] ring-1 ring-white/70 transition hover:bg-[#7200ff] hover:text-white"
                      >
                        {l.label}
                        <span className="text-xs opacity-50">←</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
