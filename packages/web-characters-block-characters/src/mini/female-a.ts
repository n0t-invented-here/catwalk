import colormap from "../../assets/mini/Textures/colormap.png";
import url from "../../assets/mini/character-female-a.glb";
import { TEXTURE_FILE, miniCharacterSpec } from "./spec";

export const femaleA = miniCharacterSpec("Mini female-a", url, { [TEXTURE_FILE]: colormap });
