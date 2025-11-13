"use client";

import { useGSAP } from "@gsap/react";
import { Slot } from "@radix-ui/react-slot";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

type SplitTextPresets = "default";

type ApplyPresetsOptions = {
  splitVars: SplitText.Vars;
  fromTween: GSAPTweenVars;
  toTween: GSAPTweenVars;
};

type SplitTextProps = React.ComponentPropsWithRef<"div"> & {
  asChild?: boolean;
  splitVars?: SplitText.Vars;
  fromTween?: GSAPTweenVars;
  toTween?: GSAPTweenVars;
  preset?: SplitTextPresets;
  mask?: "lines" | "words" | "chars" | undefined;
};

export default function SplitTextAnimation({
  asChild = false,
  mask,
  splitVars,
  fromTween,
  toTween,
  preset = "default",
  ...props
}: SplitTextProps) {
  const elementId = React.useId();

  const newPreset = applyPreset(preset, {
    splitVars:
      splitVars !== undefined
        ? splitVars
        : {
            type: "words, chars, lines",
            mask: "lines",
          },
    fromTween:
      fromTween !== undefined
        ? fromTween
        : {
            y: 100,
          },
    toTween:
      toTween !== undefined
        ? toTween
        : {
            y: 0,
            duration: 1,
            stagger: 0.3,
          },
  });

  useGSAP(() => {
    const splitText = SplitText.create(`#${elementId}`, newPreset.splitVars);
    gsap.fromTo(splitText.chars, newPreset.fromTween, newPreset.toTween);
  });

  const Comp = asChild ? Slot : "div";

  return <Comp id={elementId} {...props} />;
}

function applyPreset(
  preset: SplitTextPresets,
  options: ApplyPresetsOptions
): ApplyPresetsOptions {
  const presets: Record<SplitTextPresets, () => ApplyPresetsOptions> = {
    default: () => {
      return options;
    },
  };

  const apply = presets[preset];

  return apply();
}
