"use client";

import React from "react";

type TProduct = {
  name: string;
  price: number;
  details?: string;
};
type TProductContext = TProduct | null;
const ProductContext = React.createContext<TProductContext>(null);

function useProductContext() {
  return React.use(ProductContext);
}

type ProductRootProps = TProduct & {
  children: React.ReactNode;
};
function ProductRoot({ children, ...value }: ProductRootProps) {
  return <ProductContext value={{ ...value }}>{children}</ProductContext>;
}

function ProductName() {
  const ctx = useProductContext();

  if (!ctx) {
    throw new Error("`Product.Name` should be in `Product.Root`.");
  }

  return ctx.name;
}

function ProductPrice() {
  const ctx = useProductContext();

  if (!ctx) {
    throw new Error("`Product.Price` should be in `Product.Root`.");
  }

  return ctx.price;
}

function ProductDetails() {
  const ctx = useProductContext();

  if (!ctx) {
    throw new Error("`Product.Details` should be in `Product.Root`.");
  }

  return ctx.details;
}

export {
  ProductRoot as Root,
  ProductName as Name,
  ProductPrice as Price,
  ProductDetails as Details,
};
