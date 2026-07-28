"use client";

import { motion } from "framer-motion";

/**
 * Global Lighting System
 * 페이지 전체를 하나의 전시 공간처럼 만드는 조명 레이어.
 *
 * 1) Ambient Light  — 깊은 차콜 느낌의 고정 오버레이 (viewport 고정)
 * 2) Vertical Gradient — 상단 약간 밝음 → 하단 조금 더 어두움 (viewport 고정)
 * 3) Continuous Spotlight — 문서 전체 높이를 관통하는 하나의 빛 기둥 (스크롤과 함께 이동)
 * 4) Slow Ambient Animation — 밝기 2~3%만 아주 천천히 숨쉬는 정도
 *
 * 모두 CSS gradient + GPU 친화(opacity/transform)로만 구성. Canvas 없음.
 */

/** viewport에 고정되는 앰비언트 + 수직 그라디언트 */
export function AmbientOverlay() {
  return (
    <>
      {/* Ambient — 완전한 검정을 아주 깊은 차콜로 끌어올리는 은은한 중앙광 */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0.85 }}
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 35%, rgba(255,255,255,0.028) 0%, rgba(255,255,255,0.012) 45%, transparent 75%)",
        }}
      />

      {/* Vertical Gradient — 상단 미세하게 밝고 하단으로 갈수록 어두움 */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.02) 0%, transparent 30%, transparent 62%, rgba(0,0,0,0.32) 100%)",
        }}
      />
    </>
  );
}

/** 문서 전체 높이를 따라 이어지는 하나의 빛 기둥 (스크롤과 함께 자연스럽게 지나감) */
export function ContinuousBeam() {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0.9 }}
      animate={{ opacity: [0.9, 1, 0.9] }}
      transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        background: [
          // 최상단(Hero) — 중앙 상단에서 내려오는 주광
          "radial-gradient(90% 42rem at 50% 0%, rgba(255,250,244,0.07) 0%, rgba(255,250,244,0.025) 55%, transparent 80%)",
          // 페이지를 관통하는 부드러운 세로 빛 기둥 (섹션 경계를 잇는 역할)
          "linear-gradient(to bottom, transparent 0%, rgba(255,252,248,0.012) 18%, rgba(255,252,248,0.02) 38%, rgba(255,252,248,0.012) 58%, rgba(255,252,248,0.018) 78%, transparent 100%)",
        ].join(", "),
      }}
    />
  );
}

/**
 * 제품 위치 전용 Radial Light.
 * 제품이 놓이는 자리 뒤에 배치하는 매우 큰 warm-white 광원.
 * parent는 relative여야 합니다.
 */
export function ProductLight({
  className = "",
  intensity = 0.06,
}: {
  className?: string;
  intensity?: number;
}) {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0.9 }}
      animate={{ opacity: [0.9, 1, 0.9] }}
      transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
      className={`pointer-events-none absolute blur-3xl ${className}`}
      style={{
        background: `radial-gradient(ellipse at center, rgba(255,250,242,${intensity}) 0%, rgba(255,250,242,${
          intensity * 0.4
        }) 45%, transparent 72%)`,
      }}
    />
  );
}
