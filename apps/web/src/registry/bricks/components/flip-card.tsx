"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);

type TFlipCardContext = {
  tl: gsap.core.Timeline;
  flipCount: number;
  setFlipCount: React.Dispatch<React.SetStateAction<number>>;
  currentAnimationTime: number;
  setCurrentAnimationTime: React.Dispatch<React.SetStateAction<number>>;
} | null;
const FlipCardContext = React.createContext<TFlipCardContext>(null);
function useFlipCardContext() {
  return React.use(FlipCardContext);
}

type FlipCardRootProps = React.ComponentPropsWithRef<"div">;
function FlipCardRoot(props: FlipCardRootProps) {
  const [flipCount, setFlipCount] = React.useState(1);
  const [currentAnimationTime, setCurrentAnimationTime] = React.useState(0);

  return (
    <FlipCardContext
      value={{
        tl: gsap.timeline(),
        flipCount,
        setFlipCount,
        currentAnimationTime,
        setCurrentAnimationTime,
      }}
    >
      <div {...props} className={cn("perspective-distant", props.className)} />
    </FlipCardContext>
  );
}

type FlipCardContainerProps = React.ComponentPropsWithRef<"div">;
function FlipCardContainer(props: FlipCardContainerProps) {
  const cardCtx = useFlipCardContext();

  if (!cardCtx) {
    throw new Error("`FlipCard.Container` should be in `FlipCard.Root`.");
  }

  const cardRef = React.useRef<HTMLDivElement | null>(null);

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: <"allow">
    // biome-ignore lint/a11y/useKeyWithClickEvents: <"allow">
    <div
      {...props}
      ref={cardRef}
      className={cn(
        "relative flex min-h-52 min-w-40 items-center justify-center",
        props.className,
      )}
      onMouseDown={(e) => {
        if (e.detail > 1) {
          e.preventDefault();
        }
      }}
      onClick={() => {
        if (
          !(
            cardCtx.currentAnimationTime < 0.5 &&
            cardCtx.currentAnimationTime > 0
          )
        ) {
          cardCtx.tl.to(cardRef.current, {
            rotateY: cardCtx.flipCount * 180,
            onUpdate: () => {
              cardCtx.setCurrentAnimationTime(cardCtx.tl.time());
            },
            onComplete: () => {
              cardCtx.tl.clear();
            },
          });
          cardCtx.setFlipCount((flipCount) => flipCount + 1);
        }
      }}
    />
  );
}

type FlipCardFrontCardProps = React.ComponentPropsWithRef<"div">;
function FlipCardFrontCard(props: FlipCardFrontCardProps) {
  const cardCtx = useFlipCardContext();

  if (!cardCtx) {
    throw new Error("`FlipCard.FrontCard` should be in `FlipCard.Root`.");
  }

  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full bg-background opacity-100 transition-all",
        cardCtx.flipCount % 2 !== 1 && "opacity-0",
      )}
      style={{ transitionDuration: "0.5s" }}
    >
      <div {...props} className={cn("h-full w-full", props.className)} />
    </div>
  );
}

type FlipCardBackCardProps = React.ComponentPropsWithRef<"div">;
function FlipCardBackCard(props: FlipCardBackCardProps) {
  const cardCtx = useFlipCardContext();

  if (!cardCtx) {
    throw new Error("`FlipCard.BackCard` should be in `FlipCard.Root`.");
  }

  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full rotate-y-180 bg-background opacity-0 transition-all",
        cardCtx.flipCount % 2 === 0 && "opacity-100",
      )}
      style={{ transitionDuration: "0.5s" }}
    >
      <div {...props} className={cn("h-full w-full", props.className)} />
    </div>
  );
}

export {
  FlipCardRoot as Root,
  FlipCardContainer as Container,
  FlipCardFrontCard as FrontCard,
  FlipCardBackCard as BackCard,
};
