import { useMemo } from "react";
import { access } from "../../../utils";
import { useTheme } from "../../../hooks";
const useColorsTheme = () => {
    return useTheme()["colors"];
};
const useThemeColor = (path) => {
    const colors = useColorsTheme();
    return useMemo(() => access(path, colors), [path]);
};
export { useThemeColor };
