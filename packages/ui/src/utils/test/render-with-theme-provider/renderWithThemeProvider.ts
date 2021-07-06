import {ReactElement} from "react";
import {render, RenderOptions} from "@testing-library/react";
import {ThemeProvider} from "../../../theme/providers";

const renderWithThemeProvider = (
	ui: ReactElement,
	options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: ThemeProvider, ...options });
export {renderWithThemeProvider}
