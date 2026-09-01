import { SectionHeader } from "@/app/components";
import { Callout, Flex, Text } from "@/app/ui-components";

export const SpeakingToUsers = ({ id }: { id: string }) => {
  return (
    <Flex id={id} direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
      <SectionHeader
        title="Speaking to Users 👥"
        description={
          <>
            To ground my decisions in real behaviour, I went back to the source:{" "}
            <i className="font-instrument">real user</i> interviews.
          </>
        }
      />
      <Flex direction="col" className="gap-2 laptop:gap-3">
        <Text className="tablet:text-[16px] laptop:text-[18px]">
          Rather than conducting new interviews, I reviewed previously recorded
          user calls and documented every pain point related to plate workflows.
          As I analyzed each session, I focused on three guiding questions:
        </Text>
        <ol className="list-decimal font-alegreya text-sm tablet:text-[16px] laptop:text-[18px] pl-3 tablet:pl-4 laptop:pl-5">
          <li>
            Where do users get stuck, and what workarounds do they reach for?
          </li>
          <li>
            Where do they need the most guidance: navigation, understanding
            features, or troubleshooting?
          </li>
          <li>
            How do users prioritize plate management tasks: are they
            goal-driven, or are they exploring?
          </li>
        </ol>
        <Text className="tablet:text-[16px] laptop:text-[18px]">
          The following three themes emerged:
        </Text>
      </Flex>
      <Flex
        direction="col"
        className="tablet:flex-row gap-3 tablet:gap-4 laptop:gap-6"
      >
        <Callout
          style={{ width: "100%", height: "100%" }}
          wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center"
        >
          <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
            Constant context switching
          </Text>
          <Text className="tablet:text-[16px] laptop:text-[18px]">
            &quot;Having to jump between different parts of the platform to
            complete the same task is really disruptive.&quot;
          </Text>
        </Callout>
        <Callout
          style={{ width: "100%", height: "100%" }}
          wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center"
        >
          <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
            Features go undiscovered
          </Text>
          <Text className="tablet:text-[16px] laptop:text-[18px]">
            &quot;I didn&apos;t even know that existed. I&apos;ve been doing it
            manually this whole time.&quot;
          </Text>
        </Callout>
        <Callout
          style={{ width: "100%", height: "100%" }}
          wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center"
        >
          <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
            AI feels foreign
          </Text>
          <Text className="tablet:text-[16px] laptop:text-[18px]">
            &quot;I wouldn&apos;t have thought to use AI for this. I&apos;m not
            sure I&apos;d trust it to get it right.&quot;
          </Text>
        </Callout>
      </Flex>
    </Flex>
  );
};
