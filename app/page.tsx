"use client";

import { Flex, Icon, LiquidGlass, Navigation, Text } from "./ui-components";
import {
  TVBackground,
  PortfolioLarge,
  PortfolioSmall,
  Portfolio,
  ViewPortRenderer,
} from "./components";
import { useGetBreakpointValue } from "./hooks";

export default function Home() {
  const getBreakpointValue = useGetBreakpointValue();

  return (
    <Flex direction="col">
      <Flex direction="col" className="laptop:h-screen laptop:min-h-216">
        <Navigation />
        <TVBackground />
      </Flex>
      <Flex
        direction="col"
        alignItems="stretch"
        className="desktop:pt-39 laptop:pt-25 laptop:pb-20 laptop:px-18 tablet:p-6 tablet:gap-9 p-3 gap-2 relative"
      >
        <ViewPortRenderer
          className="absolute"
          smallComponent={<PortfolioSmall />}
          mediumComponent={<Portfolio />}
          largeComponent={<PortfolioLarge />}
          largeClassName="top-15 left-8 right-8"
          mediumClassName="top-6 right-3 left-4"
          smallClassName="top-3 left-1 right-1"
        />
        <Flex className="desktop:h-109.5 laptop:h-104 tablet:h-56.75 h-32.5 relative">
          {/* I enjoy creating AI products button */}
          <LiquidGlass
            style={{
              position: "absolute",
              right: 0,
              top: getBreakpointValue([0, 47, 57, 0]),
            }}
          >
            <Text
              variant="h4"
              className="desktop:px-8 laptop:py-4 laptop:px-7 tablet:px-4 tablet:py-2 hidden tablet:block whitespace-nowrap tablet:text-[18px] laptop:text-2xl desktop:text-[40px]"
            >
              I enjoy creating AI products!
            </Text>
          </LiquidGlass>
          <LiquidGlass
            style={{
              position: "absolute",
              bottom: 0,
              left: getBreakpointValue([15, 36, 57, 35]),
            }}
          >
            <Flex
              alignItems="center"
              className="desktop:px-8 laptop:py-4 laptop:px-7 tablet:px-4 tablet:py-2 py-1.5 px-3 gap-2 laptop:gap-2.5"
            >
              <Text className="whitespace-nowrap tablet:text-[18px] laptop:text-2xl desktop:text-[40px]">
                Check out my work below
              </Text>
              <Icon
                size={getBreakpointValue([2.5, 3, 4.5, 6])}
                name="arrowDown"
                scaleIcon
              />
            </Flex>
          </LiquidGlass>
        </Flex>
      </Flex>
    </Flex>
  );
}
