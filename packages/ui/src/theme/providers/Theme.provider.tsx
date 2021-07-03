import React, { FC } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeType } from "../Theme.type";
import { theme as defaultTheme } from '../theme'

const ThemeProvider:FC<{theme?: ThemeType}> = ({theme, children}) => {
	return (
		<StyledThemeProvider theme={defaultTheme || theme}>
			{children}
		</StyledThemeProvider>
	);
};

export {ThemeProvider};
