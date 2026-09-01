"use client";

import { Button, Flex, Modal, Text } from "@/app/ui-components";
import { FirstNameBanner } from "./components/FirstNameBanner";
import { LastNameBanner } from "./components/LastNameBanner";
import Image from "next/image";
import { PhotoSection } from "./components/PhotoSection";
import { TypewriterPhrases } from "./components/TypewriterPhrases";
import { PhotoSlideshow } from "./components/PhotoSlideshow";
import { useGetBreakpointValue } from "../hooks/useGetBreakpointValue";
import { useRouter } from "next/navigation";
import { ROUTES } from "../constants";

export default function About() {
  const { getBreakpointValue } = useGetBreakpointValue();
  const router = useRouter();
  return (
    <Flex
      direction="col"
      alignItems="stretch"
      className="laptop:px-18 laptop:pb-20 laptop:gap-20 tablet:px-6 tablet:pb-10 tablet:gap-10 px-3 pb-8 gap-6 pt-6"
    >
      <Flex direction="col" className="relative">
        <Text className="text-[16px] font-instrument tablet:text-[32px] laptop:text-[64px] desktop:text-[80px]">
          ABOUT
        </Text>
        <FirstNameBanner />
        <LastNameBanner className="self-end mt-[-4%]" />
        <Text
          variant="h4Serif"
          className="text-[20px] tablet:text-[40px] laptop:text-[60px] absolute top-[54%] w-full"
        >
          It&apos;s nice to e-meet you :)
        </Text>
        <Flex
          direction="col"
          className="absolute bottom-0 tablet:bottom-3 laptop:bottom-6 right-0"
        >
          <Text className="font-instrument text-right text-[20px] tablet:text-[32px] laptop:text-[40px] desktop:text-[56px]">
            LEARN ABOUT MY
          </Text>
          <Text className="font-archivo text-right text-2xl tablet:text-[40px] laptop:text-[56px] desktop:text-[72px]">
            JOURNEY
            <br />
            INTO
            <br />
            DESIGN!
          </Text>
        </Flex>
        <Image
          src="/images/headshot.png"
          alt="About Image"
          width={2597}
          height={3153}
          className="mx-auto aspect-29/36 desktop:h-[1045px] laptop:h-[993] tablet:h-[546px] h-[316px] w-auto mt-[-14%]"
        />
      </Flex>
      <Flex direction="col" className="gap-6 tablet:gap-10 pt-9 tablet:pt-0">
        <PhotoSection
          text={[
            <span key="1">
              As a kid, most of what I took interest in showed that I had a
              natural inclination to <i className="font-instrument">create</i>.
            </span>,
            "I was a designer long before I knew what design was. Sewing clothes for dolls, building dollhouse furniture, creating allowed me to express in a way that was my own.",
          ]}
          image="/images/about/about-1.png"
          imageAlt="Baby Photo"
          imageWidth={1201}
          imageHeight={1601}
          tag={{
            text: "Canadian born, Taiwanese & Japanese",
            right: getBreakpointValue([0, 0, 260, 525]),
            top: getBreakpointValue([0, 0, 30, 52]),
          }}
        />
        <PhotoSection
          text={[
            "But then in high school, I found that I excelled at engineering. Logic came naturally, systems made sense to me, and I found myself drawn to how things worked.",
            "The problem was, none of it scratched the creative itch. I wanted to make things that were beautiful and functional.",
          ]}
          image="/images/about/about-2.png"
          imageAlt="Iron Ring Photo"
          imageWidth={1168}
          imageHeight={1556}
          imagePosition="right"
          tag={{
            text: "Engineer turned designer",
            right: getBreakpointValue([0, 0, 525, 573]),
            top: getBreakpointValue([0, 0, 524, 641]),
          }}
        />
        <PhotoSection
          text="What I did know was that I loved connecting with people. Building relationships, understanding what made them tick, it always felt second nature to me. I was that person who could strike up a conversation with just about anyone."
          image="/images/about/about-3.png"
          imageAlt="Photo with sister"
          imageWidth={1168}
          imageHeight={1556}
        />
        <PhotoSection
          text="University is where everything clicked. I discovered UX design, and it was the bridge I longed for. Engineering thinking meets human empathy meets visual craft. It was the first time I felt like I didn't have to choose between the parts of myself that felt most alive."
          image="/images/about/about-4.jpg"
          imageAlt="Graduation Photo"
          imageWidth={2365}
          imageHeight={2048}
          imagePosition="right"
          tag={{
            text: "Graduated from Systems Design Engineering @UWaterloo!",
            right: getBreakpointValue([0, 0, 30, 53]),
            bottom: getBreakpointValue([0, 0, 24, 35]),
          }}
        />
        <PhotoSection
          text={[
            "I've always been a yapper, about pretty much anything and everything.",
            <span key="2">
              Design taught me to <i className="font-instrument">listen</i>.
              Through design I learned the most impactful of creations starts
              with first listening: to what moves people, to what they dream of,
              to the “why” of everything.
            </span>,
            <span key="3">
              I&apos;m searching for a team that cares about{" "}
              <i className="font-instrument">intentionality</i> and{" "}
              <i className="font-instrument">detail</i> as much as I do.
            </span>,
          ]}
          image="/images/about/about-5.png"
          imageAlt="Picnic Photo"
          imageWidth={1441}
          imageHeight={1921}
          tag={{
            text: "MBTI: ENFJ-A",
            right: getBreakpointValue([0, 0, 674, 792]),
            bottom: getBreakpointValue([0, 0, 16, 20]),
          }}
        />
        <PhotoSection
          text={[
            <span key="1">
              <i className="font-instrument">In my spare time</i>, I&apos;m
              probably making bread or cafe-hopping.
            </span>,
            "Other than that, you'll find me making tweaks to my portfolio, planning my next trip, and hanging out with friends.",
          ]}
          image="/images/about/about-6.png"
          imageAlt="Cafe Hopping Photo"
          imageWidth={1168}
          imageHeight={1556}
          imagePosition="right"
          // tag={{
          //   text: "📍Based in Toronto",
          //   right: getBreakpointValue([0, 0, 521, 641]),
          //   bottom: getBreakpointValue([0, 0, 126, 123]),
          // }}
        />
      </Flex>
      <Modal
        className="hidden tablet:flex"
        wrapperClassname="items-stretch !flex-col"
        style={{ width: "100%" }}
        id="test"
      >
        <Flex
          direction="col"
          className="gap-1 laptop:gap-2 w-full"
          alignItems="stretch"
        >
          <Text variant="bodyLarge" className="text-[18px] laptop:text-[24px]">
            Fun Facts.
          </Text>
          <Text variant="h4" className="laptop:text-[56px]">
            <i className="font-instrument">Rebecca Lai</i>,{" "}
            <TypewriterPhrases />
          </Text>
        </Flex>
      </Modal>
      <PhotoSlideshow />
      <Flex
        direction="col"
        className="gap-3 laptop:gap-6 hidden tablet:flex"
        alignItems="center"
      >
        <Text variant="h4" className="laptop:text-[40px]">
          A dedication to the <i className="font-instrument">people </i> who
          have had the biggest impact on my growth both as a designer and as a
          person &lt;3
        </Text>
        <Flex
          direction="col"
          className="gap-4 laptop:flex-row laptop:gap-6 desktop:gap-8"
        >
          <Flex
            direction="row"
            className="gap-4 laptop:gap-6 desktop:gap-8 flex-1 laptop:flex-2/3"
          >
            <Flex className="flex-1">
              <Image
                src="/images/about/rebecca+ema.png"
                alt="Rebecca, Aria, and Edrea"
                width={1168}
                height={1556}
                className="flex-1 h-auto object-cover"
              />
            </Flex>
            <Flex className="flex-1">
              <Image
                src="/images/about/ppg.png"
                alt="Rebecca and Ema"
                width={1006}
                height={1556}
                className="flex-1 h-auto object-cover"
              />
            </Flex>
          </Flex>
          <Flex className="flex-1 laptop:flex-1/3">
            <Image
              src="/images/about/rebecca+jacob.jpg"
              alt="Rebecca and Jacob"
              width={2048}
              height={1536}
              className="object-cover"
            />
          </Flex>
        </Flex>
        <Button hasIcon onClick={() => router.push(ROUTES.lifeCredits)}>
          See my life credits
        </Button>
      </Flex>
    </Flex>
  );
}
