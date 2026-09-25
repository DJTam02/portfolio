import { RevvityLabsPreview } from "./components/RevvityLabsPreview";
import { SciSpotPreview } from "./components/SciSpotPreview";
import { RevvityChatPreview } from "./components/RevvityChatPreview";
import { PlootoPreview } from "./components/PlootoPreview";
import { REVIVITY_LABS_NAV_ITEMS } from "./revvity-labs/constants";
import { SCISPOT_NAV_ITEMS } from "./scispot/constants";
import { REVIVITY_AI_NAV_ITEMS } from "./revvity-ai/constants";

export const LINKS = {
  misc: {
    substack: "https://rebeccalai.substack.com/?utm_campaign=profile_chips",
    youTube: "https://www.youtube.com/@rebeccaxlai",
    instagram: "https://www.instagram.com/rebeccaxlai/",
  },
  contact: {
    linkedIn: "https://www.linkedin.com/in/rlai/",
    email: "mailto:r32lai@uwaterloo.ca",
    resume:
      "https://drive.google.com/file/d/1YSPo3_au_6uU3dkwz2kKOI8WLDBcJtoY/view",
  },
  other: {
    jacob: "https://www.linkedin.com/in/jacob-tam/",
  },
};

export enum ROUTES {
  portfolio = "/",
  about = "/about",
  revvityLabs = "/revvity-labs",
  plooto = "/plooto",
  scispot = "/scispot",
  revvityAI = "/revvity-ai",
  lifeCredits = "/life-credits",
}

export enum BREAKPOINTS {
  tablet = 744,
  laptop = 1280,
  desktop = 1512,
}

export const REVVITY_LABS = {
  navItems: REVIVITY_LABS_NAV_ITEMS,
  id: "revvity-labs",
  PreviewComponent: RevvityLabsPreview,
};

export const SCI_SPOT = {
  navItems: SCISPOT_NAV_ITEMS,
  id: "scispot",
  PreviewComponent: SciSpotPreview,
};

export const REVVITY_AI = {
  navItems: REVIVITY_AI_NAV_ITEMS,
  id: "revvity-ai",
  PreviewComponent: RevvityChatPreview,
};

export const PLOOTO = {
  navItems: [],
  id: "plooto",
  PreviewComponent: PlootoPreview,
};

export const PROJECTS = [REVVITY_LABS, SCI_SPOT, REVVITY_AI, PLOOTO];

export const ENCRYPTED_PASSWORD =
  "cb426f0d2f76c48e653e8a8ef5eedc012b84a1e735529e5ec9b54bbd7d2f043a";

export const PASSWORD_PROTECTED_CASE_STUDIES = new Set([ROUTES.scispot]);
