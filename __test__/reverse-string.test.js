import reverseString from "../js/reverse-string";

test("reverse a string", () => {
    expect(reverseString("hello")).toMatch(/olleh/);
})

test("reverse a string with number", () => {
    expect(reverseString("abc123")).toMatch(/321cba/);
})

test("throws error when input is not string", () => {
    expect(() => reverseString(123)).toThrow("input is not string");
})

test("test single length input", () => {
    expect(reverseString("a")).toMatch(/a/);
})

test("reverse sentence", () => {
    expect(reverseString("today is nice")).toMatch(/ecin si yadot/);
})

test("reverse a sentence with space", () => {
    expect(reverseString("today is   nice")).toMatch(/ecin   si yadot/);
})

