import { css } from "styled-components";
import { text } from "../../text";
const XSTextCSS = css `
	font-size: ${text('xs')};
	line-height: 1rem;
`;
const BaseTextCSS = css `
	font-size: ${text('base')};
	line-height: 1rem;
`;
const LgTextCSS = css `
	font-size: ${text('lg')};
	line-height: 1.75rem;
`;
export { XSTextCSS, BaseTextCSS, LgTextCSS };
