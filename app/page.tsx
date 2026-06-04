import { Text, Flex } from "./ui-components";
import { LINKS } from "./constants";
export default function Home() {
  return (
    <Flex
      direction="col"
      justifyContent="center"
      alignItems="center"
      className="h-screen w-full"
    >
      <Flex
        direction="col"
        className="gap-3"
        justifyContent="center"
        alignItems="center"
      >
        <Text variant="title" className="text-[48px]! tablet:text-[68px]!">
          Coming soon..
        </Text>
        <Flex
          direction="col"
          justifyContent="center"
          alignItems="center"
          className="gap-2"
        >
          <Text className="tablet:text-2xl!">
            Whoops! I&apos;m still revamping my portfolio.
          </Text>
          <Text className="tablet:text-2xl! text-center">
            In the meantime, check out my{" "}
            <Text
              variant="smallLink"
              className="inline underline tablet:text-2xl!"
              href={LINKS.resume}
              rel="noopener noreferrer"
            >
              resume
            </Text>{" "}
            and{" "}
            <Text
              variant="smallLink"
              className="inline underline tablet:text-2xl!"
              href={LINKS.linkedIn}
              rel="noopener noreferrer"
            >
              LinkedIn
            </Text>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
