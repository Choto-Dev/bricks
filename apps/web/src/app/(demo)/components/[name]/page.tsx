import { notFound } from "next/navigation";
import { componentDemos } from "../_components";

export default async function Page(props: PageProps<"/components/[name]">) {
  const params = await props.params;
  const componentDemo = componentDemos[params.name];

  if (!componentDemo) {
    notFound();
  }

  return (
    <main className="h-screen min-h-screen">
      {componentDemo.demos.map((demo) => {
        const Component = demo.component;

        return <Component key={demo.name} />;
      })}
    </main>
  );
}
