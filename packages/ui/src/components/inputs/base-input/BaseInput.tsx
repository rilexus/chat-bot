import React, { FC } from "react";
import styled from "styled-components";
import { colors } from "../../../theme/colors";
import { padding } from "../../../theme/padding";
import { text } from "../../../theme/text";
import { font } from "../../../theme/font";

const StyledBaseInput = styled.input`
  border: 1px solid ${colors("gray.200")};
  padding: ${padding("4")} ${padding("6")};
  font-size: ${text("base")};
  outline: none;
  font-family: ${font("sans")};
  &:focus {
    border: 1px solid ${colors("blue.600")};
  }
`;

const BaseInput: FC<{ type?: string; placeholder?: string }> = ({
  type = "text",
  ...props
}) => {
  return <StyledBaseInput type={type} {...props} />;
};

export { BaseInput, StyledBaseInput };
