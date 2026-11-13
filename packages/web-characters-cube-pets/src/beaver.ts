import colormap from "../assets/Textures/colormap.png";
import url from "../assets/animal-beaver.glb";
import { PET_TEXTURE_FILE, cubePetSpec } from "./spec";

export const beaver = cubePetSpec("beaver", url, { [PET_TEXTURE_FILE]: colormap });
