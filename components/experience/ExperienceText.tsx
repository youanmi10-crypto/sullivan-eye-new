"use client";

import { motion, type Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { delayChildren: 0.1, staggerChildren: 0.25 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

const fadeUpSoft: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

const MOMENTS = [
  "메뉴를 읽을 때",
  "길을 걸을 때",
  "택배를 확인할 때",
  "여가시간을 즐길 때",
];

export default function ExperienceText() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      className="flex w-full flex-col items-start"
    >
      {/* Section Title */}
      <motion.h2
        variants={fadeUp}
        className="text-6xl font-bold text-white sm:text-7xl md:text-8xl max-[768px]:text-[34px]"
      >
        EXPERIENCE
      </motion.h2>

      {/* 본문 */}
      <div className="mt-12 flex flex-col">
        <motion.p
        variants={fadeUp}
        className="text-base leading-loose text-neutral-300 sm:text-lg max-[768px]:text-[15px] max-[768px]:leading-relaxed"
        >
        스스로하는 경험
        </motion.p>
        <motion.p
        variants={fadeUp}
        className="text-base leading-loose text-neutral-300 sm:text-lg max-[768px]:text-[15px] max-[768px]:leading-relaxed"
        >
        누군가의 도움이 필요했던 순간
        </motion.p>
      </div>

      {/* 경험 리스트 — 위에서 아래 순서대로 */}
      <div className="mt-10 flex flex-col gap-2">
        {MOMENTS.map((line) => (
          <motion.p
            key={line}
            variants={fadeUp}
            className="text-base leading-relaxed text-neutral-400 sm:text-lg max-[768px]:text-[15px]"
          >
            {line}
          </motion.p>
        ))}
      </div>

      {/* 강조 문구 — 약간 늦게 */}
      <motion.p
        variants={fadeUpSoft}
        className="mt-12 text-xl font-semibold leading-relaxed text-white sm:text-2xl max-[768px]:text-[17px]"
      >
        설리번 아이는 그 순간마다
        <br />
        당신과 함께합니다.
      </motion.p>

      {/* 마무리 문구 */}
      <motion.p
        variants={fadeUpSoft}
        className="mt-10 text-sm leading-loose text-neutral-400 sm:text-base max-[768px]:text-[15px] max-[768px]:leading-relaxed"
      >
        기술은 사람을 대신하는 것이 아니라,
        <br />
        사람의 가능성을 더 크게 만드는 것입니다.
      </motion.p>

      {/* 하단 슬로건 — 페이드 인만 (순서 포함) */}
      <motion.span
        variants={fadeUpSoft}
        className="mt-16 text-[28px] font-medium text-white sm:text-[32px] max-[768px]:text-[28px]"
      >
        Freedom Begins with Vision
      </motion.span>
    </motion.div>
  );
}
