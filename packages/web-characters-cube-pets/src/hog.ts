import colormap from "../assets/Textures/colormap.png";
import url from "../assets/animal-hog.glb";
import { PET_TEXTURE_FILE, cubePetSpec } from "./spec";

export const hog = cubePetSpec("hog", url, { [PET_TEXTURE_FILE]: colormap });
