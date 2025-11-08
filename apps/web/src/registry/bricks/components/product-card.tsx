import type React from "react";
import { cn } from "@/lib/utils";

type ProductCardRootProps = React.ComponentPropsWithRef<"div">;
function ProductCardRoot(props: ProductCardRootProps) {
  return (
    <div
      {...props}
      className={cn("max-w-72 border border-card-foreground", props.className)}
    />
  );
}

type ProductCardImageProps = React.ComponentPropsWithRef<"div">;
function ProductCardImage(props: ProductCardImageProps) {
  return (
    <div
      {...props}
      className={cn(
        "flex aspect-square w-full items-center justify-center overflow-clip",
        props.className
      )}
    />
  );
}

type ProductCardInfoProps = React.ComponentPropsWithRef<"div">;
function ProductCardInfo(props: ProductCardInfoProps) {
  return <div {...props} className={cn("p-2", props.className)} />;
}

type ProductCardTitleProps = React.ComponentPropsWithRef<"h2">;
function ProductCardTitle(props: ProductCardTitleProps) {
  return (
    <h2 {...props} className={cn("font-medium text-xl", props.className)} />
  );
}

type ProductCardPriceProps = React.ComponentPropsWithRef<"span">;
function ProductCardPrice(props: ProductCardPriceProps) {
  return <span {...props} className={cn("font-semibold", props.className)} />;
}

type ProductCardNormalPriceProps = React.ComponentPropsWithRef<"span">;
function ProductCardNormalPrice(props: ProductCardNormalPriceProps) {
  return (
    <span
      {...props}
      className={cn("font-light line-through", props.className)}
    />
  );
}

type ProductCardDiscountAmountProps = React.ComponentPropsWithRef<"span">;
function ProductCardDiscountAmount(props: ProductCardDiscountAmountProps) {
  return (
    <span
      {...props}
      className={cn("font-light text-destructive", props.className)}
    />
  );
}

const Root = ProductCardRoot;
const Image = ProductCardImage;
const Info = ProductCardInfo;
const Title = ProductCardTitle;
const Price = ProductCardPrice;
const NormalPrice = ProductCardNormalPrice;
const DiscountAmount = ProductCardDiscountAmount;

export { Root, Image, Info, Title, Price, NormalPrice, DiscountAmount };
