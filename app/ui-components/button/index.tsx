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
  onClick,
  ...rest
}: ButtonProps) => {
  const content = (
    <div
      onClick={onClick}
      className={`${className} px-5 py-3 justify-between items-center ${size === "lg" ? "h-15 " : ""}flex flex-row items-center gap-4 bg-liquid-glass whitespace-nowrap`}
    >
      {typeof children === "string" ? (
        <Text variant="button">{children}</Text>
      ) : (
        children
      )}
      {hasIcon && <Icon name="arrowRight" size={3.5} />}
    </div>
  );

  return isBorderless ? (
    content
  ) : (
    <LiquidGlass onClick={onClick} {...rest}>
      {content}
    </LiquidGlass>
  );
};
