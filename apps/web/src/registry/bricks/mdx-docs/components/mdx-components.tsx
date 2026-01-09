import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";
import * as Article from "@/registry/bricks/components/article";

/**
 * TODOs:
 * 1. create mdx related component.
 *    - codeblocks
 *    - callouts
 *    - layout component
 * 2. recreate all the "defaultMdxComponents" from fumadocs.
 */

const defaultMdxComponents: MDXComponents = {
  a: Article.Link,
  blockquote: Article.Blockquote,
  Br: Article.Br,
  del: Article.Strike,
  em: Article.Italic,
  h1: Article.Title,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Article.Heading headingLevel="level-1" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Article.Heading headingLevel="level-2" {...props} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Article.Heading headingLevel="level-3" {...props} />
  ),
  h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Article.Heading headingLevel="level-4" {...props} />
  ),
  h6: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Article.Heading headingLevel="level-5" {...props} />
  ),
  Hr: Article.Hr,
  img: (props: ImageProps) => <Image {...props} />,
  input: Article.TaskCheckbox,
  Kbd: Article.Kbd,
  li: (props: React.HTMLAttributes<HTMLLIElement>) => {
    if (props.className?.includes("task-list-item")) {
      return (
        <Article.Li
          {...props}
          className={cn("flex items-center gap-2", props.className)}
        />
      );
    }
    return <Article.Li {...props} />;
  },
  Mark: Article.Mark,
  ol: Article.Ol,
  p: Article.Paragraph,
  strong: Article.Bold,
  Sub: Article.Sub,
  Sup: Article.Sup,
  U: (props: React.HTMLAttributes<HTMLElement>) => (
    <Article.Underline {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => {
    if (props.className?.includes("contains-task-list")) {
      return <Article.Ul variant={"task-list"} {...props} />;
    }
    return <Article.Ul {...props} />;
  },
};

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
  };
}
