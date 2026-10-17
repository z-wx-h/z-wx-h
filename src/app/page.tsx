import { About } from "@/components/About";
import { Awards } from "@/components/Awards";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { MotionProvider } from "@/components/MotionProvider";
import { Navbar } from "@/components/Navbar";
import { Particles } from "@/components/Particles";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <MotionProvider>
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Awards />
        <Contact />
      </main>
    </MotionProvider>
  );
}
