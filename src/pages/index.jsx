import Image from "next/image";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

import Hero from "@/components/hero/hero";
import About from "@/components/About/about";
import Container from "@/components/skills/container";

import CardExperience from "@/components/cards/cardExperience";
import CardData from "@/components/cards/cardData";
import CardExperienceList from "@/components/cards/CardExperienceList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Container />
      <CardExperienceList />
    </main>
  );
}
