import type React from "react";
import { cn } from "@/lib/utils";

type LoaderProps = React.ComponentPropsWithRef<"div">;
export default function Loader(props: LoaderProps) {
  return (
    <div
      {...props}
      className={cn(
        "size-14 animate-spin rounded-full border-8 border-foreground border-b-red-500",
        props.className
      )}
    />
  );
}
