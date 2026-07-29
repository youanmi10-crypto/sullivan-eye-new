"use client";

import { motion, type Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { delayChildren: 0.1, staggerChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const fadeUpSoft: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
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
      viewport={{ once: true, amount: 0.3 }}
      className="flex w-full flex-col items-start"
    >
      {/* Section Title */}
      <motion.h2
        variants={fadeUp}
        className="text-6xl font-bold text-white sm:text-7xl md:text-8xl"
      >
        EXPERIENCE
      </motion.h2>

      {/* 본문 */}
      <div className="mt-12 flex flex-col">
        <motion.p
          variants={fadeUp}
          className="text-base leading-loose text-neutral-300 sm:text-lg"
        >
          스스로하는 경험
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="text-base leading-loose text-neutral-300 sm:text-lg"
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
            className="text-base leading-relaxed text-neutral-400 sm:text-lg"
          >
            {line}
          </motion.p>
        ))}
      </div>

      {/* 강조 문구 — 약간 늦게 */}
      <motion.p
        variants={fadeUpSoft}
        className="mt-12 text-xl font-semibold leading-relaxed text-white sm:text-2xl"
      >
        설리번아이는 그 순간마다
        <br />
        당신과 함께합니다.
      </motion.p>

      {/* 마무리 문구 */}
      <motion.p
        variants={fadeUpSoft}
        className="mt-10 text-sm leading-loose text-neutral-400 sm:text-base"
      >
        기술은 사람을 대신하는 것이 아니라,
        <br />
        사람의 가능성을 더 크게 만드는 것입니다.
      </motion.p>

      {/* 하단 슬로건 — 가장 마지막, letter spacing breathing */}
      <motion.span
        initial={{ opacity: 0, y: 20, letterSpacing: "0.15em" }}
        whileInView={{
          opacity: 1,
          y: 0,
          letterSpacing: ["0.15em", "0.3em", "0.15em"],
        }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{
          opacity: { duration: 0.8, ease: EASE, delay: 1.5 },
          y: { duration: 0.8, ease: EASE, delay: 1.5 },
          letterSpacing: { duration: 2.4, ease: "easeInOut", delay: 1.9 },
        }}
        className="mt-16 text-sm font-medium text-white sm:text-base"
      >
        Freedom Begins with Vision
      </motion.span>
    </motion.div>
  );
}
