import React, { FC, SyntheticEvent } from "react";
import styled from "styled-components";
import { StyledBaseInput } from "../base-input/BaseInput";
import { border } from "../../../theme/border";

const StyledRoundInput = styled(StyledBaseInput)`
  border-radius: ${border("radius.lg")};
`;

const RoundInput: FC<{
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: (event: SyntheticEvent) => void;
}> = ({ type = "text", ...props }) => {
  return <StyledRoundInput type={type} {...props} />;
};

export { RoundInput };
