"use client";

import gsap from "gsap";
import React from "react";

type TGsapContext = { tl: gsap.core.Timeline } | null;

const GsapContext = React.createContext<TGsapContext>(null);

function GsapRoot({ children }: { children: React.ReactNode }) {
  const tl = gsap.timeline();

  const value = { tl };

  return <GsapContext value={value}>{children}</GsapContext>;
}

const Root = GsapRoot;

export { Root };
