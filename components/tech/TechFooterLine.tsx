"use client";

import { motion } from "framer-motion";

export default function TechFooterLine() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
      className="flex items-center justify-center gap-6 sm:gap-10"
    >
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20 sm:w-28" />
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="text-xs tracking-[0.3em] text-neutral-400 sm:text-sm">
          Powered by AI
        </span>
        <span className="text-xs tracking-[0.3em] text-neutral-400 sm:text-sm">
          Built for People
        </span>
      </div>
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20 sm:w-28" />
    </motion.div>
  );
}
