import colormap from "../assets/Textures/colormap.png";
import url from "../assets/animal-chick.glb";
import { PET_TEXTURE_FILE, cubePetSpec } from "./spec";

export const chick = cubePetSpec("chick", url, { [PET_TEXTURE_FILE]: colormap });
