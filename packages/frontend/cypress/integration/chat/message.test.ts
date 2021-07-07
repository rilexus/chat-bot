describe("chat", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000" /* move to env */);
  });

  it("should have empty input after send", () => {
    cy.findByPlaceholderText("Message")
      .type(`Hello, World!`)
      .type("{enter}")
      .should("have.value", "");
  });

  it("should have show own message ", () => {
    const message = "Hello";
    cy.findByPlaceholderText("Message")
      .type(message)
      .type("{enter}")
      .get(`[data-testid="${message}"]`)
      .should("have.text", message);
  });
});
