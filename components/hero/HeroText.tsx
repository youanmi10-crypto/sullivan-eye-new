"use client";

import { motion, type Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

export default function HeroText() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center text-center"
    >
      {/* 메인 타이틀 */}
      <motion.h1
        variants={fadeUp}
        style={{ letterSpacing: "0.3em" }}
        className="text-5xl font-semibold tracking-tight text-white sm:text-7xl md:text-8xl"
      >
        SULLIVAN&nbsp;EYE
      </motion.h1>

      {/* SEE BEYOND */}
      <motion.span
        variants={fadeUp}
        style={{ letterSpacing: "0.35em" }}
        className="mt-6 text-xs uppercase text-neutral-400 sm:mt-8 sm:text-sm"
        initial={{ opacity: 0, y: 30, letterSpacing: "0.35em" }}
        animate={{
          opacity: 1,
          y: 0,
          letterSpacing: ["0.35em", "0.55em", "0.35em"],
        }}
        transition={{
          opacity: { duration: 0.8, ease: EASE, delay: 0.2 },
          y: { duration: 0.8, ease: EASE, delay: 0.2 },
          letterSpacing: { duration: 2.4, ease: "easeInOut", delay: 0.2 },
        }}
      >
        SEE BEYOND
      </motion.span>
    </motion.div>
  );
}
