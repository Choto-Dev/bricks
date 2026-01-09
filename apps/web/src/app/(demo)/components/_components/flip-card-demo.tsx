"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import * as FlipCard from "@/registry/bricks/components/flip-card";

export function FlipCardDemo0() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <FlipCard.Root>
        <FlipCard.Container
          className="size-72 rounded-lg shadow-2xl"
          title="Click to Flip Card"
        >
          <FlipCard.FrontCard>
            <div className="h-full w-full overflow-hidden rounded-lg">
              <Image
                src={"https://i.ibb.co.com/hFHyfdzM/design.webp"}
                alt="Card image"
                width={512}
                height={512}
                className="object-cover"
              />
            </div>
          </FlipCard.FrontCard>
          <FlipCard.BackCard>
            <div className="h-full w-full space-y-2 overflow-hidden rounded-lg border border-muted-foreground bg-muted p-2">
              <h1 className="font-semibold text-xl">Design</h1>
              <p className="text-muted-foreground">
                Great design balances clarity, function, and emotion,
                transforming complex problems into intuitive experiences that
                feel effortless, purposeful, and enduring solutions.
              </p>
              <Button onClick={(e) => e.stopPropagation()}>
                Visit <ArrowUpRight />
              </Button>
            </div>
          </FlipCard.BackCard>
        </FlipCard.Container>
      </FlipCard.Root>
    </div>
  );
}
