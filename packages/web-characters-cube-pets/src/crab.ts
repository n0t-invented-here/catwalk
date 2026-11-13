import colormap from "../assets/Textures/colormap.png";
import url from "../assets/animal-crab.glb";
import { PET_TEXTURE_FILE, cubePetSpec } from "./spec";

export const crab = cubePetSpec("crab", url, { [PET_TEXTURE_FILE]: colormap });
