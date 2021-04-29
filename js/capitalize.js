const capitalize = word => {
  if (typeof word !== "string") {
    throw new Error("input is not string");
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export default capitalize;
