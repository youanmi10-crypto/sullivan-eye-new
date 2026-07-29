"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ExperienceText from "./ExperienceText";
import ExperienceImagePlaceholder from "./ExperienceImagePlaceholder";

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // 스크롤 종료 시: 위로 이동 + 페이드 아웃
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
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      className="relative min-h-[130vh] w-full overflow-hidden bg-black py-24 sm:py-32"
    >
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative grid min-h-screen w-full grid-cols-1 max-[768px]:grid-cols-1 lg:grid-cols-2 will-change-transform"
      >
        {/* 좌: 텍스트 */}
        <div className="flex items-center px-6 py-24 sm:px-12 sm:py-40 lg:pl-[8vw] lg:pr-12">
          <ExperienceText />
        </div>

        {/* 우: 이미지 Placeholder (전체 높이) */}
        <div className="relative min-h-[60vh] lg:min-h-screen max-[768px]:min-h-[45vh] max-[768px]:overflow-hidden">
          <ExperienceImagePlaceholder />
        </div>
      </motion.div>
    </motion.section>
  );
}
