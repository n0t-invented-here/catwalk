import colormap from "../../assets/mini/Textures/colormap.png";
import url from "../../assets/mini/character-female-c.glb";
import { TEXTURE_FILE, miniCharacterSpec } from "./spec";

export const femaleC = miniCharacterSpec("Mini female-c", url, { [TEXTURE_FILE]: colormap });
