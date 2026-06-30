"use client";

import React, { useState, useRef, useLayoutEffect } from "react";
import LiquidGlassOriginal from "./liquidGlassOriginal";
import { Flex } from "../flex";

interface LiquidGlassProps extends React.ComponentProps<
  typeof LiquidGlassOriginal
> {
  cursor?: "pointer" | "default";
  wrapperClassname?: string;
  id?: string;
}

export const LiquidGlass = ({
  children,
  cursor = "pointer",
  style = {},
  wrapperClassname = "",
  id,
  ...rest
}: LiquidGlassProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({});
  const [childWidth, setChildWidth] = useState<number | undefined>(undefined);
  const [childHeight, setChildHeight] = useState<number | undefined>(undefined);

  useLayoutEffect(() => {
    if (!ref.current) return;

    // Use ResizeObserver to watch for dimension changes
    const resizeObserver = new ResizeObserver(async (entries) => {
      for (const entry of entries) {
        if (entry.contentRect) {
          const { width, height } = entry.target.getBoundingClientRect();
          console.log(id, width, height);
          let verticalPadding = 0;
          if (wrapperRef.current) {
            const style = window.getComputedStyle(wrapperRef.current);
            verticalPadding =
              parseInt(style.paddingTop) + parseInt(style.paddingBottom);
          }
          setSize({
            width: width,
            // height,
            minHeight: height + verticalPadding,
          });
        }
      }
    });

    resizeObserver.observe(ref.current);

    // Clean up the observer on unmount
    return () => resizeObserver.disconnect();
  }, []);

  useLayoutEffect(() => {
    if (!containerRef.current || (!style.width && !style.height)) return;

    // Use ResizeObserver to watch for dimension changes
    const resizeObserver = new ResizeObserver(async (entries) => {
      for (const entry of entries) {
        if (entry.contentRect) {
          const { width, height } = entry.target.getBoundingClientRect();
          if (style.width) {
            setChildWidth(width);
          }
          if (style.height) {
            setChildHeight(height);
          }
        }
      }
    });

    resizeObserver.observe(containerRef.current);

    // Clean up the observer on unmount
    return () => resizeObserver.disconnect();
  }, [style.width, style.height]);

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
      ref={containerRef}
      id={id}
      {...rest}
    >
      <Flex
        direction="row"
        className={wrapperClassname}
        style={{
          width: childWidth || undefined,
          minHeight: childHeight || undefined,
        }}
        ref={wrapperRef}
      >
        <div ref={ref}>{children}</div>
      </Flex>
    </LiquidGlassOriginal>
  );
};
