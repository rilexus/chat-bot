const noop = (): void => {};

enum SUPPORTED_OPERATORS {
  MINUS = "-",
  PLUS = "+",
  DIVIDE = "/",
  MULT = "*",
}

class SyntaxService {
  isMinus(char: string) {
    return char === SUPPORTED_OPERATORS.MINUS;
  }
  isPlus(char: string) {
    return char === SUPPORTED_OPERATORS.PLUS;
  }
  isDivide(char: string) {
    return char === SUPPORTED_OPERATORS.DIVIDE;
  }
  isMultiplication(char: string) {
    return char === SUPPORTED_OPERATORS.MULT;
  }

  concatNumbers(value: string): string[] {
    // split value string in to an array of distinct value elements: "(21-10)" => ["(", "22", "-", "10", ")"]
    return value
      .split("" /*split in individual char*/)
      .reduce((result, current) => {
        if (
          !isNaN(
            parseInt(current, 10)
          ) /* current char is a int number TODO: extend to floats */ &&
          !isNaN(
            parseInt(result[result.length - 1], 10)
          ) /* last char in res is number*/
        ) {
          const v = [
            ...result.slice(0, result.length - 1) /* remove last elem */,
          ];
          return [
            ...v,
            `${
              result[result.length - 1]
            }${current}` /* concat ongoing number to one string */,
          ];
        }
        return [...result, current];
      }, []);
  }

  parse(value: string): string[] {
    return this.concatNumbers(value);
  }
}

class BasicMath {
  add(...values) {
    return values.reduce((result, currValue) => result + currValue, 0);
  }

  multiplicate(...values) {
    return values.reduce((result, currValue) => result * currValue, 1);
  }

  sub(value1: number, value2: number) {
    return value1 - value2;
  }
  divide(value1: number, value2: number) {
    return value1 / value2;
  }

  applyOperator(operator: string, value1: number, value2: number) {
    if (operator === "+") {
      return this.add(value1, value2);
    }
    if (operator === "-") {
      return this.sub(value1, value2);
    }
    if (operator === "/") {
      return this.divide(value1, value2);
    }
    if (operator === "*") {
      return this.multiplicate(value1, value2);
    }
  }
}

class MathService extends BasicMath {
  constructor(private readonly syntaxService: SyntaxService) {
    super();
  }
  isSupportedOperator(char) {
    return (
      this.syntaxService.isMinus(char) ||
      this.syntaxService.isPlus(char) ||
      this.syntaxService.isMultiplication(char) ||
      this.syntaxService.isDivide(char)
    );
  }

  eval(expression: string[]): number {
    // Dijkstra's Two-Stack Algorithm
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
            valueStack.push(this.applyOperator(operator, value1, value2));
          }
        } else {
          throw new SyntaxError("Syntax error!");
        }
      }
    );
    if (valueStack.length !== 1 && operationStack.length !== 0) {
      throw new SyntaxError("Syntax error!");
    }
    return valueStack[0];
  }

  evaluate(expression: string): number {
    const parsedExpression = this.syntaxService.parse(expression);
    return this.eval(parsedExpression);
  }
}
export default new MathService(new SyntaxService());
export { MathService };
