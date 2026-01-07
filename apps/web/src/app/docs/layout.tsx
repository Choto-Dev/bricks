import * as Docs from "@/registry/bricks/mdx-docs/components/docs";
import { source } from "@/registry/bricks/mdx-docs/lib/source";

export default async function Layout(props: LayoutProps<"/docs">) {
  return (
    <div>
      <Docs.Root>
        <Docs.Sidebar>
          <Docs.SidebarHeader>
            <div className="flex items-center justify-between">
              <p>Hello</p>
              <Docs.SidebarCloseButton />
            </div>
          </Docs.SidebarHeader>
          <Docs.SidebarContent menu={source.docs.pageTree} />
        </Docs.Sidebar>

        <Docs.SidebarOpenButton />

        {props.children}
      </Docs.Root>
    </div>
  );
}
