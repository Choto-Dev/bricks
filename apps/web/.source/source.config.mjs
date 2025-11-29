// src/registry/bricks/fuma-mdx/lib/source.config.ts
import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema
} from "fumadocs-mdx/config";
var blogs = defineDocs({
  dir: "content/blogs",
  docs: {
    schema: frontmatterSchema
  },
  meta: {
    schema: metaSchema
  }
});
var docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: frontmatterSchema
  },
  meta: {
    schema: metaSchema
  }
});
var source_config_default = defineConfig({
  mdxOptions: {
    // MDX options
  }
});
export {
  blogs,
  source_config_default as default,
  docs
};
