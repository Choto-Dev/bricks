import { type ChildProcess, spawn } from "node:child_process";
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
  rootDir: string = process.cwd()
) {
  return new Promise<void>((resolve, reject) => {
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
 * Initiate, add and commit git.
 * @param rootDir Working directory
 */

/**
 * Install component from registry.
 * @param componentUrl Json registry URL of the component.
 * @param rootDir Root directory.
 */
async function installComponent(
  componentUrl: string,
  rootDir: string = process.cwd()
) {
  try {
    await run("pnpm", ["dlx", "shadcn@latest", "add", componentUrl], rootDir);
  } catch (error) {
    consola.error("❌", error);
  }
}

export { installComponent };
