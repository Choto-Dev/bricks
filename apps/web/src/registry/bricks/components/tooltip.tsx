import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function TooltipRoot({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

const tooltipContentVariants = cva(
  "fade-in-0 zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in text-balance rounded-md px-3 py-1.5 text-xs data-[state=closed]:animate-out",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        outline:
          "border border-foreground bg-background text-foreground dark:border-input dark:bg-input/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
const tooltipArrowVariants = cva(
  "z-50 size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-xs",
  {
    variants: {
      variant: {
        default: "bg-foreground fill-foreground",
        secondary: "bg-secondary fill-secondary",
        outline:
          "translate-y-[calc(-50%)] rounded-none border-foreground border-r border-b bg-background fill-background",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
function TooltipContent({
  className,
  sideOffset = 0,
  variant,
  children,
  noArrow = false,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content> &
  VariantProps<typeof tooltipContentVariants> & {
    noArrow?: boolean;
  }) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          tooltipContentVariants({
            variant,
            className,
          }),
        )}
        {...props}
      >
        {children}
        {!noArrow && (
          <TooltipPrimitive.Arrow
            className={cn(tooltipArrowVariants({ variant }))}
          />
        )}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

const Root = TooltipRoot;
const Trigger = TooltipTrigger;
const Content = TooltipContent;

export { Root, Trigger, Content };
