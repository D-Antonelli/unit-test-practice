const caesarCipher = (shift, text) => {
  return Array.from(text)
    .reduce((acc, cur) => {
      if (cur.isLetter()) {
        return acc.concat(cur.encrypt(shift));
      } else {
        return acc.concat(cur);
      }
    }, [])
    .join("");
};

String.prototype.isLetter = function () {
  return this.isCapitalLetter() || this.isSmallLetter();
};

String.prototype.isCapitalLetter = function () {
  return this.length === 1 && this.charCodeAt(0) >= 65 && this.charCodeAt(0) <= 90;
};

String.prototype.isSmallLetter = function () {
  return this.length === 1 && this.charCodeAt(0) >= 97 && this.charCodeAt(0) <= 122;
};

String.prototype.encrypt = function (shift) {
  let result = "",
    currentCode = this.charCodeAt(0) + shift;
  if (this.isCapitalLetter()) {
    result = currentCode > 90 ? 64 + (currentCode % 90) : currentCode;
  } 
  else if(this.isSmallLetter()) {
    result = currentCode > 122 ? 96 + (currentCode % 122) : currentCode;
  }
  else {
      throw new Error("Not a letter");
  }
  return String.fromCharCode(result);
};

export default caesarCipher;
