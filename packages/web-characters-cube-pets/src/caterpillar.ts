import colormap from "../assets/Textures/colormap.png";
import url from "../assets/animal-caterpillar.glb";
import { PET_TEXTURE_FILE, cubePetSpec } from "./spec";

export const caterpillar = cubePetSpec("caterpillar", url, { [PET_TEXTURE_FILE]: colormap });
