import { TextVariant } from "./types";

export const variantStyles: Record<TextVariant, string> = {
  title: "text-[312px] italic font-instrument",
  h2: "text-[40px] [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] font-alegreya",
  h3: "text-[32px] font-alegreya",
  h4: "text-2xl font-alegreya",
  h2Serif: "text-[40px] italic font-instrument",
  h3Serif: "text-[32px] italic font-instrument",
  h4Serif: "text-2xl italic font-instrument",
  link: "text-2xl font-alegreya",
  smallLink: "text-sm font-alegreya",
  button: "text-2xl font-alegreya",
  bodyLarge: "text-2xl font-light font-alegreya",
  bodyRegular: "text-sm font-alegreya",
  list: "text-2xl font-light font-alegreya list-disc pl-5",
};
