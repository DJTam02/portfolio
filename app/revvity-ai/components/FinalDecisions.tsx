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
            The final designs weren&apos;t a collection of individual fixes,
            they were a <i className="font-instrument">system</i>.
          </>
        }
      />
      <Text className="tablet:text-[16px] laptop:text-[18px]">
        The side panel gave agents a dedicated home. The trigger button kept
        selection anchored to the chat. The separated landing page gave prompts
        room to breathe. Together, they turned a product that worked for five
        agents into one that could credibly handle 100+.
      </Text>
      <LiquidGlass
        style={{ width: "100%", height: "100%" }}
        borderRadius={getBreakpointValue([8, 12, 16, 16])}
        wrapperClassname="!flex-col items-stretch"
      >
        <div className="laptop:p-8 tablet:6 p-3 h-full bg-liquid-glass-lightest">
          <video
            src="/videos/revvity-ai/final.mov"
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
