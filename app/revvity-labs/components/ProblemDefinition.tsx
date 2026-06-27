import { Callout, Flex, Text } from "@/app/ui-components";
import { SectionHeader } from "@/app/components";
import { useGetBreakpointValue } from "@/app/hooks";

export const ProblemDefinition = ({ id }: { id: string }) => {
  const { getBreakpointValue } = useGetBreakpointValue();

  return (
    <Flex id={id} direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
      <SectionHeader
        title="Problem Definition 🎯"
        description={
          <>
            To create a novel product, I first needed to{" "}
            <span className="italic font-instrument">understand the gap</span>{" "}
            in scientists&apos; research workflows.
          </>
        }
      />
      <Flex
        direction="col"
        className="gap-3 tablet:gap-4 laptop:gap-6 desktop:gap-10 laptop:flex-row"
      >
        <Text className="tablet:text-[16px] laptop:text-[18px] flex-1 min-w-0">
          In a typical experiment lifecycle, scientists must review as many
          papers as possible across similar research domains. They will study
          the methodologies, then decide which parameters to tweak and
          experiment with.{" "}
          <b>
            The bottleneck isn&apos;t the science, it&apos;s the literature.
          </b>{" "}
          Researchers are spending a substantial amount of time sifting and
          synthesizing papers before they could even begin designing
          experiments.
        </Text>
        <Callout
          style={{ width: getBreakpointValue(["100%", "100%", 610, 828]) }}
        >
          <Text className="text-[16px] tablet:text-[18px] laptop:text-2xl">
            How might we leverage AI to help scientific researchers rapidly
            summarize and surface the most relevant literature, enabling them to
            design and execute experiments with greater speed and confidence?
          </Text>
        </Callout>
      </Flex>
    </Flex>
  );
};
