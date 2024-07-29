// 5 Types of  Arithmetic operators : Performs mathematical peration on numeric values 
// Addition, subtraction, division, Muliplication, Deivison, Modullus 

// Arithmetic Operators
// Syntax = let variable_name = value
// Syntax = let variable_name = operations
console.log('=========== Arithmetic Operators ===========');
let a = 4;
let b = 2;
let sum = a + b
let difference = a - b
let product = a * b 
let quotient = a / b
let reminder = a % b


console.log(`The sum is: ${sum}`); // 6

console.log(`The difference is: ${difference}`); // 2

console.log(`The product is: ${product}`); // 8

console.log(`The quotient is: ${quotient}`); // 2

console.log(`The reminder is: ${reminder}`); // 0

console.log();

// Comparison Operators
let x = 5;
let y = 10;

// Operations
// isEqual : checks value 
// isStrictEqual : checks value and data types
// 


let isEqual = x == y;
let isStrictEqual = x === y;
let isNotEqual = x != y;
let isGreaterThan = x > y;
let isLessThan = x < y;
let isGreaterOrEqual = x >= y;
let islessOrEqual = x <= y;

console.log('=========== Compariosn Operators ===========');

console.log(`is Equal to: ${isEqual}`);  // false

console.log(`isStrictEqual: ${isStrictEqual}`);  // false

console.log(`isNotEqual: ${isNotEqual}`);  // true

console.log(`isLessThan: ${isLessThan}`);  // true

console.log(`isGreaterOrEqual: ${isGreaterOrEqual}`); // false

console.log(`islessOrEqual: ${islessOrEqual}`);  // true

console.log();

console.log('=========== Logical Operators ===========');

let isTrue = true;
let isFalse = false;

let andResult = isTrue && isFalse;
let orResult = isTrue || isFalse;
let notResult = !isTrue;

console.log(`Logical &&: ${andResult}`); // false

console.log(`Logical or: ${orResult}`); // true

console.log(`Logical not: ${notResult}`); // false

console.log();

console.log('=========== Assignment Operators ===========');
// 6 types of Assignment operator : Assign values to variables
// Inl=clude shortcuts for performing operations and assignment in a single step 
let num = 5;
console.log(`NUm is: ${num}`)
num +=3;  // num is now 8 ( 5 + 3 )

console.log(`Adding 3: ${num} `)
num -=2;  // num is now 6 ( 8 - 2 )
console.log(`Subtracting 2: ${num} `)
num *=4;  // num is now 24 ( 6 * 4 )
console.log(`Multiplying 4: ${num} `)
num /=3;  // num is now 21 ( 24 - 3 )
console.log(`Dividing by 3 : ${num} `)
num %=5;  // num is now 1 ( 21 % 5 )
console.log(`Remainder of 5 : ${num} `)
console.log();


console.log('=========== Ternary Operators ===========');
let age = 20;

// True valye after ? & false value after : 
let message = age>=18 ? "Given age is greater than 18 so Adult" : "Given age is less than 18 so Minor"
console.log(message);