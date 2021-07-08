const access = (path /* key.path.to.object.value */, object) => {
    // Gets value from object by given path.
    const value = path.split('.').reduce((value, key) => value[key], object);
    if (!value) {
        console.warn(`Value is undefined for path: "${path}"!`);
    }
    return value;
};
const accessTheme = (stylePatch, themePath) => {
    return ({ theme }) => access(stylePatch, access(themePath, theme));
};
export { access, accessTheme };
