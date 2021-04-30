import reverseString from "../js/reverse-string";

xtest("reverse a string", () => {
    expect(reverseString("hello")).toMatch(/olleh/);
})

xtest("reverse a string with number", () => {
    expect(reverseString("abc123")).toMatch(/321cba/);
})

xtest("throws error when input is not string", () => {
    expect(() => reverseString(123)).toThrow("input is not string");
})

xtest("test single length input", () => {
    expect(reverseString("a")).toMatch(/a/);
})

xtest("reverse sentence", () => {
    expect(reverseString("today is nice")).toMatch(/ecin si yadot/);
})

xtest("reverse a sentence with space", () => {
    expect(reverseString("today is   nice")).toMatch(/ecin   si yadot/);
})

