// If statements 

/*if (condition){

    // ode to be executed  if the condition is True
}
*/

let myAgeNow = 15;
if(myAgeNow >= 18){
    console.log("You're an adult")
}


// Else If statements 
/*
if (condition){

    // Code to be executed  if the condition is True
} else if (condition){

    // Code to be executed  if the condition is True
} 

*/

let Testnum = 1;
if (Testnum > 0 ){
    console.log('This is the positive number');
}
else if(Testnum == -1){
    console.log('Number is equal to 1');
}

// Else statements 

/*
if (condition){

    // Code to be executed  if the condition is True
} else {
 
    // Code to be executed  if the condition is True
}

*/
let Testnumber = 0;
if (Testnumber > 0 ){
    console.log('This is the positive number');
}
else if(Testnumber == 1){
    console.log('Number is equal to 1');
} else  {
    console.log('Number is equal to 0');
}

// nested condition

let checkNum = 1;
if(checkNum >= 0){
    if(checkNum===0){
        console.log('Number is zero')
    }
    else{
        console.log('Number is Positive')
    }
}
else{
    console.log('Number is negative')
}



