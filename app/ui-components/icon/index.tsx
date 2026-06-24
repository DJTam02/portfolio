import { icons } from "./constants";
import { Icons } from "./types";

interface IconProps extends Omit<
  React.HTMLAttributes<HTMLSpanElement>,
  "children"
> {
  name: Icons;
  size?: number;
  scaleIcon?: boolean;
}

export const Icon = ({
  name,
  size = 4,
  className = "",
  onClick,
  scaleIcon = false,
  ...rest
}: IconProps) => {
  const IconComponent = icons[name];
  return (
    <span
      className={`flex flex-col justify-center items-center ${onClick ? "cursor-pointer" : ""} w-${size} h-${size} ${className}`}
      {...rest}
    >
      <IconComponent
        width={scaleIcon ? size * 4 : undefined}
        height={scaleIcon ? size * 4 : undefined}
      />
    </span>
  );
};
