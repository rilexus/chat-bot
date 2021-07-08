import React from "react";
import { renderWithThemeProvider } from "../../../utils/test";
import { RoundInput } from "./RoundInput";
describe("BaseInput", () => {
    it("should render input with placeholder text", function () {
        const placeholderText = "placeholderText";
        const { getByPlaceholderText } = renderWithThemeProvider(React.createElement(RoundInput, { type: "text", placeholder: placeholderText }));
        expect(getByPlaceholderText(placeholderText)).toBeDefined();
    });
});
