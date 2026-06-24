"use client";

import { Button, Flex, Text } from "@/app/ui-components";
import { useRouter } from "next/navigation";

export default function ComingSoon() {
  const router = useRouter();

  return (
    <Flex
      direction="col"
      className="h-screen w-full laptop:min-h-216 gap-2 tablet:gap-3 bg-background"
      justifyContent="center"
      alignItems="center"
    >
      <Text variant="h2Serif" className="tablet:text-[68px]">
        Coming Soon...
      </Text>
      <Flex direction="col" className="gap-10" alignItems="center">
        <Text className="tablet:text-2xl">
          Whoops! This page is still under construction.
        </Text>
        <Button
          hasIcon
          onClick={() => router.push("/")}
          className="whitespace-nowrap"
        >
          Go Back Home
        </Button>
      </Flex>
    </Flex>
  );
}
