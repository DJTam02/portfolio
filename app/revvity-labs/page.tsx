"use client";

import { PortfolioPage } from "../components/PortfolioPage";
import { Flex, LiquidGlass, Modal, Text } from "@/app/ui-components";
import { REVIVITY_LABS_NAV_ITEMS } from "./constants";
import Image from "next/image";
import { useGetBreakpointValue } from "@/app/hooks";

export default function RevvityLabs() {
  const { getBreakpointValue } = useGetBreakpointValue();

  return (
    <PortfolioPage items={REVIVITY_LABS_NAV_ITEMS}>
      <Flex direction="col" className="laptop:gap-10 tablet:gap-6 gap-3">
        <LiquidGlass
          style={{ width: "100%", height: "100%" }}
          borderRadius={16}
          wrapperClassname="!flex-col items-stretch"
        >
          <div className="laptop:p-8 tablet:4 p-3 h-full bg-liquid-glass-lightest">
            <Image
              src="/images/revvity-labs/preview.png"
              alt="Revvity Labs"
              width={1104}
              height={621}
              className="w-full h-auto"
            />
          </div>
        </LiquidGlass>
        <Flex direction="col" className="gap-4 laptop:gap-6">
          <Text variant="h3" className="laptop:text-[56px] tablet:text-[40px]">
            Designing an AI-Powered Literature Summarization Agent for modern
            life-science labs.
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
                3-day hackathon (3 business days, 24 hours)
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
                3 UX Designers, 5 UX Researchers, 5 AI Engineers
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
                Product Thinking, Interaction Design, Scoping
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
              I led the{" "}
              <span className="italic font-instrument">
                design & rapid prototyping
              </span>{" "}
              of an AI agent for scientific literature discovery, shipping a
              functional demo to C-level executives in 3 days.
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
                  Owned interaction design for a Literature Summarization Agent,
                  including key decisions around AI transparency, user control,
                  and a dual-mode chat/browse experience.
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
                  Guided a cross-functional team of designers and researchers
                  through user interviews, three rounds of iterative critique,
                  and a high-fidelity prototype.
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
                  Collaborated with AI engineers and UX researchers to scope
                  feasibility and align on a single validated happy-path
                  workflow for the executive demo.
                </Text>
              </Flex>
            </LiquidGlass>
          </Flex>
        </Flex>
      </Modal>
      <Flex direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
        <Flex direction="col" className="gap-1 laptop:gap-2">
          <Text className="text-[18px] laptop:text-2xl">
            Design Philosophy 💭
          </Text>
          <Text variant="h4">
            The central challenge in designing RevvityLabs was the{" "}
            <span className="italic font-instrument">newness of A</span>I in
            scientific workflows.
          </Text>
        </Flex>
        <Flex direction="col" className="gap-2 laptop:gap-3">
          <Text className="tablet:text-[16px] laptop:text-[18px]">
            Most scientists haven&apos;t used AI as a research collaborator
            before. This means first impressions are everything, and a single
            moment of confusion or misplaced trust could cause them to abandon
            the tool entirely.
          </Text>
          <Text className="tablet:text-[16px] laptop:text-[18px]">
            This shaped two <b>guiding principles:</b>
          </Text>
          <ol className="list-decimal font-alegreya text-sm tablet:text-[16px] laptop:text-[18px] pl-3 tablet:pl-4 laptop:pl-5">
            <li>
              Design for trust through transparency, not confidence; surface how
              the AI arrived at its results so users can evaluate, not just
              accept
            </li>
            <li>
              Keep humans in the loop for high-stakes decisions; use AI as a
              capable assistant, never as a replacement for scientific judgment
            </li>
          </ol>
        </Flex>
      </Flex>
    </PortfolioPage>
  );
}
