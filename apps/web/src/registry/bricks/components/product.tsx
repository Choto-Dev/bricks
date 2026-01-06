"use client";

import Image from "next/image";
import React from "react";

type TMedia = {
  id: string;
  type: "image" | "video";
  src: string;
  alt?: string;
};
type TVariantOption = {
  name: string;
  values: string[];
  position: number;
};
type TProduct = {
  id: string;
  name: string;
  slug: string;
  price: number;
  discount?: number;
  details?: string;
  featuredMedia?: TMedia;
  media?: TMedia[];
  variantOptions?: TVariantOption;
  defaultVariant?: string;
  variants?: {
    id: string;
    price: number;
    discount?: number;
    featuredImage?: TMedia;
  };
};

type TProductContext = {
  product: TProduct;
  image?: TMedia;
  setImage: React.Dispatch<React.SetStateAction<TMedia | undefined>>;
} | null;
const ProductContext = React.createContext<TProductContext>(null);
function useProductContext() {
  return React.use(ProductContext);
}

type ProductRootProps = {
  product: TProduct;
  children: React.ReactNode;
};
function ProductRoot({ children, product }: ProductRootProps) {
  const [image, setImage] = React.useState(product.featuredMedia);

  return (
    <ProductContext value={{ product, image, setImage }}>
      {children}
    </ProductContext>
  );
}

function ProductName() {
  const productCtx = useProductContext();

  if (!productCtx) {
    throw new Error("`Product.Name` should be in `Product.Root`.");
  }

  return productCtx.product.name;
}

function ProductPrice() {
  const productCtx = useProductContext();

  if (!productCtx) {
    throw new Error("`Product.Price` should be in `Product.Root`.");
  }

  return productCtx.product.price;
}

function ProductDetails() {
  const productCtx = useProductContext();

  if (!productCtx) {
    throw new Error("`Product.Details` should be in `Product.Root`.");
  }

  return productCtx.product.details;
}

function ProductImage({ className }: { className: string }) {
  const productCtx = useProductContext();

  if (!productCtx) {
    throw new Error("`Product.Image` should be in `Product.Root`.");
  }

  if (!productCtx.image) {
    return <Image src={""} alt="" width={1000} height={1000} />;
  }

  return (
    <Image
      src={productCtx.image.src}
      alt={`Image of ${productCtx.product.name}.`}
      width={1000}
      height={1000}
      className={className}
    />
  );
}

function ProductGallery() {
  const productCtx = useProductContext();

  if (!productCtx) {
    throw new Error("`Product.Gallery` should be in `Product.Root`.");
  }

  if (!productCtx.product.media) {
    return null;
  }

  return (
    <>
      {productCtx.product.media.map((image) => (
        <Image
          key={image.id}
          src={image.src}
          alt={`Image of ${productCtx.product.name}.`}
          width={1000}
          height={1000}
        />
      ))}
    </>
  );
}

export {
  type TProduct,
  ProductRoot,
  ProductRoot as Root,
  ProductName as Name,
  ProductPrice as Price,
  ProductDetails as Details,
  ProductImage as Image,
  ProductGallery as Gallery,
};
