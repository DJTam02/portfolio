"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { LiquidGlass, Flex, Button } from "@/app/ui-components";
import {
  useActiveSection,
  useFixedTopAboveElement,
  useGetBreakpointValue,
} from "@/app/hooks";
import { BREAKPOINTS } from "@/app/constants";

interface SideNavItem {
  label: string;
  id: string;
}

interface SideNavProps extends Omit<
  React.ComponentProps<typeof LiquidGlass>,
  "children"
> {
  items: SideNavItem[];
}

const HIGHLIGHT_WIDTH = 212;
const HIGHLIGHT_HEIGHT = 53;
const SIDE_NAV_ID = "portfolio-side-nav";

export const SideNav = ({ items, ...props }: SideNavProps) => {
  const { getBreakpointValue, width } = useGetBreakpointValue();
  const sectionIds = items.map((item) => item.id);
  const { activeId, navigateToSection } = useActiveSection(sectionIds);

  const navContainerRef = useRef<HTMLDivElement>(null);
  const navItemRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [highlightTop, setHighlightTop] = useState(0);

  const isVisible = width >= BREAKPOINTS.laptop;
  const navTop = useFixedTopAboveElement(SIDE_NAV_ID, "portfolio-footer", {
    enabled: isVisible,
  });

  const updateHighlightPosition = useCallback(() => {
    const el = navItemRefs.current.get(activeId);
    if (el) {
      setHighlightTop(el.offsetTop);
    }
  }, [activeId]);

  useLayoutEffect(() => {
    updateHighlightPosition();
  }, [updateHighlightPosition]);

  useLayoutEffect(() => {
    const container = navContainerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(updateHighlightPosition);
    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, [updateHighlightPosition]);

  if (width < BREAKPOINTS.laptop) return null;

  return (
    <LiquidGlass
      id={SIDE_NAV_ID}
      style={{
        position: "fixed",
        top: navTop,
        left: getBreakpointValue([32, 32, 32, 60]),
        width: 228,
      }}
      borderRadius={24}
      {...props}
    >
      <div className="p-2 bg-liquid-glass">
        <div ref={navContainerRef} className="relative">
          <LiquidGlass
            borderRadius={20}
            style={{
              position: "absolute",
              top: highlightTop,
              left: 0,
              width: HIGHLIGHT_WIDTH,
              height: HIGHLIGHT_HEIGHT,
              transition: "top 200ms ease",
              pointerEvents: "none",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
            }}
          >
            <span
              aria-hidden
              className="block bg-liquid-glass-light"
              style={{ height: HIGHLIGHT_HEIGHT, width: HIGHLIGHT_WIDTH }}
            />
          </LiquidGlass>
          <Flex direction="col" className="gap-2">
            {items.map((item) => (
              <div
                key={item.id}
                ref={(el) => {
                  if (el) navItemRefs.current.set(item.id, el);
                  else navItemRefs.current.delete(item.id);
                }}
                className="relative z-[1]"
              >
                <Button
                  onClick={() => navigateToSection(item.id)}
                  className="!px-4 bg-transparent"
                  isBorderless
                >
                  {item.label}
                </Button>
              </div>
            ))}
          </Flex>
        </div>
      </div>
    </LiquidGlass>
  );
};
