import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMDXComponents } from "@/registry/bricks/fuma-mdx/components/mdx-components";
import { source } from "@/registry/bricks/fuma-mdx/lib/source";

export async function generateMetadata(
  props: PageProps<"/docs/[[...slug]]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const page = source.docs.getPage(slug);

  if (!page) {
    return {
      title: "Not found",
    };
  }

  return { title: page.data.title, description: page.data.description };
}

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const { slug } = await props.params;
  const page = source.docs.getPage(slug);

  if (!page) {
    notFound();
  }

  const MDX = page.data.body;

  return (
    <main className="flex-1 py-20">
      <section className="mx-auto w-full max-w-3xl">
        <MDX components={getMDXComponents()} />
      </section>
    </main>
  );
}
