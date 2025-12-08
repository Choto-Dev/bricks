/**
 * TODOs:
 * 1. create open graph image components
 * 2. create loading components
 * 3. create not found components
 */

import SplitTextAnimation from "@/registry/bricks/components/split-text";

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center">
      <SplitTextAnimation
        asChild
        splitVars={{
          type: "words, chars, lines",
          mask: "chars",
        }}
        fromTween={{
          y: 200,
        }}
        toTween={{
          y: 0,
          duration: 1,
          stagger: 0.1,
        }}
      >
        <h1 className="font-black text-9xl">Hello, Bricks</h1>
      </SplitTextAnimation>
    </main>
  );
}
