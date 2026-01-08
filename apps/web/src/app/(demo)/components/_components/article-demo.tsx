import * as Article from "@/registry/bricks/components/article";

export function ArticleDemo01() {
  return (
    <div>
      <Article.Root>
        <Article.Title>Article Component</Article.Title>
        <Article.Subtitle>
          Helpful component to style article like content
        </Article.Subtitle>
      </Article.Root>
    </div>
  );
}
