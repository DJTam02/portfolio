import { Flex, Text } from "@/app/ui-components";
import { SectionHeader } from "@/app/components";
import Image from "next/image";

export const UserFlows = ({ id }: { id: string }) => {
  return (
    <Flex id={id} direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
      <SectionHeader
        title="User Flows 🔀"
        description={
          <>
            With research and scope locked, I mapped the{" "}
            <i className="font-instrument">end-to-end journey</i> a scientist
            would take through Plato.
          </>
        }
      />
      <Flex direction="col" className="gap-2 laptop:gap-3">
        <Text className="tablet:text-[16px] laptop:text-[18px]">
          Given our strict timeline, I kept this phase simple: quick paper
          sketches validated with the team before moving into wireframes. The
          biggest challenge in mapping flows wasn&apos;t the happy path, it was
          the entry points. Since fragmented navigation was the core problem we
          were solving, I spent most of this phase focused on two questions:
        </Text>
        <Text
          variant="list"
          className="tablet:text-[16px] laptop:text-[18px] font-normal"
        >
          Where in the existing platform does a scientist&apos;s plate workflow
          naturally begin?
        </Text>
        <Text
          variant="list"
          className="tablet:text-[16px] laptop:text-[18px] font-normal"
        >
          How do we get users from their current context into Plato without
          breaking their flow?
        </Text>
      </Flex>
      <Image
        src="/images/scispot/user-journey.png"
        alt="User Journey"
        width={2179}
        height={957}
        className="w-full h-auto bg-no-repeat bg-cover"
      />
    </Flex>
  );
};
