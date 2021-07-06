import React from "react";
import { Message } from "./Message";
import { renderWithTheme } from "../../../../../../utils/test";

describe("Message", () => {
  it("should render message", function () {
    const text = "some";
    const { getByAltText, getByText } = renderWithTheme(
      <Message text={text} own={true} />
    );

    expect(getByText(text)).toBeDefined();
  });
});
