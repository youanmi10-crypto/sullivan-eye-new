"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroText from "./HeroText";
import ProductPlaceholder from "./ProductPlaceholder";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // 섹션 전체(200vh)를 지나는 동안의 진행도
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // 스크롤하는 동안 천천히 위로 이동 + 페이드 아웃 (sticky 연출)
  const textY = useTransform(scrollYProgress, [0.35, 1], [0, -140]);
  const textOpacity = useTransform(scrollYProgress, [0.35, 0.85], [1, 0]);
  const productY = useTransform(scrollYProgress, [0.35, 1], [0, -70]);
  const productScale = useTransform(scrollYProgress, [0.35, 1], [1, 0.97]);
  const productOpacity = useTransform(scrollYProgress, [0.45, 0.95], [1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative h-[200vh] w-full"
    >
      {/* 스크롤 동안 화면에 고정되는 콘텐츠 */}
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden px-6 py-8 sm:py-10">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="flex w-full shrink-0 flex-col items-center will-change-transform"
        >
          <HeroText />
        </motion.div>

        <motion.div
          style={{
            y: productY,
            opacity: productOpacity,
            scale: productScale,
          }}
          className="w-full max-w-[min(72rem,88vh)] pt-20 sm:pt-24 md:pt-28 will-change-transform"
        >
          <ProductPlaceholder />
        </motion.div>
      </div>
    </motion.section>
  );
}
