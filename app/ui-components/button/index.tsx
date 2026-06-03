"use client";

import React from "react";
import { Icon } from "../icon";
import { LiquidGlass } from "../liquidGlass";

interface ButtonProps extends React.ComponentProps<typeof LiquidGlass> {
  size?: "default" | "lg";
  hasIcon?: boolean;
}

export const Button = ({
  size = "default",
  hasIcon = false,
  className = "",
  children,
  top,
  left,
  ...rest
}: ButtonProps) => {
  return (
    <LiquidGlass top={top} left={left} {...rest}>
      <div
        className={`px-5 py-3 justify-center items-center ${size === "lg" ? "h-15" : ""} flex flex-row items-center gap-4 ${className} bg-[rgba(255,255,255,0.08)]`}
      >
        {children}
        {hasIcon && <Icon name="arrowRight" size="s" />}
      </div>
    </LiquidGlass>
  );
};
