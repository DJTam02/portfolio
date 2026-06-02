import { Text, Flex } from "./ui-components";

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
              href="https://drive.google.com/file/d/1YSPo3_au_6uU3dkwz2kKOI8WLDBcJtoY/view"
              rel="noopener noreferrer"
            >
              resume
            </Text>{" "}
            and{" "}
            <Text
              variant="smallLink"
              className="inline underline tablet:text-2xl!"
              href="https://www.linkedin.com/in/rlai/"
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
