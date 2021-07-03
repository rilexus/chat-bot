import { ThemeType } from "./Theme.type";
import { colorTheme } from "./colors";
import { borderTheme } from "./border";
import { textTheme } from "./text";
import { paddingTheme } from "./padding";
import { boxShadowTheme } from "./box-shadow";
import { fontTheme } from "./font";

const theme: ThemeType = {
  font: fontTheme,
  colors: colorTheme,
  border: borderTheme,
  text: textTheme,
  padding: paddingTheme,
  boxShadow: boxShadowTheme,
};

export { theme };
