import { About, HeroSection } from "./pages";

export default function Home() {
  return (
    <div className=" flex flex-col w-full">
      <HeroSection />
      <About />
    </div>
  );
}
