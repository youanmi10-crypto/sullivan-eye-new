"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TechText from "./TechText";
import TechProductPlaceholder from "./TechProductPlaceholder";
import TechFeatures from "./TechFeatures";
import TechFooterLine from "./TechFooterLine";

export default function TechSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // 섹션 통과 진행도 — 좌/우 컬럼에 미세한 속도 차이 (depth)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const textParallax = useTransform(scrollYProgress, [0, 1], [30, -50]);
  const productParallax = useTransform(scrollYProgress, [0, 1], [70, -30]);

  // 스크롤 종료 시: 위로 이동 + 페이드 아웃
  const { scrollYProgress: exitProgress } = useScroll({
    target: sectionRef,
    offset: ["end end", "end start"],
  });
  const contentY = useTransform(exitProgress, [0, 1], [0, -100]);
  const contentOpacity = useTransform(exitProgress, [0, 0.7], [1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      className="relative min-h-[150vh] w-full overflow-hidden bg-[#0A0A0A] px-6 py-40 sm:py-56"
    >
      {/* 오른쪽 상단에서 내려오는 은은한 Spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[20%] right-[-25%] h-[90vh] w-[90vw] rounded-full opacity-[0.07] blur-[100px]"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.25) 40%, transparent 70%)",
        }}
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col will-change-transform"
      >
        {/* 좌: 텍스트 / 우: 제품 + AI 인터페이스 */}
        <div className="grid grid-cols-1 items-center gap-20 max-[768px]:grid-cols-1 lg:grid-cols-2 lg:gap-12">
          <motion.div style={{ y: textParallax }} className="will-change-transform">
            <TechText />
          </motion.div>
          <motion.div style={{ y: productParallax }} className="will-change-transform">
            <TechProductPlaceholder />
          </motion.div>
        </div>

        <div className="mt-40 sm:mt-52">
          <TechFeatures />
        </div>

        <div className="mt-32 sm:mt-40">
          <TechFooterLine />
        </div>
      </motion.div>
    </motion.section>
  );
}
