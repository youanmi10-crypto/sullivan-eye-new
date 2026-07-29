"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DesignText from "./DesignText";
import Spotlight from "./Spotlight";

export default function DesignSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // 섹션 종료 시 페이드 아웃
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end end", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      className="snap-section relative min-h-screen w-full overflow-hidden bg-[#111111] px-6 py-40 sm:py-56"
    >
      {/* 상단 중앙에서 떨어지는 원뿔형 Spotlight */}
      <Spotlight />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center will-change-transform"
      >
        <DesignText />

        {/* 하단 문구 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
          className="mt-[calc(8rem-113px)] text-xs tracking-[0.35em] text-neutral-500 sm:mt-[calc(10rem-113px)] sm:text-sm"
        >
          Designed for Everyday.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
