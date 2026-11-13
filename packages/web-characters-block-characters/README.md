# @n1h/web-characters-block-characters

Kenney's block-style people as [`@n1h/web-characters`](https://github.com/n0t-invented-here/catwalk) models: four [Blocky Characters](https://kenney.nl/assets/blocky-characters) and six [Mini Characters](https://kenney.nl/assets/mini-characters), CC0. One module per character, so a build ships only what a page imports.

```ts
import { characterA } from "@n1h/web-characters-block-characters/blocky/a";   // one Blocky: its file and its texture
import { femaleA } from "@n1h/web-characters-block-characters/mini/female-a"; // one Mini: its file and the set's shared texture
import { BLOCKY_CHARACTERS } from "@n1h/web-characters-block-characters/blocky"; // all four
import { MINI_CHARACTERS } from "@n1h/web-characters-block-characters/mini";     // all six
import { BLOCK_CHARACTERS } from "@n1h/web-characters-block-characters";         // all ten
```

The Blocky characters (`characterA` to `characterD`) idle, walk, sprint, sit and pick things up, nod once when they land, and fall with their carried clip since the set has no falling one. The Mini characters (`femaleA` to `femaleC`, `maleA` to `maleC`) are skinned, idle, walk, sprint, jump and sit now and then, flail while held, fall with a falling clip and nod once when they land.

Each set's licence is in its `assets/` folder. Reference: [packs](https://github.com/n0t-invented-here/catwalk/blob/main/docs/packs.md).
