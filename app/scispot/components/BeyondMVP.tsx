import { Callout, Flex, LiquidGlass, Text } from "@/app/ui-components";
import { SectionHeader } from "@/app/components";
import Image from "next/image";
import { useGetBreakpointValue } from "@/app/hooks";

export const BeyondMVP = ({ id }: { id: string }) => {
  const { getBreakpointValue } = useGetBreakpointValue();

  return (
    <Flex id={id} direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
      <SectionHeader
        title="Beyond MVP 💡"
        description={
          <>
            The biggest gap we identified had{" "}
            <span className="italic font-instrument">no existing solution</span>
            , so I proposed one.
          </>
        }
      />
      <Text className="tablet:text-[16px] laptop:text-[18px]">
        Our competitive analysis revealed that no tool on the market supported
        multiple AI agents contributing to a shared scientific workflow. This
        felt like the most significant opportunity, and it pushed me to think
        beyond conventional AI product patterns. My proposed solution was an
        environment inspired by team messaging apps like Slack and Microsoft
        Teams.
      </Text>
      <Callout>
        <Text className="text-[16px] tablet:text-[18px] laptop:text-2xl">
          Imagine a messaging app where teams can collaborate while
          simultaneously interacting with multiple AI agents, each agent
          contributing ideas and insights in real time.
        </Text>
      </Callout>
      <Flex direction="col" className="laptop:flex-row laptop:gap-6 relative">
        <Image
          src="/images/revvity-labs/revvity-labs-chat.png"
          alt="Revvity Labs Chat"
          width={4096}
          height={2148}
          className="h-auto min-w-0 flex-1"
        />
        <Flex
          direction="row"
          className="mt-[-24px] tablet:mt-[-80px] laptop:mt-0"
          alignItems="center"
        >
          <Flex
            direction="col"
            alignItems="center"
            className="flex-1 tablet:min-h-[248px] laptop:w-[358px] desktop:w-[411px] h-full hidden tablet:block overflow-hidden bg-[url('/images/revvity-labs/revvity-labs-chat-mock.png')] bg-cover bg-center"
          />
          <Flex className="tablet:ml-[-20px] laptop:ml-0 laptop:absolute laptop:bottom-2 laptop:right-27 desktop:right-46 desktop:bottom-4 laptop:w-100 w-full flex-1 min-w-0">
            <LiquidGlass
              wrapperClassname="gap-1 px-4 py-3 tablet:gap-2 tablet:px-5 tablet:py-4 laptop:py-4 laptop:px-6 !flex-col bg-[rgba(24,24,24,0.40)]"
              borderRadius={getBreakpointValue([8, 12, 16, 16])}
              style={{ width: "100%", height: "100%" }}
              overLight
            >
              <Text className="text-[16px] tablet:text-[18px]">
                Some rapid-prototyping done with the help of V0, an AI-powered
                agentic development tool.
              </Text>
            </LiquidGlass>
          </Flex>
        </Flex>
      </Flex>
      <Text className="tablet:text-[16px] laptop:text-[18px]">
        The concept resonated immediately across the team. But with only three
        days to ship, we made the deliberate call to scope it to post-MVP. Even
        though multi-agent collaboration was off the table for now, we made sure
        every decision kept the door open for it. We avoided patterns that would
        be difficult to scale into a collaborative interface later.
      </Text>
    </Flex>
  );
};
