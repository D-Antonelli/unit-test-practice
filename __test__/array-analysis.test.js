import analyze from "../js/array-analysis";

test("test object", () => {
  const { average, min, max, length } = analyze([1, 3, 5]);
  expect(average).toBe(3);
  expect(min).toBe(1);
  expect(max).toBe(5);
  expect(length).toBe(3);
});

test("average returns floating number", () => {
  const { average } = analyze([1, 7, 8, 11, 10]);
  expect(average).toBe(7.4);
});

test("returns min number", () => {
    const { min } = analyze([-1, 7, 8, 11, 10]);
    expect(min).toBe(-1);
})

test("returns floating number", () => {
    const { average } = analyze([3, 3, 5]);
    expect(average).toBeGreaterThanEqual(3.6);
})
