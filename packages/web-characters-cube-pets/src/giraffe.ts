import colormap from "../assets/Textures/colormap.png";
import url from "../assets/animal-giraffe.glb";
import { PET_TEXTURE_FILE, cubePetSpec } from "./spec";

export const giraffe = cubePetSpec("giraffe", url, { [PET_TEXTURE_FILE]: colormap });
