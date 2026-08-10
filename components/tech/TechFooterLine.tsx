"use client";

import { motion } from "framer-motion";
import { useIsLightTheme } from "@/components/useIsLightTheme";

export default function TechFooterLine() {
  const isLight = useIsLightTheme();
  const lineColor = isLight ? "to-black/20" : "to-white/20";
  const textColor = isLight ? "text-black" : "text-neutral-400";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
      className="flex items-center justify-center gap-6 sm:gap-10"
    >
      <div className={`h-px w-16 bg-gradient-to-r from-transparent ${lineColor} sm:w-28`} />
      <div className="flex flex-col items-center gap-3 text-center">
        <span className={`text-xs tracking-[0.3em] ${textColor} sm:text-sm`}>
          Powered by AI
        </span>
        <span className={`text-xs tracking-[0.3em] ${textColor} sm:text-sm`}>
          Built for People
        </span>
      </div>
      <div className={`h-px w-16 bg-gradient-to-l from-transparent ${lineColor} sm:w-28`} />
    </motion.div>
  );
}
