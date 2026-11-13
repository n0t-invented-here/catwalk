import colormap from "../assets/Textures/colormap.png";
import url from "../assets/animal-dog.glb";
import { PET_TEXTURE_FILE, cubePetSpec } from "./spec";

export const dog = cubePetSpec("dog", url, { [PET_TEXTURE_FILE]: colormap });
