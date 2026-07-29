"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center bg-[#040404] px-6 sm:px-8">
      {/* Title — 자간좁힘 */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ letterSpacing: "0.15em" }}
        className="text-center text-5xl font-semibold tracking-tight text-white sm:text-7xl md:text-8xl"
      >
        SULLIVAN&nbsp;EYE
      </motion.h1>

      {/* SEE BEYOND */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        style={{ letterSpacing: "0.5em" }}
        className="mt-4 text-center text-xs uppercase tracking-[0.5em] text-neutral-400 sm:text-sm"
      >
        SEE BEYOND
      </motion.p>

      {/* Glasses Image — 한 스크롤 안에 보이도록 상단에 배치 */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="mt-8 w-[min(40vw,28rem)] sm:mt-10 md:mt-12"
      >
        <img
          src="/images/glass3.png"
          alt="SULLIVAN EYE"
          className="h-auto w-full object-contain"
        />
      </motion.div>
    </section>
  );
}
