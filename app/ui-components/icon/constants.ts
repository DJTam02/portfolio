import { ArrowDown } from "./icons/ArrowDown";
import { ArrowRight } from "./icons/ArrowRight";
import { ArrowUpRight } from "./icons/ArrowUpRight";
import { ChevronDown } from "./icons/ChevronDown";
import { ChevronUp } from "./icons/ChevronUp";
import { Close } from "./icons/Close";
import { Menu } from "./icons/Menu";
import { Icons, IconSizeProps } from "./types";

export const icons: Record<Icons, React.FC<IconSizeProps>> = {
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  close: Close,
  menu: Menu,
  arrowDown: ArrowDown,
};
