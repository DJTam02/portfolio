"use client";

import { PortfolioPage } from "../components/PortfolioPage";
import { Flex, LiquidGlass, Modal, Text } from "@/app/ui-components";
import { REVVITY_AI } from "@/app/constants";
import Image from "next/image";
import { useGetBreakpointValue } from "@/app/hooks";

export default function RevvityAI() {
  const { getBreakpointValue } = useGetBreakpointValue();

  return (
    <PortfolioPage project={REVVITY_AI}>
      <Flex direction="col" className="laptop:gap-10 tablet:gap-6 gap-3">
        <LiquidGlass
          style={{ width: "100%", height: "100%" }}
          borderRadius={getBreakpointValue([8, 12, 16, 16])}
          wrapperClassname="!flex-col items-stretch"
        >
          <div className="laptop:p-8 tablet:4 p-3 h-full bg-liquid-glass-lightest">
            <Image
              src="/images/revvity-ai/preview.png"
              alt="Revvity AI"
              width={2552}
              height={1658}
              className="w-full h-auto"
              loading="eager"
              sizes="100vw"
              quality={95}
            />
          </div>
        </LiquidGlass>
        <Flex direction="col" className="gap-4 laptop:gap-6">
          <Text variant="h3" className="laptop:text-[56px] tablet:text-[40px]">
            Scaling an internal agentic AI chatting tool to support 100+ AI
            agents.
          </Text>
          <Flex direction="col" className="tablet:flex-row gap-6 tablet:gap-10">
            <Flex direction="col" className="gap-1 flex-1">
              <Text
                variant="button"
                className="tablet:text-2xl laptop:text-[32px]"
              >
                Timeline
              </Text>
              <Text className="laptop:text-[18px] tablet:text-[16px]">
                1 week (July 2025)
              </Text>
            </Flex>
            <Flex direction="col" className="gap-1 flex-1">
              <Text
                variant="button"
                className="tablet:text-2xl laptop:text-[32px]"
              >
                Collaborators
              </Text>
              <Text className="laptop:text-[18px] tablet:text-[16px]">
                1 Product Manager Intern, 1 UX Research Intern, 3 AI/Engineering
                Interns
              </Text>
            </Flex>
            <Flex direction="col" className="gap-1 flex-1">
              <Text
                variant="button"
                className="tablet:text-2xl laptop:text-[32px]"
              >
                Skills
              </Text>
              <Text className="laptop:text-[18px] tablet:text-[16px]">
                Product Thinking, Interaction Design, Design Systems
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Modal style={{ width: "100%" }}>
        <Flex direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
          <Flex direction="col" className="gap-1">
            <Text variant="button" className="text-[18px] laptop:text-2xl">
              Long Story Short 💬
            </Text>
            <Text variant="h4" className="laptop:text-[40px]">
              I redesigned RevvityAI &apos;s agent selection experience to scale
              from 5 to <i className="font-instrument">100+ AI agents</i>.
            </Text>
          </Flex>
          <Flex
            direction="col"
            className="tablet:flex-row gap-3 tablet:gap-4 desktop:gap-6"
          >
            <LiquidGlass
              style={{ width: "100%", height: "100%" }}
              borderRadius={getBreakpointValue([8, 12, 16, 16])}
              id="card-1"
              wrapperClassname="flex-1 gap-2 p-3 tablet:p-4 laptop:px-4 laptop:py-3 bg-liquid-glass-light !flex-col"
            >
              <Flex direction="col" className="gap-1">
                <Text className="font-bold text-[18px] laptop:text-2xl laptop:font-normal">
                  01. Design
                </Text>
                <Text className="tablet:text-[16px] laptop:text-[18px]">
                  Owned end-to-end interaction design for the agent selection
                  experience, making key decisions around discoverability,
                  context preservation, and information hierarchy across a
                  complex, multi-agent interface.
                </Text>
              </Flex>
            </LiquidGlass>
            <LiquidGlass
              style={{ width: "100%", height: "100%" }}
              borderRadius={getBreakpointValue([8, 12, 16, 16])}
              id="card-2"
              wrapperClassname="flex-1 gap-2 p-3 tablet:p-4 laptop:px-4 laptop:py-3 bg-liquid-glass-light !flex-col"
            >
              <Flex direction="col" className="gap-1">
                <Text className="font-bold text-[18px] laptop:text-2xl laptop:font-normal">
                  02. Systems Thinking
                </Text>
                <Text className="tablet:text-[16px] laptop:text-[18px]">
                  Designed with scale as a constraint from the start. Every
                  layout decision, trigger placement, and panel interaction was
                  evaluated against the question: does this still work when
                  there are 100+ agents?
                </Text>
              </Flex>
            </LiquidGlass>
            <LiquidGlass
              style={{ width: "100%", height: "100%" }}
              borderRadius={getBreakpointValue([8, 12, 16, 16])}
              wrapperClassname="flex-1 gap-2 p-3 tablet:p-4 laptop:px-4 laptop:py-3 bg-liquid-glass-light !flex-col"
            >
              <Flex direction="col" className="gap-1">
                <Text className="font-bold text-[18px] laptop:text-2xl laptop:font-normal">
                  03. XFN Work
                </Text>
                <Text className="tablet:text-[16px] laptop:text-[18px]">
                  Partnered closely with engineers in weekly standups and
                  critique sessions to test feasibility, and worked alongside a
                  UX researcher to ensure design decisions were grounded in real
                  user behaviour rather than assumptions.
                </Text>
              </Flex>
            </LiquidGlass>
          </Flex>
        </Flex>
      </Modal>
      <Flex direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
        <Flex direction="col" className="gap-1 laptop:gap-2">
          <Text className="text-[18px] laptop:text-2xl laptop:font-light">
            Design Philosophy 💭
          </Text>
          <Text variant="h4" className="laptop:text-[40px]">
            The central challenge in scaling RevvityAI wasn&apos;t technical, it
            was <i className="font-instrument">cognitive</i>.
          </Text>
        </Flex>
        <Flex direction="col" className="gap-2 laptop:gap-3">
          <Text className="tablet:text-[16px] laptop:text-[18px]">
            Adding more AI agents to a product doesn&apos;t necessarily make it
            more powerful in the eyes of a user. It makes it more overwhelming.
            The moment a user can&apos;t find the right agent, or doesn&apos;t
            understand what an agent does, the entire value of the ecosystem
            decreases and becomes simply noise.
          </Text>
          <Text className="tablet:text-[16px] laptop:text-[18px]">
            This shaped two <b>guiding principles:</b>
          </Text>
          <ol className="list-decimal font-alegreya text-sm tablet:text-[16px] laptop:text-[18px] pl-3 tablet:pl-4 laptop:pl-5">
            <li>
              Discoverability is a trust problem, not just a navigation problem:
              If users can&apos;t find the right agent, they won&apos;t trust
              that the right agent exists. Every layout decision had to make the
              ecosystem feel navigable, not infinite.
            </li>
            <li>
              Context is everything in AI interactions: Interrupting an AI
              conversation has a real cost. Users lose their thread, their
              momentum, and their trust in the system. Keeping users anchored to
              their current context wasn&apos;t a nice-to-have, it was a core
              design constraint.
            </li>
          </ol>
        </Flex>
      </Flex>
    </PortfolioPage>
  );
}
