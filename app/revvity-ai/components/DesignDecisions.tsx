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
              Moving the <span className="italic font-instrument">trigger</span>{" "}
              into the chat box kept users anchored.
            </>
          }
        />
        <Text className="tablet:text-[16px] laptop:text-[18px]">
          My initial instinct was keeping the trigger button at the top-right
          because it was a common placement for secondary controls and visually
          clean.
        </Text>
        <Flex
          direction="col"
          className="gap-3 tablet:gap-4 laptop:gap-6 desktop:gap-10 desktop:flex-row"
        >
          <Flex direction="col" className="gap-2 laptop:gap-3 flex-1">
            <Image
              src="/images/revvity-ai/select-agent-top-right.png"
              alt="Side Panel"
              width={2048}
              height={1330}
              className="w-full h-auto"
            />
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              Feedback from the UX team surfaced a few problems.
            </Text>
            <ProblemPoint>
              The top-right corner is too far from the chat input. For users
              mid-conversation, glancing to the opposite corner of the screen to
              switch agents created a context break.
            </ProblemPoint>
            <ProblemPoint>
              Some users may also miss the trigger because they don&apos;t tend
              to glance at the top-right corner mid-workflow.
            </ProblemPoint>
          </Flex>
          <Flex direction="col" className="gap-2 laptop:gap-3 flex-1">
            <Image
              src="/images/revvity-ai/select-agent-chat.png"
              alt="Side Panel"
              width={2048}
              height={1330}
              className="w-full h-auto"
            />
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              Moving the trigger button inside the chat box itself placed agent
              selection exactly where users were already focused: at the point
              of input, right before they sent a message. We also added a label
              above the chat area showing the currently selected agent, so users
              always knew which agent they were talking to without having to
              open the panel to check.
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
              width: getBreakpointValue(["100%", 216, 300, 372]),
              height: "100%",
            }}
          >
            <Flex direction="col" className="gap-1 tablet:gap-2">
              <Text className="text-[18px] font-bold laptop:text-2xl laptop:font-normal">
                The Call 📣
              </Text>
              <Text className="tablet:text-[16px] laptop:text-[18px]">
                Trigger button inside the chat box, with a persistent agent
                label above the input area.
              </Text>
            </Flex>
          </LiquidGlass>
          <LiquidGlass
            wrapperClassname="gap-1 px-4 py-3 tablet:gap-2 tablet:px-5 tablet:py-4 laptop:px-4 laptop:py-6 !flex-col bg-liquid-glass-light w-full"
            borderRadius={getBreakpointValue([8, 12, 16, 16])}
            style={{
              width: "100%",
              height: "100%",
              minWidth: 0,
              flex: 1,
            }}
          >
            <Flex direction="col" className="gap-1 tablet:gap-2">
              <Text className="text-[18px] font-bold laptop:text-2xl laptop:font-normal">
                The Tradeoffs ⚠️
              </Text>
              <Text className="tablet:text-[16px] laptop:text-[18px]">
                Embedding controls inside the chat box adds visual complexity to
                what is typically a clean, minimal input area. This was a cost
                worth accepting to keep agent selection within the user&apos;s
                natural focus zone.
              </Text>
            </Flex>
          </LiquidGlass>
        </Flex>
      </Flex>

      <Flex direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
        <SectionHeader
          title="Design Decisions ✅"
          description={
            <>
              A side panel beat a dropdown, because users needed to do{" "}
              <i className="font-instrument">both</i> at once.
            </>
          }
        />
        <Text className="tablet:text-[16px] laptop:text-[18px]">
          The most fundamental question in this project was how to surface 100+
          agents without overwhelming users or pulling them away from their
          work. The dropdown we had inherited from the five-agent era was the
          obvious starting point, but it had a critical flaw at scale.
        </Text>
        <Flex
          direction="col"
          className="gap-3 tablet:gap-4 laptop:gap-6 desktop:gap-10 desktop:flex-row"
        >
          <Flex direction="col" className="gap-2 laptop:gap-3 flex-1">
            <Image
              src="/images/revvity-ai/dropdown.png"
              alt="Dropdown"
              width={2048}
              height={1330}
              className="w-full h-auto"
            />
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              The <b>initial design</b> was a dropdown, but it demands full
              attention. For a product where context is everything, that
              interruption came at a cost.
            </Text>
            <ProblemPoint>
              The moment it opens, it blocks the chat entirely, forcing users to
              choose between browsing agents or continuing their conversation.
            </ProblemPoint>
            <ProblemPoint>
              It was too easy to accidentally click outside and close the menu.
            </ProblemPoint>
          </Flex>
          <Flex direction="col" className="gap-2 laptop:gap-3 flex-1">
            <Image
              src="/images/revvity-ai/sidepanel.png"
              alt="Sticky Side Panel"
              width={2048}
              height={1330}
              className="w-full h-auto"
            />
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              We explored a <b>sticky side panel</b> next.
            </Text>
            <ProblemPoint isProblem={false}>
              It lives alongside the chat rather than on top of it, letting
              users browse agents and continue their conversation
              simultaneously.
            </ProblemPoint>
            <ProblemPoint isProblem={false}>
              It can also accommodate search, filters, and descriptions at scale
              (something dropdowns could not do at scale).
            </ProblemPoint>
          </Flex>
        </Flex>
        <Flex direction="col" className="gap-2 laptop:gap-3 flex-1">
          <video
            src="/videos/revvity-ai/middle-ground.mov"
            autoPlay
            muted
            loop
            playsInline
            controls
            className="w-full h-auto"
          />
          <Text className="tablet:text-[16px] laptop:text-[18px]">
            We also explored one <b>middle-ground option</b>: showing a preview
            of the selected agent&apos;s description before opening the full
            panel, to reduce how much scrolling users needed to do inside it. It
            was a reasonable idea, but it had a few limitations so we ruled this
            option out.
          </Text>
          <ProblemPoint>It introduces an extra click.</ProblemPoint>
          <ProblemPoint>
            It discourages the exploratory browsing for users who didn&apos;t
            know what they wanted.
          </ProblemPoint>
        </Flex>
        <Flex
          direction="col"
          className="tablet:flex-row gap-3 tablet:gap-4 desktop:gap-6 laptop:order-3"
        >
          <LiquidGlass
            wrapperClassname="gap-1 px-4 py-3 tablet:gap-2 tablet:px-5 tablet:py-4 laptop:px-4 laptop:py-6 !flex-col bg-liquid-glass-light w-full tablet:w-105 laptop:w-full"
            borderRadius={getBreakpointValue([8, 12, 16, 16])}
            style={{
              width: getBreakpointValue(["100%", 200, 340, 340]),
              height: "100%",
            }}
          >
            <Flex direction="col" className="gap-1 tablet:gap-2">
              <Text className="text-[18px] font-bold laptop:text-2xl laptop:font-normal">
                The Call 📣
              </Text>
              <Text className="tablet:text-[16px] laptop:text-[18px]">
                A side panel was selected over dropdown, with no previews.
              </Text>
            </Flex>
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
            <Flex direction="col" className="gap-1 tablet:gap-2">
              <Text className="text-[18px] font-bold laptop:text-2xl laptop:font-normal">
                The Tradeoffs ⚠️
              </Text>
              <Text className="tablet:text-[16px] laptop:text-[18px]">
                The side panel reduces the available chat area when open. We
                accepted this cost knowing that browsing and chatting
                simultaneously was worth more than a few extra pixels of chat
                width.
              </Text>
            </Flex>
          </LiquidGlass>
        </Flex>
      </Flex>

      <Flex direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
        <SectionHeader
          title="Design Decisions ✅"
          description="Separating agents from prompt suggestions eliminated a silent source of confusion."
        />
        <Flex
          direction="col"
          className="gap-3 tablet:gap-4 laptop:gap-6 desktop:gap-10 desktop:flex-row"
        >
          <Flex direction="col" className="gap-2 laptop:gap-3 flex-1">
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              Previous design:
            </Text>
            <Image
              src="/images/revvity-ai/initial-design.png"
              alt="Previous Design"
              width={2048}
              height={1330}
              className="w-full h-auto"
            />
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              On the RevvityAI landing page, agent cards and suggested prompt
              cards looked nearly identical, with same size, same visual design,
              and same placement. However, clicking an agent card launched a new
              agent, whereas clicking a prompt card populated the chat input.
              Users had no reliable way to tell which was which before clicking.
            </Text>
          </Flex>
          <Flex direction="col" className="gap-2 laptop:gap-3 flex-1">
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              Initial redesign:
            </Text>
            <Image
              src="/images/revvity-ai/initial-redesign.png"
              alt="Initial Redesign"
              width={2048}
              height={1330}
              className="w-full h-auto"
            />
            <Text className="tablet:text-[16px] laptop:text-[18px]">
              The <b>first redesign</b> tried to solve this by visually
              distinguishing the two card types on the landing page. It worked,
              but it introduced a new problem.
            </Text>
            <ProblemPoint>
              The page became too noisy, especially on smaller screens, where
              content was getting cut off before users could even see what was
              available.
            </ProblemPoint>
          </Flex>
        </Flex>
        <Flex direction="col" className="gap-2 laptop:gap-3 flex-1">
          <Text className="tablet:text-[16px] laptop:text-[18px]">
            The real insight came from <b>questioning the premise entirely</b>.
            Were agent cards actually serving users on the landing page? The
            answer was no. Users who knew which agent they wanted didn&apos;t
            need to select it from the landing page, they needed it close to the
            chat. Users who were browsing needed a dedicated space to explore,
            not a crowded landing page trying to do too many things at once.
          </Text>
          <Text className="tablet:text-[16px] laptop:text-[18px]">
            Final redesign:
          </Text>
          <Image
            src="/images/revvity-ai/final-redesign.png"
            alt="Final Redesign"
            width={2048}
            height={1330}
            className="w-full h-auto"
          />
        </Flex>
        <Flex
          direction="col"
          className="tablet:flex-row gap-3 tablet:gap-4 desktop:gap-6"
        >
          <LiquidGlass
            wrapperClassname="gap-1 px-4 py-3 tablet:gap-2 tablet:px-5 tablet:py-4 laptop:px-4 laptop:py-6 !flex-col bg-liquid-glass-light w-full tablet:w-105 laptop:w-full"
            borderRadius={getBreakpointValue([8, 12, 16, 16])}
            style={{
              width: getBreakpointValue(["100%", 292, 484, 536]),
              height: "100%",
            }}
          >
            <Flex direction="col" className="gap-1 tablet:gap-2">
              <Text className="text-[18px] font-bold laptop:text-2xl laptop:font-normal">
                The Call 📣
              </Text>
              <Text className="tablet:text-[16px] laptop:text-[18px]">
                Remove agent cards from the landing page entirely. Pin agents to
                a dedicated left-hand panel. Let the landing page focus on what
                it does best: surfacing suggested prompts in a familiar,
                low-friction pattern.
              </Text>
            </Flex>
          </LiquidGlass>
          <LiquidGlass
            wrapperClassname="gap-1 px-4 py-3 tablet:gap-2 tablet:px-5 tablet:py-4 laptop:px-4 laptop:py-6 !flex-col bg-liquid-glass-light w-full"
            borderRadius={getBreakpointValue([8, 12, 16, 16])}
            style={{
              width: "100%",
              flex: 1,
              height: "100%",
              minWidth: 0,
            }}
          >
            <Flex direction="col" className="gap-1 tablet:gap-2">
              <Text className="text-[18px] font-bold laptop:text-2xl laptop:font-normal">
                The Tradeoffs ⚠️
              </Text>
              <Text className="tablet:text-[16px] laptop:text-[18px]">
                Removing agents from the landing page means first-time users
                don&apos;t immediately see the full breadth of what RevvityAI
                can do. This was a limitation we accepted knowing that a
                dedicated panel would ultimately serve discovery better than a
                cluttered landing page ever could.
              </Text>
            </Flex>
          </LiquidGlass>
        </Flex>
      </Flex>
    </Flex>
  );
};
