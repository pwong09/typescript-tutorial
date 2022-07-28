function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(3, 6));
// declaring variable types
// enum - symbolic name for set of values
// treated as data types
// make for clearer, more readable code when meaningful names are used
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
var employeeStatus = ContractStatus.Temp;
console.log(employeeStatus); // returns 2
console.log(ContractStatus[employeeStatus]); // returns Temp
// any & unknown types
// any - can rep any JS value with no constraints
// useful when you expect a value from 3rd party lib
// or user inputs where value is dynamic
// any allows you to reassign diff types of values
var anyValue = 10;
anyValue = 'Mateo';
anyValue = true;
// allows a property that doesn't exist for the type
// can call randomValue as a function
// can call a method that only applies to a string type
// console.log(anyValue.name);  // Logs "undefined" to the console
// anyValue();                  // Returns "randomValue is not a function" error
// anyValue.toUpperCase();      // Returns "randomValue is not a function" error
// any => comes at a cost of type safety. Only use when necc
// unknown is similar to any
// any value is assignable to type unknown
// can't access any properties of an unknown type
// can't call or construct unknown type
var unknownValue = 10;
unknownValue = true;
unknownValue = 'Pearl';
// console.log(unknownValue.name) // Error: Object is of type unknown
// unknownValue(); // Error: Object is of type unknown
// unknownValue.toUpperCase(); // Error: Object is of type unknown
// The core difference between any and unknown is 
// you are unable to interact with a variable of type unknown; 
// doing so generates a compiler error.
// any bypasses any compile - time checks, and the object is 
// evaluated at runtime; if the method or property exists 
// it will behave as expected.
// type assertion - keyword as
var randomValue = 10;
randomValue = true;
randomValue = "Mateo";
if (typeof randomValue === "string") { // type guard
    console.log(randomValue.toUpperCase()); //* Returns MATEO to the console.
}
else {
    console.log("Error - A string was expected here."); //* Returns an error message.
}
// union types
// restricts assignment of values to specified types
// uses vertical bar | to separate each type
var multiType;
multiType = 20;
multiType = true;
// multiType = "string"; // invalid
function add(x, y) {
    if (typeof x === 'number' && typeof y === 'number')
        return x + y;
    if (typeof x === 'string' && typeof y === 'string')
        return x.concat(y);
    throw new Error('Parameters must be same type as each other: numbers or strings');
}
console.log(add('one', 'two'));
console.log(add(1, 2));
console.log(add('one', 2));
