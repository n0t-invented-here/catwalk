# @n1h/web-characters

Animated glTF characters for any web page: a see-through canvas that drops a model in at a point, lands it on the bottom edge of the page or on another character's head, and lets it live there. The core of [catwalk](https://github.com/n0t-invented-here/catwalk): the scene, the life, the ground the characters share, the pointer, `createCharacter()` and a React `<Character>`. The models come from packs (`@n1h/web-characters-cube-pets`, `@n1h/web-characters-block-characters`) or your own `ModelSpec`.

```ts
import { createCharacter } from "@n1h/web-characters";
import { cat } from "@n1h/web-characters-cube-pets/cat";

createCharacter({ model: cat, spawn: { x: 300, y: 0 } });
```

Reference: [the core](https://github.com/n0t-invented-here/catwalk/blob/main/docs/core.md), [the model spec](https://github.com/n0t-invented-here/catwalk/blob/main/docs/model-spec.md), [how it works](https://github.com/n0t-invented-here/catwalk/blob/main/docs/internals.md).
