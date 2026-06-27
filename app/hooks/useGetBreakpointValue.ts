import { useState, useEffect, useCallback } from "react";
import { BREAKPOINTS } from "../constants";

type BreakpointValue = string | number | undefined;

export const useGetBreakpointValue = () => {
  // Keep initial render consistent between SSR and the client.
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => setWidth(window.innerWidth);

    // Sync width after hydration and keep it updated on resize.
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getBreakpointValue = useCallback(
    <
      A extends BreakpointValue,
      B extends BreakpointValue,
      C extends BreakpointValue,
      D extends BreakpointValue,
    >(
      values: [A, B, C, D],
    ) => {
      if (width < BREAKPOINTS.tablet) return values[0];
      if (width < BREAKPOINTS.laptop) return values[1];
      if (width < BREAKPOINTS.desktop) return values[2];
      return values[3];
    },
    [width],
  );

  return { getBreakpointValue, width };
};
