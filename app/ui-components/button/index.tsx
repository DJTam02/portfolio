"use client";

import React from "react";
import { Icon } from "../icon";
import { Text } from "../text";
import { LiquidGlass } from "../liquidGlass";

interface ButtonProps extends React.ComponentProps<typeof LiquidGlass> {
  size?: "default" | "lg";
  hasIcon?: boolean;
  isBorderless?: boolean;
}

export const Button = ({
  size = "default",
  hasIcon = false,
  className = "",
  children,
  isBorderless = false,
  ...rest
}: ButtonProps) => {
  const content = (
    <div
      className={`px-5 py-3 justify-between items-center ${size === "lg" ? "h-15" : ""} flex flex-row items-center gap-4 bg-liquid-glass ${className}`}
    >
      {typeof children === "string" ? (
        <Text variant="button">{children}</Text>
      ) : (
        children
      )}
      {hasIcon && <Icon name="arrowRight" size="s" />}
    </div>
  );

  return isBorderless ? (
    content
  ) : (
    <LiquidGlass {...rest}>{content}</LiquidGlass>
  );
};
