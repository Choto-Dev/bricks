import { Command } from "commander";
import { packageJson } from "../utils/package-json";
import { initShadcnUI, installNextjs } from "../utils/run-commands";

export const initCommand = new Command();

initCommand
  .name("init")
  .description("Initiate a nextjs app")
  .version(packageJson.version, "-v, --version")
  .argument("[name]", "Nextjs project name", "my-next-app")
  .option("-d, --default", "Install nextjs with biome", false)
  .action(async (name, options) => {
    await installNextjs(name, {
      default: options.default,
    });

    await initShadcnUI(name, {
      default: options.default,
    });
  });
