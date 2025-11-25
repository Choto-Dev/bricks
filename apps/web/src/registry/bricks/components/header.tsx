import { Slot } from "@radix-ui/react-slot";
import type React from "react";
import { cn } from "@/lib/utils";

type HeaderRootProps = React.ComponentPropsWithRef<"header">;
function HeaderRoot(props: HeaderRootProps) {
  return <header {...props} />;
}

type HeaderNavProps = React.ComponentPropsWithRef<"ul">;
function HeaderNav(props: HeaderNavProps) {
  return (
    <nav className="flex w-fit items-center justify-center">
      <ul
        {...props}
        className={cn(
          "flex list-none items-center justify-center gap-5",
          props.className,
        )}
      />
    </nav>
  );
}

type HeaderNavItemProps = React.ComponentPropsWithRef<"li"> & {
  asChild?: boolean;
};
function HeaderNavItem({ asChild = false, ...props }: HeaderNavItemProps) {
  const Component = asChild ? Slot : "li";

  return <Component {...props} className={cn("", props.className)} />;
}

const Root = HeaderRoot;
const Nav = HeaderNav;
const NavItem = HeaderNavItem;

export { Root, Nav, NavItem };
