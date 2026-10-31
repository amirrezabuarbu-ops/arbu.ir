"use client";

import { Gamepad2, ShoppingCart, ArrowUpLeft, Clock3, Rocket } from "lucide-react";
import { Reveal, SectionShell } from "./reveal";
import { TiltCard } from "./tilt-card";

const PROJECTS = [
  {
    icon: Gamepad2,
    name: "آربو گیم‌نت پرو",
    en: "Arbu GameNet Pro",
    desc: "یک نرم‌افزار حسابداری مخصوص گیم‌نت‌ها؛ ساخته‌شده با تجربه‌ی واقعی از دنیای گیم، برای مدیریت ساده و سریع کارها.",
    badge: "به‌زودی عرضه می‌شود",
    badgeIcon: Rocket,
    tags: ["حسابداری", "مخصوص گیم‌نت‌ها", "ArbuAX"],
    featured: true,
  },
  {
    icon: ShoppingCart,
    name: "آربو سوپرمارکت پرو",
    en: "Arbu Supermarket Pro",
    desc: "نرم‌افزاری برای مدیریت سوپرمارکت‌ها؛ قدم بعدی آربو برای ساده‌کردن کار مغازه‌داران، پس از عرضه‌ی گیم‌نت پرو.",
    badge: "در صف توسعه",
    badgeIcon: Clock3,
    tags: ["مدیریت فروشگاه", "سوپرمارکت‌ها", "ArbuAX"],
    featured: false,
  },
];

export function Projects() {
  return (
    <div className="px-3 py-6 md:px-6 md:py-10">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#111111]">
        {/* texture + glows */}
        <div className="dot-grid-light pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" />
        <div className="blob -start-24 top-0 size-[24rem] bg-[#7200ff]/30" />
        <div className="blob -end-16 bottom-0 size-[20rem] bg-[#a855f7]/20" />

        <SectionShell
          id="projects"
          index="۰۳"
          label="پروژه‌های پیش‌رو"
          title="آینده‌ی آربو در حال ساخته‌شدن است"
          description="در بیست‌سالگی، تجربه و علاقه به یک پروژه‌ی واقعی تبدیل شد. این تازه اول راه است:"
          dark
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.en} delay={i * 0.12}>
                <TiltCard intensity={7} className="group h-full rounded-[2rem]">
                  <article
                    className={`glass-dark relative flex h-full flex-col overflow-hidden rounded-[2rem] p-7 md:p-9 ${
                      p.featured ? "ring-1 ring-[#7200ff]/40" : ""
                    }`}
                  >
                    {/* featured glow */}
                    <div className="pointer-events-none absolute -end-20 -top-20 size-64 rounded-full bg-[#7200ff]/35 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                    {p.featured ? (
                      <div className="pointer-events-none absolute -start-10 bottom-0 size-40 rounded-full bg-[#a855f7]/20 blur-3xl" />
                    ) : null}

                    <div className="relative flex items-start justify-between gap-4">
                      <span className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7200ff] to-[#a855f7] text-white shadow-[0_14px_36px_-8px_rgba(114,0,255,0.8)]">
                        <p.icon className="size-6" />
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold ${
                          p.featured
                            ? "bg-[#7200ff] text-white shadow-[0_8px_24px_-6px_rgba(114,0,255,0.9)]"
                            : "bg-white/[0.08] text-[#d8b4fe] ring-1 ring-white/15"
                        }`}
                      >
                        <p.badgeIcon className="size-3.5" />
                        {p.badge}
                      </span>
                    </div>

                    <h3 className="relative mt-6 text-2xl font-black text-white md:text-[1.7rem]">{p.name}</h3>
                    <p className="relative mt-1 text-xs font-bold tracking-[0.18em] text-[#a855f7]" dir="ltr">
                      {p.en}
                    </p>
                    <p className="relative mt-4 flex-1 text-sm leading-8 text-white/60 md:text-[15px]">
                      {p.desc}
                    </p>

                    <ul className="relative mt-6 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-full bg-white/[0.07] px-3.5 py-1.5 text-xs font-bold text-white/75 ring-1 ring-white/10"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>

                    <div className="relative mt-7 flex items-center justify-between border-t border-white/[0.08] pt-5">
                      <span className="text-xs font-bold text-white/40">ساخته‌شده توسط امیررضا بابالو</span>
                      <span className="flex size-9 items-center justify-center rounded-full bg-white/[0.07] text-white/70 ring-1 ring-white/10 transition-all duration-300 group-hover:bg-[#7200ff] group-hover:text-white">
                        <ArrowUpLeft className="size-4" />
                      </span>
                    </div>
                  </article>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          {/* roadmap hint */}
          <Reveal delay={0.25}>
            <div className="glass-dark mt-6 flex flex-col items-start gap-3 rounded-[1.75rem] p-6 sm:flex-row sm:items-center sm:justify-between md:p-7">
              <p className="text-sm font-bold leading-7 text-white/70 md:text-base">
                عرضه‌ی گیم‌نت پرو اولین قدم است؛ سوپرمارکت پرو بلافاصله بعد از آن می‌آید.
              </p>
              <span className="shrink-0 rounded-full bg-gradient-to-l from-[#7200ff] to-[#a855f7] px-4 py-2 text-xs font-extrabold text-white">
                مسیر ادامه دارد…
              </span>
            </div>
          </Reveal>
        </SectionShell>
      </div>
    </div>
  );
}
