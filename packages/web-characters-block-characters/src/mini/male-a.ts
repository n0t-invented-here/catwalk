import colormap from "../../assets/mini/Textures/colormap.png";
import url from "../../assets/mini/character-male-a.glb";
import { TEXTURE_FILE, miniCharacterSpec } from "./spec";

export const maleA = miniCharacterSpec("Mini male-a", url, { [TEXTURE_FILE]: colormap });
