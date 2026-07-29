"use client";

import { motion } from "framer-motion";

const TEXTS = [
  "세상을 읽는 새로운 눈",
  "AI가 보는 것을 넘어 당신의 시선이 됩니다.",
  "정보를 읽고 주변을 탐색하는 웨어러블 AI",
  "더 자유롭게, 더 안전하게, 더 독립적으로",
];

export default function Page2() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center bg-[#050505] px-6 py-16 sm:px-8">
      <div className="w-full max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
        >
          SULLIVAN&nbsp;EYE
        </motion.h2>

        <div className="mt-12 space-y-4">
          {TEXTS.map((t) => (
            <motion.p
              key={t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg leading-loose text-[#E5E5E5] sm:text-xl md:text-2xl"
            >
              {t}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          style={{ letterSpacing: "0.55em" }}
          className="mt-14 text-xs uppercase tracking-[0.55em] text-neutral-400"
        >
          SEE BEYOND YOUR WORLD
        </motion.p>
      </div>
    </section>
  );
}
