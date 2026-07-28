"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DesignText from "./DesignText";
import DesignProductPlaceholder from "./DesignProductPlaceholder";
import DesignFeatures from "./DesignFeatures";
import Spotlight from "./Spotlight";

export default function DesignSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // 섹션 전체 통과 진행도 — 내부 블록별 parallax 속도 차이
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // 텍스트는 느리게, 제품은 조금 더 느리게 떠오르는 depth 연출
  const textParallax = useTransform(scrollYProgress, [0, 1], [40, -60]);
  const productParallax = useTransform(scrollYProgress, [0, 1], [80, -40]);

  // 섹션 종료 시 페이드 아웃
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
      className="relative min-h-[150vh] w-full overflow-hidden px-6 py-40 sm:py-56"
    >
      {/* 상단 중앙에서 떨어지는 원뿔형 Spotlight */}
      <Spotlight />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center will-change-transform"
      >
        <motion.div
          style={{ y: textParallax }}
          className="flex w-full flex-col items-center will-change-transform"
        >
          <DesignText />
        </motion.div>

        <motion.div
          style={{ y: productParallax }}
          className="mt-28 w-full max-w-3xl will-change-transform sm:mt-36"
        >
          <DesignProductPlaceholder />
        </motion.div>

        <div className="mt-32 w-full sm:mt-44">
          <DesignFeatures />
        </div>

        {/* 하단 문구 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
          className="mt-32 text-xs tracking-[0.35em] text-neutral-500 sm:mt-40 sm:text-sm"
        >
          Designed for Everyday.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
