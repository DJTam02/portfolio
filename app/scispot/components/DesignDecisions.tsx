import { Flex, LiquidGlass, Text } from "@/app/ui-components";
import { SectionHeader } from "@/app/components";
import { ProblemPoint } from "@/app/components/ProblemPoint";
import Image from "next/image";
import { useGetBreakpointValue } from "@/app/hooks";

export const DesignDecisions = ({ id }: { id: string }) => {
  const { getBreakpointValue } = useGetBreakpointValue();
  return (
    <Flex id={id} direction="col" className="gap-10 laptop:gap-15">
      <Flex direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
        <SectionHeader
          title="Design Decisions ✅"
          description={
            <>
              The note-taking app was the only{" "}
              <i className="font-instrument">entry point</i> that made sense.
            </>
          }
        />
        <Text className="tablet:text-[16px] laptop:text-[18px]">
          One of the most critical decisions for Plato was finding a single,
          centralized home for all plate-related workflows. Getting this wrong
          would mean replicating the exact fragmentation problem we were trying
          to solve. I explored four options:
        </Text>
        <Flex
          direction="col"
          className="laptop:flex-row gap-3 tablet:gap-4 laptop:gap-6"
        >
          <Flex direction="col" className="gap-2 tablet:gap-3">
            <Image
              src="/images/scispot/homepage.png"
              alt="Homepage"
              width={1480}
              height={958}
              className="flex-1 h-auto"
            />
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              <b>Homepage:</b> Its primary role is to introduce the platform,
              not execute tasks. An onboarding experience here could help
              first-time users but would become cumbersome for seasoned ones.
            </Text>
          </Flex>
          <Flex direction="col" className="gap-2 tablet:gap-3">
            <Image
              src="/images/scispot/spreadsheet.png"
              alt="Table"
              width={1480}
              height={958}
              className="flex-1 h-auto"
            />
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              <b>Results analysis spreadsheets:</b> Plate workflows span
              planning, execution, and review. Anchoring the entry point here
              would have locked Plato into a single phase of the workflow,
              limiting its utility.
            </Text>
          </Flex>
        </Flex>
        <Flex
          direction="col"
          className="laptop:flex-row gap-3 tablet:gap-4 laptop:gap-6"
        >
          <Flex direction="col" className="gap-2 tablet:gap-3">
            <Image
              src="/images/scispot/dashboard.png"
              alt="Dashboard"
              width={1480}
              height={958}
              className="flex-1 h-auto"
            />
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              <b>Lab process tracking app:</b> This product is mostly project
              management-focused. It didn&apos;t align with the hands-on,
              experiment-driven nature of plate work.
            </Text>
          </Flex>
          <Flex direction="col" className="gap-2 tablet:gap-3">
            <Image
              src="/images/scispot/export.png"
              alt="Export"
              width={1480}
              height={958}
              className="flex-1 h-auto"
            />
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              <b>Note-taking app:</b> Scientists already use it to plan
              experiments, and plate workflows are inherently contextual to
              specific experiments. Embedding Plato here placed it directly in
              their natural workflow without asking them to go anywhere new.
            </Text>
          </Flex>
        </Flex>

        <Flex
          direction="col"
          className="tablet:flex-row gap-3 tablet:gap-4 desktop:gap-6"
        >
          <LiquidGlass
            wrapperClassname="gap-1 px-4 py-3 tablet:gap-2 tablet:px-5 tablet:py-4 laptop:px-4 laptop:py-6 !flex-col bg-liquid-glass-light w-full tablet:w-105 laptop:w-full"
            borderRadius={getBreakpointValue([8, 12, 16, 16])}
            style={{
              width: getBreakpointValue(["100%", 420, "100%", "100%"]),
              height: "100%",
              flex: getBreakpointValue([1, undefined, 1, 1]),
            }}
          >
            <Text className="text-[18px] font-bold laptop:text-2xl laptop:font-normal">
              The Call 📣
            </Text>
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              The note-taking app was the only option that met every constraint:
              it was where users already spent most of their time, it supported
              the full workflow rather than a single phase, and it introduced
              Plato without disrupting the habits scientists had already built.
            </Text>
          </LiquidGlass>
          <LiquidGlass
            wrapperClassname="gap-1 px-4 py-3 tablet:gap-2 tablet:px-5 tablet:py-4 laptop:px-4 laptop:py-6 !flex-col bg-liquid-glass-light w-full"
            borderRadius={getBreakpointValue([8, 12, 16, 16])}
            style={{
              width: "100%",
              height: "100%",
              flex: 1,
              minWidth: 0,
            }}
          >
            <Text className="text-[18px] font-bold laptop:text-2xl laptop:font-normal">
              The Tradeoffs ⚠️
            </Text>
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              By anchoring this experience to the note-taking app, users working
              outside of it wouldn&apos;t encounter Plato naturally. This was a
              limitation we accepted to get the core experience right for the
              majority use case.
            </Text>
          </LiquidGlass>
        </Flex>
      </Flex>

      <Flex direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
        <SectionHeader
          title="Design Decisions ✅"
          description={
            <>
              I chose to embed Plato{" "}
              <i className="font-instrument">in context</i> over using a
              standalone button or toolbar.
            </>
          }
        />
        <Text className="tablet:text-[16px] laptop:text-[18px]">
          Once the entry point was locked, the next question was: where on the
          page should Plato live, and how should it be introduced?
        </Text>
        <Flex
          direction="col"
          className="gap-3 tablet:gap-4 laptop:gap-6 desktop:flex-row"
        >
          <Flex direction="col" className="gap-3">
            <Image
              src="/images/scispot/before.png"
              alt="Initial Design"
              width={1480}
              height={958}
              className="w-full h-[33%] desktop:h-auto"
            />
            <Flex direction="col" className="gap-2 tablet:gap-3">
              <Text className="tablet:text-[16px] laptop:text-[18px]">
                My initial idea was a button or toolbar. But there was one main
                concern with this design.
              </Text>
              <ProblemPoint isProblem={false}>
                Clean, minimal, and familiar.
              </ProblemPoint>
              <ProblemPoint>
                A button alone couldn&apos;t communicate what Plato was or why a
                scientist should care. For users encountering AI for the first
                time, a decontextualized button was too easy to ignore or
                misunderstand.
              </ProblemPoint>
            </Flex>
          </Flex>
          <Flex direction="col" className="gap-3">
            <Image
              src="/images/scispot/after.png"
              alt="Final Design"
              width={1480}
              height={958}
              className="w-full h-auto"
            />
            <Flex direction="col" className="gap-2 tablet:gap-3">
              <Text className="tablet:text-[16px] laptop:text-[18px]">
                Instead, I leveraged Scispot&apos;s existing{" "}
                <b>backslash embedding</b> feature to introduce Plato directly
                within the note-taking workflow.
              </Text>
              <ProblemPoint isProblem={false}>
                Scientists already use backslash commands to embed content into
                their notes. Meeting them in a pattern they already knew removed
                the learning curve.
              </ProblemPoint>
              <ProblemPoint isProblem={false}>
                When a plate is embedded into a note, Plato appeared alongside
                it, maintaining a clear association with plate workflows.
              </ProblemPoint>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          direction="col"
          className="tablet:flex-row gap-3 tablet:gap-4 desktop:gap-6 laptop:order-3"
        >
          <LiquidGlass
            wrapperClassname="gap-1 px-4 py-3 tablet:gap-2 tablet:px-5 tablet:py-4 laptop:px-4 laptop:py-6 !flex-col bg-liquid-glass-light w-full tablet:w-105 laptop:w-full"
            borderRadius={getBreakpointValue([8, 12, 16, 16])}
            style={{
              width: getBreakpointValue(["100%", 420, "100%", "100%"]),
              height: "100%",
              flex: getBreakpointValue([1, undefined, 1, 1]),
            }}
          >
            <Text className="text-[18px] font-bold laptop:text-2xl laptop:font-normal">
              The Call 📣
            </Text>
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              Embed Plato as a contextual component within the note-taking app
              rather than surfacing it as a standalone UI element.
            </Text>
          </LiquidGlass>
          <LiquidGlass
            wrapperClassname="gap-1 px-4 py-3 tablet:gap-2 tablet:px-5 tablet:py-4 laptop:px-4 laptop:py-6 !flex-col bg-liquid-glass-light w-full"
            borderRadius={getBreakpointValue([8, 12, 16, 16])}
            style={{
              width: "100%",
              height: "100%",
              flex: 1,
              minWidth: 0,
            }}
          >
            <Text className="text-[18px] font-bold laptop:text-2xl laptop:font-normal">
              The Tradeoffs ⚠️
            </Text>
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              This approach tied Plato&apos;s discoverability to users who
              already used the backslash embedding feature. Users unfamiliar
              with that pattern might still miss it. We accepted this limitation
              knowing that backslash embedding was one of the platform&apos;s
              most used interactions.
            </Text>
          </LiquidGlass>
        </Flex>
      </Flex>

      <Flex direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
        <SectionHeader
          title="Design Decisions ✅"
          description={
            <>
              A <i className="font-instrument">modal</i> was selected to keep
              scientists anchored to their workflow.
            </>
          }
        />
        <Text className="tablet:text-[16px] laptop:text-[18px]">
          With the entry point and page architecture locked, the final
          structural decision was how much of the screen Plato should take over
          when a scientist interacts with it.
        </Text>
        <Flex
          direction="col"
          className="gap-3 tablet:gap-4 laptop:gap-6 desktop:flex-row"
        >
          <Flex direction="col" className="gap-3">
            <Image
              src="/images/scispot/modal-less.png"
              alt="Modal Less"
              width={1316}
              height={856}
              className="w-full h-auto"
            />
            <Flex direction="col" className="gap-2 tablet:gap-3">
              <Text className="tablet:text-[16px] laptop:text-[18px]">
                A <b>fullscreen experience</b> was initially explored.
              </Text>
              <ProblemPoint isProblem={false}>
                More real estate means more room for guidance, onboarding, and
                detailed AI output.
              </ProblemPoint>
              <ProblemPoint>
                Pulling scientists out of their current context and into what
                feels like a separate product entirely; for users already
                skeptical of AI, that context switch could mean losing trust.
              </ProblemPoint>
            </Flex>
          </Flex>
          <Flex direction="col" className="gap-3">
            <Image
              src="/images/scispot/with-modal.png"
              alt="With Modal"
              width={1316}
              height={856}
              className="w-full h-auto"
            />
            <Flex direction="col" className="gap-2 tablet:gap-3">
              <Text className="tablet:text-[16px] laptop:text-[18px]">
                I then moved onto exploring <b>modal</b> interactions.
              </Text>
              <ProblemPoint isProblem={false}>
                Gives Plato enough space to be functional without severing the
                scientist&apos;s connection to the experiment they were working
                on.
              </ProblemPoint>
              <ProblemPoint isProblem={false}>
                Reinforces Plato as an assistant that appeared when needed and
                disappeared when not, rather than a destination they had to
                navigate to.
              </ProblemPoint>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          direction="col"
          className="tablet:flex-row gap-3 tablet:gap-4 desktop:gap-6"
        >
          <LiquidGlass
            wrapperClassname="gap-1 px-4 py-3 tablet:gap-2 tablet:px-5 tablet:py-4 laptop:px-4 laptop:py-6 !flex-col bg-liquid-glass-light w-full tablet:w-105 laptop:w-full"
            borderRadius={getBreakpointValue([8, 12, 16, 16])}
            style={{
              width: getBreakpointValue(["100%", 420, "100%", "100%"]),
              height: "100%",
              flex: getBreakpointValue([1, undefined, 1, 1]),
            }}
          >
            <Text className="text-[18px] font-bold laptop:text-2xl laptop:font-normal">
              The Call 📣
            </Text>
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              A modal was selected over a fullscreen experience. To work around
              the reduced screen real estate, I carefully prioritized content
              hierarchy and used a clean, structured layout to avoid
              overwhelming users with information.
            </Text>
          </LiquidGlass>
          <LiquidGlass
            wrapperClassname="gap-1 px-4 py-3 tablet:gap-2 tablet:px-5 tablet:py-4 laptop:px-4 laptop:py-6 !flex-col bg-liquid-glass-light w-full"
            borderRadius={getBreakpointValue([8, 12, 16, 16])}
            style={{
              width: "100%",
              height: "100%",
              flex: 1,
              minWidth: 0,
            }}
          >
            <Text className="text-[18px] font-bold laptop:text-2xl laptop:font-normal">
              The Tradeoffs ⚠️
            </Text>
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              A modal imposes real constraints on how much information can be
              displayed at once. Complex workflows or high-volume outputs would
              feel cramped. We accepted this by refining what information was
              absolutely necessary to display at the MVP stage. A fullscreen
              experience could always be introduced later as usage patterns
              matured.
            </Text>
          </LiquidGlass>
        </Flex>
      </Flex>
    </Flex>
  );
};
