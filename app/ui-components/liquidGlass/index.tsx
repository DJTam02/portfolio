"use client";

import React from "react";
import LiquidGlassOriginal from "liquid-glass-react";

interface LiquidGlassProps extends React.ComponentProps<
  typeof LiquidGlassOriginal
> {
  top: string;
  left: string;
  cursor?: "pointer" | "default";
}

export const LiquidGlass = ({
  top,
  left,
  cursor = "pointer",
  ...rest
}: LiquidGlassProps) => (
  <LiquidGlassOriginal
    displacementScale={0}
    blurAmount={0.8}
    saturation={100}
    aberrationIntensity={0}
    elasticity={0.35}
    cornerRadius={10000}
    style={{
      position: "fixed",
      top,
      left,
      cursor,
    }}
    padding="0px"
    {...rest}
  />
);
