import colormap from "../assets/Textures/colormap.png";
import url from "../assets/animal-bunny.glb";
import { PET_TEXTURE_FILE, cubePetSpec } from "./spec";

export const bunny = cubePetSpec("bunny", url, { [PET_TEXTURE_FILE]: colormap });
