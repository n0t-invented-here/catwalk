import colormap from "../assets/Textures/colormap.png";
import url from "../assets/animal-elephant.glb";
import { PET_TEXTURE_FILE, cubePetSpec } from "./spec";

export const elephant = cubePetSpec("elephant", url, { [PET_TEXTURE_FILE]: colormap });
