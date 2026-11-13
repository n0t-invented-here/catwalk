import colormap from "../assets/Textures/colormap.png";
import url from "../assets/animal-lion.glb";
import { PET_TEXTURE_FILE, cubePetSpec } from "./spec";

export const lion = cubePetSpec("lion", url, { [PET_TEXTURE_FILE]: colormap });
