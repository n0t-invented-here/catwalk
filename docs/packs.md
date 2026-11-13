# Packs

A pack is an npm package of `ModelSpec`s with their files: specs, glTFs, textures, licence. It imports only the `ModelSpec` type from the core (`@n1h/web-characters/model`), as a peer, so a pack carries no Babylon and versions on its own. Anyone can publish one.

## The packs here

| Package | One model | The whole pack (ships every file) | Data only |
|---|---|---|---|
| `@n1h/web-characters-cube-pets`, Kenney's Cube Pets: 24 glTF of 130 to 170 KB and one shared texture | `@n1h/web-characters-cube-pets/<name>` exports `<name>`; the names are `PETS` (`cat`, `dog`, `polar`, …) | the package root exports all 24 and `CUBE_PETS` by name | `/spec`: `PETS`, `Pet`, `petLabel`, `BIRDS`, `petModelFile`, `cubePetMoods`, `cubePetSpec` |
| `@n1h/web-characters-block-characters`, Kenney's Blocky Characters: 4 glTF of about 110 KB with a texture each | `@n1h/web-characters-block-characters/a` … `/d` export `characterA` … `characterD` | the root exports all four and `BLOCKY_CHARACTERS` | `/spec`: `blockyCharacterSpec` |

The cube pets idle, walk, run and dance, and the three birds also eat (a pecking clip). The Blocky characters idle, walk, sprint, sit and pick things up, nod once when they land, and have no falling clip, so they fall with their carried one. Their files are node-animated, eight units tall as modelled and fitted to 1.3.

## Why one module per model

A bundler emits every asset a module it resolves imports, whether the binding is used or not; tree-shaking, `sideEffects: false` and pure annotations do not change that. A pack with every animal as a named export of one module shipped all 24 files to a page that used one. So every model is its own module:

```ts
// the whole of @n1h/web-characters-cube-pets/cat
import colormap from "../assets/Textures/colormap.png";
import url from "../assets/animal-cat.glb";
import { PET_TEXTURE_FILE, cubePetSpec } from "./spec";

export const cat = cubePetSpec("cat", url, { [PET_TEXTURE_FILE]: colormap });
```

A page importing `cat` ships the cat's glTF and the shared texture as hashed assets its bundler emits, and nothing else. The pack's test bundles exactly that with `Bun.build` and counts the files.

## Making one

- `package.json`: `peerDependencies: { "@n1h/web-characters": "^0.1.0" }`, `sideEffects: false`, `files` with `src` and `assets`, `exports` for `.`, `./spec`, `./*` and `./assets/*`.
- `src/spec.ts`: the pack as data, a function from file URLs to a `ModelSpec`, and whatever names a consumer wants without the files.
- `src/<model>.ts`: import the file and its textures, call the spec function, export the model.
- `src/index.ts`: `/// <reference types="@n1h/web-characters/assets" />` (the `.glb` and `.png` import types live once, in the core), import every model, export them and the pack as a record or list.
- `assets/`: the files and the licence.
