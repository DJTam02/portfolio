import { Flex, LiquidGlass, Text } from "@/app/ui-components";
import { SectionHeader } from "@/app/components";
import { useGetBreakpointValue } from "@/app/hooks";

export const FinalDecisions = ({ id }: { id: string }) => {
  const { getBreakpointValue } = useGetBreakpointValue();
  return (
    <Flex id={id} direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
      <SectionHeader
        title="Final Designs 🖥️"
        description={
          <>
            Finally, I translated high-fidelity designs into a{" "}
            <i className="font-instrument">functional prototype</i> ready for
            beta launch.
          </>
        }
      />
      <Text className="tablet:text-[16px] laptop:text-[18px]">
        After three weeks, Plato shipped and scientists used it immediately.
        Perhaps the most rewarding part of this experience was seeing Plato in
        the hands of real scientists, doing real work.
      </Text>
      <LiquidGlass
        style={{ width: "100%", height: "100%" }}
        borderRadius={getBreakpointValue([8, 12, 16, 16])}
        wrapperClassname="!flex-col items-stretch"
      >
        <div className="laptop:p-8 tablet:6 p-3 h-full bg-liquid-glass-lightest">
          <video
            src="/videos/scispot/demo.mov"
            autoPlay
            muted
            loop
            playsInline
            controls
            className="w-full h-auto"
          />
        </div>
      </LiquidGlass>
    </Flex>
  );
};
