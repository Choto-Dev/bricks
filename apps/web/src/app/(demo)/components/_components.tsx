import type React from "react";
import { ArticleDemo0 } from "./_components/article-demo";
import { FlipCardDemo0 } from "./_components/flip-card-demo";
import { GsapDemo0 } from "./_components/gsap-demo";
import { HeaderDemo0 } from "./_components/header-demo";
import { SectionDemo0 } from "./_components/section-demo";

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
    demos: [
      {
        name: "Demo 01",
        component: ArticleDemo0,
      },
    ],
    url: "/components/article",
  },
  "flip-card": {
    name: "Flip Card",
    demos: [
      {
        name: "Demo 01",
        component: FlipCardDemo0,
      },
    ],
    url: "/components/flip-card",
  },
  gsap: {
    name: "Gsap",
    demos: [
      {
        name: "Demo 01",
        component: GsapDemo0,
      },
    ],
    url: "/components/gsap",
  },
  header: {
    name: "Header",
    demos: [
      {
        name: "Demo 01",
        component: HeaderDemo0,
      },
    ],
    url: "/components/header",
  },
  section: {
    name: "Section",
    demos: [
      {
        name: "Demo 01",
        component: SectionDemo0,
      },
    ],
    url: "/components/section",
  },
};
