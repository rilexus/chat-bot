import { TextThemeType } from "./TextTheme.type";
declare const textTheme: TextThemeType;
declare const text: (path: string) => ({ theme }: {
    theme: import("../Theme.type").ThemeType;
}) => any;
export { textTheme, text };
//# sourceMappingURL=text.theme.d.ts.map