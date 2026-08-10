"use client";

import { motion, type Variants } from "framer-motion";
import { useIsLightTheme } from "@/components/useIsLightTheme";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { delayChildren: 0.1, staggerChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const BODY_LINES = [
  "눈앞의 장면을 이해하고",
  "문자를 읽고",
  "AI 에이전트와 대화하며",
  "필요한 정보를 음성으로 확인합니다.",
];

export default function TechText() {
  const isLight = useIsLightTheme();
  const strongFrom = isLight ? "#666666" : "#a3a3a3";
  const strongTo = isLight ? "#000000" : "#ffffff";
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      className="flex flex-col items-start"
    >
      {/* Section Label — letter spacing이 미세하게 줄어들며 등장 */}
      <motion.span
        variants={{
          hidden: { opacity: 0, letterSpacing: "0.45em" },
          show: {
            opacity: 1,
            letterSpacing: "0.3em",
            transition: { duration: 1.0, ease: EASE },
          },
        }}
        className="text-xs font-semibold text-white sm:text-sm"
      >
        CORE TECHNOLOGY
      </motion.span>

      {/* 메인 타이틀 */}
      <motion.h2
        variants={fadeUp}
        className="mt-8 text-4xl font-bold leading-[1.2] text-white sm:text-5xl md:text-6xl max-[768px]:mt-6 max-[768px]:text-[30px] max-[768px]:leading-snug"
      >
        AI가
        <br />
        세상을 설명합니다
      </motion.h2>

      {/* 본문 — 한 줄씩 순차 등장 */}
      <div className="mt-10 flex flex-col">
        {BODY_LINES.map((line) => (
          <motion.p
            key={line}
            variants={fadeUp}
            className="text-base leading-loose text-neutral-300 sm:text-lg max-[768px]:text-[15px] max-[768px]:leading-relaxed"
          >
            {line}
          </motion.p>
        ))}
      </div>

      {/* 강조 문구 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
        className="mt-12 text-base leading-loose text-neutral-400 sm:text-lg max-[768px]:mt-8 max-[768px]:text-[15px] max-[768px]:leading-relaxed"
      >
        <p>복잡한 기술은 보이지 않습니다.</p>
        <p className="mt-2">
          당신에게 필요한 것은
          <br />
          <motion.strong
            initial={{ color: strongFrom }}
            whileInView={{ color: strongTo }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="font-bold"
          >
            단 한 번의 착용입니다.
          </motion.strong>
        </p>
      </motion.div>
    </motion.div>
  );
}
