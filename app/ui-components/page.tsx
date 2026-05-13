import { Button, Icon, Text } from ".";

const Page = () => {
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
        <Button size="default">Default Button</Button>
        <Button size="lg">Large Button</Button>
        <Button size="default" hasIcon>
          Button with Icon
        </Button>
        <Button size="lg" hasIcon>
          Large Button with Icon
        </Button>
      </section>
      <section>
        <Text variant="h2">Icon Component</Text>
        <Icon name="arrowRight" size="s" />
        <Icon name="arrowRight" size="m" />
        <Icon name="arrowRight" size="l" />
        <Icon name="arrowUpRight" size="m" />
        <Icon name="chevronDown" size="l" />
      </section>
    </div>
  );
};

export default Page;
