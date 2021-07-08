import { render } from "@testing-library/react";
import { ThemeProvider } from "../../../theme/providers";
const renderWithThemeProvider = (ui, options) => render(ui, Object.assign({ wrapper: ThemeProvider }, options));
export { renderWithThemeProvider };
