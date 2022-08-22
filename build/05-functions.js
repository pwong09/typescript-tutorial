"use strict";
// simplifies development of functions
// make them easier to troubleshoot
// enable type parameters and return values
// can make parameters required (assumed) or optional
function addNumbersTwo(x, y) {
    return x + y;
}
console.log(addNumbersTwo(1, 2));
// contextual typing
// total's type is inferred 
let total = function (input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
// using implicit return
let addNumbersThree = (x, y) => x + y;
function displayAlert(message) {
    alert("The message is " + message);
}
function sum(input) {
    let total = 0;
    for (let count = 0; count < input.length; count++) {
        if (isNaN(input[count])) {
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}
console.log(sum([1, 2, 3]));
// sum([1, "two", 3]); // error - TS checks each element in array
// define optional parameters by appending a question mark 
// (?) to the end of the parameter name
function sumAgain(x, y) {
    if (y === undefined) {
        return x;
    }
    else {
        return x + y;
    }
}
sumAgain(1, 2); // Returns 3
sumAgain(1); // Returns 1
// can assign default values to optional parameters
// default parameters come after required parameters
function anotherSum(x, y = 25) {
    return x + y;
}
anotherSum(1, 2); // returns 3
anotherSum(1); // returns 26
// rest parameters are boundless number of optional paremters
function addAllNumbers(x, ...args) {
    let total = x;
    for (let counter = 0; counter < args.length; counter++) {
        if (isNaN(args[counter])) {
            continue;
        }
        total += Number(args[counter]);
    }
    return total;
}
addAllNumbers(1, 2, 3, 4, 5, 6, 7); // returns 28
addAllNumbers(2); // returns 2
function displayMessage({ text, sender }) {
    console.log(`Message from ${sender}: ${text}`);
}
displayMessage({ sender: 'Pearl', text: 'Hello World!' });
let addThreeNumbers = (x, y, z) => x + y + z;
// addThreeNumbers(10, 20) // expects 3 arguments, got 2
// addThreeNumbers(10, 20, 30, 40) // expects 3 arguments, got 4
let addThreeNumbersAgain = (x, y, z) => {
    if (z === undefined) {
        return x + y;
    }
    else {
        return x + y + z;
    }
};
let subtractThreeNumbers = (x, y, z = 100) => x - y - z;
console.log(subtractThreeNumbers(10, 20));
console.log(subtractThreeNumbers(10, 20, 15));
