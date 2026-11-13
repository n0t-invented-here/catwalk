import colormap from "../assets/Textures/colormap.png";
import url from "../assets/animal-tiger.glb";
import { PET_TEXTURE_FILE, cubePetSpec } from "./spec";

export const tiger = cubePetSpec("tiger", url, { [PET_TEXTURE_FILE]: colormap });
