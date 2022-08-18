"use strict";
// type checking focuses on shpae that values have
// "duck typing" or "structural subtyping"
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    scoops: 2,
    instructions: 'Cup not cone, no toppings'
};
console.log(myIceCream.flavor);
function tooManyScoops(dessert) {
    return dessert.scoops >= 7 ? dessert.scoops + ' is too many scoops!' : 'Your order will be ready soon!';
}
console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5, instructions: "everything" }));
let newIceCream;
newIceCream = ['chocolate', 'vanilla', 'strawberry'];
let myString = newIceCream[0];
console.log(myString); // consoles chocolate
// by using an interface, you can define your own array type
// anyone who wants to work with that interface can apply it consistently
/////////////////////////////////
/*---- Interfaces & API ------*/
///////////////////////////////
// user interface to describe existing JS APIs and
// clarify function parameters & return types
// example
const fetchURL = 'https://jsonplaceholder.typicode.com/posts';
function fetchPosts(url) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch(url);
        let body = yield response.json();
        return body;
    });
}
function showPost() {
    return __awaiter(this, void 0, void 0, function* () {
        let posts = yield fetchPosts(fetchURL);
        // Display the contents of the first item in the response
        let post = posts[0];
        console.log("Post #", post.id);
        // If the userId is 1, then display a note that it's an administrator
        console.log("Author: " + (post.userId === 1 ? "Administrater" : post.userId.toString()));
        console.log("Title: " + post.title);
        console.log("Body: ", post.body);
    });
}
showPost();
