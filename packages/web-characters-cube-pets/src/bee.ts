import colormap from "../assets/Textures/colormap.png";
import url from "../assets/animal-bee.glb";
import { PET_TEXTURE_FILE, cubePetSpec } from "./spec";

export const bee = cubePetSpec("bee", url, { [PET_TEXTURE_FILE]: colormap });
