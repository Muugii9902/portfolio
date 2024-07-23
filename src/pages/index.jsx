import Image from "next/image";
import { Inter } from "next/font/google";

import Hero from "@/components/hero/hero";
import About from "@/components/About/about";
import Container from "@/components/skills/container";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Container />
    </main>
  );
}
