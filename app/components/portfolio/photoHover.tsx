"use client";

import Image from "next/image";
import React, { useContext, useState } from "react";
import { useGetBreakpointValue } from "@/app/hooks";
import {
  BREAKPOINTS,
  PASSWORD_PROTECTED_CASE_STUDIES,
  ROUTES,
} from "@/app/constants";
import { useRouter } from "next/navigation";
import { PasswordProtectionContext } from "@/app/contexts/PasswordProtectionContext";

export interface PhotoHoverProps extends React.HTMLAttributes<HTMLDivElement> {
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

  const { isPasswordValid, setRequestedRoute } = useContext(
    PasswordProtectionContext,
  );

  const [showOverlay, setShowOverlay] = useState(false);

  const handleWrapperClick = () => {
    if (width > BREAKPOINTS.laptop) {
      if (PASSWORD_PROTECTED_CASE_STUDIES.has(path) && !isPasswordValid) {
        setRequestedRoute(path);
      } else {
        router.push(path);
      }
      return;
    }
    setShowOverlay((prev) => !prev);
  };

  return (
    <div
      className={`rounded-[16px] overflow-hidden group relative ${wrapperClassName}`}
      onClick={handleWrapperClick}
      {...rest}
    >
      <Image
        src={src}
        alt={alt}
        width={2000}
        height={1334}
        className={imageClassName}
      />
      <div
        className={`opacity-0 group-hover:opacity-100 ${showOverlay ? "opacity-100" : ""} duration-300 w-full h-full bg-[linear-gradient(180deg,rgba(23,23,23,0.80)_4.34%,rgba(23,23,23,0.25)_50%,rgba(23,23,23,0.80)_76.58%)] absolute top-0 left-0 ${className}`}
        {...rest}
      />
    </div>
  );
};
