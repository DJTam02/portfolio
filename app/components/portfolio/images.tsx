"use client";

import { Flex, Button, Chip, Text } from "@/app/ui-components";
import { PhotoHover } from "./photoHover";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/app/constants";

export const Images = () => {
  const router = useRouter();

  return (
    <Flex
      direction="col"
      className="gap-2 tablet:gap-6 z-10"
      alignItems="stretch"
    >
      <PhotoHover
        src="/images/revvity-labs-thumbnail.png"
        alt="Revvity Labs Thumbnail"
        path={ROUTES.revvityLabs}
        wrapperClassName="w-full h-auto"
      >
        <Flex direction="col" justifyContent="between" className="h-full p-8">
          <Flex direction="row" className="gap-3 ml-auto hidden laptop:flex">
            <Chip>AI Products</Chip>
            <Chip>Product Thinking</Chip>
            <Chip>Interaction Design</Chip>
          </Flex>
          <Flex direction="row" className="gap-12">
            <Flex direction="col" className="gap-2 flex-1">
              <Text variant="h4" className="tablet:text-[40px]">
                Designing an AI-Powered Literature Summarization Agent for
                Modern Labs
              </Text>
              <Text className="tablet:text-2xl">Revvity | July 2025</Text>
            </Flex>
            <Text variant="h4" className="flex-1 hidden laptop:block">
              This case study outlines my efforts in a cross-functional
              hackathon for Revvity&apos;s first external-facing AI product,
              RevvityLabs. We delivered everything from user research, to
              datasets to train our AI, to a fully functioning prototype in just
              under 3 days, and even got to present to C-level executives!
            </Text>
          </Flex>
          <div className="laptop:hidden">
            <Button hasIcon onClick={() => router.push(ROUTES.revvityLabs)}>
              View Case Study
            </Button>
          </div>
        </Flex>
      </PhotoHover>
      <Flex
        direction="col"
        className="gap-2 tablet:gap-6 w-full relative laptop:flex-row"
      >
        <PhotoHover
          src="/images/scispot-thumbnail.png"
          alt="SciSpot Thumbnail"
          path={ROUTES.scispot}
          wrapperClassName="rounded-lg w-full flex-1 aspect-[3/2] object-cover laptop:aspect-auto laptop:object-contain laptop:w-[calc(50%-0.75rem)] h-auto"
        >
          <Flex direction="col" justifyContent="between" className="h-full p-8">
            <Flex direction="row" className="gap-3 ml-auto hidden laptop:flex">
              <Chip>AI Product Design</Chip>
              <Chip>Product Scoping</Chip>
            </Flex>
            <Flex direction="col" className="gap-2">
              <Text variant="h4" className="tablet:text-[40px]">
                Unifying fragmented workflows with Plato, an AI agent for all
                plate workflows
              </Text>
              <Text className="tablet:text-2xl">Scispot | September 2024</Text>
            </Flex>
            <div className="laptop:hidden">
              <Button hasIcon onClick={() => router.push(ROUTES.scispot)}>
                View Case Study
              </Button>
            </div>
          </Flex>
        </PhotoHover>
        <PhotoHover
          src="/images/revvity-chat-thumbnail.png"
          alt="Revvity Chat Thumbnail"
          wrapperClassName="w-full flex-1 aspect-[3/2] overflow-hidden absolute right-0 top-0 bottom-0 w-[calc(50%-0.75rem)] flex items-center"
          path={ROUTES.revvityAI}
        >
          <Flex direction="col" justifyContent="between" className="h-full p-8">
            <Flex direction="row" className="gap-3 ml-auto hidden laptop:flex">
              <Chip>AI Interaction Design</Chip>
              <Chip>Design Systems</Chip>
            </Flex>
            <Flex direction="col" className="gap-2">
              <Text variant="h4" className="tablet:text-[40px]">
                Scaling an agentic AI chatting tool to support 100+ AI agents
              </Text>
              <Text className="tablet:text-2xl">Revvity | July 2025</Text>
            </Flex>
            <div className="laptop:hidden">
              <Button hasIcon onClick={() => router.push(ROUTES.revvityAI)}>
                View Case Study
              </Button>
            </div>
          </Flex>
        </PhotoHover>
      </Flex>
      <PhotoHover
        src="/images/plooto-thumbnail.png"
        alt="Plooto Thumbnail"
        path={ROUTES.plooto}
        wrapperClassName="w-full h-auto"
      >
        <Flex direction="col" justifyContent="between" className="h-full p-8">
          <Flex direction="row" className="gap-3 ml-auto hidden laptop:flex">
            <Chip>Responsive Design</Chip>
            <Chip>Interaction Design</Chip>
            <Chip>User Research</Chip>
          </Flex>
          <Flex direction="row" className="gap-12">
            <Flex direction="col" className="gap-2 flex-1">
              <Text variant="h4" className="tablet:text-[40px]">
                Redesigning an onboarding dashboard using Jobs To Be Done and
                A/B Testing
              </Text>
              <Text className="tablet:text-2xl">Plooto | February 2024</Text>
            </Flex>
            <Text variant="h4" className="flex-1 hidden laptop:block">
              When I first joined Plooto, a series of A/B testing experiments
              was run to determine how to best bring new users to see value in
              our product sooner. As the primary designer assisting in the A/B
              testing experiments, my role was to design alternative experiences
              to better highlight the value of our product.
            </Text>
          </Flex>
          <div className="laptop:hidden">
            <Button hasIcon onClick={() => router.push(ROUTES.plooto)}>
              View Case Study
            </Button>
          </div>
        </Flex>
      </PhotoHover>
    </Flex>
  );
};
