import { Flex, Text, LiquidGlass, Callout } from "@/app/ui-components";
import { SectionHeader } from "@/app/components";
import Image from "next/image";
import { useGetBreakpointValue } from "@/app/hooks";

export const DesignCritique = ({ id }: { id: string }) => {
  const { getBreakpointValue } = useGetBreakpointValue();

  return (
    <Flex id={id} direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
      <SectionHeader
        title="Design Critique 👍"
        description={
          <>
            Weekly standups kept{" "}
            <i className="font-instrument">feedback continuous</i> rather than
            saving it all for the end.
          </>
        }
      />
      <Text className="tablet:text-[16px] laptop:text-[18px]">
        Continuous feedback was intentionally woven into the process through
        weekly standups and demos. This meant problems surfaced early, when they
        were still cheap to fix. The feedback below shaped the final designs
        most significantly.
      </Text>
      <Flex direction="col">
        <Image
          src="/images/revvity-ai/design-critique.png"
          alt="Design Critique"
          width={1676}
          height={956}
          className="w-full h-auto bg-no-repeat bg-cover"
        />

        <Flex
          direction="col"
          className="gap-3 tablet:gap-4 desktop:gap-6 laptop:flex-row laptop:mt-[-24px] hidden laptop:flex px-3"
        >
          <Flex
            direction="col"
            className="tablet:flex-row gap-3 tablet:gap-4 desktop:gap-6 flex-1"
          >
            <LiquidGlass
              wrapperClassname="gap-1 px-4 py-3 tablet:gap-2 tablet:px-5 tablet:py-4 laptop:px-4 laptop:py-6 !flex-col bg-liquid-glass-light"
              borderRadius={getBreakpointValue([8, 12, 16, 16])}
              style={{ width: "100%", height: "100%" }}
            >
              <Flex direction="col" className="gap-1 tablet:gap-2">
                <Text className="text-[18px] font-bold laptop:text-2xl laptop:font-normal">
                  The trigger button was too far from the action
                </Text>
                <Text className="tablet:text-[16px] laptop:text-[18px]">
                  Placing agent selection in the top-right corner pulled
                  users&apos; eyes away from the chat (where they were trying to
                  work). Context was being lost before a conversation even
                  started.
                </Text>
              </Flex>
            </LiquidGlass>
            <LiquidGlass
              wrapperClassname="gap-1 px-4 py-3 tablet:gap-2 tablet:px-5 tablet:py-4 laptop:px-4 laptop:py-6 !flex-col bg-liquid-glass-light"
              borderRadius={getBreakpointValue([8, 12, 16, 16])}
              style={{ width: "100%", height: "100%" }}
            >
              <Flex direction="col" className="gap-1 tablet:gap-2">
                <Text className="text-[18px] font-bold laptop:text-2xl laptop:font-normal">
                  Inconsistent selection states broke visual consistency
                </Text>
                <Text className="tablet:text-[16px] laptop:text-[18px]">
                  The selected agent state didn&apos;t match the established
                  selection pattern in our design system. It&apos;s a small
                  detail but could create unnecessary cognitive friction for
                  users already familiar with the product.
                </Text>
              </Flex>
            </LiquidGlass>
          </Flex>
          <Flex
            direction="col"
            className="tablet:flex-row gap-3 tablet:gap-4 desktop:gap-6 flex-1"
          >
            <LiquidGlass
              wrapperClassname="gap-1 px-4 py-3 tablet:gap-2 tablet:px-5 tablet:py-4 laptop:px-4 laptop:py-6 !flex-col bg-liquid-glass-light"
              borderRadius={getBreakpointValue([8, 12, 16, 16])}
              style={{ width: "100%", height: "100%" }}
            >
              <Flex direction="col" className="gap-1 tablet:gap-2">
                <Text className="text-[18px] font-bold laptop:text-2xl laptop:font-normal">
                  The popover blocked the chat entirely
                </Text>
                <Text className="tablet:text-[16px] laptop:text-[18px]">
                  Users who wanted to browse agents while staying in a
                  conversation simply couldn&apos;t. The popover took over the
                  screen and forced them to choose between one or the other.
                </Text>
              </Flex>
            </LiquidGlass>
            <LiquidGlass
              wrapperClassname="gap-1 px-4 py-3 tablet:gap-2 tablet:px-5 tablet:py-4 laptop:px-4 laptop:py-6 !flex-col bg-liquid-glass-light"
              borderRadius={getBreakpointValue([8, 12, 16, 16])}
              style={{ width: "100%", height: "100%" }}
            >
              <Flex direction="col" className="gap-1 tablet:gap-2">
                <Text className="text-[18px] font-bold laptop:text-2xl laptop:font-normal">
                  &quot;New Chat&quot; was stealing focus from the primary
                  action.
                </Text>
                <Text className="tablet:text-[16px] laptop:text-[18px]">
                  The real primary action in a chat interface is sending a
                  message, not starting a new conversation. Elevating &quot;New
                  Chat&quot; as a primary button was misdirecting users&apos;
                  attention.
                </Text>
              </Flex>
            </LiquidGlass>
          </Flex>
        </Flex>
        <Flex
          direction="col"
          className="gap-3 tablet:gap-4 desktop:gap-6 laptop:hidden"
        >
          <Callout
            wrapperClassname="gap-1 px-4 py-3 tablet:gap-2 tablet:px-5 tablet:py-4 laptop:px-4 laptop:py-6 !flex-col bg-liquid-glass-light"
            borderRadius={getBreakpointValue([8, 12, 16, 16])}
            style={{ width: "100%", height: "100%" }}
          >
            <Flex direction="col" className="gap-1 tablet:gap-2">
              <Text className="text-[18px] font-bold laptop:text-2xl laptop:font-normal">
                The trigger button was too far from the action
              </Text>
              <Text className="tablet:text-[16px] laptop:text-[18px]">
                Placing agent selection in the top-right corner pulled
                users&apos; eyes away from the chat (where they were trying to
                work). Context was being lost before a conversation even
                started.
              </Text>
            </Flex>
          </Callout>
          <Callout
            wrapperClassname="gap-1 px-4 py-3 tablet:gap-2 tablet:px-5 tablet:py-4 laptop:px-4 laptop:py-6 !flex-col bg-liquid-glass-light"
            borderRadius={getBreakpointValue([8, 12, 16, 16])}
            style={{ width: "100%", height: "100%" }}
          >
            <Flex direction="col" className="gap-1 tablet:gap-2">
              <Text className="text-[18px] font-bold laptop:text-2xl laptop:font-normal">
                Inconsistent selection states broke visual consistency
              </Text>
              <Text className="tablet:text-[16px] laptop:text-[18px]">
                The selected agent state didn&apos;t match the established
                selection pattern in our design system. It&apos;s a small detail
                but could create unnecessary cognitive friction for users
                already familiar with the product.
              </Text>
            </Flex>
          </Callout>
          <Callout
            wrapperClassname="gap-1 px-4 py-3 tablet:gap-2 tablet:px-5 tablet:py-4 laptop:px-4 laptop:py-6 !flex-col bg-liquid-glass-light"
            borderRadius={getBreakpointValue([8, 12, 16, 16])}
            style={{ width: "100%", height: "100%" }}
          >
            <Flex direction="col" className="gap-1 tablet:gap-2">
              <Text className="text-[18px] font-bold laptop:text-2xl laptop:font-normal">
                The popover blocked the chat entirely
              </Text>
              <Text className="tablet:text-[16px] laptop:text-[18px]">
                Users who wanted to browse agents while staying in a
                conversation simply couldn&apos;t. The popover took over the
                screen and forced them to choose between one or the other.
              </Text>
            </Flex>
          </Callout>
          <Callout
            wrapperClassname="gap-1 px-4 py-3 tablet:gap-2 tablet:px-5 tablet:py-4 laptop:px-4 laptop:py-6 !flex-col bg-liquid-glass-light"
            borderRadius={getBreakpointValue([8, 12, 16, 16])}
            style={{ width: "100%", height: "100%" }}
          >
            <Flex direction="col" className="gap-1 tablet:gap-2">
              <Text className="text-[18px] font-bold laptop:text-2xl laptop:font-normal">
                &quot;New Chat&quot; was stealing focus from the primary action.
              </Text>
              <Text className="tablet:text-[16px] laptop:text-[18px]">
                The real primary action in a chat interface is sending a
                message, not starting a new conversation. Elevating &quot;New
                Chat&quot; as a primary button was misdirecting users&apos;
                attention.
              </Text>
            </Flex>
          </Callout>
        </Flex>
      </Flex>
    </Flex>
  );
};
