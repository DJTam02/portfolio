import { SectionHeader } from "@/app/components";
import { Callout, Flex, Text } from "@/app/ui-components";
import Image from "next/image";

export const MarketResearch = ({ id }: { id: string }) => {
  return (
    <Flex id={id} direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
      <SectionHeader
        title="Market Research 📈"
        description={
          <>
            Since Plato&apos;s workflows were novel, I couldn&apos;t rely on
            direct competitors, so I <i className="font-instrument">reframed</i>{" "}
            how I approached research.
          </>
        }
      />
      <Text className="tablet:text-[16px] laptop:text-[18px]">
        Most of what we were building had no direct parallels in the life
        sciences space. Rather than forcing inspiration from unrelated products,
        I identified specific interaction patterns from adjacent spaces that
        could be adapted to fit our context.
      </Text>
      <Image
        src="/images/scispot/market-research.png"
        alt="Market Research"
        width={2864}
        height={1700}
        className="w-full h-auto bg-no-repeat bg-cover"
      />
      <Flex direction="col" className="gap-2 laptop:gap-3">
        <Text className="tablet:text-[16px] laptop:text-[18px]">
          One pattern I explored on was how{" "}
          <b>AI products surface suggestions</b>. Namely, how other platforms
          help users discover what an agent is capable of and guide them toward
          using it. Since discoverability was one of our biggest user pain
          points, this was directly applicable.
        </Text>
        <Text className="tablet:text-[16px] laptop:text-[18px]">
          From market research, two gaps stood out:
        </Text>
      </Flex>
      <Flex
        direction="col"
        className="laptop:flex-row gap-3 tablet:gap-4 laptop:gap-6"
      >
        <Callout
          style={{ width: "100%", height: "100%" }}
          wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center"
        >
          <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
            Conversational AI alienates non-technical users
          </Text>
          <Text className="tablet:text-[16px] laptop:text-[18px]">
            Most AI products default to open-ended chat interfaces, which assume
            users already know what to ask for. For scientists unfamiliar with
            AI, this creates an immediate barrier.
          </Text>
        </Callout>
        <Callout
          style={{ width: "100%", height: "100%" }}
          wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center"
        >
          <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
            No precedent for AI in lab workflows
          </Text>
          <Text className="tablet:text-[16px] laptop:text-[18px]">
            No existing tool had successfully introduced AI into a scientific
            plate management context. This confirmed we were designing without a
            safety net, and that we had a real opportunity to define what
            state-of-the-art looked like.
          </Text>
        </Callout>
      </Flex>
    </Flex>
  );
};
