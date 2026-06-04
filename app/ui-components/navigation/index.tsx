"use client";

import React, { useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { Flex } from "../flex";
import { Text } from "../text";
import { Icon } from "../icon";
import { LINKS, ROUTES } from "../../constants";
import { LiquidGlass } from "../liquidGlass";
import { Button } from "../button";

const NAV_ROUTES = ["portfolio", "about"] as const;

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  const navButtons = useMemo(
    () =>
      NAV_ROUTES.map((route) => {
        const isCurrentPage = pathname === ROUTES[route];
        return (
          <Button
            className={
              isCurrentPage
                ? "bg-liquid-glass-light flex-1"
                : "bg-transparent flex-1"
            }
            isBorderless={!isCurrentPage}
            onClick={() => router.push(ROUTES[route])}
            key={route}
            style={{ width: "100%" }}
          >
            {route}
          </Button>
        );
      }),
    [pathname, router],
  );

  return (
    <Flex
      justifyContent="between"
      alignItems="center"
      className="w-full tablet:px-6 laptop:px-8 px-3 py-5 gap-4"
    >
      <Flex direction="col" className="flex-1">
        <Text variant="h4Serif">Rebecca Lai</Text>
        <Text variant="bodyRegular">UX Designer</Text>
      </Flex>

      {/* Center elements */}
      <Flex className="tablet:flex hidden">
        <LiquidGlass>
          <Flex className="p-2 bg-liquid-glass">{navButtons}</Flex>
        </LiquidGlass>
      </Flex>

      {/* Right side elements */}
      {/* Desktop */}
      <Flex className="laptop:flex hidden flex-1">
        <Flex className="py-2 px-3 gap-8 ml-auto">
          <Text
            variant="link"
            href={LINKS.linkedIn}
            target="_blank"
            className="gap-2.5"
          >
            LinkedIn <Icon name="arrowUpRight" />
          </Text>
          <Text
            variant="link"
            href={LINKS.resume}
            target="_blank"
            className="gap-2.5"
          >
            Resume <Icon name="arrowUpRight" />
          </Text>
        </Flex>
      </Flex>

      {/* Tablet */}
      <Flex direction="col" className="laptop:hidden">
        <LiquidGlass>
          <Flex
            className="py-2 px-3 bg-liquid-glass"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "close" : "menu"} size="xl" />
          </Flex>
        </LiquidGlass>
        {isMenuOpen && (
          <Flex className="relative">
            <LiquidGlass
              style={{ position: "absolute", top: 16, right: 0 }}
              borderRadius={24}
            >
              <Flex direction="col" className="p-2 bg-liquid-glass w-45 gap-2">
                <Flex direction="col" className="gap-2 tablet:hidden">
                  {navButtons}
                </Flex>
                <Button
                  isBorderless
                  onClick={() => openLink(LINKS.linkedIn)}
                  className="bg-transparent"
                >
                  <Text variant="bodyLarge">LinkedIn</Text>
                  <Icon name="arrowUpRight" />
                </Button>
                <Button
                  isBorderless
                  onClick={() => openLink(LINKS.resume)}
                  className="bg-transparent"
                >
                  <Text variant="bodyLarge">Resume</Text>
                  <Icon name="arrowUpRight" />
                </Button>
              </Flex>
            </LiquidGlass>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
