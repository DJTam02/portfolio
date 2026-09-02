"use client";

import { PortfolioPage } from "../components/PortfolioPage";
import { Flex, LiquidGlass, Modal, Text } from "@/app/ui-components";
import { SCI_SPOT } from "@/app/constants";
import Image from "next/image";
import { useGetBreakpointValue } from "@/app/hooks";

export default function Scispot() {
  const { getBreakpointValue } = useGetBreakpointValue();

  return (
    <PortfolioPage project={SCI_SPOT}>
      <Flex direction="col" className="laptop:gap-10 tablet:gap-6 gap-3">
        <LiquidGlass
          style={{ width: "100%", height: "100%" }}
          borderRadius={getBreakpointValue([8, 12, 16, 16])}
          wrapperClassname="!flex-col items-stretch"
        >
          <div className="laptop:p-8 tablet:4 p-3 h-full bg-liquid-glass-lightest">
            <Image
              src="/images/scispot/preview.png"
              alt="SciSpot"
              width={1277}
              height={938}
              className="w-full h-auto"
              loading="eager"
              sizes="100vw"
              quality={95}
            />
          </div>
        </LiquidGlass>
        <Flex direction="col" className="gap-4 laptop:gap-6">
          <Text variant="h3" className="laptop:text-[56px] tablet:text-[40px]">
            Unifying fragmented workflows with Plato, an AI agent for all plate
            workflows.
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
                3 weeks (September 2024)
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
                1 Chief Product Officer (CPO), 1 Founding Designer, 4 Engineers
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
                Product Thinking, Interaction Design, Product Scoping
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
              As the sole designer, I shipped an AI agent that helped scientists{" "}
              <i className="font-instrument">cut data analysis time by 60%</i>.
            </Text>
          </Flex>
          <Text className="text-[16px] laptop:text-[18px] hidden tablet:block">
            I worked as the sole product designer at Scispot, collaborating
            closely with a CPO, a mentor designer, and 4 engineers to design
            Plato: an AI agent that unified three fragmented plate management
            workflows into one seamless experience.
          </Text>
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
                  Owned end-to-end interaction design for Plato, making key
                  decisions around entry points, page architecture, and AI
                  transparency for users encountering AI in their workflow for
                  the first time.
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
                  02. Leadership
                </Text>
                <Text className="tablet:text-[16px] laptop:text-[18px]">
                  Worked closely with the CPO to scope the project, identifying
                  which plate workflows could benefit most from AI assistance
                  and ensuring designs stayed grounded in real user behaviour.
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
                  Partnered daily with engineers to understand the AI&apos;s
                  full capabilities. Ran critique sessions with engineering and
                  customer success teams to test feasibility and real-world
                  usage patterns.
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
            The <i className="font-instrument">central challenge </i>in
            designing Plato was introducing AI to users who have never used it
            before, and who didn&apos;t ask for it.
          </Text>
        </Flex>
        <Flex direction="col" className="gap-2 laptop:gap-3">
          <Text className="tablet:text-[16px] laptop:text-[18px]">
            Scientists are methodical, skeptical by nature, and deeply resistant
            to anything that disrupts a workflow they&apos;ve spent years
            refining. A single moment of confusion or misplaced trust could
            cause them to dismiss a feature entirely.
          </Text>
          <Text className="tablet:text-[16px] laptop:text-[18px]">
            These characteristics two <b>guiding principles:</b>
          </Text>
          <ol className="list-decimal font-alegreya text-sm tablet:text-[16px] laptop:text-[18px] pl-3 tablet:pl-4 laptop:pl-5">
            <li>
              Make AI feel like a natural extension of existing workflows, not a
              separate tool they have to learn. If scientists felt like they
              were doing the same tasks they already knew, but faster, adoption
              would follow.
            </li>
            <li>
              Never let AI get in the way. Unlike consumer AI products where
              users opt in out of curiosity, our users needed to be eased in
              gradually, with full control over when and how much the agent was
              involved.
            </li>
          </ol>
        </Flex>
      </Flex>
    </PortfolioPage>
  );
}
