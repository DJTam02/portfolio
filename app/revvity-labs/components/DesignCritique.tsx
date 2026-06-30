import { Flex, Text } from "@/app/ui-components";
import { SectionHeader } from "@/app/components";
import Image from "next/image";

export const DesignCritique = ({ id }: { id: string }) => {
  return (
    <Flex id={id} direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
      <SectionHeader
        title="Design Critique 👍"
        description={
          <>
            I prioritized{" "}
            <span className="italic font-instrument">
              frequent, early feedback
            </span>{" "}
            over late, polished reviews.
          </>
        }
      />
      <Text className="tablet:text-[16px] laptop:text-[18px]">
        With no time for multiple high-fidelity iterations, we ran rapid
        critique sessions across all workstreams in low-fidelity. Most feedback
        centered around one theme: <b>state visibility</b>. Users needed to
        always know what the agent was doing, what parameters it was using, and
        where they were in the workflow.
      </Text>
      <Image
        src="/images/revvity-labs/design-critique.png"
        alt="Design Critique"
        width={2854}
        height={1676}
        className="w-full h-auto bg-no-repeat bg-cover"
      />
    </Flex>
  );
};
