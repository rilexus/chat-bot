import React, {FC, HTMLProps} from 'react';
import styled, {css} from "styled-components";
import {colors, border} from "../../../theme";

const BaseButtonCSS = css`
	border: none;
	cursor: pointer;
	border-radius: ${border('radius.md')};
	background-color: ${colors('gray.200')};
`

const StyledBaseButton = styled.button`
	${BaseButtonCSS}
`

const BaseButton:FC<HTMLProps<HTMLButtonElement>> = (props) => {
	// @ts-ignore
	return <StyledBaseButton {...props}/>
};

export {BaseButton};
