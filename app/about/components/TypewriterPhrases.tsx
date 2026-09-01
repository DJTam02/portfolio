"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "a self-taught barista & bartender.",
  "a fan of the oxford comma.",
  "the eldest of 4.",
  "a healthcare worker in another life.",
  "arrives at airports absurdly early.",
  "loves iced coffee but hates hot coffee.",
  "the “mom” friend.",
  "always prefers the window seat.",
  "never found without her digicam.",
  "probably has a list for everything.",
  "prefers soggy fries over crispy fries.",
  "believes camera eats first.",
] as const;

const TYPE_MS = 800;
const BACKSPACE_MS = 500;
const HOLD_MS = 2500;

type Phase = "typing" | "holding" | "deleting";

export const TypewriterPhrases = ({
  phrases = PHRASES,
  className = "",
}: {
  phrases?: readonly string[];
  className?: string;
}) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");

  const phrase = phrases[phraseIndex] ?? "";

  useEffect(() => {
    let timeout: number;

    if (phase === "holding") {
      // Hold complete phrase, then start deleting
      timeout = window.setTimeout(() => setPhase("deleting"), HOLD_MS);
    } else if (phase === "typing") {
      if (charCount >= phrase.length) {
        // Defer phase change so setState isn't sync in the effect body
        timeout = window.setTimeout(() => setPhase("holding"), 0);
      } else {
        const stepMs = TYPE_MS / Math.max(phrase.length, 1);
        timeout = window.setTimeout(
          () => setCharCount((count) => count + 1),
          stepMs,
        );
      }
    } else if (charCount <= 0) {
      timeout = window.setTimeout(() => {
        setPhraseIndex((index) => (index + 1) % phrases.length);
        setPhase("typing");
      }, 0);
    } else {
      const stepMs = BACKSPACE_MS / Math.max(phrase.length, 1);
      timeout = window.setTimeout(
        () => setCharCount((count) => count - 1),
        stepMs,
      );
    }

    return () => window.clearTimeout(timeout);
  }, [phase, charCount, phrase, phrases.length]);

  return (
    <span className={className}>
      {phrase.slice(0, charCount)}
      <span
        aria-hidden
        className="ml-0.5 inline-block w-[0.08em] translate-y-[0.05em] animate-pulse bg-current"
        style={{ height: "0.9em" }}
      />
    </span>
  );
};
