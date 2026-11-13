import colormap from "../../assets/mini/Textures/colormap.png";
import url from "../../assets/mini/character-male-c.glb";
import { TEXTURE_FILE, miniCharacterSpec } from "./spec";

export const maleC = miniCharacterSpec("Mini male-c", url, { [TEXTURE_FILE]: colormap });
