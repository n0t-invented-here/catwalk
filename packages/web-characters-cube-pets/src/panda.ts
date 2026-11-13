import colormap from "../assets/Textures/colormap.png";
import url from "../assets/animal-panda.glb";
import { PET_TEXTURE_FILE, cubePetSpec } from "./spec";

export const panda = cubePetSpec("panda", url, { [PET_TEXTURE_FILE]: colormap });
