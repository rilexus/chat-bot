import React from "react";
import { renderWithTheme } from "../../../../utils/test";
import { BoardInput } from "./BoardInput";
import { SEND_BUTTON_TEST_ID } from "./components/send-button";
import userEvent from "@testing-library/user-event";
import { MESSAGE_INPUT_PLACEHOLDER } from "./components/message-input";

describe("BoardInput", () => {
  it("should call onSend", function () {
    const onSend = jest.fn();
    const { getByPlaceholderText, getByTestId } = renderWithTheme(
      <BoardInput onSend={onSend} />
    );

    const value = "Hello, World!";

    userEvent.type(getByPlaceholderText(MESSAGE_INPUT_PLACEHOLDER), value);
    userEvent.click(getByTestId(SEND_BUTTON_TEST_ID));

    expect(onSend).toBeCalledWith({ target: { value: value } });
  });
});
