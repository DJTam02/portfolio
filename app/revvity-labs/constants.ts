import { ProblemDefinition } from "@/app/revvity-labs/components/ProblemDefinition";
import { ProblemScoping } from "@/app/revvity-labs/components/ProblemScoping";
import { SpeakingToUsers } from "@/app/revvity-labs/components/SpeakingToUsers";
import { MarketResearch } from "@/app/revvity-labs/components/MarketResearch";
import { UserFlows } from "@/app/revvity-labs/components/UserFlows";
import { BeyondMVP } from "@/app/revvity-labs/components/BeyondMVP";
import { LowFidelity } from "@/app/revvity-labs/components/LowFidelity";
import { DesignCritique } from "@/app/revvity-labs/components/DesignCritique";
import { DesignDecisions } from "@/app/revvity-labs/components/DesignDecisions";
import { FinalDecisions } from "@/app/revvity-labs/components/FinalDecisions";
import { Reflections } from "@/app/revvity-labs/components/Reflections";
import { PortfolioPageItem } from "@/app/types";

export const REVIVITY_LABS_NAV_ITEMS: PortfolioPageItem[] = [
  {
    label: "Problem Definition",
    id: "problem-definition",
    Component: ProblemDefinition,
  },
  {
    label: "Problem Scoping",
    id: "problem-scoping",
    Component: ProblemScoping,
  },
  {
    label: "Speaking to Users",
    id: "speaking-to-users",
    Component: SpeakingToUsers,
  },
  {
    label: "Market Research",
    id: "market-research",
    Component: MarketResearch,
  },
  { label: "User Flows", id: "user-flows", Component: UserFlows },
  { label: "Beyond MVP", id: "beyond-mvp", Component: BeyondMVP },
  { label: "Low-Fidelity", id: "low-fidelity", Component: LowFidelity },
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
    label: "Final Decisions",
    id: "final-decisions",
    Component: FinalDecisions,
  },
  { label: "Reflections", id: "reflections", Component: Reflections },
];
