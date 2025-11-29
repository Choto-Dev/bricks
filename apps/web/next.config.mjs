import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX({
  configPath: "./src/registry/bricks/fuma-mdx/lib/source.config.ts",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
};

export default withMDX(nextConfig);
