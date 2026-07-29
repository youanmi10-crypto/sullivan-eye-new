import HeroSection from "@/components/hero/HeroSection";
import ShowcaseSection from "@/components/showcase/ShowcaseSection";
import Page2 from "@/components/pages/Page2";
import DesignSection from "@/components/design/DesignSection";
import DesignProductSection from "@/components/design/DesignProductSection";
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
        {/* 1~4번 섹션: .snap-section (문서 레벨 proximity 스냅 대상) */}
        <HeroSection />
        <ShowcaseSection />
        <Page2 />
        <DesignSection />
        <DesignProductSection />

        {/* 5번 이후: 스냅 없음 → 일반 자유 스크롤 */}
        <TechSection />
        <ExperienceSection />
        <TrustSection />
      </div>
    </main>
  );
}
