"use client";

const WORDS = [
  "طراحی گرافیک",
  "برنامه‌نویسی",
  "فرانت‌اند",
  "هویت بصری",
  "نرم‌افزار",
  "خلاقیت",
  "آزمون و خطا",
  "ساختن",
];

/** Infinite scrolling strip between hero and content (decorative) */
export function Marquee() {
  const row = (
    <>
      {WORDS.map((w) => (
        <span key={w} className="mx-6 flex items-center gap-6 md:mx-8 md:gap-8">
          <span className="whitespace-nowrap text-lg font-black text-[#111111] md:text-2xl">{w}</span>
          <span className="size-2 rounded-full bg-gradient-to-br from-[#7200ff] to-[#a855f7]" />
        </span>
      ))}
    </>
  );

  return (
    <div className="relative border-y border-[#111111]/[0.06] bg-white/50 py-5 backdrop-blur-sm md:py-6" aria-hidden>
      <div dir="ltr" className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex w-max shrink-0 items-center">
          {row}
          {row}
        </div>
      </div>
    </div>
  );
}
