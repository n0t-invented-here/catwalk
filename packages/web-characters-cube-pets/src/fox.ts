import colormap from "../assets/Textures/colormap.png";
import url from "../assets/animal-fox.glb";
import { PET_TEXTURE_FILE, cubePetSpec } from "./spec";

export const fox = cubePetSpec("fox", url, { [PET_TEXTURE_FILE]: colormap });
