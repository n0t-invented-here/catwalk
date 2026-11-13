import colormap from "../assets/Textures/colormap.png";
import url from "../assets/animal-deer.glb";
import { PET_TEXTURE_FILE, cubePetSpec } from "./spec";

export const deer = cubePetSpec("deer", url, { [PET_TEXTURE_FILE]: colormap });
