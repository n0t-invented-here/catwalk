import colormap from "../assets/Textures/colormap.png";
import url from "../assets/animal-parrot.glb";
import { PET_TEXTURE_FILE, cubePetSpec } from "./spec";

export const parrot = cubePetSpec("parrot", url, { [PET_TEXTURE_FILE]: colormap });
