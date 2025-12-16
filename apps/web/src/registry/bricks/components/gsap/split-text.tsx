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
type SplitTextProps = React.ComponentPropsWithRef<"div"> & {
  motion?: TGsapMotion;
  mask?: SplitText.Vars["mask"];
  preset?: TSplitTextPresets;
  asChild?: boolean;
};

export function GsapSplitText({
  motion,
  mask = "chars",
  preset = "default",
  asChild = false,
  ...props
}: SplitTextProps) {
  const ref = React.useRef(null);
  const tl = gsap.timeline();

  const presetOption = applyPreset(preset);

  useGSAP(() => {
    if (ref.current) {
      const splitText = SplitText.create(ref.current, {
        type: "words, chars, lines",
        mask,
      });
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

function applyPreset(preset: TSplitTextPresets): TGsapMotion {
  const presets: Record<TSplitTextPresets, TGsapMotion> = {
    default: {
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
