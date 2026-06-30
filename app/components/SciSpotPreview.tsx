import { PhotoHover, PhotoHoverProps } from "./portfolio/photoHover";
import { Flex, Text, Chip, Button } from "@/app/ui-components";
import { ROUTES } from "@/app/constants";
import { usePathname, useRouter } from "next/navigation";

export const SciSpotPreview = ({
  wrapperClassName,
  ...props
}: Partial<PhotoHoverProps>) => {
  const router = useRouter();

  const isHome = usePathname() === ROUTES.portfolio;

  return (
    <PhotoHover
      src="/images/scispot-thumbnail.png"
      alt="SciSpot Thumbnail"
      path={ROUTES.scispot}
      wrapperClassName={`rounded-lg w-full flex-1 aspect-[3/2] object-cover laptop:aspect-auto laptop:object-contain laptop:w-[calc(50%-0.75rem)] h-auto ${wrapperClassName}`}
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
          <Button hasIcon onClick={() => router.push(ROUTES.scispot)}>
            View Case Study
          </Button>
        </div>
      </Flex>
    </PhotoHover>
  );
};
