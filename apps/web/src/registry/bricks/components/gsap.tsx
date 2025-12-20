"use client";

import { useGSAP } from "@gsap/react";
import { Slot } from "@radix-ui/react-slot";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { Pause, Play, RotateCw } from "lucide-react";
import React, { use } from "react";
import { Button } from "@/components/ui/button";

type TGsapContext = { tl: gsap.core.Timeline } | null;

const GsapContext = React.createContext<TGsapContext>(null);
function useGsapContext() {
  return use(GsapContext);
}

gsap.registerPlugin(SplitText);

function GsapRoot({ children }: { children: React.ReactNode }) {
  const value = { tl: gsap.timeline() };

  return <GsapContext value={value}>{children}</GsapContext>;
}

type TSplitTextPresets =
  | "bottom-up"
  | "scale-up"
  | "scale-up-stagger"
  | "drive-in-stagger";
type TApplyPreset = {
  splitText: SplitText.Vars;
  from: GSAPTweenVars;
  to: GSAPTweenVars;
};
type GsapSplitTextProps = React.ComponentPropsWithRef<"div"> & {
  asChild?: boolean;
  loop?: boolean;
  preset?: TSplitTextPresets;
};
function GsapSplitText({
  asChild = false,
  loop = false,
  preset = "bottom-up",
  ...props
}: GsapSplitTextProps) {
  const ctx = useGsapContext();

  if (!ctx) {
    throw new Error("`Gsap.SplitText` should be in `Gsap.Root`.");
  }

  const ref = React.useRef<HTMLDivElement | null>(null);
  const presetOption = applyPreset(preset);

  useGSAP(() => {
    const splitText = SplitText.create(ref.current, presetOption.splitText);
    ctx.tl.repeat(loop ? -1 : 0);
    ctx.tl.fromTo(splitText.chars, presetOption.from, presetOption.to);
  });

  const Comp = asChild ? Slot : "div";
  return <Comp ref={ref} {...props} />;
}
function applyPreset(preset: TSplitTextPresets): TApplyPreset {
  const presets: Record<TSplitTextPresets, TApplyPreset> = {
    "bottom-up": {
      splitText: {
        type: "words, chars, lines",
        mask: "lines",
      },
      from: {
        y: 100,
      },
      to: {
        y: 0,
        duration: 0.5,
      },
    },
    "scale-up": {
      splitText: {
        type: "words, chars, lines",
      },
      from: {
        scale: 0,
      },
      to: {
        scale: 1,
        duration: 0.5,
      },
    },
    "scale-up-stagger": {
      splitText: {
        type: "words, chars, lines",
      },
      from: {
        scale: 0,
      },
      to: {
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
      },
    },
    "drive-in-stagger": {
      splitText: {
        type: "words, chars, lines",
      },
      from: {
        x: 200,
        opacity: 0,
      },
      to: {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
      },
    },
  };

  return presets[preset];
}

function GsapPausePlayBtn() {
  const ctx = useGsapContext();

  if (!ctx) {
    throw new Error("`Gsap.PausePlayBtn` should be in `Gsap.Root`.");
  }

  const [isPlaying, setIsPlaying] = React.useState<boolean>(true);

  React.useEffect(() => {
    setIsPlaying(ctx.tl.isActive());
  }, [ctx]);

  return (
    <Button
      variant={"outline"}
      onClick={() => {
        if (ctx.tl.isActive()) {
          ctx.tl.pause();
          setIsPlaying(false);
        } else {
          ctx.tl.play();
          setIsPlaying(true);
        }
      }}
      className="cursor-pointer"
    >
      {isPlaying ? <Pause /> : <Play />}
    </Button>
  );
}

function GsapReplayBtn() {
  const ctx = useGsapContext();

  if (!ctx) {
    throw new Error("`Gsap.ReplayBtn` should be in `Gsap.Root`.");
  }

  return (
    <Button
      variant={"outline"}
      onClick={() => {
        ctx.tl.restart();
      }}
      className="cursor-pointer"
    >
      <RotateCw />
    </Button>
  );
}

export {
  GsapRoot as Root,
  GsapSplitText as SplitText,
  GsapPausePlayBtn as PausePlayBtn,
  GsapReplayBtn as ReplayBtn,
};
