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
      <body className="bg-black text-[#E5E5E5] antialiased">{children}</body>
    </html>
  );
}
