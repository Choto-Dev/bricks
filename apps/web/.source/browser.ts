// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../src/registry/bricks/fuma-mdx/lib/source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  blogs: create.doc("blogs", {"hello.mdx": () => import("../content/blogs/hello.mdx?collection=blogs"), }),
  docs: create.doc("docs", {}),
};
export default browserCollections;