const arr = ["January", 23, "March", "December", 20, 30, "November", 33];

// a. Print all string values in a new array
const stringValues = arr.filter(item => typeof item === 'string');
console.log("String values:", stringValues);

// b. Print all number values in a new array
const numberValues = arr.filter(item => typeof item === 'number');
console.log("Number values:", numberValues);
