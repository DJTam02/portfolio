import { Flex, Text } from "@/app/ui-components";
import { SectionHeader } from "@/app/components";

export const LowFidelity = ({ id }: { id: string }) => {
  return (
    <Flex id={id} direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
      <SectionHeader
        title="Beyond MVP 💡"
        description={
          <>
            The biggest gap we identified had{" "}
            <span className="italic font-instrument">no existing solution</span>
            , so I proposed one.
          </>
        }
      />
    </Flex>
  );
};
