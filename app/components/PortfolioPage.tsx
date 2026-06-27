import { Flex, Navigation } from "@/app/ui-components";
import { SideNav } from "@/app/components/SideNav";
import { PortfolioPageItem } from "@/app/types";
import { useMemo } from "react";

interface PortfolioPageProps {
  items: PortfolioPageItem[];
  children?: React.ReactNode | React.ReactNode[];
}

export const PortfolioPage = ({ items, children }: PortfolioPageProps) => {
  const sideNavItems = useMemo(
    () => items.map(({ id, label }) => ({ id, label })),
    [items],
  );

  return (
    <Flex direction="col">
      <Navigation />
      <SideNav items={sideNavItems} />
      <Flex
        direction="col"
        className="gap-10 laptop:gap-15 p-3 pb-10 tablet:px-6 tablet:pt-6 tablet:pb-10 laptop:pb-15 laptop:pr-15 laptop:pl-71 desktop:pl-82"
      >
        {children}
        {items.map(({ id, Component }) => (
          <Component key={id} id={id} />
        ))}
      </Flex>
    </Flex>
  );
};
