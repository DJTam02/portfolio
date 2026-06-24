"use client";

import {
  Accordion,
  BLOB_PATH,
  BLOB_SIZE,
  Button,
  CROSS_PATH,
  CROSS_SIZE,
  Flex,
  Footer,
  Icon,
  LiquidGlass,
  Modal,
  Navigation,
  ShapedLiquidGlass,
  Text,
} from "@/app/ui-components";
import {
  RollingText,
  TVBackground,
  PortfolioLarge,
  PortfolioSmall,
  Portfolio,
  ViewPortRenderer,
} from "@/app/components";
import { useGetBreakpointValue } from "@/app/hooks";
import { BREAKPOINTS, LINKS } from "@/app/constants";
import { Images } from "@/app/components/portfolio/images";
import { useRouter } from "next/navigation";

export default function Home() {
  const { getBreakpointValue, width } = useGetBreakpointValue();
  const router = useRouter();

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
          <Images />
        ) : (
          <Modal style={{ width: "100%" }}>
            <Images />
          </Modal>
        )}
      </Flex>
      <Flex
        direction="col"
        className="laptop:flex-row laptop:gap-20 laptop:py-15 laptop:px-18 gap-4 tablet:p-6 tablet:pb-12 px-3 pt-5 pb-10"
      >
        <Flex direction="col" className="gap-6 flex-1">
          <Flex direction="col" className="gap-3">
            <Text variant="h3" className="laptop:text-[40px]">
              Interested in{" "}
              <span className="italic font-instrument text-shadow-none">
                working together?
              </span>
            </Text>
            <Text
              variant="h4"
              className="text-[18px] tablet:text-2xl tablet:font-light"
            >
              The items listed are my current freelance services. If you are
              interested in a creative service unlisted or have questions about
              my work, please contact me :)
            </Text>
          </Flex>
          <Button
            onClick={() => router.push(LINKS.contact.email)}
            className="hidden laptop:block"
          >
            Contact
          </Button>
        </Flex>
        <Flex direction="col" className="gap-6 flex-1" alignItems="center">
          <Flex direction="col" className="gap-4">
            <Accordion title="Digital" startOpen>
              <Text variant="list" className="text-[18px] tablet:text-2xl">
                UX + UI Design
              </Text>
              <Text variant="list" className="text-[18px] tablet:text-2xl">
                UX Consulting
              </Text>
              <Text variant="list" className="text-[18px] tablet:text-2xl">
                Product Strategy
              </Text>
              <Text variant="list" className="text-[18px] tablet:text-2xl">
                Website Design
              </Text>
              <Text variant="list" className="text-[18px] tablet:text-2xl">
                Prototyping
              </Text>
            </Accordion>
            <Accordion title="Identity">
              <Text variant="list" className="text-[18px] tablet:text-2xl">
                Logo + Submark
              </Text>
              <Text variant="list" className="text-[18px] tablet:text-2xl">
                Typography
              </Text>
              <Text variant="list" className="text-[18px] tablet:text-2xl">
                Colour Palette
              </Text>
              <Text variant="list" className="text-[18px] tablet:text-2xl">
                Graphics, Illustrations &amp; Icons
              </Text>
              <Text variant="list" className="text-[18px] tablet:text-2xl">
                Brand Style Guide
              </Text>
            </Accordion>
          </Flex>
          <div
            className={`${width < BREAKPOINTS.tablet ? "w-full" : "w-[200px]"} laptop:hidden`}
          >
            <Button
              onClick={() => router.push(LINKS.contact.email)}
              className="!flex-col"
              style={{ width: "100%" }}
            >
              Contact
            </Button>
          </div>
        </Flex>
      </Flex>
      <RollingText />
      <Footer />
    </Flex>
  );
}
