import { SectionHeader } from "@/app/components";
import { Callout, Flex, Text } from "@/app/ui-components";

export const JobsToBeDone = ({ id }: { id: string }) => {
  return (
    <Flex id={id} direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
      <SectionHeader
        title="Jobs To Be Done 💼"
        description={
          <>
            Research surfaced two distinct{" "}
            <i className="font-instrument">Jobs To Be Done</i> that needed to be
            designed for separately.
          </>
        }
      />
      <Text className="tablet:text-[16px] laptop:text-[18px]">
        Not all users came to RevvityAI with the same intent. From our
        interviews, two clearly different Jobs To Be Done emerged, and designing
        a single flow that tried to serve both would have served neither well.
      </Text>
      <Flex
        direction="row"
        className="tablet:flex-row gap-3 tablet:gap-4 laptop:gap-6"
      >
        <Callout
          style={{ width: "100%", height: "100%" }}
          wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center"
        >
          <Flex direction="col" className="gap-1 tablet:gap-2">
            <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
              Users who know what they want
            </Text>
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              A scientist who uses the same agent daily doesn&apos;t need to
              browse. They need to find their agent quickly and get back to
              work. Every extra step between opening RevvityAI and starting a
              conversation was friction we needed to eliminate.
            </Text>
          </Flex>
        </Callout>
        <Callout
          style={{ width: "100%", height: "100%" }}
          wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center"
        >
          <Flex direction="col" className="gap-1 tablet:gap-2">
            <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
              Users who don&apos;t know what they want
            </Text>
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              A new employee or someone exploring agents outside their domain
              had no starting point. For them, the product needed to feel less
              like a tool and more like a catalogue. They need to be able to
              browse, read, and explore without committing to a conversation.
            </Text>
          </Flex>
        </Callout>
      </Flex>
      <Text className="tablet:text-[16px] laptop:text-[18px]">
        These two workflows became the backbone of every design decision that
        followed. Every layout, every interaction, every placement choice was
        evaluated against one question: does this work for both types of users
        without forcing either one to compromise?
      </Text>
    </Flex>
  );
};
