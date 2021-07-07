import { renderWithTheme } from "../../../../../../utils/test/render-with-theme";
import { SEND_BUTTON_TEST_ID, SendButton } from "./SendButton";
import React from "react";

describe("SendButton", () => {
  it('should have data-testid="SendButton"', function () {
    const { getByTestId } = renderWithTheme(<SendButton />);
    expect(getByTestId(SEND_BUTTON_TEST_ID)).toBeDefined();
  });
});
