"use client";

import { motion, type Variants } from "framer-motion";
import { Ear, Gem, Sparkles } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// 아이콘 순차 등장 (좌 → 가운데 → 우)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

const FEATURES = [
  { Icon: Ear, label: "인체공학적 착용감" },
  { Icon: Gem, label: "미니멀한 프리미엄 디자인" },
  { Icon: Sparkles, label: "일상에 자연스럽게 녹아드는 AI" },
];

export default function DesignFeatures() {
  return (
    <motion.div
      variants={{ show: { transition: { staggerChildren: 0.18 } } }}
      className="mx-auto flex max-w-4xl flex-col items-stretch justify-center gap-10 max-[768px]:flex-col sm:flex-row sm:gap-0"
    >
      {FEATURES.map(({ Icon, label }, i) => (
        <motion.div
          key={label}
          variants={itemVariants}
          whileHover="hover"
          className={
            "group flex flex-1 flex-col items-center gap-4 px-6 text-center will-change-transform " +
            (i > 0
              ? "border-t border-white/10 pt-10 sm:border-t-0 sm:border-l sm:pt-0"
              : "")
          }
        >
          <motion.div
            variants={{
              hover: { scale: 1.08, y: -5 },
            }}
            transition={{ duration: 0.3, ease: EASE }}
            className="flex flex-col items-center gap-4"
          >
            <Icon
              className="h-6 w-6 text-neutral-300 transition-colors duration-300 group-hover:text-white"
              strokeWidth={1.25}
            />
            <p className="text-sm leading-relaxed text-neutral-300 transition-colors duration-300 group-hover:text-white sm:text-base">
              {label}
            </p>
          </motion.div>

          {/* Hover 시 좌우로 자연스럽게 길어지는 짧은 라인 */}
          <span className="mt-1 block h-px w-6 bg-white/30 transition-all duration-300 ease-out group-hover:w-12 group-hover:bg-white/60" />
        </motion.div>
      ))}
    </motion.div>
  );
}
