"use client";

import { motion, type Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: { delayChildren: 0.1, staggerChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const BODY_LINES = [
  "매일 쓰는 안경처럼 자연스럽게",
  "가볍고 균형 잡힌 디자인은 오랜 착용에도 편안하며,",
  "프리미엄 소재는 일상 속에서도",
  "세련된 존재감을 완성합니다.",
];

export default function DesignText() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      className="flex w-full flex-col items-center"
    >
      {/* Badge — 좌측 상단 배치 */}
      <div className="w-full">
        <motion.span
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            show: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.6, ease: EASE },
            },
          }}
          className="inline-block rounded-full border border-white/40 px-4 py-1.5 text-[11px] tracking-[0.2em] text-white"
        >
          DESIGN
        </motion.span>
      </div>

      {/* 메인 타이틀 */}
      <motion.h2
        variants={fadeUp}
        className="mt-10 text-center text-4xl font-bold leading-[1.25] text-white sm:text-5xl md:text-6xl max-[768px]:mt-8 max-[768px]:text-[30px] max-[768px]:leading-snug"
      >
        웨어러블 AI의
        <br />새로운 기준을 만나다
      </motion.h2>

      {/* 본문 — 한 줄씩 순차 등장 */}
      <div className="mt-8 flex flex-col items-center">
        {BODY_LINES.map((line) => (
          <motion.p
            key={line}
            variants={fadeUp}
            className="text-center text-base leading-loose text-neutral-300 sm:text-lg max-[768px]:text-[15px] max-[768px]:leading-relaxed"
          >
            {line}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}
