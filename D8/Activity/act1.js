// Task a: Calculate the square root of a given number
let number = 16;
let squareRoot = Math.sqrt(number);
console.log(`The square root of ${number} is ${squareRoot}`);

// Task b: Generate a random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(`Random number between 1 and 10: ${randomNumber}`);

// Task c: Convert a string representation of a number to an actual number
let stringNumber = "42";
let actualNumber = Number(stringNumber);
console.log(`Converted string "${stringNumber}" to number: ${actualNumber}`);

// Task d: Check if a value is not a number
let value = "hello";
let isNotANumber = isNaN(value);
console.log(`Is "${value}" not a number? ${isNotANumber}`);

// Task e: Convert a number to a string
let num = 123;
let numAsString = num.toString();
console.log(`Converted number ${num} to string: "${numAsString}"`);
