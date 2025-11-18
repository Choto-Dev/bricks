import { Command } from "commander";
import consola from "consola";
import { componentUrl } from "../utils/component-url";
import { packageJson } from "../utils/package-json";
import { installComponent } from "../utils/run";

export const addCommand = new Command();

addCommand
  .name("add")
  .description("Add apps and feature packages")
  .version(packageJson.version, "-v, --version")
  .argument("[name]", "Brick component name")
  .option("-l, --local", "Install package from localhost", false)
  .action(async (name, options) => {
    consola.info(
      `Downloading ${name} component from ${componentUrl(name, options.local)}`
    );
    consola.log("");

    await installComponent(componentUrl(name, options.local));
  });
