import HeroSection from "@/components/hero/HeroSection";
import DesignSection from "@/components/design/DesignSection";
import TechSection from "@/components/tech/TechSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import TrustSection from "@/components/trust/TrustSection";
import {
  AmbientOverlay,
  ContinuousBeam,
} from "@/components/lighting/GlobalLighting";

export default function Home() {
  return (
    <main className="relative bg-black">
      {/* Global Lighting System */}
      <AmbientOverlay />
      <ContinuousBeam />

      <div className="relative z-10">
        <HeroSection />
        <DesignSection />
        <TechSection />
        <ExperienceSection />
        <TrustSection />
      </div>
    </main>
  );
}
