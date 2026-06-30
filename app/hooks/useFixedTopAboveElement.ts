"use client";

import { useLayoutEffect, useState } from "react";

type UseFixedTopAboveElementOptions = {
  defaultTop?: number;
  gap?: number;
  enabled?: boolean;
};

export function useFixedTopAboveElement(
  elementId: string,
  boundaryId: string,
  {
    defaultTop = 133,
    gap = 24,
    enabled = true,
  }: UseFixedTopAboveElementOptions = {},
) {
  const [top, setTop] = useState(defaultTop);

  useLayoutEffect(() => {
    if (!enabled) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTop(defaultTop);
      return;
    }

    const update = () => {
      const element = document.getElementById(elementId);
      const boundary = document.getElementById(boundaryId);

      if (!element || !boundary) {
        setTop(defaultTop);
        return;
      }

      const elementHeight = element.getBoundingClientRect().height;
      const boundaryTop = boundary.getBoundingClientRect().top;
      const footerInView = boundaryTop < window.innerHeight;

      if (!footerInView) {
        setTop(defaultTop);
        return;
      }

      const constrainedTop = boundaryTop - elementHeight - gap;
      setTop(Math.min(defaultTop, constrainedTop));
    };

    update();

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    const resizeObserver = new ResizeObserver(update);
    const element = document.getElementById(elementId);
    const boundary = document.getElementById(boundaryId);

    if (element) resizeObserver.observe(element);
    if (boundary) resizeObserver.observe(boundary);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      resizeObserver.disconnect();
    };
  }, [boundaryId, defaultTop, elementId, enabled, gap]);

  return top;
}
