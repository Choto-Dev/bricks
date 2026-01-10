"use client";

import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "@/lib/utils";
import BGImage from "@/registry/bricks/components/bg-image";

type TSectionContext = VariantProps<typeof sectionRootVariants>;
const SectionContext = React.createContext<TSectionContext>({
  align: "center",
});

const sectionRootVariants = cva("flex min-h-96 flex-col space-y-10", {
  variants: {
    align: {
      topleft: "items-start justify-start",
      topcenter: "items-center justify-start",
      topright: "items-end justify-start",
      centerleft: "items-start justify-center",
      center: "items-center justify-center",
      centerright: "items-end justify-center",
      bottomleft: "items-start justify-end",
      bottomcenter: "items-center justify-end",
      bottomright: "items-end justify-end",
    },
  },
  defaultVariants: {
    align: "center",
  },
});
type SectionRootProps = React.ComponentPropsWithRef<"section"> &
  VariantProps<typeof sectionRootVariants>;
function SectionRoot({ className, ...props }: SectionRootProps) {
  const value: TSectionContext = {
    align: props.align,
  };

  return (
    <section
      {...props}
      className={cn(
        sectionRootVariants({
          align: props.align,
          className: className,
        }),
      )}
      style={{
        position: "relative",
      }}
    >
      <SectionContext value={value}>{props.children}</SectionContext>
    </section>
  );
}

const sectionHeaderVariants = cva(
  "flex max-w-4xl flex-col items-center justify-center space-y-2",
  {
    variants: {
      align: {
        topleft: "items-start justify-start",
        topcenter: "items-center justify-start",
        topright: "items-end justify-start",
        centerleft: "items-start justify-center",
        center: "items-center justify-center",
        centerright: "items-end justify-center",
        bottomleft: "items-start justify-end",
        bottomcenter: "items-center justify-end",
        bottomright: "items-end justify-end",
      },
    },
    defaultVariants: {
      align: "center",
    },
  },
);
type SectionHeaderProps = React.ComponentPropsWithRef<"div">;
function SectionHeader({ className, ...props }: SectionHeaderProps) {
  const { align } = React.useContext(SectionContext);

  return (
    <div
      {...props}
      className={cn(
        sectionHeaderVariants({
          align,
          className: className,
        }),
      )}
    />
  );
}

const sectionTitleVariants = cva("max-w-xl text-balance font-semibold", {
  variants: {
    textsize: {
      default: "text-5xl",
      small: "text-3xl",
      medium: "text-6xl",
      large: "text-8xl",
      huge: "text-9xl",
    },
    textweight: {
      default: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black",
    },
  },
  defaultVariants: {
    textsize: "default",
    textweight: "default",
  },
});
type SectionTitleProps = React.ComponentPropsWithRef<"h1"> &
  VariantProps<typeof sectionTitleVariants>;
function SectionTitle({ className, ...props }: SectionTitleProps) {
  return (
    <h1
      {...props}
      className={cn(
        sectionTitleVariants({
          textsize: props.textsize,
          textweight: props.textweight,
          className: className,
        }),
      )}
    />
  );
}

type SectionSubtitleProps = React.ComponentPropsWithRef<"p">;
function SectionSubtitle({ className, ...props }: SectionSubtitleProps) {
  return <p {...props} className={cn("text-balance text-xl", className)} />;
}

type SectionContentProps = React.ComponentPropsWithRef<"div">;
function SectionContent({ className, ...props }: SectionContentProps) {
  return <div {...props} className={cn("max-w-7xl", className)} />;
}

export {
  SectionRoot as Root,
  SectionHeader as Header,
  SectionTitle as Title,
  SectionSubtitle as Subtitle,
  SectionContent as Content,
  BGImage as BG,
};
