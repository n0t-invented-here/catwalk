# The model spec

`ModelSpec`, from `@n1h/web-characters/model`.

A character is a `ModelSpec`: where the file is, how to fit it, which clip plays in which state, and what it does on the ground.

```ts
import { createCharacter } from "@n1h/web-characters";
import type { ModelSpec } from "@n1h/web-characters/model";
import robotUrl from "./robot.glb";
import robotSkin from "./robot-skin.png";

const robot: ModelSpec = {
  name: "Robot",
  url: robotUrl,
  textures: { "robot-skin.png": robotSkin }, // what the file references by relative path, by that path; not needed when the textures are embedded
  height: 1.3, // scene units; the cube pets are 1 to 1.4 tall as modelled
  forward: "-z", // which way it faces as modelled; +z by default, as glTF says
  clips: {
    idle: "Idle",
    carried: "Flail",
    falling: "Fall", // falls back to carried, then idle
    landed: { name: "Land", once: true }, // played once, so the landing lasts as long as the clip
  },
  moods: [
    { name: "idle", clip: "Idle", weight: 2, seconds: [2, 6] },
    { name: "walk", clip: "Walk", weight: 3, speed: 60, seconds: [3, 8] }, // px/s at scale 1, tuned to the stride
    { name: "spin", clip: "Spin", seconds: [1, 2] },
  ],
};
createCharacter({ character: robot });
```

What happens with it:

- The file is loaded from `url`; a texture it references by relative path is fetched from `textures[path]` when there is one, else from beside the file. It is posed on the first frame of its idle clip (a bind pose is a T-pose), measured, centred, its feet put at y = 0, scaled to `height` when given, and turned by `forward` so it faces +z. The camera never changes; the model is fitted to it.
- Its posed geometry through the camera gives its width (the lower three quarters, so a raised tail or a hat does not count), its head (the surface straight above its middle) and where its feet are drawn, which is what other characters bump into and stand on. No numbers to supply. The canvas carries them as `data-body`, `data-head` and `data-feet`, fractions of its edge, for a look.
- `moods` is a weighted draw; a mood whose clip the file lacks is never drawn. A mood with `speed` moves the character along the ground at that many CSS pixels per second at scale 1, and faces it the way it goes; the stride is the one thing to tune by eye, because a clip does not say how far its feet travel.
- `clips` name the clips for the states that are not moods. Missing ones fall back as noted. A `once` clip plays through and stops instead of looping; for `landed` it also sets how long the landing lasts (otherwise 1.2 s).
- Every clip gets blending between it and the next, which suits clips of one rig.

The packs are specs of this shape, one module per model; the Mini and Blocky characters are the proof that a file with none of the characters' clip names works (`fall`, `sprint`, `emote-yes` once for the landing, `jump`, `sit`, `pick-up`; Blocky has no falling clip and falls with its carried one).


## Helpers

| Export | Does |
|---|---|
| `clipFor(model, role)` | the `ClipRef` (`{ name, once }`) for `"idle"`, `"carried"`, `"falling"` or `"landed"`, with the fallbacks applied |
| `clipNames(model)` | every clip name the spec uses, deduplicated |
| `drawMood(model, has?)` | one weighted draw from `moods`, as `{ mood, dir, seconds }`; `has(clip)` leaves out moods whose clip the file lacks |
| `sameModel(a, b)` | the same file, by URL; what `setModel` and `<Character model>` compare |

## Types

```ts
type ModelSpec = { name: string; url: string; textures?: Record<string, string>; height?: number; forward?: "+z" | "-z" | "+x" | "-x"; clips: { idle: ClipSpec; carried?: ClipSpec; falling?: ClipSpec; landed?: ClipSpec }; moods: MoodSpec[] };
type ClipSpec = string | { name: string; once?: boolean };
type MoodSpec = { name: string; clip: string; weight?: number; seconds: [number, number]; speed?: number };
type Direction = -1 | 1;
```
