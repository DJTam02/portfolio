import React from "react";
import { TextVariant } from "./types";
import { variantStyles } from "./constants";
import { Colour, colours } from "../styles";

type ListProps = React.HTMLAttributes<HTMLUListElement> & {
  variant: "list";
  colour?: Colour;
};

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant: "link" | "smallLink";
  colour?: Colour;
};

type TextProps =
  | (React.HTMLAttributes<HTMLParagraphElement> & {
      variant?: Exclude<TextVariant, "list" | "link" | "smallLink">;
      colour?: Colour;
    })
  | ListProps
  | LinkProps;

const isListVariant = (props: TextProps): props is ListProps =>
  props.variant === "list";

const isLinkVariant = (props: TextProps): props is LinkProps =>
  props.variant === "link" || props.variant === "smallLink";

export const Text = (props: TextProps) => {
  if (isListVariant(props)) {
    return (
      <ul
        {...props}
        className={`${variantStyles[props.variant]} text-${colours[props.colour ?? "foreground"]} ${props.className || ""}`}
      >
        <li>{props.children}</li>
      </ul>
    );
  }

  if (isLinkVariant(props)) {
    return (
      <a
        {...props}
        className={`${variantStyles[props.variant]} text-${colours[props.colour ?? "foreground"]} ${props.className || ""}`}
      >
        {props.children}
      </a>
    );
  }

  return (
    <p
      {...props}
      className={`${variantStyles[props.variant ?? "bodyRegular"]} text-${colours[props.colour ?? "foreground"]} ${props.className || ""}`}
    >
      {props.children}
    </p>
  );
};
