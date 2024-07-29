// Declare a function

console.log("======== Non Parameterized function ========")
function myFunc(){
    console.log('I\'m a function');
}

// Call a function
myFunc()
console.log()


console.log("======== Parameterized function ========")
// Parameterized function
function calculateTotal(price:number, quantity:number): number{
    return price*quantity;
}

console.log(calculateTotal(2,2), ": Value returned by the function");
console.log()


// Optional and default parameter
console.log("======== Optional Parameter ========")
function greet(name:string, greetMessage?:string){
    if(greetMessage){
        return `Hi ${name}, ${greetMessage}`
    }
    else{
        return `Hi ${name}`
    }
}

console.log(greet('Priyanka','Good Morning'), ": With optional parameter")
console.log(greet('Priyanka'), ": Without optional parameter");
console.log()

console.log("======== Default Parameter ========")

function adding(a:number, b:number=0) {
    return a +b;

}

console.log(adding(2, 2), "Printing values by overriding default parameter value");
console.log(adding(2), "Printing values by using the default parameter value");

console.log()

console.log("======== Default Parameter with return type ========")

function addnum(a:number, b:number=0): number {
    return a +b;

}

console.log(addnum(2, 2), "Printing values by overriding default parameter value");
console.log(addnum(2), "Printing values by using the default parameter value");

console.log()

console.log("======== Arrow Function ========")
const multiply = (a:number, b:number): number => a*b;
console.log(multiply(2,2), ": Value from arrow function")
console.log()

console.log("======== Type Function ========")
type MatchOperation = (a:number, b:number) => number;
let w = 2;
let v = 2;
const addNumbers:MatchOperation = (w, v) => w+v; 
console.log(addNumbers(w, v), "Printing values from type function");
