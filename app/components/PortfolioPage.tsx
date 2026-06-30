import { Flex, Modal, Navigation, Text, Footer } from "@/app/ui-components";
import { SideNav } from "@/app/components/SideNav";
import { Project } from "@/app/types";
import { useMemo } from "react";
import { PROJECTS } from "@/app/constants";

interface PortfolioPageProps {
  project: Project;
  children?: React.ReactNode | React.ReactNode[];
}

export const PortfolioPage = ({ project, children }: PortfolioPageProps) => {
  const sideNavItems = useMemo(
    () => project.navItems.map(({ id, label }) => ({ id, label })),
    [project],
  );

  const previewComponents = useMemo(
    () =>
      PROJECTS.filter((p) => p.id !== project.id)
        .slice(0, 2)
        .map(({ id, PreviewComponent }) => <PreviewComponent key={id} />),
    [project],
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
        {project.navItems.map(({ id, Component }) => (
          <Component key={id} id={id} />
        ))}
        <Modal style={{ width: "100%" }}>
          <Flex direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
            <Flex direction="col" className="gap-1 laptop:gap-2">
              <Text className="text-[18px] laptop:text-2xl">Up Next...</Text>
              <Text variant="h4" className="laptop:text-[40px]">
                Check out some of my{" "}
                <span className="italic font-instrument">other work</span>.
              </Text>
            </Flex>
            <Flex
              direction="col"
              className="gap-3 tablet:gap-4 laptop:gap-6 desktop:gap-10 laptop:flex-row"
            >
              {previewComponents}
            </Flex>
          </Flex>
        </Modal>
      </Flex>
      <Footer variant="case-study" />
    </Flex>
  );
};
