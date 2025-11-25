import fs from "node:fs/promises";
import path from "node:path";

async function main() {
  const resgistryPath = path.resolve("./registry.json");
  const resgistryContent = await fs.readFile(resgistryPath, "utf-8");
  const changedRegistry = resgistryContent.replaceAll(
    "https://choto-bricks.vercel.app/",
    "http://localhost:3000/",
  );
  await fs.writeFile(resgistryPath, changedRegistry, "utf-8");
}

await main();
