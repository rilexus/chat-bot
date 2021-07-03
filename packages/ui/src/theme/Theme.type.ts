import {ColorThemeType} from "./colors";
import {TextThemeType} from "./text";
import {BorderThemeType} from "./border";
import {PaddingThemeType} from "./padding";
import {BoxShadowThemeType} from "./box-shadow";

type ThemeType = {
	[key: string]: any;
	colors: ColorThemeType;
	border: BorderThemeType;
	text: TextThemeType;
	padding: PaddingThemeType;
	boxShadow: BoxShadowThemeType
}
export type {ThemeType}
