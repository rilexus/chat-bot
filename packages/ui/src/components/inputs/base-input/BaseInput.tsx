import React, { FC, HTMLProps } from "react";
import styled from "styled-components";
import { colors } from "../../../theme/colors";
import { padding } from "../../../theme/padding";
import { text } from "../../../theme/text";

const StyledBaseInput = styled.input`
  border: 1px solid ${colors("gray.900")};
  padding: ${padding("2")} ${padding("5")};
  font-size: ${text("base")};
  outline: none;
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
