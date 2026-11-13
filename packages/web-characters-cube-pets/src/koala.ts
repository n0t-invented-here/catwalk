import colormap from "../assets/Textures/colormap.png";
import url from "../assets/animal-koala.glb";
import { PET_TEXTURE_FILE, cubePetSpec } from "./spec";

export const koala = cubePetSpec("koala", url, { [PET_TEXTURE_FILE]: colormap });
