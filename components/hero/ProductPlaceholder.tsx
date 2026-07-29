"use client";

import Image from "next/image";
import { useRef, type MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

/**
 * 제품 이미지가 들어올 자리.
 * 나중에 아래 주석의 <Image /> 주석만 해제하고
 * /public/images/sullivan-eye.png 를 넣으면 바로 사용 가능합니다.
 */
export default function ProductPlaceholder() {
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0); // -0.5 ~ 0.5
  const my = useMotionValue(0);

  // 미세한 Parallax: rotateX ±2°, rotateY ±4°
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [2, -2]), {
    stiffness: 120,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), {
    stiffness: 120,
    damping: 20,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div style={{ perspective: 1200 }} className="relative w-full">
      {/* 은은한 원형 Glow — 제품 뒤 배경 */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[130%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 45%, transparent 70%)",
        }}
      />
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 80, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.1,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative mx-auto h-[min(46vh,31rem)] w-full will-change-transform"
      >
      <div className="relative w-full" style={{ transformBox: 'fill-box', overflow: 'visible' }}>
        <img
          src="/images/glass3.png"
          alt="SULLIVAN EYE"
          className="w-full h-auto object-contain scale-[2]"
        />
      </div>
      </motion.div>
    </div>
  );
}
