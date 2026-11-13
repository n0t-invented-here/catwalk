import colormap from "../../assets/mini/Textures/colormap.png";
import url from "../../assets/mini/character-female-b.glb";
import { TEXTURE_FILE, miniCharacterSpec } from "./spec";

export const femaleB = miniCharacterSpec("Mini female-b", url, { [TEXTURE_FILE]: colormap });
