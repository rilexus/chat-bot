import {accessTheme} from "../utils";
import {TextThemeType} from "./TextTheme.type";

const textTheme: TextThemeType = {
	xs:	"0.75rem",
	sm: "0.875rem",
	base: "1rem",
	lg: '1.125rem',
	xl: "1.25rem",
	"2xl": '1.5rem',
	"3xl": "1.875rem",
	"4xl": "2.25rem",
}

const text = (path: string) => accessTheme(path, 'text')

export {textTheme, text}
