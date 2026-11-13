import colormap from "../assets/Textures/colormap.png";
import url from "../assets/animal-penguin.glb";
import { PET_TEXTURE_FILE, cubePetSpec } from "./spec";

export const penguin = cubePetSpec("penguin", url, { [PET_TEXTURE_FILE]: colormap });
