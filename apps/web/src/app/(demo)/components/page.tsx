import { componentDemos } from "./_components";

export default function Page() {
  return (
    <div>
      {Object.entries(componentDemos).map(([key, comp]) => (
        <div key={key} className="space-y-3">
          <h1>{comp.name}</h1>

          {comp.demos.map((demo) => {
            const ComponentDemo = demo.component;
            return <ComponentDemo key={demo.name} />;
          })}
        </div>
      ))}
    </div>
  );
}
