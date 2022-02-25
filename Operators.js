'use strict';

//assignemnt 1
/*
let numOfDaysUntilWeekend = 2;
numOfDaysUntilWeekend -= 1;

1. Use console.log() to log the value just after the variable has been declared
2.  Use console.log() to log the value right after the value of the variable has been changed. 
3. Tell what it does 
*/

let numOfDaysUntilWeekend = 2;
console.log(numOfDaysUntilWeekend);
numOfDaysUntilWeekend -= 1;
console.log(numOfDaysUntilWeekend);
//

//assignemnt 2
//Addition to numbers
let x = 4;
(x+= 4);
console.log(x);

//assignemnt 3
//Subtraction to numbers
let x = 5;
(x -= 3);
console.log(x);
//assignemnt 4
//write two sentences in two variables and connect them together 
let hi = 'Good morning'
let day = 'Have a nice day'
console.log(hi + ' ' + day)


//assignemnt 5
//write two variables, one number and one string. add them together

let firstName = 'Laura'
let int = '21'
console.log(firstName + ' ' + int)

//assignemnt 6
//write the answears in the in a comment
let r = 15;
let s = 5;
let t = r + s; // 20
let u = r - s; // 10
let v = t / u; // 2
let x = r * v; // 30
let y = s % v; // 1

//assignemnt 7
//Why does it not write out? 
let r = 34;
let c = 1;
let x = r - 32 + c;
let y = r++ * 4;
if(x == 30 || y == 2 ){
 console.log("yeah you got it"); // the numbers don't match the equation
} 
//change a number in a variable, so it print out the text
let r = 34;
let c = 1;
let x = r - 32 + c;
let y = r++ * 4;
if(x == 30 || y == 2 ){ // change x to 3
 console.log("yeah you got it");
}


//assignemnt 8
//make two vaiables. One variable must contain a number and the other one must contain a prompt, 
//where the user can enter a number. Match the two number and print out the answear
//TIP: search prompt
let int = 1
let person = prompt('Write your name here')
console.log(int + ' ' + person)


//assignment 9
//write these numbers in the console and write the output. Explain you thing this happens
    0.1 + 0.2;
    0.1 + 0.2 === 0.3;
    3  - 1
    3  + 1
    '3' - 1 
    '3' + 1 
    '222' - -'111'
// the output is 333

//assignemnt 9
//Write a JavaScript program to determine whether a given year is a leap year 

// program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = prompt('Enter a year:');

checkLeapYear(year);

