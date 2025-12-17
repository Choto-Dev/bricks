"use client";

import { useGSAP } from "@gsap/react";
import { Slot } from "@radix-ui/react-slot";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

type TSplitTextPresets = "default";
type TGsapMotion = {
  from: GSAPTweenVars;
  to: GSAPTweenVars;
};
type TApplyPreset = {
  splitText: SplitText.Vars;
  from: TGsapMotion["from"];
  to: TGsapMotion["to"];
};
type SplitTextProps = React.ComponentPropsWithRef<"div"> & {
  motion?: TGsapMotion;
  mask?: SplitText.Vars["mask"];
  preset?: TSplitTextPresets;
  repeat?: boolean;
  asChild?: boolean;
};

export function GsapSplitText({
  motion,
  mask = "chars",
  preset = "default",
  repeat = false,
  asChild = false,
  ...props
}: SplitTextProps) {
  const ref = React.useRef(null);
  const tl = gsap.timeline({
    repeat: repeat ? -1 : 1,
    repeatDelay: 1,
  });

  const presetOption = applyPreset(preset, {
    mask,
  });

  useGSAP(() => {
    if (ref.current) {
      const splitText = SplitText.create(ref.current, presetOption.splitText);
      tl.set(splitText[mask], {
        transformOrigin: "bottom",
        transformStyle: "preserve-3d",
      });
      tl.fromTo(
        splitText[mask],
        motion ? motion.from : presetOption.from,
        motion ? motion.to : presetOption.to,
      );
    }
  });

  const Comp = asChild ? Slot : "div";
  return <Comp ref={ref} {...props} />;
}

function applyPreset(
  preset: TSplitTextPresets,
  options?: {
    mask?: SplitText.Vars["mask"];
  },
): TApplyPreset {
  const splitText: SplitText.Vars = {
    type: "words, chars, lines",
    mask: options?.mask,
  };
  const presets: Record<TSplitTextPresets, TApplyPreset> = {
    default: {
      splitText: {
        ...splitText,
      },
      from: {
        y: 100,
      },
      to: {
        y: 0,
        duration: 1,
      },
    },
  };

  return presets[preset];
}
