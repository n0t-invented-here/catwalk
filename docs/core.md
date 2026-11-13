# The core

`@n1h/web-characters`. Everything but the models: `createCharacter`, the handle, `<Character>` from `@n1h/web-characters/react`, the settings. Models are `ModelSpec`s ([the model spec](model-spec.md)) from a pack ([packs](packs.md)) or your own.

## `createCharacter(options): CharacterHandle`

Creates the canvas, appends it to the body (or to `host`), starts the character, and throws when WebGL is not available.

| Option | Type | Default | Means |
|---|---|---|---|
| `model` | `ModelSpec` | required | which model |
| `spawn` | `{ x, y }` | somewhere along the top edge | where the character's centre appears before it falls, in CSS pixels from the top-left of its bounds |
| `scale` | number | 1 | size; at 1 the canvas is 192 CSS pixels square |
| `bottom` | number | 0 | height above the bottom edge of the bounds, CSS pixels; negative sinks it |
| `host` | `HTMLElement` | none | the element the character lives in: its box is the bounds and the canvas is absolute inside it (the element becomes `position: relative` when it was static). Without one the canvas is fixed to the viewport |
| `zIndex` | number | 2147483000 | stacking of the canvas over the page |
| `onFault` | `(message, error?) => void` | `console.error` | a model that would not load |

## `CharacterHandle`

| Member | Does |
|---|---|
| `model` | the `ModelSpec` on show |
| `settings` | the current `CharacterSettings` |
| `position`, `size` | the canvas box's top-left in bounds coordinates, and its edge |
| `setModel(model)` | switch model; resolves when the new one is up, or failed and was reported |
| `setSettings({ scale?, bottom? })` | change either; the reply is the clamped result |
| `spawn({ x, y })` | put the character's centre here and let it fall |
| `dispose()` | stop, remove the canvas, leave the ground |

## `<Character>` (`@n1h/web-characters/react`)

```tsx
<Character model={cat} spawn={{ x, y }} scale={1.5} bottom={0} host={el} zIndex={n} onFault={fn} ref={handleRef} />
```

Renders nothing in React's tree; the canvas is appended outside it and removed on unmount. `model`, `scale` and `bottom` apply when they change (`model` is compared by URL, so a literal in the render body is fine); `spawn` is where it first appears; `host` and `zIndex` re-create the character. `ref` receives the `CharacterHandle`, null until the first effect has run.

## What the canvas carries

Each character is a `<canvas class="web-character">` with `data-model` (the spec's name) and `data-body`, `data-head`, `data-feet`: the measured width, head height and foot line as fractions of the canvas edge ([how it works](internals.md)).

## What a character does

| Feature | Behaviour |
|---|---|
| Spawn | The character's centre appears at `spawn` (CSS pixels from the top-left of its bounds) and falls, playing its falling clip, lands with its landed clip, then idles. Without `spawn`: somewhere along the top edge, so it drops in from above. |
| Bounds | The viewport by default: the canvas is `position: fixed`, so the character stays on screen while the page scrolls. With `host`, the element's box: the canvas is absolute inside it (the element becomes `position: relative` when it was static). A walking character turns around at the sides; a character thrown past one is pulled back inside. |
| Moods | The model's moods, drawn by weight for a while each; the cube pets idle, walk, run and dance, and the three birds also eat (a pecking clip). |
| Pick up and throw | A press on the model picks it up (the hand cursor shows only over the model); the character plays its carried clip while held, falls when released with the hand's speed, clamped to a throw, and lands with its landed clip. A press on a transparent spot reaches the page. |
| Several characters | Each `createCharacter` is its own canvas and WebGL context (browsers allow about 16 per page). Characters on the same ground (the viewport, or one `host`) step in one loop and meet: a character that falls onto another lands on its head and stands there, rides along when the one below walks, drops off when it walks past the edge of the head or the one below is picked up, and towers stack as deep as you drop them. At one level, two whose bodies overlap are pushed apart, a walker that bumps into another turns around, a pile dropped on one spot spreads out. Characters in the air or in hand pass freely. |

### Settings (`CharacterSettings`)

| Setting | Range | Default | Effect |
|---|---|---|---|
| `scale` | 0.25 to 8, two decimals | 1 | Size of the model; the canvas scales with it, about the feet. At 1 the canvas is 192 CSS pixels square. |
| `bottom` | -2000 to 4000, whole numbers | 0 | Height above the bottom edge of the bounds, in CSS pixels. Negative sinks it below the edge. |

Out-of-range values are clamped by `setSettings`, whose reply is the result.

