import { Command } from 'commander';
import { packageJson } from '../utils/package-json';

export const addCommand = new Command();

addCommand
  .name('add')
  .description('Add apps and feature packages')
  .version(packageJson.version, '-v, --version')
  .argument('[name]', 'Brick component name')
  .action((name, _options) => {
    console.log(name);
  });
