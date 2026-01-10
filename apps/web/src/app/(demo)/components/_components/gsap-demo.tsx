import * as Gsap from "@/registry/bricks/components/gsap";

export function GsapDemo0() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3">
      <Gsap.Root>
        <Gsap.SplitText asChild>
          <h1 className="font-bold text-4xl">Hello, Bricks</h1>
        </Gsap.SplitText>

        <Gsap.ReplayBtn />
      </Gsap.Root>
    </div>
  );
}
