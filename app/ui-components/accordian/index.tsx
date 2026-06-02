"use client";

import React, { useState } from "react";
import { Flex, FlexProps } from "../flex";
import { Text } from "../text";
import { Icon } from "../icon";
import { BottomBorder } from "./bottomBorder";

interface AccordionProps extends FlexProps {
  title: string;
}

export const Accordion = ({ title, children, ...rest }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex className="gap-4" direction="col" {...rest}>
      <Flex className="gap-3" direction="col">
        <Flex
          justifyContent="between"
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer"
        >
          <Text variant="h2Serif">{title}</Text>
          <Icon name={isOpen ? "chevronUp" : "chevronDown"} size="l" />
        </Flex>
        {isOpen && children}
      </Flex>
      <BottomBorder />
    </Flex>
  );
};
