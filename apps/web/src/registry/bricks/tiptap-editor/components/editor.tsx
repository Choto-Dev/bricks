"use client";

import type { Editor as EditorType, JSONContent } from "@tiptap/core";
import { EditorContent, useEditor, useEditorState } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import "@/registry/bricks/tiptap-editor/styles/editor.css";

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
function useEditorContext() {
  const ctx = React.useContext(EditorContext);
  return ctx;
}

function EditorRoot({ children }: { children: React.ReactNode }) {
  const [initialContent, setInitialContent] =
    React.useState<TEditorContent>("");
  const [currentContent, setCurrentContent] =
    React.useState<TEditorContent>("");

  const editor = useEditor(
    {
      extensions: [StarterKit],
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

function EditorEditor({
  content,
  onContentUpdate,
}: {
  content?: TEditorContent;
  onContentUpdate?: (content: TEditorContent) => void;
}) {
  const ctx = useEditorContext();

  if (!ctx) {
    throw new Error("Editor.Editor should be in Editor.Root");
  }

  React.useEffect(() => {
    if (content) {
      ctx.setInitialContent(content);
    }
    if (onContentUpdate && ctx.editor) {
      onContentUpdate(ctx.editor?.getJSON());
    }
  }, [ctx, content, onContentUpdate]);

  if (ctx.editor === null) {
    return <div className="text-destructive">Editor failed to initiate</div>;
  }

  return <EditorContent editor={ctx.editor} />;
}

function EditorReadOnly() {
  const ctx = useEditorContext();

  if (!ctx) {
    throw new Error("Editor.Editor should be in Editor.Root");
  }

  const editor = useEditor(
    {
      extensions: [StarterKit],
      immediatelyRender: false,
      content:
        typeof ctx.currentContent === "string"
          ? ctx.initialContent
          : ctx.currentContent,
      editable: false,
    },
    [ctx],
  );

  return <EditorContent editor={editor} />;
}

const Root = EditorRoot;
const Editor = EditorEditor;
const ReadOnly = EditorReadOnly;

export { Root, Editor, ReadOnly };
