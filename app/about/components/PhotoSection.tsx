import Image from "next/image";
import { Flex, LiquidGlass, Text } from "@/app/ui-components";

interface PhotoSectionProps {
  text: React.ReactNode | React.ReactNode[];
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imagePosition?: "left" | "right";
  tag?: {
    text: string;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
}
export const PhotoSection = ({
  text,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  imagePosition = "left",
  tag,
}: PhotoSectionProps) => {
  return (
    <Flex
      direction="col"
      alignItems="center"
      className="tablet:flex-row desktop:gap-20 laptop:gap-15 tablet:gap-10 gap-4 relative"
    >
      {tag && (
        <LiquidGlass
          style={{
            position: "absolute",
            right: tag.right,
            top: tag.top,
            bottom: tag.bottom,
            left: tag.left,
          }}
        >
          <Text
            variant="h3"
            className="desktop:px-8 laptop:py-3.5 laptop:px-6 tablet:px-4 tablet:py-2 hidden laptop:block whitespace-nowrap"
          >
            {tag.text}
          </Text>
        </LiquidGlass>
      )}
      <Flex
        direction="col"
        className={`gap-2 flex-1 order-1 ${imagePosition === "left" ? "tablet:order-2" : "tablet:order-1"}`}
      >
        {Array.isArray(text) ? (
          text.map((item, index) => (
            <Text
              key={`${imageAlt}-${index}`}
              variant="h4"
              className="text-[18px] laptop:text-[32px]"
            >
              {item}
            </Text>
          ))
        ) : (
          <Text variant="h4" className="text-[18px] laptop:text-[32px]">
            {text}
          </Text>
        )}
      </Flex>
      <Flex
        direction="col"
        className={`flex-1 order-2 ${imagePosition === "left" ? "tablet:order-1" : "tablet:order-2"}`}
      >
        <Image
          src={image}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="object-cover laptop:aspect-109/124 tablet:aspect-51/58 aspect-80/91"
        />
      </Flex>
    </Flex>
  );
};
