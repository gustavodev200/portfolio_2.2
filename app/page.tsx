import ParticlesComponent from "@/components/ParticlesBackgroud";
import { About, Contact, HeroSection, Projects, Technologie } from "./pages";

export default function Home() {
  return (
    <div className=" flex flex-col w-full h-auto">
      <ParticlesComponent id="tsparticles" />
      <HeroSection />
      <About />
      <Technologie />
      <Projects />
      <Contact />
    </div>
  );
}
