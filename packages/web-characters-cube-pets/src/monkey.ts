import colormap from "../assets/Textures/colormap.png";
import url from "../assets/animal-monkey.glb";
import { PET_TEXTURE_FILE, cubePetSpec } from "./spec";

export const monkey = cubePetSpec("monkey", url, { [PET_TEXTURE_FILE]: colormap });
