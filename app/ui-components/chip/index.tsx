import { Text } from "../text";

export const Chip = ({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`rounded-full bg-background px-4 py-3 ${className}`}
      {...rest}
    >
      <Text className="text-[18px]">{children}</Text>
    </div>
  );
};
