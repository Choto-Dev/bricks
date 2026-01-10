import type * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva, type VariantProps } from "class-variance-authority";
import { Link as LinkIcon } from "lucide-react";
import type React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

/**
 * TODOs:
 * 1. remove padding and margin spaces from component.
 * 2. replace the padding and margin spaces with `Root` lavel style with `[&>p]:pb-3` or `[&>h1]:pb-3`.
 */

type ArticleRootProps = React.ComponentPropsWithRef<"article">;
function ArticleRoot({ className, ...props }: ArticleRootProps) {
  return (
    <article
      {...props}
      className={cn("mx-auto w-full max-w-2xl space-y-4", className)}
    />
  );
}

// =========================
// ==== Text Components ====
// =========================
type ArticleBlockquoteProps = React.ComponentPropsWithRef<"blockquote">;
function ArticleBlockquote({ className, ...props }: ArticleBlockquoteProps) {
  return (
    <blockquote
      {...props}
      className={cn(
        "my-2.5 border-muted-foreground border-l-4 px-5 py-2.5 [&>p]:pb-0",
        className,
      )}
    />
  );
}

type ArticleBoldProps = React.ComponentPropsWithRef<"strong">;
function ArticleBold({ className, ...props }: ArticleBoldProps) {
  return <strong {...props} className={cn("font-bold", className)} />;
}

type ArticleBrProps = React.ComponentPropsWithRef<"br">;
function ArticleBr({ className, ...props }: ArticleBrProps) {
  return <br {...props} className={cn("", className)} />;
}

type ArticleCodeProps = React.ComponentPropsWithRef<"code">;
function ArticleCode({ className, ...props }: ArticleCodeProps) {
  return (
    <code
      {...props}
      className={cn(
        "rounded-xs bg-muted-foreground/30 px-1 font-mono text-sm",
        className,
      )}
    />
  );
}

type ArticleH1Props = React.ComponentPropsWithRef<"h1">;
function ArticleH1({ className, ...props }: ArticleH1Props) {
  return <h1 {...props} className={cn("font-bold text-6xl", className)} />;
}

type ArticleH2Props = React.ComponentPropsWithRef<"h2">;
function ArticleH2({ className, ...props }: ArticleH2Props) {
  return <h2 {...props} className={cn("font-semibold text-4xl", className)} />;
}

type ArticleH3Props = React.ComponentPropsWithRef<"h3">;
function ArticleH3({ className, ...props }: ArticleH3Props) {
  return <h3 {...props} className={cn("font-semibold text-3xl", className)} />;
}

type ArticleH4Props = React.ComponentPropsWithRef<"h4">;
function ArticleH4({ className, ...props }: ArticleH4Props) {
  return <h4 {...props} className={cn("font-semibold text-2xl", className)} />;
}

type ArticleH5Props = React.ComponentPropsWithRef<"h5">;
function ArticleH5({ className, ...props }: ArticleH5Props) {
  return <h5 {...props} className={cn("font-semibold text-xl", className)} />;
}

type ArticleH6Props = React.ComponentPropsWithRef<"h6">;
function ArticleH6({ className, ...props }: ArticleH6Props) {
  return <h6 {...props} className={cn("font-semibold text-lg", className)} />;
}

type ArticleHrProps = React.ComponentPropsWithRef<"hr">;
function ArticleHr({ className, ...props }: ArticleHrProps) {
  return (
    <hr {...props} className={cn("h-0 border-border border-t", className)} />
  );
}

type ArticleItalicProps = React.ComponentPropsWithRef<"em">;
function ArticleItalic({ className, ...props }: ArticleItalicProps) {
  return <em {...props} className={cn("italic", className)} />;
}

type ArticleKbdProps = React.ComponentPropsWithRef<"kbd">;
function ArticleKbd({ className, ...props }: ArticleKbdProps) {
  return (
    <kbd
      {...props}
      className={cn(
        "pointer-events-none inline-flex h-5 w-fit min-w-5 select-none items-center justify-center gap-1 rounded-sm border border-muted-foreground/50 border-b-3 border-b-muted-foreground/50 bg-muted px-1 font-medium font-sans text-muted-foreground text-xs",
        "[&_svg:not([class*='size-'])]:size-3",
        "[data-slot=tooltip-content]_&]:text-background dark:[data-slot=tooltip-content]_&]:bg-background/10 [data-slot=tooltip-content]_&:bg-background/20",
        className,
      )}
    />
  );
}

type ArticleMarkProps = React.ComponentPropsWithRef<"mark">;
function ArticleMark({ className, ...props }: ArticleMarkProps) {
  return (
    <mark
      {...props}
      className={cn("bg-muted-foreground text-background", className)}
    />
  );
}

type ArticlePProps = React.ComponentPropsWithRef<"h1">;
function ArticleP({ className, ...props }: ArticlePProps) {
  return <p {...props} />;
}

type ArticleStrikeProps = React.ComponentPropsWithRef<"del">;
function ArticleStrike({ className, ...props }: ArticleStrikeProps) {
  return <del {...props} className={cn("line-through", className)} />;
}

