import { loader } from "fumadocs-core/source";
import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons";
import { blogs, docs } from "@/.source/server";

export const source = {
  blogs: loader({
    baseUrl: "/blogs",
    source: blogs.toFumadocsSource(),
    plugins: [lucideIconsPlugin()],
  }),

  docs: loader({
    baseUrl: "/docs",
    source: docs.toFumadocsSource(),
    plugins: [lucideIconsPlugin()],
  }),
};
