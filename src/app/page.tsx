import HeroSection from "./components/HeroSection";
import LogosSection from "./components/LogosSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <LogosSection />
    </main>
  );
}