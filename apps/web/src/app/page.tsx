/**
 * TODOs:
 * 1. create open graph image components
 * 2. create loading components
 * 3. create not found components
 * 4. create better ui (such as, mobile, desktop, laptop and web mockup)
 */

import { GsapSplitText } from "@/registry/bricks/components/gsap/split-text";

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center">
      <GsapSplitText
        mask="chars"
        motion={{
          from: {
            rotateY: 360,
          },
          to: {
            rotateY: 0,
            duration: 1,
          },
        }}
        repeat
        asChild
      >
        <h1 className="font-black text-9xl">Hello, Bricks</h1>
      </GsapSplitText>
    </main>
  );
}
