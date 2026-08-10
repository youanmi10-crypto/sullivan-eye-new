"use client";

import { createContext, useContext, type ReactNode } from "react";

type Theme = "dark" | "light";

const ThemeContext = createContext<Theme>("dark");

export function ThemeProvider({
  theme,
  children,
}: {
  theme: Theme;
  children: ReactNode;
}) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

/**
 * 현재 테마가 light(/light 라우트)인지 판별.
 * app/layout.tsx(dark) 또는 app/light/layout.tsx(light)의 ThemeProvider 값을 따른다.
 * 서버 prerender 시에는 컨텍스트 기본값("dark")으로 렌더되므로 빌드 에러가 없다.
 */
export function useIsLightTheme(): boolean {
  return useContext(ThemeContext) === "light";
}
