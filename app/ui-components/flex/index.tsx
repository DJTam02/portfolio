import React from "react";

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "col" | "row-reverse" | "col-reverse";
  justifyContent?: "start" | "center" | "end" | "between" | "around";
  alignItems?: "start" | "center" | "end" | "stretch";
}

export const Flex = ({
  direction = "row",
  justifyContent = "start",
  alignItems = "start",
  className = "",
  ...rest
}: FlexProps) => (
  <div
    className={`flex flex-${direction} justify-${justifyContent} items-${alignItems} ${className}`}
    {...rest}
  />
);
