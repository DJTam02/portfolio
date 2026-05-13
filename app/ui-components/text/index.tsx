import React from "react";
import { TextVariant } from "./types";
import { variantStyles } from "./constants";
import { Colour, colours } from "../styles";

type ListProps = React.HTMLAttributes<HTMLUListElement> & {
  variant: "list";
  colour?: Colour;
};

type TextProps =
  | (React.HTMLAttributes<HTMLParagraphElement> & {
      variant?: Exclude<TextVariant, "list">;
      colour?: Colour;
    })
  | (React.HTMLAttributes<HTMLUListElement> & {
      variant: "list";
      colour?: Colour;
    });

const isListVariant = (props: TextProps): props is ListProps =>
  props.variant === "list";

export const Text = (props: TextProps) => {
  return isListVariant(props) ? (
    <ul
      className={`${variantStyles[props.variant]} text-${colours[props.colour ?? "foreground"]} ${props.className || ""}`}
      {...props}
    >
      <li>{props.children}</li>
    </ul>
  ) : (
    <p
      className={`${variantStyles[props.variant ?? "bodyRegular"]} text-${colours[props.colour ?? "foreground"]} ${props.className || ""}`}
      {...props}
    >
      {props.children}
    </p>
  );
};
