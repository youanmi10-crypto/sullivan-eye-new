"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroText from "./HeroText";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // 스크롤 시 페이드아웃
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0.2, 1], [1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative h-[192vh] w-full"
    >
      <motion.div
        style={{ opacity }}
        className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden px-6 sm:px-8"
      >
        <HeroText />

        {/* Product Image */}
        <div className="w-[min(55vw,37.5rem)]">
          <img
            src="/images/glass3.png"
            alt="SULLIVAN EYE"
            className="h-auto w-full object-contain scale-[1.8]"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
