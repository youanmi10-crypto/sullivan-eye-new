import { useEffect, useState } from "react";

/**
 * 현재 경로가 /light 라우트인지 판별.
 * CLI/SSR 환경에서도 안전하게 동작하도록 마운트 후에만 실제 값을 반환.
 */
export function useIsLightTheme(): boolean {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setIsLight(window.location.pathname.startsWith("/light"));
  }, []);

  return isLight;
}
