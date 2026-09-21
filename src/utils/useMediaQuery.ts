import { useSyncExternalStore } from "react";

export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (notify) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", notify);
      return () => media.removeEventListener("change", notify);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

export function usePageVisible() {
  return useSyncExternalStore(
    (notify) => {
      document.addEventListener("visibilitychange", notify);
      return () => document.removeEventListener("visibilitychange", notify);
    },
    () => document.visibilityState !== "hidden",
    () => true,
  );
}
