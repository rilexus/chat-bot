import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { ThemeProvider } from "@chat-bot/ui";

const renderWithTheme = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { ...options, wrapper: ThemeProvider });
export { renderWithTheme };
