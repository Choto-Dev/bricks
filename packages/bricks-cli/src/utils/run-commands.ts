import { type ChildProcess, spawn } from "node:child_process";
import path from "node:path";
import consola from "consola";
import kill from "tree-kill";

const activeProcesses = new Set<ChildProcess>();

/**
 * Run commands
 * @param cmd Command
 * @param args Command arguments
 * @param rootDir Command spawn directory
 * @returns Void promise
 */
function run(
  cmd: string,
  args: string[] = [],
  rootDir: string = process.cwd(),
) {
  return new Promise<void>((resolve, reject) => {
    consola.info(` Running: ${cmd} ${args.join(" ")}\n`);

    const proc = spawn(cmd, args, {
      cwd: rootDir,
      shell: true,
      stdio: "inherit",
    });

    activeProcesses.add(proc);

    proc.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error("$cmdfailed with code $code"));
      }
    });

    proc.on("error", (err) => {
      activeProcesses.delete(proc);
      reject(err);
    });
  });
}

/**
 * Get the package manager name that is used to run the project.
 * @returns npm package download command.
 */
function pkgManagerExecCommand() {
  const pkgManager = process.env.npm_config_user_agent || "";

  if (pkgManager.startsWith("pnpm") || pkgManager.startsWith("pnpx")) {
    return "pnpm dlx";
  }

  return "npx";
}

const killAll = (signal: NodeJS.Signals = "SIGTERM") => {
  for (const proc of activeProcesses) {
    if (proc.pid) {
      kill(proc.pid, signal);
    }
  }
  activeProcesses.clear();
  process.exit();
};

process.on("SIGINT", killAll);
process.on("SIGTERM", killAll);
process.on("exit", killAll);

/**
 * Install component from registry.
 * @param componentUrl Json registry URL of the component.
 * @param rootDir Root directory.
 */
async function installComponent(componentUrl: string) {
  try {
    await run(pkgManagerExecCommand(), ["shadcn@latest", "add", componentUrl]);
  } catch (error) {
    consola.error("❌", error);
  }
}

/**
 * Install nextjs with `create-next-app@latest` command.
 * @param projectDirName - Project name and dir.
 * @param options - Additional options.
 * @param options.default - Use default setup for `create-next-app@latest` command.
 */
async function installNextjs(
  projectDirName: string = "my-next-app",
  options?: {
    default?: boolean;
  },
) {
  try {
    if (options?.default) {
      await run(pkgManagerExecCommand(), [
        "create-next-app@latest",
        projectDirName,
        "--typescript",
        "--tailwind",
        "--react-compiler",
        "--biome",
        "--app",
        "--src-dir",
        "--import-alias=@/*",
        "--turbopack",
      ]);
    } else {
      await run(pkgManagerExecCommand(), [
        "create-next-app@latest",
        projectDirName,
      ]);
    }
  } catch (error) {
    consola.error("❌", error);
  }
}

async function initShadcnUI(
  projectDirName: string = "my-next-app",
  options?: { default?: boolean },
) {
  consola.log(path.resolve(projectDirName));

  try {
    if (options?.default) {
      await run(
        pkgManagerExecCommand(),
        ["shadcn@latest", "init", "-d"],
        path.resolve(projectDirName),
      );
    } else {
      await run(
        pkgManagerExecCommand(),
        ["shadcn@latest", "init"],
        path.resolve(projectDirName),
      );
    }
  } catch (error) {
    consola.error("❌", error);
  }
}

export { installComponent, installNextjs, initShadcnUI };
