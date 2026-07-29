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
 * 이미지가 들어올 자리 (오른쪽 전체 높이).
 * /public/images/experience.png 추가 후 주석의 <Image /> 를 해제하면 바로 사용 가능.
 */
export default function ExperienceImagePlaceholder() {
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // 아주 약한 Parallax: rotateY ±2°, hover 시 살짝 위로
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-2, 2]), {
    stiffness: 100,
    damping: 22,
  });
  const hoverY = useSpring(useTransform(my, [-0.5, 0.5], [-4, 0]), {
    stiffness: 100,
    damping: 22,
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
    <div style={{ perspective: 1400 }} className="absolute inset-0">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, x: 60, scale: 0.98 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        style={{ rotateY, y: hoverY, transformStyle: "preserve-3d" }}
        className="relative h-full w-full overflow-hidden bg-gradient-to-b from-white/[0.05] to-white/[0.015] will-change-transform"
      >
        {/* 이미지 */}
        <Image
          src="/images/experience.png"
          alt="Experience"
          fill
          className="object-cover"
        />

        {/* 왼쪽 → 오른쪽으로 투명해지는 검정 Gradient Overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #000000 0%, rgba(0,0,0,0.7) 25%, rgba(0,0,0,0.25) 55%, transparent 80%)",
          }}
        />
      </motion.div>
    </div>
  );
}
