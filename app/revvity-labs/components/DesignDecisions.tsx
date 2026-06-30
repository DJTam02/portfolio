import { Flex, LiquidGlass, Text } from "@/app/ui-components";
import { SectionHeader } from "@/app/components";
import { ProblemPoint } from "@/app/revvity-labs/components/ProblemPoint";
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
              Lightweight{" "}
              <span className="italic font-instrument">recovery paths</span>{" "}
              were chosen over complex decision trees.
            </>
          }
        />
        <Flex direction="col" className="gap-2 laptop:gap-3">
          <Text className="tablet:text-[16px] laptop:text-[18px]">
            Scientists needed a way to backtrack and explore alternative search
            paths when the AI returned unsatisfying results. My initial proposal
            was a decision tree (similar to GitHub&apos;s branching model) that
            logged every critical choice and let users jump between paths at a
            glance. However, this introduced too many problems:
          </Text>
          <ProblemPoint>
            Cluttered the chat history, making it hard to scan what a session
            was actually about
          </ProblemPoint>
          <ProblemPoint>
            The “mind map” mental model for branching was unfamiliar to
            scientists, and already used in other stages in their workflow
          </ProblemPoint>
          <ProblemPoint>
            Introduced significant state complexity that would be difficult to
            scale technically
          </ProblemPoint>
        </Flex>
        <Flex className="gap-6">
          <div className="flex-1 h-full">
            <Image
              src="/images/revvity-labs/decision-tree-chat.png"
              alt="Decision Tree View"
              width={1600}
              height={1138}
              className="flex-1 h-auto"
            />
          </div>
          <div className="flex-1 h-full hidden laptop:block">
            <Image
              src="/images/revvity-labs/decision-tree.png"
              alt="Decision Tree"
              width={2880}
              height={2048}
              className="flex-1 h-auto"
            />
          </div>
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
              Separate browsing from refining. The chat stays dedicated to
              iterating the search. A sticky side panel lives alongside it,
              refreshing with each new query to display only papers relevant to
              the current search. Even with 100+ results, the chat stays clean.
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
              This solution provided a more complex (and visually noisy)
              two-panel layout, in exchange for a significantly easier scanning
              and browsing experience at scale.
            </Text>
          </LiquidGlass>
        </Flex>
      </Flex>

      <Flex direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
        <SectionHeader
          title="Design Decisions ✅"
          description={
            <>
              A{" "}
              <span className="italic font-instrument">sticky side panel</span>{" "}
              was introduced to keep the chatting interface clean.
            </>
          }
        />
        <Text className="tablet:text-[16px] laptop:text-[18px]">
          As searches returned results, the chat risked becoming an unstructured
          data dump. We saw dozens of paper previews buried between prompts,
          making it nearly impossible to browse efficiently.
        </Text>
        <Flex
          direction="col"
          className="gap-3 tablet:gap-4 laptop:gap-6 laptop:order-4 laptop:flex-row"
        >
          <div className="laptop:flex-1 laptop:h-full h-19 tablet:h-35 overflow-hidden">
            <Image
              src="/images/revvity-labs/side-panel-refreshing.png"
              alt="Side Panel Refreshing"
              width={1600}
              height={1138}
              className="flex-1 h-auto"
            />
          </div>
          <div className="flex-1 h-full">
            <Image
              src="/images/revvity-labs/sticky-side-panel.png"
              alt="Sticky Side Panel"
              width={2880}
              height={2048}
              className="flex-1 h-auto"
            />
          </div>
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
              Make the mode switch explicit to reflect their workflow. A toggle
              lets users move between a chat-focused view and a papers-only
              browsing view at any point in their workflow. In browse mode, the
              agent remains accessible but takes a step back and is no longer
              leading.
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
              This solution added minimal UI complexity, in exchange for a
              workflow that respects where humans need to stay in control.
            </Text>
          </LiquidGlass>
        </Flex>
      </Flex>

      <Flex direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
        <SectionHeader
          title="Design Decisions ✅"
          description={
            <>
              A <span className="italic font-instrument">mode toggle</span> was
              designed to intentionally keep humans in control.
            </>
          }
        />
        <Text className="tablet:text-[16px] laptop:text-[18px]">
          User interviews revealed a clear transition in the workflow: early in
          a session scientists prefer to prompt and iterate with the AI, but at
          a certain point they transition into manually reviewing papers before
          deciding what to replicate. The takeaway? Scientists are still
          building trust with AI, and we never wanted to design a product that
          pressures them into over-relying on it.
        </Text>
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
              Make the mode switch explicit to reflect their workflow. A toggle
              lets users move between a chat-focused view and a papers-only
              browsing view at any point in their workflow. In browse mode, the
              agent remains accessible but takes a step back and is no longer
              leading.
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
              This solution added minimal UI complexity, in exchange for a
              workflow that respects where humans need to stay in control.
            </Text>
          </LiquidGlass>
        </Flex>
        <Flex
          direction="col"
          className="gap-3 tablet:gap-4 laptop:gap-6 laptop:flex-row"
        >
          <div className="laptop:flex-1 laptop:h-full max-h-84 tablet:max-h-140 overflow-hidden">
            <Image
              src="/images/revvity-labs/mode-toggle.png"
              alt="Reports"
              width={1600}
              height={1138}
              className="flex-1 h-auto"
            />
          </div>
          <div className="flex-1 h-full">
            <Image
              src="/images/revvity-labs/mode-toggle-sidebar.png"
              alt="Reports with Details"
              width={2880}
              height={2048}
              className="flex-1 h-auto"
            />
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};
