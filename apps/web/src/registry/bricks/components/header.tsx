import { Slot } from "@radix-ui/react-slot";
import type React from "react";
import { cn } from "@/lib/utils";

type HeaderRootProps = React.ComponentPropsWithRef<"header">;
function HeaderRoot({ className, ...props }: HeaderRootProps) {
  return <header {...props} className="" />;
}

type HeaderContainerProps = React.ComponentPropsWithRef<"div">;
function HeaderContainer({ className, ...props }: HeaderContainerProps) {
  return (
    <div
      {...props}
      className={cn(
        "mx-auto flex w-full max-w-7xl items-center justify-between py-5",
        className,
      )}
    />
  );
}

type HeaderGroupProps = React.ComponentPropsWithRef<"div"> & {
  align?: "left" | "center" | "right";
};
function HeaderGroup({
  align = "left",
  className,
  ...props
}: HeaderGroupProps) {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full items-center gap-2",
        align === "left" && "justify-start",
        align === "center" && "justify-center",
        align === "right" && "justify-end",
        className,
      )}
    />
  );
}

type HeaderLogoProps = React.ComponentPropsWithRef<"div">;
function HeaderLogo({ className, ...props }: HeaderLogoProps) {
  return (
    <div {...props} className={cn("h-fit min-h-5 w-fit min-w-5", className)} />
  );
}

type HeaderNavProps = React.ComponentPropsWithRef<"ul">;
function HeaderNav({ className, ...props }: HeaderNavProps) {
  return (
    <nav className="flex w-fit items-center justify-center">
      <ul
        {...props}
        className={cn(
          "flex list-none items-center justify-center gap-2",
          className,
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

export {
  HeaderRoot as Root,
  HeaderContainer as Container,
  HeaderGroup as Group,
  HeaderLogo as Logo,
  HeaderNav as Nav,
  HeaderNavItem as NavItem,
};
