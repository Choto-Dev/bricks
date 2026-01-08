import type React from "react";
import { ArticleDemo01 } from "./_components/article-demo";

type TConponents = {
  name: string;
  demos: {
    name?: string;
    description?: string;
    component: React.ComponentType;
  }[];
  url: string;
};

export const componentDemos: Record<string, TConponents> = {
  article: {
    name: "Article",
    demos: [{
      name: "Demo 01",
      component: ArticleDemo01
    }],
    url: "/demo/article",
  },
};
