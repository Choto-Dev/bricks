// @ts-nocheck
import * as __fd_glob_0 from "../content/blogs/hello.mdx?collection=blogs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../src/registry/bricks/fuma-mdx/lib/source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const blogs = await create.docs("blogs", "content/blogs", {}, {"hello.mdx": __fd_glob_0, });

export const docs = await create.docs("docs", "content/docs", {}, {});