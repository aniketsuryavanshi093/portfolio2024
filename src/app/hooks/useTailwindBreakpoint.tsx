"use client";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";
import { useEffect, useState } from "react";

const {
  theme: { screens },
} = resolveConfig(tailwindConfig);

export const useIsBreakpointActive = (): string => {
  const getActiveBreakpoint = () => {
    /* Sort the breakpoints based on their dimensions in descending order */
    const sorted = Object.entries(screens).sort(
      (x, y) => parseInt(y[1]) - parseInt(x[1])
    );

    /* Find the first instance where the current width is higher or equal to a breakpoint */
    const bp = sorted.find((s) => window?.innerWidth >= parseInt(s[1]));

    /* if no breakpoint is found, it is a mobile screen */
    if (!bp) return "mb";
    else return bp[0];
  };
  const [wasBreakpointActive, setWasBreakpointActive] = useState("lg");
  useEffect(() => {
    const handleResize = () => setWasBreakpointActive(getActiveBreakpoint());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return wasBreakpointActive;
};
