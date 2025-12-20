"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

type CarouselContextProps = {
  tl: GSAPTimeline;
  slideCount: number;
  setSlideCount: React.Dispatch<React.SetStateAction<number>>;
  currentSliderIndex: number;
  setCurrentSliderIndex: React.Dispatch<React.SetStateAction<number>>;
};
const CarouselContext = React.createContext<CarouselContextProps | undefined>(
  undefined,
);

type CarouselRootProps = React.ComponentPropsWithRef<"div">;
function CarouselRoot(props: CarouselRootProps) {
  const [slideCount, setSlideCount] = React.useState(0);
  const [currentSliderIndex, setCurrentSliderIndex] = React.useState(0);
  const tl = gsap.timeline();

  const value = {
    tl,
    slideCount,
    setSlideCount,
    currentSliderIndex,
    setCurrentSliderIndex,
  };

  return (
    <CarouselContext value={value}>
      <div {...props} className="" />
    </CarouselContext>
  );
}

type CarouselSlidesProps = React.ComponentPropsWithRef<"div">;
function CarouselSlides(props: CarouselSlidesProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const ctx = React.useContext(CarouselContext);

  if (!ctx) {
    throw new Error("Carousel.Slides should be in Carousel.Root");
  }

  React.useEffect(() => {
    if (ref.current) {
      ctx.setSlideCount(ref.current.children.length);
    }
  }, [ctx]);

  useGSAP(() => {
    if (ref.current) {
      ctx.tl.fromTo(
        `#${ref.current.children.item(ctx.currentSliderIndex)?.id}`,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
        },
      );
    }
  });

  return (
    <div ref={ref} {...props} className="relative h-96 w-full overflow-clip" />
  );
}

type CarouselItemProps = React.ComponentPropsWithRef<"div">;
function CarouselItem(props: CarouselItemProps) {
  const ctx = React.useContext(CarouselContext);

  if (!ctx) {
    throw new Error("Carousel.Item should be in Carousel.Root");
  }

  return (
    <div
      {...props}
      className="absolute inset-0 flex h-96 w-full items-center justify-center bg-red-400"
    />
  );
}

function CarouselPreviousButton() {
  const ctx = React.useContext(CarouselContext);

  if (!ctx) {
    throw new Error("Carousel.PreviousButton should be in Carousel.Root");
  }

  return <div>Back</div>;
}

function CarouselNextButton() {
  const ctx = React.useContext(CarouselContext);

  if (!ctx) {
    throw new Error("Carousel.NextButton should be in Carousel.Root");
  }

  return (
    <button
      onClick={() => ctx.setCurrentSliderIndex(ctx.currentSliderIndex + 1)}
      type="button"
    >
      Next
    </button>
  );
}

export {
  CarouselRoot as Root,
  CarouselSlides as Slides,
  CarouselItem as Item,
  CarouselPreviousButton as PreviousButton,
  CarouselNextButton as NextButton,
};
