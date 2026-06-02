import { ArrowRight } from "./icons/ArrowRight";
import { ArrowUpRight } from "./icons/ArrowUpRight";
import { ChevronDown } from "./icons/ChevronDown";
import { ChevronUp } from "./icons/ChevronUp";
import { Close } from "./icons/Close";
import { Menu } from "./icons/Menu";
import { Icons, IconSizeProps, IconSize } from "./types";

export const icons: Record<Icons, React.FC<IconSizeProps>> = {
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  close: Close,
  menu: Menu,
};

export const iconSizes: Record<IconSize, string> = {
  s: "w-[14px] h-[14px]",
  m: "w-4 h-4",
  l: "w-10 h-10",
};
