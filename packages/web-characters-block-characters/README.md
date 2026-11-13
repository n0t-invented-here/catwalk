# @n1h/web-characters-block-characters

Four of Kenney's [Blocky Characters](https://kenney.nl/assets/blocky-characters) (CC0) as [`@n1h/web-characters`](https://github.com/n0t-invented-here/catwalk) models: one module per character, each with its own texture, so a build ships only what a page imports.

```ts
import { characterA } from "@n1h/web-characters-block-characters/a"; // one character: its file and its texture
import { BLOCKY_CHARACTERS } from "@n1h/web-characters-block-characters"; // all four
```

They idle, walk, sprint, sit and pick things up, nod once when they land, and fall with their carried clip since the pack has no falling one.

The licence is in `assets/License.txt`. Reference: [packs](https://github.com/n0t-invented-here/catwalk/blob/main/docs/packs.md).
