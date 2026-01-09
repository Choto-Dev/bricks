import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX({
  configPath: "./src/registry/bricks/mdx-docs/lib/source.config.ts",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [new URL("https://i.ibb.co.com/**")],
  },
};

export default withMDX(nextConfig);
