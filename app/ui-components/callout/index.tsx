import { LiquidGlass } from "../liquidGlass";
import { useGetBreakpointValue } from "@/app/hooks";

export const Callout = ({
  wrapperClassname,
  ...props
}: React.ComponentProps<typeof LiquidGlass>) => {
  const { getBreakpointValue } = useGetBreakpointValue();

  return (
    <LiquidGlass
      style={{ width: "100%" }}
      wrapperClassname={`${wrapperClassname} bg-liquid-glass-light px-4 py-3 border-l-2 tablet:border-l-4 border-l-foreground tablet:px-5 tablet:py-4 laptop:p-8 tablet:rounded-2xl rounded-lg`}
      borderRadius={getBreakpointValue([8, 12, 16, 16])}
      {...props}
    >
      {props.children}
    </LiquidGlass>
  );
};
