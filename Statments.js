/*
    Assignment 1
    There is some errors in the codepen example from the lesson
    Copy the code from: https://codepen.io/dominoeffekten/pen/abVJGEr inside a 
HTML, CSS and JS file
    When the time is 20-22 the output should be: snacktime
*/

/*
    Assignment 2 - follow up from assignment 1
    Copy the code from: https://codepen.io/dominoeffekten/pen/abVJGEr inside a 
HTML, CSS and JS file
    Change the time, so it fits your day. It could be:
    8-14: School
    11: Lunch
    and so on..
*/
/*
    Assignment 3
    write a program where the user can write 2 numbers and display the larger one
*/
let x = prompt("Enter first number:");
let y = prompt("Enter second number:");
if (x > y) {
    console.log(x)
}
else if (x < y) {
console.log(y)
}


/*  
    Assignment 4
    make a variable with 3 numbers and sort them with help of JS conditions
*/
x = prompt("Enter number");
y = prompt("Enter number");
z = prompt("Enter number");

if (x < y && x < z ) {
    console.log(x);
    if (y < z) {
        console.log(y);
        console.log(z);
    } else {  
        console.log(z);
        console.log(y);
    }
} else if (y < z && y < x) {
    console.log(y);
    if (z < x) {
        console.log(z);
        console.log(x);
    } else { 
        console.log(x);
        console.log(z);
    }
} else { 
    console.log(z);
    if (x < y) {
        console.log(x);
        console.log(y);
    } else {
        console.log(y);
        console.log(x);
    }
}