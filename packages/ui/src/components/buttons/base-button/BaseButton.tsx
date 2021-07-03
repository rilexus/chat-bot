import React, {FC, HTMLProps} from 'react';
import styled from "styled-components";
import {colors, border} from "../../../theme";

const StyledBaseButton = styled.button`
	border: none;
	border-radius: ${border('radius.md')};
	background-color: ${colors('gray.200')};
`

const BaseButton:FC<HTMLProps<HTMLButtonElement>> = (props) => {
	// @ts-ignore
	return <StyledBaseButton {...props}/>
};

export {BaseButton};
