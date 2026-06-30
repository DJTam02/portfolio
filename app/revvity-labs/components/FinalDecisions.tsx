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
            With an initial MVP locked, I leveraged V0 to{" "}
            <span className="italic font-instrument">vibe code</span> our
            designs into a demo-ready state.
          </>
        }
      />
      <Text className="tablet:text-[16px] laptop:text-[18px]">
        Given our team&apos;s strengths in design and backend development, and
        the time constraints, I used Vo (an AI-powered agentic development tool)
        to translate our high-fidelity Figma designs into a functional frontend
        prototype.
      </Text>
      <LiquidGlass
        style={{ width: "100%", height: "100%" }}
        borderRadius={getBreakpointValue([8, 12, 16, 16])}
        wrapperClassname="!flex-col items-stretch"
      >
        <div className="laptop:p-8 tablet:6 p-3 h-full bg-liquid-glass-lightest">
          <video
            src="/videos/revvity-labs/demo.mov"
            autoPlay
            muted
            loop
            playsInline
            controls
            className="w-full h-auto"
          />
        </div>
      </LiquidGlass>
      <Text className="tablet:text-[16px] laptop:text-[18px]">
        To close out the hackathon, I demoed the prototype to a group of
        Revvity&apos;s C-level executives, walking them through the full happy
        path, from an initial literature search to a refined, browsable set of
        results.
      </Text>
    </Flex>
  );
};
