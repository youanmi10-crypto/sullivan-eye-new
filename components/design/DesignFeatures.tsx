"use client";

import { motion } from "framer-motion";
import { Ear, Diamond, Circle } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const FEATURES = [
  { Icon: Ear, label: "인체공학적 착용감" },
  { Icon: Diamond, label: "미니멀한 프리미엄 디자인" },
  { Icon: Circle, label: "일상에 자연스럽게 녹아드는 AI" },
];

export default function DesignFeatures() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-stretch justify-center gap-10 sm:flex-row sm:gap-0">
      {FEATURES.map(({ Icon, label }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE, delay: i * 0.15 }}
          className={
            "flex flex-1 flex-col items-center gap-4 px-6 text-center will-change-transform" +
            (i > 0
              ? " border-t border-white/10 pt-10 sm:border-t-0 sm:border-l sm:pt-0"
              : "")
          }
        >
          <Icon className="h-6 w-6 text-neutral-300" strokeWidth={1.25} />
          <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
            {label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
