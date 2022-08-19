// simplifies development of functions
// make them easier to troubleshoot
// enable type parameters and return values
// can make parameters required or optional

function addNumbers(x: number, y: number): number {
    return x + y;
}
addNumbers(1, 2);


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
let addNumbers2 = (x: number, y: number): number => x + y;
