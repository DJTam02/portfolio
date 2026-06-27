import { Flex, Text } from "@/app/ui-components";

interface SectionHeaderProps {
  title: string;
  description: string | React.ReactNode | React.ReactNode[];
}

export const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <Flex direction="col" className="gap-1 laptop:gap-2">
      <Text className="text-[18px] laptop:text-2xl laptop:font-light">
        {title}
      </Text>
      <Text variant="h4" className="laptop:text-[40px]">
        {description}
      </Text>
    </Flex>
  );
};
