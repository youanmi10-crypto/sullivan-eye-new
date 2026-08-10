"use client";

import HeroSection from "@/components/hero/HeroSection";
import ShowcaseSection from "@/components/showcase/ShowcaseSection";
import Page2 from "@/components/pages/Page2";
import DesignSection from "@/components/design/DesignSection";
import DesignProductSection from "@/components/design/DesignProductSection";
import TechSection from "@/components/tech/TechSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import TrustSection from "@/components/trust/TrustSection";
import { ThemeProvider } from "@/components/useIsLightTheme";
import TuatLogo from "@/components/TuatLogo";

export default function LightHome() {
  return (
    <ThemeProvider theme="light">
      <TuatLogo />
      <main className="light-theme relative bg-white">
        <div className="relative z-10">
          {/* 1~4번 섹션 */}
          <HeroSection />
          <ShowcaseSection />
          <Page2 />
          <DesignSection />
          <DesignProductSection />

          {/* 5번 이후 */}
          <TechSection />
          <ExperienceSection />
          <TrustSection />
        </div>
      </main>
    </ThemeProvider>
  );
}
