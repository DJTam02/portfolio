import { Flex, Icon, Text } from "@/app/ui-components";
import { HTMLAttributes } from "react";
import { useGetBreakpointValue } from "@/app/hooks";

export const ProblemPoint = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const { getBreakpointValue } = useGetBreakpointValue();
  return (
    <Flex
      direction="row"
      className={`${className} gap-1.5 tablet:gap-2 !items-start`}
      {...props}
    >
      <Icon
        name="closeSmall"
        size={getBreakpointValue([1.5, 1.75, 2, 2])}
        className="bg-red rounded-full laptop:p-2 tablet:p-1.5 p-1.25"
        scaleIcon
      />
      <Text className="tablet:text-[16px] laptop:text-[18px]">{children}</Text>
    </Flex>
  );
};
