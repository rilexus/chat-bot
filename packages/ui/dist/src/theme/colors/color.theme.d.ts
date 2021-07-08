import { ColorThemeType } from "./ColorTheme.type";
declare const colorTheme: ColorThemeType;
declare const colors: (path: string) => ({ theme }: {
    theme: import("../Theme.type").ThemeType;
}) => any;
export { colorTheme, colors };
//# sourceMappingURL=color.theme.d.ts.map