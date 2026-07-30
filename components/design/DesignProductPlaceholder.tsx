"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Design 섹션 제품 이미지.
 * /public/images/design-product.png
 *
 * - 진입: 아래에서 24px 올라오며 opacity 0 → 1
 * - Idle: 사용자가 의식하지 못할 정도의 미세한 움직임
 *   (좌우 ±2.5px / 위아래 ±1.5px, 5.5초 주기 ease-in-out 무한)
 */
export default function DesignProductPlaceholder() {
  return (
    <div className="relative w-full">
      {/* 제품 아래 약한 Halo Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 bottom-[-15%] -z-10 h-[60%] w-[85%] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.025) 50%, transparent 75%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto h-[min(60vh,39rem)] w-full will-change-transform max-[768px]:h-[min(45vh,22rem)] max-[768px]:max-w-[300px]"
      >
        <motion.div
          aria-hidden
          className="absolute inset-0 will-change-transform"
          animate={{
            x: [0, 2.5, 0, -2.5, 0],
            y: [0, -1.5, 0, 1.5, 0],
          }}
          transition={{
            duration: 5.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {/* 제품 이미지 — 새 사진 (데스크톱만 오른쪽 0.6cm 이동, 모바일은 중앙) */}
          <Image
            src="/images/product-new.png"
            alt="SULLIVAN EYE"
            fill
            className="object-contain translate-y-[38px] md:translate-x-[22.8px]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
