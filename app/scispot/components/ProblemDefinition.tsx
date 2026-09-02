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
            To design the right solution, I first needed to understand why the
            existing workflow was <i className="font-instrument">broken</i>.
          </>
        }
      />
      <Flex direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
        <Text className="tablet:text-[16px] laptop:text-[18px] flex-1 min-w-0">
          Scispot had three core products: a data collection and analysis tool,
          a note-taking app, and a lab process tracker. Each had its own
          experience of managing plates. For scientists juggling all three, this
          fragmentation created constant friction.
        </Text>
        <Flex
          direction="col"
          className="gap-3 tablet:gap-4 laptop:gap-6 tablet:flex-row"
        >
          <Callout
            style={{ width: "100%", height: "100%" }}
            wrapperClassname="laptop:!p-6 tablet:!p-4 !p-3 !border-l-error"
          >
            <Text className="text-[16px] tablet:text-[18px] laptop:text-2xl">
              Multiple entry points for same or similar tasks.
            </Text>
          </Callout>
          <Callout
            style={{ width: "100%", height: "100%" }}
            wrapperClassname="laptop:!p-6 tablet:!p-4 !p-3 !border-l-error"
          >
            <Text className="text-[16px] tablet:text-[18px] laptop:text-2xl">
              Inconsistent experiences across products.
            </Text>
          </Callout>
          <Callout
            style={{ width: "100%", height: "100%" }}
            wrapperClassname="laptop:!p-6 tablet:!p-4 !p-3 !border-l-error"
          >
            <Text className="text-[16px] tablet:text-[18px] laptop:text-2xl">
              Steep learning curve left key features undiscovered and unused.
            </Text>
          </Callout>
        </Flex>
        <Text className="tablet:text-[16px] laptop:text-[18px]">
          <b>Holdup — what are plates? </b>Plates are the flat, grid-like
          equipment scientists use to store and analyze biological samples.
          Managing them is a core, recurring task in most lab workflows.
        </Text>
      </Flex>
    </Flex>
  );
};
