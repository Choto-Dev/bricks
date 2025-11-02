import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: [
    './src/index.ts',
    {
      builder: 'rollup',
      input: './src/index.ts',
    },
  ],
  outDir: 'dist',
  declaration: true,
});
