import React, {
  ButtonHTMLAttributes,
  FC,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { StyledBaseButton } from "../base-button/BaseButton";
import { margin } from "../../../theme/margin";

const StyledRoundButton = styled(StyledBaseButton)`
  vertical-align: middle;
  margin: ${margin("3")};
`;

const RoundButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(20 /* min px */);

  useLayoutEffect(() => {
    const { width } = ref.current.getBoundingClientRect();
    setHeight(width);
  }, [ref]);

  return (
    <StyledRoundButton
      {...props}
      ref={ref}
      style={{
        height: `${height}px`,
        borderRadius: `${height / 2}px`,
        ...props.style,
      }}
    />
  );
};

export { RoundButton };
