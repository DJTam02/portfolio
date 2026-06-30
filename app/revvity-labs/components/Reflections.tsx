import { Callout, Flex, Text } from "@/app/ui-components";
import { SectionHeader } from "@/app/components";

export const Reflections = ({ id }: { id: string }) => {
  return (
    <Flex id={id} direction="col" className="gap-10 laptop:gap-15">
      <Flex direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
        <SectionHeader
          title="Lessons Learned 🧑‍"
          description={
            <>
              What the{" "}
              <span className="italic font-instrument">three-day sprint</span>{" "}
              taught me.
            </>
          }
        />
        <Flex
          direction="col"
          className="gap-3 tablet:gap-4 laptop:gap-6 laptop:flex-row"
        >
          <Callout
            style={{ width: "100%", height: "100%" }}
            wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center laptop:!py-6 tablet:!py-4 tablet:!px-5 !px-4 !py-3"
          >
            <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
              Transparency is a core UX requirement in AI systems
            </Text>
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              Users need to understand how the AI arrived at a result. Showing
              parameters, context, and source traceability builds trust. This is
              especially critical when introducing AI to users who haven&apos;t
              worked with it before. Rather than designing for confidence, we
              designed for transparency and control, letting users evaluate AI
              outputs rather than blindly accepting them.
            </Text>
          </Callout>
          <Callout
            style={{ width: "100%", height: "100%" }}
            wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center laptop:!py-6 tablet:!py-4 tablet:!px-5 !px-4 !py-3"
          >
            <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
              Flexibility is critical for scientific workflowsLack of control
              over AI
            </Text>
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              Scientists approach research differently depending on where they
              are in their process. Designing for mode switching (chat when
              exploring, browse when reviewing) was a core requirement. For
              users still building trust with AI, staying in control of when the
              AI leads is what makes a product feel safe to use.
            </Text>
          </Callout>
        </Flex>
        <Flex
          direction="col"
          className="gap-3 tablet:gap-4 laptop:gap-6 laptop:flex-row"
        >
          <Callout
            style={{ width: "100%", height: "100%" }}
            wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center laptop:!py-6 tablet:!py-4 tablet:!px-5 !px-4 !py-3"
          >
            <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
              Scalability is both a UX and a systems problem
            </Text>
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              Even in MVP form, designs need to anticipate high-volume use
              cases. Every structural decision (the side panel, the mode toggle,
              the lightweight recovery paths) was made with scale in mind from
              the start.
            </Text>
          </Callout>
          <Callout
            style={{ width: "100%", height: "100%" }}
            wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center laptop:!py-6 tablet:!py-4 tablet:!px-5 !px-4 !py-3"
          >
            <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
              Scope discipline is a design skill
            </Text>
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              Ambitious ideas like the decision tree and multi-agent
              collaboration had to be deferred. Making those calls deliberately
              ensured the MVP stayed future-proofed, while allowing us to ship a
              refined, high-fidelity prototype in time.
            </Text>
          </Callout>
        </Flex>
      </Flex>

      <Flex direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
        <SectionHeader
          title="Next Steps 🪜‍"
          description={
            <>
              This project moved fast — here&apos;s where I&apos;d take it{" "}
              <span className="italic font-instrument">next</span>.
            </>
          }
        />
        <Flex
          direction="col"
          className="gap-3 tablet:gap-4 laptop:gap-6 laptop:flex-row"
        >
          <Callout
            style={{ width: "100%", height: "100%" }}
            wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center laptop:!py-6 tablet:!py-4 tablet:!px-5 !px-4 !py-3"
          >
            <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
              Usability testing with scientists
            </Text>
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              Run structured sessions to validate navigation patterns, visual
              hierarchy, and trust signals with real users. Since we are not
              scientists ourselves, some assumptions made during the sprint need
              to be stress-tested with the people who actually use this
              workflow.
            </Text>
          </Callout>
          <Callout
            style={{ width: "100%", height: "100%" }}
            wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center laptop:!py-6 tablet:!py-4 tablet:!px-5 !px-4 !py-3"
          >
            <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
              Post-MVP: multi-agent collaborative environment
            </Text>
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              Prototype the Slack-inspired multi-agent workspace we identified
              as our biggest market differentiator. Explore how scientists and
              AI agents can collaborate in a shared, real-time environment.
            </Text>
          </Callout>
        </Flex>
        <Flex
          direction="col"
          className="gap-3 tablet:gap-4 laptop:gap-6 laptop:flex-row"
        >
          <Callout
            style={{ width: "100%", height: "100%" }}
            wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center laptop:!py-6 tablet:!py-4 tablet:!px-5 !px-4 !py-3"
          >
            <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
              Scalable search management
            </Text>
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              Introduce advanced filtering, grouping, and export features
              designed to handle large result sets.
            </Text>
          </Callout>
          <Callout
            style={{ width: "100%", height: "100%" }}
            wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center laptop:!py-6 tablet:!py-4 tablet:!px-5 !px-4 !py-3"
          >
            <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
              Enhanced context control
            </Text>
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              Allow users to edit and save search parameters mid-workflow as
              checkpoints they can refer back to.
            </Text>
          </Callout>
        </Flex>
        <Callout
          style={{ width: "100%", height: "100%" }}
          wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center laptop:!py-6 tablet:!py-4 tablet:!px-5 !px-4 !py-3"
        >
          <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
            Open design question: trust calibration?
          </Text>
          <Text className="tablet:text-[16px] laptop:text-[18px]">
            How do we help users trust the system appropriately, without
            over-relying on it, or feeling alienated by an agent that feels too
            human? This remains the most interesting unsolved design problem
            from this project, and one I&apos;d want to explore with real user
            data.
          </Text>
        </Callout>
      </Flex>
    </Flex>
  );
};
