import { MathService } from "./MathService";
import { mathService } from "./index";

describe("MathService", () => {
  it("should calculate", function () {
    const expression = "(((22-2)*2)/2)";
    const result = 20;
    expect(mathService.evaluate(expression)).toBe(result);
  });
  it("should throw SyntaxError", function () {
    const expression = "(((a-2)*2)/2)";
    expect(() => mathService.evaluate(expression)).toThrow(SyntaxError);
  });
});
