"use client";

import { PhotoHover, PhotoHoverProps } from "./portfolio/photoHover";
import { Flex, Text, Chip, Button } from "@/app/ui-components";
import { PASSWORD_PROTECTED_CASE_STUDIES, ROUTES } from "@/app/constants";
import { usePathname, useRouter } from "next/navigation";
import { PasswordProtectionContext } from "../contexts/PasswordProtectionContext";
import { useCallback, useContext } from "react";

export const SciSpotPreview = ({
  wrapperClassName,
  ...props
}: Partial<PhotoHoverProps>) => {
  const router = useRouter();

  const isHome = usePathname() === ROUTES.portfolio;

  const { isPasswordValid, setRequestedRoute } = useContext(
    PasswordProtectionContext,
  );

  const redirectToCaseStudy = useCallback(() => {
    if (
      PASSWORD_PROTECTED_CASE_STUDIES.has(ROUTES.scispot) &&
      !isPasswordValid
    ) {
      setRequestedRoute(ROUTES.scispot);
    } else {
      router.push(ROUTES.scispot);
    }
  }, [isPasswordValid, setRequestedRoute, router]);

  return (
    <PhotoHover
      src="/images/scispot-thumbnail.png"
      alt="SciSpot Thumbnail"
      path={ROUTES.scispot}
      wrapperClassName={`w-full flex-1 aspect-[3/2] object-cover laptop:aspect-auto laptop:object-contain laptop:w-[calc(50%-0.75rem)] h-auto ${wrapperClassName}`}
      {...props}
    >
      <Flex
        direction="col"
        justifyContent="between"
        className="h-full tablet:p-8 p-4"
      >
        {isHome ? (
          <Flex direction="row" className="gap-3 ml-auto hidden laptop:flex">
            <Chip>AI Product Design</Chip>
            <Chip>Product Scoping</Chip>
          </Flex>
        ) : (
          <Text variant="h4" className="ml-auto hidden laptop:flex">
            Scispot | September 2024
          </Text>
        )}
        <Flex direction="col" className="gap-2">
          <Text variant="h4" className="tablet:text-[40px]">
            Unifying fragmented workflows with Plato, an AI agent for all plate
            workflows
          </Text>
          <Text
            className={`tablet:text-2xl ${isHome ? "" : "hidden tablet:block laptop:hidden"}`}
          >
            Scispot | September 2024
          </Text>
        </Flex>
        <div className="laptop:hidden">
          <Button hasIcon onClick={redirectToCaseStudy}>
            View Case Study
          </Button>
        </div>
      </Flex>
    </PhotoHover>
  );
};
