import colormap from "../../assets/mini/Textures/colormap.png";
import url from "../../assets/mini/character-male-b.glb";
import { TEXTURE_FILE, miniCharacterSpec } from "./spec";

export const maleB = miniCharacterSpec("Mini male-b", url, { [TEXTURE_FILE]: colormap });
