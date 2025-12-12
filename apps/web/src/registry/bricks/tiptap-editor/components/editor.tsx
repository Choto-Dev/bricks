"use client";

import type { Editor as EditorType, JSONContent } from "@tiptap/core";
import { EditorContent, useEditor, useEditorState } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { cva, type VariantProps } from "class-variance-authority";
import { Bold, Italic, Underline } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type TEditorContent = JSONContent | string;
type EditorContextProps = {
  editor: EditorType | null;
  editorState: {
    isEditorFocus: boolean;
  } | null;
  initialContent: TEditorContent;
  setInitialContent: React.Dispatch<React.SetStateAction<string | JSONContent>>;
  currentContent: TEditorContent;
};
const EditorContext = React.createContext<EditorContextProps>({
  editor: null,
  editorState: null,
  initialContent: "",
  setInitialContent: (content: TEditorContent) => content,
  currentContent: "",
});
export function useEditorContext() {
  const ctx = React.use(EditorContext);
  return ctx;
}

function getExtensions() {
  return [StarterKit];
}

function EditorRoot({ children }: { children: React.ReactNode }) {
  const [initialContent, setInitialContent] =
    React.useState<TEditorContent>("");
  const [currentContent, setCurrentContent] =
    React.useState<TEditorContent>("");

  const editor = useEditor(
    {
      extensions: getExtensions(),
      immediatelyRender: false,
      content: initialContent,
      onUpdate: async ({ editor }) => {
        setCurrentContent(editor.getJSON());
      },
    },
    [initialContent],
  );
  const editorState = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        isEditorFocus: ctx.editor?.isFocused ?? false,
        isBold: ctx.editor?.isActive("bold") ?? false,
        canBold: ctx.editor?.can().chain().toggleBold().run() ?? false,
        isItalic: ctx.editor?.isActive("italic") ?? false,
        canItalic: ctx.editor?.can().chain().toggleItalic().run() ?? false,
        isUnderline: ctx.editor?.isActive("underline") ?? false,
        canUnderline:
          ctx.editor?.can().chain().toggleUnderline().run() ?? false,
        isStrike: ctx.editor?.isActive("strike") ?? false,
        canStrike: ctx.editor?.can().chain().toggleStrike().run() ?? false,
        isCode: ctx.editor?.isActive("code") ?? false,
        canCode: ctx.editor?.can().chain().toggleCode().run() ?? false,
        canClearMarks: ctx.editor?.can().chain().unsetAllMarks().run() ?? false,
        isParagraph: ctx.editor?.isActive("paragraph") ?? false,
        isHeading1: ctx.editor?.isActive("heading", { level: 1 }) ?? false,
        isHeading2: ctx.editor?.isActive("heading", { level: 2 }) ?? false,
        isHeading3: ctx.editor?.isActive("heading", { level: 3 }) ?? false,
        isHeading4: ctx.editor?.isActive("heading", { level: 4 }) ?? false,
        isHeading5: ctx.editor?.isActive("heading", { level: 5 }) ?? false,
        isHeading6: ctx.editor?.isActive("heading", { level: 6 }) ?? false,
        isBulletList: ctx.editor?.isActive("bulletList") ?? false,
        isOrderedList: ctx.editor?.isActive("orderedList") ?? false,
        isCodeBlock: ctx.editor?.isActive("codeBlock") ?? false,
        isBlockquote: ctx.editor?.isActive("blockquote") ?? false,
        canUndo: ctx.editor?.can().chain().undo().run() ?? false,
        canRedo: ctx.editor?.can().chain().redo().run() ?? false,
      };
    },
  });

  if (!editor) {
    return null;
  }

  const value = {
    editor,
    editorState,
    initialContent,
    setInitialContent,
    currentContent,
  };

  return <EditorContext value={value}>{children}</EditorContext>;
}

