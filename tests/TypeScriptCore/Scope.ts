// Global scope
console.log("=========== Printing Global var ============")
const globalVar = 0;

function randomfunction(){
     return globalVar;
}
console.log(randomfunction())
console.log()

console.log("=========== Printing Local var ============")
//Local Scope
function random2(){
    const localVar = 0;
    return localVar;
}
console.log(randomfunction())
console.log()

console.log("=========== Printing Block scope var ============")
//Block Scope
function random3(){
if(true){
    const blockVar = 30;
    return blockVar;
}
}
console.log(random3())
console.log()