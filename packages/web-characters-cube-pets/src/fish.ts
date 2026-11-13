import colormap from "../assets/Textures/colormap.png";
import url from "../assets/animal-fish.glb";
import { PET_TEXTURE_FILE, cubePetSpec } from "./spec";

export const fish = cubePetSpec("fish", url, { [PET_TEXTURE_FILE]: colormap });
