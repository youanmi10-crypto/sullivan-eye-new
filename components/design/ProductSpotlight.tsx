"use client";

import { motion } from "framer-motion";

/**
 * 3페이지(Design-B) 안경 바로 위 배경에 비춰지는 스포트라이트.
 *
 * NOTE: 실제 스포트라이트 이미지는 추후 교체 예정.
 * 현재는 placeholder(은은한 원뿔형 빛)만 표시.
 * 이미지 추가 시 public/images/spotlight.png 를 넣고 아래 주석 해제.
 */
export default function ProductSpotlight() {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 will-change-[opacity]"
      style={{ width: "80vw", maxWidth: "760px", height: "85vh" }}
    >
      {/* 스포트라이트 이미지 placeholder — 추후 교체 */}
      <motion.div
        aria-hidden
        className="absolute inset-0 will-change-[opacity]"
        animate={{ opacity: [0.92, 1, 0.92] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        style={{
          background:
            "conic-gradient(from 180deg at 50% 0%, transparent 43%, rgba(255,255,255,0.85) 50%, transparent 57%)",
          filter: "blur(2px)",
        }}
      />
    </motion.div>
  );
}
