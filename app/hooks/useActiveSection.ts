"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { BREAKPOINTS } from "@/app/constants";

function getInitialActiveId(ids: string[]): string {
  if (typeof window === "undefined") return ids[0] ?? "";
  const hash = window.location.hash.slice(1);
  return hash && ids.includes(hash) ? hash : (ids[0] ?? "");
}

const ACTIVATION_LINE = 150;
const BOTTOM_THRESHOLD = 50;
const TOP_THRESHOLD = 50;

export const useActiveSection = (ids: string[]) => {
  const [activeId, setActiveId] = useState(() => getInitialActiveId(ids));
  const idsRef = useRef(ids);
  const activeIdRef = useRef(activeId);
  const idsKey = ids.join(",");

  const updateHash = useCallback((id: string) => {
    if (typeof window === "undefined") return;
    const nextHash = `#${id}`;
    if (window.location.hash !== nextHash) {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${nextHash}`,
      );
    }
  }, []);

  useEffect(() => {
    updateHash(activeId);
  }, [activeId, updateHash]);

  useEffect(() => {
    if (ids.length === 0) return;

    const pickActive = (): string => {
      const currentIds = idsRef.current;
      const { scrollY, innerHeight } = window;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollY <= TOP_THRESHOLD) {
        return currentIds[0];
      }

      if (scrollY + innerHeight >= docHeight - BOTTOM_THRESHOLD) {
        return currentIds[currentIds.length - 1];
      }

      let activeIndex = 0;

      for (let i = 0; i < currentIds.length; i++) {
        const el = document.getElementById(currentIds[i]);
        if (!el) continue;

        const { bottom } = el.getBoundingClientRect();
        if (bottom <= ACTIVATION_LINE) {
          activeIndex = Math.min(i + 1, currentIds.length - 1);
        }
      }

      return currentIds[activeIndex];
    };

    const applyActive = (next: string) => {
      setActiveId((prev) => (prev === next ? prev : next));
    };

    const onScroll = () => applyActive(pickActive());

    if (window.innerWidth > BREAKPOINTS.laptop) {
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    const hash = window.location.hash.slice(1);
    if (!hash || !idsRef.current.includes(hash)) {
      applyActive(pickActive());
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [idsKey]);

  const navigateToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveId(id);
  }, []);

  return { activeId, navigateToSection };
};
