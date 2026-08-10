"use client";

import { motion } from "framer-motion";
import { Sparkles, Eye, User } from "lucide-react";
import { useIsLightTheme } from "@/components/useIsLightTheme";

/**
 * AI 기술을 상징하는 절제된 인터페이스 그래픽 (SVG + CSS).
 * Apple Vision Pro UI 스타일 — Arc, 얇은 원형 라인, 연결선, Node, 은은한 Glow.
 */
export default function AIInterface() {
  const isLight = useIsLightTheme();
  const line = isLight ? "rgba(0,0,0," : "rgba(255,255,255,";
  const c06 = `${line}0.06)`;
  const c08 = `${line}0.08)`;
  const c18 = `${line}0.18)`;
  const c12 = `${line}0.12)`;
  const c10 = `${line}0.10)`;
  const c05 = `${line}0.5)`;
  const c035 = `${line}0.35)`;
  const c04 = `${line}0.4)`;
  const c03 = `${line}0.3)`;
  const c045 = `${line}0.45)`;

  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 2.0, ease: "easeOut", delay: 0.2 }}
      className="pointer-events-none absolute inset-[-18%] z-0"
    >
      <svg
        viewBox="0 0 600 600"
        className="h-full w-full"
        fill="none"
        style={{ filter: `drop-shadow(0 0 24px ${line}0.05))` }}
      >
        {/* 얇은 원형 라인들 */}
        <circle cx="300" cy="300" r="270" stroke={c06} strokeWidth="1" />
        <circle cx="300" cy="300" r="215" stroke={c08} strokeWidth="1" />

        {/* Arc 들 */}
        <path
          d="M 300 45 A 255 255 0 0 1 545 240"
          stroke={c18}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M 90 420 A 240 240 0 0 1 75 250"
          stroke={c12}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M 390 545 A 260 260 0 0 0 520 430"
          stroke={c10}
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* 연결선 */}
        <line x1="300" y1="45" x2="300" y2="110" stroke={c10} strokeWidth="1" />
        <line x1="75" y1="250" x2="140" y2="278" stroke={c10} strokeWidth="1" />
        <line x1="520" y1="430" x2="455" y2="395" stroke={c10} strokeWidth="1" />

        {/* Node — 일부는 pulse */}
        <circle cx="300" cy="45" r="3" fill={c05}>
          <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="545" cy="240" r="2.5" fill={c035} />
        <circle cx="75" cy="250" r="2.5" fill={c04}>
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur="5.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="90" cy="420" r="2" fill={c03} />
        <circle cx="520" cy="430" r="3" fill={c045}>
          <animate attributeName="opacity" values="0.45;0.95;0.45" dur="4.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="390" cy="545" r="2" fill={c03} />
      </svg>

      {/* AI / Vision / User 아이콘 Placeholder */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <IconChip>
          <Sparkles className="h-3.5 w-3.5" strokeWidth={1.5} />
        </IconChip>
      </div>
      <div className="absolute left-0 top-[42%] -translate-x-1/2">
        <IconChip>
          <Eye className="h-3.5 w-3.5" strokeWidth={1.5} />
        </IconChip>
      </div>
      <div className="absolute right-0 top-[71%] translate-x-1/2">
        <IconChip>
          <User className="h-3.5 w-3.5" strokeWidth={1.5} />
        </IconChip>
      </div>
    </motion.div>
  );
}

function IconChip({ children }: { children: React.ReactNode }) {
  const isLight = useIsLightTheme();
  const chipBorder = isLight ? "border-black/15" : "border-white/15";
  const chipBg = isLight ? "bg-black/5" : "bg-black/60";
  const chipText = isLight ? "text-black" : "text-neutral-300";
  return (
    <div className={`flex h-8 w-8 items-center justify-center rounded-full border ${chipBorder} ${chipBg} ${chipText} backdrop-blur-sm`}>
      {children}
    </div>
  );
}
