"use client";

import { useGSAP } from "@gsap/react";
import { Slot } from "@radix-ui/react-slot";
import gsap from "gsap";
import type React from "react";

type AppearProps = React.ComponentPropsWithRef<"div"> & {
  from?:
    | "top"
    | "top-left"
    | "top-right"
    | "bottom"
    | "bottom-left"
    | "bottom-right"
    | "center"
    | "left"
    | "right";
  duration?: number;
  displaceX?: number;
  displaceY?: number;
  asChild?: boolean;
};
export default function Appear({
  from = "top",
  duration = 1,
  displaceX = 25,
  displaceY = 25,
  asChild = false,
  ...props
}: AppearProps) {
  let fromTween: GSAPTweenVars;
  let toTween: GSAPTweenVars;

  if (from === "top") {
    fromTween = {
      y: -displaceY,
      opacity: 0,
    };
    toTween = {
      y: 0,
      opacity: 1,
      duration,
    };
  }

  if (from === "top-left") {
    fromTween = {
      x: -displaceY,
      y: -displaceY,
      opacity: 0,
    };
    toTween = {
      x: 0,
      y: 0,
      opacity: 1,
      duration,
    };
  }

  if (from === "top-right") {
    fromTween = {
      x: displaceX,
      y: -displaceY,
      opacity: 0,
    };
    toTween = {
      x: 0,
      y: 0,
      opacity: 1,
      duration,
    };
  }

  if (from === "bottom") {
    fromTween = {
      y: displaceY,
      opacity: 0,
    };
    toTween = {
      y: 0,
      opacity: 1,
      duration,
    };
  }

  if (from === "bottom-left") {
    fromTween = {
      x: -displaceY,
      y: displaceY,
      opacity: 0,
    };
    toTween = {
      x: 0,
      y: 0,
      opacity: 1,
      duration,
    };
  }

  if (from === "bottom-right") {
    fromTween = {
      x: displaceX,
      y: displaceY,
      opacity: 0,
    };
    toTween = {
      x: 0,
      y: 0,
      opacity: 1,
      duration,
    };
  }

  if (from === "center") {
    fromTween = {
      scale: 0,
      opacity: 0,
    };
    toTween = {
      scale: 1,
      opacity: 1,
      duration,
    };
  }

  if (from === "left") {
    fromTween = {
      x: -displaceY,
      opacity: 0,
    };
    toTween = {
      x: 0,
      opacity: 1,
      duration,
    };
  }

  if (from === "right") {
    fromTween = {
      x: displaceX,
      opacity: 0,
    };
    toTween = {
      x: 0,
      opacity: 1,
      duration,
    };
  }

  useGSAP(() => {
    gsap.fromTo(`[data-animated="${from}"]`, fromTween, toTween);
  });

  const Comp = asChild ? Slot : "div";

  return <Comp data-animated={from} {...props} />;
}

export { Appear };
