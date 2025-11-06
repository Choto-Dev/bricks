import type React from "react";
import { cn } from "@/lib/utils";

type ArticleRootProps = React.ComponentPropsWithRef<"article">;
function ArticleRoot(props: ArticleRootProps) {
  return (
    <article
      {...props}
      className={cn("prose mx-auto w-full max-w-2xl", props.className)}
    />
  );
}

type ArticleTitleProps = React.ComponentPropsWithRef<"h1">;
function ArticleTitle(props: ArticleTitleProps) {
  return <h1 {...props} />;
}

type ArticleHeadingProps = React.ComponentPropsWithRef<"h2" | "h3" | "h4"> & {
  heading?: "big" | "medium" | "base";
};
function ArticleHeading({ heading = "base", ...props }: ArticleHeadingProps) {
  if (heading === "big") {
    return <h2 {...props} />;
  }
  if (heading === "medium") {
    return <h3 {...props} />;
  }
  if (heading === "base") {
    return <h4 {...props} />;
  }
}

type ArticleParagraphProps = React.ComponentPropsWithRef<"h1">;
function ArticleParagraph(props: ArticleParagraphProps) {
  return <p {...props} />;
}

const Root = ArticleRoot;
const Title = ArticleTitle;
const Heading = ArticleHeading;
const Paragraph = ArticleParagraph;

export { Root, Title, Heading, Paragraph };
