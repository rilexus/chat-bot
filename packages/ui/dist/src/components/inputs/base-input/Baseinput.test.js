import React from "react";
import { BaseInput } from "./BaseInput";
import { renderWithThemeProvider } from "../../../utils/test";
describe("BaseInput", () => {
    it("should render input with placeholder text", function () {
        const placeholderText = "placeholderText";
        const { getByPlaceholderText } = renderWithThemeProvider(React.createElement(BaseInput, { type: "text", placeholder: placeholderText }));
        expect(getByPlaceholderText(placeholderText)).toBeDefined();
    });
});
