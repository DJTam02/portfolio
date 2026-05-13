import React from "react";
import { Icon } from "../icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: "default" | "lg";
  hasIcon?: boolean;
}

export const Button = ({
  size,
  hasIcon = false,
  className = "",
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`px-5 py-3 justify-center items-center rounded-full active:shadow-[inset_0_4px_4px_0_rgba(24,24,24,0.2)] bg-[rgba(255,255,255,0.04)] ${size === "lg" ? "h-15" : ""} flex flex-row items-center gap-4 cursor-pointer ${className}`}
      {...rest}
    >
      {children}
      {hasIcon && <Icon name="arrowRight" size="s" />}
    </button>
  );
};
