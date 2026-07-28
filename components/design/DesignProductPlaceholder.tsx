"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Design 섹션 제품 이미지.
 * /public/images/design-product.png
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
        initial={{ opacity: 0, y: 100, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto h-[min(60vh,39rem)] w-full will-change-transform"
      >
        {/* 제품 이미지 — 세로형 원본의 여백을 줄이기 위해 확대 */}
        <Image
          src="/images/design-product.png"
          alt="SULLIVAN EYE"
          fill
          className="scale-[2] object-contain"
        />
      </motion.div>
    </div>
  );
}
