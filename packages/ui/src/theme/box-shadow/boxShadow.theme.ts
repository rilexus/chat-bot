import { accessTheme } from "../utils";

const boxShadowTheme = {
  sm: "0 1px 2px 0 rgba(0,0,0,0.05)",
  basis: "0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06)",
  md: "0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06)",
  lg: "0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)",
};

const boxShadow = (path: string) => accessTheme(path, "boxShadow");

export { boxShadowTheme, boxShadow };
