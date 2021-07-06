const noop = (): void => {};

enum SUPPORTED_OPERATORS {
  MINUS = "-",
  PLUS = "+",
  DIVIDE = "/",
  MULT = "*",
}

class SyntaxService {
  static isMinus(char: string) {
    return char === SUPPORTED_OPERATORS.MINUS;
  }
  static isPlus(char: string) {
    return char === SUPPORTED_OPERATORS.PLUS;
  }
  static isDivide(char: string) {
    return char === SUPPORTED_OPERATORS.DIVIDE;
  }
  static isMultiplication(char: string) {
    return char === SUPPORTED_OPERATORS.MULT;
  }
}

class MathService {
  static add(...values) {
    return values.reduce((result, currValue) => result + currValue, 0);
  }

  static multiplicate(...values) {
    return values.reduce((result, currValue) => result * currValue, 1);
  }

  static sub(value1: number, value2: number) {
    return value1 - value2;
  }
  static divide(value1: number, value2: number) {
    return value1 / value2;
  }

  static calc(operator: string, value1: number, value2: number) {
    if (SyntaxService.isPlus(operator)) {
      return this.add(value1, value2);
    }
    if (SyntaxService.isMinus(operator)) {
      return this.sub(value1, value2);
    }
    if (SyntaxService.isDivide(operator)) {
      return this.divide(value1, value2);
    }
    if (SyntaxService.isMultiplication(operator)) {
      return this.multiplicate(value1, value2);
    }
  }

  static isSupportedOperator(char) {
    return (
      SyntaxService.isMinus(char) ||
      SyntaxService.isPlus(char) ||
      SyntaxService.isMultiplication(char) ||
      SyntaxService.isDivide(char)
    );
  }

  static evaluate(expression: string[]): number {
    // Dijkstra's two-stack algorithm <https://gist.github.com/adnauseum/e443217890e6dfca182051c226854fa2>
    const valueStack = [];
    const operationStack = [];

    expression.forEach(
      (
        char /* [left parentheses | numeric value | operator | right parentheses] */
      ) => {
        const _number = parseInt(char, 10);
        const isNumber = !isNaN(_number);

        if (char === "(") {
          noop();
        } else if (isNumber) {
          valueStack.push(_number);
        } else if (this.isSupportedOperator(char)) {
          operationStack.push(char);
        } else if (char === ")") {
          while (operationStack.length !== 0) {
            const operator = operationStack.pop();
            const value2 = valueStack.pop();
            const value1 = valueStack.pop();
            valueStack.push(this.calc(operator, value1, value2));
          }
        } else {
          throw new Error("Syntax error!");
        }
      }
    );

    if (valueStack.length !== 1 && operationStack.length !== 0) {
      throw new Error("Syntax error!");
    }
    return valueStack[0];
  }
}
export { MathService };
