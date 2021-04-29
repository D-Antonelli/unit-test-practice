const reverseString = word => {
    if(typeof word !== "string") {
        throw new Error("input is not string");
    }
    return Array.from(word).reduceRight((acc, ele) => acc.concat(ele) ,[]).join("");
}

export default reverseString;