function addNumbers(x: number, y: number) {
  return x + y;
}
console.log(addNumbers(3, 6));

// declaring variable types
// enum - symbolic name for set of values
// treated as data types
// make for clearer, more readable code when meaningful names are used

enum ContractStatus {
  Permanent = 1,    // 1
  Temp, // 2
  Apprentice,   // 3
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus); // returns 2
console.log(ContractStatus[employeeStatus]) // returns Temp

// any & unknown types
// any - can rep any JS value with no constraints
// useful when you expect a value from 3rd party lib
// or user inputs where value is dynamic
// any allows you to reassign diff types of values

let anyValue: any = 10;
anyValue = 'Mateo';
anyValue = true;

// allows a property that doesn't exist for the type
// can call randomValue as a function
// can call a method that only applies to a string type

console.log(anyValue.name);  // Logs "undefined" to the console
anyValue();                  // Returns "randomValue is not a function" error
anyValue.toUpperCase();      // Returns "randomValue is not a function" error

// any => comes at a cost of type safety. Only use when necc

// unknown is similar to any
// any value is assignable to type unknown
// can't access any properties of an unknown type
// can't call or construct unknown type

let unknownValue: unknown = 10;
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
