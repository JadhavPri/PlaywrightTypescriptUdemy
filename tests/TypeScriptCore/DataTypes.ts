// Boolean
let isDone: boolean = true;
let isEnabled: boolean = false;

console.log(isDone);  // true
console.log(isEnabled);  // false

// Number : int + float 
let num1: number = 0;
let num2: number = 123.45;

console.log(num1);  // 0
console.log(num2);  // 123.45

// String : Textual data in single & double quotes
let firstName: string = "Priyanka"
let lastName: string = "Jadhav"

console.log(firstName);  // Priyanka
console.log(lastName);   // Jadhav

// Any : Dynamic type that allows you to assign any type of variable 
// When you don't know the data in advance 
let dynamicValue: any = 4;
console.log(dynamicValue)  // 4
dynamicValue = "Priyanka"
console.log(dynamicValue)  // Priyanka

// Null and undefined : represents absence of a value & used to indicate a variable or a property is intentionally being empty or uninitialized 
// null : intentional absence r an empty value, often as a placeholder 
// undefined: used to represent an uninitalized or unintentionally missing values 

let nullValue: null = null;
let undefinedValue: undefined = undefined;
console.log(nullValue)  // null
console.log(undefinedValue)  // undefined
