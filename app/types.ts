import { PhotoHoverProps } from "./components/portfolio/photoHover";

export type PortfolioPageItem = {
  id: string;
  label: string;
  Component: React.ComponentType<{ id: string }>;
};

export interface Project {
  navItems: PortfolioPageItem[];
  id: string;
  PreviewComponent: React.ComponentType<Partial<PhotoHoverProps>>;
}
