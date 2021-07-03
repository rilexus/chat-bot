import {ThemeType} from "../Theme.type";

const access = (path: string /* key.path.to.object.value */, object: {[key: string]: object}): any => {
	// Gets value from object by given path.
	const value = path.split('.').reduce((value, key) => value[key], object)
	if (!value) {
		console.warn(`Value is undefined for path: "${path}"!`)
	}
	return value
}

const accessTheme = (stylePatch:string, themePath: string) => {
	return ({theme}: {theme: ThemeType}) => access(stylePatch, access(themePath, theme))
}

export {access, accessTheme}
