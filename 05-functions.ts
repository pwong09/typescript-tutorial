// simplifies development of functions
// make them easier to troubleshoot
// enable type parameters and return values
// can make parameters required (assumed) or optional

function addNumbersTwo(x: number, y: number): number {
    return x + y;
}
console.log(addNumbersTwo(1, 2));


// contextual typing
// total's type is inferred 
let total = function (input: number[]): number {
    let total: number = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}

// using implicit return
let addNumbersThree = (x: number, y: number): number => x + y;

function displayAlert(message: string) {
  alert("The message is " + message);
}

function sum(input: number[]): number {
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

function sumAgain(x: number, y?: number): number {
    if (y === undefined) {
        return x;
    } else {
        return x + y;
    }
}

sumAgain(1, 2); // Returns 3
sumAgain(1);    // Returns 1

// can assign default values to optional parameters
// default parameters come after required parameters

function anotherSum(x: number, y = 25): number {
    return x + y;
}

anotherSum(1, 2); // returns 3
anotherSum(1); // returns 26

// rest parameters are boundless number of optional paremters

function addAllNumbers(x: number, ...args: number[]): number {
    let total: number = x;
    for (let counter = 0; counter < args.length; counter++) {
        if (isNaN(args[counter])) {
            continue;
        }
        total += Number(args[counter]);  
    }
    return total;
}

addAllNumbers(1, 2, 3, 4, 5, 6, 7);  // returns 28
addAllNumbers(2);                    // returns 2
// addAllNumbers(2, 3, "three");        // flags error due to data type at design time, returns 5
