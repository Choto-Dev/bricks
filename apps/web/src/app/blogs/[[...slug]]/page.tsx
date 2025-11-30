import { notFound } from "next/navigation";
import * as Article from "@/registry/bricks/components/article";
import { getMDXComponents } from "@/registry/bricks/fuma-mdx/components/mdx-components";
import { source } from "@/registry/bricks/fuma-mdx/lib/source";

export default async function Page(props: PageProps<"/blogs/[[...slug]]">) {
  const { slug } = await props.params;
  const page = source.blogs.getPage(slug);

  if (!page) {
    return notFound();
  }

  const MDX = page.data.body;

  return (
    <Article.Root>
      <Article.Title>{page.data.title}</Article.Title>
      <Article.Subtitle>{page.data.description}</Article.Subtitle>

      <MDX components={getMDXComponents()} />
    </Article.Root>
  );
}
