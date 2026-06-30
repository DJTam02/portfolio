import { PhotoHover, PhotoHoverProps } from "./portfolio/photoHover";
import { Flex, Text, Chip, Button } from "@/app/ui-components";
import { ROUTES } from "@/app/constants";
import { usePathname, useRouter } from "next/navigation";

export const PlootoPreview = ({
  wrapperClassName,
  ...props
}: Partial<PhotoHoverProps>) => {
  const router = useRouter();
  const isHome = usePathname() === ROUTES.portfolio;
  return (
    <PhotoHover
      src="/images/plooto-thumbnail.png"
      alt="Plooto Thumbnail"
      path={ROUTES.plooto}
      wrapperClassName={`w-full h-auto ${wrapperClassName}`}
      {...props}
    >
      <Flex
        direction="col"
        justifyContent="between"
        className="h-full tablet:p-8 p-4"
      >
        {isHome ? (
          <Flex direction="row" className="gap-3 ml-auto hidden laptop:flex">
            <Chip>Responsive Design</Chip>
            <Chip>Interaction Design</Chip>
            <Chip>User Research</Chip>
          </Flex>
        ) : (
          <Text variant="h4" className="ml-auto hidden laptop:flex">
            Plooto | February 2024
          </Text>
        )}
        <Flex direction="row" className="gap-12">
          <Flex direction="col" className="gap-2 flex-1">
            <Text variant="h4" className="tablet:text-[40px]">
              Redesigning an onboarding dashboard using Jobs To Be Done and A/B
              Testing
            </Text>
            <Text
              className={`tablet:text-2xl ${isHome ? "" : "hidden tablet:block laptop:hidden"}`}
            >
              Plooto | February 2024
            </Text>
          </Flex>
          <Text variant="h4" className="flex-1 hidden laptop:block">
            When I first joined Plooto, a series of A/B testing experiments was
            run to determine how to best bring new users to see value in our
            product sooner. As the primary designer assisting in the A/B testing
            experiments, my role was to design alternative experiences to better
            highlight the value of our product.
          </Text>
        </Flex>
        <div className="laptop:hidden">
          <Button hasIcon onClick={() => router.push(ROUTES.plooto)}>
            View Case Study
          </Button>
        </div>
      </Flex>
    </PhotoHover>
  );
};