type ArticleSubscriptProps = React.ComponentPropsWithRef<"sub">;
function ArticleSub({ className, ...props }: ArticleSubscriptProps) {
  return (
    <sub
      {...props}
      className={cn(
        "-bottom-[0.25em] relative align-baseline text-[75%]",
        className,
      )}
    />
  );
}

type ArticleSuperscriptProps = React.ComponentPropsWithRef<"sup">;
function ArticleSuper({ className, ...props }: ArticleSuperscriptProps) {
  return (
    <sup
      className={cn(
        "-top-[0.5em] relative align-baseline text-[75%]",
        className,
      )}
      {...props}
    />
  );
}

type ArticleUnderlineProps = React.ComponentPropsWithRef<"u">;
function ArticleUnderline({ className, ...props }: ArticleUnderlineProps) {
  return <u {...props} className={cn("underline", className)} />;
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
function ArticleOl({ className, ...props }: ArticleOlProps) {
  return (
    <ol
      {...props}
      className={cn(
        articleOlVariant({
          variant: props.variant,
          className: className,
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
function ArticleUl({ className, ...props }: ArticleUlProps) {
  return (
    <ul
      {...props}
      className={cn(
        articleUlVariant({
          variant: props.variant,
          className: className,
        }),
      )}
    />
  );
}

type ArticleLiProps = React.ComponentPropsWithRef<"li">;
function ArticleLi({ className, ...props }: ArticleLiProps) {
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
function ArticleLink({ className, ...props }: ArticleLinkProps) {
  return (
    <a
      {...props}
      className={cn(
        "font-medium underline underline-offset-4 transition-all hover:text-primary/80",
        className,
      )}
    />
  );
}

type ArticleImageProps = React.ComponentPropsWithRef<"img">;
function ArticleImage({ className, ...props }: ArticleImageProps) {
  // biome-ignore lint/performance/noImgElement: <"Allow">
  // biome-ignore lint/a11y/useAltText: <"Allow">
  return <img loading="lazy" {...props} />;
}

// ====================================
// ==== Complex Article Components ====
// ====================================
function ArticleTitle({ className, ...props }: ArticleH1Props) {
  return (
    <ArticleH1 {...props} className={cn("font-bold text-6xl", className)} />
  );
}

function ArticleSubtitle({ className, ...props }: ArticlePProps) {
  return (
    <ArticleP
      {...props}
      className={cn("pb-4 text-lg text-muted-foreground", className)}
    />
  );
}

type ArticleHeadingProps = ArticleH2Props &
  ArticleH3Props &
  ArticleH4Props &
  ArticleH5Props &
  ArticleH6Props & {
    headingLevel?: "1" | "2" | "3" | "4" | "5";
  };
function ArticleHeading({
  className,
  headingLevel = "1",
  ...props
}: ArticleHeadingProps) {
  const Comp =
    headingLevel === "1"
      ? ArticleH2
      : headingLevel === "2"
        ? ArticleH3
        : headingLevel === "3"
          ? ArticleH4
          : headingLevel === "4"
            ? ArticleH5
            : ArticleH6;

  return (
    <Comp
      {...props}
      className={cn("flex scroll-m-10 items-center gap-2", className)}
    >
      <a href={`#${props.id ? props.id : props.children}`} className="peer">
        {props.children}
      </a>
      <LinkIcon className="size-4 text-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100" />
    </Comp>
  );
}

function ArticleParagraph({ className, ...props }: ArticlePProps) {
  return <ArticleP {...props} className={cn("pb-3", className)} />;
}

type ArticleTaskProps = ArticleLiProps & {
  checked?: boolean;
};
function ArticleTask({
  className,
  checked = false,
  ...props
}: ArticleTaskProps) {
  return (
    <ArticleLi
      {...props}
      className={cn(
        "flex items-center gap-2",
        checked && "text-muted-foreground line-through",
        className,
      )}
    >
      <ArticleTaskCheckbox checked={checked} />
      {props.children}
    </ArticleLi>
  );
}

export {
  ArticleRoot as Root,
  ArticleBlockquote as Blockquote,
  ArticleBold as Bold,
  ArticleBr as Br,
  ArticleCode as Code,
  ArticleH1 as H1,
  ArticleH2 as H2,
  ArticleH3 as H3,
  ArticleH4 as H4,
  ArticleH5 as H5,
  ArticleH6 as H6,
  ArticleHr as Hr,
  ArticleItalic as Italic,
  ArticleKbd as Kbd,
  ArticleMark as Mark,
  ArticleP as P,
  ArticleStrike as Strike,
  ArticleSub as Sub,
  ArticleSuper as Sup,
  ArticleUnderline as Underline,
  ArticleOl as Ol,
  ArticleUl as Ul,
  ArticleLi as Li,
  ArticleTaskCheckbox as TaskCheckbox,
  ArticleLink as Link,
  ArticleImage as Image,
  ArticleTitle as Title,
  ArticleSubtitle as Subtitle,
  ArticleHeading as Heading,
  ArticleParagraph as Paragraph,
  ArticleTask as Task,
};
