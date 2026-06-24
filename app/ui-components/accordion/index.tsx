"use client";

import React, { useState } from "react";
import { Flex, FlexProps } from "../flex";
import { Text } from "../text";
import { Icon } from "../icon";
import { BottomBorder } from "./bottomBorder";

interface AccordionProps extends FlexProps {
  title: string;
  startOpen?: boolean;
}

export const Accordion = ({
  title,
  children,
  startOpen = false,
  ...rest
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(startOpen);

  return (
    <Flex className="gap-4" direction="col" {...rest}>
      <Flex className="gap-3" direction="col">
        <Flex
          justifyContent="between"
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer"
        >
          <Text
            variant="h4Serif"
            className="tablet:text-[32px] laptop:text-[40px]"
          >
            {title}
          </Text>
          <Icon name={isOpen ? "chevronUp" : "chevronDown"} size={10} />
        </Flex>
        <Flex
          direction="col"
          className={`gap-3 duration-300 ${isOpen ? "h-auto" : "h-0 overflow-hidden"}`}
        >
          {children}
        </Flex>
      </Flex>
      <BottomBorder />
    </Flex>
  );
};
