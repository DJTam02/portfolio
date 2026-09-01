"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Button, Flex, Icon } from "@/app/ui-components";
import { SLIDESHOW_PHOTOS } from "../constants";
import { SlideshowPhoto } from "./SlideshowPhoto";

const SLIDE_WIDTH_PX = 400; // w-100
const SLIDE_GAP_PX = 24;
const SLIDE_STEP_PX = SLIDE_WIDTH_PX + SLIDE_GAP_PX;

function normalizeIndex(index: number, count: number) {
  return (((index % count) + count) % count) + count;
}

export const PhotoSlideshow = () => {
  const count = SLIDESHOW_PHOTOS.length;
  const track = [...SLIDESHOW_PHOTOS, ...SLIDESHOW_PHOTOS, ...SLIDESHOW_PHOTOS];
  const [index, setIndex] = useState(count);
  const [animate, setAnimate] = useState(true);
  const isNavigating = useRef(false);
  const needsReset = useRef(false);

  const goPrev = () => {
    if (isNavigating.current || count === 0) return;
    isNavigating.current = true;
    setAnimate(true);
    setIndex((current) => current - 1);
  };

  const goNext = () => {
    if (isNavigating.current || count === 0) return;
    isNavigating.current = true;
    setAnimate(true);
    setIndex((current) => current + 1);
  };

  const handleTransitionEnd = (
    event: React.TransitionEvent<HTMLDivElement>,
  ) => {
    if (event.propertyName !== "transform") return;

    if (index < count || index >= count * 2) {
      needsReset.current = true;
      setAnimate(false);
      setIndex(normalizeIndex(index, count));
      return;
    }

    isNavigating.current = false;
  };

  // Instant jump back to the middle copy — no timeout, runs before paint
  useLayoutEffect(() => {
    if (!needsReset.current) return;

    needsReset.current = false;
    requestAnimationFrame(() => {
      setAnimate(true);
      isNavigating.current = false;
    });
  }, [index, animate]);

  if (count === 0) return null;

  return (
    <Flex
      direction="col"
      className="relative hidden w-full gap-6 tablet:flex"
      alignItems="stretch"
    >
      <Button
        aria-label="Previous photo"
        onClick={goPrev}
        className="px-6"
        size="lg"
        style={{
          position: "absolute",
          left: 24,
          bottom: "50%",
          zIndex: 10,
        }}
      >
        <Icon name="arrowRight" size={3.5} scaleIcon className="rotate-180" />
      </Button>
      <Button
        aria-label="Next photo"
        onClick={goNext}
        className="px-6"
        size="lg"
        style={{
          position: "absolute",
          right: 24,
          bottom: "50%",
          zIndex: 10,
        }}
      >
        <Icon name="arrowRight" size={3.5} scaleIcon />
      </Button>

      <div className="w-full overflow-hidden">
        <div
          className={`flex gap-6 ease-out ${animate ? "transition-transform duration-500" : ""}`}
          style={{
            transform: `translateX(-${index * SLIDE_STEP_PX}px)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {track.map((photo, i) => (
            <div
              key={`${photo.image}-${photo.place}-${i}`}
              className="shrink-0"
            >
              <SlideshowPhoto {...photo} />
            </div>
          ))}
        </div>
      </div>
    </Flex>
  );
};
