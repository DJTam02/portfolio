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
            I ran two separate critique sessions deliberately, with{" "}
            <i className="font-instrument">different audiences</i>.
          </>
        }
      />
      <Flex direction="col" className="gap-2 laptop:gap-3">
        <Text className="tablet:text-[16px] laptop:text-[18px]">
          Rather than gathering all feedback in one session, I split critique
          across two teams with different lenses:
        </Text>
        <Text
          variant="list"
          className="text-[14px] tablet:text-[16px] laptop:text-[18px] font-normal"
        >
          With the engineering team, I focused on <b>feasibility</b>: flagging
          interactions that might introduce technical debt or be unrealistic
          within our timeline.
        </Text>
        <Text
          variant="list"
          className="text-[14px] tablet:text-[16px] laptop:text-[18px] font-normal"
        >
          With the customer success team, I focused on <b>real-world usage</b>:
          they knew which workflows customers called in most often for help,
          which grounded my designs in actual pain points rather than assumed
          ones.
        </Text>
        <Text className="tablet:text-[16px] laptop:text-[18px]">
          Separating these sessions was intentional. Mixing the two audiences
          tends to direct the conversation toward technical constraints, and
          overlook user behaviour insights.
        </Text>
      </Flex>
      <Image
        src="/images/scispot/design-critique.png"
        alt="Design Critique"
        width={1296}
        height={971}
        className="w-full h-auto bg-no-repeat bg-cover"
      />
    </Flex>
  );
};
