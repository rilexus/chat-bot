import { ThemeType } from "../Theme.type";
declare const access: (path: string, object: {
    [key: string]: object;
}) => any;
declare const accessTheme: (stylePatch: string, themePath: string) => ({ theme }: {
    theme: ThemeType;
}) => any;
export { access, accessTheme };
//# sourceMappingURL=index.d.ts.map