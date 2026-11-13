# @n1h/web-characters-cube-pets

Kenney's 24 [Cube Pets](https://kenney.nl/assets/cube-pets) (CC0) as [`@n1h/web-characters`](https://github.com/n0t-invented-here/catwalk) models: one module per animal, so a build ships only the animals a page imports.

```ts
import { cat } from "@n1h/web-characters-cube-pets/cat";       // one animal: its file and the shared texture
import { CUBE_PETS } from "@n1h/web-characters-cube-pets";     // all 24, by name
import { PETS, petLabel } from "@n1h/web-characters-cube-pets/spec"; // the names without the files
```

The animals: beaver, bee, bunny, cat, caterpillar, chick, cow, crab, deer, dog, elephant, fish, fox, giraffe, hog, koala, lion, monkey, panda, parrot, penguin, pig, polar, tiger. They idle, walk, run and dance; the chick, the parrot and the penguin also eat.

The licence is in `assets/License.txt`. Reference: [packs](https://github.com/n0t-invented-here/catwalk/blob/main/docs/packs.md).
