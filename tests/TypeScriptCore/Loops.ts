/*

For loop 


3 parts : Initialization, condition, increment or decrement 

Initialization : To initialize a counter variable
Condition: The loop continues as long as this condition evaluates to true 
Increment / decrement : This updates the counter variable after each iteration

*/
console.log("Executing for loop")
for ( let i = 0; i < 5; i++){
    console.log(i);
}
console.log()
//  While loop
/*
while (condition){
// code to be executed in each iterations
}
*/
console.log("Executing while loop")
let count = 0;
while (count < 5){
    console.log(count);
    count++;
}
console.log()


/*
Do while loop Syntax

do
{
// code to be executed in each iterations
} while (condition);

*/
console.log("Executing do while loop")
let z = 5;
do{
    console.log(z);
    z++;
} while (z < 5);
console.log()

/*

Loop control statements

Typescript provides rwo loop control statements will allow you to modify the flow of the loop


-- Break : Terminates loop prematurely when a certain condition is met

*/
console.log("Executing break within for loop for vallue 5")
for (let i = 0; i<10; i ++){
    if (i == 5){
        break;    // Exit the loop when i is 5
    }
    console.log(i);
}
console.log()

/*

-- It skips the current iteration and moves to the next iteration

*/

console.log("Executing contniue within for loop for vallue 5")
for (let i = 0; i<10; i ++){
    if (i == 5){
        continue;    // Skip the loop when i is 5
    }
    console.log(i);
}
console.log()