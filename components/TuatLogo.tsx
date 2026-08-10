"use client";

import { useIsLightTheme } from "@/components/useIsLightTheme";

/**
 * 우측 상단 고정 투아트 로고 버튼.
 * 라이트 테마에서는 블랙 로고, 다크 테마에서는 기존 로고를 사용.
 */
export default function TuatLogo() {
  const isLight = useIsLightTheme();
  const src = isLight ? "/images/tuat-logo-black.png" : "/images/tuat-logo.png";
  return (
    <a
      href="https://www.tuat.kr/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-[96px] top-5 z-50 cursor-pointer opacity-90 transition-opacity hover:opacity-100 max-[768px]:right-4"
      aria-label="투아트 바로가기"
    >
      <img
        src={src}
        alt="투아트"
        className="h-16 w-auto sm:h-20"
      />
    </a>
  );
}
