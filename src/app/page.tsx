import HeroSection from "./components/HeroSection";
import LogosSection from "./components/LogosSection";
import AboutUsSection from "./components/AboutUsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <LogosSection />
      <AboutUsSection />
    </main>
  );
}