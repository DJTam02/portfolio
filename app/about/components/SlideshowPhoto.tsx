import { Flex, Text } from "@/app/ui-components";
import Image from "next/image";
import type { SlideshowPhoto as SlideshowPhotoType } from "../types";

export const SlideshowPhoto = ({
  image,
  alt,
  width,
  height,
  place,
  date,
}: SlideshowPhotoType) => (
  <Flex direction="col" className="gap-3">
    <Flex className="w-100 h-120 overflow-hidden">
      <Image
        src={image}
        alt={alt}
        width={width}
        height={height}
        className="h-120 w-100 object-cover"
      />
    </Flex>
    <Flex direction="col" className="gap-1">
      <Text variant="bodyLarge" className="font-medium leading-none">
        {place}
      </Text>
      <Text variant="bodyLarge" className="leading-none">
        {date}
      </Text>
    </Flex>
  </Flex>
);
