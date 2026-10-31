import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { BrandSection } from "@/components/site/brand";
import { Journey } from "@/components/site/journey";
import { Projects } from "@/components/site/projects";
import { Words } from "@/components/site/words";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <BrandSection />
        <Journey />
        <Projects />
        <Words />
      </main>
      <Footer />
    </>
  );
}
