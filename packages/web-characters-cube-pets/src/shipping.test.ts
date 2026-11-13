import { describe, expect, test } from "bun:test";
import { mkdtemp, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

/** Bundle a page that imports these modules of the pack, and list the asset files the build emitted. */
async function shippedAssets(modules: string[]): Promise<string[]> {
  const dir = await mkdtemp(join(tmpdir(), "catwalk-shipping-"));
  try {
    const entry = join(dir, "page.ts");
    await writeFile(entry, modules.map((m, i) => `import * as m${i} from ${JSON.stringify(join(import.meta.dir, m))};\nconsole.log(m${i});`).join("\n"));
    const out = join(dir, "out");
    const result = await Bun.build({ entrypoints: [entry], outdir: out, minify: true });
    expect(result.success, result.logs.map(String).join("\n")).toBe(true);
    return (await readdir(out)).filter((f) => !f.endsWith(".js")).sort();
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
}

describe("what a build ships", () => {
  test("importing one animal ships its file and the shared texture, nothing else", async () => {
    const files = await shippedAssets(["cat.ts"]);
    expect(files).toHaveLength(2);
    expect(files.some((f) => f.startsWith("animal-cat"))).toBe(true);
    expect(files.some((f) => f.startsWith("colormap"))).toBe(true);
  });
  test("two animals ship two files and the texture once", async () => {
    expect(await shippedAssets(["cat.ts", "fox.ts"])).toHaveLength(3);
  });
  test("the whole pack ships all 24 and the texture", async () => {
    expect(await shippedAssets(["index.ts"])).toHaveLength(25);
  });
});
