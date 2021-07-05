import { ColorThemeType } from "./ColorTheme.type";
import { accessTheme } from "../utils";

const colorTheme: ColorThemeType = {
  white: {
    "100": "white",
  },
  blue: {
    "100": "rgb(249,251,255)",
    "200": "rgb(240,244,250)",
    "400": "#60A5FA",
    "600": "#2563EB",
  },
  gray: {
    "50": "#F9FAFB",
    "100": "#F3F4F6",
    "200": "#E5E7EB",
    "900": "#111827",
  },
  red: {
    "50": "#FEF2F2",
    "100": "#FEE2E2",
    "200": "#FECACA",
  },
};

const colors = (path: string) => accessTheme(path, "colors");

export { colorTheme, colors };
