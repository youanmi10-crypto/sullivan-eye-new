import { usePathname } from "next/navigation";

/**
 * 현재 경로가 /light 라우트인지 판별.
 * usePathname은 서버 렌더 시점에도 동작하므로 초기 HTML부터 올바른 테마가 적용된다.
 */
export function useIsLightTheme(): boolean {
  const pathname = usePathname();
  return pathname?.startsWith("/light") ?? false;
}
