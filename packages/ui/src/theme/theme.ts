import { ThemeType } from "./Theme.type";
import { colorTheme } from "./colors";
import { borderTheme } from "./border";
import { textTheme } from "./text";
import { paddingTheme } from "./padding";
import { boxShadowTheme } from "./box-shadow";
import { fontTheme } from "./font";
import { marginTheme } from "./margin";

const theme: ThemeType = {
  font: fontTheme,
  colors: colorTheme,
  border: borderTheme,
  text: textTheme,
  padding: paddingTheme,
  margin: marginTheme,
  boxShadow: boxShadowTheme,
};

export { theme };
