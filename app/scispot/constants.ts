import {
  ProblemDefinition,
  ProblemScoping,
  SpeakingToUsers,
  MarketResearch,
  UserFlows,
  BeyondMVP,
  LowFidelity,
  DesignCritique,
  DesignDecisions,
  FinalDecisions,
  Reflections,
  Impacts,
} from "./components";
import { PortfolioPageItem } from "@/app/types";

export const SCISPOT_NAV_ITEMS: PortfolioPageItem[] = [
  {
    label: "Problem Definition",
    id: "problem-definition",
    Component: ProblemDefinition,
  },
  {
    label: "Speaking to Users",
    id: "speaking-to-users",
    Component: SpeakingToUsers,
  },
  {
    label: "Problem Scoping",
    id: "problem-scoping",
    Component: ProblemScoping,
  },
  {
    label: "Market Research",
    id: "market-research",
    Component: MarketResearch,
  },
  { label: "User Flows", id: "user-flows", Component: UserFlows },
  { label: "Wireframes", id: "wireframes", Component: LowFidelity },
  {
    label: "Design Critique",
    id: "design-critique",
    Component: DesignCritique,
  },
  {
    label: "Design Decisions",
    id: "design-decisions",
    Component: DesignDecisions,
  },
  {
    label: "Final Designs",
    id: "final-designs",
    Component: FinalDecisions,
  },
  {
    label: "Impacts",
    id: "impacts",
    Component: Impacts,
  },
  { label: "Reflections", id: "reflections", Component: Reflections },
];
