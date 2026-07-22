import { Flex, Text } from "@/app/ui-components";
import { FirstNameBanner } from "./components/FirstNameBanner";
import { LastNameBanner } from "./components/LastNameBanner";
import Image from "next/image";

export default function About() {
  return (
    <Flex
      direction="col"
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
    </Flex>
  );
}
