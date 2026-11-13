# @n1h/web-characters-block-characters

Kenney's block-style people as [`@n1h/web-characters`](https://github.com/n0t-invented-here/catwalk) models: four [Blocky Characters](https://kenney.nl/assets/blocky-characters) and six [Mini Characters](https://kenney.nl/assets/mini-characters), CC0.

```ts
import { characterA } from "@n1h/web-characters-block-characters/blocky/a";     // one Blocky
import { femaleA } from "@n1h/web-characters-block-characters/mini/female-a";   // one Mini
import { BLOCKY_CHARACTERS } from "@n1h/web-characters-block-characters/blocky"; // all four
import { MINI_CHARACTERS } from "@n1h/web-characters-block-characters/mini";     // all six
import { BLOCK_CHARACTERS } from "@n1h/web-characters-block-characters";         // all ten
```

- One module per character, so a build ships only what a page imports.
- Blocky (`characterA` to `characterD`): idle, walk, sprint, sit, pick things up; nod once on landing; no falling clip, so they fall with the carried one.
- Mini (`femaleA` to `femaleC`, `maleA` to `maleC`): skinned; idle, walk, sprint, jump, sit now and then; flail while held; fall with a falling clip; nod once on landing.
- Licences: `assets/blocky/License.txt`, `assets/mini/License.txt`.

Reference: [packs](https://github.com/n0t-invented-here/catwalk/blob/main/docs/packs.md).
