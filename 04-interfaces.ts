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
// Optional properties may be omitted without raising an error.

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

// indexable types of interfaces have an index signature
// describes the type you can use to index into the object,
// along with corresponding return types when indexing

interface anotherIceCreamArray {
    [index: number]: string;
}
let newIceCream: anotherIceCreamArray; 
newIceCream = ['chocolate', 'vanilla', 'strawberry'];
let myString: string = newIceCream[0];
console.log(myString); // consoles chocolate

// by using an interface, you can define your own array type
// anyone who wants to work with that interface can apply it consistently

/////////////////////////////////
/*---- Interfaces & API ------*/
///////////////////////////////

// user interface to describe existing JS APIs and
// clarify function parameters & return types
// example

const fetchURL = 'https://jsonplaceholder.typicode.com/posts'
// Interface describing the shape of our json data

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
async function fetchPosts(url: string) {
    let response = await fetch(url);
    let body = await response.json();
    return body as Post[];
}
async function showPost() {
  let posts = await fetchPosts(fetchURL);
  // Display the contents of the first item in the response
  let post = posts[0];
  console.log("Post #", post.id);
  // If the userId is 1, then display a note that it's an administrator
  console.log(
    "Author: " + (post.userId === 1 ? "Administrater" : post.userId.toString())
  );
  console.log("Title: " + post.title);
  console.log("Body: ", post.body);
}

showPost();

