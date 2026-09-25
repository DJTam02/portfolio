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
            No product had solved this exact problem, so I looked at how others
            had solved <i className="font-instrument">pieces</i> of it.
          </>
        }
      />
      <Flex direction="col" className="gap-2 laptop:gap-3">
        <Text className="tablet:text-[16px] laptop:text-[18px]">
          The most popular AI products on the market don&apos;t have armies of
          specialized agents, they have a handful of models. That meant there
          was no direct competitor to learn from. Instead, I broke the problem
          into its components and studied how existing products handled each
          one.
        </Text>
        <Text className="tablet:text-[16px] laptop:text-[18px]">
          One <b>pattern</b> emerged clearly: the right UI for agent selection
          scales with the number of options available.
        </Text>
      </Flex>
      <Flex direction="col">
        <Image
          src="/images/revvity-ai/market-research.png"
          alt="Market Research"
          width={1750}
          height={782}
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
              <Flex direction="col" className="gap-1 tablet:gap-2">
                <Text className="text-[18px] font-bold laptop:text-2xl laptop:font-normal">
                  Fewer than 5 agents
                </Text>
                <Text className="tablet:text-[16px] laptop:text-[18px]">
                  A dropdown within the chat box works fine. The options are few
                  enough to scan at a glance, and the selection stays close to
                  the user&apos;s focus area.
                </Text>
              </Flex>
            </LiquidGlass>
            <LiquidGlass
              wrapperClassname="gap-1 px-4 py-3 tablet:gap-2 tablet:px-5 tablet:py-4 laptop:px-4 laptop:py-6 !flex-col bg-liquid-glass-light"
              borderRadius={getBreakpointValue([8, 12, 16, 16])}
              style={{ width: "100%", height: "100%" }}
            >
              <Flex direction="col" className="gap-1 tablet:gap-2">
                <Text className="text-[18px] font-bold laptop:text-2xl laptop:font-normal">
                  More than 5 agents
                </Text>
                <Text className="tablet:text-[16px] laptop:text-[18px]">
                  A dedicated browsing experience becomes necessary. Products
                  like ChatGPT and Microsoft Copilot both introduced explore
                  pages as their model counts grew.
                </Text>
              </Flex>
            </LiquidGlass>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="col" className="gap-2 laptop:gap-3">
        <Text className="tablet:text-[16px] laptop:text-[18px]">
          Two additional principles carried across every product we studied:
        </Text>
        <Flex direction="col">
          <Text
            variant="list"
            className="text-[14px] tablet:text-[16px] laptop:text-[18px] font-normal"
          >
            <b>Discoverability requires structure</b>: Search, filters, and
            clear descriptions were the difference between users finding the
            right agent and giving up entirely.
          </Text>
          <Text
            variant="list"
            className="text-[14px] tablet:text-[16px] laptop:text-[18px] font-normal"
          >
            <b>Selection should never pull users away from their context</b>:
            The best implementations kept agent or model selection anchored near
            the user&apos;s active focus area, minimizing the distance between
            choosing and doing.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
