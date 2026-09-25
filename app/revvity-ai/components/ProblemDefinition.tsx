import { Callout, Flex, Text } from "@/app/ui-components";
import { SectionHeader } from "@/app/components";
import { useGetBreakpointValue } from "@/app/hooks";
import Image from "next/image";

export const ProblemDefinition = ({ id }: { id: string }) => {
  const { getBreakpointValue } = useGetBreakpointValue();

  return (
    <Flex id={id} direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
      <SectionHeader
        title="Problem Definition 🎯"
        description={
          <>
            RevvityAI was <i className="font-instrument">originally built</i>{" "}
            for five agents. The vision had grown to 100+.
          </>
        }
      />
      <Flex direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
        <Flex
          direction="col"
          className="gap-3 tablet:gap-4 laptop:gap-6 laptop:flex-row"
        >
          <Flex direction="col" className="gap-2 laptop:gap-3 flex-1">
            <Text className="tablet:text-[16px] laptop:text-[18px] flex-1 min-w-0">
              RevvityAI is an internal tool that started as a simple AI
              assistant with a handful of specialized agents, selectable from a
              basic dropdown. For five agents, this worked fine. But the product
              vision had expanded significantly: the team was building an
              ecosystem of 100+ agents, each tailored to a specific scientific
              domain or business function within Revvity.
            </Text>
            <Text className="tablet:text-[16px] laptop:text-[18px] flex-1 min-w-0">
              The existing interface wasn&apos;t built for that vision. With no
              way to browse, compare, or discover unfamiliar agents, users
              outside their immediate area of expertise had no path to finding
              what they needed.
            </Text>
          </Flex>
          <Callout
            style={{ width: getBreakpointValue(["100%", "100%", 504, 560]) }}
            wrapperClassname="laptop:!p-6 tablet:!p-4 !p-3"
          >
            <Text className="text-[16px] tablet:text-[18px] laptop:text-2xl">
              How might we design a scalable agentic experience that helps users
              confidently find and engage with the right AI agent among 100+
              options?
            </Text>
          </Callout>
        </Flex>
        <Image
          src="/images/revvity-ai/problem-definition.png"
          alt="Problem Definition"
          width={2680}
          height={1741}
          className="w-full h-auto"
        />
        <Flex direction="col" className="gap-2 laptop:gap-3">
          <Text className="tablet:text-[16px] laptop:text-[18px]">
            This mattered for two reasons.
          </Text>
          <ol className="list-decimal font-alegreya text-sm tablet:text-[16px] laptop:text-[18px] pl-3 tablet:pl-4 laptop:pl-5">
            <li>
              They were domain experts who knew exactly what they needed when
              they knew an agent existed, but had no mental model for agents
              outside their expertise.
            </li>
            <li>
              They were already embedded in active workflows. Any friction in
              agent selection didn&apos;t just slow them down, it pulled them
              out of a context that was expensive to rebuild.
            </li>
          </ol>
        </Flex>
      </Flex>
    </Flex>
  );
};
