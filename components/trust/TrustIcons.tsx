"use client";

import type { SVGProps } from "react";

/**
 * Trust 하단 StatCard용 세련된 커스텀 아이콘 3종.
 * stroke=currentColor 라서 라이트(블랙)/다크(화이트) 테마를 자동 따른다.
 */

type IconProps = SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number };

function base(size = 40, strokeWidth = 1.4): SVGProps<SVGSVGElement> {
  return {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
}

/* 1. 글로벌 서비스 국가 수 — 지구본 */
export function GlobalIcon({ size = 40, strokeWidth = 1.4, ...props }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} {...props}>
      <circle cx="24" cy="24" r="16" />
      <path d="M8 24h32" />
      <path d="M24 8c5 5 5 27 0 32c-5-5-5-27 0-32Z" />
      <path d="M12 15c6 3 18 3 24 0" opacity="0.55" />
      <path d="M12 33c6-3 18-3 24 0" opacity="0.55" />
    </svg>
  );
}

/* 2. 다운로드 수 — 클라우드 + 하향 화살표 */
export function DownloadIcon({ size = 40, strokeWidth = 1.4, ...props }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} {...props}>
      <path d="M15 27a7 7 0 0 1 1.2-13.9A9 9 0 0 1 34 14a6.5 6.5 0 0 1 0 13" />
      <path d="M24 24v12" />
      <path d="M19 31l5 5 5-5" />
    </svg>
  );
}

/* 3. 월별 이용자 수 (MAU) — 사용자 그룹 */
export function UsersIcon({ size = 40, strokeWidth = 1.4, ...props }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} {...props}>
      <circle cx="18" cy="19" r="6" />
      <path d="M8.5 38a9.5 9.5 0 0 1 19 0" />
      <path d="M33 16.5a5.5 5.5 0 0 0 0-10.5" opacity="0.55" />
      <path d="M30 38a9 9 0 0 0-5.5-8.2" opacity="0.55" />
    </svg>
  );
}
