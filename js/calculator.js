class Calculator {
  constructor() {
    this.total = 0;
  }
  add(num) {
    return typeof num === "number" ? (this.total += num) : this.total;
  }
  subtract(num) {
    return typeof num === "number" ? (this.total -= num) : this.total;
  }
  divide(num) {
    if (num === 0) {
      throw new Error("Cannot divide by 0");
    }
    return typeof num === "number" ? (this.total /= num) : this.total;
  }
  multiply(num) {
    return typeof num === "number" ? (this.total *= num) : this.total;
  }

  reset() {
    return (this.total = 0);
  }
}

export default Calculator;
