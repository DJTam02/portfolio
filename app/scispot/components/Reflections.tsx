import { Callout, Flex, Text } from "@/app/ui-components";
import { SectionHeader } from "@/app/components";

export const Reflections = ({ id }: { id: string }) => {
  return (
    <Flex id={id} direction="col" className="gap-10 laptop:gap-15">
      <Flex direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
        <SectionHeader
          title="Lessons Learned 🧑🧑‍🏫"
          description={
            <>
              What the{" "}
              <span className="italic font-instrument">three-week sprint</span>{" "}
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
              Designing for AI means designing for skepticism first
            </Text>
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              Our biggest challenge wasn&apos;t the interface, it was the
              audience. Scientists are trained to distrust unvalidated results,
              and AI is about as unvalidated as it gets. The most important
              design work wasn&apos;t making Plato powerful, it was making it
              feel safe enough to try. Every structural decision was ultimately
              about lowering the cost of a first interaction with AI.
            </Text>
          </Callout>
          <Callout
            style={{ width: "100%", height: "100%" }}
            wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center laptop:!py-6 tablet:!py-4 tablet:!px-5 !px-4 !py-3"
          >
            <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
              Seamlessness is also a trust strategy
            </Text>
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              The best feedback we received wasn&apos;t &quot;this is
              impressive,&quot; it was &quot;this feels like what I was already
              doing.&quot; That reaction didn&apos;t happen by accident. When
              introducing AI to skeptical users, the goal isn&apos;t to showcase
              what the technology can do. It&apos;s to make the technology
              disappear into a workflow people already trust.
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
              The UI is often the hardest part of an AI product
            </Text>
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              UI was a specific challenge in this project because the backend
              had already been built. This is increasingly common in AI product
              design: the model is ready before the experience is, and designers
              are left bridging a gap between raw capability and human comfort.
            </Text>
          </Callout>
          <Callout
            style={{ width: "100%", height: "100%" }}
            wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center laptop:!py-6 tablet:!py-4 tablet:!px-5 !px-4 !py-3"
          >
            <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
              When AI is new to users, onboarding never really ends
            </Text>
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              First-time AI users don&apos;t graduate out of needing guidance
              after a single onboarding flow. Every interaction is potentially
              their first real moment of trust (or distrust). Designing for that
              means building reassurance into the experience at every step, not
              just at the beginning.
            </Text>
          </Callout>
        </Flex>
      </Flex>

      <Flex direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
        <SectionHeader
          title="Next Steps 🪜‍"
          description={
            <>
              If I had more time, here is where I would take Plato{" "}
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
            <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
              Usability testing with scientists
            </Text>
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              Many design decisions were made without direct observation of
              scientists using the product in context. Structured usability
              sessions could help surface assumptions I didn&apos;t know I was
              making. Specifically, I want to learn how scientists mentally
              model AI assistance versus manual control.
            </Text>
          </Callout>
          <Callout
            style={{ width: "100%", height: "100%" }}
            wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center laptop:!py-6 tablet:!py-4 tablet:!px-5 !px-4 !py-3"
          >
            <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
              Information architecture research
            </Text>
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              A recurring theme in user feedback was that features went
              undiscovered. If I had the time, I would first run card sorting
              and tree testing sessions to validate whether our navigation
              structure matched how scientists actually think about their
              workflows.
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
              Centralized plate management hub
            </Text>
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              What started as a single feature is increasingly becoming a
              primary workflow for some users. The logical next step is a
              dedicated home for all plate-related workflows. Maybe even
              bringing Plato&apos;s entry point up to the top level of
              navigation rather than burying it within the note-taking app.
            </Text>
          </Callout>
          <Callout
            style={{ width: "100%", height: "100%" }}
            wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center laptop:!py-6 tablet:!py-4 tablet:!px-5 !px-4 !py-3"
          >
            <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
              Accessibility and responsiveness
            </Text>
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              As Scispot expands into regulated spaces like government and
              academia, accessibility standards will become non-negotiable. Many
              scientists also work on tablets at the bench. The current designs
              were optimized for desktop and would need to be revisited for
              smaller viewports.
            </Text>
          </Callout>
        </Flex>
        <Callout
          style={{ width: "100%", height: "100%" }}
          wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center laptop:!py-6 tablet:!py-4 tablet:!px-5 !px-4 !py-3"
        >
          <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
            Open design question: scaling AI transparency
          </Text>
          <Text className="tablet:text-[16px] laptop:text-[18px]">
            As Plato handles more complex workflows, how do we continue to show
            users what the AI is doing and why, without adding cognitive
            overhead? The current MVP kept this simple by design. At scale, that
            balance becomes much harder to maintain.
          </Text>
        </Callout>
      </Flex>
    </Flex>
  );
};
