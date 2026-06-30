import { PhotoHover, PhotoHoverProps } from "./portfolio/photoHover";
import { Flex, Text, Chip, Button } from "@/app/ui-components";
import { ROUTES } from "@/app/constants";
import { usePathname, useRouter } from "next/navigation";

export const RevvityLabsPreview = ({
  wrapperClassName,
  ...props
}: Partial<PhotoHoverProps>) => {
  const router = useRouter();
  const isHome = usePathname() === ROUTES.portfolio;
  return (
    <PhotoHover
      src="/images/revvity-labs-thumbnail.png"
      alt="Revvity Labs Thumbnail"
      path={ROUTES.revvityLabs}
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
            <Chip>AI Products</Chip>
            <Chip>Product Thinking</Chip>
            <Chip>Interaction Design</Chip>
          </Flex>
        ) : (
          <Text variant="h4" className="ml-auto hidden laptop:flex">
            Revvity | July 2025
          </Text>
        )}
        <Flex direction="row" className="gap-12">
          <Flex direction="col" className="gap-2 flex-1">
            <Text variant="h4" className="tablet:text-[40px]">
              Designing an AI-Powered Literature Summarization Agent for Modern
              Labs
            </Text>
            <Text
              className={`tablet:text-2xl ${isHome ? "" : "hidden tablet:block laptop:hidden"}`}
            >
              Revvity | July 2025
            </Text>
          </Flex>
          <Text variant="h4" className="flex-1 hidden laptop:block">
            This case study outlines my efforts in a cross-functional hackathon
            for Revvity&apos;s first external-facing AI product, RevvityLabs. We
            delivered everything from user research, to datasets to train our
            AI, to a fully functioning prototype in just under 3 days, and even
            got to present to C-level executives!
          </Text>
        </Flex>
        <div className="laptop:hidden">
          <Button hasIcon onClick={() => router.push(ROUTES.revvityLabs)}>
            View Case Study
          </Button>
        </div>
      </Flex>
    </PhotoHover>
  );
};
