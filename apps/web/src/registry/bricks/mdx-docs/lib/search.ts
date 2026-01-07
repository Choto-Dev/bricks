import { createFromSource } from "fumadocs-core/search/server";
import { source } from "@/registry/bricks/mdx-docs/lib/source";

export function docsSearch() {
  return createFromSource(source.docs);
}
