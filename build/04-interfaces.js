"use strict";
// type checking focuses on shpae that values have
// "duck typing" or "structural subtyping"
// interface doesn't init or implement the properties declared within
// only job is to describe a type
// defines what code contract requires
// while a variable, function or class implements the interface
// and must satisfy that contract by providing required details
let employee = {
    firstName: "Pearl",
    lastName: "Wong",
    fullName() {
        return this.firstName + " " + this.lastName;
    }
};
let myIceCream = {
    flavor: "strawberry",
    scoops: 2
};
console.log(myIceCream.flavor);
function tooManyScoops(dessert) {
    return dessert.scoops >= 7 ? dessert.scoops + ' is too many scoops!' : 'Your order will be ready soon!';
}
console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5 }));
