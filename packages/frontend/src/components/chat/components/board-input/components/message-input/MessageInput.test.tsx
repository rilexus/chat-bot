import React from "react";
import { renderWithTheme } from "../../../../../../utils/test";
import { MESSAGE_INPUT_PLACEHOLDER, MessageInput } from "./MessageInput";

describe("SendButton", () => {
  it('should have placeholder="Message"', function () {
    const { getByPlaceholderText } = renderWithTheme(<MessageInput />);
    expect(getByPlaceholderText(MESSAGE_INPUT_PLACEHOLDER));
  });
});
