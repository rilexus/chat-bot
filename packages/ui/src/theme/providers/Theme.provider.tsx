import React, { FC } from "react";
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import { ThemeType } from "../Theme.type";
import { theme as defaultTheme } from "../theme";

const GlobalStyle = createGlobalStyle`
  html{
    margin: 0;
    padding: 0;
  }
  body {
  	margin: 0;
    padding: 0;
  }
  
`;

const ThemeProvider: FC<{ theme?: ThemeType }> = ({ theme, children }) => {
  return (
    <StyledThemeProvider theme={defaultTheme || theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};

export { ThemeProvider };