const editorContentStyleVariant = cva(
  "[&>.ProseMirror]:focus-visible:border-none [&>.ProseMirror]:focus-visible:shadow-none [&>.ProseMirror]:focus-visible:outline-none",
  {
    variants: {
      variant: {
        default:
          "[&_blockquote]:my-2.5 [&_blockquote]:border-muted-foreground [&_blockquote]:border-l-4 [&_blockquote]:px-5 [&_blockquote]:py-2.5 [&_em]:italic [&_h1]:font-bold [&_h1]:text-6xl [&_h2]:font-semibold [&_h2]:text-4xl [&_h3]:font-semibold [&_h3]:text-3xl [&_h4]:font-semibold [&_h4]:text-2xl [&_h5]:font-semibold [&_h5]:text-xl [&_h6]:font-semibold [&_h6]:text-lg [&_hr]:border-muted-foreground [&_strong]:font-bold [&_u]:underline [&_ul]:list-disc",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type EditorEditorProps = React.ComponentPropsWithRef<"div"> &
  VariantProps<typeof editorContentStyleVariant> & {
    content?: TEditorContent;
    onContentUpdate?: (content: TEditorContent) => void;
  };
function EditorEditor({
  content,
  onContentUpdate,
  className,
  variant,
  ...props
}: EditorEditorProps) {
  const { editor, setInitialContent } = useEditorContext();

  if (!editor) {
    throw new Error("Editor.Editor should be in Editor.Root");
  }

  React.useEffect(() => {
    if (content) {
      setInitialContent(content);
    }
    if (onContentUpdate) {
      onContentUpdate(editor.getJSON());
    }
  }, [content, editor, onContentUpdate, setInitialContent]);

  return (
    <EditorContent
      editor={editor}
      className={cn(
        editorContentStyleVariant({
          variant,
          className,
        }),
      )}
      {...props}
    />
  );
}

type EditorReadOnlyProps = React.ComponentPropsWithRef<"div"> &
  VariantProps<typeof editorContentStyleVariant>;
function EditorReadOnly({ className, variant, ...props }: EditorReadOnlyProps) {
  const ctx = useEditorContext();

  if (!ctx || !ctx.editor) {
    throw new Error("Editor.ReadOnly should be in Editor.Root");
  }

  const editor = useEditor(
    {
      extensions: getExtensions(),
      immediatelyRender: false,
      content:
        typeof ctx.currentContent === "string"
          ? ctx.initialContent
          : ctx.currentContent,
      editable: false,
    },
    [ctx],
  );

  if (editor === null) {
    return <div className="text-destructive">Editor failed to initiate</div>;
  }

  return (
    <EditorContent
      editor={editor}
      className={cn(
        editorContentStyleVariant({
          variant,
          className,
        }),
      )}
      {...props}
    />
  );
}

// ========================
// ==== Toggle Buttons ====
// ========================
type EditorToggleBoldBtnProps = React.ComponentPropsWithRef<"button">;
function EditorToggleBoldBtn(props: EditorToggleBoldBtnProps) {
  const { editor } = useEditorContext();

  if (!editor) {
    throw new Error("Editor.ToggleBoldBtn should be in Editor.Root");
  }

  return (
    <Button
      variant={editor.isActive("bold") ? "default" : "outline"}
      size={"icon-sm"}
      className={cn("cursor-pointer", props.className)}
      onClick={() => {
        editor.chain().focus().toggleBold().run();
      }}
      {...props}
    >
      <Bold className="size-4" />
    </Button>
  );
}

type EditorToggleItalicBtnProps = React.ComponentPropsWithRef<"button">;
function EditorToggleItalicBtn(props: EditorToggleItalicBtnProps) {
  const { editor } = useEditorContext();

  if (!editor) {
    throw new Error("Editor.ToggleItalicBtn should be in Editor.Root");
  }

  return (
    <Button
      variant={editor.isActive("italic") ? "default" : "outline"}
      size={"icon-sm"}
      className={cn("cursor-pointer", props.className)}
      onClick={() => {
        editor.chain().focus().toggleItalic().run();
      }}
      {...props}
    >
      <Italic className="size-4" />
    </Button>
  );
}

type EditorToggleUnderlineBtnProps = React.ComponentPropsWithRef<"button">;
function EditorToggleUnderlineBtn(props: EditorToggleUnderlineBtnProps) {
  const { editor } = useEditorContext();

  if (!editor) {
    throw new Error("Editor.ToggleUnderlineBtn should be in Editor.Root");
  }

  return (
    <Button
      variant={editor.isActive("underline") ? "default" : "outline"}
      size={"icon-sm"}
      className={cn("cursor-pointer", props.className)}
      onClick={() => {
        editor.chain().focus().toggleUnderline().run();
      }}
      {...props}
    >
      <Underline className="size-4" />
    </Button>
  );
}

const Root = EditorRoot;
const Editor = EditorEditor;
const ReadOnly = EditorReadOnly;
const ToggleBoldBtn = EditorToggleBoldBtn;
const ToggleItalicBtn = EditorToggleItalicBtn;
const ToggleUnderlineBtn = EditorToggleUnderlineBtn;

export {
  Root,
  Editor,
  ReadOnly,
  ToggleBoldBtn,
  ToggleItalicBtn,
  ToggleUnderlineBtn,
};
