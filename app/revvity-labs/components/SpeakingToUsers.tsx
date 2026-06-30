import { SectionHeader } from "@/app/components";
import { Callout, Flex, Text } from "@/app/ui-components";

export const SpeakingToUsers = ({ id }: { id: string }) => {
  return (
    <Flex id={id} direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
      <SectionHeader
        title="Speaking to Users 👥"
        description={
          <>
            We spoke with{" "}
            <span className="italic font-instrument">scientists</span> to
            understand how they actually do research.
          </>
        }
      />
      <Text className="tablet:text-[16px] laptop:text-[18px]">
        On the first day, the design and research teams worked in parallel.
        While researchers conducted interviews, design conducted market research
        while staying up to date on findings so they could directly inform
        design decisions. Two scientists across different research domains were
        interviewed, surfacing three recurring themes:
      </Text>
      <Flex
        direction="col"
        className="tablet:flex-row gap-3 tablet:gap-4 laptop:gap-6"
      >
        <Callout
          style={{ width: "100%", height: "100%" }}
          wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center"
        >
          <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
            Lack of control over AI
          </Text>
          <Text className="tablet:text-[16px] laptop:text-[18px]">
            &quot;I want to be able to decide when to use AI and when to do
            manual work.&quot;
          </Text>
        </Callout>
        <Callout
          style={{ width: "100%", height: "100%" }}
          wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center"
        >
          <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
            Fear of getting stuck
          </Text>
          <Text className="tablet:text-[16px] laptop:text-[18px]">
            &quot;If the agent gives explores a path different than what I had
            in mind, I need to be able to go back and try a different
            path.&quot;
          </Text>
        </Callout>
        <Callout
          style={{ width: "100%", height: "100%" }}
          wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center"
        >
          <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
            Distrust of fully automated decisions
          </Text>
          <Text className="tablet:text-[16px] laptop:text-[18px]">
            &quot;I wouldn&apos;t let AI just pick papers for me. I still need
            to read them myself.&quot;
          </Text>
        </Callout>
      </Flex>
    </Flex>
  );
};
