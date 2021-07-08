import React, { useLayoutEffect, useRef, useState, } from "react";
import styled from "styled-components";
import { StyledBaseButton } from "../base-button/BaseButton";
import { margin } from "../../../theme/margin";
const StyledRoundButton = styled(StyledBaseButton) `
  vertical-align: middle;
  margin: ${margin("3")};
`;
const RoundButton = (props) => {
    const ref = useRef(null);
    const [height, setHeight] = useState(20 /* min px */);
    useLayoutEffect(() => {
        const { width } = ref.current.getBoundingClientRect();
        setHeight(width);
    }, [ref]);
    return (React.createElement(StyledRoundButton, Object.assign({}, props, { ref: ref, style: Object.assign({ height: `${height}px`, borderRadius: `${height / 2}px` }, props.style) })));
};
export { RoundButton };
