import capitalize from "../js/capitalize";

test("capitalize a string", () => {
    expect(capitalize("john")).toMatch(/John/);   
})

test("word with capital letters return the same", () => {
    expect(capitalize("SPRING")).toMatch(/SPRING/);
})

test("do not accept numbers", () => {
    expect(() => capitalize(123)).toThrow("input is not string");
})

test("do not accept non-string values", () => {
  expect(() => capitalize(1.2)).toThrow("input is not string");
});

test("word start with non-letters return the same", () => {
    expect(capitalize(".myname")).toMatch(/.myname/);
})

test("word with single length", () => {
    expect(capitalize("a")).toMatch(/A/);
})






