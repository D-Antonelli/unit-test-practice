import caesarCipher from "../js/caesar-cipher";

xtest("cipher text with 1 shift", () => {
    expect(caesarCipher(1, "abcdefghijklmnopqrstuvwxyz")).toMatch(
      /bcdefghijklmnopqrstuvwxyza/
    );
})

test("cipher text with 5 shift", () => {
    expect(caesarCipher(5, "attack at dawn")).toMatch(/fyyfhp fy ifbs/);
})

test("cipher text with 10 shift", () => {
    expect(caesarCipher(10, "defend the east wall of the castle")).toMatch(
      /nopoxn dro okcd gkvv yp dro mkcdvo/
    );
})

test("cipher text with more than 25 shifts returns same text", () => {
    expect(caesarCipher(26, "defend the east wall of the castle")).toMatch(
      /defend the east wall of the castle/
    );
});

test("returns case sensitive result", () => {
    expect(caesarCipher(12, "Release the Dragon")).toMatch(
      /Dqxqmeq ftq Pdmsaz/
    );
})

test("text with punctuation", () => {
    expect(caesarCipher(7, "release! the'. dragon")).toMatch(
      /ylslhzl! aol'. kyhnvu/
    );
});

test("numbers are not converted in a text", () => {
    expect(caesarCipher(2, "abc123")).toMatch(/cde123/);
});

test("shift 0 return unchanged text", () => {
    expect(caesarCipher(0, "abc")).toMatch(/abc/);
})

test("shift all letters by 1", () => {
    expect(caesarCipher(1, "zyxwvutsrqponmlkjihgfedcba")).toMatch(
      /azyxwvutsrqponmlkjihgfedcb/
    );
})