import { icons, iconSizes } from "./constants";
import { Icons, IconSize } from "./types";

interface IconProps extends Omit<
  React.HTMLAttributes<HTMLSpanElement>,
  "children"
> {
  name: Icons;
  size?: IconSize;
}

export const Icon = ({
  name,
  size = "m",
  className = "",
  onClick,
  ...rest
}: IconProps) => {
  const IconComponent = icons[name];
  return (
    <span
      className={`flex flex-col justify-center items-center ${onClick ? "cursor-pointer" : ""} ${iconSizes[size]} ${className}`}
      {...rest}
    >
      <IconComponent />
    </span>
  );
};
