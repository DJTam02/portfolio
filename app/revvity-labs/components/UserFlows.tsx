import { Flex, LiquidGlass, Text } from "@/app/ui-components";
import { SectionHeader } from "@/app/components";
import Image from "next/image";
import { useGetBreakpointValue } from "@/app/hooks";

export const UserFlows = ({ id }: { id: string }) => {
  const { getBreakpointValue } = useGetBreakpointValue();

  return (
    <Flex id={id} direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
      <SectionHeader
        title="User Flows 🔀"
        description={
          <>
            With research insights in hand, I mapped out the{" "}
            <span className="italic font-instrument">core workflows</span> that
            would drive our design.
          </>
        }
      />
      <Flex direction="col" className="gap-3 tablet:gap-4 laptop:gap-3">
        <Flex direction="col" className="gap-2 laptop:gap-3">
          <Text className="tablet:text-[16px] laptop:text-[18px]">
            Findings from user interviews helped us validate a primary and
            secondary use case to design around. From there, we mapped the core
            end-to-end journey a scientist would take through the Literature
            Summarization Agent. This became the backbone of our MVP, ensuring
            every design decision could be traced back to a validated user need.
          </Text>
          <Text className="tablet:text-[16px] laptop:text-[18px]">
            The research team also mapped extended workflows for future agents,
            laying the groundwork for post-MVP multi-agent functionality.
          </Text>
        </Flex>
        <Flex direction="col">
          <Image
            src="/images/revvity-labs/user-flows.png"
            alt="User Flows"
            width={2840}
            height={1528}
            className="w-full h-auto"
          />
          <Flex
            direction="col"
            className="tablet:flex-row gap-2 tablet:gap-4 desktop:gap-6 laptop:px-4 mt-[-16px] laptop:mt-[-24px]"
          >
            <LiquidGlass
              wrapperClassname="gap-1 px-4 py-3 tablet:gap-2 tablet:px-5 tablet:py-4 laptop:px-4 laptop:py-6 !flex-col bg-liquid-glass-light"
              borderRadius={getBreakpointValue([8, 12, 16, 16])}
              style={{ width: "100%", height: "100%" }}
            >
              <Text className="text-[18px] font-bold laptop:text-2xl laptop:font-normal">
                Primary Users 🔬
              </Text>
              <Text className="tablet:text-[16px] laptop:text-[18px]">
                Scientists who want to streamline their literature summarization
                workflow.
              </Text>
            </LiquidGlass>
            <LiquidGlass
              wrapperClassname="gap-1 px-4 py-3 tablet:gap-2 tablet:px-5 tablet:py-4 laptop:px-4 laptop:py-6 !flex-col bg-liquid-glass-light"
              borderRadius={getBreakpointValue([8, 12, 16, 16])}
              style={{ width: "100%", height: "100%" }}
            >
              <Text className="text-[18px] font-bold laptop:text-2xl laptop:font-normal">
                Secondary Users 📚
              </Text>
              <Text className="tablet:text-[16px] laptop:text-[18px]">
                First-time users who want to discover what the agent can do for
                them
              </Text>
            </LiquidGlass>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
