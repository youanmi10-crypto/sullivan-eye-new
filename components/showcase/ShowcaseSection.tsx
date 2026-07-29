"use client";

import { motion } from "framer-motion";

/**
 * 1페이지(Hero) 바로 다음에 오는 프리미엄 제품 소개 페이지.
 * 블랙 배경, 미니멀 텍스트 + 중앙 제품 이미지.
 */

const EASE = [0.22, 1, 0.36, 1] as const; // Apple 느낌 natural ease-out

const HEADLINE = [
  "세상을 읽는 새로운 눈",
  "AI가 보는 것을 넘어",
  "당신의 시선이 됩니다",
];

const SUBTEXT = [
  "정보를 읽고",
  "주변을 탐색하는",
  "웨어러블 AI",
];

const TAGLINE = ["더 자유롭게,", "더 안전하게,", "더 독립적으로"];

export default function ShowcaseSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 1.0, ease: EASE }}
      className="snap-section relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-6 py-32 sm:py-48"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        {/* HEADLINE — 순차 등장 (가운데 정렬) */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
          className="text-4xl font-bold leading-tight text-white sm:text-5xl"
        >
          {HEADLINE.map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.5 + i * 0.18 }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </motion.h2>

        {/* 중앙 제품 이미지 — 흐려진 상태에서 선명해지며 등장 */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(20px)", scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.3, ease: EASE, delay: 0.4 }}
          className="mt-[536px] w-full max-w-3xl will-change-transform"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/glass-detail.png"
            alt="SULLIVAN EYE detail"
            className="h-auto w-full select-none object-contain"
            draggable={false}
          />
        </motion.div>

        {/* 이미지 아래: SUBTEXT */}
        <div className="mt-[536px] flex flex-col items-center">
          {SUBTEXT.map((line, i) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.3 + i * 0.1 }}
              className="text-4xl leading-relaxed text-neutral-400"
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* 이미지 아래: TAGLINE */}
        <div className="mt-[496px] mb-[380px] flex flex-col items-center">
          {TAGLINE.map((line, i) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: EASE, delay: 1.7 + i * 0.15 }}
              className="text-4xl font-semibold leading-[1.4] text-white"
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
