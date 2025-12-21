/**
 * TODOs:
 * 1. create open graph image components
 * 2. create loading components
 * 3. create not found components
 * 4. create better ui (such as, mobile, desktop, laptop and web mockup)
 */

import * as Gsap from "@/registry/bricks/components/gsap";

export default function Page() {
  return (
    <div>
      <main className="flex h-screen flex-col items-center justify-center">
        <Gsap.Root>
          <Gsap.SplitText preset="bottom-up" asChild>
            <h1 className="font-black text-9xl">Hello, Bricks</h1>
          </Gsap.SplitText>
        </Gsap.Root>
      </main>
    </div>
  );
}
