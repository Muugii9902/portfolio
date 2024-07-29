import Image from "next/image";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

import Hero from "@/components/hero/hero";
import About from "@/components/About/about";

import CardExperienceList from "@/components/cards/CardExperienceList";
import Work from "@/components/work/work";
import Contactme from "@/components/contactme/contactme";
import Footer from "@/components/footer/footer";
import Skills from "@/components/skills/skill";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="dark:bg-[#030712]">
      <Hero />
      <About />
      <Skills />
      <CardExperienceList />
      <Work />
      <Contactme />
      <Footer />
    </main>
  );
}
