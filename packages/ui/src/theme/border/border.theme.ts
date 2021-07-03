import {borderRadius} from "./radius/border-radius.theme";
import {accessTheme} from "../utils";
import {BorderThemeType} from "./BorderTheme.type";

const borderTheme: BorderThemeType = {
	radius: borderRadius
}

const border = (path: string) => accessTheme(path, 'border')

export { borderTheme, border }
