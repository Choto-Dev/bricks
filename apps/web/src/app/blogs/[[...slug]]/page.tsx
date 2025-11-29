import { getMDXComponents } from "@/registry/bricks/fuma-mdx/components/mdx-components";
import { source } from "@/registry/bricks/fuma-mdx/lib/source";

export default async function Page(props: PageProps<"/blogs/[[...slug]]">) {
  const { slug } = await props.params;
  const page = source.blogs.getPage(slug);

  if (!page) {
    return <div>No</div>;
  }

  const MDX = page.data.body;

  return (
    <div>
      <MDX components={getMDXComponents()} />
    </div>
  );
}
