import React, {FC, HTMLProps} from 'react';
import styled, {css} from "styled-components";
import {colors, padding, border, BaseTextCSS, boxShadow} from "../../../theme";

const BaseButtonPaddingCSS = css`
	padding: ${padding('5')} ${padding('11')};
`;

const BaseButtonCSS = css`
	border: none;
	cursor: pointer;
	border-radius: ${border('radius.md')};
	background-color: ${colors('gray.200')};
	box-shadow: ${boxShadow('basis')};
	${BaseButtonPaddingCSS};
	${BaseTextCSS};
`

const StyledBaseButton = styled.button`
	${BaseButtonCSS}
`

const BaseButton:FC<HTMLProps<HTMLButtonElement>> = (props) => {
	// @ts-ignore
	return <StyledBaseButton {...props}/>
};

export {BaseButton};
