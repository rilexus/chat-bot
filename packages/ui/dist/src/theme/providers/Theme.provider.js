import React from "react";
import { createGlobalStyle, ThemeProvider as StyledThemeProvider, } from "styled-components";
import { theme as defaultTheme } from "../theme";
const GlobalStyle = createGlobalStyle `
  html{
    margin: 0;
    padding: 0;
  }
  body {
  	margin: 0;
    padding: 0;
  }
  
`;
const ThemeProvider = ({ theme, children }) => {
    return (React.createElement(StyledThemeProvider, { theme: defaultTheme || theme },
        React.createElement(GlobalStyle, null),
        children));
};
export { ThemeProvider };
