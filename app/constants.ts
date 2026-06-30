import { RevvityLabsPreview } from "./components/RevvityLabsPreview";
import { SciSpotPreview } from "./components/SciSpotPreview";
import { RevvityChatPreview } from "./components/RevvityChatPreview";
import { PlootoPreview } from "./components/PlootoPreview";
import { REVIVITY_LABS_NAV_ITEMS } from "./revvity-labs/constants";

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
  portfolio = "/test",
  about = "/about",
  revvityLabs = "/revvity-labs",
  plooto = "/plooto",
  scispot = "/scispot",
  revvityAI = "/revvity-ai",
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
  navItems: [],
  id: "scispot",
  PreviewComponent: SciSpotPreview,
};

export const REVIVITY_CHAT = {
  navItems: [],
  id: "revvity-chat",
  PreviewComponent: RevvityChatPreview,
};

export const PLOOTO = {
  navItems: [],
  id: "plooto",
  PreviewComponent: PlootoPreview,
};

export const PROJECTS = [REVVITY_LABS, SCI_SPOT, REVIVITY_CHAT, PLOOTO];
