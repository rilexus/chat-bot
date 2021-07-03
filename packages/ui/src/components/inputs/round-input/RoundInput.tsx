import React, { FC } from "react";
import styled from "styled-components";
import { StyledBaseInput } from "../base-input/BaseInput";
import { border } from "../../../theme/border";

const StyledRoundInput = styled(StyledBaseInput)`
  border-radius: ${border("radius.lg")};
`;

const RoundInput: FC<{ type?: string; placeholder?: string }> = ({
  type = "text",
  ...props
}) => {
  return <StyledRoundInput type={type} {...props} />;
};

export { RoundInput };
