/// <reference types="@n1h/web-characters/assets" />
// Kenney's block-style people, with their files: the four Blocky Characters
// (`./blocky`) and the six Mini Characters (`./mini`). This module imports
// all ten, for a page that wants everything and ships it; one character is
// `@n1h/web-characters-block-characters/blocky/a` or `.../mini/female-a`.

import type { ModelSpec } from "@n1h/web-characters/model";
import { BLOCKY_CHARACTERS } from "./blocky";
import { MINI_CHARACTERS } from "./mini";

export { characterA, characterB, characterC, characterD, BLOCKY_CHARACTERS } from "./blocky";
export { femaleA, femaleB, femaleC, maleA, maleB, maleC, MINI_CHARACTERS } from "./mini";

export const BLOCK_CHARACTERS: readonly ModelSpec[] = [...BLOCKY_CHARACTERS, ...MINI_CHARACTERS];
