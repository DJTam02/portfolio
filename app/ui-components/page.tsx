"use client";

import { useState } from "react";
import { Button, Flex, Icon, Text } from ".";
import { Accordion } from "./accordian";
import { Modal } from "./modal";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-10 flex flex-col gap-10">
      <section>
        <Text variant="title">Title Large</Text>
        <Text variant="h2">H2</Text>
        <Text variant="h3">H3</Text>
        <Text variant="h4">H4</Text>
        <Text variant="h2Serif">H2 Serif</Text>
        <Text variant="h3Serif">H3 Serif</Text>
        <Text variant="h4Serif">H4 Serif</Text>
        <Text variant="link">Link</Text>
        <Text variant="smallLink">Small Link</Text>
        <Text variant="button">Button</Text>
        <Text variant="bodyLarge">Body Large</Text>
        <Text>Body Regular</Text>
        <Text variant="list">List</Text>
      </section>
      <section>
        <Text variant="h2">Button Component</Text>
        <Flex direction="col" className="gap-4">
          <Button size="default" top="25%" left="40%">
            Default Button
          </Button>
          <Button size="lg" top="35%" left="50%">
            Large Button
          </Button>
          <Button size="default" hasIcon top="45%" left="60%">
            Button with Icon
          </Button>
          <Button size="lg" hasIcon top="55%" left="70%">
            Large Button with Icon
          </Button>
        </Flex>
      </section>
      <section>
        <Text variant="h2">Icon Component</Text>
        <Icon name="arrowRight" size="s" />
        <Icon name="arrowRight" size="m" />
        <Icon name="arrowRight" size="l" />
        <Icon name="arrowUpRight" size="m" />
        <Icon name="chevronDown" size="l" />
      </section>
      <section>
        <Text variant="h2">Accordion Component</Text>
        <Accordion title="Accordion Title">
          <Text variant="bodyLarge">
            This is the content of the accordion. It can be any React node and
            will be shown or hidden when the accordion is toggled.
          </Text>
        </Accordion>
      </section>
      <section>
        <Text variant="h2">Modal Component</Text>
        <Button top="65%" left="80%" onClick={() => setIsModalOpen(true)}>
          Open Modal
        </Button>
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <Text variant="h2">Modal Title</Text>
            <Text variant="bodyLarge">
              This is the content of the modal. It can be any React node.
            </Text>
          </Modal>
        )}
      </section>
    </div>
  );
};

export default Page;
