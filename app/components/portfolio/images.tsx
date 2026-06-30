"use client";

import { Flex } from "@/app/ui-components";
import { RevvityChatPreview } from "../RevvityChatPreview";
import { RevvityLabsPreview } from "../RevvityLabsPreview";
import { SciSpotPreview } from "../SciSpotPreview";
import { PlootoPreview } from "../PlootoPreview";

export const Images = () => {
  return (
    <Flex
      direction="col"
      className="gap-2 tablet:gap-6 z-10"
      alignItems="stretch"
    >
      <RevvityLabsPreview />
      <Flex
        direction="col"
        className="gap-2 tablet:gap-6 w-full relative laptop:flex-row"
      >
        <SciSpotPreview />
        <RevvityChatPreview />
      </Flex>
      <PlootoPreview />
    </Flex>
  );
};
