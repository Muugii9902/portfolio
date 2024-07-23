import Image from "next/image";
import { Inter } from "next/font/google";
import Herosection from "@/components/hero/herosection";
import Hero from "@/components/hero/hero";
import About from "@/components/About/about";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}
