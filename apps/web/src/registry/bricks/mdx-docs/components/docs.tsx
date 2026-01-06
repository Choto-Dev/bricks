"use client";

import type * as PageTree from "fumadocs-core/page-tree";
import Link from "next/link";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";

type GroupedMenu = PageTree.Node & {
  pages: PageTree.Item[];
};

function groupMenuBySeparetor(menu: PageTree.Node[]): GroupedMenu[] {
  const result: GroupedMenu[] = [];
  let currentGroup: GroupedMenu | null = null;

  for (const item of menu) {
    if (item.type === "separator") {
      currentGroup = { ...item, pages: [] };
      result.push(currentGroup);
    } else if (item.type === "page" && currentGroup) {
      currentGroup.pages.push(item);
    }
  }

  return result;
}

type TDocsLayoutContext = unknown;
const DocsLayoutContext = React.createContext<TDocsLayoutContext | null>(null);

type DocsRootProps = { children: React.ReactNode };
function DocsRoot(props: DocsRootProps) {
  return (
    <DocsLayoutContext value={{}}>
      <SidebarProvider>{props.children}</SidebarProvider>
    </DocsLayoutContext>
  );
}

type DocsSidebarProps = {
  menu: PageTree.Root;
};
function DocsSidebar(props: DocsSidebarProps) {
  const menu = groupMenuBySeparetor(props.menu.children);

  console.log(menu);

  return (
    <Sidebar variant="sidebar">
      <SidebarContent>
        {menu.map((group) => (
          <SidebarGroup key={group.$id}>
            <SidebarGroupLabel>{group.name}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.pages.map((page) => (
                  <SidebarMenuItem key={page.$id}>
                    <SidebarMenuButton asChild>
                      <Link href={page.url}>{page.name}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}

export { DocsRoot as Root, DocsSidebar as Sidebar };
