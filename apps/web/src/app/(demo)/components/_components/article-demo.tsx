import * as Article from "@/registry/bricks/components/article";

export function ArticleDemo0() {
  return (
    <div>
      <Article.Root>
        <Article.Title>Article Component</Article.Title>
        <Article.Subtitle>
          Helpful component to style article like content.
        </Article.Subtitle>

        <Article.Heading headingLevel="level-1">Introduction</Article.Heading>
        <Article.Paragraph>
          Article is composed of multiple components, each providing styled
          wrappers for text elements. It contains simple styled components like{" "}
          <Article.Code>H1</Article.Code> or{" "}
          <Article.Code>TaskCheckbox</Article.Code> to opiniated styled
          components line <Article.Code>Subtitle</Article.Code> or{" "}
          <Article.Code>Heading</Article.Code>.
        </Article.Paragraph>

        <Article.Heading headingLevel="level-1">Example</Article.Heading>
        <Article.Paragraph>
          Here is an some example. To see more example visit{" "}
          <Article.Link href="/components/article">here</Article.Link>
        </Article.Paragraph>

        <Article.Heading headingLevel="level-3">Task List</Article.Heading>
        <Article.Ul>
          <Article.Task checked>Eat</Article.Task>
          <Article.Task checked>Sleep</Article.Task>
          <Article.Task>Code</Article.Task>
        </Article.Ul>
      </Article.Root>
    </div>
  );
}
