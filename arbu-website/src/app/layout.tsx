import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "امیررضا بابالو | برند آربو — Arbu",
  description:
    "وبلاگ شخصی امیررضا بابالو، بنیان‌گذار برند آربو؛ ArbuiD بخش گرافیک و طراحی، ArbuAX بخش تکنولوژی و نرم‌افزار. از برنامه‌نویسی در سیزده‌سالگی تا محصولات آربو.",
  keywords: [
    "امیررضا بابالو",
    "آربو",
    "Arbu",
    "ArbuiD",
    "ArbuAX",
    "طراحی گرافیک",
    "برنامه‌نویسی",
    "فرانت‌اند",
  ],
  authors: [{ name: "امیررضا بابالو" }],
  icons: {
    icon: "/images/logo-t.png",
  },
  openGraph: {
    title: "امیررضا بابالو | برند آربو",
    description:
      "آربو فقط یک برند نیست؛ خلاصه‌ای از سال‌ها تلاش، اشتباه، یادگیری و ساختن است.",
    siteName: "Arbu",
    type: "website",
    locale: "fa_IR",
  },
};

export const viewport: Viewport = {
  themeColor: "#F2F1EE",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
