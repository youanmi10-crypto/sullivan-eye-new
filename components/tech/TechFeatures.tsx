"use client";

import { motion } from "framer-motion";
import { Eye, BookOpen, MessageCircle } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const FEATURES = [
  { Icon: Eye, title: "See", desc: ["주변 환경을", "인식합니다"] },
  { Icon: BookOpen, title: "Read", desc: ["문서를", "읽어줍니다"] },
  { Icon: MessageCircle, title: "AI Q&A", desc: ["AI가 질문에", "응답합니다"] },
];

export default function TechFeatures() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-stretch justify-center gap-10 sm:flex-row sm:gap-0">
      {FEATURES.map(({ Icon, title, desc }, i) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE, delay: i * 0.15 }}
          className={
            "group flex flex-1 flex-col items-center gap-4 px-6 text-center will-change-transform" +
            (i > 0
              ? " border-t border-white/10 pt-10 sm:border-t-0 sm:border-l sm:pt-0"
              : "")
          }
        >
          <Icon
            className="h-6 w-6 text-neutral-300 transition-transform duration-300 ease-out group-hover:scale-105 group-hover:text-white"
            strokeWidth={1.25}
          />
          <h3 className="text-base font-semibold text-white transition-colors duration-300 sm:text-lg">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-neutral-400 transition-colors duration-300 group-hover:text-neutral-200">
            {desc[0]}
            <br />
            {desc[1]}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
