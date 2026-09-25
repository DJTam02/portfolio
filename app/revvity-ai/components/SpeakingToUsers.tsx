import { SectionHeader } from "@/app/components";
import { Callout, Flex, Text } from "@/app/ui-components";

export const SpeakingToUsers = ({ id }: { id: string }) => {
  return (
    <Flex id={id} direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
      <SectionHeader
        title="Speaking to Users 👥"
        description={
          <>
            To understand the real friction points, we went straight to the
            people <i className="font-instrument">already using</i> RevvityAI.
          </>
        }
      />
      <Text className="tablet:text-[16px] laptop:text-[18px]">
        We interviewed internal Revvity team members who used RevvityAI
        regularly. These were scientists and employees already embedded in the
        product, which meant their feedback reflected real workflow pain, not
        first impressions. A few pain points emerged.
      </Text>
      <Flex
        direction="col"
        className="tablet:flex-row gap-3 tablet:gap-4 laptop:gap-6"
      >
        <Callout
          style={{ width: "100%", height: "100%" }}
          wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center"
        >
          <Flex direction="col" className="gap-1 tablet:gap-2">
            <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
              Agents were hard to find
            </Text>
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              &quot;I didn&apos;t even realize there were more agents. I
              couldn&apos;t tell there was anything below the fold.&quot;
            </Text>
          </Flex>
        </Callout>
        <Callout
          style={{ width: "100%", height: "100%" }}
          wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center"
        >
          <Flex direction="col" className="gap-1 tablet:gap-2">
            <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
              Interactions behaved inconsistently
            </Text>
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              &quot;Sometimes clicking a suggestion switches the agent,
              sometimes it sends a message. I never know which one it&apos;ll
              do.&quot;
            </Text>
          </Flex>
        </Callout>
        <Callout
          style={{ width: "100%", height: "100%" }}
          wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center"
        >
          <Flex direction="col" className="gap-1 tablet:gap-2">
            <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
              No way to browse without a starting point
            </Text>
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              &quot;If I don&apos;t already know which agent I need, I have no
              idea where to begin.&quot;
            </Text>
          </Flex>
        </Callout>
      </Flex>
    </Flex>
  );
};
