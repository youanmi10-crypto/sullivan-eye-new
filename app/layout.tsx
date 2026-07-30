import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SULLIVAN EYE — 세상을 읽는 새로운 눈",
  description:
    "AI가 보는 것을 넘어 당신의 시선이 됩니다. 정보를 읽고 주변을 탐색하는 웨어러블 AI.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className="bg-black text-[#E5E5E5] antialiased">
        {/* 우측 상단 고정 투아트 로고 버튼 */}
        <a
          href="https://www.tuat.kr/"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed right-[96px] top-5 z-50 cursor-pointer opacity-90 transition-opacity hover:opacity-100 max-[768px]:right-4"
          aria-label="투아트 바로가기"
        >
          <img
            src="/images/tuat-logo.png"
            alt="투아트"
            className="h-16 w-auto sm:h-20"
          />
        </a>
        {children}
      </body>
    </html>
  );
}
