// type checking focuses on shpae that values have
// "duck typing" or "structural subtyping"

// Interfaces fill role of naming these types
// defines a "code contract" within code

// use Interfaces to describe an object, naming,
// and parameterizing object's types
// can compose existing object types into new ones

interface ExampleEmployee {
    firstName: string,
    lastName: string;
    fullName(): string;
}

// interface doesn't init or implement the properties declared within
// only job is to describe a type
// defines what code contract requires
// while a variable, function or class implements the interface
// and must satisfy that contract by providing required details

let employee: ExampleEmployee = {
    firstName: "Pearl",
    lastName: "Wong",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

// employee.firstName = 10 // will throw a type error

// interfaces have no run-time representation
// they are a compile-time construct
// useful for documenting & validating required shape of properties,
// objects passed as parameters, and
// objects returend from functions
// --> you can catch errors & make sure
// --> you're passing the right parameters at compile time 
// --> instead of at run time

// can use interface to:
// 1. Create shorthand names for commonly used types
// 2. Drive consistency across set of objects b/c
// every objc that implements the interface will operate
// under the same type definitions
// 3. Describe existing JS APIs and clarify function parameters
// and return types. 

// type alias - definition of a type of data - only union or tuple
// type aliases can act like interfaces
// but type alias cannot be reopened to add 
// new properties whereas interfaces are
// always extendable.

interface IceCream {
    flavor: string;
    scoops: number;
    instructions: string;
}

let myIceCream: IceCream = {
    flavor: "strawberry",
    scoops: 2,
    instructions: 'Cup not cone, no toppings'
}
console.log(myIceCream.flavor)

function tooManyScoops(dessert: IceCream) {
    return dessert.scoops >= 7 ? dessert.scoops + ' is too many scoops!' : 'Your order will be ready soon!'
}

console.log(tooManyScoops({flavor: 'vanilla', scoops: 5, instructions: "everything"}))
