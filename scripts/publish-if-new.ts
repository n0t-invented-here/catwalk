// Publishes the package in the given folder unless its version is already on
// the registry: a publish of an existing version is an error, not a no-op,
// so `just publish-all` can run over every package after a release that
// bumped only some of them.
//
//   bun scripts/publish-if-new.ts packages/web-characters [--dry-run]

import { join, resolve } from "node:path";

const dryRun = process.argv.includes("--dry-run");
const dir = resolve(process.argv.find((a, i) => i >= 2 && !a.startsWith("--")) ?? ".");
const pkg = (await Bun.file(join(dir, "package.json")).json()) as { name: string; version: string; private?: boolean };
if (pkg.private) {
  console.log(`${pkg.name}: private, not published`);
  process.exit(0);
}
const res = await fetch(`https://registry.npmjs.org/${encodeURIComponent(pkg.name).replace("%40", "@")}`);
const published = res.status === 404 ? [] : Object.keys(((await res.json()) as { versions?: Record<string, unknown> }).versions ?? {});
if (published.includes(pkg.version)) {
  console.log(`${pkg.name}@${pkg.version}: already published, skipped`);
  process.exit(0);
}
console.log(`${pkg.name}@${pkg.version}: ${dryRun ? "would publish" : "publishing"}`);
const run = Bun.spawnSync(["bun", "publish", "--access", "public", ...(dryRun ? ["--dry-run"] : [])], { cwd: dir, stdio: ["inherit", "inherit", "inherit"] });
process.exit(run.exitCode ?? 1);
