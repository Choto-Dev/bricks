"use client";

import React from "react";
import { cn } from "@/lib/utils";

type TSectionContext = string;
const SectionContext = React.createContext<TSectionContext>("");

type SectionRootProps = React.ComponentPropsWithRef<"section">;
function SectionRoot(props: SectionRootProps) {
  const value = "";

  return (
    <section {...props} className={cn("space-y-10 py-24", props.className)}>
      <SectionContext value={value}>{props.children}</SectionContext>
    </section>
  );
}

type SectionHeaderProps = React.ComponentPropsWithRef<"div">;
function SectionHeader(props: SectionHeaderProps) {
  return (
    <div
      {...props}
      className={cn(
        "mx-auto flex max-w-4xl flex-col items-center justify-center space-y-5",
        props.className
      )}
    />
  );
}

type SectionTitleProps = React.ComponentPropsWithRef<"h1">;
function SectionTitle(props: SectionTitleProps) {
  return (
    <h1
      {...props}
      className={cn(
        "max-w-xl text-balance text-center font-semibold text-5xl",
        props.className
      )}
    />
  );
}

type SectionSubtitleProps = React.ComponentPropsWithRef<"p">;
function SectionSubtitle(props: SectionSubtitleProps) {
  return (
    <p
      {...props}
      className={cn(
        "text-balance text-center text-muted-foreground text-xl",
        props.className
      )}
    />
  );
}

type SectionContentProps = React.ComponentPropsWithRef<"div">;
function SectionContent(props: SectionContentProps) {
  return (
    <div {...props} className={cn("mx-auto max-w-7xl", props.className)} />
  );
}

export {
  SectionRoot,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  SectionContent,
};
