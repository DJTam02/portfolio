export type PortfolioPageItem = {
  id: string;
  label: string;
  Component: React.ComponentType<{ id: string }>;
};
