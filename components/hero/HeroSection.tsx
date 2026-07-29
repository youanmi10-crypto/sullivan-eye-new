"use client";

import HeroText from "./HeroText";

export default function HeroSection() {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#050505] px-6 sm:px-8">
      <div className="flex w-full max-w-4xl flex-col items-center text-center">
        <HeroText />

        {/* Product Image */}
        <div className="mt-12 w-[min(38vw,26rem)] sm:mt-16 md:mt-20">
          <img
            src="/images/glass3.png"
            alt="SULLIVAN EYE"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
