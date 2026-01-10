import type React from "react";
import { cn } from "@/lib/utils";

type ProductCardRootProps = React.ComponentPropsWithRef<"div">;
function ProductCardRoot({ className, ...props }: ProductCardRootProps) {
  return (
    <div
      {...props}
      className={cn("max-w-72 border border-card-foreground", className)}
    />
  );
}

type ProductCardImageProps = React.ComponentPropsWithRef<"div">;
function ProductCardImage({ className, ...props }: ProductCardImageProps) {
  return (
    <div
      {...props}
      className={cn(
        "flex aspect-square w-full items-center justify-center overflow-clip",
        className,
      )}
    />
  );
}

type ProductCardInfoProps = React.ComponentPropsWithRef<"div">;
function ProductCardInfo({ className, ...props }: ProductCardInfoProps) {
  return <div {...props} className={cn("p-2", className)} />;
}

type ProductCardTitleProps = React.ComponentPropsWithRef<"h2">;
function ProductCardTitle({ className, ...props }: ProductCardTitleProps) {
  return <h2 {...props} className={cn("font-medium text-xl", className)} />;
}

type ProductCardPriceProps = React.ComponentPropsWithRef<"span">;
function ProductCardPrice({ className, ...props }: ProductCardPriceProps) {
  return <span {...props} className={cn("font-semibold", className)} />;
}

type ProductCardNormalPriceProps = React.ComponentPropsWithRef<"span">;
function ProductCardNormalPrice({
  className,
  ...props
}: ProductCardNormalPriceProps) {
  return (
    <span {...props} className={cn("font-light line-through", className)} />
  );
}

type ProductCardDiscountAmountProps = React.ComponentPropsWithRef<"span">;
function ProductCardDiscountAmount({
  className,
  ...props
}: ProductCardDiscountAmountProps) {
  return (
    <span {...props} className={cn("font-light text-destructive", className)} />
  );
}

export {
  ProductCardRoot as Root,
  ProductCardImage as Image,
  ProductCardInfo as Info,
  ProductCardTitle as Title,
  ProductCardPrice as Price,
  ProductCardNormalPrice as NormalPrice,
  ProductCardDiscountAmount as DiscountAmount,
};
