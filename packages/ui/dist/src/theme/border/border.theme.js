import { borderRadius } from "./radius/border-radius.theme";
import { accessTheme } from "../utils";
const borderTheme = {
    radius: borderRadius
};
const border = (path) => accessTheme(path, 'border');
export { borderTheme, border };
