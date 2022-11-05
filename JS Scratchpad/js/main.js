// strings
const myVariables = "Mathematics"
const myNumber = 42;
const myFloat = 42.0;
const myString = "42.341HELLO145";
const falseNumber = NaN;

console.log(myNumber === myFloat);
console.log(myNumber === myString);
console.log(myNumber === Number(myString));
console.log(Number(myString) + 3);
console.log(Number("Dave"));
console.log(Number(true));
console.log(Number(false));
console.log(Number.isInteger(myFloat));
console.log(Number.parseFloat(myString));
console.log(Number.parseFloat(myString).toFixed(2));
console.log(Number.parseInt(myString));
console.log(Number.isNaN(falseNumber));
console.log(isNaN("Nana"));




// String methods
/* console.log(myVariables.length);
console.log(typeof(myVariables));
console.log(typeof(myVariables.length));
console.log("charAt: ", myVariables.charAt(0));
console.log("indexOf: ", myVariables.indexOf("mat"));
console.log("lastIndexOf: ", myVariables.lastIndexOf("at"));
console.log("slice: ", myVariables.slice(5, 8));
console.log("slice: ", myVariables.slice(5));
console.log("slice: ", myVariables.slice(5, 2));
console.log("includes: ", myVariables.includes("mate"));
console.log("split: ", myVariables.split("e"));
console.log("split: ", myVariables.split(""));
console.log("split: ", "Matthew, Mark, Dave".split(", ")); */