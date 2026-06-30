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

/** Tailwind spacing scale: size 4 = 1rem (16px). */
function getIconSizePx(size: number) {
  return size * 4;
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
  const dimensionPx = getIconSizePx(size);

  return (
    <span
      className={`box-content inline-flex shrink-0 items-center justify-center w-${size} h-${size} ${onClick ? "cursor-pointer" : ""} ${className}`}
      {...rest}
    >
      <IconComponent
        width={scaleIcon ? dimensionPx : undefined}
        height={scaleIcon ? dimensionPx : undefined}
      />
    </span>
  );
};
