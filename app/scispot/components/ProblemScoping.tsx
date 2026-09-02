import { SectionHeader } from "@/app/components";
import { Callout, Flex, Text } from "@/app/ui-components";
import Image from "next/image";

export const ProblemScoping = ({ id }: { id: string }) => {
  return (
    <Flex id={id} direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
      <SectionHeader
        title="Problem Scoping 📋"
        description={
          <>
            With user pain points in hand, I mapped them against what Plato
            could <i className="font-instrument">already do</i>.
          </>
        }
      />
      <Text className="tablet:text-[16px] laptop:text-[18px]">
        The AI backend had already been built by the engineering team, so
        Plato&apos;s capabilities were set. My job wasn&apos;t to define what
        the agent could do, but to figure out which of those capabilities most
        directly addressed the pain points we&apos;d uncovered, and design an
        experience that made them accessible to users encountering AI for the
        first time.
      </Text>
      <Image
        src="/images/scispot/figjam.png"
        alt="FigJam"
        width={2628}
        height={1658}
        className="w-full h-auto"
      />
      <Text className="text-2xl laptop:text-[40px]">
        I guided my team to the <i className="font-instrument">main features</i>{" "}
        for the MVP.
      </Text>
      <Text className="tablet:text-[16px] laptop:text-[18px]">
        These unique constraints framed scoping as a matching exercise: user
        pain points on one side, AI capabilities on the other. Three pain points
        drove our MVP scope:
      </Text>
      <Callout
        style={{ width: "100%", height: "100%" }}
        wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center"
      >
        <Flex direction="col" className="gap-1 tablet:gap-2">
          <Text className="text-[18px] laptop:text-2xl laptop:font-normal">
            Fragmented workflows → unified entry point
          </Text>
          <Text className="tablet:text-[16px] laptop:text-[18px]">
            Scientists were context-switching between three products to complete
            the same task. Plato needed a single, centralized home that felt
            native to their existing workflow.
          </Text>
        </Flex>
      </Callout>
      <Callout
        style={{ width: "100%", height: "100%" }}
        wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center"
      >
        <Flex direction="col" className="gap-1 tablet:gap-2">
          <Text className="text-[18px] laptop:text-2xl laptop:font-normal">
            Low feature discoverability → guided AI suggestions
          </Text>
          <Text className="tablet:text-[16px] laptop:text-[18px]">
            Low feature discoverability → guided AI suggestions Users
            didn&apos;t know what the platform could do. Plato needed to
            proactively surface its capabilities rather than waiting to be
            asked.
          </Text>
        </Flex>
      </Callout>
      <Callout
        style={{ width: "100%", height: "100%" }}
        wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center"
      >
        <Flex direction="col" className="gap-1 tablet:gap-2">
          <Text className="text-[18px] laptop:text-2xl laptop:font-normal">
            AI skepticism → seamless, low-friction integration to existing
            platform
          </Text>
          <Text className="tablet:text-[16px] laptop:text-[18px]">
            Scientists were unfamiliar with AI and unlikely to trust it
            immediately. Plato needed to feel like a natural extension of
            existing workflows, not a new tool to learn.
          </Text>
        </Flex>
      </Callout>
    </Flex>
  );
};
