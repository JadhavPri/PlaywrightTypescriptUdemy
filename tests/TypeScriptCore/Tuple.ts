
// Create a tuple
let person: [string, number] = ['Alice', 25];

// Access a tuple
let userName: string = person[0];
let userAge: number = person[1];

console.log(userName)
console.log(userAge)

// Update the value of the tupe items
console.log(person, "Before updating the value")

person[0] = 'Priyanka'
person[1] = 33

console.log(person, "After updating the value")