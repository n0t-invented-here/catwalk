# @n1h/web-characters

Animated glTF characters for any web page. The core of [catwalk](https://github.com/n0t-invented-here/catwalk).

- A see-through canvas per character, over the page.
- Drops in, falls, lands on the page's bottom edge or on another character's head.
- Idles, walks, runs, turns at the sides, bumps into others, can be picked up and thrown.
- Clicks beside the model reach the page.
- Models come from packs (`@n1h/web-characters-cube-pets`, `@n1h/web-characters-block-characters`) or your own `ModelSpec`.

```ts
import { createCharacter } from "@n1h/web-characters";
import { cat } from "@n1h/web-characters-cube-pets/cat";

createCharacter({ model: cat, spawn: { x: 300, y: 0 } });
```

| Entry | Exports |
|---|---|
| `@n1h/web-characters` | `createCharacter`, settings, the spec helpers, the life and framing for anyone building on them |
| `@n1h/web-characters/react` | `<Character>` |
| `@n1h/web-characters/model` | the `ModelSpec` type |

Reference: [the core](https://github.com/n0t-invented-here/catwalk/blob/main/docs/core.md), [the model spec](https://github.com/n0t-invented-here/catwalk/blob/main/docs/model-spec.md), [how it works](https://github.com/n0t-invented-here/catwalk/blob/main/docs/internals.md).
