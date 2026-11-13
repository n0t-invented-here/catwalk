import { describe, expect, test } from "bun:test";
import { BIRDS, PETS, cubePetMoods, cubePetSpec } from "./spec";

describe("the cube pets' moods", () => {
  test("only the birds ever eat (it is a pecking animation)", () => {
    for (const pet of PETS) {
      const eats = cubePetMoods(pet).some((m) => m.clip === "eat");
      expect(eats, pet).toBe(BIRDS.has(pet));
    }
  });
  test("every mood names a clip the models have; walking and running move, the rest stand", () => {
    const clips = ["idle", "walk", "run", "eat", "dance"];
    for (const pet of ["cow", "parrot"] as const) {
      for (const m of cubePetMoods(pet)) {
        expect(clips).toContain(m.clip);
        expect(m.seconds[0]).toBeGreaterThan(0);
        expect((m.speed ?? 0) > 0).toBe(m.name === "walk" || m.name === "run");
      }
    }
  });
  test("a spec carries the file, the texture map and the four state clips", () => {
    const spec = cubePetSpec("cat", "cat.glb", { "Textures/colormap.png": "colormap.png" });
    expect(spec.name).toBe("Cat");
    expect(spec.url).toBe("cat.glb");
    expect(spec.textures).toEqual({ "Textures/colormap.png": "colormap.png" });
    expect(spec.clips).toEqual({ idle: "idle", carried: "gesture-negative", falling: "gesture-negative", landed: "gesture-positive" });
  });
});
