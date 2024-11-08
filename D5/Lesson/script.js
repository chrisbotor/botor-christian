// Variables

//let name="John"
//const temp = 100;

// Outputting variables
//console.log(name)
//console.log(temp)


// Basic Syntax
//let x = 5;
//let y = 10;
//let sum = x + y;
//console.log(sum)



/*
Primitive types: These are the most basic data types in JavaScript:
Number: Represents numeric values. For example, 5, 3.14, -10.

String: Represents textual data enclosed in single ('') or double ("") quotes. For example, "Hello", 'JavaScript'.

Boolean: Represents either true or false (logical values).

Null: Represents the intentional absence of any object value.

Undefined: Represents an uninitialized or missing value.


*/

/*

console.log("Type of age:", typeof age);
console.log("Type of isStudent:", typeof isStudent);
console.log("Type of car:", typeof car);
console.log("Type of city:", typeof city)

*/

// Operators and Expressions
// Arithmetic Operators

let x = 5;
let y = 2;

let sum = x + y;
console.log(sum)

let difference = x - y;
console.log("Difference:", difference);

let product = x * y;
console.log("Product:", product);

let quotient = x / y;
console.log("Quotient:", quotient);

let remainder = x % y;
console.log("Remainder:", remainder);


// Assignment operator
let a = 10;
let b = 5;

a+=b;
console.log("a:",a)

a-=b;
console.log("a:",a)

a *= b;
console.log("a:", a);

a /= b;
console.log("a:", a);

// Comparison Operators
let p = 3;
let q = 6;

console.log("p>q", p>q);
console.log("p<q", p<q);
console.log("p>=q", p>=q);
console.log("p<=q", p<=q);
console.log("p==q", p==q);    
console.log("p===q", p===q);
console.log("p!==q", p!==q);

// Logical Operators
let sunny = true
let warm = false

// && and
// || or
// ! not 

console.log("true && false", sunny && warm)


// Control Structures

let age = 18;

if (age >= 18)  {
    console.log('You are eligible to vote')
}  else  {
    console.log('You are not eligible to vote')
}


// Loops

// while loop

let count = 1;

while (count <= 5)  {
    console.log("COUNT:",count);
    count++;
}

// do while loop

let i = 1

do {
    console.log("Do while count:", i)
    i++;
} while (i<=5)

 // For loop 
 
 for(let i=1; i<=5; i++)  {
    console.log('For loop count:', i);
 }


 alert("Hello");
 prompt("Enter Name:");

 let name = prompt("Enter Name")
 alert("Hello " +name);

 let number = prompt("Enter Number");
 alert(20 + number);
 