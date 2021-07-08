declare const fontTheme: {
    sans: string;
    serif: string;
    mono: string;
};
declare const font: (path: string) => ({ theme }: {
    theme: import("../Theme.type").ThemeType;
}) => any;
export { font, fontTheme };
//# sourceMappingURL=font.theme.d.ts.map