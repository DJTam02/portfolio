import { PhotoHover, PhotoHoverProps } from "./portfolio/photoHover";
import { Flex, Text, Chip, Button } from "@/app/ui-components";
import { ROUTES } from "@/app/constants";
import { usePathname, useRouter } from "next/navigation";

export const RevvityChatPreview = ({
  wrapperClassName,
  ...props
}: Partial<PhotoHoverProps>) => {
  const router = useRouter();
  const isHome = usePathname() === ROUTES.portfolio;
  return (
    <PhotoHover
      src="/images/revvity-chat-thumbnail.png"
      alt="Revvity Chat Thumbnail"
      wrapperClassName={`w-full flex-1 aspect-[3/2] overflow-hidden absolute right-0 top-0 bottom-0 w-[calc(50%-0.75rem)] flex items-center ${wrapperClassName}`}
      path={ROUTES.revvityAI}
      {...props}
    >
      <Flex
        direction="col"
        justifyContent="between"
        className="h-full tablet:p-8 p-4"
      >
        {isHome ? (
          <Flex direction="row" className="gap-3 ml-auto hidden laptop:flex">
            <Chip>AI Interaction Design</Chip>
            <Chip>Design Systems</Chip>
          </Flex>
        ) : (
          <Text variant="h4" className="ml-auto hidden laptop:flex">
            Revvity | July 2025
          </Text>
        )}
        <Flex direction="col" className="gap-2">
          <Text variant="h4" className="tablet:text-[40px]">
            Scaling an agentic AI chatting tool to support 100+ AI agents
          </Text>
          <Text
            className={`tablet:text-2xl ${isHome ? "" : "hidden tablet:block laptop:hidden"}`}
          >
            Revvity | July 2025
          </Text>
        </Flex>
        <div className="laptop:hidden">
          <Button hasIcon onClick={() => router.push(ROUTES.revvityAI)}>
            View Case Study
          </Button>
        </div>
      </Flex>
    </PhotoHover>
  );
};
