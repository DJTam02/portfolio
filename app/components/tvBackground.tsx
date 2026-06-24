import { Flex, Text } from "@/app/ui-components";

export const TVBackground = () => (
  <Flex
    className="bg-[url(/images/tv.png)] bg-no-repeat bg-cover w-full flex-1 min-h-100 relative"
    alignItems="stretch"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 1728 1083"
      fill="none"
      preserveAspectRatio="none"
      className="min-h-100"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1728 0H0V1087H1728V0ZM864 14.2857C323.999 14.2857 92.1222 56.5714 92.1222 56.5714C92.1222 56.5714 38.2239 281.022 42.3385 541.368C46.453 801.714 92.1222 1026.17 92.1222 1026.17C92.1222 1026.17 334.857 1072.57 864 1072.57C1393.14 1072.57 1632.45 1026.17 1632.45 1026.17C1632.45 1026.17 1682.12 769.714 1685.64 541.368C1689.17 313.022 1632.45 56.5714 1632.45 56.5714C1632.45 56.5714 1404 14.2857 864 14.2857Z"
        fill="#181818"
      />
    </svg>
    <Flex
      direction="col"
      className="absolute gap-2 tablet:gap-4 laptop:gap-5 w-full laptop:px-45 px-15 top-[50%] -translate-y-1/2"
    >
      <Text
        variant="h4Serif"
        className="tablet:text-[40px] laptop:text-[60px] laptop:leading-[84%] laptop:not-italic desktop:text-[80px] !text-background"
      >
        Hey, there! I&apos;m Rebecca—
      </Text>
      <Text
        variant="h4Serif"
        className="leading-[84%] desktop:text-[160px] laptop:text-[148px] tablet:text-[80px] text-[68px] not-italic !text-background"
      >
        dreamer, innovator, storyteller, <i>designer.</i>
      </Text>
    </Flex>
  </Flex>
);
