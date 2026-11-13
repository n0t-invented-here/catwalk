import colormap from "../assets/Textures/colormap.png";
import url from "../assets/animal-cow.glb";
import { PET_TEXTURE_FILE, cubePetSpec } from "./spec";

export const cow = cubePetSpec("cow", url, { [PET_TEXTURE_FILE]: colormap });
