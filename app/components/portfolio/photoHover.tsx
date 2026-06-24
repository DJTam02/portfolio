"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useGetBreakpointValue } from "@/app/hooks";
import { BREAKPOINTS, ROUTES } from "@/app/constants";
import { useRouter } from "next/navigation";

interface PhotoHoverProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  path: ROUTES;
  wrapperClassName?: string;
  imageClassName?: string;
}

export const PhotoHover = ({
  src,
  alt,
  path,
  wrapperClassName,
  imageClassName,
  className,
  ...rest
}: PhotoHoverProps) => {
  const { width } = useGetBreakpointValue();
  const router = useRouter();

  const [showOverlay, setShowOverlay] = useState(false);

  const handleWrapperClick = () => {
    console.log(width);
    if (width > BREAKPOINTS.laptop) {
      router.push(path);
      return;
    }
    setShowOverlay((prev) => !prev);
  };

  return (
    <div
      className={`rounded-lg overflow-hidden group relative ${wrapperClassName}`}
      onClick={handleWrapperClick}
      {...rest}
    >
      <Image
        src={src}
        alt={alt}
        width={4000}
        height={2667}
        className={imageClassName}
      />
      <div
        className={`opacity-0 group-hover:opacity-100 ${showOverlay ? "opacity-100" : ""} duration-300 w-full h-full bg-[linear-gradient(180deg,rgba(23,23,23,0.80)_4.34%,rgba(23,23,23,0.25)_50%,rgba(23,23,23,0.80)_76.58%)] absolute top-0 left-0 ${className}`}
        {...rest}
      />
    </div>
  );
};
