/*
switch(expression){
    case value1:
        // code to be executed if expression === value1
        break;
    case value1:
        // code to be executed if expression === value1
        break;
    default:
        // code to be executed if none of the case match
}

*/
let day = 0;
let dayName;

switch(day){
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    default:
        dayName = "Weekend";
}

console.log(`It's ${dayName}`);