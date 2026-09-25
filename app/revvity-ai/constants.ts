import { ProblemDefinition } from "@/app/revvity-ai/components/ProblemDefinition";
import { SpeakingToUsers } from "@/app/revvity-ai/components/SpeakingToUsers";
import { MarketResearch } from "@/app/revvity-ai/components/MarketResearch";
import { MidFidelity } from "@/app/revvity-ai/components/MidFidelity";
import { DesignCritique } from "@/app/revvity-ai/components/DesignCritique";
import { DesignDecisions } from "@/app/revvity-ai/components/DesignDecisions";
import { FinalDecisions } from "@/app/revvity-ai/components/FinalDecisions";
import { Reflections } from "@/app/revvity-ai/components/Reflections";
import { JobsToBeDone } from "@/app/revvity-ai/components/JobsToBeDone";
import { PortfolioPageItem } from "@/app/types";

export const REVIVITY_AI_NAV_ITEMS: PortfolioPageItem[] = [
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
    label: "Jobs To Be Done",
    id: "jobs-to-be-done",
    Component: JobsToBeDone,
  },
  {
    label: "Market Research",
    id: "market-research",
    Component: MarketResearch,
  },
  { label: "Mid-Fidelity", id: "mid-fidelity", Component: MidFidelity },
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
  { label: "Reflections", id: "reflections", Component: Reflections },
];
