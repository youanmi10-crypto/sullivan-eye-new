"use client";

import { motion } from "framer-motion";
import { useIsLightTheme } from "@/components/useIsLightTheme";

/**
 * 상단 중앙에서 아래로 떨어지는 원뿔형 Spotlight.
 * 진입 시 자연스럽게 Fade In 된 뒤, 95% → 100% → 95% 사이에서
 * 아주 천천히 숨쉬듯 변합니다 (약 7초 주기).
 */
export default function Spotlight() {
  const isLight = useIsLightTheme();
  const gradient = isLight
    ? "conic-gradient(from 180deg at 50% 0%, transparent 40%, rgba(0,0,0,0.08) 50%, transparent 60%)"
    : "conic-gradient(from 180deg at 50% 0%, transparent 40%, rgba(255,255,255,0.9) 50%, transparent 60%)";

  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.2, ease: "easeOut" }}
      className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 will-change-[opacity]"
      style={{
        width: "140vw",
        height: "120vh",
        background: gradient,
        filter: "blur(80px)",
      }}
    >
      <motion.div
        aria-hidden
        className="absolute inset-0 will-change-[opacity]"
        animate={{ opacity: [0.95, 1, 0.95] }}
        transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
      />
    </motion.div>
  );
}
