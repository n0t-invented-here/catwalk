# catwalk reference

One page per part. The overview, install and quickstart are in the [repo README](../README.md).

| Page | Contents |
|---|---|
| [the core](core.md) | `@n1h/web-characters`: `createCharacter`, the `CharacterHandle`, `<Character>` from `/react`, `CharacterSettings`, what the canvas carries |
| [the model spec](model-spec.md) | `ModelSpec` from `/model`: how any animated glTF becomes a character; clips, moods, fitting, textures, the helpers |
| [packs](packs.md) | the two packs, what each exports, how a pack package is made, why one module per model, what a build ships |
| [how it works](internals.md) | the life state machine, the ground, the camera and the measured proportions, the pointer |

Dependencies point one way: a pack imports only the `ModelSpec` type from the core; the core imports nothing from a pack.
