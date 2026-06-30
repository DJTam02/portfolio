import { RebeccaLaiFull } from "./rebeccaLaiFull";
import { RebeccaLaiMedium } from "./rebeccaLaiMedium";
import { RebeccaLaiSmall } from "./rebeccaLaiSmall";
import { Flex } from "../flex";
import { Text } from "../text";
import { LINKS } from "@/app/constants";
import { Icon } from "../icon";

interface FooterProps {
  variant?: "default" | "case-study";
}

export const Footer = ({ variant = "default" }: FooterProps) => (
  <div id="portfolio-footer" className="relative">
    {/* Name Backgrounds */}
    <div
      className={`absolute ${variant === "default" ? "right-28 top-10" : "right-8 bottom-8.25"} hidden laptop:block`}
    >
      <RebeccaLaiFull />
    </div>
    <div className="absolute right-6 top-5 hidden tablet:block laptop:hidden">
      <RebeccaLaiMedium />
    </div>
    <div className="absolute right-3 bottom-10.5 block tablet:hidden">
      <RebeccaLaiSmall />
    </div>
    <Flex
      direction="col"
      className={`${variant === "default" ? "laptop:px-18" : "laptop:px-8"} laptop:gap-8 tablet:px-6 tablet:pt-10 tablet:gap-10 px-3 pt-5 pb-5 gap-6`}
    >
      <Flex
        direction="col"
        className={`${variant === "default" ? "laptop:gap-10" : "laptop:gap-6"} laptop:flex-row gap-6`}
      >
        <Flex
          direction="col"
          className={`gap-2${variant === "default" ? "" : " laptop:w-57"}`}
        >
          <Text
            variant="h4"
            className={variant === "case-study" ? "laptop:w-50" : ""}
          >
            Like what you see? Let&apos;s chat!
          </Text>
          <Text className="tablet:hidden">
            Made with love and lots of coffee :)
          </Text>
        </Flex>
        <Flex className="gap-15 z-10">
          <Flex direction="col" className="gap-3 hidden tablet:flex">
            <Text variant="bodyRegular">Misc</Text>
            <Flex direction="col" className="laptop:gap-4 gap-3">
              {Object.keys(LINKS.misc).map((key) => {
                const link = LINKS.misc[key as keyof typeof LINKS.misc];
                return (
                  <Text
                    variant="link"
                    className="laptop:text-sm h-10 laptop:h-auto flex flex-row items-center gap-1.5 first-letter:uppercase"
                    key={key}
                    href={link}
                    target="_blank"
                  >
                    {key.charAt(0).toUpperCase()}
                    {key.slice(1)}
                    <Icon name="arrowUpRight" />
                  </Text>
                );
              })}
            </Flex>
          </Flex>
          <Flex direction="col" className="gap-3">
            <Text variant="bodyRegular" className="hidden tablet:block">
              Contact
            </Text>
            <Flex direction="col" className="laptop:gap-4 gap-3">
              {Object.keys(LINKS.contact).map((key) => {
                const link = LINKS.contact[key as keyof typeof LINKS.contact];
                return (
                  <Text
                    variant="link"
                    className="laptop:text-sm h-10 laptop:h-auto flex flex-row items-center gap-1.5 first-letter:uppercase"
                    key={key}
                    href={link}
                    target="_blank"
                  >
                    {key.charAt(0).toUpperCase()}
                    {key.slice(1)}
                    <Icon name="arrowUpRight" />
                  </Text>
                );
              })}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        direction="col"
        className="tablet:flex-row"
        justifyContent="between"
        alignItems="end"
      >
        <Flex
          direction="col"
          className={variant === "case-study" ? "laptop:w-57" : ""}
        >
          <Text variant="bodyRegular">
            Operating as{" "}
            <i className="font-instrument">Rebecca Lai Creative.</i>
          </Text>
          <Text>© May 2026 Rebecca Lai. All Rights Reserved.</Text>
        </Flex>
        <Flex direction="col" className="tablet:text-end">
          <Text className="hidden tablet:block">
            Made with love and lots of coffee :)
          </Text>
          <Text>
            Special shout out to{" "}
            <Text
              variant="smallLink"
              className="inline underline"
              target="_blank"
              href={LINKS.other.jacob}
            >
              Jacob Tam
            </Text>{" "}
            for development support!
          </Text>
        </Flex>
      </Flex>
    </Flex>
  </div>
);
