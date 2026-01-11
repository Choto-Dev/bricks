/**
 * TODOs:
 * 1. create open graph image components
 * 2. create loading components
 * 3. create not found components
 * 4. create better ui (such as, mobile, desktop, laptop and web mockup)
 * 5. create dev editor to
 *    - edit site configs
 *    - add and upload fabicon
 *    - add custom styles
 *    - install components (maybe)
 *    - edit mdx (maybe)
 *    - implement cms (maybe)
 *    - fullsite editing (maybe)
 */

import * as Gsap from "@/registry/bricks/components/gsap";

export default async function Page() {
  return (
    <div>
      <main className="mx-auto flex h-screen w-full max-w-7xl items-center justify-center">
        <Gsap.Root>
          <Gsap.SplitText asChild>
            <h1 className="font-bold text-7xl">Hello, Bricks</h1>
          </Gsap.SplitText>
        </Gsap.Root>
      </main>
    </div>
  );
}
