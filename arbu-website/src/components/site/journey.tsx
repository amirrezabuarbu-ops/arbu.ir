"use client";

import { Code2, Gamepad2, Heart, Rocket, Quote } from "lucide-react";
import { Reveal, SectionShell } from "./reveal";

const STEPS = [
  {
    age: "۱۳ سالگی",
    icon: Code2,
    title: "اولین قدم در دنیای برنامه‌نویسی",
    desc: "برای اولین بار وارد دنیای کد شدم. باید صادق باشم: در آن روزها آموزش درستی ندیدم و بیشتر با آزمون و خطا جلو رفتم — اما همین مسیر پرفراز و نشیب، بزرگ‌ترین معلم من بود.",
    tag: "شروع سفر",
  },
  {
    age: "بین راه",
    icon: Gamepad2,
    title: "تبدیل شدن به فرانت‌اند دولوپر",
    desc: "همین تجربه‌های جمع‌شده از اشتباه و تمرین، بعدها من را به یک فرانت‌اند دولوپر تبدیل کرد؛ جایی که یاد گرفتم رابط کاربری یعنی احترام به کاربر.",
    tag: "رشد",
  },
  {
    age: "۱۶ سالگی",
    icon: Heart,
    title: "عاشق‌شدن در دنیای گرافیک",
    desc: "با نرم‌افزارهای گرافیکی آشنا شدم و خیلی زود عاشقشان شدم. از همان‌جا آموزش طراحی گرافیک را شروع کردم — علاقه‌ای که پایه‌گذار بخش ArbuiD شد.",
    tag: "عشق به طراحی",
  },
  {
    age: "۲۰ سالگی",
    icon: Rocket,
    title: "تولد برند آربو",
    desc: "در بیست‌سالگی، حاصل تجربه‌ام در برنامه‌نویسی و علاقه‌ام به طراحی، به یک پروژه‌ی واقعی تبدیل شد: برند آربو با دو زیربرند ArbuiD و ArbuAX.",
    tag: "پروژه واقعی",
  },
];

export function Journey() {
  return (
    <SectionShell
      id="journey"
      index="۰۲"
      label="مسیر من"
      title="از آزمون و خطا تا ساختن"
      description="داستان من از سیزده‌سالگی شروع شد و هنوز ادامه دارد:"
    >
      <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        {/* silhouette visual */}
        <Reveal className="lg:sticky lg:top-28">
          <div className="group relative mx-auto max-w-sm">
            <div className="blob start-1/2 top-1/3 size-64 -translate-x-1/2 bg-[#7200ff]/25" />
            <div className="glass relative overflow-hidden rounded-[2.5rem] p-4">
              <div className="dot-grid absolute inset-4 rounded-[2rem] opacity-40" />
              <img
                src="/images/silhouette-t.png"
                alt="سایه‌نمای امیررضا بابالو، بنیان‌گذار آربو"
                className="relative w-full rounded-[2rem] object-contain"
                loading="lazy"
              />
              <div className="absolute inset-x-8 bottom-8 flex items-center justify-between rounded-2xl bg-[#111111]/85 px-5 py-3.5 backdrop-blur-xl">
                <span className="text-xs font-bold text-white">همیشه در حال یادگیری</span>
                <span className="size-2 animate-pulse rounded-full bg-[#a855f7]" />
              </div>
            </div>
            <div className="glass animate-float absolute -end-3 top-10 rounded-2xl px-4 py-2.5 text-xs font-extrabold text-[#111111]">
              +۷ سال کدنویسی
            </div>
            <div className="glass animate-float-delayed absolute -start-3 bottom-24 rounded-2xl px-4 py-2.5 text-xs font-extrabold text-[#111111]">
              ۲ زیربرند
            </div>
          </div>
        </Reveal>

        {/* timeline */}
        <ol className="relative space-y-5 ps-10 md:space-y-6 md:ps-14">
          {/* vertical line */}
          <span aria-hidden className="absolute bottom-6 end-auto start-4 top-4 w-px bg-gradient-to-b from-[#7200ff]/60 via-[#a855f7]/40 to-transparent md:start-5" />
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative">
              <Reveal delay={i * 0.1}>
                <span
                  aria-hidden
                  className="absolute -start-[2.65rem] top-7 z-10 flex size-8 items-center justify-center rounded-full bg-white text-[#7200ff] ring-1 ring-[#7200ff]/25 shadow-[0_6px_16px_-4px_rgba(114,0,255,0.4)] md:-start-[3.4rem] md:size-10"
                >
                  <s.icon className="size-4 md:size-[1.1rem]" />
                </span>
                <div className="glass group rounded-[1.75rem] p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-18px_rgba(114,0,255,0.35)] md:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full bg-gradient-to-l from-[#7200ff] to-[#a855f7] px-3.5 py-1 text-xs font-extrabold text-white">
                      {s.age}
                    </span>
                    <span className="text-[10px] font-bold tracking-widest text-[#454545]/60">{s.tag}</span>
                  </div>
                  <h3 className="mt-3.5 text-lg font-extrabold text-[#111111] md:text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#454545] md:text-[15px] md:leading-8">{s.desc}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      {/* mini quote */}
      <Reveal delay={0.15}>
        <div className="glass mt-12 flex items-start gap-4 rounded-[1.75rem] p-6 md:items-center md:p-7">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7200ff] to-[#a855f7] text-white">
            <Quote className="size-5" />
          </span>
          <p className="text-sm font-bold leading-8 text-[#111111] md:text-lg md:leading-9">
            «هر پروژه، یک قدم تازه در این مسیر است.»
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
