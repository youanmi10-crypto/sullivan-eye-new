"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import DesignProductPlaceholder from "./DesignProductPlaceholder";
import DesignFeatures from "./DesignFeatures";
import ProductSpotlight from "./ProductSpotlight";

const EASE = [0.22, 1, 0.36, 1] as const;

// 섹션 진입 오케스트레이션:
// 1) 안경이 rise 하며 등장 (DesignProductPlaceholder 내부)
// 2) 안경이 멈춘 뒤 0.2s 뒤 아이콘 3개가 순차 등장 (DesignFeatures가 delayChildren 상속)
const sectionVariants: Variants = {
  hidden: {},
  show: {
    transition: { delayChildren: 0.2 },
  },
};

export default function DesignProductSection() {
  const sectionRef = useRef<HTMLElement>(null);

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
      className="snap-section relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0A0A0A] px-6 py-40 sm:py-56 max-[768px]:h-auto max-[768px]:min-h-svh"
    >
      {/* 안경을 향해 비춰지는 스포트라이트 — 콘텐츠 뒤에 깔림 */}
      <div className="absolute inset-0 z-0">
        <ProductSpotlight />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center will-change-transform"
      >
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full max-w-3xl will-change-transform"
        >
          <DesignProductPlaceholder />
        </motion.div>

        <div className="mt-16 w-full sm:mt-24">
          <DesignFeatures />
        </div>
      </motion.div>
    </motion.section>
  );
}
