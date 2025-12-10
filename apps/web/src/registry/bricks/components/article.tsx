import type * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva, type VariantProps } from "class-variance-authority";
import { Link as LinkIcon } from "lucide-react";
import type React from "react";
import type { CSSProperties } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

type ArticleRootProps = React.ComponentPropsWithRef<"article">;
function ArticleRoot(props: ArticleRootProps) {
  return (
    <article
      {...props}
      className={cn("mx-auto w-full max-w-2xl space-y-4", props.className)}
    />
  );
}

// =========================
// ==== Text Components ====
// =========================
type ArticleBlockquoteProps = React.ComponentPropsWithRef<"blockquote">;
function ArticleBlockquote(props: ArticleBlockquoteProps) {
  return (
    <blockquote
      {...props}
      className={cn(
        "my-2.5 border-muted-foreground border-l-4 px-5 py-2.5 [&>p]:pb-0",
        props.className,
      )}
    />
  );
}

type ArticleH1Props = React.ComponentPropsWithRef<"h1">;
function ArticleH1(props: ArticleH1Props) {
  return (
    <h1 {...props} className={cn("font-bold text-6xl", props.className)} />
  );
}

type ArticleH2Props = React.ComponentPropsWithRef<"h2">;
function ArticleH2(props: ArticleH2Props) {
  return (
    <h2 {...props} className={cn("font-semibold text-4xl", props.className)} />
  );
}

type ArticleH3Props = React.ComponentPropsWithRef<"h3">;
function ArticleH3(props: ArticleH3Props) {
  return (
    <h3 {...props} className={cn("font-semibold text-3xl", props.className)} />
  );
}

type ArticleH4Props = React.ComponentPropsWithRef<"h4">;
function ArticleH4(props: ArticleH4Props) {
  return (
    <h4 {...props} className={cn("font-semibold text-2xl", props.className)} />
  );
}

type ArticleH5Props = React.ComponentPropsWithRef<"h5">;
function ArticleH5(props: ArticleH5Props) {
  return (
    <h5 {...props} className={cn("font-semibold text-xl", props.className)} />
  );
}

type ArticleH6Props = React.ComponentPropsWithRef<"h6">;
function ArticleH6(props: ArticleH6Props) {
  return (
    <h6 {...props} className={cn("font-semibold text-lg", props.className)} />
  );
}

type ArticlePProps = React.ComponentPropsWithRef<"h1">;
function ArticleP(props: ArticlePProps) {
  return <p {...props} />;
}

type ArticleTextStyleProps = React.ComponentPropsWithRef<"span"> & {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  subscript?: boolean;
  superscript?: boolean;
};
function ArticleTextStyle({
  bold,
  italic,
  underline,
  strikethrough,
  subscript,
  superscript,
  ...props
}: ArticleTextStyleProps) {
  const styles: CSSProperties = {};

  if (subscript && superscript && process.env.NODE_ENV === "development") {
    throw new Error("Can not pass both `subscript` and `superscript`.");
  }

  if (underline) {
    styles.textDecorationLine = "underline";
    styles.textUnderlineOffset = "4px";
  }
  if (strikethrough) {
    styles.textDecorationLine = "line-through";
  }
  if (underline && strikethrough) {
    styles.textDecorationLine = "underline line-through";
    styles.textUnderlineOffset = "4px";
  }

  return (
    <span
      {...props}
      className={cn(
        "",
        bold && "font-bold",
        italic && "italic",
        subscript && "align-sub text-[12px]",
        superscript && "align-super text-[12px]",
        props.className,
      )}
      style={styles}
    />
  );
}

