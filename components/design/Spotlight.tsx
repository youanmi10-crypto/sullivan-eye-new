"use client";

import { motion } from "framer-motion";

/**
 * 상단 중앙에서 아래로 떨어지는 원뿔형 Spotlight.
 * opacity 5~8% 사이에서 아주 천천히 숨쉬듯 변합니다.
 */
export default function Spotlight() {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0.05 }}
      animate={{ opacity: [0.05, 0.08, 0.05] }}
      transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
      className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 will-change-[opacity]"
      style={{
        width: "140vw",
        height: "120vh",
        background:
          "conic-gradient(from 180deg at 50% 0%, transparent 40%, rgba(255,255,255,0.9) 50%, transparent 60%)",
        filter: "blur(80px)",
      }}
    />
  );
}
