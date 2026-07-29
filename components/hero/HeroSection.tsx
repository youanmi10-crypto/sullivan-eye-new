"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // 스크롤 진행도(히어로 섹션이 뷰포트를 빠져나갈 때까지 0→1)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // 스크롤 내리면 점점 커지고(1 → 1.8) 사라짐(0.5까지 유지 → 1에서 0)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="snap-section relative flex min-h-screen w-full flex-col items-center bg-[#0A0A0A] px-6 max-[768px]:h-auto max-[768px]:min-h-svh"
    >
      {/* Title — 자간 좁힘 */}
      <motion.h1
        initial={{ opacity: 1 }}
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 1.2, delay: 0.5 }}
        style={{ letterSpacing: "0.1em" }}
        className="mt-[209px] text-center text-6xl font-semibold leading-tight tracking-tight text-white sm:text-7xl md:text-8xl max-[768px]:mt-[120px] max-[768px]:text-[40px] max-[768px]:leading-[1.15]"
      >
        SULLIVAN&nbsp;EYE
      </motion.h1>

      {/* SEE BEYOND */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        style={{ letterSpacing: "0.5em" }}
        className="mt-6 text-center text-xs uppercase tracking-[0.5em] text-neutral-400 sm:text-sm"
      >
        SEE BEYOND
      </motion.p>

      {/* Glasses + 뒷조명을 함께 정렬하는 컨테이너 */}
      <div className="relative mt-[-140px] w-[min(54vw,36rem)] sm:w-[min(54vw,42rem)] max-[768px]:mt-[-60px] max-[768px]:w-full max-[768px]:max-w-[340px]">
        {/* 제품 뒤 은은한 원형 조명 — 항상 표시 (스크롤/페이드인 영향 없음) */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "130%",
            aspectRatio: "1 / 1",
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 35%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="relative z-10"
        >
          <motion.div style={{ scale, opacity }}>
            <img
              src="/images/glass3.png"
              alt="SULLIVAN EYE"
              className="relative z-10 h-auto w-full object-contain"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* 하단 여백 */}
      <div className="mt-auto h-[8vh]" />
    </section>
  );
}
