import capitalize from "../js/capitalize";

xtest("capitalize a string", () => {
    expect(capitalize("john")).toMatch(/John/);   
})

xtest("word with capital letters return the same", () => {
    expect(capitalize("SPRING")).toMatch(/SPRING/);
})

xtest("do not accept numbers", () => {
    expect(() => capitalize(123)).toThrow("input is not string");
})

xtest("do not accept non-string values", () => {
  expect(() => capitalize(1.2)).toThrow("input is not string");
});

xtest("word start with non-letters return the same", () => {
    expect(capitalize(".myname")).toMatch(/.myname/);
})

xtest("word with single length", () => {
    expect(capitalize("a")).toMatch(/A/);
})






