"use client";

import { Braces, Palette, MonitorSmartphone, HeartHandshake } from "lucide-react";
import { Reveal, SectionShell } from "./reveal";
import { TiltCard } from "./tilt-card";

const BRANDS = [
  {
    icon: Palette,
    name: "ArbuiD",
    fa: "گرافیک و طراحی",
    desc: "از شانزده‌سالگی، وقتی با نرم‌افزارهای گرافیکی آشنا شدم و خیلی زود عاشقشان شدم، آموزش طراحی گرافیک را شروع کردم. همین علاقه پایه‌گذار بخش طراحی آربو شد؛ جایی که ایده‌ها به هویت بصری تبدیل می‌شوند.",
    tags: ["طراحی گرافیک", "هویت بصری", "خلاقیت"],
    dark: false,
  },
  {
    icon: Braces,
    name: "ArbuAX",
    fa: "تکنولوژی و نرم‌افزار",
    desc: "مسیر برنامه‌نویسی من از سیزده‌سالگی آغاز شد؛ بیشتر با آزمون و خطا، اما همین پرفراز و نشیب باعث شد بعدها فرانت‌اند دولوپر شوم. ArbuAX جایی است که تجربه‌ی فنی من به محصول واقعی تبدیل می‌شود.",
    tags: ["فرانت‌اند", "نرم‌افزار", "محصولات دیجیتال"],
    dark: true,
  },
];

export function BrandSection() {
  return (
    <SectionShell
      id="brand"
      index="۰۱"
      label="آربو چیست؟"
      title="یک برند، دو دنیای مجزا"
      description="برند آربو حاصل سال‌ها تجربه در کد و عشق به طراحی است و به دو بخش اصلی تقسیم می‌شود:"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {BRANDS.map((b, i) => (
          <Reveal key={b.name} delay={i * 0.12}>
            <TiltCard intensity={6} className="group h-full rounded-[2rem]">
              <article
                className={`relative flex h-full flex-col overflow-hidden rounded-[2rem] p-7 md:p-9 ${
                  b.dark
                    ? "bg-[#111111] text-white shadow-[0_30px_60px_-20px_rgba(17,17,17,0.45)]"
                    : "glass text-[#111111]"
                }`}
              >
                {/* glow */}
                <div
                  className={`pointer-events-none absolute -end-16 -top-16 size-56 rounded-full blur-3xl transition-opacity duration-500 ${
                    b.dark ? "bg-[#7200ff]/40 opacity-60 group-hover:opacity-100" : "bg-[#a855f7]/20 opacity-50 group-hover:opacity-90"
                  }`}
                />

                <div className="relative flex items-start justify-between">
                  <span
                    className={`flex size-14 items-center justify-center rounded-2xl ${
                      b.dark
                        ? "bg-gradient-to-br from-[#7200ff] to-[#a855f7] text-white shadow-[0_12px_30px_-8px_rgba(114,0,255,0.7)]"
                        : "bg-gradient-to-br from-[#7200ff] to-[#a855f7] text-white shadow-[0_12px_30px_-8px_rgba(114,0,255,0.45)]"
                    }`}
                  >
                    <b.icon className="size-6" />
                  </span>
                  <span
                    dir="ltr"
                    className={`text-2xl font-black tracking-tight ${
                      b.dark ? "text-white/10" : "text-[#111111]/10"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="relative mt-6 text-2xl font-black md:text-3xl" dir="ltr">
                  {b.name}
                </h3>
                <p className={`relative mt-1 text-sm font-bold ${b.dark ? "text-[#d8b4fe]" : "text-[#7200ff]"}`}>
                  {b.fa}
                </p>
                <p className={`relative mt-4 flex-1 text-sm leading-7 md:text-base md:leading-8 ${b.dark ? "text-white/65" : "text-[#454545]"}`}>
                  {b.desc}
                </p>

                <ul className="relative mt-6 flex flex-wrap gap-2">
                  {b.tags.map((t) => (
                    <li
                      key={t}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-bold ${
                        b.dark ? "bg-white/[0.08] text-white/80 ring-1 ring-white/10" : "bg-[#111111]/[0.05] text-[#454545] ring-1 ring-[#111111]/[0.06]"
                      }`}
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      {/* values strip */}
      <Reveal delay={0.2}>
        <div className="glass mt-6 grid gap-4 rounded-[2rem] p-6 sm:grid-cols-2 md:p-7">
          {[
            { icon: MonitorSmartphone, t: "محصول واقعی، کاربر واقعی", d: "هر پروژه در آربو برای حل یک نیاز واقعی ساخته می‌شود." },
            { icon: HeartHandshake, t: "یادگیری بی‌پایان", d: "من هنوز در حال یادگیری‌ام؛ هر پروژه یک قدم تازه در این مسیر است." },
          ].map((v) => (
            <div key={v.t} className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#7200ff]/[0.08] text-[#7200ff] ring-1 ring-[#7200ff]/15">
                <v.icon className="size-5" />
              </span>
              <div>
                <h4 className="text-sm font-extrabold text-[#111111] md:text-base">{v.t}</h4>
                <p className="mt-1 text-xs leading-6 text-[#454545] md:text-sm md:leading-7">{v.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}
