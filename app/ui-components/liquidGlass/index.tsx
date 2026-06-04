"use client";

import React, { useState, useRef, useLayoutEffect } from "react";
import LiquidGlassOriginal from "./liquidGlassOriginal";

interface LiquidGlassProps extends React.ComponentProps<
  typeof LiquidGlassOriginal
> {
  cursor?: "pointer" | "default";
}

export const LiquidGlass = ({
  children,
  cursor = "pointer",
  style = {},
  ...rest
}: LiquidGlassProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({});

  useLayoutEffect(() => {
    if (!ref.current) return;

    // Use ResizeObserver to watch for dimension changes
    const resizeObserver = new ResizeObserver(async (entries) => {
      for (const entry of entries) {
        if (entry.contentRect) {
          const { width, height } = entry.target.getBoundingClientRect();
          console.log(width, height);
          setSize({
            width,
            height,
          });
        }
      }
    });

    resizeObserver.observe(ref.current);

    // Clean up the observer on unmount
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <LiquidGlassOriginal
      displacementScale={0}
      blurAmount={0.8}
      saturation={100}
      aberrationIntensity={0}
      elasticity={0}
      borderRadius={10000}
      style={{ cursor, ...size, ...style }}
      padding="0px"
      {...rest}
    >
      <div ref={ref}>{children}</div>
    </LiquidGlassOriginal>
  );
};
