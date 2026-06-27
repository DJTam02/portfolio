import { SectionHeader } from "@/app/components";
import { Flex, LiquidGlass, Text } from "@/app/ui-components";
import Image from "next/image";
import { useGetBreakpointValue } from "@/app/hooks";

export const MarketResearch = ({ id }: { id: string }) => {
  const { getBreakpointValue } = useGetBreakpointValue();

  return (
    <Flex id={id} direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
      <SectionHeader
        title="Market Research 📈"
        description={
          <>
            I assessed the gaps in the existing landscape of{" "}
            <span className="italic font-instrument">AI research tools.</span>
          </>
        }
      />
      <Text className="tablet:text-[16px] laptop:text-[18px]">
        There weren&apos;t many direct competitors in the life sciences AI
        space, which told us something important: the market was early, and
        there was real room to define what a state-of-the-art tool could look
        like. I analyzed existing AI research platforms and adapted insights
        from adjacent spaces to fit our context. Below are some gaps that stood
        out.
      </Text>
      <Flex direction="col">
        <Image
          src="/images/revvity-labs/research.png"
          alt="Market Research"
          width={1922}
          height={727}
          className="w-full h-auto bg-no-repeat bg-cover"
        />
        <Flex
          direction="col"
          className="gap-3 tablet:gap-4 desktop:gap-6 laptop:flex-row laptop:mt-[-24px] mt-[-16px]"
        >
          <Flex
            direction="col"
            className="tablet:flex-row gap-3 tablet:gap-4 desktop:gap-6 flex-1"
          >
            <LiquidGlass
              wrapperClassname="gap-1 px-4 py-3 tablet:gap-2 tablet:px-5 tablet:py-4 laptop:px-4 laptop:py-6 !flex-col bg-liquid-glass-light"
              borderRadius={getBreakpointValue([8, 12, 16, 16])}
              style={{ width: "100%", height: "100%" }}
            >
              <Text className="text-[18px] font-bold laptop:text-2xl laptop:font-normal">
                Limited integration
              </Text>
              <Text className="tablet:text-[16px] laptop:text-[18px]">
                Most AI tools don&apos;t integrate deeply with scientific
                databases or support lab-specific workflows.
              </Text>
            </LiquidGlass>
            <LiquidGlass
              wrapperClassname="gap-1 px-4 py-3 tablet:gap-2 tablet:px-5 tablet:py-4 laptop:px-4 laptop:py-6 !flex-col bg-liquid-glass-light"
              borderRadius={getBreakpointValue([8, 12, 16, 16])}
              style={{ width: "100%", height: "100%" }}
            >
              <Text className="text-[18px] font-bold laptop:text-2xl laptop:font-normal">
                Workflow limitations
              </Text>
              <Text className="tablet:text-[16px] laptop:text-[18px]">
                Relying solely on conversational UI limits functionality for
                users who prefer to browse and scan results quickly.
              </Text>
            </LiquidGlass>
          </Flex>
          <Flex
            direction="col"
            className="tablet:flex-row gap-3 tablet:gap-4 desktop:gap-6 flex-1"
          >
            <LiquidGlass
              wrapperClassname="gap-1 px-4 py-3 tablet:gap-2 tablet:px-5 tablet:py-4 laptop:px-4 laptop:py-6 !flex-col bg-liquid-glass-light"
              borderRadius={getBreakpointValue([8, 12, 16, 16])}
              style={{ width: "100%", height: "100%" }}
            >
              <Text className="text-[18px] font-bold laptop:text-2xl laptop:font-normal">
                Not built for enterprise labs
              </Text>
              <Text className="tablet:text-[16px] laptop:text-[18px]">
                Few tools account for reproducibility, audit trails, or the
                standardized processes that enterprise lab environments require.
              </Text>
            </LiquidGlass>
            <LiquidGlass
              wrapperClassname="gap-1 px-4 py-3 tablet:gap-2 tablet:px-5 tablet:py-4 laptop:px-4 laptop:py-6 !flex-col bg-liquid-glass-light"
              borderRadius={getBreakpointValue([8, 12, 16, 16])}
              style={{ width: "100%", height: "100%" }}
            >
              <Text className="text-[18px] font-bold laptop:text-2xl laptop:font-normal">
                No multi-agent support
              </Text>
              <Text className="tablet:text-[16px] laptop:text-[18px]">
                No existing tool supports multiple AI agents contributing to a
                shared workflow in real time, which was the{" "}
                <b>biggest differentiator</b> we identified.
              </Text>
            </LiquidGlass>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