// =========================
// ==== List Components ====
// =========================
const articleOlVariant = cva("list-outside pl-5 marker:text-foreground/80", {
  variants: {
    variant: {
      default: "list-decimal",
      "alphabet-lower": "list-[lower-alpha]",
      "alphabet-upper": "list-[upper-alpha]",
      "decimal-zero": "list-[decimal-leading-zero]",
      "roman-lower": "list-[lower-roman]",
      "roman-upper": "list-[upper-roman]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
type ArticleOlProps = React.ComponentPropsWithRef<"ol"> &
  VariantProps<typeof articleOlVariant>;
function ArticleOl(props: ArticleOlProps) {
  return (
    <ol
      {...props}
      className={cn(
        articleOlVariant({
          variant: props.variant,
          className: props.className,
        }),
      )}
    />
  );
}

const articleUlVariant = cva("list-outside pl-5 marker:text-foreground/80", {
  variants: {
    variant: {
      default: "list-disc",
      circle: "list-[circle]",
      square: "list-[square]",
      "task-list": "list-none pl-0",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
type ArticleUlProps = React.ComponentPropsWithRef<"ul"> &
  VariantProps<typeof articleUlVariant>;
function ArticleUl(props: ArticleUlProps) {
  return (
    <ul
      {...props}
      className={cn(
        articleUlVariant({
          variant: props.variant,
          className: props.className,
        }),
      )}
    />
  );
}

type ArticleLiProps = React.ComponentPropsWithRef<"li">;
function ArticleLi(props: ArticleLiProps) {
  return <li {...props} />;
}

type ArticleTaskCheckboxProps = React.ComponentProps<
  typeof CheckboxPrimitive.Root
>;
function ArticleTaskCheckbox({ ...props }: ArticleTaskCheckboxProps) {
  return (
    <Checkbox
      {...props}
      checked={props.checked}
      disabled
      className={cn(
        "border-primary/50 disabled:cursor-auto disabled:opacity-100",
        props.checked &&
          "data-[state=checked]:border-primary/50 data-[state=checked]:bg-transparent data-[state=checked]:text-foreground/50",
      )}
    />
  );
}

type ArticleLinkProps = React.ComponentPropsWithRef<"a">;
function ArticleLink(props: ArticleLinkProps) {
  return (
    <a
      {...props}
      className={cn(
        "font-medium underline underline-offset-4 transition-all hover:text-primary/80",
        props.className,
      )}
    />
  );
}

type ArticleImageProps = React.ComponentPropsWithRef<"img">;
function ArticleImage(props: ArticleImageProps) {
  // biome-ignore lint/performance/noImgElement: <"Allow">
  // biome-ignore lint/a11y/useAltText: <"Allow">
  return <img loading="lazy" {...props} />;
}

// ====================================
// ==== Complex Article Components ====
// ====================================
function ArticleTitle(props: ArticleH1Props) {
  return (
    <ArticleH1
      {...props}
      className={cn("font-bold text-6xl", props.className)}
    />
  );
}

function ArticleSubtitle(props: ArticlePProps) {
  return (
    <ArticleP
      {...props}
      className={cn("pb-4 text-lg text-muted-foreground", props.className)}
    />
  );
}

type ArticleHeadingProps = ArticleH2Props &
  ArticleH3Props &
  ArticleH4Props &
  ArticleH5Props &
  ArticleH6Props & {
    headingLevel?: "level-1" | "level-2" | "level-3" | "level-4" | "level-5";
  };
function ArticleHeading({
  headingLevel = "level-1",
  ...props
}: ArticleHeadingProps) {
  const Comp =
    headingLevel === "level-1"
      ? ArticleH2
      : headingLevel === "level-2"
        ? ArticleH3
        : headingLevel === "level-3"
          ? ArticleH4
          : headingLevel === "level-4"
            ? ArticleH5
            : ArticleH6;

  return (
    <Comp
      {...props}
      className={cn("flex scroll-m-10 items-center gap-2", props.className)}
    >
      <a href={`#${props.id ? props.id : props.children}`} className="peer">
        {props.children}
      </a>
      <LinkIcon className="size-4 text-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100" />
    </Comp>
  );
}

function ArticleParagraph(props: ArticlePProps) {
  return <ArticleP {...props} className={cn("pb-3", props.className)} />;
}

type ArticleTaskProps = ArticleLiProps & {
  checked?: boolean;
};
function ArticleTask({ checked = false, ...props }: ArticleTaskProps) {
  return (
    <ArticleLi
      {...props}
      className={cn(
        "flex items-center gap-2",
        checked && "text-muted-foreground line-through",
        props.className,
      )}
    >
      <ArticleTaskCheckbox checked={checked} />
      {props.children}
    </ArticleLi>
  );
}

const Root = ArticleRoot;
const Blockquote = ArticleBlockquote;
const H1 = ArticleH1;
const H2 = ArticleH2;
const H3 = ArticleH3;
const H4 = ArticleH4;
const H5 = ArticleH5;
const H6 = ArticleH6;
const P = ArticleP;
const TextStyle = ArticleTextStyle;
const Ol = ArticleOl;
const Ul = ArticleUl;
const Li = ArticleLi;
const TaskCheckbox = ArticleTaskCheckbox;
const Link = ArticleLink;
const Image = ArticleImage;
const Title = ArticleTitle;
const Subtitle = ArticleSubtitle;
const Heading = ArticleHeading;
const Paragraph = ArticleParagraph;
const Task = ArticleTask;

export {
  Root,
  Blockquote,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  TextStyle,
  Ol,
  Ul,
  Li,
  TaskCheckbox,
  Link,
  Image,
  Title,
  Subtitle,
  Heading,
  Paragraph,
  Task,
};
