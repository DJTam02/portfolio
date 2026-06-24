import type { CSSProperties } from "react";

export function getShapeMaskStyle(
  path: string,
  viewBoxSize: number,
): CSSProperties {
  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${viewBoxSize} ${viewBoxSize}">`,
    `<path d="${path}" fill="white"/>`,
    `</svg>`,
  ].join("");
  const mask = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;

  return {
    WebkitMaskImage: mask,
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskSize: "100% 100%",
    maskImage: mask,
    maskRepeat: "no-repeat",
    maskSize: "100% 100%",
  };
}
