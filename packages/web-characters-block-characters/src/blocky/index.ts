// Kenney's Blocky Characters, with their files: all four, for a page that
// wants the whole set. One character: `@n1h/web-characters-block-characters/blocky/a`.

import type { ModelSpec } from "@n1h/web-characters/model";
import { characterA } from "./a";
import { characterB } from "./b";
import { characterC } from "./c";
import { characterD } from "./d";

export { characterA, characterB, characterC, characterD };

export const BLOCKY_CHARACTERS: readonly ModelSpec[] = [characterA, characterB, characterC, characterD];
