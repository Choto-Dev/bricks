import * as Docs from "@/registry/bricks/mdx-docs/components/docs";
import { source } from "@/registry/bricks/mdx-docs/lib/source";

export default async function Layout(props: LayoutProps<"/docs">) {
  const menu = source.docs.pageTree;

  return (
    <Docs.Root>
      <Docs.Sidebar menu={menu} />

      {props.children}
    </Docs.Root>
  );
}
