import { Badge } from "@/components/ui/badge";
import { componentDemos } from "./_components";

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-7xl">
      <div className="space-y-10">
        {Object.entries(componentDemos).map(([key, comp]) => {
          const ComponentDemo = comp.demos[0].component;

          return (
            <div key={key} className="space-y-3 py-2">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <h1 className="font-semibold text-xl">{comp.name}</h1>
                  <Badge className="min-w-7 rounded-full">
                    {comp.demos.length}
                  </Badge>
                </div>

                <div className="flex gap-2">
                  <div>Full Component</div>
                  <div>{comp.demos.length}</div>
                </div>
              </div>

              <div className="border-2 border-foreground bg-muted py-20 shadow-[4px_4px_oklch(0.145_0_0)]">
                <ComponentDemo />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
