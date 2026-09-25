import { Callout, Flex, Text } from "@/app/ui-components";
import { SectionHeader } from "@/app/components";

export const Reflections = ({ id }: { id: string }) => {
  return (
    <Flex id={id} direction="col" className="gap-10 laptop:gap-15">
      <Flex direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
        <SectionHeader
          title="Lessons Learned 🧑‍🏫"
          description={
            <>
              What this project <i className="font-instrument">taught me</i>.
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
            <Flex direction="col" className="gap-1 tablet:gap-2">
              <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
                Scaling a product is a UX problem before it&apos;s an
                engineering problem
              </Text>
              <Text className="tablet:text-[16px] laptop:text-[18px]">
                The moment RevvityAI committed to 100+ agents, the interface
                became a discovery problem. Engineering can build as many agents
                as the product needs, but if users can&apos;t find them, they
                don&apos;t exist. Thinking about scale from the first wireframe
                was the only way to avoid designing ourselves into a corner.
              </Text>
            </Flex>
          </Callout>
          <Callout
            style={{ width: "100%", height: "100%" }}
            wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center laptop:!py-6 tablet:!py-4 tablet:!px-5 !px-4 !py-3"
          >
            <Flex direction="col" className="gap-1 tablet:gap-2">
              <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
                Interruption has a higher cost in AI products than in
                traditional software
              </Text>
              <Text className="tablet:text-[16px] laptop:text-[18px]">
                A dropdown that blocks the chat feels like a minor inconvenience
                in a traditional product. In an AI interface, it breaks a thread
                that can be genuinely difficult to rebuild. Designing for
                continuity (keeping users anchored to their conversation while
                still giving them access to the full agent ecosystem) required
                treating every context switch as a cost worth minimizing.
              </Text>
            </Flex>
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
            <Flex direction="col" className="gap-1 tablet:gap-2">
              <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
                Consistency is a trust signal in complex systems
              </Text>
              <Text className="tablet:text-[16px] laptop:text-[18px]">
                A mismatched selection state or an unpredictable click
                interaction might seem like small details. But in a product with
                100+ agents where users are already navigating unfamiliar
                territory, inconsistency creates doubt. Every visual and
                interaction pattern that matched what users already knew was one
                less thing they had to figure out.
              </Text>
            </Flex>
          </Callout>
          <Callout
            style={{ width: "100%", height: "100%" }}
            wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center laptop:!py-6 tablet:!py-4 tablet:!px-5 !px-4 !py-3"
          >
            <Flex direction="col" className="gap-1 tablet:gap-2">
              <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
                Sometimes the right answer is to question the premise
              </Text>
              <Text className="tablet:text-[16px] laptop:text-[18px]">
                The landing page problem wasn&apos;t solved by making the cards
                look different. It was solved by asking whether agent cards
                belonged on the landing page at all. The best design decision in
                this project wasn&apos;t a visual refinement, it was the
                willingness to remove something entirely rather than fix it.
              </Text>
            </Flex>
          </Callout>
        </Flex>
      </Flex>

      <Flex direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
        <SectionHeader
          title="Next Steps 🪜‍"
          description={
            <>
              If I had more time, here is where I would take RevvityAI{" "}
              <i className="font-instrument">next</i>.
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
            <Flex direction="col" className="gap-1 tablet:gap-2">
              <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
                Usability testing at scale
              </Text>
              <Text className="tablet:text-[16px] laptop:text-[18px]">
                Every design decision in this project was validated through
                internal critique and engineer feedback. Structured usability
                sessions with real scientists across different domains would
                stress-test whether the discovery patterns we designed actually
                hold up when users are navigating a full ecosystem of 100+
                agents.
              </Text>
            </Flex>
          </Callout>
          <Callout
            style={{ width: "100%", height: "100%" }}
            wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center laptop:!py-6 tablet:!py-4 tablet:!px-5 !px-4 !py-3"
          >
            <Flex direction="col" className="gap-1 tablet:gap-2">
              <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
                Personalized agent recommendations
              </Text>
              <Text className="tablet:text-[16px] laptop:text-[18px]">
                As usage data accumulates, there&apos;s an opportunity to
                surface agents proactively based on a user&apos;s past
                behaviour. This would then reduce the need to browse at all for
                returning users. That way we shift the experience from reactive
                discovery to anticipatory suggestion.
              </Text>
            </Flex>
          </Callout>
        </Flex>
        <Callout
          style={{ width: "100%", height: "100%" }}
          wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center laptop:!py-6 tablet:!py-4 tablet:!px-5 !px-4 !py-3"
        >
          <Flex direction="col" className="gap-1 tablet:gap-2">
            <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
              Open design question: when does choice become overwhelming?
            </Text>
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              At what point does 100+ agents stop feeling like a powerful
              ecosystem and start feeling like an impossible decision? We
              designed for discoverability, but we haven&apos;t yet designed for
              decision fatigue. That&apos;s the next step.
            </Text>
          </Flex>
        </Callout>
      </Flex>
    </Flex>
  );
};
