import { SectionHeader } from "@/app/components";
import { Flex, Text } from "@/app/ui-components";
import Image from "next/image";

export const ProblemScoping = ({ id }: { id: string }) => {
  return (
    <Flex id={id} direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
      <SectionHeader
        title="Problem Scoping 📋"
        description={
          <>
            With only three days to ship a functional prototype,{" "}
            <span className="italic font-instrument">ruthless scoping</span> was
            instrumental.
          </>
        }
      />
      <Text className="tablet:text-[16px] laptop:text-[18px]">
        We opened the sprint by meeting with each workstream (research, design,
        and engineering) to map out responsibilities, dependencies, and
        blockers. Tasks were bucketed into three categories: research to
        complete, decisions to finalize, and designs to produce.{" "}
        <b>Our goal:</b> keep all teams working in sync to maintain momentum
        throughout the sprint.
      </Text>
      <Image
        src="/images/revvity-labs/scoping.png"
        alt="FigJam"
        width={1906}
        height={750}
        className="w-full h-auto"
      />
    </Flex>
  );
};
