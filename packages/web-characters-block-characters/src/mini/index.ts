// Kenney's Mini Characters, with their files: all six, for a page that
// wants the whole set. One character: `@n1h/web-characters-block-characters/mini/female-a`.

import type { ModelSpec } from "@n1h/web-characters/model";
import { femaleA } from "./female-a";
import { femaleB } from "./female-b";
import { femaleC } from "./female-c";
import { maleA } from "./male-a";
import { maleB } from "./male-b";
import { maleC } from "./male-c";

export { femaleA, femaleB, femaleC, maleA, maleB, maleC };

export const MINI_CHARACTERS: readonly ModelSpec[] = [femaleA, femaleB, femaleC, maleA, maleB, maleC];
