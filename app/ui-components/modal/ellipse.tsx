import React from "react";

interface EllipseProps {
  fillColour: string;
  strokeColour: string;
}

export const Ellipse = ({ fillColour, strokeColour }: EllipseProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <g filter="url(#filter0_f_371_7970)">
      <circle cx="9" cy="9" r="8" fill={fillColour} />
      <circle cx="9" cy="9" r="7" stroke={strokeColour} strokeWidth="2" />
    </g>
    <defs>
      <filter
        id="filter0_f_371_7970"
        x="0"
        y="0"
        width="18"
        height="18"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="0.5"
          result="effect1_foregroundBlur_371_7970"
        />
      </filter>
    </defs>
  </svg>
);
