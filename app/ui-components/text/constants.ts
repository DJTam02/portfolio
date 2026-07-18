import { TextVariant } from "./types";

export const variantStyles: Record<TextVariant, string> = {
  title: "text-[312px] italic font-instrument leading-[120%]",
  h2: "text-[40px] [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] font-alegreya leading-[120%]",
  h3: "text-[32px] font-alegreya leading-[120%]",
  h4: "text-2xl font-alegreya leading-[120%]",
  h2Serif: "text-[40px] italic font-instrument leading-[120%]",
  h3Serif: "text-[32px] italic font-instrument leading-[120%]",
  h4Serif: "text-2xl italic font-instrument leading-[120%]",
  link: "text-2xl font-alegreya leading-[120%]",
  smallLink: "text-sm font-alegreya leading-[120%]",
  button: "text-2xl font-alegreya first-letter:uppercase leading-[120%]",
  bodyLarge: "text-2xl font-light font-alegreya",
  bodyRegular: "text-sm font-alegreya leading-[120%]",
  list: "text-2xl font-light font-alegreya list-disc pl-5 leading-[120%]",
};
