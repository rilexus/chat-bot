import { useMemo } from "react";
const useCSSStyle = (style, deps) => {
    return useMemo(() => style, deps);
};
export { useCSSStyle };
