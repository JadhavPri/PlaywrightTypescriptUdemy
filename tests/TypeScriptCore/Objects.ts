/*
 
Objects:

-- Object is a fundamental data type used to represent a collection of key value pairs where each key is a string or a number and each value can be of any data type, including even other objects

 */


// Declare an object
console.log("==== Creating an object, assigning value to it and Printing the value ====")
const personNew = {
    name: 'Priyanka',
    age: 33,
    isStudent: true
}

console.log(personNew, "Printing properties of object personNew")
console.log();

console.log("==== Creating an object with property type, assigning value to it and Printing the value ====")
const personNew2:{name: string,age: number, isStudent: boolean  } = {
    name: 'Priyanka',
    age: 33,
    isStudent: true
}

console.log(personNew2, "Printing properties of object personNew2")
console.log()

// How to access object properties
console.log(personNew2.age, ": Accessing age property of the object")
console.log(personNew2.name, ": Accessing name property of the object")
console.log(personNew2.isStudent, ": Accessing isStudent property of the object")
console.log()

const contactInfo = {
    email: "playwrightdemo@gmail.com",
    phone: "12345"
}


console.log("======== Creating merged object ========")
const mergedPerson = {...personNew, ...contactInfo}
console.log(mergedPerson);


// Creating a base object as a Type
console.log("======= Type / template =======")
 type Person = {
    name: string,
    age: number
 }

 const alice: Person ={
    name:'Alice',
    age: 25
 }
 console.log(alice, "The object properties created from type / template")