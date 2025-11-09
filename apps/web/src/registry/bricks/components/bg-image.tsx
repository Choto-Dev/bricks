import type React from "react";
import { cn } from "@/lib/utils";

type BGImageProps = React.ComponentPropsWithRef<"div"> & {
  src?: string;
  opacity?: number;
  bgColor?: "foreground" | "background";
  bgSize?: "cover" | "contain";
  bgPosition?: "top" | "bottom" | "left" | "right" | "center";
};

export default function BGImage({
  src,
  opacity = 0.2,
  bgColor = "foreground",
  bgSize = "cover",
  bgPosition = "center",
  ...props
}: BGImageProps) {
  if (!(src || props.children)) {
    throw new Error("No `src` or `children` provided");
  }

  if (opacity < 0 || opacity > 1) {
    throw new Error("`opacity` must be between 0 to 1.");
  }

  return (
    <>
      {src && !props.children && (
        <div
          className="-z-103 absolute inset-0 h-full w-full select-none"
          style={{
            backgroundImage: `url('${src}')`,
            backgroundSize: bgSize,
            backgroundPosition: bgPosition,
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      {props.children && (
        <div className="-z-102 absolute inset-0 h-full w-full select-none">
          {props.children}
        </div>
      )}

      <div
        className={cn(
          "-z-101 absolute inset-0 h-full w-full select-none",
          bgColor === "foreground" && "bg-foreground",
          bgColor === "background" && "bg-background"
        )}
        style={{ opacity }}
      />
    </>
  );
}
