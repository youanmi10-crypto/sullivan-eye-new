"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AIInterface from "./AIInterface";

/**
 * 제품 이미지가 들어올 자리 (제품 3개 배치 가능한 넓은 영역).
 * /public/images/core-technology.png 추가 후 주석의 <Image /> 를 해제하면 바로 사용 가능.
 */
export default function TechProductPlaceholder() {
  return (
    <div className="relative w-full lg:scale-110">
      {/* AI 인터페이스 그래픽 — 제품 뒤 배경 */}
      <AIInterface />

      {/* 제품 아래 약한 Halo Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-12%] left-1/2 -z-10 h-[55%] w-[85%] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 50%, transparent 75%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 120, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 aspect-[3/2] w-full will-change-transform"
      >
        {/* 제품 이미지 */}
        <Image
          src="/images/core-technology.png"
          alt="Core Technology"
          fill
          className="object-contain"
        />
      </motion.div>
    </div>
  );
}
