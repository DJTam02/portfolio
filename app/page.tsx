"use client";

import Image from "next/image";
import {
  BLOB_PATH,
  BLOB_SIZE,
  CROSS_PATH,
  CROSS_SIZE,
  Flex,
  Icon,
  LiquidGlass,
  Modal,
  Navigation,
  ShapedLiquidGlass,
  Text,
} from "./ui-components";
import {
  TVBackground,
  PortfolioLarge,
  PortfolioSmall,
  Portfolio,
  ViewPortRenderer,
} from "./components";
import { useGetBreakpointValue } from "./hooks";
import { BREAKPOINTS } from "./constants";

export default function Home() {
  const { getBreakpointValue, width } = useGetBreakpointValue();

  const images = (
    <Flex
      direction="col"
      className="gap-2 tablet:gap-6 z-10"
      alignItems="stretch"
    >
      <Image
        src="/images/revvity-labs-thumbnail.png"
        className="w-full h-auto rounded-lg"
        alt="Revvity Labs Thumbnail"
        width={4000}
        height={2667}
      />
      <Flex
        direction="col"
        className="gap-2 tablet:gap-6 w-full laptop:relative"
      >
        <Image
          src="/images/scispot-thumbnail.png"
          className="rounded-lg w-full aspect-[3/2] object-cover laptop:aspect-auto laptop:object-contain laptop:w-[calc(50%-0.75rem)] h-auto"
          alt="SciSpot Thumbnail"
          width={4000}
          height={2667}
        />
        <div className="w-full aspect-[3/2] overflow-hidden laptop:aspect-auto laptop:absolute laptop:right-0 laptop:top-0 laptop:bottom-0 laptop:w-[calc(50%-0.75rem)] laptop:flex laptop:items-center">
          <Image
            src="/images/revvity-chat-thumbnail.png"
            className="rounded-lg w-full h-full object-cover laptop:h-auto laptop:object-contain"
            alt="Revvity Chat Thumbnail"
            width={4000}
            height={2667}
          />
        </div>
      </Flex>
      <Image
        src="/images/plooto-thumbnail.png"
        className="w-full h-auto rounded-lg"
        alt="Plooto Thumbnail"
        width={4000}
        height={2667}
      />
    </Flex>
  );

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
          <ShapedLiquidGlass
            scale={getBreakpointValue([0.24, 0.53, 0.91, 1])}
            style={{
              left: getBreakpointValue([187, 344, 686, 802]),
              position: "absolute",
              top: getBreakpointValue([6, 126, 215, 188]),
            }}
          />
          <ShapedLiquidGlass
            path={CROSS_PATH}
            scale={getBreakpointValue([0.23, 0.4, 0.85, 1])}
            size={CROSS_SIZE}
            style={{
              left: getBreakpointValue([35, 160, 298, 345]),
              position: "absolute",
              top: getBreakpointValue([34, 53, 69, 25]),
            }}
          />
          <ShapedLiquidGlass
            path={BLOB_PATH}
            scale={getBreakpointValue([0.33, 0.45, 0.96, 1])}
            size={BLOB_SIZE}
            style={{
              right: getBreakpointValue([24, 42.5, 85.5, 86.5]),
              position: "absolute",
              top: getBreakpointValue([89, 175, 302, 318]),
            }}
          />
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
        {width < BREAKPOINTS.tablet ? (
          images
        ) : (
          <Modal style={{ width: "100%" }}>{images}</Modal>
        )}
      </Flex>
    </Flex>
  );
}
