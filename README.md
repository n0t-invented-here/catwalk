# catwalk

A cat walking along the bottom of your browser.

`@n1h/web-characters` puts animated glTF characters on any web page, and the model packs supply the characters.

## What a character does

- Drops in at a point and falls to the bottom of the page.
- Lives there: idles, walks, runs, does whatever its clips do, turns around at the sides.
- Lands on other characters' heads, rides along, walks off, and keeps out of their way on the ground.
- Can be picked up with the mouse and thrown.
- Takes clicks only on the model; clicks beside it reach the page.
- Scales per character, at any time.

[Babylon.js](https://www.babylonjs.com/) underneath. A framework-free `createCharacter()` and a React `<Character>`.

## Packages

| Package | Holds |
|---|---|
| [`@n1h/web-characters`](packages/web-characters/README.md) | the core: scene, life, ground, pointer, `createCharacter`, `<Character>`, the `ModelSpec` type |
| [`@n1h/web-characters-cube-pets`](packages/web-characters-cube-pets/README.md) | Kenney's 24 [Cube Pets](https://kenney.nl/assets/cube-pets), [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) |
| [`@n1h/web-characters-block-characters`](packages/web-characters-block-characters/README.md) | Kenney's 4 [Blocky Characters](https://kenney.nl/assets/blocky-characters) and 6 [Mini Characters](https://kenney.nl/assets/mini-characters), [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) |

Every model is its own module, so a build ships only the models a page imports.

## Install

```sh
bun add @n1h/web-characters @n1h/web-characters-cube-pets
```

- The core depends on `@babylonjs/core` and `@babylonjs/loaders`.
- React is an optional peer, for `<Character>`.
- The packages ship TypeScript sources. Your bundler compiles them and treats the packs' `.glb` and `.png` imports as asset URLs (Bun, Vite and esbuild do by default; webpack needs asset modules).

## Quickstart

```ts
import { createCharacter } from "@n1h/web-characters";
import { cat } from "@n1h/web-characters-cube-pets/cat";

const kitty = createCharacter({ model: cat, spawn: { x: 300, y: 0 }, scale: 1.5 });
kitty.setSettings({ scale: 2 });
kitty.spawn({ x: 800, y: 0 }); // teleport and fall again
kitty.dispose();
```

React:

```tsx
import { Character } from "@n1h/web-characters/react";
import { cat } from "@n1h/web-characters-cube-pets/cat";
import { characterA } from "@n1h/web-characters-block-characters/blocky/a";

<Character model={cat} spawn={{ x: 300, y: 0 }} scale={1.5} />
<Character model={characterA} spawn={{ x: 600, y: 0 }} />
```

Your own glTF: describe it as a `ModelSpec` ([the model spec](docs/model-spec.md)).

## Documentation

| Page | Covers |
|---|---|
| [docs/README.md](docs/README.md) | the index |
| [the core](docs/core.md) | `createCharacter`, the handle, `<Character>`, settings |
| [the model spec](docs/model-spec.md) | any animated glTF as a character: clips, moods, fitting, textures |
| [packs](docs/packs.md) | what each pack exports, how to make one, what a build ships |
| [how it works](docs/internals.md) | the life, the ground, the camera, the pointer |

## Demo

```sh
just demo
```

Serves `http://127.0.0.1:4748`. Click anywhere to drop a character there; the panel picks the model and sets scale and bottom. Pick one up and throw it; drop one on another.

## Development

Needs Bun, `just` and `pwsh` (the recipe shell on every OS).

| Recipe | Does |
|---|---|
| `just check` | typecheck every package and the demo, then run the tests |
| `just demo` | build and serve the demo |
| `just <package> pack` | what that tarball would hold |
| `just <package> publish` | publish that package, skipped if its version is already on the registry |
| `just publish-all` | `check`, then publish every package with a new version |

`<package>` is `web-characters`, `cube-pets` or `block-characters`.

A release: bump the version in the packages that changed, commit, `just publish-all`.

## License

The code: MIT or 0BSD, your choice (`LICENSE`, `LICENSE-0BSD`).

The models are by [Kenney](https://kenney.nl), released under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/):

| Pack | Source |
|---|---|
| Cube Pets | https://kenney.nl/assets/cube-pets |
| Blocky Characters | https://kenney.nl/assets/blocky-characters |
| Mini Characters | https://kenney.nl/assets/mini-characters |

Each pack's `assets/` folder carries Kenney's licence file.
