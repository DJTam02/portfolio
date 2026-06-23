"use client";

import React, { useId, useMemo, type CSSProperties } from "react";
import { Flex } from "../flex";
import { getShapeMaskStyle } from "./shapeMask";
import { STAR_PATH, STAR_SIZE } from "./shapes";

const BLUR_AMOUNT = 0.8;
const SATURATION = 100;

type ShapedLiquidGlassProps = {
  blurAmount?: number;
  children?: React.ReactNode;
  className?: string;
  cursor?: "pointer" | "default";
  onClick?: () => void;
  path?: string;
  saturation?: number;
  scale?: number;
  size?: number;
  style?: CSSProperties;
};

export const ShapedLiquidGlass = ({
  blurAmount = BLUR_AMOUNT,
  children,
  className,
  cursor = "default",
  onClick,
  path = STAR_PATH,
  saturation = SATURATION,
  scale = 1,
  size = STAR_SIZE,
  style = {},
}: ShapedLiquidGlassProps) => {
  const gradientId = useId();
  const scaledSize = size * scale;
  const shapeMask = useMemo(() => getShapeMaskStyle(path, size), [path, size]);

  const backdropBlur = `blur(${4 + blurAmount * 32}px) saturate(${saturation}%)`;

  const layerStyle: CSSProperties = {
    ...shapeMask,
    height: scaledSize,
    left: 0,
    pointerEvents: "none",
    position: "absolute",
    top: 0,
    width: scaledSize,
  };

  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        cursor: onClick ? "pointer" : cursor,
        flexShrink: 0,
        height: scaledSize,
        position: "relative",
        width: scaledSize,
        ...style,
      }}
    >
      {/* Frosted glass — mask + backdrop-filter on the same element */}
      <div
        style={{
          ...layerStyle,
          WebkitBackdropFilter: backdropBlur,
          backdropFilter: backdropBlur,
        }}
      />

      {/* Border highlight layer 1 (matches pill screen blend) */}
      <span
        style={{
          ...layerStyle,
          background: `linear-gradient(
            135deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.12) 33%,
            rgba(255, 255, 255, 0.4) 66%,
            rgba(255, 255, 255, 0) 100%
          )`,
          boxShadow:
            "0 0 0 0.5px rgba(255, 255, 255, 0.5) inset, 0 1px 3px rgba(255, 255, 255, 0.25) inset, 0 1px 4px rgba(0, 0, 0, 0.35)",
          mixBlendMode: "screen",
          opacity: 0.2,
        }}
      />

      {/* Border highlight layer 2 (matches pill overlay blend) */}
      <span
        style={{
          ...layerStyle,
          background: `linear-gradient(
            135deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.32) 33%,
            rgba(255, 255, 255, 0.6) 66%,
            rgba(255, 255, 255, 0) 100%
          )`,
          boxShadow:
            "0 0 0 0.5px rgba(255, 255, 255, 0.5) inset, 0 1px 3px rgba(255, 255, 255, 0.25) inset, 0 1px 4px rgba(0, 0, 0, 0.35)",
          mixBlendMode: "overlay",
        }}
      />

      {/* Crisp shape edge */}
      <svg
        aria-hidden="true"
        fill="none"
        height={scaledSize}
        style={{ left: 0, pointerEvents: "none", position: "absolute", top: 0 }}
        viewBox={`0 0 ${size} ${size}`}
        width={scaledSize}
      >
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={gradientId}
            x1="0"
            x2={size}
            y1="0"
            y2={size}
          >
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="33%" stopColor="rgba(255, 255, 255, 0.35)" />
            <stop offset="66%" stopColor="rgba(255, 255, 255, 0.65)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>
        </defs>
        <path
          d={path}
          stroke={`url(#${gradientId})`}
          strokeWidth={1.5}
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {children ? (
        <Flex
          alignItems="center"
          direction="col"
          justifyContent="center"
          style={{ height: "100%", position: "relative", width: "100%", zIndex: 1 }}
        >
          {children}
        </Flex>
      ) : null}
    </div>
  );
};

export { STAR_PATH, STAR_SIZE, CROSS_PATH, CROSS_SIZE, BLOB_PATH, BLOB_SIZE } from "./shapes";
