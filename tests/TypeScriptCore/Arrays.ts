/*
Fundamental data structure used to store and manipulate collections
Similar to Arrays in JAvaScript but come with added benefit of static typing which helps to catch type related errors during the development

Two ways to declare and initialize an array

*/

// Array Literal 
const fruits: string[] = ["apple", "Banana", "Cherry"];
console.log(fruits)

// Array constructor
const numbers:number[] = new Array(1,2,3,4,5);
console.log(numbers)

// Initialize an empty array
const emptyArray: string[] = []; 

// Access an array item
console.log(fruits[0]);
console.log(fruits[2]);

// Update value of an array
console.log(numbers[2], ": Current value of item 2")
numbers[2] = 0;
console.log(numbers[2], ": Updated value of item 2")

// Adding the element at the end of the array
console.log(numbers, ": Before pushing the element")
numbers.push(0)
console.log(numbers, ": After pushing the element")

// Pop removes the last element of the array
console.log(numbers, ": Before pop method the element")
numbers.pop()
console.log(numbers, ": After pop method element")
console.log(numbers[5])

// Using shift method
console.log(numbers, ": Before removing the first element")
numbers.shift();
console.log(numbers, ": Updated array")

// Unsift method
console.log(numbers, ": Before unsihfting the first element")
numbers.unshift(1);
console.log(numbers, ": After unshift")


// Slicing method
const slicedArray = numbers.slice(1, 4);
console.log(slicedArray, "Array after slicing with start & end index as 1 & 3")

// Map method
const doubleArray = numbers.map((num)=> num *2);
console.log(doubleArray, "Prinitng the value of the array with map function");

// Filter method
const filteredArray = numbers.filter((num) => num > 2 );
console.log(filteredArray)


// Read only array
const readOnlyArray: readonly number[] = [0,1,2,3,4]
//readOnlyArray[0] = -1;