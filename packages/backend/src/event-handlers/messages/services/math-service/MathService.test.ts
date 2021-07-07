import { MathService } from "./MathService";

describe("MathService", () => {
  it("should calculate", function () {
    const expression = "(((22-2)*2)/2)";
    const result = 20;
    expect(MathService.evaluate(expression)).toBe(result);
  });
  it("should throw SyntaxError", function () {
    const expression = "(((a-2)*2)/2)";
    expect(() => MathService.evaluate(expression)).toThrow(SyntaxError);
  });
});
