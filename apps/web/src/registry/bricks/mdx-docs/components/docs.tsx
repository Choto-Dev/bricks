"use client";

import type * as PageTree from "fumadocs-core/page-tree";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import * as Tooltip from "@/registry/bricks/components/tooltip";

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

const Icon = {
  SidebarFill: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <title>Sidebar Fill</title>
      <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM9 5V19H20V5H9Z"></path>
    </svg>
  ),
  SidebarLine: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <title>Sidebar Line</title>
      <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM8 5H4V19H8V5ZM10 5V19H20V5H10Z"></path>
    </svg>
  ),
};

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

type DocsSidebarProps = React.ComponentPropsWithRef<"div"> & {
  side?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
};
function DocsSidebar({ ...props }: DocsSidebarProps) {
  return <Sidebar {...props} />;
}

type DocsSidebarHeaderProps = React.ComponentPropsWithRef<"div">;
function DocsSidebarHeader(props: DocsSidebarHeaderProps) {
  return <SidebarHeader {...props} className={cn("px-4", props.className)} />;
}

type DocsSidebarContentProps = {
  menu: PageTree.Root;
};
function DocsSidebarContent(props: DocsSidebarContentProps) {
  const menu = groupMenuBySeparetor(props.menu.children);

  return (
    <SidebarContent>
      {menu.map((group) => (
        <SidebarGroup key={group.$id}>
          <SidebarGroupLabel>{group.name}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {group.pages.map((page) => (
                <SidebarMenuItem key={page.$id}>
                  <SidebarMenuButton asChild>
                    <Link href={page.url} className="font-semibold">
                      {page.name}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </SidebarContent>
  );
}

function DocsSidebarTrigger() {
  return <SidebarTrigger className="cursor-pointer" />;
}

function DocsSidebarCloseButton() {
  const { state, setOpen, setOpenMobile } = useSidebar();

  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="cursor-pointer"
          onClick={() => {
            if (state === "expanded") {
              setOpen(false);
              setOpenMobile(false);
            }
          }}
        >
          <Icon.SidebarLine />
          <span className="sr-only">Close Sidebar</span>
        </Button>
      </Tooltip.Trigger>

      <Tooltip.Content variant={"outline"} sideOffset={2} noArrow>
        <p>Close Sidebar</p>
      </Tooltip.Content>
    </Tooltip.Root>
  );
}

function DocsSidebarOpenButton() {
  const { state, setOpen, setOpenMobile } = useSidebar();

  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="cursor-pointer"
          onClick={() => {
            if (state === "collapsed") {
              setOpen(true);
              setOpenMobile(true);
            }
          }}
        >
          <Icon.SidebarFill />
          <span className="sr-only">Open Sidebar</span>
        </Button>
      </Tooltip.Trigger>

      <Tooltip.Content variant={"outline"} sideOffset={2} noArrow>
        <p>Open Sidebar</p>
      </Tooltip.Content>
    </Tooltip.Root>
  );
}

export {
  DocsRoot as Root,
  DocsSidebar as Sidebar,
  DocsSidebarHeader as SidebarHeader,
  DocsSidebarContent as SidebarContent,
  DocsSidebarTrigger as SidebarTrigger,
  DocsSidebarCloseButton as SidebarCloseButton,
  DocsSidebarOpenButton as SidebarOpenButton,
};
