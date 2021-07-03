import { ColorThemeType } from "./ColorTheme.type";
import { accessTheme } from "../utils";

const colorTheme: ColorThemeType = {
	gray: {
		"50": '#F9FAFB',
		"100": '#F3F4F6',
		"200": '#E5E7EB'
	},
	red: {
		"50": '#FEF2F2',
		"100": '#FEE2E2',
		"200": '#FECACA'
	},
}


const colors = (path: string) => accessTheme(path, 'colors')

export {colorTheme, colors};