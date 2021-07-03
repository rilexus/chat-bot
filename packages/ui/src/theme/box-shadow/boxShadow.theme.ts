import {accessTheme} from "../utils";

const boxShadowTheme = {
	sm: "0 1px 2px 0 rgba(0,0,0,0.05)",
	basis: '0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06)'
}

const boxShadow = (path: string) => accessTheme(path, 'boxShadow')

export {boxShadowTheme, boxShadow}
