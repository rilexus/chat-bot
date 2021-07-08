var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import styled from "styled-components";
import { colors } from "../../../theme/colors";
import { padding } from "../../../theme/padding";
import { text } from "../../../theme/text";
import { font } from "../../../theme/font";
const StyledBaseInput = styled.input `
  border: 1px solid ${colors("gray.200")};
  padding: ${padding("4")} ${padding("6")};
  font-size: ${text("base")};
  outline: none;
  font-family: ${font("sans")};
  &:focus {
    border: 1px solid ${colors("blue.600")};
  }
`;
const BaseInput = (_a) => {
    var { type = "text" } = _a, props = __rest(_a, ["type"]);
    return React.createElement(StyledBaseInput, Object.assign({ type: type }, props));
};
export { BaseInput, StyledBaseInput };
