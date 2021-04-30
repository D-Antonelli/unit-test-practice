import Calculator from "../js/calculator";

let calculator = new Calculator();

test("calculate", () => {
    expect(calculator.add(2)).toBe(2);
    expect(calculator.add(2)).toBe(4);
    expect(calculator.subtract(1)).toBe(3);
    expect(calculator.divide(3)).toBe(1);
    expect(calculator.multiply(10)).toBe(10);
    expect(calculator.add("a")).toBe(10);
    expect(calculator.add("10")).toBe(10);
    expect(calculator.add("word")).toBe(10);
    expect(calculator.reset()).toBe(0);
})

let calculatorTwo = new Calculator();

test("can not divide by 0", () => {
    expect(() => calculatorTwo.divide(0)).toThrow(Error);
})